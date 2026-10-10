export const CONSENT_COOKIE = 'diriqo_consent_v1'
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60
export type Consent = { version:1; analytics:boolean; at:number }
export function parseConsent(value: string, now = Date.now()): Consent | null {
 try {
  const data = JSON.parse(decodeURIComponent(value))
  if (data?.version !== 1 || typeof data.analytics !== 'boolean' || typeof data.at !== 'number' || !Number.isFinite(data.at) || data.at > now || now - data.at >= CONSENT_MAX_AGE * 1000) return null
  return { version:1, analytics:data.analytics, at:data.at }
 } catch { return null }
}
export function getConsentCookie() {
 if (typeof document === 'undefined') return ''
 try { return document.cookie.split('; ').find(row => row.startsWith(CONSENT_COOKIE + '='))?.slice(CONSENT_COOKIE.length + 1) || '' } catch { return '' }
}
