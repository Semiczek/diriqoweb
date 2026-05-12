import { NextRequest, NextResponse } from 'next/server'

import {
  getBillingPlanBySlug,
  getResolvedStripePriceId,
  type BillingPlan,
} from '@/lib/billing/plans'

export const runtime = 'nodejs'

const localePrefixes = new Set(['cs', 'en', 'de', 'pl', 'hu', 'es', 'it', 'fr'])

type StripeCheckoutSession = {
  url?: string
}

export async function GET(request: NextRequest) {
  return createCheckoutRedirect(request, request.nextUrl.searchParams.get('plan'))
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { plan?: string } | null
  return createCheckoutRedirect(request, body?.plan ?? request.nextUrl.searchParams.get('plan'))
}

async function createCheckoutRedirect(request: NextRequest, slug: string | null) {
  const plan = getBillingPlanBySlug(slug)

  if (!plan || plan.contactSales || plan.workerLimitMax === null) {
    return redirectToContact(request, plan)
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY
  const stripePriceId = getResolvedStripePriceId(plan)

  if (!stripeSecretKey || !stripePriceId) {
    return redirectToContact(request, plan, 'missing-stripe-config')
  }

  const successUrl = buildReturnUrl(request, plan, 'success')
  const cancelUrl = buildReturnUrl(request, plan, 'cancelled')
  const form = new URLSearchParams({
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    'line_items[0][price]': stripePriceId,
    'line_items[0][quantity]': '1',
    'metadata[plan]': plan.slug,
    'metadata[stripe_product_name]': plan.stripeProductName ?? plan.name,
    'metadata[billing_model]': 'worker-flat-rate-monthly',
    'metadata[worker_limit_min]': String(plan.workerLimitMin),
    'metadata[worker_limit_max]': String(plan.workerLimitMax),
  })

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  })

  if (!response.ok) {
    return redirectToContact(request, plan, 'stripe-checkout-error')
  }

  const session = (await response.json()) as StripeCheckoutSession

  if (!session.url) {
    return redirectToContact(request, plan, 'missing-checkout-url')
  }

  return NextResponse.redirect(session.url, { status: 303 })
}

function buildReturnUrl(request: NextRequest, plan: BillingPlan, status: 'success' | 'cancelled') {
  const referrer = request.headers.get('referer')
  const url = referrer ? new URL(referrer) : new URL('/pricing', request.nextUrl.origin)

  url.searchParams.set('checkout', status)
  url.searchParams.set('plan', plan.slug)

  if (status === 'success') {
    url.searchParams.set('session_id', '{CHECKOUT_SESSION_ID}')
  }

  return url.toString().replace('%7BCHECKOUT_SESSION_ID%7D', '{CHECKOUT_SESSION_ID}')
}

function redirectToContact(request: NextRequest, plan?: BillingPlan, reason?: string) {
  const referrer = request.headers.get('referer')
  const referrerPath = referrer ? new URL(referrer).pathname.split('/').filter(Boolean) : []
  const locale = referrerPath.length > 0 && localePrefixes.has(referrerPath[0]) ? referrerPath[0] : null
  const contactUrl = new URL(locale ? `/${locale}/contact` : '/contact', request.nextUrl.origin)

  if (plan) contactUrl.searchParams.set('plan', plan.slug)
  if (reason) contactUrl.searchParams.set('reason', reason)

  return NextResponse.redirect(contactUrl, { status: 303 })
}
