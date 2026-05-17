import { redirect } from 'next/navigation'

import { getSignupHref } from '@/lib/marketing/content'

export default function SignUpAliasPage() {
  redirect(getSignupHref())
}
