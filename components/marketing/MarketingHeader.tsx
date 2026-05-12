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

export function MarketingHeader({ content, locale }: MarketingHeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const currentPath = stripLocaleFromPath(pathname)

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
        zIndex: 120,
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

        <nav className="hidden flex-1 items-center justify-center gap-1 2xl:flex" aria-label="Main navigation">
          {content.navLinks.map((item) => (
            <Link
              key={item.href}
              href={localizePath(locale, item.href)}
              className="nav-link-polish flex w-28 justify-center whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-semibold text-slate-200 transition duration-200 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_22px_rgba(6,182,212,0.12)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden w-[460px] shrink-0 items-center justify-end gap-3 2xl:flex">
          <a
            href={getLoginHref(locale)}
            className="w-28 whitespace-nowrap rounded-lg border border-cyan-300/30 bg-white/[0.12] px-3 py-2.5 text-center text-sm font-black !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_28px_rgba(6,182,212,0.10)] ring-1 ring-white/[0.06] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/55 hover:bg-white/[0.18] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(6,182,212,0.18)]"
          >
            {content.common.login}
          </a>
          <a
            href={getSignupHref(locale)}
            className="cta-light-sweep w-40 whitespace-nowrap rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-3 py-2.5 text-center text-sm font-black !text-white shadow-[0_14px_36px_rgba(37,99,235,0.32),0_0_26px_rgba(124,58,237,0.18)] ring-1 ring-white/[0.14] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_42px_rgba(6,182,212,0.32),0_0_38px_rgba(124,58,237,0.26)] active:translate-y-0"
          >
            {content.common.trial}
          </a>
          <LanguageDropdown locale={locale} currentPath={currentPath} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.15] bg-white/[0.08] text-white shadow-lg shadow-slate-950/20 transition hover:border-cyan-200/35 hover:bg-white/[0.14] 2xl:hidden"
          aria-label={open ? content.common.closeMenu : content.common.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/[0.96] px-4 py-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl 2xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {content.navLinks.map((item) => (
              <Link
                key={item.href}
                href={localizePath(locale, item.href)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/[0.08]"
                onClick={() => setOpen(false)}
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
              <LanguageDropdown
                locale={locale}
                currentPath={currentPath}
                mobile
                onNavigate={() => setOpen(false)}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

function LanguageDropdown({
  locale,
  currentPath,
  mobile = false,
  onNavigate,
}: {
  locale: Locale
  currentPath: string
  mobile?: boolean
  onNavigate?: () => void
}) {
  const [languageOpen, setLanguageOpen] = useState(false)
  const languageHref = (item: Locale) => {
    if (currentPath === '/register') return getSignupHref(item)
    if (currentPath === '/login') return getLoginHref(item)
    if (currentPath === '/onboarding/company') return getOnboardingCompanyHref(item)
    return localizePath(item, currentPath)
  }

  return (
    <div className={mobile ? 'relative pt-2' : 'relative w-48'}>
      <button
        type="button"
        className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-white/[0.16] bg-white/[0.09] p-1.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_30px_rgba(2,6,23,0.24)] ring-1 ring-white/[0.05] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/[0.14] ${
          languageOpen ? 'border-cyan-200/40 bg-white/[0.13] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_34px_rgba(6,182,212,0.14)]' : ''
        }`}
        aria-haspopup="menu"
        aria-expanded={languageOpen}
        onClick={() => setLanguageOpen((value) => !value)}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="inline-flex h-8 min-w-9 items-center justify-center rounded-md bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_60%,#06b6d4_100%)] px-2 text-xs font-black !text-white shadow-md shadow-blue-500/20">
            {localeShortLabels[locale]}
          </span>
          <span className="truncate text-sm font-black text-white">{localeLabels[locale]}</span>
        </span>
        <svg
          className={`mr-1 h-4 w-4 text-cyan-100 transition-transform ${languageOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {languageOpen ? (
        <div
          className={`z-50 max-h-[70vh] overflow-y-auto rounded-xl border border-cyan-100/20 bg-[#050816]/[0.96] p-2 shadow-2xl shadow-slate-950/70 ring-1 ring-white/10 backdrop-blur-xl ${
            mobile ? 'mt-2' : 'absolute right-0 top-full mt-2 w-64'
          }`}
          style={{ zIndex: 140 }}
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
                onClick={() => {
                  setLanguageOpen(false)
                  onNavigate?.()
                }}
              >
                <span className="truncate">{localeLabels[item]}</span>
                <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.08] px-2 py-1 text-xs opacity-90">
                  {localeShortLabels[item]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
