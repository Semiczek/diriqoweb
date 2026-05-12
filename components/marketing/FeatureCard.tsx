type FeatureCardProps = {
  title: string
  text: string
  label?: string
  delay?: number
  iconIndex?: number
}

const iconPaths = [
  'M4 7h16M7 4v16M5 17h14M9 11h6',
  'M7 8a4 4 0 1 0 8 0M4 20a8 8 0 0 1 16 0',
  'M5 7h14v10H5zM8 11h8M8 14h5',
  'M6 8h12M6 12h12M6 16h8',
]

export function FeatureCard({ title, text, label, delay = 0, iconIndex = 0 }: FeatureCardProps) {
  const path = iconPaths[iconIndex % iconPaths.length]

  return (
    <article
      className="premium-card-shine reveal-up group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/[0.92] p-5 shadow-[0_16px_42px_rgba(15,23,42,0.07)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_62px_rgba(37,99,235,0.13),0_0_28px_rgba(6,182,212,0.1)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
      {label ? (
        <div className="mb-3 inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-cyan-700">
          {label}
        </div>
      ) : null}
      <div aria-hidden="true" className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#eef2ff_0%,#ecfeff_100%)] text-blue-700 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.1),0_12px_24px_rgba(37,99,235,0.12)] transition duration-200 group-hover:scale-105 group-hover:text-cyan-700">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      <div aria-hidden="true" className="mt-5 grid gap-2 opacity-70 transition duration-200 group-hover:opacity-100">
        <span className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-cyan-200 to-transparent" />
        <span className="h-1.5 w-1/2 rounded-full bg-gradient-to-r from-violet-200 to-transparent" />
      </div>
    </article>
  )
}
