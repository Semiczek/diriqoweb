import type { Metadata } from 'next'
import type { LocalePageProps } from '@/lib/marketing/page-utils'
import { getLandingLocale } from '@/lib/landing/page-utils'
import { legalOperator } from '@/lib/marketing/legal-documents'
import { landingCopy } from '@/lib/landing/copy'
import { privacyCopy } from '@/lib/landing/privacy'
import { landingAlternates } from '@/lib/landing/locales'
import { LandingHeader } from '@/components/landing/LandingHeader'
import { LandingFooter } from '@/components/landing/LandingPage'
import s from '@/components/landing/landing.module.css'
export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
 const locale = await getLandingLocale(params, '/predregistrace-soukromi')
 return { title: privacyCopy[locale].title, alternates: { canonical: '/' + locale + '/predregistrace-soukromi', languages: landingAlternates('/predregistrace-soukromi') } }
}
export default async function Privacy({ params }: LocalePageProps) {
 const locale = await getLandingLocale(params, '/predregistrace-soukromi')
 const c = landingCopy[locale]
 const p = privacyCopy[locale]
 return <div className={s.site} lang={locale}><a className={s.skip} href="#obsah">{c.skip}</a><div className={s.container}><LandingHeader copy={c} locale={locale}/></div><main className={s.legalContent + ' ' + s.container} id="obsah">
  <h1>{p.title}</h1><p>{p.controller}: {legalOperator.name}, {p.companyId} {legalOperator.registrationNumber}, {legalOperator.address}. <a href={'mailto:' + legalOperator.email}>{legalOperator.email}</a>.</p>
  {p.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
  <p><a href={'/' + (locale === 'sk' ? 'cs' : locale) + '/privacy'}>{p.policy}</a> · <a href="https://uoou.gov.cz/">ÚOOÚ</a></p><p><time dateTime="2026-10-10">{new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-10-10T12:00:00Z'))}</time> · <a href={'/' + locale + '#predregistrace'}>{c.back}</a></p>
 </main><LandingFooter locale={locale}/></div>
}
