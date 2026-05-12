import type { Locale } from '@/lib/marketing/content'

type LocalizedCurrencyFormat = {
  locale: string
  currency: string
  rateFromEur: number
}

const localizedCurrencyFormats: Record<Locale, LocalizedCurrencyFormat> = {
  cs: { locale: 'cs-CZ', currency: 'CZK', rateFromEur: 25 },
  en: { locale: 'en-US', currency: 'USD', rateFromEur: 1.1 },
  de: { locale: 'de-DE', currency: 'EUR', rateFromEur: 1 },
  es: { locale: 'es-ES', currency: 'EUR', rateFromEur: 1 },
  fr: { locale: 'fr-FR', currency: 'EUR', rateFromEur: 1 },
  it: { locale: 'it-IT', currency: 'EUR', rateFromEur: 1 },
  pl: { locale: 'pl-PL', currency: 'PLN', rateFromEur: 4.3 },
  hu: { locale: 'hu-HU', currency: 'HUF', rateFromEur: 390 },
}

export function getLocalizedCurrencyFormat(locale: Locale) {
  return localizedCurrencyFormats[locale] ?? localizedCurrencyFormats.cs
}

export function convertEurToLocaleCurrency(value: number, locale: Locale) {
  return value * getLocalizedCurrencyFormat(locale).rateFromEur
}

export function formatEurValueForLocale(value: number, locale: Locale) {
  const format = getLocalizedCurrencyFormat(locale)

  return new Intl.NumberFormat(format.locale, {
    style: 'currency',
    currency: format.currency,
    maximumFractionDigits: 0,
  }).format(convertEurToLocaleCurrency(value, locale))
}
