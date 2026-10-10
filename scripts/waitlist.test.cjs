/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS test harness loads transpiled routes in an isolated VM without extra dependencies. */
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')
const vm = require('node:vm')
const path = require('node:path')
function load(file, imports, env) {
 const exports = {}
 const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText
 vm.runInNewContext(code, { exports, require: name => imports?.[name] || require(name), process: { env }, Response, Request, URL, TextDecoder, Uint8Array, AbortSignal, fetch, Buffer })
 return exports
}
const schema = load('lib/waitlist/schema.ts')
const valid = { email:'Test@Example.com', industry:'', employees:'', interest:'both', newsConsent:false, website:'', locale:'cs' }
const env = { NODE_ENV:'development', WAITLIST_ENABLED:'true', NEXT_PUBLIC_SUPABASE_URL:'https://test.example', SUPABASE_SERVICE_ROLE_KEY:'test-not-a-real-key', WAITLIST_RATE_LIMIT_SALT:'test-only-salt-at-least-32-characters' }
function api(result = { data:'saved', error:null }, settings = env) {
 let call
 const route = load('app/api/waitlist/route.ts', {
  '@/lib/waitlist/schema': schema,
  '@supabase/supabase-js': { createClient: () => ({ rpc: async (name, payload) => { call={name,payload}; if(result instanceof Error) throw result; return result } }) },
 }, settings)
 return { ...route, call: () => call }
}
function request(body = valid, headers = {}) {
 return new Request('http://localhost:4180/api/waitlist', { method:'POST', headers:{ origin:'http://localhost:4180', 'content-type':'application/json', ...headers }, body:typeof body === 'string' ? body : JSON.stringify(body) })
}
test('same browser origin is valid when Next normalizes its internal listener URL', async () => {
 const res=await api(undefined,{}).POST(request(valid,{origin:'http://127.0.0.1:4180',host:'127.0.0.1:4180'}))
 assert.equal(res.status,503)
})
test('normalizes email, leaves optional data null, never implies marketing consent', () => {
 const result=schema.validateRegistration(valid)
 assert.equal(result.email,'test@example.com'); assert.equal(result.industry,null); assert.equal(result.newsConsent,false)
})

test('preserves all six website languages through registration and rejects unsupported languages', async () => {
 for (const locale of ['cs','en','de','pl','sk','hu']) {
  const route = api()
  const result = await route.POST(request({...valid, locale}))
  assert.equal(result.status, 200)
  assert.equal(route.call().payload.p_locale, locale)
 }
 for (const locale of ['fr','xx','DE',null]) assert.equal(schema.validateRegistration({...valid,locale}),null)
})
test('rejects malformed values and honeypot without throwing', () => {
 for(const data of [null, [], {}, {...valid,email:'not-email'}, {...valid,email:'x'.repeat(255)}, {...valid,website:'spam'}, {...valid,interest:{toString:null}}, {...valid,locale:4}, {...valid,newsConsent:'true'}, {...valid,industry:'unknown'}, {...valid,employees:'999'}]) assert.equal(schema.validateRegistration(data),null)
})
test('disabled configuration honestly returns unavailable and never touches database', async () => {
 const route=api(undefined,{})
 assert.deepEqual(await (await route.GET()).json(), {available:false})
 assert.equal((await route.POST(request())).status,503); assert.equal(route.call(),undefined)
})
test('rejects cross-origin, malformed JSON, wrong media type and oversized streamed body', async () => {
 const route=api()
 for(const [req,code] of [[request(valid,{origin:'https://bad.example'}),403],[request('{'),400],[request(valid,{'content-type':'text/plain'}),415],[request('x'.repeat(5000)),413],[request(valid,{'content-length':'5000'}),413]]) assert.equal((await route.POST(req)).status,code)
 assert.equal(route.call(),undefined)
})
test('maps committed RPC success and passes only necessary fields, hashed IP and consent version', async () => {
 const route=api()
 const res=await route.POST(request({...valid,newsConsent:true}))
 assert.equal(res.status,200); assert.deepEqual(await res.json(),{ok:true})
 const call=route.call()
 assert.equal(call.name,'diriqo_register_interest'); assert.equal(call.payload.p_email,'test@example.com')
 assert.equal(call.payload.p_news_consent,true); assert.match(call.payload.p_ip_hash,/^[a-f0-9]{64}$/)
 assert.equal(call.payload.p_privacy_version,'2026-10-10')
 assert.equal(JSON.stringify(call).includes('127.0.0.1'),false)
})
test('rate limiting, persistence errors, unexpected results and network errors cannot show success', async () => {
 for(const [result,status] of [[{data:'rate_limited',error:null},429],[{data:null,error:{code:'test'}},503],[{data:null,error:null},503],[new Error('test failure'),503]]) {
  const route=api(result); const response=await route.POST(request())
  assert.equal(response.status,status); assert.notEqual((await response.json()).ok,true)
 }
})
test('production outside trusted Vercel host and missing trusted client IP fail closed', async () => {
 assert.equal((await api(undefined,{...env,NODE_ENV:'production'}).POST(request())).status,503)
 assert.equal((await api(undefined,{...env,NODE_ENV:'production',VERCEL:'1'}).POST(request(valid,{origin:'https://localhost:4180'}))).status,503)
 const route=api(undefined,{...env,NODE_ENV:'production',VERCEL:'1'})
 assert.equal((await route.POST(request(valid,{origin:'https://localhost:4180','x-vercel-forwarded-for':'192.0.2.5'}))).status,200)
})
