import { redirect } from 'next/navigation'
import { headers, cookies } from 'next/headers'
import { detectLandingLocale } from '@/lib/landing/detect-locale'
import { LOCALE_COOKIE } from '@/lib/landing/locales'

export default async function RootPage() {
  const [requestHeaders, cookieStore] = await Promise.all([headers(), cookies()])
  redirect('/' + detectLandingLocale(requestHeaders.get('accept-language'), cookieStore.get(LOCALE_COOKIE)?.value))
}
