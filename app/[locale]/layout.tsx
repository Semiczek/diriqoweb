import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

import { MarketingChrome } from '@/components/marketing/MarketingChrome'
import { getMarketingContent, isLocale, locales } from '@/lib/marketing/content'

type LocaleLayoutProps = {
  children: ReactNode
  params: Promise<unknown>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = (await params) as { locale?: string }

  if (!isLocale(locale)) {
    notFound()
  }

  const content = getMarketingContent(locale)

  return (
    <MarketingChrome content={content} locale={locale}>
      {children}
    </MarketingChrome>
  )
}
