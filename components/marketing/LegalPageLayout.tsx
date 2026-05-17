import Link from 'next/link'

import {
  getLegalPageNavigation,
  legalOperator,
  type LegalDocument,
  type LegalPageKey,
  type LegalTable,
} from '@/lib/marketing/legal-documents'
import type { Locale } from '@/lib/marketing/content'

type LegalPageLayoutProps = {
  document: LegalDocument
  locale: Locale
  page: LegalPageKey
}

export function LegalPageLayout({ document, locale, page }: LegalPageLayoutProps) {
  const navigation = getLegalPageNavigation(locale)
  const operatorLabel = locale === 'cs' ? 'Provozovatel' : 'Operator'
  const contactLabel = locale === 'cs' ? 'Kontakt' : 'Contact'

  return (
    <main className="bg-slate-50">
      <section className="dark-mesh-bg relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16">
        <div aria-hidden="true" className="section-glow-divider absolute inset-x-0 bottom-0 h-px" />
        <div aria-hidden="true" className="diriqo-hero-gridline absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="diriqo-hero-aurora absolute -inset-x-24 -top-24 h-80 opacity-70" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-cyan-200">{document.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal sm:text-6xl">
              {document.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{document.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-black text-cyan-50">
              {document.summaryItems.map((item) => (
                <span key={item} className="rounded-lg border border-white/10 bg-white/[0.08] px-3 py-2 shadow-sm shadow-slate-950/20">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="self-end rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-[0_18px_44px_rgba(2,6,23,0.2)] backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-wide text-cyan-100">{document.updatedLabel}</p>
            <p className="mt-2 text-2xl font-black text-white">{document.lastUpdated}</p>
            <dl className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
              <div>
                <dt className="font-black text-white">{operatorLabel}</dt>
                <dd>{legalOperator.name}</dd>
              </div>
              <div>
                <dt className="font-black text-white">{contactLabel}</dt>
                <dd>
                  <a href={`mailto:${legalOperator.email}`} className="text-cyan-100 hover:text-white">
                    {legalOperator.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="marketing-grid-bg pointer-events-none absolute inset-0 opacity-[0.28]" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:px-8">
          <aside className="hidden lg:block">
            <div className="sticky top-28 grid gap-5">
              <nav className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm shadow-slate-900/5" aria-label={document.navigationTitle}>
                <p className="px-3 py-2 text-xs font-black uppercase tracking-wide text-slate-500">{document.navigationTitle}</p>
                <div className="grid gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      aria-current={item.key === page ? 'page' : undefined}
                      className={`rounded-lg px-3 py-2 text-sm font-black transition ${
                        item.key === page
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <nav className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm shadow-slate-900/5" aria-label={document.tocTitle}>
                <p className="px-3 py-2 text-xs font-black uppercase tracking-wide text-slate-500">{document.tocTitle}</p>
                <div className="grid gap-1">
                  {document.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-lg px-3 py-2 text-sm font-bold leading-5 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          <article className="min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 sm:p-8 lg:p-10">
            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-4 text-sm leading-6 text-blue-950">
              <span className="font-black">{document.updatedLabel}: </span>
              <span>{document.lastUpdated}. </span>
              <span>{document.updateNotice}</span>
            </div>

            <div className="mt-10 grid gap-12">
              {document.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                  <div className="mt-4 grid gap-4 text-base leading-8 text-slate-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="grid gap-2 pl-5">
                        {section.bullets.map((item) => (
                          <li key={item} className="list-disc pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.table ? <LegalTableView table={section.table} /> : null}
                    {section.note ? (
                      <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                        {section.note}
                      </p>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

function LegalTableView({ table }: { table: LegalTable }) {
  return (
    <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-[760px] w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs font-black uppercase tracking-wide text-slate-500">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {table.rows.map((row) => (
            <tr key={row.join('|')} className="align-top">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-4 py-4 leading-6">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
