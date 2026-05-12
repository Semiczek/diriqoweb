import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { CompanyOnboardingPage } from '@/components/auth/CompanyOnboardingPage'
import { getDefaultDashboardPath, userHasCompany } from '@/lib/auth-redirect'
import { defaultLocale, getLoginHref, isLocale, type Locale } from '@/lib/marketing/content'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export const metadata: Metadata = {
  title: 'Company setup',
  description: 'Set up your Diriqo company.',
}

type CompanyPageProps = {
  searchParams?: Promise<{
    locale?: string
    error?: string
  }>
}

async function getParams(searchParams?: CompanyPageProps['searchParams']): Promise<{
  locale: Locale
  error?: string
}> {
  const params = searchParams ? await searchParams : undefined
  return {
    locale: isLocale(params?.locale) ? params.locale : defaultLocale,
    error: params?.error,
  }
}

export default async function OnboardingCompanyPage({ searchParams }: CompanyPageProps) {
  const { locale, error } = await getParams(searchParams)
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect(getLoginHref(locale))
  }

  if (await userHasCompany(user.id)) {
    redirect(getDefaultDashboardPath(locale))
  }

  return <CompanyOnboardingPage locale={locale} error={error} />
}
