'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  getLoginHref,
  getOnboardingCompanyHref,
  getSignupHref,
  localeLabels,
  localeShortLabels,
  locales,
  localizePath,
  stripLocaleFromPath,
  type Locale,
  type MarketingContent,
} from '@/lib/marketing/content'

type MarketingHeaderProps = {
  content: MarketingContent
  locale: Locale
}

const testingNotice: Record<Locale, { label: string; message: string; cta: string }> = {
  cs: {
    label: 'Testovací provoz',
    message:
      'Diriqo aktuálně testujeme. Software ještě není připravený pro ostré použití a požadavky zákazníků z webu zatím nebudou obslouženy. Můžete se ale přihlásit k předregistraci.',
    cta: 'Předregistrovat se',
  },
  en: {
    label: 'Testing mode',
    message:
      'Diriqo is currently being tested. The software is not ready for live production use yet and customer requests from the website will not be handled at this stage. You can still join the pre-registration list.',
    cta: 'Pre-register',
  },
  de: {
    label: 'Testbetrieb',
    message:
      'Diriqo wird aktuell getestet. Die Software ist noch nicht für den produktiven Einsatz bereit und Kundenanfragen über die Website werden derzeit nicht bearbeitet. Sie können sich aber vorregistrieren.',
    cta: 'Vorregistrieren',
  },
  pl: {
    label: 'Tryb testowy',
    message:
      'Diriqo jest obecnie testowane. Oprogramowanie nie jest jeszcze gotowe do pracy produkcyjnej, a zgłoszenia klientów z witryny nie będą na tym etapie obsługiwane. Możesz jednak zapisać się do prerejestracji.',
    cta: 'Zapisz się',
  },
  hu: {
    label: 'Tesztüzem',
    message:
      'A Diriqo jelenleg tesztelés alatt áll. A szoftver még nem áll készen éles használatra, és a weboldalról érkező ügyfélkéréseket ebben a szakaszban nem kezeljük. Előregisztrációra viszont feliratkozhat.',
    cta: 'Előregisztráció',
  },
  es: {
    label: 'Modo de prueba',
    message:
      'Diriqo está actualmente en pruebas. El software aún no está listo para uso real y las solicitudes de clientes desde la web no se atenderán en esta fase. Puedes apuntarte a la preinscripción.',
    cta: 'Preinscribirse',
  },
  it: {
    label: 'Modalità test',
    message:
      'Diriqo è attualmente in fase di test. Il software non è ancora pronto per l’uso operativo e le richieste dei clienti dal sito non verranno gestite in questa fase. Puoi comunque pre-registrarti.',
    cta: 'Pre-registrati',
  },
  fr: {
    label: 'Mode test',
    message:
      'Diriqo est actuellement en phase de test. Le logiciel n’est pas encore prêt pour une utilisation réelle et les demandes clients depuis le site ne seront pas traitées à ce stade. Vous pouvez toutefois vous préinscrire.',
    cta: 'Se préinscrire',
  },
}

