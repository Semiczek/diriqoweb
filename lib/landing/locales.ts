export const landingLocales = ['cs', 'en', 'de', 'pl', 'sk', 'hu', 'es', 'tr', 'sq', 'uk', 'ro', 'vi', 'ar'] as const
export type LandingLocale = (typeof landingLocales)[number]
export const languageNames: Record<LandingLocale, string> = {
 cs: 'Čeština', en: 'English', de: 'Deutsch', pl: 'Polski', sk: 'Slovenčina', hu: 'Magyar',
 es: 'Español', tr: 'Türkçe', sq: 'Shqip', uk: 'Українська', ro: 'Română', vi: 'Tiếng Việt', ar: 'العربية',
}
export const languageCodes: Record<LandingLocale, string> = {
 cs: 'CZ', en: 'EN', de: 'DE', pl: 'PL', sk: 'SK', hu: 'HU',
 es: 'ES', tr: 'TR', sq: 'SQ', uk: 'UK', ro: 'RO', vi: 'VI', ar: 'AR',
}
export const openGraphLocales: Record<LandingLocale, string> = {
 cs: 'cs_CZ', en: 'en_GB', de: 'de_DE', pl: 'pl_PL', sk: 'sk_SK', hu: 'hu_HU',
 es: 'es_ES', tr: 'tr_TR', sq: 'sq_AL', uk: 'uk_UA', ro: 'ro_RO', vi: 'vi_VN', ar: 'ar_AE',
}
// Native names stay recognizable when the visitor does not speak the current language.
export const sortedLandingLocales = [...landingLocales].sort((a, b) => languageNames[a].localeCompare(languageNames[b], 'en', { sensitivity: 'base' }))
export const localeDirection = (locale: LandingLocale) => locale === 'ar' ? 'rtl' : 'ltr'
export const LOCALE_COOKIE = 'diriqo_language'
export function isLandingLocale(value: unknown): value is LandingLocale {
 return typeof value === 'string' && landingLocales.some(locale => locale === value)
}
export function landingAlternates(path = '') {
 return Object.fromEntries([...landingLocales.map(locale => [locale, '/' + locale + path]), ['x-default', path || '/']])
}
