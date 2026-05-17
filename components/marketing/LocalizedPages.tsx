import { BeforeAfterSection } from '@/components/marketing/BeforeAfterSection'
import { CTASection } from '@/components/marketing/CTASection'
import { DiriqoDemoApp } from '@/components/demo/DiriqoDemoApp'
import { FAQSection } from '@/components/marketing/FAQSection'
import { FeatureGrid } from '@/components/marketing/FeatureGrid'
import { getFieldWorkCopy } from '@/components/marketing/fieldWorkCopy'
import { HeroSection } from '@/components/marketing/HeroSection'
import { IndustryGrid } from '@/components/marketing/IndustryGrid'
import { IndustrySeoSection } from '@/components/marketing/IndustrySeoSection'
import { AddonCard } from '@/components/marketing/AddonCard'
import { MobileWorkerSection } from '@/components/marketing/MobileWorkerSection'
import { PricingCards } from '@/components/marketing/PricingCards'
import { ProblemSection } from '@/components/marketing/ProblemSection'
import { ProductShowcaseSection } from '@/components/marketing/ProductShowcaseSection'
import { SocialProofSection } from '@/components/marketing/SocialProofSection'
import { SolutionSection } from '@/components/marketing/SolutionSection'
import { StepFlow } from '@/components/marketing/StepFlow'
import { SignupInfoBand } from '@/components/marketing/SignupInfoBand'
import { TrustHelpSection } from '@/components/marketing/TrustHelpSection'
import {
  contactEmail,
  demoSignupCopyByLocale,
  getSignupHref,
  getPricingPageCopy,
  type Locale,
  type MarketingContent,
} from '@/lib/marketing/content'

type LocalizedPageProps = {
  content: MarketingContent
  locale: Locale
}

type DemoContentProps = LocalizedPageProps & {
  initialPath?: string[]
}

