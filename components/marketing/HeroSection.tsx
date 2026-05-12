import Link from 'next/link'

import { getSignupHref, localizePath, type Locale, type MarketingContent } from '@/lib/marketing/content'
import { DashboardMockup } from './DashboardMockup'

type HeroSectionProps = {
  content: MarketingContent
  locale: Locale
}

export function HeroSection({ content, locale }: HeroSectionProps) {
  return (
    <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] text-white">
      <style>
        {`
          @media (min-width: 1024px) {
            .diriqo-hero-grid {
              grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
            }
          }
        `}
      </style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="hero-breathing-glow absolute -inset-x-10 -top-28 h-[30rem]"
          style={{
            background:
              'radial-gradient(circle at 12% 0%, rgba(6, 182, 212, 0.2), transparent 44%), radial-gradient(circle at 72% 4%, rgba(124, 58, 237, 0.28), transparent 38%), linear-gradient(180deg, rgba(7, 24, 55, 0.78) 0%, rgba(10, 24, 51, 0.46) 56%, transparent 100%)',
          }}
        />
        <div className="diriqo-hero-gridline absolute inset-0 opacity-[0.55]" />
        <div className="diriqo-hero-aurora absolute -inset-x-24 -top-20 h-[38rem] opacity-90" />
        <div
          className="hero-particle-drift absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 18%, rgba(168,85,247,0.45) 0 2px, transparent 3px), radial-gradient(circle at 28% 8%, rgba(6,182,212,0.3) 0 1px, transparent 2px), radial-gradient(circle at 66% 12%, rgba(168,85,247,0.34) 0 2px, transparent 3px), radial-gradient(circle at 88% 24%, rgba(6,182,212,0.26) 0 1px, transparent 2px)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-400/[0.08] to-transparent" />
      </div>
      <div className="diriqo-hero-grid relative mx-auto grid min-h-[calc(100svh-128px)] w-full max-w-[112rem] items-center gap-9 px-4 py-14 sm:px-6 sm:py-16 lg:gap-10 lg:px-8 lg:py-16">
        <div className="min-w-0 max-w-[42rem]">
          <p className="hero-reveal inline-flex max-w-full rounded-full border border-cyan-300/30 bg-white/[0.09] px-4 py-2 text-sm font-black text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
            {content.home.heroEyebrow}
          </p>
          <h1
            className="diriqo-hero-title hero-reveal mt-6 max-w-4xl break-words text-[2.7rem] font-extrabold leading-[1.08] tracking-normal text-white drop-shadow-[0_14px_38px_rgba(2,6,23,0.32)] sm:text-[3.45rem] lg:text-[4.1rem] 2xl:text-[5.35rem]"
            style={{ animationDelay: '70ms', hyphens: 'none', overflowWrap: 'normal', wordBreak: 'normal' }}
          >
            {content.home.heroTitle}
          </h1>
          <p className="hero-reveal mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl" style={{ animationDelay: '140ms' }}>
            {content.home.heroSubtitle}
          </p>
          <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '210ms' }}>
            <a
              href={getSignupHref(locale)}
              className="cta-light-sweep inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_46%,#06b6d4_100%)] px-6 text-base font-black !text-white shadow-xl shadow-blue-500/30 transition duration-200 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_18px_48px_rgba(6,182,212,0.34),0_0_36px_rgba(124,58,237,0.26)] active:translate-y-0 active:scale-[0.99]"
            >
              {content.common.trial}
            </a>
            <Link
              href={localizePath(locale, '/demo')}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-200/28 bg-white/[0.08] px-6 text-base font-black !text-white shadow-lg shadow-slate-950/20 ring-1 ring-white/[0.05] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-100/55 hover:bg-white/[0.14] hover:shadow-[0_14px_34px_rgba(6,182,212,0.16)] active:translate-y-0 active:scale-[0.99]"
            >
              {content.home.secondaryCta}
            </Link>
          </div>
          <p className="hero-reveal mt-5 text-sm font-semibold text-slate-300" style={{ animationDelay: '280ms' }}>{content.home.heroNote}</p>
          {content.home.heroHighlights?.length ? (
            <div className="hero-reveal mt-4 flex flex-wrap gap-2" style={{ animationDelay: '350ms' }}>
              {content.home.heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-200/20 bg-white/[0.08] px-3 py-1 text-xs font-black text-cyan-100 shadow-sm shadow-cyan-950/20 backdrop-blur transition hover:border-cyan-100/40 hover:bg-white/[0.13]"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="hero-visual hero-reveal min-w-0 lg:-mr-10 lg:translate-x-4 xl:-mr-20 xl:translate-x-8 2xl:-mr-24" style={{ animationDelay: '260ms' }}>
          <DashboardMockup dashboardTitle={content.mockup.dashboardTitle} locale={locale} />
        </div>
      </div>
    </section>
  )
}
