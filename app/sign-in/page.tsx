import { redirect } from 'next/navigation'

import { getLoginHref } from '@/lib/marketing/content'

export default function SignInAliasPage() {
  redirect(getLoginHref())
}
