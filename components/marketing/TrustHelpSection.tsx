import { getFieldWorkCopy } from '@/components/marketing/fieldWorkCopy'
import type { MarketingContent } from '@/lib/marketing/content'

type TrustHelpSectionProps = {
  content: MarketingContent
}

export function TrustHelpSection({ content }: TrustHelpSectionProps) {
  const copy = getFieldWorkCopy(content.locale)

  return (
    <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/18 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-up max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.trust.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{copy.trust.title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{copy.trust.text}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {copy.trust.items.map((item, index) => (
            <article
              key={item.title}
              className="premium-card-shine reveal-up rounded-2xl border border-slate-200/80 bg-white/[0.82] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.07)] ring-1 ring-white/70 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_64px_rgba(37,99,235,0.12)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_60%,#06b6d4_100%)] text-sm font-black text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}

          <article className="reveal-up rounded-2xl border border-blue-200/80 bg-[linear-gradient(135deg,rgba(239,246,255,0.94),rgba(236,254,255,0.88))] p-5 shadow-[0_22px_60px_rgba(37,99,235,0.13)] ring-1 ring-white/70 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-lg font-black text-blue-700 shadow-sm shadow-blue-500/10">
              ?
            </div>
            <h3 className="mt-5 text-lg font-black text-slate-950">{copy.trust.helpTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{copy.trust.helpText}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
