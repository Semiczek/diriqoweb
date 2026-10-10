import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { detectLandingLocale } from '@/lib/landing/detect-locale'
import { isLandingLocale, LOCALE_COOKIE } from '@/lib/landing/locales'
import { isLocale } from '@/lib/marketing/content'

const unlocalizedPublicRoutes = new Set([
  'contact',
  'cookies',
  'gdpr',
  'diriqent',
  'predregistrace-soukromi',
  'demo',
  'features',
  'how-it-works',
  'industries',
  'pricing',
  'privacy',
  'terms',
])
const landingRoutes = new Set(['contact', 'cookies', 'gdpr', 'diriqent', 'predregistrace-soukromi', 'privacy'])

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/').filter(Boolean)[0]

  if (firstSegment && (isLocale(firstSegment) || isLandingLocale(firstSegment))) {
    return NextResponse.next()
  }

  if (pathname !== '/' && (!firstSegment || !unlocalizedPublicRoutes.has(firstSegment))) {
    return NextResponse.next()
  }

  const preferred = detectLandingLocale(request.headers.get('accept-language'), request.cookies.get(LOCALE_COOKIE)?.value)
  // Retained application pages only support their original locale set.
  const locale = pathname === '/' || landingRoutes.has(firstSegment) || isLocale(preferred) ? preferred : 'en'
  const url = request.nextUrl.clone()

  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`

  const response = NextResponse.redirect(url)
  response.headers.set('Vary', 'Accept-Language, Cookie')
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
