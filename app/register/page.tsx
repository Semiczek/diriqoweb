import type { Metadata } from 'next'

import { AuthEntryPage } from '@/components/auth/AuthEntryPage'
import { defaultLocale, isLocale, type Locale } from '@/lib/marketing/content'

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create your Diriqo account and continue to company setup.',
}

type RegisterPageProps = {
  searchParams?: Promise<{
    locale?: string
  }>
}

async function getLocale(searchParams?: RegisterPageProps['searchParams']): Promise<Locale> {
  const params = searchParams ? await searchParams : undefined
  return isLocale(params?.locale) ? params.locale : defaultLocale
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const locale = await getLocale(searchParams)

  return <AuthEntryPage locale={locale} mode="register" />
}
