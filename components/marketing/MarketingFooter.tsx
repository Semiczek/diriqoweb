import Image from 'next/image'
import Link from 'next/link'

import {
  contactEmail,
  getLoginHref,
  getSignupHref,
  localizePath,
  type Locale,
  type MarketingContent,
} from '@/lib/marketing/content'

type MarketingFooterProps = {
  content: MarketingContent
  locale: Locale
}

export function MarketingFooter({ content, locale }: MarketingFooterProps) {
  return (
    <footer className="dark-mesh-bg relative overflow-hidden bg-slate-950 bg-[linear-gradient(135deg,#06101f_0%,#0a1833_48%,#171544_100%)] text-white">
      <div aria-hidden="true" className="section-glow-divider absolute inset-x-0 top-0 h-px" />
      <div aria-hidden="true" className="diriqo-hero-aurora absolute -inset-x-20 top-0 h-56 opacity-50" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_54px_rgba(2,6,23,0.18)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Image
              src="/diriqo-logo-icon.png"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 object-contain drop-shadow-[0_0_18px_rgba(6,182,212,0.24)]"
            />
            <span className="text-3xl font-black tracking-tight text-white">diriqo</span>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">{content.footer.description}</p>
          <div aria-hidden="true" className="mt-5 h-px w-32 bg-gradient-to-r from-cyan-300/70 to-transparent" />
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-slate-400">{content.footer.web}</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {content.navLinks.map((item) => (
              <Link key={item.href} href={localizePath(locale, item.href)} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-slate-400">{content.footer.legal}</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {content.legalLinks.map((item) => (
              <Link key={item.href} href={localizePath(locale, item.href)} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-slate-400">{content.footer.contact}</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href={`mailto:${contactEmail}`} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
              {contactEmail}
            </a>
            <a href={getLoginHref(locale)} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
              {content.footer.appLogin}
            </a>
            <a href={getSignupHref(locale)} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
              {content.common.trial}
            </a>
            <Link href={localizePath(locale, '/contact')} className="text-slate-300 transition hover:translate-x-0.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.28)]">
              {content.footer.setupHelp}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Diriqo. {content.footer.copyright}
      </div>
    </footer>
  )
}
