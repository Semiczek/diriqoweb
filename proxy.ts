import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { detectLocale } from '@/lib/marketing/locale-detection'
import { isLocale } from '@/lib/marketing/content'

const unlocalizedPublicRoutes = new Set([
  'contact',
  'cookies',
  'demo',
  'features',
  'how-it-works',
  'industries',
  'pricing',
  'privacy',
  'terms',
])

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/').filter(Boolean)[0]

  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next()
  }

  if (pathname !== '/' && (!firstSegment || !unlocalizedPublicRoutes.has(firstSegment))) {
    return NextResponse.next()
  }

  const country = request.headers.get('x-vercel-ip-country') ?? request.headers.get('cf-ipcountry')
  const locale = detectLocale(country, request.headers.get('accept-language'))
  const url = request.nextUrl.clone()

  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
