import {
  beforeAfterCopyByLocale,
  defaultBeforeAfterCopy,
  type MarketingContent,
} from '@/lib/marketing/content'

type BeforeAfterSectionProps = {
  content: MarketingContent
}

export function BeforeAfterSection({ content }: BeforeAfterSectionProps) {
  const copy = content.beforeAfter ?? beforeAfterCopyByLocale[content.locale] ?? defaultBeforeAfterCopy

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_62%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-up max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{copy.text}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <BeforeAfterCard tone="before" title={copy.beforeTitle} items={copy.beforeItems} />
          <BeforeAfterCard tone="after" title={copy.afterTitle} items={copy.afterItems} />
        </div>
      </div>
    </section>
  )
}

type BeforeAfterCardProps = {
  tone: 'before' | 'after'
  title: string
  items: string[]
}

function BeforeAfterCard({ tone, title, items }: BeforeAfterCardProps) {
  const isAfter = tone === 'after'

  return (
    <article
      className={`premium-card-shine reveal-up relative overflow-hidden rounded-2xl border p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 ${
        isAfter
          ? 'border-cyan-200/80 bg-[linear-gradient(145deg,rgba(236,254,255,0.92),rgba(255,255,255,0.9))] hover:shadow-[0_24px_64px_rgba(8,145,178,0.16)]'
          : 'border-red-100/90 bg-[linear-gradient(145deg,rgba(254,242,242,0.96),rgba(255,247,237,0.78))] hover:shadow-[0_24px_64px_rgba(127,29,29,0.14)]'
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-6 top-0 h-px ${
          isAfter ? 'bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent' : 'bg-gradient-to-r from-transparent via-red-400/70 to-transparent'
        }`}
      />
      <h3 className={`text-2xl font-black ${isAfter ? 'text-cyan-950' : 'text-red-950'}`}>
        {title}
      </h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-slate-800">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                isAfter
                  ? 'bg-cyan-700 text-white shadow-[0_0_20px_rgba(8,145,178,0.28)]'
                  : 'bg-red-100 text-red-700 shadow-[0_0_18px_rgba(239,68,68,0.14)]'
              }`}
            >
              {isAfter ? <>&#10003;</> : '!'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
