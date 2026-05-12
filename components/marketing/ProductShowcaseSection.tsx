import {
  productShowcaseCopyByLocale,
  type MarketingContent,
} from '@/lib/marketing/content'
import { DashboardMockup } from './DashboardMockup'

type ProductShowcaseSectionProps = {
  content: MarketingContent
}

export function ProductShowcaseSection({ content }: ProductShowcaseSectionProps) {
  const copy = productShowcaseCopyByLocale[content.locale]

  return (
    <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="section-glow-divider absolute inset-x-0 top-0 h-px" />
        <div className="diriqo-hero-gridline absolute inset-0 opacity-[0.28]" />
        <div className="diriqo-hero-aurora absolute -inset-x-24 top-8 h-96 opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[112rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal-up text-sm font-black uppercase tracking-wide text-cyan-200">{copy.eyebrow}</p>
          <h2 className="reveal-up mt-3 text-3xl font-black tracking-normal sm:text-5xl" style={{ animationDelay: '70ms' }}>
            {copy.title}
          </h2>
          <p className="reveal-up mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300" style={{ animationDelay: '140ms' }}>
            {copy.text}
          </p>
          <div className="reveal-up mt-6 flex flex-wrap justify-center gap-2" style={{ animationDelay: '210ms' }}>
            {copy.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-cyan-200/20 bg-white/[0.08] px-3 py-1 text-xs font-black text-cyan-100 shadow-sm shadow-cyan-950/20 backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal-up relative mx-auto mt-10 max-w-6xl" style={{ animationDelay: '260ms' }}>
          <div aria-hidden="true" className="absolute inset-x-[12%] -bottom-8 h-16 rounded-full bg-cyan-300/[0.18] blur-2xl" />
          <DashboardMockup dashboardTitle={content.mockup.dashboardTitle} locale={content.locale} />
        </div>
      </div>
    </section>
  )
}
