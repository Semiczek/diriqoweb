import { getSignupHref, signupInfoCopyByLocale, type MarketingContent } from '@/lib/marketing/content'

type SignupInfoBandProps = {
  content: MarketingContent
  compact?: boolean
}

export function SignupInfoBand({ content, compact = false }: SignupInfoBandProps) {
  const copy = signupInfoCopyByLocale[content.locale]

  return (
    <section className={compact ? 'reveal-up' : 'soft-section-bg relative overflow-hidden py-14 sm:py-16'}>
      {compact ? null : (
        <>
          <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
          <div aria-hidden="true" className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-200/24 blur-3xl" />
        </>
      )}
      <div className={compact ? '' : 'relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className="grid gap-6 rounded-2xl border border-cyan-100/80 bg-white/[0.86] p-5 shadow-[0_20px_58px_rgba(15,23,42,0.08)] ring-1 ring-white/70 backdrop-blur-xl lg:grid-cols-[1fr_.82fr] lg:items-center lg:p-7">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-cyan-700">{copy.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black tracking-normal text-slate-950 sm:text-4xl">{copy.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{copy.text}</p>
          </div>
          <div className="grid gap-3">
            <ul className="grid gap-2 text-sm font-bold leading-6 text-slate-700">
              {copy.items.map((item) => (
                <li key={item} className="flex gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2">
                  <span className="font-black text-cyan-700">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={getSignupHref(content.locale)}
                className="cta-light-sweep inline-flex min-h-11 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-5 text-sm font-black !text-white shadow-lg shadow-blue-500/25 transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                {copy.primaryCta}
              </a>
              <p className="text-xs font-bold leading-5 text-slate-500">{copy.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
