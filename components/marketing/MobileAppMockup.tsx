import Image from 'next/image'

import { localeLabels, type MarketingContent } from '@/lib/marketing/content'

type MobileAppMockupProps = {
  content: MarketingContent
}

const mobileLoginCopy: Record<
  MarketingContent['locale'],
  {
    intro: string
    email: string
    password: string
    submit: string
    createCompany: string
  }
> = {
  cs: {
    intro: 'Přihlášení do administrace Diriqo.',
    email: 'E-mail',
    password: 'Heslo',
    submit: 'Přihlásit se',
    createCompany: 'Vytvořit novou firmu',
  },
  en: {
    intro: 'Sign in to Diriqo administration.',
    email: 'E-mail',
    password: 'Password',
    submit: 'Sign in',
    createCompany: 'Create new company',
  },
  de: {
    intro: 'Anmeldung zur Diriqo Verwaltung.',
    email: 'E-Mail',
    password: 'Passwort',
    submit: 'Anmelden',
    createCompany: 'Neue Firma erstellen',
  },
  pl: {
    intro: 'Logowanie do administracji Diriqo.',
    email: 'E-mail',
    password: 'Hasło',
    submit: 'Zaloguj się',
    createCompany: 'Utwórz nową firmę',
  },
  hu: {
    intro: 'Bejelentkezés a Diriqo adminba.',
    email: 'E-mail',
    password: 'Jelszó',
    submit: 'Bejelentkezés',
    createCompany: 'Új cég létrehozása',
  },
  es: {
    intro: 'Acceso a la administración Diriqo.',
    email: 'E-mail',
    password: 'Contraseña',
    submit: 'Iniciar sesión',
    createCompany: 'Crear nueva empresa',
  },
  it: {
    intro: 'Accesso all’amministrazione Diriqo.',
    email: 'E-mail',
    password: 'Password',
    submit: 'Accedi',
    createCompany: 'Crea nuova azienda',
  },
  fr: {
    intro: 'Connexion à l’administration Diriqo.',
    email: 'E-mail',
    password: 'Mot de passe',
    submit: 'Se connecter',
    createCompany: 'Créer une entreprise',
  },
}

const mobileLanguageLabels: Record<MarketingContent['locale'], string> = {
  cs: 'Jazyk',
  en: 'Language',
  de: 'Sprache',
  pl: 'Język',
  hu: 'Nyelv',
  es: 'Idioma',
  it: 'Lingua',
  fr: 'Langue',
}

const mobileSampleEmails: Record<MarketingContent['locale'], string> = {
  cs: 'admin@firma.cz',
  en: 'admin@company.com',
  de: 'admin@firma.de',
  pl: 'admin@firma.pl',
  hu: 'admin@ceg.hu',
  es: 'admin@empresa.es',
  it: 'admin@azienda.it',
  fr: 'admin@entreprise.fr',
}

export function MobileAppMockup({ content }: MobileAppMockupProps) {
  const copy = mobileLoginCopy[content.locale]

  return (
    <div className="mx-auto w-full max-w-[250px] rounded-[30px] border border-white/[0.15] bg-slate-950 p-2 shadow-[0_28px_70px_rgba(2,6,23,0.42),0_0_34px_rgba(6,182,212,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-cyan-950/40">
      <div className="relative overflow-hidden rounded-[24px] bg-slate-100" style={{ aspectRatio: '390 / 844' }}>
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.16),transparent_62%)]" />
        <div className="absolute right-[7%] top-[5%] text-left">
          <p className="mb-1 text-[7px] font-black text-slate-500">{mobileLanguageLabels[content.locale]}</p>
          <div className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[8px] font-black text-slate-950">
            {localeLabels[content.locale]}
          </div>
        </div>

        <div className="flex h-full flex-col items-center px-[9%] pt-[30%] text-center">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/diriqo-logo-icon.png"
              alt=""
              width={76}
              height={76}
              className="h-auto w-[30%] object-contain"
              priority
            />
            <span className="text-xl font-black tracking-tight text-slate-300">diriqo</span>
          </div>

          <p className="mt-12 text-[10px] leading-4 text-slate-500">{copy.intro}</p>

          <div className="mt-5 w-full text-left">
            <label className="text-[10px] font-black text-slate-950">{copy.email}</label>
            <div className="mt-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-500">
              {mobileSampleEmails[content.locale]}
            </div>
          </div>

          <div className="mt-4 w-full text-left">
            <label className="text-[10px] font-black text-slate-950">{copy.password}</label>
            <div className="mt-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-500">
              ********
            </div>
          </div>

          <button
            type="button"
            className="mt-6 min-h-9 w-full rounded-md bg-slate-950 px-3 text-[10px] font-black text-white"
          >
            {copy.submit}
          </button>

          <p className="mt-5 text-[10px] font-black text-blue-600">
            {copy.createCompany}
          </p>
        </div>
      </div>
    </div>
  )
}
