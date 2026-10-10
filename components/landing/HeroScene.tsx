'use client'
import { useEffect, useRef, useState } from 'react'
import type { LandingCopy } from '@/lib/landing/copy'
import { Icon } from './Icon'
import s from './landing.module.css'

export function HeroScene({ copy }: { copy: LandingCopy }) {
 const video = useRef<HTMLVideoElement>(null)
 const stage = useRef<HTMLDivElement>(null)
 const [playing, setPlaying] = useState(false)
 const [ended, setEnded] = useState(false)
 useEffect(() => {
  const el = video.current
  const root = stage.current
  if (!el || !root) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  let autoAttempted = false
  const observer = new IntersectionObserver(([entry]) => {
   if (!entry.isIntersecting) { el.pause(); return }
   if (!reduced.matches && !autoAttempted && !document.hidden) {
    autoAttempted = true
    el.src = '/coming-soon/03.mp4'
    void el.play().catch(() => {})
   }
  }, { threshold: .35 })
  const pause = () => { if (document.hidden || reduced.matches) el.pause() }
  observer.observe(root)
  document.addEventListener('visibilitychange', pause)
  reduced.addEventListener('change', pause)
  return () => { observer.disconnect(); el.pause(); document.removeEventListener('visibilitychange', pause); reduced.removeEventListener('change', pause) }
 }, [])
 function toggle() {
  const el = video.current
  if (!el) return
  if (playing) { el.pause(); return }
  if (!el.getAttribute('src')) el.src = '/coming-soon/03.mp4'
  if (el.ended) el.currentTime = 0
  setEnded(false)
  void el.play().catch(() => setPlaying(false))
 }
 return <div className={s.heroScene} ref={stage} data-playing={playing}>
  <div className={s.sceneOrbit} aria-hidden="true" />
  <div className={s.sceneFrame}>
   <video ref={video} muted playsInline preload="none" poster="/coming-soon/03.webp" aria-label={copy.scene}
    onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => { setPlaying(false); setEnded(true) }} />
   <div className={s.sceneShade} />
   <span className={s.sceneTag}><span /> DIRIQENT</span>
   <p className={s.sceneCaption}>{copy.stage[0]}<br/><strong>{copy.stage[1]}</strong></p>
   <button type="button" className={s.sceneControl} onClick={toggle} aria-label={playing ? copy.pause : ended ? copy.replay : copy.play}>
    <Icon name={playing ? 'pause' : 'play'} />
   </button>
  </div>
  <div className={s.floatingCards} aria-hidden="true">
   {copy.cards.map((label, i) => <div key={label} className={s.floatingCard} style={{ '--i': i } as React.CSSProperties}><Icon name={['jobs','people','person','box','document','pos'][i]}/><span>{label}</span><i /></div>)}
  </div>
  <span className={s.sceneIndex} aria-hidden="true">DIRIQO UNIVERSE — 01</span>
 </div>
}
