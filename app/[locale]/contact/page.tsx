import type { Metadata } from 'next'
import { LandingContactPage } from '@/components/landing/LandingContactPage'
import { contactCopy } from '@/lib/landing/contact-copy'
import { landingCopy } from '@/lib/landing/copy'
import { landingAlternates } from '@/lib/landing/locales'
import { getLandingLocale } from '@/lib/landing/page-utils'

type Props = { params: Promise<unknown> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLandingLocale(params, '/contact')
  return {
    title: landingCopy[locale].contact,
    description: contactCopy[locale].intro,
    alternates: { canonical: '/' + locale + '/contact', languages: landingAlternates('/contact') },
  }
}
export default async function Page({ params }: Props) {
  return <LandingContactPage locale={await getLandingLocale(params, '/contact')}/>
}
