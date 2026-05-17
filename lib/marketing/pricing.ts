export type WebPricingPlanId = 'starter' | 'growth' | 'business' | 'scale'

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
    monthlyPrice: 79,
    yearlyPrice: 790,
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
    monthlyPrice: 149,
    yearlyPrice: 1490,
    currency: 'EUR',
    workerLimitMin: 31,
    workerLimitMax: 50,
    recommended: false,
    contactSales: false,
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
