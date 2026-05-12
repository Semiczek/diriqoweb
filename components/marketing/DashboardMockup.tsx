'use client'

import Image from 'next/image'
import { useEffect, useRef, type PointerEvent } from 'react'

import { formatEurValueForLocale } from '@/lib/localized-currency'
import type { Locale } from '@/lib/marketing/content'

type DashboardMockupProps = {
  dashboardTitle: string
  locale: Locale
}

const dashboardMockupSources: Record<Locale, string> = {
  cs: '/product/diriqo-demo-dashboard-app-cs.png',
  en: '/product/diriqo-demo-dashboard-app-en.png',
  de: '/product/diriqo-demo-dashboard-app-de.png',
  pl: '/product/diriqo-demo-dashboard-app-pl.png',
  hu: '/product/diriqo-demo-dashboard-app-hu.png',
  es: '/product/diriqo-demo-dashboard-app-es.png',
  it: '/product/diriqo-demo-dashboard-app-it.png',
  fr: '/product/diriqo-demo-dashboard-app-fr.png',
}

const mockupRevenueCopy: Record<Locale, (amount: string) => string> = {
  cs: (amount) => `Objednávky k odbavení za květen 2026: ${amount}.`,
  en: (amount) => `Orders to handle in May 2026: ${amount}.`,
  de: (amount) => `Aufträge im Mai 2026: ${amount}.`,
  pl: (amount) => `Zlecenia do obsługi w maju 2026: ${amount}.`,
  hu: (amount) => `Május 2026 munkái: ${amount}.`,
  es: (amount) => `Trabajos de mayo 2026: ${amount}.`,
  it: (amount) => `Lavori da gestire a maggio 2026: ${amount}.`,
  fr: (amount) => `Interventions à traiter en mai 2026 : ${amount}.`,
}

export function DashboardMockup({ dashboardTitle, locale }: DashboardMockupProps) {
  const src = dashboardMockupSources[locale]
  const revenue = formatEurValueForLocale(2910, locale)
  const waitingInvoice = formatEurValueForLocale(1070, locale)
  const jobProfit = formatEurValueForLocale(1874, locale)
  const panelRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  function updateTransform(transform: string) {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      if (panelRef.current) {
        panelRef.current.style.transform = transform
      }
    })
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    const rotateX = (-y * 1.5).toFixed(2)
    const rotateY = (x * 1.9).toFixed(2)
    const moveX = (x * 5).toFixed(2)
    const moveY = (y * 4).toFixed(2)

    updateTransform(`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY}px, 0)`)
  }

  return (
    <div
      className="group relative isolate"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => updateTransform('perspective(1400px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)')}
    >
      <div aria-hidden="true" className="absolute -inset-7 rounded-[2.4rem] bg-cyan-300/[0.16] blur-2xl transition duration-300 group-hover:bg-cyan-300/[0.22]" />
      <div aria-hidden="true" className="absolute -inset-x-3 -inset-y-9 rounded-[2.6rem] bg-violet-500/[0.1] blur-3xl transition duration-300 group-hover:bg-violet-500/[0.15]" />
      <div aria-hidden="true" className="absolute inset-x-[8%] -bottom-9 h-16 rounded-full bg-cyan-300/[0.16] blur-2xl" />
      <div
        ref={panelRef}
        className="relative transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)' }}
      >
        <div className="marketing-float relative overflow-hidden rounded-[1.35rem] border border-cyan-100/40 bg-white/[0.9] p-1 shadow-[0_44px_128px_rgba(2,6,23,0.5),0_0_50px_rgba(6,182,212,0.17),0_0_42px_rgba(124,58,237,0.11),0_0_0_1px_rgba(255,255,255,0.2)] ring-1 ring-white/[0.2] backdrop-blur-xl">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.46)_0%,transparent_32%,rgba(6,182,212,0.09)_62%,rgba(124,58,237,0.12)_100%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-violet-200/45" />
          <div className="relative w-full overflow-hidden rounded-[1rem] bg-slate-100" style={{ containerType: 'inline-size' }}>
            <Image
              src={src}
              alt={dashboardTitle}
              width={1888}
              height={999}
              priority
              className="block h-auto w-full select-none"
              draggable={false}
              sizes="(min-width: 1280px) 64vw, (min-width: 1024px) 58vw, 100vw"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <span
                className="absolute left-[19.6%] top-[31.3%] w-[36%] rounded-[0.35cqw] bg-[#f4f8ff]/95 px-[0.35cqw] py-[0.12cqw] font-medium text-[#334155]"
                style={{ fontSize: 'clamp(7px, 0.88cqw, 17px)', lineHeight: 1.35 }}
              >
                {mockupRevenueCopy[locale](revenue)}
              </span>
              <span
                className="absolute left-[66.9%] top-[62.9%] min-w-[9.3%] rounded-[0.45cqw] bg-[#fffaf5] px-[0.35cqw] py-[0.1cqw] font-black text-[#020617]"
                style={{ fontSize: 'clamp(10px, 1.58cqw, 30px)', lineHeight: 1.18 }}
              >
                {waitingInvoice}
              </span>
              <span
                className="absolute left-[82.55%] top-[62.9%] min-w-[9.4%] rounded-[0.45cqw] bg-[#0d3452] px-[0.35cqw] py-[0.1cqw] font-black text-white"
                style={{ fontSize: 'clamp(10px, 1.58cqw, 30px)', lineHeight: 1.18 }}
              >
                {jobProfit}
              </span>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18)_0%,transparent_28%,transparent_66%,rgba(6,182,212,0.11)_100%)] mix-blend-screen" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-[7%] top-0 h-1/3 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,transparent_100%)] opacity-60" />
            <span aria-hidden="true" className="dashboard-sidebar-glow absolute left-[1.8%] top-[12.5%] h-[5.1%] w-[9.2%] rounded-lg bg-[linear-gradient(90deg,rgba(124,58,237,0.16),rgba(34,211,238,0.22))] shadow-[0_0_18px_rgba(6,182,212,0.22)] mix-blend-screen" />
            <span aria-hidden="true" className="dashboard-live-dot absolute left-[2.1%] top-[13.2%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.58)]" />
            <span aria-hidden="true" className="dashboard-live-dot absolute left-[14.9%] top-[38.5%] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(168,85,247,0.5)]" style={{ animationDelay: '650ms' }} />
            <span aria-hidden="true" className="dashboard-soft-shimmer absolute left-[42%] top-[36%] h-[9%] w-[22%] rounded-xl bg-white/[0.08]" />
            <span aria-hidden="true" className="dashboard-soft-shimmer absolute right-[8%] top-[50%] h-[12%] w-[16%] rounded-xl bg-cyan-100/[0.1]" style={{ animationDelay: '1.2s' }} />
            <span aria-hidden="true" className="absolute left-[51%] top-[63%] h-1.5 w-10 rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/45 to-violet-300/0 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  )
}
