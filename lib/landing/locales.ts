export const landingLocales = ['cs', 'en', 'de', 'pl', 'sk', 'hu'] as const
export type LandingLocale = (typeof landingLocales)[number]
export const languageNames: Record<LandingLocale, string> = {
 cs: 'Čeština', en: 'English', de: 'Deutsch', pl: 'Polski', sk: 'Slovenčina', hu: 'Magyar',
}
export const languageCodes: Record<LandingLocale, string> = {
 cs: 'CZ', en: 'EN', de: 'DE', pl: 'PL', sk: 'SK', hu: 'HU',
}
export const openGraphLocales: Record<LandingLocale, string> = {
 cs: 'cs_CZ', en: 'en_GB', de: 'de_DE', pl: 'pl_PL', sk: 'sk_SK', hu: 'hu_HU',
}
export function isLandingLocale(value: unknown): value is LandingLocale {
 return typeof value === 'string' && landingLocales.some(locale => locale === value)
}
export function landingAlternates(path = '') {
 return Object.fromEntries([...landingLocales.map(locale => [locale, '/' + locale + path]), ['x-default', '/cs' + path]])
}
