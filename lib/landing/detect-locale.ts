import { isLandingLocale, type LandingLocale } from './locales'

export function detectLandingLocale(acceptLanguage: string | null, savedLanguage?: string): LandingLocale {
 if (isLandingLocale(savedLanguage)) return savedLanguage
 const preferences = (acceptLanguage || '').split(',').map((part, index) => {
  const [tag, ...parameters] = part.trim().toLowerCase().split(';')
  const qualityParameter = parameters.map(p => p.trim()).find(p => p.startsWith('q='))
  const quality = qualityParameter ? Number(qualityParameter.slice(2)) : 1
  return { locale: tag.split('-')[0], quality, index }
 }).filter(p => Number.isFinite(p.quality) && p.quality > 0 && p.quality <= 1)
  .sort((a, b) => b.quality - a.quality || a.index - b.index)
 for (const preference of preferences) if (isLandingLocale(preference.locale)) return preference.locale
 return 'en'
}
