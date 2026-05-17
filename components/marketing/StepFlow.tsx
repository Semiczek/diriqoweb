type Step =
  | string
  | {
      title: string
      text: string
      note?: string
    }

type StepFlowProps = {
  steps: Step[]
  compact?: boolean
}

export function StepFlow({ steps, compact = false }: StepFlowProps) {
  return (
    <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 right-8 top-5 hidden h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent md:block"
      />
      {steps.map((step, index) => {
        const title = typeof step === 'string' ? step : step.title
        const text = typeof step === 'string' ? null : step.text
        const note = typeof step === 'string' ? null : step.note

        return (
          <article
            key={`${title}-${index}`}
            className="premium-card-shine reveal-up relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_18px_44px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_64px_rgba(37,99,235,0.12)]"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_62%,#06b6d4_100%)] text-sm font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.24)]">
              {index + 1}
            </div>
            <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
            {text ? <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p> : null}
            {note ? (
              <p className="mt-3 rounded-xl border border-cyan-100 bg-cyan-50/80 px-3 py-2 text-xs font-bold leading-5 text-cyan-900">
                {note}
              </p>
            ) : null}
            {compact ? null : <div className="mt-5 h-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-300 shadow-[0_0_18px_rgba(6,182,212,0.3)]" />}
          </article>
        )
      })}
    </div>
  )
}
