import { NextRequest, NextResponse } from 'next/server'

import { getPostLoginRedirect } from '@/lib/auth-redirect'
import { isLocale, type Locale } from '@/lib/marketing/content'
import { createSupabaseServerClient } from '@/lib/supabase-server'

function safeRedirectPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return null
  }

  return value
}

function getLocale(value: string | null): Locale | null {
  const candidate = value ?? undefined
  return isLocale(candidate) ? candidate : null
}

function getLoginPath(locale: Locale | null) {
  return locale ? `/login?locale=${locale}` : '/login'
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = safeRedirectPath(requestUrl.searchParams.get('next'))
  const locale = getLocale(requestUrl.searchParams.get('locale'))
  const supabase = await createSupabaseServerClient()

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      const signInUrl = new URL(getLoginPath(locale), request.url)
      signInUrl.searchParams.set('error', 'callback')
      return NextResponse.redirect(signInUrl)
    }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL(getLoginPath(locale), request.url))
  }

  return NextResponse.redirect(new URL(next ?? (await getPostLoginRedirect(user.id, locale)), request.url))
}
