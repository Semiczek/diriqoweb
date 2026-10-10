'use client'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import type { LandingCopy, LandingLocale } from '@/lib/landing/copy'
import { contactEmail } from '@/lib/marketing/content'
import { Icon } from './Icon'
import s from './landing.module.css'

export function WaitlistForm({ copy, locale }: { copy: LandingCopy; locale: LandingLocale }) {
 const [available, setAvailable] = useState<boolean | null>(null)
 const [interest, setInterest] = useState('both')
 const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
 const [error, setError] = useState('')
 const [details, setDetails] = useState({ email: '', industry: '', employees: '', news: false })
 const form = useRef<HTMLFormElement>(null)
 useEffect(() => {
  const abort = new AbortController()
  fetch('/api/waitlist', { signal: abort.signal }).then(r => r.json()).then(data => setAvailable(data.available === true)).catch(() => { if (!abort.signal.aborted) setAvailable(false) })
  const selectPos = () => setInterest('diripos')
  window.addEventListener('diriqo-interest-pos', selectPos)
  return () => { abort.abort(); window.removeEventListener('diriqo-interest-pos', selectPos) }
 }, [])
 async function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  if (!available || status === 'sending') return
  const data = new FormData(event.currentTarget)
  setStatus('sending')
  setError('')
  try {
   const response = await fetch('/api/waitlist', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(15000),
    body: JSON.stringify({ email: data.get('email'), industry: data.get('industry'), employees: data.get('employees'), interest, newsConsent: data.get('newsConsent') === 'on', website: data.get('website'), locale })
   })
   const result = await response.json()
   if (!response.ok || result.ok !== true) {
    const code = result.code as keyof typeof copy.errors
    throw new Error(copy.errors[code] || copy.errors.unavailable)
   }
   setStatus('success')
  } catch (err) {
   setError(err instanceof Error && Object.values(copy.errors).some(v => v === err.message) ? err.message : copy.errors.unavailable)
   setStatus('error')
  }
 }
 const selectedProduct = interest === 'both' ? 'Diriqo + DiriPOS' : interest === 'diripos' ? 'DiriPOS' : 'Diriqo'
 const subject = copy.interestSubject + selectedProduct
 const body = [subject, copy.email + ': ' + details.email, copy.industry + ': ' + details.industry, copy.employees + ': ' + details.employees, details.news ? copy.consent : '', '', copy.privacyLink + ': https://diriqo.com/' + locale + '/privacy'].filter(Boolean).join('\n')
 const mailto = 'mailto:' + contactEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
 function updateDetails() {
  if (!form.current) return
  const data = new FormData(form.current)
  const industryIndex = ['services','retail','hospitality','manufacturing','other'].indexOf(String(data.get('industry')))
  setDetails({ email: String(data.get('email') || ''), industry: industryIndex >= 0 ? copy.industries[industryIndex] : '', employees: String(data.get('employees') || ''), news: data.get('newsConsent') === 'on' })
 }
 return <div className={s.formCard}>
  {status === 'success' ? <div className={s.success} role="status"><span><Icon name="check" width="35" height="35"/></span><h3>{copy.success}</h3><p>{copy.successNote}</p></div> :
   <form onSubmit={submit} onChange={updateDetails} ref={form} aria-label={copy.formTitle}>
    <label className={s.field}>{copy.email}<span className={s.required}>*</span><input name="email" type="email" required maxLength={254} autoComplete="email" placeholder={copy.emailPlaceholder}/></label>
    <div className={s.fieldRow}>
     <label className={s.field}>{copy.industry}<span className={s.optional}>{copy.optional}</span><select name="industry" defaultValue=""><option value="">{copy.choose}</option>{copy.industries.map((label, i) => <option key={label} value={['services','retail','hospitality','manufacturing','other'][i]}>{label}</option>)}</select></label>
     <label className={s.field}>{copy.employees}<span className={s.optional}>{copy.optional}</span><select name="employees" defaultValue=""><option value="">{copy.choose}</option>{['1','2–10','11–50','51–200','201+'].map((label, i) => <option key={label} value={['1','2-10','11-50','51-200','201+'][i]}>{label}</option>)}</select></label>
    </div>
    <fieldset className={s.interests}><legend>{copy.interest}</legend><div>{copy.interests.map((label, i) => <label key={label}><input type="radio" name="interest" value={['diriqo','diripos','both'][i]} checked={interest === ['diriqo','diripos','both'][i]} onChange={e => setInterest(e.target.value)}/><span>{label}<Icon name="check" width="16" height="16"/></span></label>)}</div></fieldset>
    <div className={s.honeypot} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className={s.consent}><input type="checkbox" name="newsConsent"/><span>{copy.consent}</span></label>
    <p className={s.privacyNote}>{copy.privacy}: <a href={'/' + locale + '/privacy'}>{copy.privacyLink}</a>.</p>
    {error && <p role="alert" className={s.formError}>{error}</p>}
    {available === false ? <div className={s.formUnavailable}><p>{copy.unavailable}</p><a href={mailto} className={s.primaryButton}>{copy.emailCta}<Icon name="arrow"/></a><small>{copy.emailNote}</small></div> :
     <button type="submit" className={s.primaryButton} disabled={available !== true || status === 'sending'}>{status === 'sending' ? copy.sending : copy.launch}<Icon name="arrow"/></button>}
    <noscript><p>{copy.unavailable} <a href={'mailto:' + contactEmail}>{contactEmail}</a></p></noscript>
   </form>}
 </div>
}

export function PosInterestLink({ label }: { label: string }) {
 return <a className={s.textLink} href="#predregistrace" onClick={() => window.dispatchEvent(new Event('diriqo-interest-pos'))}>{label}<Icon name="arrow"/></a>
}
