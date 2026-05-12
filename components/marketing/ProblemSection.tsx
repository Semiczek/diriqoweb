import type { MarketingContent } from '@/lib/marketing/content'

type ProblemSectionProps = {
  content: MarketingContent
}

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section className="light-mesh-bg relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
      <div aria-hidden="true" className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-red-200/20 blur-3xl" />
      <div className="marketing-grid-bg pointer-events-none absolute inset-0 opacity-[0.38]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-up max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.home.problemEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            {content.home.problemTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{content.home.problemText}</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.problemItems.map((item, index) => (
            <div
              key={item}
              className="premium-card-shine reveal-up flex gap-3 overflow-hidden rounded-xl border border-red-100/90 bg-[linear-gradient(145deg,rgba(254,242,242,0.95),rgba(255,255,255,0.82))] p-5 text-sm font-bold leading-6 text-red-950 shadow-[0_16px_38px_rgba(127,29,29,0.08)] transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_22px_55px_rgba(127,29,29,0.13)]"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 motion-safe:animate-[diriqo-pulse_2.4s_ease-in-out_infinite]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
