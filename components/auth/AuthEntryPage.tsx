import Link from 'next/link'

import { AuthForm } from '@/components/auth/AuthForm'
import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import {
  getAuthPageCopy,
  getLoginHref,
  getMarketingContent,
  getSignupHref,
  type Locale,
} from '@/lib/marketing/content'

type AuthEntryPageProps = {
  locale: Locale
  mode: 'register' | 'login'
}

export function AuthEntryPage({ locale, mode }: AuthEntryPageProps) {
  const content = getMarketingContent(locale)
  const copy = getAuthPageCopy(locale)
  const authCopy = mode === 'register' ? copy.register : copy.login
  const alternateHref = mode === 'register' ? getLoginHref(locale) : getSignupHref(locale)
  const prompt = mode === 'register' ? copy.register.signInPrompt : copy.login.registerPrompt
  const alternateLabel = mode === 'register' ? copy.register.signInLink : copy.login.registerLink

  return (
    <>
      <MarketingHeader content={content} locale={locale} />
      <main className="dark-mesh-bg relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div aria-hidden="true" className="diriqo-hero-aurora absolute -inset-x-24 top-0 h-80 opacity-70" />
        <div aria-hidden="true" className="diriqo-hero-gridline absolute inset-0 opacity-[0.28]" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="reveal-up">
            <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{authCopy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">{authCopy.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{authCopy.text}</p>
            {mode === 'register' ? (
              <p className="mt-5 max-w-xl rounded-2xl border border-cyan-200/20 bg-white/[0.08] px-4 py-3 text-sm font-bold leading-6 text-cyan-50 backdrop-blur">
                {copy.register.helper}
              </p>
            ) : null}
          </div>

          <section className="reveal-up rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_28px_80px_rgba(2,6,23,0.34)] ring-1 ring-white/[0.06] backdrop-blur-xl sm:p-6">
            <AuthForm locale={locale} mode={mode} copy={copy} />

            {mode === 'register' ? (
              <button
                type="button"
                disabled
                className="mt-4 inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-black text-slate-400"
              >
                {copy.register.googleUnavailable}
              </button>
            ) : null}

            <p className="mt-5 text-center text-sm font-bold text-slate-300">
              {prompt}{' '}
              <Link href={alternateHref} className="font-black text-cyan-200 transition hover:text-white">
                {alternateLabel}
              </Link>
            </p>
          </section>
        </div>
      </main>
      <MarketingFooter content={content} locale={locale} />
    </>
  )
}
