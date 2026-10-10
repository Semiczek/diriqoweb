import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing/LandingPage'
import { landingCopy } from '@/lib/landing/copy'
import { landingAlternates, openGraphLocales } from '@/lib/landing/locales'
import { getLandingLocale, generateLandingStaticParams } from '@/lib/landing/page-utils'
import type { LocalePageProps } from '@/lib/marketing/page-utils'
export const generateStaticParams = generateLandingStaticParams
export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
 const lang = await getLandingLocale(params)
 const c = landingCopy[lang]
 const title = 'Diriqo — ' + c.title.join(' ')
 return {
  title: { absolute: title }, description: c.intro,
  alternates: { canonical: '/' + lang, languages: landingAlternates() },
  openGraph: { title, description: c.intro, url: '/' + lang, locale: openGraphLocales[lang], type: 'website', siteName: 'Diriqo', images: [{ url: '/' + lang + '/opengraph-image', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description: c.intro },
  robots: { index: true, follow: true },
 }
}
export default async function HomePage({ params }: LocalePageProps) {
 return <LandingPage locale={await getLandingLocale(params)}/>
}
