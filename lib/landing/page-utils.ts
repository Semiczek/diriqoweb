import { notFound, redirect } from 'next/navigation'
import { isLocale, locales } from '@/lib/marketing/content'
import { isLandingLocale, landingLocales } from './locales'
export async function getLandingLocale(params: Promise<unknown>, path = '') {
 const { locale } = await params as { locale?: string }
 if (isLandingLocale(locale)) return locale
 if (isLocale(locale)) redirect('/en' + path)
 notFound()
}
export function generateLandingStaticParams() {
 return [...new Set([...locales, ...landingLocales])].map(locale => ({ locale }))
}
