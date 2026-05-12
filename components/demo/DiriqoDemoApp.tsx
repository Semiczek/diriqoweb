'use client'

import { ReadOnlyDiriqoDemo } from '@/components/demo/ReadOnlyDiriqoDemo'
import { defaultLocale, type MarketingContent } from '@/lib/marketing/content'

export function DiriqoDemoApp({
  content,
  initialPath = [],
}: {
  content?: MarketingContent
  initialPath?: string[]
}) {
  return <ReadOnlyDiriqoDemo locale={content?.locale ?? defaultLocale} segments={initialPath} />
}
