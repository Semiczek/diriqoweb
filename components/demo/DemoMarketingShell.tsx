import type { ReactNode } from 'react'

import { MarketingHeader } from '@/components/marketing/MarketingHeader'
import { defaultLocale, getMarketingContent } from '@/lib/marketing/content'

type DemoMarketingShellProps = {
  children: ReactNode
}

export function DemoMarketingShell({ children }: DemoMarketingShellProps) {
  const content = getMarketingContent(defaultLocale)

  return (
    <>
      <MarketingHeader content={content} locale={defaultLocale} />
      {children}
    </>
  )
}
