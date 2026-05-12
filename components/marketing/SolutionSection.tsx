import type { MarketingContent } from '@/lib/marketing/content'

type SolutionSectionProps = {
  content: MarketingContent
}

export function SolutionSection({ content }: SolutionSectionProps) {
  return (
    <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div aria-hidden="true" className="absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-emerald-200/24 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="reveal-up">
          <p className="text-sm font-black uppercase tracking-wide text-cyan-700">{content.home.solutionEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            {content.home.solutionTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{content.home.solutionText}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {content.solutionItems.map((item, index) => (
            <div
              key={item}
              className="premium-card-shine reveal-up overflow-hidden rounded-xl border border-emerald-100/90 bg-white/[0.82] p-5 shadow-[0_16px_44px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(6,95,70,0.12)]"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-700 shadow-[0_0_22px_rgba(16,185,129,0.2)]">
                &#10003;
              </div>
              <p className="text-sm font-bold leading-6 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
