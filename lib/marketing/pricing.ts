export type WebPricingPlanId = 'starter' | 'growth' | 'business' | 'scale' | 'enterprise' | 'custom'

export type WebPricingPlan = {
  id: WebPricingPlanId
  name: string
  slug: WebPricingPlanId
  monthlyPrice: number | null
  yearlyPrice: number | null
  currency: 'EUR'
  workerLimitMin: number
  workerLimitMax: number | null
  recommended: boolean
  contactSales: boolean
}

export const webPricingPlans: readonly WebPricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    slug: 'starter',
    monthlyPrice: 19,
    yearlyPrice: 190,
    currency: 'EUR',
    workerLimitMin: 1,
    workerLimitMax: 5,
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
    recommended: true,
    contactSales: false,
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    monthlyPrice: 59,
    yearlyPrice: 590,
    currency: 'EUR',
    workerLimitMin: 16,
    workerLimitMax: 30,
    recommended: false,
    contactSales: false,
  },
  {
    id: 'scale',
    name: 'Scale',
    slug: 'scale',
    monthlyPrice: 99,
    yearlyPrice: 990,
    currency: 'EUR',
    workerLimitMin: 31,
    workerLimitMax: 50,
    recommended: false,
    contactSales: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    slug: 'enterprise',
    monthlyPrice: 149,
    yearlyPrice: 1490,
    currency: 'EUR',
    workerLimitMin: 51,
    workerLimitMax: 100,
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
    workerLimitMin: 101,
    workerLimitMax: null,
    recommended: false,
    contactSales: true,
  },
]

export const websiteAddonPricing = {
  price: '+999 € setup',
}

export function formatWebMonthlyPrice(plan: WebPricingPlan) {
  if (plan.monthlyPrice === null) return 'Custom pricing'
  return `${plan.monthlyPrice} ${plan.currency}`
}

export function formatWebYearlyPrice(plan: WebPricingPlan) {
  if (plan.yearlyPrice === null) return 'Custom pricing'
  return `${plan.yearlyPrice} ${plan.currency}`
}
