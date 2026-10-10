import { ImageResponse } from 'next/og'
import { landingCopy } from '@/lib/landing/copy'
import { isLandingLocale } from '@/lib/landing/locales'
export const alt = 'Diriqo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params
 const c = landingCopy[isLandingLocale(locale) ? locale : 'en']
 return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '70px 80px', color: '#f2edf8', background: 'linear-gradient(120deg,#0b0d14,#251936)' }}>
  <div style={{ display: 'flex', fontSize: 42, fontWeight: 700, letterSpacing: '-2px' }}>diriqo<span style={{ color: '#b59aff' }}>.</span></div>
  <div style={{ display: 'flex', flexDirection: 'column', fontSize: 70, lineHeight: 1.13, letterSpacing: '-3px' }}><span>{c.title[0]}</span><span style={{ color: '#bd9fec' }}>{c.title[1]}</span></div>
  <div style={{ display: 'flex', fontSize: 23, color: '#bcb0cc' }}>{c.eyebrow}</div>
 </div>, size)
}