export function MarketingHeader({ content, locale }: MarketingHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const currentPath = stripLocaleFromPath(pathname)
  const notice = testingNotice[locale]

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12)

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 overflow-visible border-b text-white backdrop-blur-2xl backdrop-saturate-150 transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-cyan-200/[0.24] bg-blue-950 shadow-[0_18px_60px_rgba(2,6,23,0.56),0_0_46px_rgba(37,99,235,0.18),0_0_38px_rgba(124,58,237,0.14)]'
          : 'border-cyan-100/[0.18] bg-blue-950 shadow-[0_14px_48px_rgba(2,6,23,0.46),0_0_42px_rgba(37,99,235,0.16),0_0_34px_rgba(124,58,237,0.14)]'
      }`}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(3, 10, 28, 0.96) 0%, rgba(5, 20, 53, 0.95) 46%, rgba(18, 17, 72, 0.94) 100%)'
          : 'linear-gradient(135deg, rgba(5, 16, 42, 0.94) 0%, rgba(7, 30, 72, 0.92) 50%, rgba(32, 24, 88, 0.9) 100%)',
        zIndex: 1000,
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 14% 0%, rgba(6, 182, 212, 0.24), transparent 34%), radial-gradient(circle at 82% 14%, rgba(124, 58, 237, 0.28), transparent 30%), linear-gradient(135deg, rgba(7, 24, 55, 0.74) 0%, rgba(10, 35, 82, 0.68) 50%, rgba(31, 29, 92, 0.64) 100%)',
          }}
        />
        <div className="absolute inset-x-6 top-1 h-px bg-gradient-to-r from-transparent via-white/[0.28] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.075)_100%)]" />
        <div
          className="absolute inset-0 opacity-85 motion-safe:animate-[diriqo-star-twinkle_5.5s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 8% 34%, rgba(168,85,247,0.72) 0 2px, transparent 3px), radial-gradient(circle at 18% 62%, rgba(6,182,212,0.42) 0 1px, transparent 2px), radial-gradient(circle at 37% 28%, rgba(168,85,247,0.34) 0 1px, transparent 2px), radial-gradient(circle at 61% 58%, rgba(99,102,241,0.42) 0 1px, transparent 2px), radial-gradient(circle at 83% 30%, rgba(168,85,247,0.46) 0 2px, transparent 3px), radial-gradient(circle at 94% 68%, rgba(6,182,212,0.34) 0 1px, transparent 2px)',
          }}
        />
        <div className="absolute left-[3%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-violet-500/[0.22] blur-2xl" />
        <div className="absolute left-[28%] top-0 h-16 w-24 rounded-full bg-blue-500/[0.13] blur-2xl" />
        <div className="absolute right-[17%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/[0.18] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.72] to-violet-300/[0.34]" />
      </div>

      <div className="relative mx-auto flex min-h-[4.65rem] w-full max-w-[112rem] items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[4.75rem] lg:px-8">
        <Link
          href={localizePath(locale, '/')}
          className="group flex w-40 shrink-0 items-center gap-3 rounded-xl py-2 transition-transform duration-200 hover:-translate-y-px"
          aria-label="Diriqo homepage"
        >
          <Image
            src="/diriqo-logo-icon.png"
            alt=""
            width={52}
            height={52}
            priority
            className="h-10 w-10 object-contain drop-shadow-[0_0_18px_rgba(6,182,212,0.22)] transition-transform duration-200 group-hover:scale-[1.03] sm:h-11 sm:w-11"
          />
          <span className="text-2xl font-black tracking-tight text-white sm:text-3xl">diriqo</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Main navigation">
          {content.navLinks.map((item) => (
            <Link
              key={item.href}
              href={localizePath(locale, item.href)}
              className="nav-link-polish flex w-[5.75rem] justify-center whitespace-nowrap rounded-lg px-2 py-2 text-[12px] font-semibold text-slate-200 transition duration-200 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_22px_rgba(6,182,212,0.12)] 2xl:w-28 2xl:text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden w-[420px] shrink-0 items-center justify-end gap-3 xl:flex 2xl:w-[460px]">
          <a
            href={getLoginHref(locale)}
            className="w-24 whitespace-nowrap rounded-lg border border-cyan-300/30 bg-white/[0.12] px-3 py-2.5 text-center text-sm font-black !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(6,182,212,0.10)] ring-1 ring-white/[0.06] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/55 hover:bg-white/[0.18] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(6,182,212,0.18)] 2xl:w-28"
          >
            {content.common.login}
          </a>
          <a
            href={getSignupHref(locale)}
            className="cta-light-sweep w-36 whitespace-nowrap rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-3 py-2.5 text-center text-sm font-black !text-white shadow-[0_14px_36px_rgba(37,99,235,0.32),0_0_26px_rgba(124,58,237,0.18)] ring-1 ring-white/[0.14] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_42px_rgba(6,182,212,0.32),0_0_38px_rgba(124,58,237,0.26)] active:translate-y-0 2xl:w-40"
          >
            {content.common.trial}
          </a>
          <LanguageDropdown locale={locale} currentPath={currentPath} />
        </div>

        <details data-marketing-menu className="group/menu relative z-[1010] xl:hidden">
          <summary
            className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/[0.15] bg-white/[0.08] text-white shadow-lg shadow-slate-950/20 transition hover:border-cyan-200/35 hover:bg-white/[0.14] [&::-webkit-details-marker]:hidden"
            aria-label={content.common.openMenu}
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 rounded-full bg-current transition group-open/menu:translate-y-2 group-open/menu:rotate-45" />
              <span className="h-0.5 w-5 rounded-full bg-current transition group-open/menu:opacity-0" />
              <span className="h-0.5 w-5 rounded-full bg-current transition group-open/menu:-translate-y-2 group-open/menu:-rotate-45" />
            </span>
          </summary>

          <div className="fixed inset-x-0 top-[4.65rem] z-[1005] max-h-[calc(100vh-4.65rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-slate-950/[0.96] px-4 py-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
              {content.navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={localizePath(locale, item.href)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/[0.08]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid gap-2 border-t border-white/10 pt-4">
                <a
                  href={getLoginHref(locale)}
                  className="rounded-lg border border-cyan-300/30 bg-white/[0.12] px-3 py-3 text-center font-black !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(6,182,212,0.10)] transition hover:bg-white/[0.18]"
                >
                  {content.common.login}
                </a>
                <a
                  href={getSignupHref(locale)}
                  className="cta-light-sweep rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-3 py-3 text-center font-black !text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 active:scale-[0.99]"
                >
                  {content.common.trial}
                </a>
                <LanguageDropdown locale={locale} currentPath={currentPath} mobile />
              </div>
            </nav>
          </div>
        </details>
      </div>
      <div className="relative border-t border-red-300/35 bg-red-950/90 px-4 py-2.5 text-white shadow-[0_16px_38px_rgba(127,29,29,0.28)] sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[112rem] flex-col gap-2 text-sm leading-snug lg:flex-row lg:items-center lg:justify-center lg:gap-3">
          <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-red-200/45 bg-red-500/20 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-red-50">
            {notice.label}
          </span>
          <p className="max-w-5xl font-semibold text-red-50/95">{notice.message}</p>
          <a
            href={getSignupHref(locale)}
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-white/25 bg-white px-3.5 py-1.5 text-xs font-black text-red-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-50"
          >
            {notice.cta}
          </a>
        </div>
      </div>
    </header>
  )
}

function LanguageDropdown({
  locale,
  currentPath,
  mobile = false,
}: {
  locale: Locale
  currentPath: string
  mobile?: boolean
}) {
  const languageHref = (item: Locale) => {
    if (currentPath === '/register') return getSignupHref(item)
    if (currentPath === '/login') return getLoginHref(item)
    if (currentPath === '/onboarding/company') return getOnboardingCompanyHref(item)
    return localizePath(item, currentPath)
  }

  return (
    <details
      data-language-dropdown
      className={mobile ? 'group/language relative pt-2' : 'group/language relative w-44 2xl:w-48'}
    >
      <summary
        className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-3 rounded-lg border border-white/[0.16] bg-white/[0.09] p-1.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_30px_rgba(2,6,23,0.24)] ring-1 ring-white/[0.05] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/[0.14] group-open/language:border-cyan-200/40 group-open/language:bg-white/[0.13] group-open/language:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_34px_rgba(6,182,212,0.14)] [&::-webkit-details-marker]:hidden"
        aria-haspopup="menu"
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="inline-flex h-8 min-w-9 items-center justify-center rounded-md bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_60%,#06b6d4_100%)] px-2 text-xs font-black !text-white shadow-md shadow-blue-500/20">
            {localeShortLabels[locale]}
          </span>
          <span className="truncate text-sm font-black text-white">{localeLabels[locale]}</span>
        </span>
        <svg
          className="mr-1 h-4 w-4 text-cyan-100 transition-transform group-open/language:rotate-180"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>

      <div
        className={`z-50 overflow-y-auto overscroll-contain rounded-xl border border-cyan-100/20 bg-[#050816]/[0.96] p-2 shadow-2xl shadow-slate-950/70 ring-1 ring-white/10 backdrop-blur-xl ${
          mobile ? 'mt-2 max-h-[calc(100vh-9rem)]' : 'absolute right-0 top-full mt-2 max-h-[70vh] w-64'
        }`}
        style={{ zIndex: 1010, WebkitOverflowScrolling: 'touch' }}
        role="menu"
      >
        <div className="grid gap-1">
          {locales.map((item) => (
            <Link
              key={item}
              href={languageHref(item)}
              className={`flex items-center justify-between gap-6 rounded-lg px-3.5 py-2.5 text-sm font-black transition ${
                item === locale
                  ? 'bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_60%,#06b6d4_100%)] !text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-100 hover:bg-white/10 hover:text-white'
              }`}
              role="menuitem"
            >
              <span className="truncate">{localeLabels[item]}</span>
              <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.08] px-2 py-1 text-xs opacity-90">
                {localeShortLabels[item]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </details>
  )
}
