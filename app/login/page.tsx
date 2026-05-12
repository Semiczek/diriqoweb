import type { Metadata } from 'next'

import { AuthEntryPage } from '@/components/auth/AuthEntryPage'
import { defaultLocale, isLocale, type Locale } from '@/lib/marketing/content'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to Diriqo.',
}

type LoginPageProps = {
  searchParams?: Promise<{
    locale?: string
  }>
}

async function getLocale(searchParams?: LoginPageProps['searchParams']): Promise<Locale> {
  const params = searchParams ? await searchParams : undefined
  return isLocale(params?.locale) ? params.locale : defaultLocale
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const locale = await getLocale(searchParams)

  return <AuthEntryPage locale={locale} mode="login" />
}
