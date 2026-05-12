import { HowItWorksContent } from '@/components/marketing/LocalizedPages'
import { getMarketingContent } from '@/lib/marketing/content'
import {
  createLocalizedMetadata,
  generateLocaleStaticParams,
  getLocaleFromParams,
  type LocalePageProps,
} from '@/lib/marketing/page-utils'

export const generateStaticParams = generateLocaleStaticParams

export function generateMetadata({ params }: LocalePageProps) {
  return createLocalizedMetadata(params, 'howItWorks', '/how-it-works')
}

export default async function HowItWorksPage({ params }: LocalePageProps) {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)

  return <HowItWorksContent content={content} locale={locale} />
}
