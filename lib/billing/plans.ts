export type BillingPlanId =
  | 'starter'
  | 'growth'
  | 'business'
  | 'scale'
  | 'custom'

export type BillingPlan = {
  id: BillingPlanId
  name: string
  slug: BillingPlanId
  monthlyPrice: number | null
  yearlyPrice: number | null
  currency: 'EUR'
  workerLimitMin: number
  workerLimitMax: number | null
  description: string
  stripeProductName?: string | null
  stripePriceId: string | null
  stripePriceEnvVar?: string
  recommended: boolean
  contactSales: boolean
}

export const billingPlans: readonly BillingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    slug: 'starter',
    monthlyPrice: 19,
    yearlyPrice: 190,
    currency: 'EUR',
    workerLimitMin: 1,
    workerLimitMax: 5,
    description: 'For small service businesses getting started.',
    stripeProductName: 'Diriqo Starter',
    stripePriceId: process.env.STRIPE_PRICE_STARTER ?? 'STRIPE_PRICE_STARTER',
    stripePriceEnvVar: 'STRIPE_PRICE_STARTER',
    recommended: false,
    contactSales: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    slug: 'growth',
    monthlyPrice: 39,
    yearlyPrice: 390,
    currency: 'EUR',
    workerLimitMin: 6,
    workerLimitMax: 15,
    description: 'For growing teams managing multiple workers and jobs.',
    stripeProductName: 'Diriqo Growth',
    stripePriceId: process.env.STRIPE_PRICE_GROWTH ?? 'STRIPE_PRICE_GROWTH',
    stripePriceEnvVar: 'STRIPE_PRICE_GROWTH',
    recommended: true,
    contactSales: false,
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    monthlyPrice: 79,
    yearlyPrice: 790,
    currency: 'EUR',
    workerLimitMin: 16,
    workerLimitMax: 30,
    description: 'For established service companies with larger operations.',
    stripeProductName: 'Diriqo Business',
    stripePriceId: process.env.STRIPE_PRICE_BUSINESS ?? 'STRIPE_PRICE_BUSINESS',
    stripePriceEnvVar: 'STRIPE_PRICE_BUSINESS',
    recommended: false,
    contactSales: false,
  },
  {
    id: 'scale',
    name: 'Scale',
    slug: 'scale',
    monthlyPrice: 149,
    yearlyPrice: 1490,
    currency: 'EUR',
    workerLimitMin: 31,
    workerLimitMax: 50,
    description: 'For larger service companies with advanced operational needs.',
    stripeProductName: 'Diriqo Scale',
    stripePriceId: process.env.STRIPE_PRICE_SCALE ?? 'STRIPE_PRICE_SCALE',
    stripePriceEnvVar: 'STRIPE_PRICE_SCALE',
    recommended: false,
    contactSales: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    slug: 'custom',
    monthlyPrice: null,
    yearlyPrice: null,
    currency: 'EUR',
    workerLimitMin: 51,
    workerLimitMax: null,
    description: 'For teams above 50 workers. Contact us for a custom setup.',
    stripeProductName: null,
    stripePriceId: null,
    recommended: false,
    contactSales: true,
  },
]

export function getBillingPlanBySlug(slug: string | null | undefined): BillingPlan | undefined {
  return billingPlans.find((plan) => plan.slug === slug)
}

export function getBillingCheckoutPath(slug: BillingPlanId): string {
  return `/api/billing/checkout?plan=${slug}`
}

export function getResolvedStripePriceId(plan: BillingPlan): string | null {
  if (!plan.stripePriceEnvVar) return plan.stripePriceId?.startsWith('price_') ? plan.stripePriceId : null
  return process.env[plan.stripePriceEnvVar] ?? null
}

export function formatWorkerRange(plan: BillingPlan): string {
  if (plan.workerLimitMax === null) return '51+ users/workers'
  return `${plan.workerLimitMin}–${plan.workerLimitMax} users/workers`
}

export function formatMonthlyPrice(plan: BillingPlan): string {
  if (plan.monthlyPrice === null) return 'Custom pricing'
  return `${plan.monthlyPrice} ${plan.currency}`
}

export function formatYearlyPrice(plan: BillingPlan): string {
  if (plan.yearlyPrice === null) return 'Custom pricing'
  return `${plan.yearlyPrice} ${plan.currency}`
}

export function getPlanForWorkerCount(workerCount: number): BillingPlan {
  const workerPlan = billingPlans.find((plan) => {
    if (plan.workerLimitMax === null) return workerCount >= plan.workerLimitMin
    return workerCount >= plan.workerLimitMin && workerCount <= plan.workerLimitMax
  })

  return workerPlan ?? billingPlans[billingPlans.length - 1]
}

export function getWorkerUsageMessage(planId: BillingPlanId, workerCount: number): string {
  const plan = getBillingPlanBySlug(planId)
  if (!plan) return `You are using ${workerCount} workers.`
  if (plan.workerLimitMax === null) return `You are using ${workerCount} workers on custom pricing.`
  return `You are using ${workerCount} of ${plan.workerLimitMax} workers included in ${plan.name}.`
}

export type WorkerLimitStatus = 'within-limit' | 'approaching-limit' | 'over-limit' | 'contact-sales'

export function getWorkerLimitStatus(planId: BillingPlanId, workerCount: number): WorkerLimitStatus {
  const plan = getBillingPlanBySlug(planId)
  if (!plan || plan.contactSales || plan.workerLimitMax === null) return 'contact-sales'
  if (workerCount > 50) return 'contact-sales'
  if (workerCount > plan.workerLimitMax) return 'over-limit'
  if (workerCount >= Math.ceil(plan.workerLimitMax * 0.8)) return 'approaching-limit'
  return 'within-limit'
}
