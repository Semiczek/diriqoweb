'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { DemoBanner } from '@/components/demo/DemoBanner'
import { DemoLocalizer } from '@/components/demo/DemoLocalizer'
import {
  demoCalendarEvents,
  demoCompany,
  demoCustomers,
  demoInvoices,
  demoJobs,
  demoQuotes,
  demoUser,
  demoWorkers,
  type DemoBillingState,
  type DemoInvoiceStatus,
  type DemoJobWorkState,
  type DemoQuoteStatus,
  type DemoWorker,
} from '@/lib/demo/demo-data'
import { translateDemoText } from '@/lib/demo/demo-localization'
import { formatEurValueForLocale, getLocalizedCurrencyFormat } from '@/lib/localized-currency'
import { localeLabels, type Locale } from '@/lib/marketing/content'

type DemoSection =
  | 'dashboard'
  | 'jobs'
  | 'customers'
  | 'workers'
  | 'calendar'
  | 'invoices'
  | 'quotes'
  | 'settings'
  | 'help'

type ParsedRoute =
  | { section: 'dashboard' }
  | { section: 'jobs'; id?: string }
  | { section: 'customers'; id?: string }
  | { section: 'workers'; id?: string }
  | { section: 'calendar' }
  | { section: 'invoices'; id?: string }
  | { section: 'quotes'; id?: string; publicPreview?: boolean }
  | { section: 'settings' }
  | { section: 'help' }

type DemoMoneyFormatter = (value: number) => string
type DemoDateFormatter = (value: string) => string

const dateLocales: Record<Locale, string> = {
  cs: 'cs-CZ',
  en: 'en-US',
  de: 'de-DE',
  pl: 'pl-PL',
  hu: 'hu-HU',
  es: 'es-ES',
  it: 'it-IT',
  fr: 'fr-FR',
}

const navGroups: Array<{
  title: string
  items: Array<{ label: string; section: DemoSection; href: string; active?: boolean }>
}> = [
  {
    title: 'HLAVNÍ',
    items: [
      { label: 'Přehled', section: 'dashboard', href: '/demo/dashboard' },
      { label: 'Zakázky', section: 'jobs', href: '/demo/jobs' },
      { label: 'Zákazníci', section: 'customers', href: '/demo/customers' },
    ],
  },
  {
    title: 'TÝM',
    items: [
      { label: 'Pracovníci', section: 'workers', href: '/demo/workers' },
      { label: 'Kalendář', section: 'calendar', href: '/demo/calendar' },
      { label: 'Nepřítomnosti', section: 'workers', href: '/demo/workers', active: false },
      { label: 'Žádosti o zálohy', section: 'workers', href: '/demo/workers', active: false },
    ],
  },
  {
    title: 'FINANCE',
    items: [
      { label: 'Fakturace', section: 'invoices', href: '/demo/invoices' },
      { label: 'Kalkulace', section: 'quotes', href: '/demo/quotes', active: false },
      { label: 'Cenové nabídky', section: 'quotes', href: '/demo/quotes' },
    ],
  },
  {
    title: 'NASTAVENÍ',
    items: [{ label: 'Společnost', section: 'settings', href: '/demo/settings' }],
  },
  {
    title: 'PODPORA',
    items: [{ label: 'Nápověda', section: 'help', href: '/demo/help' }],
  },
]

export function ReadOnlyDiriqoDemo({ locale, segments = [] }: { locale: Locale; segments?: string[] }) {
  const route = parseRoute(segments)
  const [toast, setToast] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const demoLink = (href: string) => `/${locale}${href}`

  const showDemoToast = () => {
    setToast(translateDemoText(locale, 'Toto je demo režim. Změny se neukládají.'))
    window.setTimeout(() => setToast(''), 2800)
  }

  const content = renderRoute(route, showDemoToast, locale)

  if (route.section === 'quotes' && route.publicPreview) {
    return (
      <main className="demo-public-page" data-demo-localized-root>
        {content}
        <DemoLocalizer locale={locale} />
        {toast ? <Toast message={toast} onClose={() => setToast('')} /> : null}
      </main>
    )
  }

  return (
    <main className="demo-real-shell" data-demo-localized-root>
      {mobileOpen ? (
        <button
          type="button"
          aria-label={translateDemoText(locale, 'Zavřít menu')}
          className="demo-real-sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
      <aside className={`demo-real-sidebar${mobileOpen ? ' is-mobile-open' : ''}`} data-demo-tour="sidebar">
        <Sidebar activeSection={route.section} locale={locale} onNavigate={() => setMobileOpen(false)} />
      </aside>
      <section className="demo-real-main">
        <div className="demo-real-main-inner">
          <Topbar locale={locale} onOpenMenu={() => setMobileOpen(true)} />
          <DemoBanner locale={locale} />
          {content}
        </div>
      </section>
      <Link className="demo-floating-help" href={demoLink('/demo/help')} aria-label="Nápověda">
        ?
      </Link>
      <DemoLocalizer locale={locale} />
      {toast ? <Toast message={toast} onClose={() => setToast('')} /> : null}
    </main>
  )
}

function parseRoute(segments: string[]): ParsedRoute {
  const [section = 'dashboard', id, tail] = segments

  if (section === 'jobs') return { section: 'jobs', id }
  if (section === 'customers') return { section: 'customers', id }
  if (section === 'workers') return { section: 'workers', id }
  if (section === 'calendar') return { section: 'calendar' }
  if (section === 'invoices') return { section: 'invoices', id }
  if (section === 'quotes') return { section: 'quotes', id, publicPreview: tail === 'public' }
  if (section === 'settings') return { section: 'settings' }
  if (section === 'help') return { section: 'help' }
  return { section: 'dashboard' }
}

function renderRoute(route: ParsedRoute, onDemoAction: () => void, locale: Locale) {
  const formatMoneyForLocale: DemoMoneyFormatter = (value) => formatMoney(value, locale)
  const formatDateForLocale: DemoDateFormatter = (value) => formatDate(value, locale)
  const currencyFormat = getLocalizedCurrencyFormat(locale)

  if (route.section === 'jobs' && route.id) return <JobDetailPage jobId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'jobs') return <JobsPage onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'customers') return <CustomersPage customerId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'workers') return <WorkersPage workerId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'calendar') return <CalendarPage onDemoAction={onDemoAction} formatDate={formatDateForLocale} />
  if (route.section === 'invoices') return <InvoicesPage invoiceId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'quotes' && route.publicPreview) return <PublicQuotePage quoteId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'quotes' && route.id) return <QuoteDetailPage quoteId={route.id} onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'quotes') return <QuotesPage onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} formatDate={formatDateForLocale} />
  if (route.section === 'settings') return <SettingsPage onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} currencyCode={currencyFormat.currency} intlLocale={currencyFormat.locale} />
  if (route.section === 'help') return <HelpPage />
  return <DashboardPage onDemoAction={onDemoAction} formatMoney={formatMoneyForLocale} />
}

