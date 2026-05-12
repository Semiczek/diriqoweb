import type { MarketingContent } from '@/lib/marketing/content'

type FAQSectionProps = {
  content: MarketingContent
}

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section className="light-mesh-bg relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
      <div aria-hidden="true" className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-up max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">FAQ</h2>
        </div>

        <div className="mt-8 grid gap-3">
          {content.faqs.map((item, index) => (
            <details
              key={item.question}
              className="group reveal-up rounded-2xl border border-slate-200/80 bg-white/[0.74] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)] ring-1 ring-white/60 backdrop-blur-xl transition duration-200 open:border-cyan-200 open:bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_20px_48px_rgba(37,99,235,0.1),0_0_24px_rgba(6,182,212,0.08)]"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <summary className="cursor-pointer list-none text-base font-black text-slate-950 outline-none transition marker:hidden focus-visible:ring-2 focus-visible:ring-blue-500/40">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xl leading-none text-blue-700 shadow-sm shadow-blue-500/10 transition duration-200 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="faq-answer mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
