export const PRIVACY_VERSION = '2026-10-10'
export const NEWS_CONSENT_VERSION = 'product-news-2026-10-10'
export type Registration = {
 email: string; industry: string | null; employees: string | null;
 interest: 'diriqo' | 'diripos' | 'both'; newsConsent: boolean; locale: 'cs' | 'en' | 'de' | 'pl' | 'sk' | 'hu' | 'es' | 'tr' | 'sq' | 'uk' | 'ro' | 'vi' | 'ar'
}
export function validateRegistration(input: unknown): Registration | null {
 if (!input || typeof input !== 'object' || Array.isArray(input)) return null
 const data = input as Record<string, unknown>
 if (typeof data.email !== 'string' || data.email.length > 254) return null
 const email = data.email.trim().toLowerCase()
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length < 5) return null
 if (data.website !== '' || typeof data.newsConsent !== 'boolean') return null
 if (typeof data.interest !== 'string' || !['diriqo','diripos','both'].includes(data.interest)) return null
 if (typeof data.locale !== 'string' || !['cs','en','de','pl','sk','hu','es','tr','sq','uk','ro','vi','ar'].includes(data.locale)) return null
 if (typeof data.industry !== 'string' || !['','services','retail','hospitality','manufacturing','other'].includes(data.industry)) return null
 if (typeof data.employees !== 'string' || !['','1','2-10','11-50','51-200','201+'].includes(data.employees)) return null
 return { email, industry: data.industry || null, employees: data.employees || null,
  interest: data.interest as Registration['interest'], newsConsent: data.newsConsent, locale: data.locale as Registration['locale'] }
}
