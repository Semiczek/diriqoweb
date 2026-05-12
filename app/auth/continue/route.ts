import { NextRequest, NextResponse } from 'next/server'

import { getPostLoginRedirect } from '@/lib/auth-redirect'
import { isLocale, type Locale } from '@/lib/marketing/content'
import { createSupabaseServerClient } from '@/lib/supabase-server'

function getLocale(value: string | null): Locale | null {
  const candidate = value ?? undefined
  return isLocale(candidate) ? candidate : null
}

function getLoginPath(locale: Locale | null) {
  return locale ? `/login?locale=${locale}` : '/login'
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const locale = getLocale(requestUrl.searchParams.get('locale'))
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL(getLoginPath(locale), request.url))
  }

  return NextResponse.redirect(new URL(await getPostLoginRedirect(user.id, locale), request.url))
}
