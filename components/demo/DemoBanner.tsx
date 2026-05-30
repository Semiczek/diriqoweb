'use client'

import { translateDemoText } from '@/lib/demo/demo-localization'
import { defaultLocale, type Locale } from '@/lib/marketing/content'

type DemoBannerProps = {
  locale?: Locale
}

const demoBannerText = 'Demo režim - data jsou ukázková a změny se neukládají.'

export function DemoBanner({ locale = defaultLocale }: DemoBannerProps) {
  return (
    <div className="demo-readonly-banner">
      <span>{translateDemoText(locale, demoBannerText)}</span>
    </div>
  )
}
