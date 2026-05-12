import { DemoContent } from '@/components/marketing/LocalizedPages'
import { getMarketingContent } from '@/lib/marketing/content'
import {
  createLocalizedMetadata,
  generateLocaleStaticParams,
  getLocaleFromParams,
  type LocalePageProps,
} from '@/lib/marketing/page-utils'

export const generateStaticParams = generateLocaleStaticParams

export function generateMetadata({ params }: LocalePageProps) {
  return createLocalizedMetadata(params, 'demo', '/demo')
}

export default async function DemoPage({ params }: LocalePageProps) {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)

  return <DemoContent content={content} locale={locale} />
}
