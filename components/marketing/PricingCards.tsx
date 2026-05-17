'use client'

import { useState } from 'react'

import { getSignupHref, signupInfoCopyByLocale, type Locale, type MarketingContent } from '@/lib/marketing/content'
import type { WebPricingPlanId } from '@/lib/marketing/pricing'

type PricingCardsProps = {
  content: MarketingContent
}

function formatPrice(value: number | null | undefined, currency: string | undefined, fallback: string) {
  if (value === null || value === undefined) return fallback
  return `${value} ${currency ?? 'EUR'}`
}

type BillingInterval = 'monthly' | 'annual'
type AppBillingInterval = 'monthly' | 'yearly'

function appendQuery(href: string, query: string) {
  const separator = href.includes('?') ? '&' : '?'
  return `${href}${separator}${query}`
}

function toAppBillingInterval(billing: BillingInterval): AppBillingInterval {
  return billing === 'annual' ? 'yearly' : 'monthly'
}

function getPricingSignupHref(locale: Locale, plan: WebPricingPlanId | undefined, billing: BillingInterval) {
  const params = new URLSearchParams({ interval: toAppBillingInterval(billing) })
  if (plan) params.set('plan', plan)

  return appendQuery(getSignupHref(locale), params.toString())
}

export function PricingCards({ content }: PricingCardsProps) {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly')
  const signupCopy = signupInfoCopyByLocale[content.locale]
  const ui = content.pricingUi ?? {
    monthlyLabel: 'Monthly',
    annualLabel: 'Annual',
    annualBadge: '2 months free',
    annualSavingText: 'Save 2 months with annual billing',
    noCreditCardText: 'No credit card required',
    monthlyPeriod: '/ month',
    yearlyPeriod: '/ year',
  }
  const isAnnual = billingInterval === 'annual'

  return (
    <div>
      <div className="reveal-up mb-6 rounded-2xl border border-slate-200/80 bg-white/[0.86] p-4 text-sm font-bold leading-6 text-slate-700 shadow-[0_18px_44px_rgba(15,23,42,0.07)] backdrop-blur">
        {signupCopy.note}
      </div>

      <div className="reveal-up mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/[0.9] p-3 shadow-[0_18px_44px_rgba(15,23,42,0.07)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-100 p-1 text-sm font-black text-slate-700">
          <button
            type="button"
            aria-pressed={!isAnnual}
            onClick={() => setBillingInterval('monthly')}
            className={`rounded-lg px-4 py-2 transition duration-200 ${
              !isAnnual ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15' : 'hover:bg-white/70'
            }`}
          >
            {ui.monthlyLabel}
          </button>
          <button
            type="button"
            aria-pressed={isAnnual}
            onClick={() => setBillingInterval('annual')}
            className={`rounded-lg px-4 py-2 transition duration-200 ${
              isAnnual ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15' : 'hover:bg-white/70'
            }`}
          >
            {ui.annualLabel}
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-600">
          <span>{ui.annualSavingText}</span>
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800">
            {ui.annualBadge}
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.pricingPlans.map((plan, index) => {
          const isContactSales = Boolean(plan.contactSales)
          const monthlyPrice = formatPrice(plan.monthlyPrice, plan.currency, plan.price)
          const yearlyPrice = formatPrice(plan.yearlyPrice, plan.currency, plan.price)
          const price = isContactSales
            ? plan.price
            : isAnnual
              ? yearlyPrice
              : monthlyPrice
          const period = isContactSales ? undefined : isAnnual ? ui.yearlyPeriod : ui.monthlyPeriod
          const ctaHref = isContactSales ? plan.ctaHref ?? '/contact' : getPricingSignupHref(content.locale, plan.slug, billingInterval)
          const ctaLabel = plan.ctaLabel ?? (isContactSales ? 'Contact us' : 'Start trial')

          return (
            <article
              key={plan.name}
              className={`premium-card-shine reveal-up relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 ${
                plan.featured
                  ? 'z-10 border-blue-300/80 bg-[linear-gradient(145deg,rgba(239,246,255,0.98),rgba(236,254,255,0.9))] shadow-[0_28px_80px_rgba(37,99,235,0.16)] ring-1 ring-cyan-200/60 hover:shadow-[0_34px_92px_rgba(37,99,235,0.22)] xl:scale-[1.02]'
                  : isContactSales
                    ? 'border-slate-800 bg-[linear-gradient(145deg,#071122,#111827)] shadow-slate-950/20 hover:border-cyan-300/30'
                  : 'border-slate-200/80 bg-white/[0.92] hover:border-blue-200 hover:shadow-[0_26px_68px_rgba(15,23,42,0.12)]'
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {plan.featured ? (
                <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
              ) : null}
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-xl font-black ${isContactSales ? 'text-white' : 'text-slate-950'}`}>
                  {plan.name}
                </h3>
                {plan.featured ? (
                  <span className="rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] px-3 py-1 text-xs font-black text-white shadow-lg shadow-blue-500/25">
                    {content.common.popular}
                  </span>
                ) : null}
              </div>
              <p className={`mt-4 text-sm font-bold ${isContactSales ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.people}
              </p>
              <div className="mt-3 flex flex-wrap items-end gap-1">
                <span className={`text-3xl font-black ${isContactSales ? 'text-white' : 'text-slate-950'}`}>
                  {price}
                </span>
                {period ? (
                  <span className={`pb-1 text-sm font-bold ${isContactSales ? 'text-slate-400' : 'text-slate-500'}`}>
                    {period}
                  </span>
                ) : null}
              </div>
              {!isContactSales ? (
                <div className={`mt-4 grid gap-2 rounded-xl border p-3 text-sm ${
                  plan.featured
                    ? 'border-cyan-200/70 bg-white/70 text-blue-950'
                    : 'border-slate-200 bg-slate-50/90 text-slate-700'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-black">{ui.monthlyLabel}</span>
                    <strong className="text-right">
                      {monthlyPrice}
                      <span className="ml-1 text-xs font-bold text-slate-500">{ui.monthlyPeriod}</span>
                    </strong>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-black">
                      {ui.annualLabel}
                      <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-[0.68rem] font-black text-cyan-800">
                        {ui.annualBadge}
                      </span>
                    </span>
                    <strong className="text-right">
                      {yearlyPrice}
                      <span className="ml-1 text-xs font-bold text-slate-500">{ui.yearlyPeriod}</span>
                    </strong>
                  </div>
                </div>
              ) : null}
              <p className={`mt-4 min-h-12 text-sm leading-6 ${isContactSales ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>
              <ul className={`mt-5 grid flex-1 gap-2 text-sm ${isContactSales ? 'text-slate-200' : 'text-slate-700'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="font-black text-cyan-700">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={ctaHref}
                className={`cta-light-sweep mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 text-sm font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] ${
                  plan.featured
                    ? 'bg-[linear-gradient(135deg,#8b5cf6_0%,#2563eb_48%,#06b6d4_100%)] !text-white shadow-lg shadow-blue-500/25 hover:brightness-110 hover:shadow-cyan-500/30'
                    : isContactSales
                      ? 'bg-white !text-slate-950 shadow-lg shadow-white/10 hover:bg-slate-100'
                      : 'bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_54%,#06b6d4_100%)] !text-white shadow-lg shadow-slate-900/20 hover:brightness-110 hover:shadow-blue-500/20'
                }`}
              >
                {ctaLabel}
              </a>
              {!isContactSales ? <p className={`mt-3 text-center text-xs font-bold ${plan.featured ? 'text-blue-800' : 'text-slate-500'}`}>{signupCopy.note}</p> : null}
            </article>
          )
        })}
      </div>

      {content.pricingCustomSetup ? (
        <div className="reveal-up mt-6 rounded-2xl border border-cyan-100/80 bg-white/[0.88] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.07)] ring-1 ring-white/70 backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-lg font-black text-slate-950">{content.pricingCustomSetup.title}</h3>
            <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-slate-600">
              {content.pricingCustomSetup.text}
            </p>
          </div>
          <a
            href={content.pricingCustomSetup.href ?? '/contact'}
            className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-950 px-5 text-sm font-black !text-white shadow-lg shadow-slate-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 sm:mt-0"
          >
            {content.pricingCustomSetup.cta}
          </a>
        </div>
      ) : null}
    </div>
  )
}
