import { defaultLocale, isLocale, type Locale } from './content'

const fallbackLocale: Locale = 'en'

const countryLocaleMap: Partial<Record<string, Locale>> = {
  AT: 'de',
  CH: 'de',
  CZ: defaultLocale,
  DE: 'de',
  ES: 'es',
  FR: 'fr',
  HU: 'hu',
  IT: 'it',
  PL: 'pl',
  SK: defaultLocale,
}

export function detectLocale(countryCode: string | null, acceptLanguage: string | null): Locale {
  const country = countryCode?.toUpperCase() ?? ''

  if (country === 'SK') return defaultLocale

  const browserLocale = detectLocaleFromAcceptLanguage(acceptLanguage)
  if (browserLocale) return browserLocale

  return countryLocaleMap[country] ?? fallbackLocale
}

function detectLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null

  const preferences = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qValue] = part.trim().split(';q=')
      const quality = qValue ? Number.parseFloat(qValue) : 1

      return {
        locale: tag.toLowerCase().split('-')[0],
        quality: Number.isFinite(quality) ? quality : 1,
      }
    })
    .sort((a, b) => b.quality - a.quality)

  for (const preference of preferences) {
    if (isLocale(preference.locale)) return preference.locale
  }

  return null
}
