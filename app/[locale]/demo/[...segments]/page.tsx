import { DemoContent } from '@/components/marketing/LocalizedPages'
import { getMarketingContent } from '@/lib/marketing/content'
import {
  createLocalizedMetadata,
  getLocaleFromParams,
  type LocalePageProps,
} from '@/lib/marketing/page-utils'

type LocalizedDemoRoutePageProps = LocalePageProps & {
  params: Promise<{
    locale?: string
    segments?: string[]
  }>
}

export function generateMetadata({ params }: LocalePageProps) {
  return createLocalizedMetadata(params, 'demo', '/demo')
}

export default async function LocalizedDemoRoutePage({ params }: LocalizedDemoRoutePageProps) {
  const locale = await getLocaleFromParams(params)
  const { segments = [] } = await params
  const content = getMarketingContent(locale)

  return <DemoContent content={content} locale={locale} initialPath={segments} />
}
