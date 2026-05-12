import { localizePath, type MarketingContent } from '@/lib/marketing/content'

type AddonCardProps = {
  content: MarketingContent
}

export function AddonCard({ content }: AddonCardProps) {
  const addon = content.addon
  const eyebrow = content.locale === 'cs' ? 'Volitelný add-on' : 'Optional add-on'
  const ctaLabel = addon.ctaLabel ?? (content.locale === 'cs' ? 'Zjistit více' : 'Learn more')

  return (
    <section className="premium-card-shine reveal-up overflow-hidden rounded-2xl border border-violet-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef2ff_52%,#ecfeff_100%)] p-6 shadow-[0_20px_58px_rgba(15,23,42,0.09)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-violet-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">{addon.title}</h2>
          <p className="mt-3 text-xl font-black text-violet-800">{addon.price}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{addon.description}</p>
          {addon.note ? (
            <p className="mt-4 max-w-3xl rounded-lg border border-violet-100 bg-white/70 px-4 py-3 text-sm font-bold leading-6 text-slate-700">
              {addon.note}
            </p>
          ) : null}
          <a
            href={localizePath(content.locale, '/contact')}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_54%,#06b6d4_100%)] px-5 text-sm font-black !text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {addon.features.map((feature) => (
            <div key={feature} className="rounded-lg border border-white bg-white/75 px-4 py-3 text-sm font-bold text-slate-800">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
