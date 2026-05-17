import { LegalPageLayout } from '@/components/marketing/LegalPageLayout'
import { getMarketingContent } from '@/lib/marketing/content'
import { createLegalMetadata, getLegalDocument } from '@/lib/marketing/legal-documents'
import {
  generateLocaleStaticParams,
  getLocaleFromParams,
  type LocalePageProps,
} from '@/lib/marketing/page-utils'

export const generateStaticParams = generateLocaleStaticParams

export async function generateMetadata({ params }: LocalePageProps) {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)

  return createLegalMetadata(locale, 'terms', content)
}

export default async function TermsPage({ params }: LocalePageProps) {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)

  return <LegalPageLayout document={getLegalDocument(locale, 'terms', content)} locale={locale} page="terms" />
}
