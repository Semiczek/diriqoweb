import {
  defaultSocialProofCopy,
  socialProofCopyByLocale,
  type MarketingContent,
} from '@/lib/marketing/content'

type SocialProofSectionProps = {
  content: MarketingContent
}

export function SocialProofSection({ content }: SocialProofSectionProps) {
  const copy = content.socialProof ?? socialProofCopyByLocale[content.locale] ?? defaultSocialProofCopy

  return (
    <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] py-16 text-white sm:py-20">
      <div aria-hidden="true" className="diriqo-hero-aurora absolute -inset-x-20 top-0 h-72 opacity-60" />
      <div aria-hidden="true" className="section-glow-divider absolute inset-x-0 top-0 h-px" />
      <div aria-hidden="true" className="marketing-grid-bg absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div className="reveal-up">
            <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{copy.text}</p>
            <div aria-hidden="true" className="mt-7 hidden h-px w-40 bg-gradient-to-r from-cyan-300/70 to-transparent sm:block" />
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_24px_74px_rgba(2,6,23,0.28)] ring-1 ring-white/[0.06] backdrop-blur-xl">
            <div className="grid gap-3 md:grid-cols-3">
            {copy.points.map((point, index) => (
              <article
                key={point}
                className="premium-card-shine reveal-up relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-5 text-sm font-bold leading-6 text-slate-100 shadow-[0_20px_54px_rgba(2,6,23,0.22)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.12] hover:shadow-[0_24px_70px_rgba(6,182,212,0.14)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span aria-hidden="true" className="mb-4 block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
                {point}
              </article>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
