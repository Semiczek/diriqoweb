import type { Metadata } from 'next'
import { LandingLegalPage } from '@/components/landing/LandingLegalPage'
import { getLandingLocale } from '@/lib/landing/page-utils'
import { landingAlternates } from '@/lib/landing/locales'
import { cookieCopy } from '@/lib/landing/cookie-copy'
type Props = { params:Promise<unknown> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const locale = await getLandingLocale(params, '/privacy')
 return { title:cookieCopy[locale].privacy, alternates:{ canonical:'/' + locale + '/privacy', languages:landingAlternates('/privacy') } }
}
export default async function Page({ params }: Props) {
 return <LandingLegalPage locale={await getLandingLocale(params, '/privacy')} kind="privacy"/>
}
