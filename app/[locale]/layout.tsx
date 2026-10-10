import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

import { MarketingChrome } from '@/components/marketing/MarketingChrome'
import { getMarketingContent, isLocale } from '@/lib/marketing/content'
import { generateLandingStaticParams } from '@/lib/landing/page-utils'

type LocaleLayoutProps = {
  children: ReactNode
  params: Promise<unknown>
}

export function generateStaticParams() {
  return generateLandingStaticParams()
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = (await params) as { locale?: string }

  if (locale === 'sk') return <>{children}</>

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
