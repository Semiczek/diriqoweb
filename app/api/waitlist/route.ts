import { createHmac } from 'node:crypto'
import { isIP } from 'node:net'
import { createClient } from '@supabase/supabase-js'
import { validateRegistration, PRIVACY_VERSION, NEWS_CONSENT_VERSION } from '@/lib/waitlist/schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
function config() {
 const url = process.env.NEXT_PUBLIC_SUPABASE_URL
 const key = process.env.SUPABASE_SERVICE_ROLE_KEY
 const salt = process.env.WAITLIST_RATE_LIMIT_SALT
 const enabled = process.env.WAITLIST_ENABLED === 'true'
 // Only trust Vercel's overwritten IP header; other hosts need a reviewed adapter.
 const supportedHost = process.env.VERCEL === '1' || process.env.NODE_ENV === 'development'
 if (!enabled || !url || !key || !salt || salt.length < 32 || !supportedHost) return null
 try { if (new URL(url).protocol !== 'https:') return null } catch { return null }
 return { url, key, salt }
}
function response(body: object, status = 200) {
 return Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '3600' } : {}) } })
}
export async function GET() { return response({ available: Boolean(config()) }) }
export async function POST(request: Request) {
 const url = new URL(request.url)
 const origin = request.headers.get('origin')
 const host = request.headers.get('host') || url.host
 try {
  const originUrl = new URL(origin || '')
  // Next may normalize request.url to its internal listener address. Host is
  // the actual browser destination; browsers cannot override it in fetch().
  if (originUrl.host !== host || !['http:', 'https:'].includes(originUrl.protocol) ||
      process.env.VERCEL === '1' && originUrl.protocol !== 'https:' ||
      request.headers.get('sec-fetch-site') === 'cross-site') return response({ code: 'origin' }, 403)
 } catch { return response({ code: 'origin' }, 403) }
 if (!request.headers.get('content-type')?.startsWith('application/json')) return response({ code: 'invalid' }, 415)
 const length = Number(request.headers.get('content-length') || 0)
 if (!Number.isFinite(length) || length < 0 || length > 4096) return response({ code: 'invalid' }, 413)
 const reader = request.body?.getReader()
 if (!reader) return response({ code: 'invalid' }, 400)
 let bytes = 0
 const chunks: Uint8Array[] = []
 try {
  while (true) {
   const chunk = await reader.read()
   if (chunk.done) break
   bytes += chunk.value.byteLength
   if (bytes > 4096) { await reader.cancel(); return response({ code: 'invalid' }, 413) }
   chunks.push(chunk.value)
  }
 } catch { return response({ code: 'invalid' }, 400) }
 const raw = new Uint8Array(bytes)
 let offset = 0
 for (const chunk of chunks) { raw.set(chunk, offset); offset += chunk.byteLength }
 let payload: unknown
 try { payload = JSON.parse(new TextDecoder().decode(raw)) } catch { return response({ code: 'invalid' }, 400) }
 const registration = validateRegistration(payload)
 if (!registration) return response({ code: 'invalid' }, 400)
 const settings = config()
 if (!settings) return response({ code: 'unavailable' }, 503)
 const ip = process.env.VERCEL === '1' ? request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() : '127.0.0.1'
 if (!ip || isIP(ip) === 0) return response({ code: 'unavailable' }, 503)
 const day = new Date().toISOString().slice(0, 10)
 const ipHash = createHmac('sha256', settings.salt).update(day + ':' + ip).digest('hex')
 try {
  const client = createClient(settings.url, settings.key, {
   auth: { persistSession: false, autoRefreshToken: false },
   global: { fetch: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(10000) }) },
  })
  const { data, error } = await client.rpc('diriqo_register_interest', {
   p_email: registration.email, p_industry: registration.industry, p_employees: registration.employees,
   p_interest: registration.interest, p_news_consent: registration.newsConsent,
   p_locale: registration.locale, p_ip_hash: ipHash, p_privacy_version: PRIVACY_VERSION, p_consent_version: NEWS_CONSENT_VERSION,
  })
  if (error || data !== 'saved' && data !== 'rate_limited') return response({ code: 'unavailable' }, 503)
  if (data === 'rate_limited') return response({ code: 'rate_limit' }, 429)
  return response({ ok: true })
 } catch { return response({ code: 'unavailable' }, 503) }
}
