import { LegalContent } from '@/components/marketing/LocalizedPages'
import { getMarketingContent } from '@/lib/marketing/content'
import {
  createLocalizedMetadata,
  generateLocaleStaticParams,
  getLocaleFromParams,
  type LocalePageProps,
} from '@/lib/marketing/page-utils'

export const generateStaticParams = generateLocaleStaticParams

export function generateMetadata({ params }: LocalePageProps) {
  return createLocalizedMetadata(params, 'privacy', '/privacy')
}

export default async function PrivacyPage({ params }: LocalePageProps) {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)

  return <LegalContent content={content} locale={locale} page="privacy" />
}
