import type { IndustryDetail } from '@/lib/marketing/content'

type IndustryItem = string | IndustryDetail

type IndustryGridProps = {
  items: IndustryItem[]
}

export function IndustryGrid({ items }: IndustryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const isDetailed = typeof item !== 'string'
        const title = isDetailed ? item.title : item

        return (
          <article
            key={title}
            className="premium-card-shine reveal-up overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(37,99,235,0.12)]"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <IndustryIcon index={index} />
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
            </div>
            {isDetailed ? (
              <>
                <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                      {point}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

function IndustryIcon({ index }: { index: number }) {
  const tones = [
    'from-cyan-400 to-blue-600',
    'from-violet-400 to-blue-600',
    'from-emerald-400 to-cyan-600',
    'from-amber-300 to-blue-600',
  ]

  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tones[index % tones.length]} shadow-[0_14px_30px_rgba(37,99,235,0.18)]`}
    >
      <span className="grid h-5 w-5 grid-cols-2 gap-1">
        <span className="rounded-sm bg-white/90" />
        <span className="rounded-sm bg-white/60" />
        <span className="rounded-sm bg-white/60" />
        <span className="rounded-sm bg-white/90" />
      </span>
    </span>
  )
}
