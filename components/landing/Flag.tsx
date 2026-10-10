import Image from 'next/image'
import type { LandingLocale } from '@/lib/landing/locales'
import s from './landing.module.css'
const countries: Record<LandingLocale, string> = { cs:'cz',en:'gb',de:'de',pl:'pl',sk:'sk',hu:'hu',es:'es',tr:'tr',sq:'al',uk:'ua',ro:'ro',vi:'vn',ar:'ae' }
export function Flag({ locale }: { locale: LandingLocale }) {
 return <Image className={s.flag} src={'/flags/' + countries[locale] + '.svg'} width={24} height={18} alt="" aria-hidden="true" unoptimized/>
}
