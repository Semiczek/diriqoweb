import { landingCopy } from '@/lib/landing/copy'
import { contactCopy } from '@/lib/landing/contact-copy'
import { cookieCopy } from '@/lib/landing/cookie-copy'
import { localeDirection, type LandingLocale } from '@/lib/landing/locales'
import { landingOperator as operator } from '@/lib/landing/operator'
import { LandingHeader } from './LandingHeader'
import { LandingFooter } from './LandingPage'
import { Icon } from './Icon'
import s from './landing.module.css'
import i from './information.module.css'

export function LandingContactPage({ locale }: { locale: LandingLocale }) {
  const c = landingCopy[locale], contact = contactCopy[locale]
  return <div className={s.site} lang={locale} dir={localeDirection(locale)}>
    <a className={s.skip} href="#obsah">{c.skip}</a>
    <div className={s.container}><LandingHeader locale={locale} copy={c}/></div>
    <main id="obsah" className={`${s.container} ${i.main}`}>
      <a className={i.back} href={'/' + locale}>{c.back}</a>
      <div className={i.hero}>
        <p className={s.eyebrow}>{c.contact} · DIRIQO</p>
        <h1>{contact.title}</h1>
        <p>{contact.intro}</p>
      </div>
      <div className={i.grid}>
        <section className={i.panel}>
          <span className={i.label}><Icon name="sparkle"/> Diriqo · DiriPOS · Diriqent</span>
          <h2>{contact.productTitle}</h2>
          <p>{contact.productText}</p>
          <a className={i.email} href={'mailto:' + operator.email}><bdi>{operator.email}</bdi></a>
          <a className={`${s.primaryButton} ${i.action}`} href={'mailto:' + operator.email}>{contact.write}<Icon name="arrow"/></a>
        </section>
        <section className={i.panel}>
          <span className={i.label}><Icon name="globe"/>{contact.operator}</span>
          <h2><bdi>{operator.name}</bdi></h2>
          <p>{contact.holdingText}</p>
          <a className={`${s.secondaryLink} ${i.action}`} href={operator.holdingWebsite}>{contact.visit}<Icon name="diagonal"/></a>
          <dl className={i.details}>
            <div><dt>{contact.registration}</dt><dd><bdi>{operator.registrationNumber}</bdi></dd></div>
            <div><dt>{contact.address}</dt><dd><bdi>{operator.address}</bdi></dd></div>
            <div><dt>{contact.holdingContact}</dt><dd><a href={'mailto:' + operator.holdingEmail}><bdi>{operator.holdingEmail}</bdi></a></dd></div>
          </dl>
        </section>
      </div>
      <div className={i.note}><p>{contact.privacyText}</p><a href={'/' + locale + '/privacy'}>{cookieCopy[locale].privacy}</a></div>
    </main>
    <LandingFooter locale={locale}/>
  </div>
}
