import { getFieldWorkCopy } from '@/components/marketing/fieldWorkCopy'
import type { MarketingContent } from '@/lib/marketing/content'
import { MobileAppMockup } from './MobileAppMockup'

type MobileWorkerSectionProps = {
  content: MarketingContent
}

const phoneShowcaseLabels: Record<
  MarketingContent['locale'],
  { admin: string; rewards: string; calendar: string }
> = {
  cs: {
    admin: 'Admin vidí zálohy, volna a kontrolu práce.',
    rewards: 'Pracovník má přehled odměny a může požádat o zálohu.',
    calendar: 'Kalendář drží zakázky, směny a přehledy pohromadě.',
  },
  en: {
    admin: 'Admin sees advances, time off and work checks.',
    rewards: 'Workers see their reward estimate and can request an advance.',
    calendar: 'Calendar keeps jobs, shifts and overview together.',
  },
  de: {
    admin: 'Admin sieht Vorschüsse, Abwesenheiten und Arbeitskontrolle.',
    rewards: 'Mitarbeiter sehen den Lohnüberblick und können Vorschuss anfragen.',
    calendar: 'Kalender hält Aufträge, Schichten und Übersicht zusammen.',
  },
  pl: {
    admin: 'Admin widzi zaliczki, wolne i kontrolę pracy.',
    rewards: 'Pracownik widzi wypłatę i może poprosić o zaliczkę.',
    calendar: 'Kalendarz trzyma zlecenia, zmiany i przegląd razem.',
  },
  hu: {
    admin: 'Az admin látja az előlegeket, távolléteket és ellenőrzést.',
    rewards: 'A dolgozó látja a díj becslését és kérhet előleget.',
    calendar: 'A naptár együtt tartja a munkákat, műszakokat és áttekintést.',
  },
  es: {
    admin: 'El admin ve anticipos, ausencias y control del trabajo.',
    rewards: 'El trabajador ve el pago estimado y puede pedir un anticipo.',
    calendar: 'El calendario une trabajos, turnos y vista general.',
  },
  it: {
    admin: 'L’admin vede anticipi, assenze e controllo del lavoro.',
    rewards: 'L’operatore vede il compenso stimato e può chiedere un anticipo.',
    calendar: 'Il calendario tiene insieme lavori, turni e panoramica.',
  },
  fr: {
    admin: 'L’admin voit avances, absences et contrôle du travail.',
    rewards: 'L’équipier voit le gain estimé et peut demander une avance.',
    calendar: 'Le calendrier garde interventions, shifts et suivi ensemble.',
  },
}

export function MobileWorkerSection({ content }: MobileWorkerSectionProps) {
  const copy = getFieldWorkCopy(content.locale)
  const labels = phoneShowcaseLabels[content.locale]

  return (
    <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_50%,#171544_100%)] py-16 text-white sm:py-20">
      <div aria-hidden="true" className="section-glow-divider absolute inset-x-0 top-0 h-px" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/18 blur-3xl" />
        <div className="diriqo-hero-gridline absolute inset-0 opacity-[0.22]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="reveal-up">
          <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{copy.mobile.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-normal text-white sm:text-5xl">
            {copy.mobile.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{copy.mobile.text}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {copy.mobile.bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold leading-6 text-slate-100 shadow-[0_18px_44px_rgba(2,6,23,0.22)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                <span className="mr-2 text-cyan-200">&#10003;</span>
                {bullet}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up relative">
          <div aria-hidden="true" className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-cyan-400/18 blur-3xl" />
          <div className="relative mx-auto max-w-2xl rounded-[2rem] border border-white/14 bg-white/[0.07] p-4 shadow-[0_30px_90px_rgba(2,6,23,0.46),0_0_40px_rgba(6,182,212,0.14)] ring-1 ring-cyan-200/10 backdrop-blur-2xl">
            <div className="grid gap-4 sm:grid-cols-3 sm:items-start">
              {[
                { label: labels.admin, screen: 'admin' as const, shift: 'sm:translate-y-7' },
                { label: labels.rewards, screen: 'rewards' as const, shift: 'sm:-translate-y-3' },
                { label: labels.calendar, screen: 'calendar' as const, shift: 'sm:translate-y-7' },
              ].map((item) => (
                <div key={item.screen} className={item.shift}>
                  <MobileAppMockup content={content} screen={item.screen} className="max-w-[13rem] sm:max-w-[10.5rem] lg:max-w-[11rem]" />
                  <p className="mx-auto mt-3 max-w-[13rem] text-center text-xs font-bold leading-5 text-slate-200 sm:max-w-[10.5rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-200/14 bg-slate-950/72 p-4 text-sm font-bold leading-6 text-slate-300">
              {copy.mobile.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
