import type { Metadata } from 'next'
import type { LocalePageProps } from '@/lib/marketing/page-utils'
import { getLandingLocale } from '@/lib/landing/page-utils'
import { landingCopy } from '@/lib/landing/copy'
import { landingAlternates } from '@/lib/landing/locales'
import { LandingHeader } from '@/components/landing/LandingHeader'
import { LandingFooter } from '@/components/landing/LandingPage'
import { EpisodeGallery } from '@/components/landing/EpisodeGallery'
import s from '@/components/landing/landing.module.css'
export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
 const locale = await getLandingLocale(params, '/diriqent')
 const c = landingCopy[locale]
 return { title: c.assistantTitle, description: c.storyText, alternates: { canonical: '/' + locale + '/diriqent', languages: landingAlternates('/diriqent') } }
}
export default async function DiriqentPage({ params }: LocalePageProps) {
 const locale = await getLandingLocale(params, '/diriqent')
 const c = landingCopy[locale]
 return <div className={s.site} lang={locale}><a className={s.skip} href="#obsah">{c.skip}</a><div className={s.container}><LandingHeader copy={c} locale={locale}/></div><main className={s.storyPage + ' ' + s.container} id="obsah">
  <p className={s.eyebrow}>{c.storiesTag}</p><h1>{c.storyTitle}</h1><p>{c.storyText}</p>
  <EpisodeGallery copy={c}/>
 </main><LandingFooter locale={locale}/></div>
}
