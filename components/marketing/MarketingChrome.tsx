'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import { MarketingFooter } from '@/components/marketing/MarketingFooter'
import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import type { Locale, MarketingContent } from '@/lib/marketing/content'

type MarketingChromeProps = {
  children: ReactNode
  content: MarketingContent
  locale: Locale
}

export function MarketingChrome({ children, content, locale }: MarketingChromeProps) {
  const pathname = usePathname()
  const isLandingRoute = pathname === `/${locale}` || pathname === `/${locale}/diriqent` || pathname === `/${locale}/predregistrace-soukromi`
  if (isLandingRoute) return <>{children}</>
  const demoPath = `/${locale}/demo`
  const isDemoRoute = pathname === demoPath || pathname.startsWith(`${demoPath}/`)

  if (isDemoRoute) {
    return (
      <>
        <MarketingHeader content={content} locale={locale} />
        {children}
      </>
    )
  }

  return (
    <>
      <MarketingHeader content={content} locale={locale} />
      {children}
      <MarketingFooter content={content} locale={locale} />
    </>
  )
}
