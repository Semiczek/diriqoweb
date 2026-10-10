'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { LandingCopy, LandingLocale } from '@/lib/landing/copy'
import { sortedLandingLocales, languageNames, languageCodes, localeDirection, LOCALE_COOKIE } from '@/lib/landing/locales'
import { Flag } from './Flag'
import { Icon } from './Icon'
import s from './landing.module.css'

export function LandingHeader({ copy, locale, home = false }: { copy: LandingCopy; locale: LandingLocale; home?: boolean }) {
 const [open, setOpen] = useState(false)
 const [languageOpen, setLanguageOpen] = useState(false)
 const languageButton = useRef<HTMLButtonElement>(null)
 const pathname = usePathname()
 const menuButton = useRef<HTMLButtonElement>(null)
 useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = localeDirection(locale) }, [locale])
 const prefix = home ? '' : '/' + locale
 return <header className={s.header} onKeyDown={e => {
  if (e.key !== 'Escape') return
  if (languageOpen) { setLanguageOpen(false); languageButton.current?.focus() }
  else if (open) { setOpen(false); menuButton.current?.focus() }
 }}>
  <a href={'/' + locale} className={s.brand} aria-label="Diriqo">
   <Image src="/diriqo-logo-icon.png" alt="" width={40} height={40}/><span>diriqo<span className={s.brandDot}>.</span></span>
  </a>
  <nav className={s.desktopNav} aria-label={copy.navigation}>
   {copy.nav.map((label, i) => <a key={label} href={prefix + ['#platforma','#diripos','#diriqent'][i]}>{label}</a>)}
  </nav>
  <div className={s.headerActions}>
   <div className={s.language} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setLanguageOpen(false) }}>
    <button ref={languageButton} type="button" className={s.languageButton} aria-label={copy.language + ': ' + languageNames[locale]} aria-expanded={languageOpen} aria-controls="landing-languages" onClick={() => { setLanguageOpen(!languageOpen); setOpen(false) }}>
     <Flag locale={locale}/>{languageCodes[locale]}<span aria-hidden="true">⌄</span>
    </button>
    {languageOpen && <nav className={s.languageMenu} id="landing-languages" aria-label={copy.language}>
     {sortedLandingLocales.map(lang => <Link key={lang} href={'/' + lang + pathname.slice(locale.length + 1)} lang={lang} hrefLang={lang} aria-current={locale === lang ? 'page' : undefined} onClick={() => {
      document.cookie = `${LOCALE_COOKIE}=${lang}; Path=/; Max-Age=15552000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
      setLanguageOpen(false)
     }}>
      <Flag locale={lang}/><bdi>{languageNames[lang]}</bdi><span aria-hidden="true">{languageCodes[lang]}</span>
     </Link>)}
    </nav>}
   </div>
   <a className={s.navCta} href={prefix + '#predregistrace'}>{copy.launch}<Icon name="diagonal" width="17" height="17"/></a>
   <button ref={menuButton} className={s.menuToggle} type="button" aria-expanded={open} aria-controls="landing-menu" aria-label={open ? copy.close : copy.menu} onClick={() => { setOpen(!open); setLanguageOpen(false) }}><Icon name={open ? 'close' : 'menu'}/></button>
  </div>
  {open && <nav className={s.mobileNav} id="landing-menu" aria-label={copy.menu}>
   {copy.nav.map((label, i) => <a key={label} href={prefix + ['#platforma','#diripos','#diriqent'][i]} onClick={() => setOpen(false)}>{label}<Icon name="arrow"/></a>)}
   <a href={prefix + '#predregistrace'} onClick={() => setOpen(false)}>{copy.launch}<Icon name="arrow"/></a>
  </nav>}
 </header>
}