function Sidebar({ activeSection, locale, onNavigate }: { activeSection: DemoSection; locale: Locale; onNavigate: () => void }) {
  return (
    <div className="demo-real-sidebar-inner">
      <div className="demo-real-logo">
        <Image src="/diriqo-logo-full.png" alt="Diriqo" width={138} height={48} priority />
      </div>
      <div className="demo-real-company-chip">{demoCompany.name}</div>
      <nav className="demo-real-nav" aria-label={translateDemoText(locale, 'Demo navigace')}>
        {navGroups.map((group) => (
          <div key={group.title} className="demo-real-nav-group">
            <div className="demo-real-nav-title">{translateDemoText(locale, group.title)}</div>
            {group.items.map((item) => {
              const active = item.active !== false && activeSection === item.section

              return (
                <Link
                  key={`${group.title}-${item.label}`}
                  href={`/${locale}${item.href}`}
                  onClick={onNavigate}
                  className={`demo-real-nav-link${active ? ' is-active' : ''}`}
                >
                  <span className="demo-real-nav-dot">
                    <span />
                  </span>
                  <span>{translateDemoText(locale, item.label)}</span>
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
    </div>
  )
}

function Topbar({ locale, onOpenMenu }: { locale: Locale; onOpenMenu: () => void }) {
  return (
    <header className="demo-real-topbar">
      <button type="button" className="demo-mobile-menu-button-real" onClick={onOpenMenu} aria-label={translateDemoText(locale, 'Otevřít menu')}>
        <span />
        <span />
        <span />
      </button>
      <button type="button" className="demo-company-switch">
        {demoCompany.name}
      </button>
      <div className="demo-topbar-right">
        <label className="demo-language-control">
          <span>{translateDemoText(locale, 'Jazyk')}</span>
          <select defaultValue={locale} onChange={(event) => event.currentTarget.blur()}>
            <option value={locale}>{localeLabels[locale]}</option>
          </select>
        </label>
        <button type="button" className="demo-user-chip">
          <span>{demoUser.initials}</span>
          {demoUser.name}
        </button>
      </div>
    </header>
  )
}

function DashboardPage({ onDemoAction, formatMoney }: { onDemoAction: () => void; formatMoney: DemoMoneyFormatter }) {
  const todayJobs = demoJobs.filter((job) => job.date === '2026-05-09')
  const waitingCheck = demoJobs.filter((job) => job.workState === 'waiting_check')
  const waitingInvoice = demoJobs.filter((job) => job.billingState === 'waiting_for_invoice')
  const doneThisMonth = demoJobs.filter((job) => job.workState === 'done' || job.billingState === 'waiting_for_invoice')
  const revenue = sum(demoJobs.map((job) => job.price))
  const profit = sum(demoJobs.map((job) => job.profit))
  const workingWorkers = demoWorkers.filter((worker) => worker.status === 'working')
  const issues = [
    ...waitingInvoice.map((job) => ({ title: 'Čeká na fakturaci', text: job.title, href: `/demo/jobs/${job.id}` })),
    ...waitingCheck.map((job) => ({ title: 'Čeká na kontrolu', text: job.title, href: `/demo/jobs/${job.id}` })),
    ...demoJobs
      .filter((job) => job.workState === 'problem' || job.billingState === 'overdue')
      .map((job) => ({ title: 'Problém k řešení', text: job.title, href: `/demo/jobs/${job.id}` })),
  ].slice(0, 5)

  return (
    <div className="demo-page-wrap">
      <section className="demo-hero-card">
        <div className="demo-hero-glow-one" />
        <div className="demo-hero-glow-two" />
        <div className="demo-hero-main">
          <div>
            <h1>Přehled firmy</h1>
            <span className="demo-date-pill">sobota 9. května</span>
            <p>Objednávky k odbavení za květen 2026: {formatMoney(revenue)}.</p>
            <div className="demo-dashboard-period-row">
              <button type="button" className="demo-period-button" onClick={onDemoAction}>Předchozí měsíc</button>
              <button type="button" className="demo-period-button is-current" onClick={onDemoAction}>květen 2026</button>
              <button type="button" className="demo-period-button" onClick={onDemoAction}>Aktuální měsíc</button>
              <button type="button" className="demo-period-button" onClick={onDemoAction}>Další měsíc</button>
            </div>
            <div className="demo-quick-actions">
              <button type="button" className="demo-primary-button" onClick={onDemoAction}>
                Nová zakázka
              </button>
              <Link className="demo-secondary-button" href="/demo/jobs">Zakázky</Link>
              <Link className="demo-secondary-button" href="/demo/customers">Zákazníci</Link>
            </div>
          </div>
          <div className="demo-quick-note">
            <h2>Rychlá poznámka</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                onDemoAction()
              }}
            >
              <input placeholder="Napsat, co chci udělat..." />
              <button type="submit">Přidat</button>
            </form>
            <div className="demo-note-row">
              <label><input type="checkbox" readOnly /> Zavolat zákazníkovi</label>
              <button type="button" aria-label="Odebrat poznámku" onClick={onDemoAction}>×</button>
            </div>
            <div className="demo-note-row">
              <label><input type="checkbox" readOnly /> Zkontrolovat reklamaci u vstupu</label>
              <button type="button" aria-label="Odebrat poznámku" onClick={onDemoAction}>×</button>
            </div>
          </div>
        </div>
      </section>

      <section data-demo-tour="dashboard-kpi">
        <div className="demo-section-heading">
          <span>KPI</span>
          <h2>Čísla za květen 2026</h2>
        </div>
        <div className="demo-kpi-grid">
          <KpiCard title="Dnešní zakázky" value={todayJobs.length} hint="Naplánované nebo běžící dnes" />
          <KpiCard title="Aktivní pracovníci" value={workingWorkers.length} hint="Lidé na směně nebo u zakázky" />
          <KpiCard title="Hotovo tento měsíc" value={doneThisMonth.length} hint="Dokončené zakázky za květen 2026" />
          <KpiCard title="Čeká na fakturaci" value={formatMoney(sum(waitingInvoice.map((job) => job.price)))} hint={`${waitingInvoice.length} zakázky čekají na fakturu`} urgent />
          <KpiCard title="Zisk zakázek" value={formatMoney(profit)} hint="Cena minus práce a náklady" dark />
        </div>
      </section>

      <section className="demo-command-card" data-demo-tour="attention">
        <div className="demo-panel-header">
          <div>
            <span>Command center</span>
            <h2>Co potřebuje pozornost</h2>
            <p>Klikni na problém, otevři detail a projdi ho přímo odsud.</p>
          </div>
        </div>
        <div className="demo-command-list">
          {issues.map((issue) => (
            <Link key={`${issue.title}-${issue.text}`} href={issue.href} className="demo-command-row">
              <span>!</span>
              <strong>{issue.title}</strong>
              <small>{issue.text}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="demo-two-column">
        <Panel title="Dnes" subtitle="Lidé v práci, dnešní zakázky a odpracované hodiny.">
          <div className="demo-summary-row">
            <SummaryPill label="V práci" value={workingWorkers.length} />
            <SummaryPill label="Zakázky dnes" value={todayJobs.length} />
            <SummaryPill label="Hodiny" value="18.5 h" />
          </div>
          <div className="demo-compact-list">
            {todayJobs.map((job) => (
              <Link key={job.id} href={`/demo/jobs/${job.id}`} className="demo-compact-job-row">
                <div>
                  <strong>{job.startTime}</strong>
                  <span>{job.endTime}</span>
                </div>
                <div>
                  <strong>{job.title}</strong>
                  <span>{customerName(job.customerId)}</span>
                </div>
                <StatusBadge label={workStateLabel(job.workState)} tone={workTone(job.workState)} />
              </Link>
            ))}
          </div>
        </Panel>
        <Panel title="Aktivní pracovníci" subtitle="Kdo je právě k dispozici nebo na práci.">
          <div className="demo-worker-list">
            {demoWorkers.slice(0, 4).map((worker) => (
              <Link key={worker.id} href={`/demo/workers/${worker.id}`} className="demo-worker-line">
                <span>{initials(worker.name)}</span>
                <div>
                  <strong>{worker.name}</strong>
                  <small>{worker.role}</small>
                </div>
                <StatusBadge label={workerStatusLabel(worker.status)} tone={worker.status === 'working' ? 'green' : 'gray'} />
              </Link>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  )
}

function JobsPage({ onDemoAction, formatMoney, formatDate }: { onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Zakázky" title="Zakázky" text="Plánuj práci, přiřazuj lidi a sleduj stav zakázek.">
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>Nová zakázka</button>
      </PageHero>

      <FilterCard onDemoAction={onDemoAction}>
        <input placeholder="Hledat zakázku..." />
        <select defaultValue="all">
          <option value="all">Všichni zákazníci</option>
          {demoCustomers.map((customer) => <option key={customer.id}>{customer.name}</option>)}
        </select>
        <input type="month" defaultValue="2026-05" />
      </FilterCard>

      <div className="demo-job-list">
        {demoJobs.map((job, index) => (
          <Link key={job.id} href={`/demo/jobs/${job.id}`} className="demo-job-card" data-demo-tour={index === 0 ? 'job-row' : undefined}>
            <div className="demo-job-card-top">
              <div>
                <h2>{job.title}</h2>
                <p>{customerName(job.customerId)} · {formatDate(job.date)} · {job.startTime}-{job.endTime}</p>
              </div>
              <div className="demo-status-row">
                <StatusBadge label={workStateLabel(job.workState)} tone={workTone(job.workState)} />
                <StatusBadge label={billingStateLabel(job.billingState)} tone={billingTone(job.billingState)} />
              </div>
            </div>
            <div className="demo-meta-grid">
              <Meta label="Cena" value={formatMoney(job.price)} />
              <Meta label="Práce" value={formatMoney(job.laborCost)} />
              <Meta label="Ostatní náklady" value={formatMoney(job.otherCost)} />
              <Meta label="Zisk" value={formatMoney(job.profit)} strong />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function JobDetailPage({ jobId, onDemoAction, formatMoney, formatDate }: { jobId: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const job = demoJobs.find((item) => item.id === jobId) ?? demoJobs[0]
  const assignedWorkers = job.workerIds.map((workerId) => demoWorkers.find((worker) => worker.id === workerId)).filter(Boolean) as DemoWorker[]

  return (
    <div className="demo-page-wrap" data-demo-tour="job-detail">
      <section className="demo-hero-card">
        <Link href="/demo/jobs" className="demo-back-link">← Zakázky</Link>
        <div className="demo-detail-hero-row">
          <div>
            <h1>{job.title}</h1>
            <p>{customerName(job.customerId)} · {formatDate(job.date)} · {job.location}</p>
            <div className="demo-status-row">
              <StatusBadge label={workStateLabel(job.workState)} tone={workTone(job.workState)} />
              <StatusBadge label={billingStateLabel(job.billingState)} tone={billingTone(job.billingState)} />
            </div>
          </div>
          <button type="button" className="demo-secondary-button" onClick={onDemoAction}>Upravit zakázku</button>
        </div>
      </section>

      <div className="demo-kpi-grid">
        <KpiCard title="Fakturováno" value={job.billingState === 'invoiced' || job.billingState === 'paid' ? 'Ano' : 'Ne'} hint={billingStateLabel(job.billingState)} />
        <KpiCard title="Cena zakázky" value={formatMoney(job.price)} hint="Domluvená cena" />
        <KpiCard title="Práce" value={formatMoney(job.laborCost)} hint="Hodiny a sazby" />
        <KpiCard title="Ostatní náklady" value={formatMoney(job.otherCost)} hint="Materiál a doprava" />
        <KpiCard title="Zisk" value={formatMoney(job.profit)} hint="Orientační zisk" dark />
      </div>

      <div className="demo-detail-grid">
        <Panel title="Stav zakázky" subtitle={job.note}>
          <div className="demo-checklist">
            {job.checklist.map((item) => (
              <div key={item.id} className="demo-check-row">
                <span>{item.done ? '✓' : ''}</span>
                {item.text}
              </div>
            ))}
          </div>
          <div className="demo-action-row">
            <button type="button" className="demo-primary-button" onClick={onDemoAction}>Označit hotovo</button>
            <button type="button" className="demo-secondary-button" onClick={onDemoAction}>Uložit poznámku</button>
          </div>
        </Panel>

        <Panel title="Fakturace" subtitle="Stav fakturace této zakázky.">
          <div data-demo-tour="billing">
            <Meta label="Stav" value={billingStateLabel(job.billingState)} />
            <Meta label="Cena" value={formatMoney(job.price)} />
            <button type="button" className="demo-primary-button demo-full-button" onClick={onDemoAction}>
              Vystavit fakturu
            </button>
          </div>
        </Panel>

        <Panel title="Harmonogram" subtitle="Termín, místo a čas práce.">
          <div className="demo-meta-grid">
            <Meta label="Datum" value={formatDate(job.date)} />
            <Meta label="Čas" value={`${job.startTime}-${job.endTime}`} />
            <Meta label="Místo" value={job.location} />
          </div>
        </Panel>

        <Panel title="Pracovníci" subtitle="Lidé přiřazení k zakázce.">
          <div className="demo-worker-list">
            {assignedWorkers.map((worker) => (
              <Link key={worker.id} href={`/demo/workers/${worker.id}`} className="demo-worker-line">
                <span>{initials(worker.name)}</span>
                <div>
                  <strong>{worker.name}</strong>
                  <small>{worker.role} · {formatMoney(worker.hourlyRate)}/h</small>
                </div>
              </Link>
            ))}
          </div>
        </Panel>

        <Panel title="Náklady" subtitle="Cena, práce, přímé náklady a zisk.">
          <div className="demo-meta-grid">
            <Meta label="Cena" value={formatMoney(job.price)} />
            <Meta label="Práce" value={formatMoney(job.laborCost)} />
            <Meta label="Ostatní" value={formatMoney(job.otherCost)} />
            <Meta label="Zisk" value={formatMoney(job.profit)} strong />
          </div>
        </Panel>

        <Panel title="Fotodokumentace" subtitle="Fotky před/po patří ke konkrétní zakázce.">
          <div className="demo-photo-grid">
            {job.photos.map((photo) => (
              <div key={photo.id} className={`demo-photo-card tone-${photo.tone}`}>
                <span>{photo.type === 'before' ? 'Před' : photo.type === 'after' ? 'Po' : 'Problém'}</span>
                <strong>{photo.label}</strong>
              </div>
            ))}
          </div>
          <button type="button" className="demo-secondary-button" onClick={onDemoAction}>Přidat fotku</button>
        </Panel>

        <Panel title="Komunikace" subtitle="Krátké poznámky u zakázky.">
          <details>
            <summary>Zobrazit poznámky</summary>
            <p>{job.issue ?? 'Bez otevřeného problému. Poslední změna je uložená u zakázky.'}</p>
          </details>
        </Panel>
      </div>
    </div>
  )
}

function CustomersPage({ customerId, formatMoney, formatDate }: { customerId?: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const selected = customerId ? demoCustomers.find((customer) => customer.id === customerId) : null

  if (selected) {
    const jobs = demoJobs.filter((job) => job.customerId === selected.id)
    return (
      <div className="demo-page-wrap">
        <PageHero eyebrow="Zákazníci" title={selected.name} text={`${selected.contact} · ${selected.email}`} />
        <div className="demo-two-column">
          <Panel title="Kontakt" subtitle={selected.type}>
            <div className="demo-meta-grid">
              <Meta label="E-mail" value={selected.email} />
              <Meta label="Telefon" value={selected.phone} />
              <Meta label="Adresa" value={selected.address} />
            </div>
          </Panel>
          <Panel title="Historie zakázek" subtitle="Zakázky napojené na zákazníka.">
            <div className="demo-compact-list">
              {jobs.map((job) => (
                <Link key={job.id} href={`/demo/jobs/${job.id}`} className="demo-compact-job-row">
                  <div><strong>{formatDate(job.date)}</strong><span>{job.startTime}</span></div>
                  <div><strong>{job.title}</strong><span>{formatMoney(job.price)}</span></div>
                  <StatusBadge label={workStateLabel(job.workState)} tone={workTone(job.workState)} />
                </Link>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    )
  }

  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Zákazníci" title="Zákazníci" text="Kontakty, historie zakázek a obrat na jednom místě." />
      <div className="demo-card-grid">
        {demoCustomers.map((customer) => {
          const jobs = demoJobs.filter((job) => job.customerId === customer.id)
          return (
            <Link key={customer.id} href={`/demo/customers/${customer.id}`} className="demo-resource-card">
              <StatusBadge label={customer.type} tone="blue" />
              <h2>{customer.name}</h2>
              <p>{customer.contact} · {customer.email}</p>
              <div className="demo-meta-grid">
                <Meta label="Zakázky" value={String(jobs.length)} />
                <Meta label="Obrat" value={formatMoney(sum(jobs.map((job) => job.price)))} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function WorkersPage({ workerId, onDemoAction, formatMoney, formatDate }: { workerId?: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const selected = workerId ? demoWorkers.find((worker) => worker.id === workerId) : null

  if (selected) {
    const jobs = demoJobs.filter((job) => job.workerIds.includes(selected.id))
    const payroll = getWorkerPayroll(selected)
    return (
      <div className="demo-page-wrap">
        <PageHero eyebrow="Tým" title={selected.name} text={`${selected.role} · ${selected.phone}`}>
          <button type="button" className="demo-secondary-button" onClick={onDemoAction}>Upravit pracovníka</button>
        </PageHero>
        <div className="demo-kpi-grid">
          <KpiCard title="Hodiny tento měsíc" value={`${payroll.totalHours} h`} hint="Směny a práce v demo měsíci" />
          <KpiCard title="Sazba" value={`${formatMoney(selected.hourlyRate)}/h`} hint="Výchozí hodinovka" />
          <KpiCard title="Zálohy" value={formatMoney(payroll.advance)} hint="Vybráno na zálohách" />
          <KpiCard title="K výplatě" value={formatMoney(payroll.totalPay)} hint="Po odečtení záloh" dark />
        </div>
        <Panel title="Zakázky pracovníka" subtitle="Dnešní a plánované práce.">
          <div className="demo-compact-list">
            {jobs.map((job) => (
              <Link key={job.id} href={`/demo/jobs/${job.id}`} className="demo-compact-job-row">
                <div><strong>{formatDate(job.date)}</strong><span>{job.startTime}</span></div>
                <div><strong>{job.title}</strong><span>{customerName(job.customerId)}</span></div>
                <StatusBadge label={workStateLabel(job.workState)} tone={workTone(job.workState)} />
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    )
  }

  const payrollRows = demoWorkers.map(getWorkerPayroll)
  const totalShiftHours = sum(payrollRows.map((row) => row.shiftHours))
  const totalJobHours = sum(payrollRows.map((row) => row.jobHours))
  const totalPayout = sum(payrollRows.map((row) => row.totalPay))
  const totalPaid = sum(payrollRows.map((row) => row.paid))
  const totalAdvances = sum(payrollRows.map((row) => row.advance))
  const remainingPayout = Math.max(0, totalPayout - totalPaid)

  return (
    <div className="demo-page-wrap">
      <section className="demo-hero-card">
        <span className="demo-date-pill">Tým</span>
        <h1>Pracovníci</h1>
        <p>Pracovní měsíc: 01. 05. 2026 - 31. 05. 2026. Výplata splatná: 18. 06. 2026.</p>
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>+ Přidat pracovníka</button>
      </section>
      <div className="demo-kpi-grid">
        <KpiCard title="Celkové směny" value={`${totalShiftHours} h`} hint="Směny mimo zakázky" />
        <KpiCard title="Celkem na výplaty" value={formatMoney(totalPayout)} hint="Po odečtení záloh" />
        <KpiCard title="Uhrazeno / zbývá" value={`${formatMoney(totalPaid)} / ${formatMoney(remainingPayout)}`} hint="Zatím nic uhrazeno" />
        <KpiCard title="Celkové zálohy" value={formatMoney(totalAdvances)} hint="Vybráno na zálohách" />
        <KpiCard title="Odpracováno na zakázkách" value={`${totalJobHours} h`} hint="Hodiny u zakázek" />
      </div>
      <div className="demo-worker-card-grid">
        {demoWorkers.map((worker) => (
          <WorkerSummaryCard key={worker.id} worker={worker} formatMoney={formatMoney} />
        ))}
      </div>
    </div>
  )
}

function WorkerSummaryCard({ worker, formatMoney }: { worker: DemoWorker; formatMoney: DemoMoneyFormatter }) {
  const payroll = getWorkerPayroll(worker)
  const statusLabel = payroll.totalPay > 0 ? 'Čeká na úhradu' : payroll.advance > 0 ? 'Záloha vybrána' : 'Bez výplaty'
  const statusTone = payroll.totalPay > 0 || payroll.advance > 0 ? 'orange' : 'gray'

  return (
    <Link href={`/demo/workers/${worker.id}`} className="demo-worker-card">
      <div className="demo-worker-card-head">
        <span>{initials(worker.name)}</span>
        <div className="demo-worker-card-title">
          <h2>{worker.name}</h2>
          <p>{worker.email}</p>
        </div>
        <span className="demo-worker-absence-pill">
          <StatusBadge label="Bez hlášené absence" tone="green" />
        </span>
      </div>
      <StatusBadge label={worker.type === 'external' ? 'Externista' : 'Interní pracovník'} tone="blue" />
      <div className="demo-worker-state">
        <span>Stav pracovníka</span>
        <strong>Bez hlášené absence</strong>
      </div>
      <div className="demo-meta-grid">
        <Meta label="Směny" value={`${payroll.shiftHours} h`} />
        <Meta label="Work logy" value={`${payroll.workLogHours} h`} />
        <Meta label="Hodiny ze zakázek" value={`${payroll.jobHours} h`} />
        <Meta label="Zálohy k výplatě" value={formatMoney(payroll.advance)} />
      </div>
      <div className="demo-worker-pay-card">
        <span>Celková odměna po odečtení záloh</span>
        <strong>{formatMoney(payroll.totalPay)}</strong>
        <StatusBadge label={statusLabel} tone={statusTone} />
        <p>Zakázky {formatMoney(payroll.jobHours * worker.hourlyRate)} + směny mimo zakázky {formatMoney(payroll.shiftHours * worker.hourlyRate)} - zálohy k této výplatě {formatMoney(payroll.advance)}</p>
      </div>
      <div className="demo-worker-payroll-lines">
        <div><span>Výchozí hodinovka</span><strong>-</strong></div>
        <div><span>Pracovní měsíc</span><strong>01. 05. 2026 - 31. 05. 2026</strong></div>
        <div><span>Zálohy k výplatě</span><strong>19. 05. 2026 - 17. 06. 2026</strong></div>
        <div><span>Splatnost výplaty</span><strong>18. 06. 2026</strong></div>
      </div>
    </Link>
  )
}

function getWorkerPayroll(worker: DemoWorker) {
  const values: Record<string, { shiftHours: number; workLogHours: number; jobHours: number; advance: number; paid: number }> = {
    'worker-adam': { shiftHours: 0, workLogHours: 0, jobHours: 0, advance: 100, paid: 0 },
    'worker-petra': { shiftHours: 4, workLogHours: 0, jobHours: 0, advance: 0, paid: 0 },
    'worker-martin': { shiftHours: 4, workLogHours: 0, jobHours: 0, advance: 0, paid: 0 },
    'worker-eva': { shiftHours: 0, workLogHours: 0, jobHours: 0, advance: 0, paid: 0 },
    'worker-tomas': { shiftHours: 3, workLogHours: 0, jobHours: 0, advance: 0, paid: 0 },
  }
  const payroll = values[worker.id] ?? { shiftHours: 0, workLogHours: 0, jobHours: 0, advance: 0, paid: 0 }
  const grossPay = (payroll.shiftHours + payroll.workLogHours + payroll.jobHours) * worker.hourlyRate

  return {
    ...payroll,
    totalHours: payroll.shiftHours + payroll.workLogHours + payroll.jobHours,
    totalPay: Math.max(0, grossPay - payroll.advance),
  }
}

function InvoicesPage({ invoiceId, onDemoAction, formatMoney, formatDate }: { invoiceId?: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const selected = invoiceId ? demoInvoices.find((invoice) => invoice.id === invoiceId) : null

  if (selected) {
    return (
      <div className="demo-page-wrap">
        <PageHero eyebrow="Fakturace" title={selected.number} text={`${customerName(selected.customerId)} · ${selected.note}`}>
          <button type="button" className="demo-primary-button" onClick={onDemoAction}>Odeslat fakturu</button>
        </PageHero>
        <div className="demo-kpi-grid" data-demo-tour="billing">
          <KpiCard title="Celkem" value={formatMoney(selected.total)} hint="Částka faktury" dark />
          <KpiCard title="Stav" value={invoiceStatusLabel(selected.status)} hint="Demo stav" />
          <KpiCard title="Splatnost" value={formatDate(selected.dueDate)} hint="Termín úhrady" />
        </div>
      </div>
    )
  }

  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Finance" title="Fakturace" text="Přehled faktur, hotových zakázek a stavu úhrad.">
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>Vytvořit fakturu</button>
      </PageHero>
      <FilterCard onDemoAction={onDemoAction}>
        <input type="month" defaultValue="2026-05" />
        <select defaultValue="all"><option>Vše</option><option>Po splatnosti</option></select>
        <select defaultValue="all"><option>Export Pohoda: vše</option></select>
      </FilterCard>
      <DataTable
        headers={['Číslo', 'Zákazník', 'Vystavení', 'Splatnost', 'Stav', 'Celkem']}
        rows={demoInvoices.map((invoice) => ({
          key: invoice.id,
          href: `/demo/invoices/${invoice.id}`,
          cells: [
            invoice.number,
            customerName(invoice.customerId),
            formatDate(invoice.issueDate),
            formatDate(invoice.dueDate),
            invoiceStatusLabel(invoice.status),
            formatMoney(invoice.total),
          ],
        }))}
      />
    </div>
  )
}

function QuotesPage({ onDemoAction, formatMoney, formatDate }: { onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Prodej" title="Cenové nabídky" text="Připravujte nabídky z položek a sledujte reakce zákazníka.">
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>Vytvořit z kalkulace</button>
      </PageHero>
      <FilterCard onDemoAction={onDemoAction}>
        <select defaultValue="all"><option>Všichni zákazníci</option></select>
        <input type="month" defaultValue="2026-05" />
        <select defaultValue="all"><option>Všechny stavy</option></select>
      </FilterCard>
      <div className="demo-job-list">
        {demoQuotes.map((quote) => (
          <Link key={quote.id} href={`/demo/quotes/${quote.id}`} className="demo-resource-card">
            <div className="demo-job-card-top">
              <div>
                <p>{quote.number}</p>
                <h2>{quote.title}</h2>
              </div>
              <StatusBadge label={quoteStatusLabel(quote.status)} tone={quoteTone(quote.status)} />
            </div>
            <div className="demo-meta-grid">
              <Meta label="Zákazník" value={customerName(quote.customerId)} />
              <Meta label="Datum" value={formatDate(quote.quoteDate)} />
              <Meta label="Platnost" value={formatDate(quote.validUntil)} />
              <Meta label="Cena" value={formatMoney(quote.total)} strong />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function QuoteDetailPage({ quoteId, onDemoAction, formatMoney, formatDate }: { quoteId?: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const quote = demoQuotes.find((item) => item.id === quoteId) ?? demoQuotes[0]

  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Cenové nabídky" title={quote.title} text={`${quote.number} · ${customerName(quote.customerId)} · platnost ${formatDate(quote.validUntil)}`}>
        <Link className="demo-secondary-button" href={`/demo/quotes/${quote.id}/public`}>Veřejný náhled</Link>
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>Odeslat zákazníkovi</button>
      </PageHero>
      <div className="demo-detail-grid">
        <Panel title="Položky nabídky" subtitle={quote.note}>
          <DataTable
            headers={['Položka', 'Množství', 'Jednotka', 'Cena', 'Celkem']}
            rows={quote.rows.map((row) => ({
              key: row.id,
              cells: [row.label, String(row.quantity), row.unit, formatMoney(row.unitPrice), formatMoney(row.total)],
            }))}
          />
        </Panel>
        <Panel title="Interní kalkulace" subtitle="Tahle část není ve veřejném náhledu.">
          <div className="demo-meta-grid">
            <Meta label="Cena nabídky" value={formatMoney(quote.total)} />
            <Meta label="Náklady" value={formatMoney(quote.costs)} />
            <Meta label="Očekávaný zisk" value={formatMoney(quote.profit)} strong />
            <Meta label="Marže" value={`${Math.round((quote.profit / quote.total) * 100)} %`} />
          </div>
        </Panel>
      </div>
    </div>
  )
}

function PublicQuotePage({ quoteId, onDemoAction, formatMoney, formatDate }: { quoteId?: string; onDemoAction: () => void; formatMoney: DemoMoneyFormatter; formatDate: DemoDateFormatter }) {
  const quote = demoQuotes.find((item) => item.id === quoteId) ?? demoQuotes[0]

  return (
    <div className="demo-public-offer">
      <header>
        <Image src="/diriqo-logo-full.png" alt="Diriqo" width={142} height={54} />
        <StatusBadge label={quote.status === 'accepted' ? 'Nabídka přijata' : 'Čeká na vyjádření'} tone={quote.status === 'accepted' ? 'green' : 'orange'} />
      </header>
      <section className="demo-public-hero">
        <span>Cenová nabídka</span>
        <h1>{quote.title}</h1>
        <p>{customerName(quote.customerId)} · platnost do {formatDate(quote.validUntil)}</p>
      </section>
      <div className="demo-kpi-grid">
        <KpiCard title="Celková cena" value={`${formatMoney(quote.total)} bez DPH`} hint="Cena nabídky" dark />
        <KpiCard title="Rozsah" value={`${quote.rows.length} položky`} hint="Přehled služeb" />
        <KpiCard title="Zahájení" value="červen 2026" hint="Orientační termín" />
      </div>
      <Panel title="Co je součástí nabídky" subtitle="Veřejný náhled neukazuje interní náklady ani marži.">
        <DataTable
          headers={['Služba', 'Rozsah', 'Cena']}
          rows={quote.rows.map((row) => ({
            key: row.id,
            cells: [row.label, `${row.quantity} ${row.unit}`, formatMoney(row.total)],
          }))}
        />
      </Panel>
      <section className="demo-public-cta">
        <button type="button" onClick={onDemoAction}>Přijmout nabídku</button>
        <button type="button" onClick={onDemoAction}>Mám dotaz</button>
        <button type="button" onClick={onDemoAction}>Nemám zájem</button>
      </section>
      <Link href={`/demo/quotes/${quote.id}`} className="demo-back-link">← Zpět do administrace</Link>
    </div>
  )
}

function CalendarPage({ onDemoAction, formatDate }: { onDemoAction: () => void; formatDate: DemoDateFormatter }) {
  const [mode, setMode] = useState<'list' | 'week' | 'month'>('week')

  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Kalendář" title="Kalendář" text="Zakázky, úkoly a interní události v jednom provozním plánu.">
        <button type="button" className="demo-primary-button" onClick={onDemoAction}>Nová událost</button>
      </PageHero>
      <section className="demo-filter-card">
        {(['list', 'week', 'month'] as const).map((item) => (
          <button key={item} type="button" className={mode === item ? 'demo-primary-button' : 'demo-secondary-button'} onClick={() => setMode(item)}>
            {item === 'list' ? 'Seznam' : item === 'week' ? 'Týden' : 'Měsíc'}
          </button>
        ))}
      </section>
      {mode === 'list' ? <CalendarList formatDate={formatDate} /> : null}
      {mode === 'week' ? <CalendarWeek /> : null}
      {mode === 'month' ? <CalendarMonth /> : null}
    </div>
  )
}

function CalendarList({ formatDate }: { formatDate: DemoDateFormatter }) {
  const dates = Array.from(new Set(demoCalendarEvents.map((event) => event.date)))

  return (
    <div className="demo-job-list">
      {dates.map((date) => (
        <Panel key={date} title={formatDate(date)} subtitle="Události dne">
          {demoCalendarEvents.filter((event) => event.date === date).map((event) => <CalendarEvent key={event.id} event={event} />)}
        </Panel>
      ))}
    </div>
  )
}

function CalendarWeek() {
  const days = ['Dnes', 'Neděle', 'Pondělí', 'Úterý', 'Středa']
  return (
    <section className="demo-week-grid">
      {days.map((day) => (
        <article key={day} className="demo-calendar-day">
          <h2>{day}</h2>
          {demoCalendarEvents.filter((event) => event.day === day).map((event) => <CalendarEvent key={event.id} event={event} compact />)}
        </article>
      ))}
    </section>
  )
}

function CalendarMonth() {
  return (
    <section className="demo-month-grid">
      {Array.from({ length: 35 }, (_, index) => index + 1).map((day) => (
        <div key={day} className="demo-month-day">
          <strong>{day}</strong>
          {day === 9 ? <span>Úklid kanceláří</span> : null}
          {day === 10 ? <span>Postavební úklid</span> : null}
          {day === 12 ? <span>Kontrola aut</span> : null}
        </div>
      ))}
    </section>
  )
}

function CalendarEvent({ event, compact = false }: { event: (typeof demoCalendarEvents)[number]; compact?: boolean }) {
  const content = (
    <>
      <strong>{event.time}</strong>
      <span>{event.title}</span>
      {!compact ? <small>{event.type === 'job' ? 'Zakázka' : event.type === 'task' ? 'Úkol' : 'Interní'}</small> : null}
    </>
  )

  if (event.jobId) {
    return <Link className="demo-calendar-event" href={`/demo/jobs/${event.jobId}`}>{content}</Link>
  }

  return <div className="demo-calendar-event">{content}</div>
}

function SettingsPage({
  onDemoAction,
  formatMoney,
  currencyCode,
  intlLocale,
}: {
  onDemoAction: () => void
  formatMoney: DemoMoneyFormatter
  currencyCode: string
  intlLocale: string
}) {
  type SettingsTab = 'overview' | 'basic' | 'payroll' | 'jobs' | 'billing' | 'modules' | 'users'

  const tabs: Array<{ key: SettingsTab; label: string; description: string }> = [
    { key: 'overview', label: 'Přehled', description: 'Stav nastavení firmy' },
    { key: 'basic', label: 'Základní údaje', description: 'Identita, kontakt, měna' },
    { key: 'payroll', label: 'Pracovníci a výplaty', description: 'Sazby, zálohy, výjimky' },
    { key: 'jobs', label: 'Zakázky', description: 'Workflow a podklady' },
    { key: 'billing', label: 'Fakturace', description: 'DPH, splatnost, banka' },
    { key: 'modules', label: 'Moduly', description: 'Zapnuté části aplikace' },
    { key: 'users', label: 'Uživatelé', description: 'Členové a role firmy' },
  ]
  const [activeTab, setActiveTab] = useState<SettingsTab>('overview')

  return (
    <div className="demo-page-wrap">
      <section className="demo-hero-card demo-settings-hero">
        <div>
          <span className="demo-date-pill">SaaS nastavení</span>
          <h1>Nastavení společnosti</h1>
          <p>{demoCompany.name} má tady základní firemní údaje, workflow, fakturaci a zapnuté moduly.</p>
        </div>
        <div className="demo-settings-hero-stat">
          <span>Aktivní firma</span>
          <strong>{demoCompany.name}</strong>
          <small>{demoWorkers.length} aktivních členů</small>
        </div>
      </section>

      <div className="demo-settings-layout">
        <aside className="demo-settings-tabs" aria-label="Sekce nastavení">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`demo-settings-tab${activeTab === tab.key ? ' is-active' : ''}`}
              aria-current={activeTab === tab.key ? 'page' : undefined}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="demo-settings-tab-dot" />
              <span>
                <strong>{tab.label}</strong>
                <small>{tab.description}</small>
              </span>
            </button>
          ))}
        </aside>

        <section className="demo-settings-content">
          {activeTab === 'overview' ? (
            <div className="demo-settings-panel">
              <SettingsHeader title="Přehled nastavení" description="Rychlá kontrola toho, jak je demo firma nastavená." />
              <div className="demo-settings-overview-grid">
                <SettingsSummary label="Firma" value={demoCompany.name} detail="admin@demo-cleaning.test" onClick={() => setActiveTab('basic')} />
                <SettingsSummary label="Výplaty" value="Měsíčně" detail={`Výchozí sazba ${formatMoney(18)}/h`} onClick={() => setActiveTab('payroll')} />
                <SettingsSummary label="Zakázky" value="Čeká na kontrolu" detail="Fotky a čas práce jsou povinné" onClick={() => setActiveTab('jobs')} />
                <SettingsSummary label="Fakturace" value="Zapnutá" detail="Splatnost 14 dnů" onClick={() => setActiveTab('billing')} />
                <SettingsSummary label="Moduly" value="10/12" detail="Základní provozní moduly" onClick={() => setActiveTab('modules')} />
              </div>
            </div>
          ) : null}

          {activeTab === 'basic' ? (
            <SettingsForm title="Základní údaje" description="Identita firmy pro aplikaci, faktury a komunikaci." onDemoAction={onDemoAction} buttonLabel="Uložit základní údaje">
              <SettingsField label="Název společnosti" defaultValue={demoCompany.name} />
              <SettingsField label="IČO" defaultValue="12345678" />
              <SettingsField label="DIČ" defaultValue="CZ12345678" />
              <SettingsField label="E-mail" defaultValue="admin@demo-cleaning.test" type="email" />
              <SettingsField label="Telefon" defaultValue="+420 700 200 100" />
              <SettingsField label="Web" defaultValue="demo-cleaning.test" />
              <SettingsField label="Měna" defaultValue={currencyCode} />
              <SettingsField label="Jazyk" defaultValue={intlLocale} />
              <SettingsSelect label="Časové pásmo" defaultValue="Europe/Prague" options={['Europe/Prague', 'Europe/Bratislava', 'Europe/Berlin']} />
              <SettingsField label="Adresa" defaultValue="Ukázková 12, Praha" wide />
            </SettingsForm>
          ) : null}

          {activeTab === 'payroll' ? (
            <div className="demo-settings-content">
              <SettingsForm title="Pracovníci a výplaty" description="Výchozí pravidla pro interní pracovníky, externisty a zálohy." onDemoAction={onDemoAction} buttonLabel="Uložit výplatní nastavení">
                <SettingsSelect label="Výchozí typ pracovníka" defaultValue="Interní pracovník" options={['Interní pracovník', 'Externista / subdodavatel']} />
                <SettingsSelect label="Typ výplaty" defaultValue="Měsíčně" options={['Po směně', 'Týdně', 'Každých 14 dní', 'Měsíčně']} />
                <SettingsField label="Den výplaty v měsíci" defaultValue="18" type="number" />
                <SettingsSelect label="Limit zálohy" defaultValue="Měsíční částka" options={['Měsíční částka', 'Procento z vydělaného']} />
                <SettingsSelect label="Frekvence záloh" defaultValue="Měsíčně" options={['Po směně', 'Týdně', 'Každých 14 dní', 'Měsíčně']} />
                <SettingsField label="Maximální záloha" defaultValue="100" type="number" />
                <SettingsField label="Výchozí hodinová sazba" defaultValue="18" type="number" />
                <SettingsCheckbox label="Povolit zálohy" defaultChecked />
              </SettingsForm>
              <div className="demo-settings-panel">
                <SettingsHeader title="Individuální výjimky" description="Ukázka sazeb a typů pracovníků u konkrétních členů firmy." />
                <div className="demo-settings-worker-list">
                  {demoWorkers.map((worker) => (
                    <div key={worker.id} className="demo-settings-worker-card">
                      <div>
                        <strong>{worker.name}</strong>
                        <span>{worker.email} · {worker.type === 'external' ? 'Externista' : worker.type === 'admin' ? 'Admin firmy' : 'Pracovník'}</span>
                      </div>
                      <div className="demo-settings-mini-grid">
                        <SettingsSelect label="Typ" defaultValue={worker.type === 'external' ? 'Externista' : 'Interní'} options={['Interní', 'Externista']} />
                        <SettingsSelect label="Výplata" defaultValue="Firemní nastavení" options={['Firemní nastavení', 'Po směně', 'Týdně', 'Měsíčně']} />
                        <SettingsField label={`Sazba ${currencyCode}/h`} defaultValue={worker.hourlyRate} type="number" />
                        <SettingsField label="Limit zálohy" defaultValue={worker.id === 'worker-adam' ? 100 : ''} type="number" />
                      </div>
                      <button type="button" className="demo-primary-button" onClick={onDemoAction}>Uložit pracovníka</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === 'jobs' ? (
            <SettingsForm title="Zakázkové workflow" description="Pravidla pro dokončování práce, kontrolu a povinné podklady." onDemoAction={onDemoAction} buttonLabel="Uložit workflow">
              <SettingsSelect label="Po dokončení pracovníkem" defaultValue="Čeká na kontrolu" options={['Čeká na kontrolu', 'Rovnou hotovo']} />
              <SettingsCheckbox label="Vyžadovat kontrolu zakázky" defaultChecked />
              <SettingsCheckbox label="Povolit vícedenní zakázky" defaultChecked />
              <SettingsCheckbox label="Vyžadovat fotky před/po" defaultChecked />
              <SettingsCheckbox label="Vyžadovat checklist" defaultChecked />
              <SettingsCheckbox label="Vyžadovat měření času práce" defaultChecked />
            </SettingsForm>
          ) : null}

          {activeTab === 'billing' ? (
            <SettingsForm title="Fakturace" description="Výchozí splatnost, DPH a bankovní údaje pro nové faktury." onDemoAction={onDemoAction} buttonLabel="Uložit fakturaci">
              <SettingsCheckbox label="Používat fakturaci v systému" defaultChecked />
              <SettingsCheckbox label="Plátce DPH" />
              <SettingsField label="Výchozí sazba DPH" defaultValue="0" type="number" />
              <SettingsField label="Výchozí splatnost ve dnech" defaultValue="14" type="number" />
              <SettingsField label="Prefix faktur" defaultValue="VF" />
              <SettingsField label="Další číslo faktury" defaultValue="19" type="number" />
              <SettingsField label="Bankovní účet" defaultValue="123456789/0100" />
              <SettingsField label="IBAN" defaultValue="CZ6501000000000123456789" />
              <SettingsField label="SWIFT" defaultValue="KOMBCZPP" />
            </SettingsForm>
          ) : null}

          {activeTab === 'modules' ? (
            <SettingsForm title="Zapnuté moduly" description="Jednoduchý přehled částí aplikace dostupných v demo firmě." onDemoAction={onDemoAction} buttonLabel="Uložit moduly">
              <div className="demo-settings-module-grid">
                {['Zakázky', 'Pracovníci', 'Směny', 'Finance', 'Kalendář', 'Nabídky', 'Fakturace', 'Fotky', 'Výplaty', 'E-mail'].map((module) => (
                  <SettingsCheckbox key={module} label={module} defaultChecked />
                ))}
                <SettingsCheckbox label="Zákaznický portál" />
                <SettingsCheckbox label="Poptávky z webu" />
              </div>
            </SettingsForm>
          ) : null}

          {activeTab === 'users' ? (
            <div className="demo-settings-panel">
              <SettingsHeader title="Uživatelé" description="Přehled členů firmy a jejich rolí." />
              <div className="demo-settings-worker-list">
                {demoWorkers.map((worker) => (
                  <div key={worker.id} className="demo-settings-user-row">
                    <div>
                      <strong>{worker.name}</strong>
                      <span>{worker.email}</span>
                    </div>
                    <StatusBadge label={worker.type === 'admin' ? 'Admin firmy' : worker.type === 'external' ? 'Externista' : 'Pracovník'} tone={worker.type === 'admin' ? 'purple' : 'blue'} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  )
}

function SettingsHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="demo-settings-section-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  )
}

function SettingsSummary({ label, value, detail, onClick }: { label: string; value: string; detail: string; onClick: () => void }) {
  return (
    <button type="button" className="demo-settings-summary-card" onClick={onClick}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </button>
  )
}

function SettingsForm({ title, description, children, onDemoAction, buttonLabel }: { title: string; description: string; children: ReactNode; onDemoAction: () => void; buttonLabel: string }) {
  return (
    <form
      className="demo-settings-panel"
      onSubmit={(event) => {
        event.preventDefault()
        onDemoAction()
      }}
    >
      <SettingsHeader title={title} description={description} />
      <div className="demo-settings-form-grid">{children}</div>
      <button type="submit" className="demo-primary-button">{buttonLabel}</button>
    </form>
  )
}

function SettingsField({ label, defaultValue, type = 'text', wide = false }: { label: string; defaultValue: string | number; type?: string; wide?: boolean }) {
  return (
    <label className={`demo-settings-field${wide ? ' is-wide' : ''}`}>
      <span>{label}</span>
      <input type={type} defaultValue={defaultValue} />
    </label>
  )
}

function SettingsSelect({ label, defaultValue, options }: { label: string; defaultValue: string; options: string[] }) {
  return (
    <label className="demo-settings-field">
      <span>{label}</span>
      <select defaultValue={defaultValue}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )
}

function SettingsCheckbox({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="demo-settings-checkbox">
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span>{label}</span>
    </label>
  )
}

function HelpPage() {
  return (
    <div className="demo-page-wrap">
      <PageHero eyebrow="Nápověda" title="Nápověda" text="Krátký průvodce demo režimem." />
      <Panel title="Jak demo používat" subtitle="Můžeš klikat v aplikaci jako v reálném prostředí.">
        <ol className="demo-help-list">
          <li>Otevři zakázku ze seznamu nebo dashboardu.</li>
          <li>Projdi pracovníky, checklist, fotky a fakturaci.</li>
          <li>Klikni na akce. V demu se nic neuloží.</li>
        </ol>
      </Panel>
    </div>
  )
}

function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="demo-hero-card">
      <div>
        <span className="demo-date-pill">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {children ? <div className="demo-action-row">{children}</div> : null}
    </section>
  )
}

function FilterCard({ children, onDemoAction }: { children: ReactNode; onDemoAction: () => void }) {
  return (
    <form
      className="demo-filter-card"
      onSubmit={(event) => {
        event.preventDefault()
        onDemoAction()
      }}
    >
      {children}
      <button type="submit" className="demo-primary-button">Filtrovat</button>
    </form>
  )
}

function Panel({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <section className="demo-panel">
      <div className="demo-panel-header">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function KpiCard({ title, value, hint, urgent = false, dark = false }: { title: string; value: string | number; hint: string; urgent?: boolean; dark?: boolean }) {
  return (
    <article className={`demo-kpi-card${urgent ? ' is-urgent' : ''}${dark ? ' is-dark' : ''}`}>
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{hint}</span>
    </article>
  )
}

function Meta({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="demo-meta-item">
      <span>{label}</span>
      <strong className={strong ? 'is-strong' : ''}>{value}</strong>
    </div>
  )
}

function SummaryPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="demo-summary-pill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function StatusBadge({ label, tone }: { label: string; tone: 'blue' | 'green' | 'orange' | 'gray' | 'purple' | 'red' }) {
  return <span className={`demo-status-badge tone-${tone}`}>{label}</span>
}

function DataTable({ headers, rows }: { headers: string[]; rows: Array<{ key: string; href?: string; cells: string[] }> }) {
  return (
    <section className="demo-table-wrap">
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, index) => (
                <td key={`${row.key}-${headers[index]}`}>
                  {index === 0 && row.href ? <Link href={row.href}>{cell}</Link> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <button type="button" className="demo-toast" onClick={onClose}>
      {message}
    </button>
  )
}

function customerName(customerId: string) {
  return demoCustomers.find((customer) => customer.id === customerId)?.name ?? 'Zákazník'
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0)
}

function formatMoney(value: number, locale: Locale) {
  return formatEurValueForLocale(value, locale)
}

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(dateLocales[locale], { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(`${value}T00:00:00`))
}

function workStateLabel(state: DemoJobWorkState) {
  const labels: Record<DemoJobWorkState, string> = {
    future: 'Naplánováno',
    not_started: 'Nezačalo',
    in_progress: 'V práci',
    waiting_check: 'Čeká na kontrolu',
    done: 'Dokončeno',
    problem: 'Problém',
  }
  return labels[state]
}

function billingStateLabel(state: DemoBillingState) {
  const labels: Record<DemoBillingState, string> = {
    not_ready: 'Není k fakturaci',
    waiting_for_invoice: 'Čeká na fakturaci',
    invoiced: 'Vyfakturováno',
    paid: 'Uhrazeno',
    overdue: 'Po splatnosti',
  }
  return labels[state]
}

function invoiceStatusLabel(state: DemoInvoiceStatus) {
  const labels: Record<DemoInvoiceStatus, string> = {
    ready: 'Připraveno k fakturaci',
    draft: 'Koncept',
    issued: 'Vystavená',
    paid: 'Uhrazená',
    overdue: 'Po splatnosti',
  }
  return labels[state]
}

function quoteStatusLabel(status: DemoQuoteStatus) {
  const labels: Record<DemoQuoteStatus, string> = {
    draft: 'Rozpracováno',
    sent: 'Odesláno',
    accepted: 'Přijato',
    expired: 'Expirováno',
  }
  return labels[status]
}

function workerStatusLabel(status: DemoWorker['status']) {
  if (status === 'working') return 'Dnes pracuje'
  if (status === 'assigned') return 'Přiřazen'
  if (status === 'off') return 'Volno'
  return 'K dispozici'
}

function workTone(state: DemoJobWorkState): 'blue' | 'green' | 'orange' | 'gray' | 'purple' | 'red' {
  if (state === 'in_progress') return 'blue'
  if (state === 'waiting_check') return 'orange'
  if (state === 'done') return 'green'
  if (state === 'problem') return 'red'
  if (state === 'future') return 'purple'
  return 'gray'
}

function billingTone(state: DemoBillingState): 'blue' | 'green' | 'orange' | 'gray' | 'purple' | 'red' {
  if (state === 'waiting_for_invoice') return 'orange'
  if (state === 'invoiced') return 'blue'
  if (state === 'paid') return 'green'
  if (state === 'overdue') return 'red'
  return 'gray'
}

function quoteTone(status: DemoQuoteStatus): 'blue' | 'green' | 'orange' | 'gray' | 'purple' | 'red' {
  if (status === 'accepted') return 'green'
  if (status === 'expired') return 'red'
  if (status === 'sent') return 'orange'
  return 'blue'
}
