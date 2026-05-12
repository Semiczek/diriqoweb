import { createCompanyOnboarding } from '@/app/onboarding/actions'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { getAuthPageCopy, getMarketingContent, type Locale } from '@/lib/marketing/content'

type CompanyOnboardingPageProps = {
  locale: Locale
  error?: string
}

function getDefaults(locale: Locale) {
  if (locale === 'en') {
    return {
      country: 'United Kingdom',
      language: 'en',
      currency: 'EUR',
    }
  }

  if (locale === 'de') {
    return {
      country: 'Germany',
      language: 'de',
      currency: 'EUR',
    }
  }

  return {
    country: 'Czech Republic',
    language: locale,
    currency: locale === 'cs' ? 'CZK' : 'EUR',
  }
}

export function CompanyOnboardingPage({ locale, error }: CompanyOnboardingPageProps) {
  const content = getMarketingContent(locale)
  const copy = getAuthPageCopy(locale).onboarding
  const defaults = getDefaults(locale)
  const errorMessage =
    error === 'company-name'
      ? copy.companyNameMinLength
      : error === 'required'
        ? copy.requiredFields
        : error === 'create'
          ? copy.companyCreateFailed
          : null

  return (
    <>
      <MarketingHeader content={content} locale={locale} />
      <main className="soft-section-bg relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div aria-hidden="true" className="section-soft-divider absolute inset-x-0 top-0 h-20" />
        <div aria-hidden="true" className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-200/24 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="reveal-up">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-6xl">{copy.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{copy.text}</p>
            <p className="mt-5 max-w-xl rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-900">
              {copy.todo}
            </p>
          </div>

          <section className="reveal-up rounded-2xl border border-slate-200/80 bg-white/[0.9] p-5 shadow-[0_22px_64px_rgba(15,23,42,0.09)] ring-1 ring-white/70 backdrop-blur-xl sm:p-6">
            <form action={createCompanyOnboarding} className="grid gap-4">
              <input type="hidden" name="locale" value={locale} />
              <label className="grid gap-2 text-sm font-black text-slate-800">
                {copy.companyName}
                <input name="company_name" required minLength={2} className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40" />
              </label>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="grid gap-2 text-sm font-black text-slate-800">
                  {copy.country}
                  <select name="country" defaultValue={defaults.country} required className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40">
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Germany">Germany</option>
                    <option value="Austria">Austria</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-black text-slate-800">
                  {copy.language}
                  <select name="language" defaultValue={defaults.language} required className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40">
                    <option value="cs">Čeština</option>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="pl">Polski</option>
                    <option value="hu">Magyar</option>
                    <option value="es">Español</option>
                    <option value="it">Italiano</option>
                    <option value="fr">Français</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-black text-slate-800">
                  {copy.currency}
                  <select name="currency" defaultValue={defaults.currency} required className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/40">
                    <option value="CZK">CZK</option>
                    <option value="EUR">EUR</option>
                  </select>
                </label>
              </div>
              {errorMessage ? (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
                  {errorMessage}
                </div>
              ) : null}
              <button
                type="submit"
                className="cta-light-sweep mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] px-5 text-base font-black !text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {copy.submit}
              </button>
            </form>
          </section>
        </div>
      </main>
      <MarketingFooter content={content} locale={locale} />
    </>
  )
}
