'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getDefaultDashboardPath } from '@/lib/auth-redirect'
import { defaultLocale, getLoginHref, isLocale, type Locale } from '@/lib/marketing/content'
import { createSupabaseServerClient } from '@/lib/supabase-server'

function formText(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function getFormLocale(formData: FormData): Locale {
  const locale = formText(formData, 'locale')
  return isLocale(locale) ? locale : defaultLocale
}

function redirectWithOnboardingError(locale: Locale, error: string): never {
  redirect(`/onboarding/company?locale=${locale}&error=${encodeURIComponent(error)}`)
}

export async function createCompanyOnboarding(formData: FormData) {
  const locale = getFormLocale(formData)
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect(getLoginHref(locale))
  }

  const companyName = formText(formData, 'company_name')
  const country = formText(formData, 'country')
  const language = formText(formData, 'language')
  const currency = formText(formData, 'currency') || 'EUR'

  if (companyName.length < 2) {
    redirectWithOnboardingError(locale, 'company-name')
  }

  if (!country || !language || !currency) {
    redirectWithOnboardingError(locale, 'required')
  }

  const { data: companyId, error } = await supabase.rpc('create_onboarding_company', {
    input_company_name: companyName,
    input_country: country,
    input_language: language,
    input_currency: currency,
  })

  if (error || typeof companyId !== 'string') {
    const message = error?.message ?? ''

    if (message.includes('company_name_required')) {
      redirectWithOnboardingError(locale, 'company-name')
    }

    redirectWithOnboardingError(locale, 'create')
  }

  const cookieStore = await cookies()
  cookieStore.set({
    name: 'active_company_id',
    value: companyId,
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  })

  redirect(getDefaultDashboardPath(locale))
}
