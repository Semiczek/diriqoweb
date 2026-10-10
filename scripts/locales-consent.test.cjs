/* eslint-disable @typescript-eslint/no-require-imports -- Isolated TypeScript module tests without extra dependencies. */
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const cache = new Map()
function load(relative) {
 const filename = path.resolve(__dirname, '..', relative)
 if (cache.has(filename)) return cache.get(filename)
 const exports = {}; cache.set(filename, exports)
 const code = ts.transpileModule(fs.readFileSync(filename,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText
 vm.runInNewContext(code, {exports,require:name => name.startsWith('.') ? load(path.relative(path.resolve(__dirname,'..'), path.resolve(path.dirname(filename), name + '.ts'))) : require(name),URL})
 return exports
}
const {landingLocales, sortedLandingLocales, languageNames} = load('lib/landing/locales.ts')
const {detectLandingLocale} = load('lib/landing/detect-locale.ts')
const {parseConsent, CONSENT_MAX_AGE} = load('lib/landing/consent.ts')
test('browser negotiation respects quality, regional tags, zero quality, fallback and manual choice', () => {
 const cases = [
  ['es-MX,cs;q=0.8','es'],['fr-FR,uk-UA;q=0.8,en;q=0.5','uk'],['cs;q=0,en;q=1','en'],
  ['TR-tr;q=0.9,es;q=0.2','tr'],['vi;q=bogus,ro;q=0.7','ro'],['ar-AE','ar'],['sq-AL','sq'],
  ['de;q=0.3,sk;q=0.9','sk'],['xx,*;q=0.5','en'],[null,'en'],['hu;q=2,pl;q=0.5','pl'],
 ]
 for (const [header,expected] of cases) assert.equal(detectLandingLocale(header),expected,header)
 assert.equal(detectLandingLocale('ar','cs'),'cs')
 assert.equal(detectLandingLocale('es','../../bad'),'es')
})
test('all 13 languages have complete translated UI and legal notices, with flags', () => {
 const {landingCopy} = load('lib/landing/copy.ts')
 const {cookieCopy} = load('lib/landing/cookie-copy.ts')
 const {legalCopy} = load('lib/landing/legal-copy.ts')
 assert.equal(landingLocales.length,13)
 const shape = value => Array.isArray(value) ? Array.from(value,shape) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k,v])=>[k,shape(v)])) : typeof value
 for (const locale of landingLocales) {
  assert.deepEqual(shape(landingCopy[locale]),shape(landingCopy.cs),locale)
  assert.deepEqual(shape(cookieCopy[locale]),shape(cookieCopy.cs),locale)
  assert.deepEqual(shape(legalCopy[locale]),shape(legalCopy.cs),locale)
  assert.ok(landingCopy[locale].title.every(t=>t.length>0))
 }
 const sorted = [...landingLocales].sort((a,b)=>languageNames[a].localeCompare(languageNames[b],'en',{sensitivity:'base'}))
 assert.deepEqual([...sortedLandingLocales],sorted)
 for (const file of fs.readdirSync(path.join(__dirname,'../public/flags')).filter(f=>f.endsWith('.svg'))) {
  assert.doesNotMatch(fs.readFileSync(path.join(__dirname,'../public/flags',file),'utf8'),/<script|onload=|<foreignObject/)
 }
})
test('consent is explicit, versioned and expires; corrupted and future values cannot enable analytics', () => {
 const now = 1000000000000
 const encode = data => encodeURIComponent(JSON.stringify(data))
 assert.equal(parseConsent(encode({version:1,analytics:true,at:now}),now).analytics,true)
 assert.equal(parseConsent(encode({version:1,analytics:false,at:now}),now).analytics,false)
 for (const value of ['', '%xx', 'null', encode({version:1,analytics:'true',at:now}),encode({version:2,analytics:true,at:now}),encode({version:1,analytics:true,at:now+1}),encode({version:1,analytics:true,at:now-CONSENT_MAX_AGE*1000})]) assert.equal(parseConsent(value,now),null)
})