export function HomeContent({ content, locale }: LocalizedPageProps) {
  const pricingCopy = getPricingPageCopy(locale)
  const fieldWorkCopy = getFieldWorkCopy(locale)

  return (
    <main>
      <HeroSection content={content} locale={locale} />
      <ProblemSection content={content} />
      <SolutionSection content={content} />
      <SignupInfoBand content={content} />
      <MobileWorkerSection content={content} />
      <BeforeAfterSection content={content} />

      <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.home.stepsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{content.home.stepsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{fieldWorkCopy.workflowText}</p>
          </div>
          <div className="mt-10">
            <StepFlow steps={fieldWorkCopy.workflowSteps} />
          </div>
        </div>
      </section>

      <section className="light-mesh-bg relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-cyan-700">{content.home.featuresEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{content.home.featuresTitle}</h2>
          </div>
          <div className="mt-10">
            <FeatureGrid items={content.featureCards} />
          </div>
        </div>
      </section>

      <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
        <div className="marketing-grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.home.industriesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{content.home.industriesTitle}</h2>
            {content.home.industriesText ? (
              <p className="mt-4 text-lg leading-8 text-slate-600">{content.home.industriesText}</p>
            ) : null}
          </div>
          <div className="mt-10">
            <IndustryGrid items={content.industries} />
          </div>
        </div>
      </section>

      <SocialProofSection content={content} />
      <TrustHelpSection content={content} />
      <ProductShowcaseSection content={content} />

      <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_62%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.home.pricingEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{content.home.pricingTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{pricingCopy.description}</p>
          </div>
          <div className="mt-10">
            <PricingCards content={content} />
          </div>
          <div className="mt-10">
            <AddonCard content={content} />
          </div>
        </div>
      </section>

      <FAQSection content={content} />
      <CTASection content={content} />
    </main>
  )
}

export function FeaturesContent({ content }: LocalizedPageProps) {
  return (
    <main>
      <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] py-16 text-white sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -inset-x-10 -top-28 h-80"
            style={{
              background:
                'radial-gradient(circle at 16% 0%, rgba(6, 182, 212, 0.26), transparent 36%), radial-gradient(circle at 72% 4%, rgba(124, 58, 237, 0.28), transparent 34%), linear-gradient(180deg, rgba(7, 24, 55, 0.82) 0%, rgba(10, 24, 51, 0.46) 52%, transparent 100%)',
            }}
          />
          <div className="diriqo-hero-gridline absolute inset-0 opacity-[0.32]" />
          <div className="diriqo-hero-aurora absolute -inset-x-24 -top-20 h-80 opacity-70" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{content.featuresPage.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal sm:text-6xl">
            {content.featuresPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{content.featuresPage.text}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {content.featureModules.map((module) => (
            <article key={module.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
              <h2 className="text-xl font-black text-slate-950">{module.title}</h2>
              <div className="mt-5 grid gap-4 text-sm leading-6">
                <p>
                  <span className="font-black text-slate-950">{content.featuresPage.solves}: </span>
                  <span className="text-slate-600">{module.solves}</span>
                </p>
                <p>
                  <span className="font-black text-slate-950">{content.featuresPage.helps}: </span>
                  <span className="text-slate-600">{module.helps}</span>
                </p>
                <p>
                  <span className="font-black text-slate-950">{content.featuresPage.example}: </span>
                  <span className="text-slate-600">{module.example}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection content={content} />
    </main>
  )
}

export function HowItWorksContent({ content }: LocalizedPageProps) {
  const fieldWorkCopy = getFieldWorkCopy(content.locale)

  return (
    <main>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.howPage.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 sm:text-6xl">
            {content.howPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.howPage.text}</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{fieldWorkCopy.workflowText}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <StepFlow steps={fieldWorkCopy.workflowSteps} compact />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {content.howPage.cards.map((card) => (
            <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection content={content} />
    </main>
  )
}

export function PricingContent({ content }: LocalizedPageProps) {
  const pricingCopy = getPricingPageCopy(content.locale)

  return (
    <main>
      <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] py-16 text-white sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -inset-x-10 -top-28 h-80"
            style={{
              background:
                'radial-gradient(circle at 16% 0%, rgba(6, 182, 212, 0.26), transparent 36%), radial-gradient(circle at 72% 4%, rgba(124, 58, 237, 0.28), transparent 34%), linear-gradient(180deg, rgba(7, 24, 55, 0.82) 0%, rgba(10, 24, 51, 0.46) 52%, transparent 100%)',
            }}
          />
          <div className="diriqo-hero-gridline absolute inset-0 opacity-[0.32]" />
          <div className="diriqo-hero-aurora absolute -inset-x-24 -top-20 h-80 opacity-70" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{content.home.pricingEyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal sm:text-6xl">
            {pricingCopy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{pricingCopy.description}</p>
        </div>
      </section>

      <section className="soft-section-bg relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-up mb-8 rounded-2xl border border-blue-100/80 bg-white/[0.86] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.07)] backdrop-blur sm:p-6">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{pricingCopy.introTitle}</p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">{pricingCopy.introText}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {pricingCopy.introBullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/90 px-4 py-3 text-sm font-bold leading-6 text-slate-700 shadow-sm shadow-slate-900/5">
                  <span className="text-cyan-700">&#10003;</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <SignupInfoBand content={content} compact />
          </div>
          <PricingCards content={content} />
          <div className="mt-10">
            <AddonCard content={content} />
          </div>
        </div>
      </section>

      <CTASection content={content} />
    </main>
  )
}

export function IndustriesContent({ content }: LocalizedPageProps) {
  return (
    <main>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.industriesPage.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 sm:text-6xl">
            {content.industriesPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.industriesPage.text}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <IndustryGrid items={content.industryDetails} />
        </div>
      </section>

      <IndustrySeoSection content={content.industriesSeo} />

      <CTASection content={content} />
    </main>
  )
}

export function DemoContent({ content, initialPath }: DemoContentProps) {
  const demoCopy = demoSignupCopyByLocale[content.locale]
  const fieldWorkCopy = getFieldWorkCopy(content.locale)

  return (
    <>
      <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 px-4 py-4 text-white sm:px-6 lg:px-8">
        <div aria-hidden="true" className="section-glow-divider absolute inset-x-0 bottom-0 h-px" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[0_18px_44px_rgba(2,6,23,0.2)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black text-cyan-100">{demoCopy.title}</p>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-300">{demoCopy.text}</p>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-cyan-100/90">{fieldWorkCopy.demoDetail}</p>
          </div>
          <a
            href={getSignupHref(content.locale)}
            className="cta-light-sweep inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-4 text-sm font-black !text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {demoCopy.cta}
          </a>
        </div>
      </section>
      <DiriqoDemoApp content={content} initialPath={initialPath} />
    </>
  )
}

export function ContactContent({ content }: LocalizedPageProps) {
  return (
    <main>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{content.contactPage.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-6xl">
              {content.contactPage.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{content.contactPage.text}</p>
            <div className="mt-8 rounded-lg border border-cyan-100 bg-cyan-50 p-5">
              <h2 className="text-lg font-black text-slate-950">{content.contactPage.setupTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{content.contactPage.setupText}</p>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              {content.contactPage.support}:{' '}
              <a href={`mailto:${contactEmail}`} className="font-black text-blue-700">
                {contactEmail}
              </a>
            </p>
          </div>

          <form
            action={`mailto:${contactEmail}`}
            method="post"
            encType="text/plain"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                {content.contactPage.form.name}
                <input name="name" required className="min-h-12 rounded-lg border border-slate-300 bg-white px-3 outline-none focus:border-blue-500" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                {content.contactPage.form.email}
                <input name="email" type="email" required className="min-h-12 rounded-lg border border-slate-300 bg-white px-3 outline-none focus:border-blue-500" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800 sm:col-span-2">
                {content.contactPage.form.company}
                <input name="company" className="min-h-12 rounded-lg border border-slate-300 bg-white px-3 outline-none focus:border-blue-500" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800 sm:col-span-2">
                {content.contactPage.form.message}
                <textarea name="message" required rows={7} className="rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-blue-500" />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[linear-gradient(135deg,#7c3aed_0%,#2563eb_52%,#06b6d4_100%)] px-6 font-black !text-white shadow-lg shadow-blue-500/25 hover:brightness-110 sm:w-auto"
            >
              {content.contactPage.form.submit}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
