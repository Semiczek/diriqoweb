import Image from 'next/image'
import { landingCopy, type LandingLocale } from '@/lib/landing/copy'
import { HeroScene } from './HeroScene'
import { ModuleExplorer } from './ModuleExplorer'
import { LandingHeader } from './LandingHeader'
import { PosInterestLink, WaitlistForm } from './WaitlistForm'
import { Icon } from './Icon'
import { cookieCopy } from '@/lib/landing/cookie-copy'
import { localeDirection } from '@/lib/landing/locales'
import { CookieSettingsButton } from './CookiePreferences'
import s from './landing.module.css'

export function LandingPage({ locale }: { locale: LandingLocale }) {
 const c = landingCopy[locale]
 return <div className={s.site} lang={locale} dir={localeDirection(locale)}>
  <a className={s.skip} href="#obsah">{c.skip}</a>
  <div className={s.container}><LandingHeader copy={c} locale={locale} home/></div>
  <main id="obsah">
   <section className={s.hero + ' ' + s.container} aria-labelledby="hero-title">
    <div className={s.heroCopy}>
     <p className={s.eyebrow}><span className={s.liveDot}/>{c.eyebrow}</p>
     <h1 id="hero-title">{c.title[0]}<br/><span>{c.title[1]}</span></h1>
     <p className={s.heroIntro}>{c.intro}</p>
     <div className={s.heroActions}><a className={s.primaryButton} href="#predregistrace">{c.cta}<Icon name="arrow"/></a><a className={s.secondaryLink} href="#platforma">{c.explore}<span>↓</span></a></div>
     <p className={s.heroFootnote}><span/> {c.footnote}</p>
    </div>
    <HeroScene copy={c}/>
   </section>
   <div className={s.container}><div className={s.pillars}>{c.pillars.map((label, i) => <div key={label}><Icon name={['box','plus','globe'][i]}/><span>{label}</span></div>)}</div></div>
   <section className={s.platform + ' ' + s.container} id="platforma" aria-labelledby="platform-title">
    <p className={s.eyebrow}>{c.section}</p>
    <div className={s.sectionHeading}><h2 id="platform-title">{c.systemTitle}</h2><p>{c.systemText}</p></div>
    <ModuleExplorer copy={c}/>
    <div className={s.localNote}><Icon name="globe" width="32" height="32"/><div><h3>{c.localTitle}</h3><p>{c.localText}</p></div><span aria-hidden="true">{c.globalTag}</span></div>
   </section>
   <section className={s.assistantSection} id="diriqent" aria-labelledby="assistant-title">
    <div className={s.assistant + ' ' + s.container}>
     <div className={s.assistantArt}>
      <div className={s.assistantRing} aria-hidden="true"/><span className={s.orbitWord} aria-hidden="true">{c.magicTag}</span>
      <Image src="/coming-soon/diriqent-poster.png" alt={c.mascotAlt} width={600} height={600} sizes="(max-width: 760px) 85vw, 470px"/>
      <div className={s.assistantSignature}><span className={s.liveDot}/> DIRIQENT <span>{c.planned}</span></div>
     </div>
     <div className={s.assistantCopy}><p className={s.eyebrow}>{c.assistantEyebrow}</p><h2 id="assistant-title">{c.assistantTitle}</h2><p>{c.assistantText}</p><blockquote>„{c.quote}“</blockquote><a className={s.primaryButton} href={'/' + locale + '/diriqent'}>{c.meet}<Icon name="diagonal"/></a><small>{c.assistantNote}</small></div>
    </div>
   </section>
   <section className={s.pos + ' ' + s.container} id="diripos" aria-labelledby="pos-title">
    <div className={s.posCopy}><p className={s.eyebrow}>{c.posEyebrow}</p><h2 id="pos-title">{c.posTitle}</h2><p>{c.posText}</p><ul>{c.posItems.map(label => <li key={label}><Icon name="check" width="18" height="18"/>{label}</li>)}</ul><PosInterestLink label={c.posCta}/></div>
    <div className={s.posArt} role="img" aria-label={c.posDiagram}>
     <span className={s.status}><span/>{c.planned}</span>
     <div className={s.posConnections} aria-hidden="true"><div className={s.posSatellite}><Icon name="document"/>{c.posItems[0]}</div><div className={s.posCenter}><Icon name="pos" width="50" height="50"/><strong>Diri<span>POS</span></strong></div><div className={s.posSatellite}><Icon name="box"/>{c.cards[3]}</div><div className={s.posBase}>diriqo<span>↗</span></div></div>
     <p>{c.posStandalone}<br/><strong>{c.posTogether}</strong></p>
    </div>
   </section>
   <section className={s.signupSection} id="predregistrace" aria-labelledby="signup-title"><div className={s.signup + ' ' + s.container}>
    <div className={s.signupCopy}><p className={s.eyebrow}>{c.formEyebrow}</p><h2 id="signup-title">{c.formTitle}</h2><p>{c.formText}</p><div className={s.signupMark} aria-hidden="true"><Icon name="sparkle" width="110" height="110"/><span>diriqo<span>.</span></span></div></div>
    <WaitlistForm copy={c} locale={locale}/>
   </div></section>
  </main>
  <LandingFooter locale={locale}/>
 </div>
}

export function LandingFooter({ locale }: { locale: LandingLocale }) {
 const c = landingCopy[locale]
 return <footer className={s.footer + ' ' + s.container}><div className={s.footerTop}><a href={'/' + locale} className={s.brand}><span>diriqo<span className={s.brandDot}>.</span></span></a><nav aria-label={c.footerNavigation}><a href={'/' + locale + '#diripos'}>DiriPOS</a><a href={'/' + locale + '/diriqent'}>Diriqent</a><a href={'/' + locale + '/contact'}>{c.contact}</a><a href={'/' + locale + '/privacy'}>{c.privacyFooter}</a><a href={'/' + locale + '/cookies'}>{cookieCopy[locale].cookies}</a><a href={'/' + locale + '/gdpr'}>{cookieCopy[locale].gdpr}</a><CookieSettingsButton locale={locale}/></nav></div><div className={s.footerBottom}><span>© {new Date().getFullYear()} Diriqo</span><p>{c.footer}</p><span>{c.futureTag}</span></div></footer>
}

