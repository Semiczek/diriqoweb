'use client'
import { Analytics } from '@vercel/analytics/next'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { CONSENT_COOKIE, CONSENT_MAX_AGE, getConsentCookie, parseConsent } from '@/lib/landing/consent'
import { cookieCopy } from '@/lib/landing/cookie-copy'
import { isLandingLocale, localeDirection, type LandingLocale } from '@/lib/landing/locales'
import s from './landing.module.css'

const CHANGE = 'diriqo-cookie-choice'
const OPEN = 'diriqo-cookie-settings'
function subscribe(onChange: () => void) {
 window.addEventListener(CHANGE, onChange)
 window.addEventListener('focus', onChange)
 return () => { window.removeEventListener(CHANGE, onChange); window.removeEventListener('focus', onChange) }
}
const serverCookie = () => ''
const clientReady = () => true
const serverReady = () => false
function beforeSend(event: { type:'pageview' | 'event'; url:string }) {
 // Recheck for every event, including queued events and consent withdrawn in another tab.
 if (!parseConsent(getConsentCookie())?.analytics) return null
 try { const url = new URL(event.url); url.search = ''; url.hash = ''; return { ...event, url:url.href } } catch { return null }
}
export function CookieSettingsButton({ locale }: { locale:LandingLocale }) {
 return <button type="button" className={s.cookieSettingsLink} onClick={() => window.dispatchEvent(new Event(OPEN))}>{cookieCopy[locale].settings}</button>
}
export function CookiePreferences() {
 const pathname = usePathname()
 const pathLocale = pathname.split('/')[1]
 const locale = isLandingLocale(pathLocale) ? pathLocale : 'en'
 const c = cookieCopy[locale]
 const ready = useSyncExternalStore(subscribe, clientReady, serverReady)
 const value = useSyncExternalStore(subscribe, getConsentCookie, serverCookie)
 const choice = parseConsent(value)
 const [settings, setSettings] = useState(false)
 const [analytics, setAnalytics] = useState(false)
 const [error, setError] = useState(false)
 const panel = useRef<HTMLDivElement>(null)
 const opener = useRef<HTMLElement | null>(null)
 useEffect(() => {
  const open = () => {
   opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
   setAnalytics(Boolean(parseConsent(getConsentCookie())?.analytics)); setSettings(true); setError(false)
  }
  window.addEventListener(OPEN, open)
  return () => window.removeEventListener(OPEN, open)
 }, [])
 useEffect(() => { if (settings) panel.current?.focus() }, [settings])
 function close() { setSettings(false); opener.current?.focus() }
 function save(allowed: boolean) {
  const stored = encodeURIComponent(JSON.stringify({ version:1, analytics:allowed, at:Date.now() }))
  try { document.cookie = `${CONSENT_COOKIE}=${stored}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}` } catch { setError(true); return }
  if (getConsentCookie() !== stored) { setError(true); return }
  window.dispatchEvent(new Event(CHANGE)); setError(false); close()
  // Unload the existing analytics script and its listeners after withdrawal.
  if (choice?.analytics && !allowed) location.reload()
 }
 return <>
  {ready && choice?.analytics && <Analytics beforeSend={beforeSend}/>}
  {ready && (!choice || settings) && <div ref={panel} className={s.cookiePanel} lang={locale} dir={localeDirection(locale)} role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description" tabIndex={-1} onKeyDown={e => { if (e.key === 'Escape' && choice) close() }}>
   <div className={s.cookieCopy}><h2 id="cookie-title">{c.title}</h2><p id="cookie-description">{c.text}</p><div className={s.cookieLinks}><a href={'/' + locale + '/cookies'}>{c.cookies}</a><a href={'/' + locale + '/privacy'}>{c.privacy}</a></div></div>
   {settings && <div className={s.cookieOptions}><p>{c.essential}</p><label><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)}/>{c.analytics}</label></div>}
   <div className={s.cookieActions}><button type="button" onClick={() => save(false)}>{c.reject}</button><button type="button" onClick={() => save(true)}>{c.accept}</button>{settings ? <button type="button" onClick={() => save(analytics)}>{c.save}</button> : <button type="button" onClick={() => { setAnalytics(Boolean(choice?.analytics)); setSettings(true) }}>{c.settings}</button>}{settings && choice && <button type="button" onClick={close}>{c.close}</button>}</div>
   {error && <p role="alert">{c.error}</p>}
  </div>}
 </>
}
