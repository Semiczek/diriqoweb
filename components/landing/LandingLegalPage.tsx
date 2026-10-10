import { landingCopy } from '@/lib/landing/copy'
import { cookieCopy } from '@/lib/landing/cookie-copy'
import { legalCopy } from '@/lib/landing/legal-copy'
import { localeDirection, type LandingLocale } from '@/lib/landing/locales'
import { legalOperator } from '@/lib/marketing/legal-documents'
import { LandingHeader } from './LandingHeader'
import { LandingFooter } from './LandingPage'
import { CookieSettingsButton } from './CookiePreferences'
import s from './landing.module.css'
export type LandingLegalKind = 'privacy' | 'cookies' | 'gdpr'
export function LandingLegalPage({ locale, kind }: { locale:LandingLocale; kind:LandingLegalKind }) {
 const c = landingCopy[locale], labels = cookieCopy[locale], legal = legalCopy[locale]
 const sections = kind === 'cookies' ? [
  [labels.essential, legal.cookies],['Vercel Web Analytics',legal.analytics],[labels.settings,legal.choices],
 ] : kind === 'gdpr' ? [
  [legal.headings[4],legal.rights],['GDPR · ÚOOÚ',legal.complaint],[legal.headings[1],legal.purpose],
 ] : [
  [legal.headings[0],legal.data],[legal.headings[1],legal.purpose],[legal.headings[2],legal.retention],[legal.headings[3],legal.providers],[legal.headings[4],legal.rights + ' ' + legal.complaint],
 ]
 return <div className={s.site} lang={locale} dir={localeDirection(locale)}><a className={s.skip} href="#obsah">{c.skip}</a><div className={s.container}><LandingHeader locale={locale} copy={c}/></div><main id="obsah" className={s.legalContent + ' ' + s.container}>
  <h1>{labels[kind]}</h1><p>{legal.scope}</p>
  <p><strong>{labels.controller}: </strong><bdi>{legalOperator.name}, IČO {legalOperator.registrationNumber}, {legalOperator.address}</bdi>. <a href={'mailto:' + legalOperator.email}><bdi>{legalOperator.email}</bdi></a></p>
  <nav className={s.legalLinks} aria-label={labels.privacy}>{(['privacy','cookies','gdpr'] as const).map(key => <a key={key} href={'/' + locale + '/' + key} aria-current={key === kind ? 'page' : undefined}>{labels[key]}</a>)}</nav>
  {sections.map(([title,text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
  <p><CookieSettingsButton locale={locale}/></p>
  <p className={s.legalLinks}><a href="https://vercel.com/legal/privacy-policy" rel="noreferrer" target="_blank">Vercel · Privacy</a><a href="https://vercel.com/legal/dpa" rel="noreferrer" target="_blank">Vercel · DPA</a><a href="https://uoou.gov.cz/" rel="noreferrer" target="_blank">ÚOOÚ</a></p>
  <p>{labels.updated}: <time dateTime="2026-10-10">{new Intl.DateTimeFormat(locale, {dateStyle:'long',timeZone:'UTC'}).format(new Date('2026-10-10T12:00:00Z'))}</time> · <a href={'/' + locale}>{c.back}</a></p>
 </main><LandingFooter locale={locale}/></div>
}
