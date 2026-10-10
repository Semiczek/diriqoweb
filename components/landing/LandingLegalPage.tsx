import { landingCopy } from '@/lib/landing/copy'
import { contactCopy } from '@/lib/landing/contact-copy'
import { cookieCopy } from '@/lib/landing/cookie-copy'
import { legalCopy } from '@/lib/landing/legal-copy'
import { localeDirection, type LandingLocale } from '@/lib/landing/locales'
import { landingOperator as operator } from '@/lib/landing/operator'
import { LandingHeader } from './LandingHeader'
import { LandingFooter } from './LandingPage'
import { CookieSettingsButton } from './CookiePreferences'
import s from './landing.module.css'
import i from './information.module.css'

export type LandingLegalKind = 'privacy' | 'cookies' | 'gdpr'
export function LandingLegalPage({ locale, kind }: { locale: LandingLocale; kind: LandingLegalKind }) {
  const c = landingCopy[locale], labels = cookieCopy[locale], legal = legalCopy[locale], contact = contactCopy[locale]
  const sections = kind === 'cookies' ? [
    [labels.essential, legal.cookies], ['Vercel Web Analytics', legal.analytics], [labels.settings, legal.choices],
  ] : kind === 'gdpr' ? [
    [legal.headings[4], legal.rights], ['GDPR · ÚOOÚ', legal.complaint], [legal.headings[1], legal.purpose],
  ] : [
    [legal.headings[0], legal.data], [legal.headings[1], legal.purpose], [legal.headings[2], legal.retention],
    [legal.headings[3], legal.providers], [legal.headings[4], legal.rights + ' ' + legal.complaint],
  ]
  return <div className={s.site} lang={locale} dir={localeDirection(locale)}>
    <a className={s.skip} href="#obsah">{c.skip}</a>
    <div className={s.container}><LandingHeader locale={locale} copy={c}/></div>
    <main id="obsah" className={s.container + ' ' + i.main}>
      <a className={i.back} href={'/' + locale}>{c.back}</a>
      <div className={i.hero}>
        <p className={s.eyebrow}>DIRIQO · {labels.privacy}</p>
        <h1>{labels[kind]}</h1><p>{legal.scope}</p>
      </div>
      <div className={i.legalLayout}>
        <aside className={i.sidebar}>
          <nav aria-label={labels.privacy}>
            {(['privacy', 'cookies', 'gdpr'] as const).map(key => <a key={key} href={'/' + locale + '/' + key} aria-current={key === kind ? 'page' : undefined}>{labels[key]}</a>)}
          </nav>
          <span className={i.label}>{labels.controller}</span>
          <strong><bdi>{operator.name}</bdi></strong>
          <address>
            {contact.registration}: <bdi>{operator.registrationNumber}</bdi><br/>
            <bdi>{operator.address}</bdi><br/>
            <a href={'mailto:' + operator.email}><bdi>{operator.email}</bdi></a>
          </address>
          <a className={i.contactLink} href={'/' + locale + '/contact'}>{c.contact} ↗</a>
        </aside>
        <div className={i.sections}>
          {sections.map(([title, text], index) => <section className={i.section} key={title}>
            <h2><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{title}</h2><p>{text}</p>
          </section>)}
          <CookieSettingsButton locale={locale}/>
          <p className={s.legalLinks}>
            <a href="https://vercel.com/legal/privacy-policy" rel="noreferrer" target="_blank">Vercel · Privacy</a>
            <a href="https://vercel.com/legal/dpa" rel="noreferrer" target="_blank">Vercel · DPA</a>
            <a href="https://uoou.gov.cz/" rel="noreferrer" target="_blank">ÚOOÚ</a>
          </p>
          <p className={i.updated}>{labels.updated}: <time dateTime="2026-10-10">{new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-10-10T12:00:00Z'))}</time></p>
        </div>
      </div>
    </main>
    <LandingFooter locale={locale}/>
  </div>
}
