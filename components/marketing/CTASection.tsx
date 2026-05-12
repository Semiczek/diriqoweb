import { getSignupHref, type MarketingContent } from '@/lib/marketing/content'

type CTASectionProps = {
  content: MarketingContent
  title?: string
  text?: string
  buttonLabel?: string
  href?: string
}

export function CTASection({
  content,
  title = content.home.finalCtaTitle,
  text = content.home.finalCtaText,
  buttonLabel = content.common.trial,
  href = getSignupHref(content.locale),
}: CTASectionProps) {
  return (
    <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] py-16 text-white sm:py-20">
      <div aria-hidden="true" className="diriqo-hero-aurora absolute -inset-x-16 top-0 h-64 opacity-60" />
      <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-normal sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
        <a
          href={href}
          className="cta-light-sweep mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-6 text-base font-black !text-white shadow-xl shadow-blue-500/25 transition duration-200 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_18px_48px_rgba(6,182,212,0.3),0_0_34px_rgba(124,58,237,0.22)] active:translate-y-0 active:scale-[0.99]"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
