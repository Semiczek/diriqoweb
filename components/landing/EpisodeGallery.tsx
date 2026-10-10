'use client'
import { useEffect, useRef, useState } from 'react'
import { episodes } from '@/lib/landing/episodes'
import type { LandingCopy } from '@/lib/landing/copy'
import { Icon } from './Icon'
import s from './landing.module.css'
export function EpisodeGallery({ copy }: { copy: LandingCopy }) {
 const [active, setActive] = useState(0)
 const [loaded, setLoaded] = useState<Record<number, boolean>>({})
 const track = useRef<HTMLDivElement>(null)
 const videos = useRef<(HTMLVideoElement | null)[]>([])
 const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
 const activeRef = useRef(0)
 function pauseOthers(except = -1) { videos.current.forEach((video, i) => { if (i !== except) video?.pause() }) }
 function select(index: number, play = false) {
  const next = Math.max(0, Math.min(index, episodes.length - 1))
  pauseOthers()
  setActive(next)
  activeRef.current = next
  const el = videos.current[next]
  if (!el || !track.current) return
  const card = el.parentElement!
  const left = card.offsetLeft - (track.current.clientWidth - card.clientWidth) / 2
  track.current.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  if (play) {
   setLoaded(current => ({ ...current, [next]: true }))
   if (!el.getAttribute('src')) el.src = episodes[next].video
   if (el.ended) el.currentTime = 0
   void el.play().catch(() => {})
  }
 }
 useEffect(() => {
  const list = videos.current
  const pause = () => { if (document.hidden) list.forEach(el => el?.pause()) }
  const container = track.current
  const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) list.forEach(el => el?.pause()) }, { threshold: .1 })
  if (container) observer.observe(container)
  document.addEventListener('visibilitychange', pause)
  return () => { observer.disconnect(); list.forEach(el => el?.pause()); document.removeEventListener('visibilitychange', pause); if (scrollTimer.current) clearTimeout(scrollTimer.current) }
 }, [])
 function onScroll() {
  if (scrollTimer.current) clearTimeout(scrollTimer.current)
  scrollTimer.current = setTimeout(() => {
   if (!track.current) return
   const center = track.current.scrollLeft + track.current.clientWidth / 2
   const nearest = videos.current.reduce((best, el, i) => {
    const card = el?.parentElement
    const bestCard = videos.current[best]?.parentElement
    if (!card || !bestCard) return best
    return Math.abs(card.offsetLeft + card.clientWidth / 2 - center) < Math.abs(bestCard.offsetLeft + bestCard.clientWidth / 2 - center) ? i : best
   }, 0)
   if (nearest !== activeRef.current) { pauseOthers(); activeRef.current = nearest; setActive(nearest) }
  }, 160)
 }
 return <div>
  <div className={s.storyWindow}><div className={s.storyTrack} ref={track} onScroll={onScroll}>
   {episodes.map((ep, i) => <article className={s.episode} data-active={active === i} key={ep.id}>
    <video ref={el => { videos.current[i] = el }} poster={ep.poster} preload="none" playsInline controls={active === i && Boolean(loaded[i])} aria-hidden={!loaded[i]}
     aria-label={String(i + 1) + '. ' + copy.episode} onPlay={e => {
      pauseOthers(i)
      if (!e.currentTarget.getAttribute('src')) e.currentTarget.src = ep.video
     }}
     onEnded={() => { if (i < episodes.length - 1 && !document.hidden) select(i + 1, true) }} />
    <button type="button" onClick={() => select(i, true)} aria-pressed={active === i}><span>{ep.id} / {copy.episode}</span>{copy.play}<Icon name="play" width="16" height="16"/></button>
   </article>)}
  </div></div>
  <div className={s.storyControls}><button type="button" disabled={active === 0} onClick={() => select(active - 1)} aria-label={copy.previous}><Icon name="arrow" style={{ transform:'rotate(180deg)' }}/></button>
   <input type="range" aria-label={copy.storySlider} min={0} max={episodes.length - 1} step={1} value={active} onChange={e => select(Number(e.target.value))}/>
   <button type="button" disabled={active === episodes.length - 1} onClick={() => select(active + 1)} aria-label={copy.next}><Icon name="arrow"/></button><output aria-live="polite">{active + 1} / {episodes.length}</output>
  </div>
 </div>
}
