import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { defaultLocale, getSignupHref, isLocale } from '@/lib/marketing/content'

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create your Diriqo account and continue to company setup.',
}

type RegisterPageProps = {
  searchParams?: Promise<{
    billing?: string
    interval?: string
    locale?: string
    plan?: string
  }>
}

function appendParam(url: URL, key: string, value: string | undefined) {
  if (value) url.searchParams.set(key, value)
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = searchParams ? await searchParams : undefined
  const locale = isLocale(params?.locale) ? params.locale : defaultLocale
  const targetUrl = new URL(getSignupHref(locale))

  appendParam(targetUrl, 'plan', params?.plan)
  appendParam(targetUrl, 'billing', params?.billing)
  appendParam(targetUrl, 'interval', params?.interval)

  redirect(targetUrl.toString())
}
