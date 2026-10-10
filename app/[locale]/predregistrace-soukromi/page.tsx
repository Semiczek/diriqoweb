import { permanentRedirect } from 'next/navigation'
import { getLandingLocale } from '@/lib/landing/page-utils'

// Keep saved links working, with one canonical privacy notice on the new site.
export default async function Page({ params }: { params: Promise<unknown> }) {
  const locale = await getLandingLocale(params, '/privacy')
  permanentRedirect('/' + locale + '/privacy')
}
