import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { detectLocale } from '@/lib/marketing/locale-detection'

type DemoRoutePageProps = {
  params: Promise<{
    segments?: string[]
  }>
}

export const metadata: Metadata = {
  title: 'Diriqo demo - read-only ukázka aplikace',
  description: 'Veřejné klikací demo Diriqo s ukázkovými daty bez přihlášení a bez ukládání změn.',
}

export default async function DemoRoutePage({ params }: DemoRoutePageProps) {
  const { segments = [] } = await params
  const requestHeaders = await headers()
  const locale = detectLocale(
    requestHeaders.get('x-vercel-ip-country') ?? requestHeaders.get('cf-ipcountry'),
    requestHeaders.get('accept-language')
  )
  const path = segments.length > 0 ? `/${segments.join('/')}` : ''

  redirect(`/${locale}/demo${path}`)
}
