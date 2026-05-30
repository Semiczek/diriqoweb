import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { detectLocale } from '@/lib/marketing/locale-detection'

export const metadata: Metadata = {
  title: 'Diriqo demo - read-only ukázka aplikace',
  description: 'Veřejné klikací demo Diriqo s ukázkovými daty bez přihlášení a bez ukládání změn.',
}

export default async function DemoPage() {
  const requestHeaders = await headers()
  const locale = detectLocale(
    requestHeaders.get('x-vercel-ip-country') ?? requestHeaders.get('cf-ipcountry'),
    requestHeaders.get('accept-language')
  )

  redirect(`/${locale}/demo`)
}
