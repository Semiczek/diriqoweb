import {
  formatWebMonthlyPrice,
  webPricingPlans,
  websiteAddonPricing,
  type WebPricingPlanId,
} from '@/lib/marketing/pricing'

export const locales = ['cs', 'en', 'de', 'pl', 'hu', 'es', 'it', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'cs'

export const localeLabels: Record<Locale, string> = {
  cs: 'Čeština',
  en: 'English',
  de: 'Deutsch',
  pl: 'Polski',
  hu: 'Magyar',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français',
}

export const localeShortLabels: Record<Locale, string> = {
  cs: 'CZ',
  en: 'EN',
  de: 'DE',
  pl: 'PL',
  hu: 'HU',
  es: 'ES',
  it: 'IT',
  fr: 'FR',
}

export const htmlLang: Record<Locale, string> = {
  cs: 'cs',
  en: 'en',
  de: 'de',
  pl: 'pl',
  hu: 'hu',
  es: 'es',
  it: 'it',
  fr: 'fr',
}

const fallbackAppUrl = 'https://app.diriqo.com'
const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') || fallbackAppUrl
const appPath = (path: string) => `${appBaseUrl}${path.startsWith('/') ? path : `/${path}`}`

export const appLinks = {
  login: appPath('/sign-in'),
  signup: appPath('/register'),
  app: appBaseUrl,
}

function withLocaleQuery(path: string, locale?: Locale) {
  if (!locale) return path
  const separator = path.includes('?') ? '&' : '?'
  return `${path}${separator}locale=${locale}`
}

export function getLoginHref(locale?: Locale) {
  return appPath(withLocaleQuery('/sign-in', locale))
}

export function getSignupHref(locale?: Locale) {
  return appPath(withLocaleQuery('/register', locale))
}

export function getOnboardingCompanyHref(locale?: Locale) {
  return appPath(withLocaleQuery('/onboarding/company', locale))
}

export const contactEmail = 'support@diriqo.com'

export type PageHref =
  | '/'
  | '/features'
  | '/how-it-works'
  | '/pricing'
  | '/industries'
  | '/demo'
  | '/contact'
  | '/privacy'
  | '/terms'
  | '/cookies'
  | '/gdpr'

export type PageKey =
  | 'home'
  | 'features'
  | 'howItWorks'
  | 'pricing'
  | 'industries'
  | 'demo'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'

export type NavItem = {
  label: string
  href: PageHref
}

export type StepItem = {
  title: string
  text: string
  note?: string
}

export type FeatureCardItem = {
  title: string
  text: string
}

export type PricingPlan = {
  id?: WebPricingPlanId
  name: string
  slug?: WebPricingPlanId
  price: string
  period?: string
  people: string
  description: string
  featured?: boolean
  features: string[]
  ctaLabel?: string
  ctaHref?: string
  monthlyPrice?: number | null
  yearlyPrice?: number | null
  currency?: 'EUR'
  workerLimitMin?: number
  workerLimitMax?: number | null
  contactSales?: boolean
}

export type PricingUiCopy = {
  monthlyLabel: string
  annualLabel: string
  annualBadge: string
  annualSavingText: string
  noCreditCardText: string
  monthlyPeriod: string
  yearlyPeriod: string
}

export type PricingCustomSetupCopy = {
  title: string
  text: string
  cta: string
  href?: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type BeforeAfterCopy = {
  eyebrow: string
  title: string
  text: string
  beforeTitle: string
  afterTitle: string
  beforeItems: string[]
  afterItems: string[]
}

export type SocialProofCopy = {
  eyebrow: string
  title: string
  text: string
  points: string[]
}

export type ProductShowcaseCopy = {
  eyebrow: string
  title: string
  text: string
  pills: string[]
}

export type SignupInfoCopy = {
  eyebrow: string
  title: string
  text: string
  items: string[]
  note: string
  primaryCta: string
}

export type DemoSignupCopy = {
  title: string
  text: string
  cta: string
}

export type AuthPageCopy = {
  register: {
    eyebrow: string
    title: string
    text: string
    helper: string
    email: string
    password: string
    confirmPassword: string
    submit: string
    loadingSubmit: string
    signInPrompt: string
    signInLink: string
    googleUnavailable: string
    accountCreatedCheckEmail: string
    passwordMinLength: string
    passwordsDoNotMatch: string
    createAccountFailed: string
    supabaseMissing: string
  }
  login: {
    eyebrow: string
    title: string
    text: string
    email: string
    password: string
    submit: string
    loadingSubmit: string
    registerPrompt: string
    registerLink: string
    signInFailed: string
    invalidEmail: string
    invalidCredentials: string
    supabaseMissing: string
  }
  onboarding: {
    eyebrow: string
    title: string
    text: string
    companyName: string
    country: string
    language: string
    currency: string
    submit: string
    todo: string
    companyNameMinLength: string
    requiredFields: string
    companyCreateFailed: string
  }
}

type PricingPlanMarketingCopy = {
  name?: string
  people: string
  description: string
  features: string[]
}

export type FeatureModule = {
  title: string
  solves: string
  helps: string
  example: string
}

export type IndustryDetail = {
  title: string
  text: string
  points: string[]
}

export type IndustrySeoGroup = {
  title: string
  intro: string
  professions: string[]
}

export type IndustriesSeoContent = {
  title: string
  intro: string
  groups: IndustrySeoGroup[]
  seoText: string
  problemsTitle: string
  problemsIntro: string
  problems: string[]
}

export type MetadataCopy = {
  title: string
  description: string
}

export type MarketingContent = {
  locale: Locale
  meta: Record<PageKey, MetadataCopy>
  common: {
    login: string
    trial: string
    demo: string
    createAccount: string
    openMenu: string
    closeMenu: string
    popular: string
    notReady: string
  }
  navLinks: NavItem[]
  legalLinks: NavItem[]
  footer: {
    description: string
    web: string
    legal: string
    contact: string
    appLogin: string
    setupHelp: string
    copyright: string
  }
  home: {
    heroEyebrow: string
    heroTitle: string
    heroSubtitle: string
    secondaryCta: string
    heroNote: string
    heroHighlights?: string[]
    problemEyebrow: string
    problemTitle: string
    problemText: string
    solutionEyebrow: string
    solutionTitle: string
    solutionText: string
    stepsEyebrow: string
    stepsTitle: string
    stepsText: string
    featuresEyebrow: string
    featuresTitle: string
    industriesEyebrow: string
    industriesTitle: string
    industriesText?: string
    pricingEyebrow: string
    pricingTitle: string
    finalCtaTitle: string
    finalCtaText: string
  }
  problemItems: string[]
  solutionItems: string[]
  beforeAfter?: BeforeAfterCopy
  socialProof?: SocialProofCopy
  homeSteps: StepItem[]
  featureCards: FeatureCardItem[]
  industries: string[]
  pricingPlans: PricingPlan[]
  pricingUi?: PricingUiCopy
  pricingCustomSetup?: PricingCustomSetupCopy
  addon: {
    title: string
    price: string
    description: string
    features: string[]
    note: string
    ctaLabel?: string
  }
  faqs: FAQItem[]
  featuresPage: {
    eyebrow: string
    title: string
    text: string
    solves: string
    helps: string
    example: string
  }
  featureModules: FeatureModule[]
  howPage: {
    eyebrow: string
    title: string
    text: string
    cards: FeatureCardItem[]
  }
  howItWorksSteps: string[]
  industriesPage: {
    eyebrow: string
    title: string
    text: string
  }
  industryDetails: IndustryDetail[]
  industriesSeo?: IndustriesSeoContent
  demoPage: {
    eyebrow: string
    title: string
    text: string
    samplesTitle: string
    dashboardTitle: string
    dashboardText: string
    mobileTitle: string
    mobileText: string
  }
  contactPage: {
    eyebrow: string
    title: string
    text: string
    setupTitle: string
    setupText: string
    support: string
    form: {
      name: string
      email: string
      company: string
      message: string
      submit: string
    }
  }
  legal: {
    eyebrow: string
    privacy: {
      title: string
      intro: string
      sections: Array<{ title: string; text: string }>
    }
    terms: {
      title: string
      intro: string
      sections: Array<{ title: string; text: string }>
    }
    cookies: {
      title: string
      intro: string
      sections: Array<{ title: string; text: string }>
    }
  }
  mockup: {
    dashboardEyebrow: string
    dashboardTitle: string
    activeJobs: string
    revenue: string
    hours: string
    profit: string
    rows: Array<[string, string, string, string]>
    mobileEyebrow: string
    mobileTitle: string
    mobileJob: string
    mobileTime: string
    photos: string
    time: string
    uploadPhoto: string
  }
}

const baseNavHrefs: PageHref[] = [
  '/features',
  '/how-it-works',
  '/pricing',
  '/industries',
  '/demo',
  '/contact',
]

const legalHrefs: PageHref[] = ['/terms', '/privacy', '/cookies', '/gdpr']

function nav(labels: string[]): NavItem[] {
  return labels.map((label, index) => ({
    label,
    href: baseNavHrefs[index],
  }))
}

function legal(labels: string[]): NavItem[] {
  return legalHrefs.map((href, index) => ({
    label: labels[index] ?? 'GDPR',
    href,
  }))
}

const commonPricing = {
  starterPrice: '19 EUR',
  growthPrice: '39 EUR',
  businessPrice: '79 EUR',
  scalePrice: '149 EUR',
  addonPrice: '+999 EUR',
  addonSetupPrice: websiteAddonPricing.price,
}

export const defaultBeforeAfterCopy: BeforeAfterCopy = {
  eyebrow: 'Před / po',
  title: 'Před Diriqo. Po Diriqo.',
  text: 'Rozdíl není v další složité administrativě. Rozdíl je v tom, že práce konečně drží pohromadě.',
  beforeTitle: 'Před',
  afterTitle: 'Po',
  beforeItems: [
    '50 zpráv ve WhatsAppu',
    'fotky rozházené v galerii',
    'nejasné hodiny lidí',
    'zákazník volá a ptá se na stav',
    'majitel skládá realitu z telefonů a papírků',
  ],
  afterItems: [
    'zakázka má jedno místo',
    'fotky jsou u zakázky',
    'pracovníci vidí práci v mobilu',
    'hodiny a stav práce se ukládají',
    'admin vidí přehled bez obvolávání',
  ],
}

export const defaultSocialProofCopy: SocialProofCopy = {
  eyebrow: 'Provoz v terénu',
  title: 'Postaveno podle reálného provozu v terénu.',
  text: 'Diriqo nevzniká jako složitý ERP. Řeší každodenní situace malých provozních týmů: lidi, zakázky, fotky a změny v plánu.',
  points: [
    'Navrženo pro firmy, které denně řeší lidi, zakázky, fotky a změny v plánu.',
    'Žádná teorie. Diriqo vychází z každodenních problémů malých provozních týmů.',
    'Jednoduché řízení práce bez korporátní vrstvy navíc.',
  ],
}

export const beforeAfterCopyByLocale: Record<Locale, BeforeAfterCopy> = {
  cs: defaultBeforeAfterCopy,
  en: {
    eyebrow: 'Before / after',
    title: 'Before Diriqo. After Diriqo.',
    text: 'The difference is not more administration. The difference is that work finally stays together.',
    beforeTitle: 'Before',
    afterTitle: 'After',
    beforeItems: [
      '50 WhatsApp messages',
      'photos scattered in camera rolls',
      'unclear worker hours',
      'customer calls asking for status',
      'owner pieces reality together from calls and notes',
    ],
    afterItems: [
      'one clear place for every job',
      'photos stay with the job',
      'workers see work on mobile',
      'hours and work status are saved',
      'admin sees the overview without calling around',
    ],
  },
  de: {
    eyebrow: 'Vorher / nachher',
    title: 'Vor Diriqo. Nach Diriqo.',
    text: 'Der Unterschied ist nicht mehr Verwaltung. Der Unterschied ist, dass Arbeit endlich zusammenbleibt.',
    beforeTitle: 'Vorher',
    afterTitle: 'Nachher',
    beforeItems: [
      '50 WhatsApp-Nachrichten',
      'Fotos verstreut in Galerien',
      'unklare Stunden der Mitarbeiter',
      'Kunde ruft wegen Status an',
      'Inhaber setzt alles aus Anrufen und Notizen zusammen',
    ],
    afterItems: [
      'jeder Auftrag hat einen klaren Ort',
      'Fotos bleiben beim Auftrag',
      'Mitarbeiter sehen Arbeit mobil',
      'Stunden und Status werden gespeichert',
      'Admin sieht die Übersicht ohne Nachtelefonieren',
    ],
  },
  pl: {
    eyebrow: 'Przed / po',
    title: 'Przed Diriqo. Po Diriqo.',
    text: 'Różnica nie polega na większej administracji. Różnica polega na tym, że praca wreszcie trzyma się razem.',
    beforeTitle: 'Przed',
    afterTitle: 'Po',
    beforeItems: [
      '50 wiadomości na WhatsAppie',
      'zdjęcia rozsiane w galerii',
      'niejasne godziny pracowników',
      'klient dzwoni i pyta o status',
      'właściciel składa obraz z telefonów i kartek',
    ],
    afterItems: [
      'każde zlecenie ma jedno miejsce',
      'zdjęcia są przy zleceniu',
      'pracownicy widzą pracę w telefonie',
      'godziny i status pracy są zapisane',
      'admin widzi przegląd bez wydzwaniania',
    ],
  },
  hu: {
    eyebrow: 'Előtte / utána',
    title: 'Diriqo előtt. Diriqo után.',
    text: 'A különbség nem több adminisztráció. A különbség az, hogy a munka végre egyben marad.',
    beforeTitle: 'Előtte',
    afterTitle: 'Utána',
    beforeItems: [
      '50 WhatsApp-üzenet',
      'szétszórt fotók a galériában',
      'nem egyértelmű munkaórák',
      'az ügyfél státusz miatt telefonál',
      'a tulajdonos hívásokból és jegyzetekből rakja össze a képet',
    ],
    afterItems: [
      'minden munkának egy helye van',
      'a fotók a munkához tartoznak',
      'a dolgozók mobilon látják a munkát',
      'az órák és státusz mentve vannak',
      'az admin telefonálás nélkül látja az áttekintést',
    ],
  },
  es: {
    eyebrow: 'Antes / después',
    title: 'Antes de Diriqo. Después de Diriqo.',
    text: 'La diferencia no es más administración. La diferencia es que el trabajo por fin queda ordenado.',
    beforeTitle: 'Antes',
    afterTitle: 'Después',
    beforeItems: [
      '50 mensajes de WhatsApp',
      'fotos perdidas en la galería',
      'horas poco claras',
      'el cliente llama para preguntar el estado',
      'el dueño reconstruye todo con llamadas y notas',
    ],
    afterItems: [
      'cada trabajo tiene un lugar',
      'las fotos están en el trabajo',
      'los trabajadores ven el trabajo en móvil',
      'horas y estado quedan guardados',
      'el admin ve todo sin llamar a todos',
    ],
  },
  it: {
    eyebrow: 'Prima / dopo',
    title: 'Prima di Diriqo. Dopo Diriqo.',
    text: 'La differenza non è più amministrazione. La differenza è che il lavoro finalmente resta insieme.',
    beforeTitle: 'Prima',
    afterTitle: 'Dopo',
    beforeItems: [
      '50 messaggi WhatsApp',
      'foto sparse nella galleria',
      'ore dei lavoratori poco chiare',
      'il cliente chiama per sapere lo stato',
      'il titolare ricostruisce tutto da chiamate e note',
    ],
    afterItems: [
      'ogni lavoro ha un posto chiaro',
      'le foto restano nel lavoro',
      'gli operatori vedono il lavoro sul telefono',
      'ore e stato vengono salvati',
      'l’admin vede il quadro senza chiamare tutti',
    ],
  },
  fr: {
    eyebrow: 'Avant / après',
    title: 'Avant Diriqo. Après Diriqo.',
    text: 'La différence, ce n’est pas plus d’administration. C’est que le travail reste enfin au même endroit.',
    beforeTitle: 'Avant',
    afterTitle: 'Après',
    beforeItems: [
      '50 messages WhatsApp',
      'photos dispersées dans la galerie',
      'heures des équipes peu claires',
      'le client appelle pour le statut',
      'le dirigeant recompose tout avec appels et notes',
    ],
    afterItems: [
      'chaque intervention a sa place',
      'les photos restent avec l’intervention',
      'les équipes voient le travail sur mobile',
      'heures et statut sont enregistrés',
      'l’admin voit le suivi sans appeler tout le monde',
    ],
  },
}

export const socialProofCopyByLocale: Record<Locale, SocialProofCopy> = {
  cs: defaultSocialProofCopy,
  en: {
    eyebrow: 'Field operations',
    title: 'Built around real field work.',
    text: 'Diriqo is not a heavy ERP. It handles the daily reality of small operations teams: people, jobs, photos and plan changes.',
    points: [
      'Designed for companies that handle people, jobs, photos and plan changes every day.',
      'No theory. Diriqo comes from real problems of small field teams.',
      'Simple work management without an extra corporate layer.',
    ],
  },
  de: {
    eyebrow: 'Arbeit vor Ort',
    title: 'Gebaut für echten Betrieb vor Ort.',
    text: 'Diriqo ist kein schweres ERP. Es löst den Alltag kleiner operativer Teams: Menschen, Aufträge, Fotos und Planänderungen.',
    points: [
      'Für Unternehmen, die täglich Menschen, Aufträge, Fotos und Planänderungen steuern.',
      'Keine Theorie. Diriqo basiert auf echten Problemen kleiner Teams vor Ort.',
      'Einfache Arbeitssteuerung ohne zusätzliche Konzernschicht.',
    ],
  },
  pl: {
    eyebrow: 'Praca w terenie',
    title: 'Stworzone pod prawdziwą pracę w terenie.',
    text: 'Diriqo nie jest ciężkim ERP. Rozwiązuje codzienność małych zespołów: ludzi, zlecenia, zdjęcia i zmiany planu.',
    points: [
      'Dla firm, które codziennie ogarniają ludzi, zlecenia, zdjęcia i zmiany planu.',
      'Bez teorii. Diriqo wynika z realnych problemów małych zespołów terenowych.',
      'Proste zarządzanie pracą bez korporacyjnej warstwy.',
    ],
  },
  hu: {
    eyebrow: 'Terepi működés',
    title: 'Valódi terepi munkára építve.',
    text: 'A Diriqo nem nehéz ERP. A kis operatív csapatok mindennapi helyzeteit kezeli: emberek, munkák, fotók és tervváltozások.',
    points: [
      'Olyan cégeknek, amelyek naponta kezelnek embereket, munkákat, fotókat és tervváltozásokat.',
      'Nem elmélet. A Diriqo kis terepi csapatok valós problémáiból indul ki.',
      'Egyszerű munkakezelés felesleges vállalati réteg nélkül.',
    ],
  },
  es: {
    eyebrow: 'Operación en campo',
    title: 'Creado para trabajo real en campo.',
    text: 'Diriqo no es un ERP pesado. Resuelve el día a día de equipos pequeños: personas, trabajos, fotos y cambios de plan.',
    points: [
      'Diseñado para empresas que gestionan personas, trabajos, fotos y cambios de plan cada día.',
      'Sin teoría. Diriqo nace de problemas reales de equipos de campo pequeños.',
      'Gestión simple del trabajo sin una capa corporativa extra.',
    ],
  },
  it: {
    eyebrow: 'Lavoro sul campo',
    title: 'Costruito sul lavoro reale sul campo.',
    text: 'Diriqo non è un ERP pesante. Risolve la quotidianità dei piccoli team operativi: persone, lavori, foto e cambi di programma.',
    points: [
      'Pensato per aziende che gestiscono ogni giorno persone, lavori, foto e cambi di programma.',
      'Nessuna teoria. Diriqo nasce dai problemi reali dei piccoli team sul campo.',
      'Gestione semplice del lavoro senza uno strato corporate in più.',
    ],
  },
  fr: {
    eyebrow: 'Opérations terrain',
    title: 'Construit pour le vrai travail terrain.',
    text: 'Diriqo n’est pas un ERP lourd. Il répond au quotidien des petites équipes terrain : personnes, interventions, photos et changements de planning.',
    points: [
      'Pensé pour les entreprises qui gèrent chaque jour équipes, interventions, photos et changements.',
      'Pas de théorie. Diriqo part des problèmes réels des petites équipes terrain.',
      'Gestion simple du travail sans couche corporate en plus.',
    ],
  },
}

export const productShowcaseCopyByLocale: Record<Locale, ProductShowcaseCopy> = {
  cs: {
    eyebrow: 'Produkt v praxi',
    title: 'Všechno konečně pohromadě.',
    text: 'Zakázky, lidé, fotky, hodiny a náklady v jednom čistém přehledu.',
    pills: ['Živý přehled', 'Fotky u práce', 'Hodiny a náklady'],
  },
  en: {
    eyebrow: 'Product in action',
    title: 'Everything finally together.',
    text: 'Jobs, people, photos, hours and costs in one clean overview.',
    pills: ['Live overview', 'Photos on jobs', 'Hours and costs'],
  },
  de: {
    eyebrow: 'Produkt im Einsatz',
    title: 'Endlich alles zusammen.',
    text: 'Aufträge, Menschen, Fotos, Stunden und Kosten in einer klaren Übersicht.',
    pills: ['Live-Übersicht', 'Fotos am Auftrag', 'Stunden und Kosten'],
  },
  pl: {
    eyebrow: 'Produkt w praktyce',
    title: 'Wszystko wreszcie razem.',
    text: 'Zlecenia, ludzie, zdjęcia, godziny i koszty w jednym czystym widoku.',
    pills: ['Podgląd na żywo', 'Zdjęcia przy zleceniu', 'Godziny i koszty'],
  },
  hu: {
    eyebrow: 'Termék működés közben',
    title: 'Végre minden egy helyen.',
    text: 'Munkák, emberek, fotók, órák és költségek egy tiszta áttekintésben.',
    pills: ['Élő áttekintés', 'Fotók a munkánál', 'Órák és költségek'],
  },
  es: {
    eyebrow: 'Producto en acción',
    title: 'Todo por fin junto.',
    text: 'Trabajos, personas, fotos, horas y costes en una vista clara.',
    pills: ['Vista en vivo', 'Fotos en trabajos', 'Horas y costes'],
  },
  it: {
    eyebrow: 'Prodotto in azione',
    title: 'Finalmente tutto insieme.',
    text: 'Lavori, persone, foto, ore e costi in una panoramica pulita.',
    pills: ['Vista live', 'Foto nei lavori', 'Ore e costi'],
  },
  fr: {
    eyebrow: 'Produit en action',
    title: 'Enfin tout au même endroit.',
    text: 'Interventions, équipes, photos, heures et coûts dans une vue claire.',
    pills: ['Vue en direct', 'Photos par intervention', 'Heures et coûts'],
  },
}

export const signupInfoCopyByLocale: Record<Locale, SignupInfoCopy> = {
  cs: {
    eyebrow: 'Registrace',
    title: 'Vytvořte účet a nastavte firmu.',
    text: 'Nejdřív účet, potom základní nastavení firmy. Diriqo má zůstat jednoduché od prvního kroku.',
    items: [
      'Vytvoření účtu',
      'Založení firmy v dalším kroku',
      'Připraveno pro zakázky, pracovníky a zákazníky',
    ],
    note: 'Nejprve si vytvoříte účet. Firmu nastavíte v dalším kroku.',
    primaryCta: 'Začít zdarma',
  },
  en: {
    eyebrow: 'Account setup',
    title: 'Create your account and set up your company.',
    text: 'Create your account first, then set up your company. Diriqo should feel simple from the first step.',
    items: [
      'Create your account',
      'Set up your company in the next step',
      'Prepare jobs, workers and customers',
    ],
    note: 'Create your account first. You will set up your company in the next step.',
    primaryCta: 'Start free trial',
  },
  de: {
    eyebrow: 'Konto',
    title: 'Konto erstellen und Firma einrichten.',
    text: 'Erstelle zuerst dein Konto. Die Firma richtest du im nächsten Schritt ein.',
    items: ['Konto erstellen', 'Firma im nächsten Schritt einrichten', 'Aufträge, Mitarbeiter und Kunden vorbereiten'],
    note: 'Zuerst das Konto, danach die Firmeneinrichtung.',
    primaryCta: 'Diriqo kostenlos testen',
  },
  pl: {
    eyebrow: 'Konto',
    title: 'Utwórz konto i skonfiguruj firmę.',
    text: 'Najpierw utwórz konto. Firmę ustawisz w następnym kroku.',
    items: ['Utworzenie konta', 'Konfiguracja firmy w kolejnym kroku', 'Przygotowanie zleceń, pracowników i klientów'],
    note: 'Najpierw konto, potem firma.',
    primaryCta: 'Zacznij za darmo',
  },
  hu: {
    eyebrow: 'Fiók',
    title: 'Hozz létre fiókot és állítsd be a céged.',
    text: 'Először a fiókot hozod létre, utána jön a cég alapbeállítása.',
    items: ['Fiók létrehozása', 'Cég beállítása a következő lépésben', 'Munkák, dolgozók és ügyfelek előkészítése'],
    note: 'Először fiók, utána cégbeállítás.',
    primaryCta: 'Diriqo kipróbálása',
  },
  es: {
    eyebrow: 'Cuenta',
    title: 'Crea tu cuenta y configura tu empresa.',
    text: 'Primero crea la cuenta. La empresa se configura en el siguiente paso.',
    items: ['Crear cuenta', 'Configurar empresa después', 'Preparar trabajos, empleados y clientes'],
    note: 'Primero la cuenta, después la empresa.',
    primaryCta: 'Probar Diriqo gratis',
  },
  it: {
    eyebrow: 'Account',
    title: 'Crea account e configura azienda.',
    text: 'Prima crei l’account. L’azienda si imposta nel passaggio successivo.',
    items: ['Creazione account', 'Configurazione azienda dopo', 'Preparazione lavori, operatori e clienti'],
    note: 'Prima account, poi azienda.',
    primaryCta: 'Prova Diriqo gratis',
  },
  fr: {
    eyebrow: 'Compte',
    title: 'Crée ton compte et configure ton entreprise.',
    text: 'Crée d’abord le compte. L’entreprise se règle à l’étape suivante.',
    items: ['Création du compte', 'Configuration entreprise ensuite', 'Préparer interventions, équipes et clients'],
    note: 'D’abord le compte, ensuite l’entreprise.',
    primaryCta: 'Essayer Diriqo gratuitement',
  },
}

export const demoSignupCopyByLocale: Record<Locale, DemoSignupCopy> = {
  cs: {
    title: 'Demo je ukázka. Registrace je pro vlastní firmu.',
    text: 'Demo slouží jen k prohlížení ukázkových dat. Registrace vám umožní používat Diriqo pro vlastní firmu.',
    cta: 'Vytvořit vlastní účet',
  },
  en: {
    title: 'Demo is a preview. Account setup is for your own company.',
    text: 'Demo lets you explore Diriqo with sample data. Creating an account lets you use Diriqo with your own company.',
    cta: 'Create your own account',
  },
  de: {
    title: 'Demo ist Vorschau. Registrierung ist für deine Firma.',
    text: 'Die Demo zeigt Diriqo mit Beispieldaten. Mit einem Konto nutzt du Diriqo für deine eigene Firma.',
    cta: 'Eigenes Konto erstellen',
  },
  pl: {
    title: 'Demo to podgląd. Konto jest dla Twojej firmy.',
    text: 'Demo pokazuje Diriqo z przykładowymi danymi. Konto pozwala używać go we własnej firmie.',
    cta: 'Utwórz własne konto',
  },
  hu: {
    title: 'A demó előnézet. A fiók a saját cégedhez kell.',
    text: 'A demó mintaadatokkal mutatja a Diriqót. Fiókkal a saját cégeddel használod.',
    cta: 'Saját fiók létrehozása',
  },
  es: {
    title: 'La demo es una vista previa. La cuenta es para tu empresa.',
    text: 'La demo muestra Diriqo con datos de ejemplo. Crear una cuenta permite usarlo con tu empresa.',
    cta: 'Crear cuenta propia',
  },
  it: {
    title: 'La demo è un’anteprima. L’account è per la tua azienda.',
    text: 'La demo mostra Diriqo con dati di esempio. Creando un account lo usi con la tua azienda.',
    cta: 'Crea account',
  },
  fr: {
    title: 'La démo est un aperçu. Le compte est pour ton entreprise.',
    text: 'La démo montre Diriqo avec des données exemples. Créer un compte permet de l’utiliser avec ton entreprise.',
    cta: 'Créer un compte',
  },
}

export const authPageCopyByLocale: Partial<Record<Locale, AuthPageCopy>> = {
  cs: {
    register: {
      eyebrow: 'Registrace',
      title: 'Vytvořit účet',
      text: 'Vytvořte účet, založte firmu a začněte spravovat zakázky, pracovníky a zákazníky během pár minut.',
      helper: 'Nejprve si vytvoříte účet. Firmu nastavíte v dalším kroku.',
      email: 'E-mail',
      password: 'Heslo',
      confirmPassword: 'Potvrzení hesla',
      submit: 'Pokračovat k založení firmy',
      loadingSubmit: 'Vytvářím účet...',
      signInPrompt: 'Už účet máte?',
      signInLink: 'Přihlásit se',
      googleUnavailable: 'Google přihlášení zatím není nakonfigurované.',
      accountCreatedCheckEmail: 'Účet byl vytvořen. Pokud Supabase vyžaduje potvrzení e-mailu, potvrďte ho a potom se přihlaste.',
      passwordMinLength: 'Heslo musí mít alespoň 8 znaků.',
      passwordsDoNotMatch: 'Hesla se neshodují.',
      createAccountFailed: 'Účet se nepodařilo vytvořit.',
      supabaseMissing: 'Chybí veřejné Supabase env proměnné.',
    },
    login: {
      eyebrow: 'Přihlášení',
      title: 'Přihlásit se',
      text: 'Přihlaste se do účtu Diriqo a pokračujte do nastavení firmy nebo aplikace.',
      email: 'E-mail',
      password: 'Heslo',
      submit: 'Pokračovat',
      loadingSubmit: 'Přihlašuji...',
      registerPrompt: 'Ještě nemáte účet?',
      registerLink: 'Vytvořit účet',
      signInFailed: 'Přihlášení se nepodařilo.',
      invalidEmail: 'Zkontrolujte formát e-mailu.',
      invalidCredentials: 'E-mail nebo heslo není správně.',
      supabaseMissing: 'Chybí veřejné Supabase env proměnné.',
    },
    onboarding: {
      eyebrow: 'Založení firmy',
      title: 'Nastavit firmu',
      text: 'Zadejte základní údaje. Diriqo podle nich připraví první firmu pro váš účet.',
      companyName: 'Název firmy',
      country: 'Země',
      language: 'Jazyk',
      currency: 'Měna',
      submit: 'Uložit firmu',
      todo: 'Bez trialu a bez plateb. Jen založení účtu a první firmy.',
      companyNameMinLength: 'Název firmy musí mít alespoň 2 znaky.',
      requiredFields: 'Vyplňte prosím všechna povinná pole.',
      companyCreateFailed: 'Firmu se nepodařilo založit. Zkuste to prosím znovu.',
    },
  },
  en: {
    register: {
      eyebrow: 'Sign up',
      title: 'Create your account',
      text: 'Create your account, set up your company and start managing jobs, workers and customers in minutes.',
      helper: 'Create your account first. You will set up your company in the next step.',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      submit: 'Continue to company setup',
      loadingSubmit: 'Creating account...',
      signInPrompt: 'Already have an account?',
      signInLink: 'Sign in',
      googleUnavailable: 'Google sign-in is not configured yet.',
      accountCreatedCheckEmail: 'Your account was created. If Supabase requires email confirmation, confirm your email and then sign in.',
      passwordMinLength: 'Password must be at least 8 characters.',
      passwordsDoNotMatch: 'Passwords do not match.',
      createAccountFailed: 'Account could not be created.',
      supabaseMissing: 'Missing public Supabase environment variables.',
    },
    login: {
      eyebrow: 'Sign in',
      title: 'Sign in',
      text: 'Sign in to your Diriqo account and continue to company setup or the app.',
      email: 'Email',
      password: 'Password',
      submit: 'Continue',
      loadingSubmit: 'Signing in...',
      registerPrompt: 'No account yet?',
      registerLink: 'Create account',
      signInFailed: 'Sign-in failed.',
      invalidEmail: 'Check the email format.',
      invalidCredentials: 'Email or password is not correct.',
      supabaseMissing: 'Missing public Supabase environment variables.',
    },
    onboarding: {
      eyebrow: 'Company setup',
      title: 'Set up your company',
      text: 'Enter the basics. Diriqo will create the first company for your account.',
      companyName: 'Company name',
      country: 'Country',
      language: 'Language',
      currency: 'Currency',
      submit: 'Save company',
      todo: 'No trial and no payments. Just account and first company setup.',
      companyNameMinLength: 'Company name must be at least 2 characters.',
      requiredFields: 'Please fill in all required fields.',
      companyCreateFailed: 'Company could not be created. Please try again.',
    },
  },
}

export function getAuthPageCopy(locale: Locale): AuthPageCopy {
  return authPageCopyByLocale[locale] ?? authPageCopyByLocale.en!
}

export type PricingPageCopy = {
  title: string
  description: string
  introTitle: string
  introText: string
  introBullets: string[]
  planDescriptions: string[]
  commonFeatures: string[]
  checkoutCta?: string
  contactSalesCta?: string
  noCreditCardText?: string
  monthlyLabel?: string
  annualLabel?: string
  annualBadge?: string
  annualSavingText?: string
  monthlyPeriod?: string
  yearlyPeriod?: string
  customPriceLabel?: string
  addon: {
    title: string
    price: string
    description: string
    features: string[]
    note: string
    ctaLabel?: string
  }
}

const pricingOverrides: Record<Locale, Partial<PricingPageCopy>> = {
  cs: {
    title: 'Jednoduchá cena podle velikosti týmu.',
    description: 'Přehledné tarify podle velikosti týmu. Nejdřív vytvoříte účet a firmu nastavíte v dalším kroku.',
    introTitle: 'Vyber tarif podle počtu lidí.',
    introText:
      'Vyberte velikost týmu a vytvořte účet. Firmu nastavíte v dalším kroku.',
    introBullets: ['Nejdřív účet, potom nastavení firmy.', 'Zakázky, pracovníci, zákazníci a plánování na jednom místě.', 'Diriqo je pro malé a střední týmy v terénu. Nad 50 pracovníků připravíme individuální nastavení.'],
    checkoutCta: 'Začít zdarma',
    contactSalesCta: 'Kontaktovat',
    noCreditCardText: 'Bez platební karty',
    monthlyLabel: 'Měsíčně',
    annualLabel: 'Ročně',
    annualBadge: '2 měsíce zdarma',
    annualSavingText: 'Roční platba ušetří 2 měsíce',
    monthlyPeriod: '/ měsíc',
    yearlyPeriod: '/ rok',
    customPriceLabel: 'Individuální cena',
  },
  en: {
    title: 'Simple pricing by team size.',
    description: 'Diriqo is built for small and medium field service teams that want simplicity instead of enterprise complexity.',
    introTitle: 'Pick a plan by number of people.',
    introText:
      'Choose the team size that fits you, create your account and set up your company in the next step.',
    introBullets: ['Create your account first, then set up your company.', 'Jobs, workers, customers and scheduling in one place.', 'Teams above 50 workers can get a custom setup.'],
    checkoutCta: 'Start trial',
    contactSalesCta: 'Contact us',
    noCreditCardText: 'No credit card required',
    monthlyLabel: 'Monthly',
    annualLabel: 'Annual',
    annualBadge: '2 months free',
    annualSavingText: 'Save 2 months with annual billing',
    monthlyPeriod: '/ month',
    yearlyPeriod: '/ year',
    customPriceLabel: 'Custom pricing',
  },
  de: {
    title: 'Einfache Preise nach Teamgröße.',
    description: 'Feste Monats- oder Jahrestarife nach Nutzern und Mitarbeitern. Keine nutzungsbasierte Abrechnung.',
    introTitle: 'Wähle den Tarif nach Anzahl der Personen.',
    introText:
      'Nutzer/Mitarbeiter umfasst interne Leute, externe Kräfte, Subunternehmer, Aushilfen und temporäre Teams. Die Website übergibt nur Tarif und Abrechnungszeitraum an die Registrierung.',
    introBullets: ['Feste Abos in EUR.', 'Jährliche Zahlung bedeutet 12 Monate Nutzung zum Preis von 10.', 'Ab 51 Nutzern/Mitarbeitern bereiten wir ein individuelles Setup vor.'],
    checkoutCta: 'Kostenlos testen',
    contactSalesCta: 'Kontakt aufnehmen',
    noCreditCardText: 'Keine Kreditkarte nötig',
    monthlyLabel: 'Monatlich',
    annualLabel: 'Jährlich',
    annualBadge: '2 Monate gratis',
    annualSavingText: 'Mit jährlicher Zahlung 2 Monate sparen',
    monthlyPeriod: '/ Monat',
    yearlyPeriod: '/ Jahr',
    customPriceLabel: 'Individueller Preis',
  },
  pl: {
    title: 'Prosta cena według wielkości zespołu.',
    description: 'Stałe plany miesięczne lub roczne według liczby użytkowników i pracowników. Bez rozliczania zużycia.',
    introTitle: 'Wybierz plan według liczby osób.',
    introText:
      'Użytkownicy/pracownicy obejmują osoby wewnętrzne, zewnętrznych wykonawców, podwykonawców, brygady i personel tymczasowy. Strona przekazuje tylko plan i okres rozliczenia do rejestracji.',
    introBullets: ['Stałe subskrypcje w EUR.', 'Płatność roczna daje 12 miesięcy używania w cenie 10.', 'Od 51 użytkowników/pracowników przygotujemy indywidualne ustawienie.'],
    checkoutCta: 'Zacznij za darmo',
    contactSalesCta: 'Skontaktuj się',
    noCreditCardText: 'Bez karty płatniczej',
    monthlyLabel: 'Miesięcznie',
    annualLabel: 'Rocznie',
    annualBadge: '2 miesiące gratis',
    annualSavingText: 'Oszczędzasz 2 miesiące przy płatności rocznej',
    monthlyPeriod: '/ miesiąc',
    yearlyPeriod: '/ rok',
    customPriceLabel: 'Cena indywidualna',
  },
  hu: {
    title: 'Egyszerű ár csapatméret szerint.',
    description: 'Fix havi vagy éves csomagok felhasználók és dolgozók száma alapján. Nincs használatalapú díj.',
    introTitle: 'Válassz csomagot létszám szerint.',
    introText:
      'A felhasználók/dolgozók közé tartoznak a belső emberek, külsősök, alvállalkozók, brigádok és ideiglenes munkatársak. A web csak a választott csomagot és időszakot adja át a regisztrációnak.',
    introBullets: ['Fix előfizetések EUR-ban.', 'Éves fizetéssel 12 hónap használatot kapsz 10 hónap áráért.', '51+ felhasználó/dolgozó esetén egyedi beállítást készítünk.'],
    checkoutCta: 'Ingyenes próba indítása',
    contactSalesCta: 'Kapcsolat',
    noCreditCardText: 'Bankkártya nem szükséges',
    monthlyLabel: 'Havonta',
    annualLabel: 'Évente',
    annualBadge: '2 hónap ingyen',
    annualSavingText: 'Éves fizetéssel 2 hónapot spórolsz',
    monthlyPeriod: '/ hó',
    yearlyPeriod: '/ év',
    customPriceLabel: 'Egyedi ár',
  },
  es: {
    title: 'Precio simple por tamaño de equipo.',
    description: 'Planes mensuales o anuales fijos según usuarios y trabajadores. Sin cobro por uso.',
    introTitle: 'Elige plan según el número de personas.',
    introText:
      'Usuarios/trabajadores incluye personal interno, externos, subcontratistas, cuadrillas y personal temporal. La web solo envía el plan y el intervalo de facturación al registro.',
    introBullets: ['Suscripciones fijas en EUR.', 'El pago anual da 12 meses de uso por el precio de 10.', 'Para 51+ usuarios/trabajadores preparamos una configuración a medida.'],
    checkoutCta: 'Iniciar prueba gratis',
    contactSalesCta: 'Contactar',
    noCreditCardText: 'No se requiere tarjeta',
    monthlyLabel: 'Mensual',
    annualLabel: 'Anual',
    annualBadge: '2 meses gratis',
    annualSavingText: 'Ahorra 2 meses con pago anual',
    monthlyPeriod: '/ mes',
    yearlyPeriod: '/ año',
    customPriceLabel: 'Precio personalizado',
  },
  it: {
    title: 'Prezzi semplici per dimensione del team.',
    description: 'Piani mensili o annuali fissi in base a utenti e operatori. Nessun costo a consumo.',
    introTitle: 'Scegli il piano in base al numero di persone.',
    introText:
      'Utenti/operatori include personale interno, esterni, subappaltatori, squadre e personale temporaneo. Il sito invia alla registrazione solo piano e periodo di fatturazione.',
    introBullets: ['Abbonamenti fissi in EUR.', 'Il pagamento annuale dà 12 mesi di uso al prezzo di 10.', 'Per 51+ utenti/operatori prepariamo una configurazione su misura.'],
    checkoutCta: 'Avvia prova gratis',
    contactSalesCta: 'Contattaci',
    noCreditCardText: 'Carta non richiesta',
    monthlyLabel: 'Mensile',
    annualLabel: 'Annuale',
    annualBadge: '2 mesi gratis',
    annualSavingText: 'Risparmi 2 mesi con pagamento annuale',
    monthlyPeriod: '/ mese',
    yearlyPeriod: '/ anno',
    customPriceLabel: 'Prezzo personalizzato',
  },
  fr: {
    title: 'Tarifs simples selon la taille de l’équipe.',
    description: 'Plans mensuels ou annuels fixes selon les utilisateurs et équipes. Pas de facturation à l’usage.',
    introTitle: 'Choisis un plan selon le nombre de personnes.',
    introText:
      'Utilisateurs/équipes inclut les personnes internes, externes, sous-traitants, groupes et renforts temporaires. Le site transmet seulement le plan et la période de facturation à l’inscription.',
    introBullets: ['Abonnements fixes en EUR.', 'Le paiement annuel donne 12 mois d’usage pour le prix de 10.', 'Pour 51+ utilisateurs/équipes, nous préparons une configuration adaptée.'],
    checkoutCta: 'Démarrer l’essai gratuit',
    contactSalesCta: 'Nous contacter',
    noCreditCardText: 'Carte bancaire non requise',
    monthlyLabel: 'Mensuel',
    annualLabel: 'Annuel',
    annualBadge: '2 mois offerts',
    annualSavingText: 'Économise 2 mois avec la facturation annuelle',
    monthlyPeriod: '/ mois',
    yearlyPeriod: '/ an',
    customPriceLabel: 'Tarif personnalisé',
  },
}

const pricingCustomSetupByLocale: Record<Locale, PricingCustomSetupCopy> = {
  cs: {
    title: 'Potřebujete více než 50 pracovníků?',
    text: 'Diriqo má zůstat jednoduché pro malé a střední firmy v terénu. Pokud řídíte větší provoz, připravíme nastavení podle vašeho workflow.',
    cta: 'Ozvat se kvůli individuálnímu nastavení',
  },
  en: {
    title: 'Need more than 50 workers?',
    text: 'Diriqo is designed to stay simple for small and medium field service teams. If you run a larger operation, we can prepare a custom setup based on your workflow.',
    cta: 'Contact us for a custom setup',
  },
  de: {
    title: 'Mehr als 50 Mitarbeiter?',
    text: 'Diriqo soll für kleine und mittlere Teams im Außendienst einfach bleiben. Für größere Betriebe bereiten wir ein Setup nach eurem Workflow vor.',
    cta: 'Kontakt für individuelles Setup',
  },
  pl: {
    title: 'Potrzebujesz więcej niż 50 pracowników?',
    text: 'Diriqo ma pozostać proste dla małych i średnich zespołów terenowych. Przy większej operacji przygotujemy ustawienie pod Wasz workflow.',
    cta: 'Napisz w sprawie indywidualnego ustawienia',
  },
  hu: {
    title: 'Több mint 50 dolgozó?',
    text: 'A Diriqo egyszerű marad kis és közepes terepi csapatoknak. Nagyobb működésnél egyedi beállítást készítünk a workflow alapján.',
    cta: 'Kapcsolat egyedi beállításhoz',
  },
  es: {
    title: '¿Más de 50 trabajadores?',
    text: 'Diriqo está pensado para seguir siendo simple en equipos de campo pequeños y medianos. Para una operación más grande preparamos una configuración según vuestro flujo.',
    cta: 'Contactar para configuración a medida',
  },
  it: {
    title: 'Più di 50 operatori?',
    text: 'Diriqo resta semplice per team sul campo piccoli e medi. Per operazioni più grandi prepariamo una configurazione basata sul vostro workflow.',
    cta: 'Contattaci per una configurazione su misura',
  },
  fr: {
    title: 'Plus de 50 personnes ?',
    text: 'Diriqo doit rester simple pour les petites et moyennes équipes terrain. Pour une opération plus grande, nous préparons une configuration selon votre workflow.',
    cta: 'Nous contacter pour une configuration adaptée',
  },
}

const localizedPlanDescriptions: Record<Locale, Record<string, string>> = {
  cs: {
    starter: 'Pro malé týmy na začátku.',
    growth: 'Pro rostoucí servisní firmy.',
    business: 'Pro větší týmy a více provozu.',
    scale: 'Pro větší provozy s více lidmi a potřebou lepšího přehledu.',
  },
  en: {
    starter: 'For small teams getting started.',
    growth: 'For growing service businesses.',
    business: 'For larger teams with more operations.',
    scale: 'For bigger operations with more people and stronger oversight.',
  },
  de: {
    starter: 'Für kleine Servicefirmen, die starten.',
    growth: 'Für wachsende Teams mit mehreren Mitarbeitern und Aufträgen.',
    business: 'Für etablierte Servicefirmen mit größerem Betrieb.',
    scale: 'Für größere Betriebe mit mehr Menschen und besserem Überblick.',
  },
  pl: {
    starter: 'Dla małych firm usługowych na start.',
    growth: 'Dla rosnących zespołów z większą liczbą pracowników i zleceń.',
    business: 'Dla stabilnych firm usługowych z większym operacyjnym ruchem.',
    scale: 'Dla większych operacji z większą liczbą ludzi i lepszym przeglądem.',
  },
  hu: {
    starter: 'Kis szolgáltató cégeknek induláshoz.',
    growth: 'Növekvő csapatoknak több dolgozóval és munkával.',
    business: 'Bejáratott szolgáltató cégeknek nagyobb működéssel.',
    scale: 'Nagyobb működéshez több emberrel és jobb áttekintéssel.',
  },
  es: {
    starter: 'Para pequeñas empresas de servicios que empiezan.',
    growth: 'Para equipos en crecimiento con más trabajadores y trabajos.',
    business: 'Para empresas de servicios establecidas con más operación.',
    scale: 'Para operaciones más grandes con más personas y mejor control.',
  },
  it: {
    starter: 'Per piccole aziende di servizi che iniziano.',
    growth: 'Per team in crescita con più operatori e lavori.',
    business: 'Per aziende di servizi avviate con operatività più ampia.',
    scale: 'Per operazioni più grandi con più persone e controllo migliore.',
  },
  fr: {
    starter: 'Pour petites entreprises de service qui démarrent.',
    growth: 'Pour équipes en croissance avec plus de personnes et d’interventions.',
    business: 'Pour entreprises de service établies avec plus d’activité.',
    scale: 'Pour opérations plus grandes avec plus de personnes et un meilleur suivi.',
  },
}

const pricingPlanMarketingCopyByLocale: Partial<
  Record<Locale, Partial<Record<WebPricingPlanId, PricingPlanMarketingCopy>>>
> = {
  cs: {
    starter: {
      people: 'Do 5 pracovníků',
      description: 'Pro malé týmy na začátku.',
      features: ['zakázky', 'pracovníci', 'zákazníci', 'základní plánování', 'základní přehledy'],
    },
    growth: {
      people: 'Do 15 pracovníků',
      description: 'Pro rostoucí servisní firmy.',
      features: ['vše ve Starter', 'pokročilejší přehled zakázek', 'evidence práce', 'základní ekonomika', 'lepší řízení týmu'],
    },
    business: {
      people: 'Do 30 pracovníků',
      description: 'Pro větší týmy a více provozu.',
      features: ['vše v Growth', 'prioritní funkce', 'lepší přehled pro větší týmy'],
    },
    scale: {
      people: 'Do 50 pracovníků',
      description: 'Pro větší provozy s více lidmi a potřebou lepšího přehledu.',
      features: ['vše v Business', 'vyšší kapacita týmu', 'více provozního přehledu', 'lepší kontrola napříč zakázkami'],
    },
  },
  en: {
    starter: {
      people: 'Up to 5 workers',
      description: 'For small teams getting started.',
      features: ['jobs', 'workers', 'customers', 'basic scheduling', 'basic reports'],
    },
    growth: {
      people: 'Up to 15 workers',
      description: 'For growing service businesses.',
      features: ['everything in Starter', 'advanced job overview', 'work tracking', 'basic economics', 'better team management'],
    },
    business: {
      people: 'Up to 30 workers',
      description: 'For larger teams with more operations.',
      features: ['everything in Growth', 'priority features', 'better overview for larger teams'],
    },
    scale: {
      people: 'Up to 50 workers',
      description: 'For bigger operations with more people and stronger oversight.',
      features: ['everything in Business', 'higher team capacity', 'more operational overview', 'better control across jobs'],
    },
  },
}

function getPricingPlanMarketingCopy(locale: Locale, planId: WebPricingPlanId) {
  return pricingPlanMarketingCopyByLocale[locale]?.[planId] ?? pricingPlanMarketingCopyByLocale.en?.[planId]
}

function formatLocalizedWorkerRange(locale: Locale, min: number, max: number | null) {
  const ranges: Record<Locale, string> = {
    cs: max === null ? '51+ uživatelů/pracovníků' : `${min}–${max} uživatelů/pracovníků`,
    en: max === null ? '51+ users/workers' : `${min}–${max} users/workers`,
    de: max === null ? '51+ Nutzer/Mitarbeiter' : `${min}–${max} Nutzer/Mitarbeiter`,
    pl: max === null ? '51+ użytkowników/pracowników' : `${min}–${max} użytkowników/pracowników`,
    hu: max === null ? '51+ felhasználó/dolgozó' : `${min}–${max} felhasználó/dolgozó`,
    es: max === null ? '51+ usuarios/trabajadores' : `${min}–${max} usuarios/trabajadores`,
    it: max === null ? '51+ utenti/operatori' : `${min}–${max} utenti/operatori`,
    fr: max === null ? '51+ utilisateurs/personnes' : `${min}–${max} utilisateurs/personnes`,
  }

  return ranges[locale]
}

const pricingPageCopy: Record<Locale, PricingPageCopy> = {
  cs: {
    title: 'Cena podle velikosti týmu, ne podle odemykání funkcí.',
    description:
      'Všechny důležité funkce jsou v každém tarifu. Platíš hlavně podle velikosti týmu.',
    introTitle: 'Stejné Diriqo pro každý tým.',
    introText:
      'Neplatíš za odemykání běžných funkcí. Základní Diriqo je řízení práce uvnitř firmy: zakázky, lidé, fotky, hodiny, zákazníci, kalendář, náklady a přehledy. Vyber tarif podle počtu lidí, které potřebuješ řídit.',
    introBullets: [
      'Všechny běžné tarify mají zakázky, lidi, mobil, fotky, kalendář, práci, náklady a přehledy.',
      'Standardní tarify končí na 50 pracovnících. Větší provozy řešíme individuálním nastavením.',
      'Web, poptávky a zákaznický portál jsou samostatný nadstavbový balíček.',
    ],
    planDescriptions: [
      'Pro malé týmy, které chtějí pořádek v zakázkách a lidech.',
      'Pro rostoucí firmy, které potřebují řídit více lidí v terénu.',
      'Pro větší provozní týmy s více pracovníky a adminy.',
      'Pro větší provozy od 31 do 50 pracovníků.',
    ],
    commonFeatures: [
      'zakázky a zákazníci',
      'pracovníci a role',
      'mobilní aplikace',
      'fotky ze zakázek',
      'kalendář a evidence práce',
      'náklady zakázek',
      'přehledy a statistiky',
      'více adminů podle rolí',
      'základní i pokročilé řízení provozu',
    ],
    addon: {
      title: 'Web + poptávky + zákaznický portál',
      price: commonPricing.addonSetupPrice,
      description: 'Profesionální web, poptávky a zákaznický portál.',
      features: [
        'jednoduché webové stránky pro firmu',
        'poptávkový formulář napojený do Diriqo',
        'zákaznický náhled / portál',
        'přehled zakázek pro zákazníka',
        'fotky před/po pro zákazníka',
        'základní stav poptávek a komunikace',
      ],
      note: 'Základní Diriqo = řízení práce uvnitř firmy. Add-on = web, příjem poptávek a zákaznický portál. Zatím marketingově, ne jako aktivní Stripe produkt.',
      ctaLabel: 'Zjistit více',
    },
  },
  en: {
    title: 'Price by team size, not by unlocking features.',
    description:
      'All standard plans include the same core Diriqo features. The main difference is the number of people in your team.',
    introTitle: 'The same Diriqo for every team.',
    introText:
      'You do not pay to unlock everyday features. Core Diriqo is for managing work inside the company. Choose the plan by the number of people you need to manage.',
    introBullets: [
      'All standard plans include jobs, people, mobile, photos, calendar, work records, costs and reports.',
      'Standard plans go up to 50 workers. Larger operations use a custom setup.',
      'Website, inquiries and customer portal are a separate add-on.',
    ],
    planDescriptions: [
      'For small teams that want order in jobs and people.',
      'For growing companies managing more people in the field.',
      'For larger operations teams with more workers and admins.',
      'For larger operations with 31 to 50 workers.',
    ],
    commonFeatures: [
      'jobs and customers',
      'workers and roles',
      'mobile app',
      'job photos',
      'calendar and work records',
      'job costs',
      'reports and statistics',
      'multiple admins where roles allow',
      'basic and advanced operations management',
    ],
    addon: {
      title: 'Website + customer inquiries + customer portal',
      price: commonPricing.addonSetupPrice,
      description: 'Professional website, customer inquiries and customer portal.',
      features: [
        'simple company website',
        'inquiry form connected to Diriqo',
        'customer portal',
        'customer job overview',
        'before/after photos for customers',
        'basic inquiry and communication status',
      ],
      note: 'Core Diriqo = managing work inside the company. Add-on = website, inquiry intake and customer portal. Marketing-only for now, not an active Stripe product.',
      ctaLabel: 'Learn more',
    },
  },
  de: {
    title: 'Preis nach Teamgröße, nicht nach freigeschalteten Funktionen.',
    description:
      'Alle normalen Tarife enthalten die gleichen Kernfunktionen von Diriqo. Der Unterschied liegt vor allem in der Anzahl der Personen.',
    introTitle: 'Dasselbe Diriqo für jedes Team.',
    introText:
      'Du zahlst nicht für das Freischalten normaler Funktionen. Diriqo Basis ist für die interne Arbeitssteuerung. Wähle den Tarif nach der Anzahl der Personen.',
    introBullets: [
      'Alle normalen Tarife enthalten Aufträge, Menschen, Mobile, Fotos, Kalender, Arbeitserfassung, Kosten und Auswertungen.',
      'Standardtarife gehen bis 50 Mitarbeiter. Größere Betriebe bekommen ein individuelles Setup.',
      'Website, Anfragen und Kundenportal sind ein separates Add-on.',
    ],
    planDescriptions: [
      'Für kleine Teams, die Ordnung in Aufträgen und Menschen wollen.',
      'Für wachsende Firmen mit mehr Menschen im Außendienst.',
      'Für größere operative Teams mit mehr Mitarbeitern und Admins.',
      'Für größere Betriebe mit 31 bis 50 Mitarbeitern.',
    ],
    commonFeatures: [
      'Aufträge und Kunden',
      'Mitarbeiter und Rollen',
      'mobile App',
      'Auftragsfotos',
      'Kalender und Arbeitserfassung',
      'Auftragskosten',
      'Auswertungen und Statistiken',
      'mehrere Admins, wenn Rollen es erlauben',
      'Basis- und erweiterte Betriebssteuerung',
    ],
    addon: {
      title: 'Website, Anfragen und Kundenportal',
      price: commonPricing.addonSetupPrice,
      description:
        'Für Firmen, die Anfragen direkt über die Website gewinnen und Kunden einen einfachen Überblick über Aufträge, Fotos und Kommunikation geben wollen.',
      features: [
        'einfache Firmenwebsite',
        'Anfrageformular mit Diriqo Anbindung',
        'Kundenportal',
        'Auftragsübersicht für Kunden',
        'Vorher/Nachher-Fotos für Kunden',
        'Basisstatus von Anfragen und Kommunikation',
      ],
      note: 'Diriqo Basis = Arbeitssteuerung innerhalb der Firma. Add-on = Website, Anfrageeingang und Kundenportal.',
    },
  },
  pl: {
    title: 'Cena według wielkości zespołu, nie za odblokowanie funkcji.',
    description:
      'Wszystkie standardowe plany zawierają te same główne funkcje Diriqo. Różnica to głównie liczba osób w zespole.',
    introTitle: 'To samo Diriqo dla każdego zespołu.',
    introText:
      'Nie płacisz za odblokowanie codziennych funkcji. Podstawowe Diriqo służy do zarządzania pracą wewnątrz firmy. Wybierz plan według liczby osób.',
    introBullets: [
      'Wszystkie standardowe plany mają zlecenia, ludzi, mobile, zdjęcia, kalendarz, ewidencję pracy, koszty i raporty.',
      'Standardowe plany kończą się na 50 pracownikach. Większe operacje mają indywidualne ustawienie.',
      'Strona, zapytania i portal klienta są osobnym dodatkiem.',
    ],
    planDescriptions: [
      'Dla małych zespołów, które chcą porządku w zleceniach i ludziach.',
      'Dla rosnących firm z większą liczbą ludzi w terenie.',
      'Dla większych zespołów operacyjnych z większą liczbą pracowników i adminów.',
      'Dla większych operacji od 31 do 50 pracowników.',
    ],
    commonFeatures: [
      'zlecenia i klienci',
      'pracownicy i role',
      'aplikacja mobilna',
      'zdjęcia ze zleceń',
      'kalendarz i ewidencja pracy',
      'koszty zleceń',
      'raporty i statystyki',
      'więcej adminów, jeśli role na to pozwalają',
      'podstawowe i zaawansowane zarządzanie operacjami',
    ],
    addon: {
      title: 'Strona, zapytania i portal klienta',
      price: commonPricing.addonSetupPrice,
      description:
        'Dla firm, które chcą pozyskiwać zapytania bezpośrednio ze strony i dać klientom prosty przegląd zleceń, zdjęć i komunikacji.',
      features: [
        'prosta strona internetowa firmy',
        'formularz zapytania połączony z Diriqo',
        'portal klienta',
        'przegląd zleceń dla klienta',
        'zdjęcia przed/po dla klienta',
        'podstawowy status zapytań i komunikacji',
      ],
      note: 'Podstawowe Diriqo = zarządzanie pracą wewnątrz firmy. Add-on = strona, przyjmowanie zapytań i portal klienta.',
    },
  },
  hu: {
    title: 'Ár csapatméret szerint, nem funkciók feloldásáért.',
    description:
      'Minden normál csomag ugyanazokat a fő Diriqo funkciókat tartalmazza. A fő különbség a csapat létszáma.',
    introTitle: 'Ugyanaz a Diriqo minden csapatnak.',
    introText:
      'Nem a mindennapi funkciók feloldásáért fizetsz. Az alap Diriqo a cégen belüli munka kezelésére való. Válassz csomagot létszám szerint.',
    introBullets: [
      'Minden normál csomag tartalmaz munkákat, embereket, mobilt, fotókat, naptárt, munkaidőt, költségeket és riportokat.',
      'A standard csomagok 50 dolgozóig mennek. Nagyobb működéshez egyedi beállítás készül.',
      'A weboldal, érdeklődések és ügyfélportál külön add-on.',
    ],
    planDescriptions: [
      'Kis csapatoknak, amelyek rendet akarnak a munkákban és emberekben.',
      'Növekvő cégeknek több terepi dolgozóval.',
      'Nagyobb operatív csapatoknak több dolgozóval és adminnal.',
      'Nagyobb működéshez 31-50 dolgozóval.',
    ],
    commonFeatures: [
      'munkák és ügyfelek',
      'dolgozók és szerepkörök',
      'mobil app',
      'munkafotók',
      'naptár és munkaidő-nyilvántartás',
      'munkaköltségek',
      'riportok és statisztikák',
      'több admin, ha a szerepkörök engedik',
      'alap és haladó működéskezelés',
    ],
    addon: {
      title: 'Weboldal, érdeklődések és ügyfélportál',
      price: commonPricing.addonSetupPrice,
      description:
        'Cégeknek, amelyek közvetlenül a weboldalról akarnak érdeklődéseket kapni, és ügyfeleknek egyszerű áttekintést adni munkákról, fotókról és kommunikációról.',
      features: [
        'egyszerű céges weboldal',
        'Diriqóhoz kapcsolt érdeklődési űrlap',
        'ügyfélportál',
        'munkák áttekintése ügyfeleknek',
        'előtte/utána fotók ügyfeleknek',
        'érdeklődések és kommunikáció alap állapota',
      ],
      note: 'Alap Diriqo = munka kezelése a cégen belül. Add-on = weboldal, érdeklődések fogadása és ügyfélportál.',
    },
  },
  es: {
    title: 'Precio por tamaño de equipo, no por desbloquear funciones.',
    description:
      'Todos los planes estándar incluyen las mismas funciones principales de Diriqo. La diferencia principal es el número de personas.',
    introTitle: 'El mismo Diriqo para cada equipo.',
    introText:
      'No pagas por desbloquear funciones habituales. Diriqo básico es para gestionar el trabajo dentro de la empresa. Elige el plan por número de personas.',
    introBullets: [
      'Todos los planes estándar incluyen trabajos, personas, móvil, fotos, calendario, registros, costes e informes.',
      'Los planes estándar llegan hasta 50 trabajadores. Operaciones mayores usan configuración a medida.',
      'Web, solicitudes y portal de clientes son un add-on separado.',
    ],
    planDescriptions: [
      'Para equipos pequeños que quieren orden en trabajos y personas.',
      'Para empresas en crecimiento con más personas en campo.',
      'Para equipos operativos más grandes con más empleados y admins.',
      'Para operaciones más grandes con 31 a 50 trabajadores.',
    ],
    commonFeatures: [
      'trabajos y clientes',
      'empleados y roles',
      'app móvil',
      'fotos de trabajos',
      'calendario y registros de trabajo',
      'costes de trabajos',
      'informes y estadísticas',
      'varios admins si los roles lo permiten',
      'gestión operativa básica y avanzada',
    ],
    addon: {
      title: 'Web, solicitudes y portal de clientes',
      price: commonPricing.addonSetupPrice,
      description:
        'Para empresas que quieren recibir solicitudes directamente desde la web y dar a clientes una vista simple de trabajos, fotos y comunicación.',
      features: [
        'web simple para la empresa',
        'formulario conectado a Diriqo',
        'portal de clientes',
        'vista de trabajos para el cliente',
        'fotos antes/después para el cliente',
        'estado básico de solicitudes y comunicación',
      ],
      note: 'Diriqo básico = gestión del trabajo dentro de la empresa. Add-on = web, recepción de solicitudes y portal de clientes.',
    },
  },
  it: {
    title: 'Prezzo per dimensione del team, non per sbloccare funzioni.',
    description:
      'Tutti i piani standard includono le stesse funzioni principali di Diriqo. La differenza è soprattutto il numero di persone.',
    introTitle: 'Lo stesso Diriqo per ogni team.',
    introText:
      'Non paghi per sbloccare funzioni quotidiane. Diriqo base serve a gestire il lavoro dentro l’azienda. Scegli il piano in base al numero di persone.',
    introBullets: [
      'Tutti i piani standard includono lavori, persone, mobile, foto, calendario, registri, costi e report.',
      'I piani standard arrivano fino a 50 operatori. Le operazioni più grandi usano una configurazione su misura.',
      'Sito, richieste e portale clienti sono un add-on separato.',
    ],
    planDescriptions: [
      'Per piccoli team che vogliono ordine in lavori e persone.',
      'Per aziende in crescita con più persone sul campo.',
      'Per team operativi più grandi con più operatori e admin.',
      'Per operazioni più grandi con 31-50 operatori.',
    ],
    commonFeatures: [
      'lavori e clienti',
      'operatori e ruoli',
      'app mobile',
      'foto dei lavori',
      'calendario e registri lavoro',
      'costi dei lavori',
      'report e statistiche',
      'più admin se i ruoli lo permettono',
      'gestione operativa base e avanzata',
    ],
    addon: {
      title: 'Sito, richieste e portale clienti',
      price: commonPricing.addonSetupPrice,
      description:
        'Per aziende che vogliono ricevere richieste direttamente dal sito e dare ai clienti una vista semplice di lavori, foto e comunicazione.',
      features: [
        'sito semplice per l’azienda',
        'modulo richiesta collegato a Diriqo',
        'portale clienti',
        'vista lavori per cliente',
        'foto prima/dopo per cliente',
        'stato base di richieste e comunicazione',
      ],
      note: 'Diriqo base = gestione del lavoro dentro l’azienda. Add-on = sito, ricezione richieste e portale clienti.',
    },
  },
  fr: {
    title: 'Prix selon la taille d’équipe, pas selon les fonctions débloquées.',
    description:
      'Tous les plans standard incluent les mêmes fonctions principales de Diriqo. La différence principale est le nombre de personnes.',
    introTitle: 'Le même Diriqo pour chaque équipe.',
    introText:
      'Tu ne paies pas pour débloquer les fonctions courantes. Diriqo de base sert à gérer le travail dans l’entreprise. Choisis le plan selon le nombre de personnes.',
    introBullets: [
      'Tous les plans standard incluent interventions, personnes, mobile, photos, calendrier, suivi, coûts et rapports.',
      'Les plans standard vont jusqu’à 50 personnes. Les opérations plus grandes passent par une configuration adaptée.',
      'Site web, demandes et portail client sont un add-on séparé.',
    ],
    planDescriptions: [
      'Pour petites équipes qui veulent de l’ordre dans interventions et personnes.',
      'Pour entreprises en croissance avec plus de personnes sur le terrain.',
      'Pour équipes opérationnelles plus grandes avec plus d’équipiers et admins.',
      'Pour opérations plus grandes avec 31 à 50 personnes.',
    ],
    commonFeatures: [
      'interventions et clients',
      'équipes et rôles',
      'app mobile',
      'photos d’intervention',
      'calendrier et suivi du travail',
      'coûts des interventions',
      'rapports et statistiques',
      'plusieurs admins si les rôles le permettent',
      'gestion opérationnelle de base et avancée',
    ],
    addon: {
      title: 'Site web, demandes et portail client',
      price: commonPricing.addonSetupPrice,
      description:
        'Pour entreprises qui veulent recevoir des demandes directement depuis le site et donner aux clients une vue simple des interventions, photos et communication.',
      features: [
        'site web simple pour l’entreprise',
        'formulaire connecté à Diriqo',
        'portail client',
        'vue des interventions pour le client',
        'photos avant/après pour le client',
        'statut de base des demandes et communication',
      ],
      note: 'Diriqo de base = gestion du travail dans l’entreprise. Add-on = site web, réception des demandes et portail client.',
    },
  },
}

export const marketingContent: Record<Locale, MarketingContent> = {
  cs: {
    locale: 'cs',
    meta: {
      home: {
        title: 'Diriqo - Konečně jednoduché řízení zakázek',
        description:
          'Jednoduchý systém pro zakázky, pracovníky, fotky, hodiny, zákazníky a přehled nákladů.',
      },
      features: {
        title: 'Funkce Diriqo - zakázky, lidé, fotky a přehled práce',
        description:
          'Přehled modulů Diriqo pro zakázky, pracovníky, mobil, fotky, hodiny, kalendář, zákazníky, náklady a portál.',
      },
      howItWorks: {
        title: 'Jak funguje Diriqo - jednoduchý průvodce',
        description:
          'Podívej se na jednoduchý tok od poptávky přes nabídku, zakázku, mobil pracovníka, náklady a fakturu až po zákaznický přehled.',
      },
      pricing: {
        title: 'Ceník Diriqo - jednoduchá cena podle velikosti týmu',
        description:
          'Tarify Diriqo Starter, Growth, Business a Scale do 50 pracovníků. Větší provozy řešíme individuálním nastavením.',
      },
      industries: {
        title: 'Pro koho je Diriqo - software pro řemeslníky, úklid, servis a stavební firmy',
        description:
          'Diriqo je systém pro zakázky, plánování pracovníků, docházku, fotodokumentaci a řízení práce v terénu pro úklidové, servisní, řemeslné a stavební firmy.',
      },
      demo: {
        title: 'Demo Diriqo - klikací ukázka systému',
        description:
          'Interaktivní demo Diriqo s ukázkovými daty: přehled, zakázky, pracovníci, fotky, kalendář a fakturace bez přihlášení.',
      },
      contact: {
        title: 'Kontakt Diriqo - napiš nám',
        description:
          'Kontaktuj Diriqo kvůli vyzkoušení, nastavení, webu, zákaznickému portálu nebo otázkám k systému.',
      },
      privacy: {
        title: 'Ochrana osobních údajů Diriqo',
        description: 'Základní informace o zpracování osobních údajů na webu Diriqo.',
      },
      terms: {
        title: 'Obchodní podmínky Diriqo',
        description: 'Základní obchodní podmínky pro web a služby Diriqo.',
      },
      cookies: {
        title: 'Cookies Diriqo',
        description: 'Informace o používání cookies na veřejném webu Diriqo.',
      },
    },
    common: {
      login: 'Přihlášení',
      trial: 'Začít zdarma',
      demo: 'Spustit demo',
      createAccount: 'Vytvořit účet',
      openMenu: 'Otevřít menu',
      closeMenu: 'Zavřít menu',
      popular: 'Oblíbené',
      notReady: 'Demo režim připravujeme.',
    },
    navLinks: nav(['Funkce', 'Jak to funguje', 'Ceník', 'Obory', 'Demo', 'Kontakt']),
    legalLinks: legal(['Podmínky', 'Ochrana osobních údajů', 'Cookies', 'GDPR']),
    footer: {
      description:
        'Jednoduchý systém pro firmy, které řídí zakázky, pracovníky, fotky, hodiny a zákazníky v terénu.',
      web: 'Web',
      legal: 'Právní',
      contact: 'Kontakt',
      appLogin: 'Přihlášení do aplikace',
      setupHelp: 'Chci pomoct s nastavením',
      copyright: 'Všechna práva vyhrazena.',
    },
    home: {
      heroEyebrow: 'Jednoduchý systém pro firmy v terénu',
      heroTitle: 'Konečně jednoduché řízení zakázek.',
      heroSubtitle: 'Vytvořte účet, založte firmu a začněte spravovat zakázky, pracovníky a zákazníky během pár minut.',
      secondaryCta: 'Ukázat demo',
      heroNote: 'Nejdřív účet. Firmu nastavíte v dalším kroku.',
      heroHighlights: ['Zakázky', 'Pracovníci', 'Fotky', 'Stav práce', 'Náklady'],
      problemEyebrow: 'Problém',
      problemTitle: 'Malá firma nepotřebuje další chaos.',
      problemText:
        'Když se práce řídí přes chat, papír, telefon a fotky v galerii, přehled zmizí rychle. Stačí rušné ráno, změna plánu a nikdo si není jistý, co je hotové.',
      solutionEyebrow: 'Řešení',
      solutionTitle: 'Diriqo dá práci pevné místo.',
      solutionText:
        'Každá zakázka má své místo. Pracovníci ví, co mají dělat, a fotky, hodiny, poznámky i náklady patří ke konkrétní práci. Majitel vidí stav firmy bez obvolávání.',
      stepsEyebrow: '3 kroky',
      stepsTitle: 'Jak to funguje',
      stepsText:
        'Nejdřív uložíš zákazníka, pak pracovníka a nakonec vytvoříš zakázku s termínem, adresou, lidmi a úkoly.',
      featuresEyebrow: 'Funkce',
      featuresTitle: 'Všechno důležité pro práci v terénu.',
      industriesEyebrow: 'Pro koho',
      industriesTitle: 'Pro firmy, které pracují venku, u zákazníků nebo na více místech.',
      industriesText: 'Diriqo je pro firmy, které nepracují celý den za jedním stolem.',
      pricingEyebrow: 'Ceník',
      pricingTitle: 'Jednoduchá cena podle počtu lidí.',
      finalCtaTitle: 'Začni řídit zakázky jednoduše.',
      finalCtaText:
        'Méně obvolávání, méně hledání fotek a víc klidu v každodenní práci. Bez složitého systému navíc.',
    },
    problemItems: [
      'Zakázka je někde ve WhatsAppu, ale nikdo neví, ve kterém vlákně.',
      'Fotky z práce jsou ztracené mezi osobními fotkami v galerii.',
      'Papíry a poznámky zůstávají po kapsách, autech a stolech.',
      'Na konci dne se řeší, kdo kolik hodin opravdu odpracoval.',
      'Zákazník volá a ptá se, kde jste nebo jestli je hotovo.',
      'Majitel skládá přehled z telefonátů, zpráv a dohadů.',
    ],
    solutionItems: [
      'Každá zakázka má své místo',
      'Pracovníci vidí práci v mobilu',
      'Fotky patří ke konkrétní zakázce',
      'Hodiny se ukládají k práci',
      'Zákazníci a historie jsou pohromadě',
      'Majitel vidí stav firmy bez obvolávání',
    ],
    beforeAfter: defaultBeforeAfterCopy,
    socialProof: defaultSocialProofCopy,
    homeSteps: [
      {
        title: 'Přidáš zákazníka',
        text: 'Nejdřív uložíš kontakt, adresu a poznámky. Příště už nehledáš v telefonu.',
      },
      {
        title: 'Přidáš pracovníka',
        text: 'Pak přidáš člověka, který bude práci vidět v mobilu.',
      },
      {
        title: 'Vytvoříš zakázku',
        text: 'Doplníš termín, adresu, lidi a úkoly. Fotky, čas a stav se ukládají k zakázce.',
      },
    ],
    featureCards: [
      { title: 'Zakázky', text: 'Termín, adresa, lidé, fotky, poznámky a stav práce na jednom místě.' },
      { title: 'Pracovníci', text: 'Vidíš, kdo je přiřazený na práci a co už má hotovo.' },
      { title: 'Mobilní aplikace', text: 'Pracovník otevře telefon a vidí dnešní práci.' },
      { title: 'Fotky před/po', text: 'Fotky jsou u konkrétní zakázky, ne ztracené v galerii.' },
      { title: 'Kalendář', text: 'Vidíš, kdo kam jede dnes, zítra i další týden.' },
      { title: 'Náklady a zisk', text: 'Orientačně vidíš, co zakázka stojí a co z ní zůstává.' },
      { title: 'Zákazníci', text: 'Kontakty, historie zakázek a poznámky na jednom místě.' },
      { title: 'Nabídky a poptávky', text: 'Od poptávky přes nabídku až po práci.' },
    ],
    industries: [
      'Úklidové firmy',
      'Servisní firmy',
      'Montáže',
      'Řemeslníci',
      'Stavební party',
      'Správa objektů',
      'Malé provozní týmy',
    ],
    pricingPlans: [
      {
        name: 'Starter',
        price: commonPricing.starterPrice,
        period: '/ měsíc',
        people: 'Do 5 lidí',
        description: 'Pro malé týmy, které chtějí pořádek v zakázkách a lidech.',
        features: ['zakázky a zákazníci', 'pracovníci a role', 'mobilní aplikace', 'fotky ze zakázek', 'kalendář a evidence práce', 'náklady a přehledy'],
      },
      {
        name: 'Growth',
        price: commonPricing.growthPrice,
        period: '/ měsíc',
        people: '6-15 lidí',
        description: 'Pro rostoucí firmy, které potřebují řídit více lidí v terénu.',
        featured: true,
        features: ['zakázky a zákazníci', 'pracovníci a role', 'mobilní aplikace', 'fotky ze zakázek', 'kalendář a evidence práce', 'náklady a přehledy'],
      },
      {
        name: 'Business',
        price: commonPricing.businessPrice,
        period: '/ měsíc',
        people: '16-30 lidí',
        description: 'Pro větší provozní týmy s více pracovníky a adminy.',
        features: ['zakázky a zákazníci', 'pracovníci a role', 'mobilní aplikace', 'fotky ze zakázek', 'kalendář a evidence práce', 'náklady a přehledy'],
      },
      {
        name: 'Scale',
        price: commonPricing.scalePrice,
        period: '/ měsíc',
        people: '31-50 lidí',
        description: 'Pro větší provozy, které chtějí stále jednoduché řízení práce.',
        features: ['zakázky a zákazníci', 'pracovníci a role', 'mobilní aplikace', 'fotky ze zakázek', 'kalendář a evidence práce', 'náklady a přehledy'],
      },
    ],
    addon: {
      title: 'Web, poptávky a zákaznický portál',
      price: commonPricing.addonSetupPrice,
      description:
        'Pro firmy, které chtějí kromě interního řízení získávat poptávky přímo z webu a dát zákazníkům jednoduchý náhled na zakázky, fotky a komunikaci.',
      features: ['jednoduché webové stránky pro firmu', 'poptávkový formulář napojený do Diriqo', 'zákaznický náhled / portál', 'přehled zakázek pro zákazníka', 'fotky před/po pro zákazníka', 'základní stav poptávek a komunikace'],
      note: 'Základní Diriqo = řízení práce uvnitř firmy. Add-on = web, příjem poptávek a zákaznický portál.',
    },
    faqs: [
      {
        question: 'Je Diriqo pro malou firmu?',
        answer: 'Ano. Diriqo je dělané hlavně pro malé a rostoucí týmy, které potřebují mít zakázky, lidi, fotky a přehled práce na jednom místě.',
      },
      {
        question: 'Musím umět pracovat se složitým softwarem?',
        answer: 'Ne. Cíl Diriqo je jednoduchost. Přidáš zákazníka, pracovníka a zakázku. Pracovník pak vidí práci v mobilu.',
      },
      {
        question: 'Funguje Diriqo na mobilu?',
        answer: 'Ano. Pracovníci používají mobilní aplikaci, kde vidí práci a mohou přidávat fotky nebo stav práce.',
      },
      {
        question: 'Můžu začít bez školení?',
        answer: 'Ano. Systém je navržený tak, aby základní práci zvládl člověk bez dlouhého zaškolování.',
      },
      {
        question: 'Je možné přidat zákaznický portál?',
        answer: 'Ano. Zákaznický náhled, poptávkový formulář a jednoduchý web jsou dostupné jako doplněk.',
      },
      {
        question: 'Je možné používat systém pro úklidovou firmu?',
        answer: 'Ano. Diriqo je vhodné pro úklidové firmy, servisní týmy, montáže, stavební party i správu objektů.',
      },
      {
        question: 'Bude fungovat pro servisní nebo montážní firmu?',
        answer: 'Ano. Hodí se pro každou firmu, která plánuje práci v terénu, posílá lidi na zakázky a potřebuje mít fotky, stav práce a historii u konkrétní zakázky.',
      },
    ],
    featuresPage: {
      eyebrow: 'Funkce',
      title: 'Zakázky, lidé, fotky a přehled práce.',
      text: 'Diriqo neskrývá jednoduchou práci za složitý ERP jazyk. Každý modul řeší konkrétní každodenní problém.',
      solves: 'Co řeší',
      helps: 'Proč pomáhá',
      example: 'Příklad',
    },
    featureModules: [
      {
        title: 'Zakázky',
        solves: 'Místo hledání v chatu má každá práce vlastní kartu.',
        helps: 'Majitel i pracovníci vidí termín, adresu, stav a poznámky.',
        example: 'Servisní technik otevře zakázku, vidí adresu a po práci doplní fotky.',
      },
      {
        title: 'Pracovníci',
        solves: 'Odpadá ruční obvolávání lidí a posílání informací po zprávách.',
        helps: 'Víš, kdo je na jaké práci a kdo má co hotovo.',
        example: 'Ráno přiřadíš dvěma lidem úklid a oni ho hned vidí v mobilu.',
      },
      {
        title: 'Mobilní aplikace',
        solves: 'Pracovník nepotřebuje kancelář ani notebook.',
        helps: 'Stačí telefon. Práce, fotky a čas jsou po ruce v terénu.',
        example: 'Montážník na místě nahraje fotku před začátkem a po dokončení.',
      },
      {
        title: 'Fotky ze zakázek',
        solves: 'Fotky se neztratí mezi osobními fotkami a chaty.',
        helps: 'Důkaz práce je uložený u správného zákazníka a zakázky.',
        example: 'Zákazník chce kontrolu úklidu. Otevřeš zakázku a fotky máš hned.',
      },
      {
        title: 'Docházka a hodiny',
        solves: 'Méně dohadů o tom, kdo kolik odpracoval.',
        helps: 'Čas se váže ke konkrétní práci, ne k papíru na konci týdne.',
        example: 'Pracovník doplní čas u zakázky a admin ho zkontroluje.',
      },
      {
        title: 'Kalendář',
        solves: 'Zakázky nejsou rozházené v kalendáři, chatu a v hlavě.',
        helps: 'Vidíš dnešek, zítřek i vytížení týmu.',
        example: 'Při telefonátu se zákazníkem hned vidíš, kdy má tým volno.',
      },
      {
        title: 'Zákazníci',
        solves: 'Kontakty a historie nejsou jen v telefonu majitele.',
        helps: 'Každý zákazník má přehled zakázek, adres a poznámek.',
        example: 'Opakovaná práce se založí rychle, protože údaje už v systému jsou.',
      },
      {
        title: 'Náklady a zisk',
        solves: 'Majitel netuší, jestli se zakázka vyplatila.',
        helps: 'Vidíš orientační náklady, práci a výsledek bez složité účetní tabulky.',
        example: 'Po dokončení zkontroluješ cenu, hodiny a materiál.',
      },
      {
        title: 'Nabídky, poptávky a portál',
        solves: 'Poptávky a nabídky se nemusí ztrácet v e-mailu.',
        helps: 'Zákazník může poslat požadavek a firma z něj vytvoří další krok.',
        example: 'Nová poptávka z webu se stane zákazníkem a připravenou nabídkou.',
      },
    ],
    howPage: {
      eyebrow: 'Jak to funguje',
      title: 'Od poptávky po fakturu v jednom toku.',
      text: 'Poptávka, nabídka, zakázka, mobil pracovníka, náklady, faktura i zákaznický přehled drží pohromadě.',
      cards: [
        { title: 'Mobil je součást provozu', text: 'Pracovník vidí práci, potvrdí výsledek a nahraje fotky přímo v terénu.' },
        { title: 'Ekonomika je u zakázky', text: 'Čas, náklady a orientační zisk jsou vidět bez hledání v tabulkách.' },
        { title: 'Portál je volitelný doplněk', text: 'Webový balíček přidá poptávky z webu a zákaznický přehled.' },
      ],
    },
    howItWorksSteps: [
      'Poptávka přijde do Diriqo',
      'Odešleš chytrou nabídku',
      'Ze schválené nabídky vznikne zakázka',
      'Pracovník vidí práci v mobilu',
      'Potvrdí práci, čas a fotky',
      'Vidíš náklady a zisk',
      'Odešleš fakturu',
      'Zákazník má vlastní přehled',
    ],
    industriesPage: {
      eyebrow: 'Obory',
      title: 'Diriqo se hodí pro každého, kdo dělá zakázky.',
      text: 'Není vázané na jeden obor. Hodí se všude, kde se práce plánuje, dělá u zákazníka nebo v terénu a potřebuje fotky, čas, lidi, náklady a přehled.',
    },
    industryDetails: [
      {
        title: 'Úklidové firmy',
        text: 'Více zakázek denně, fotky před/po a zákazník, který chce vidět výsledek.',
        points: ['fotky před/po', 'kontrola práce', 'docházka', 'více zakázek denně', 'důkaz pro zákazníka'],
      },
      {
        title: 'Servisní firmy',
        text: 'Technici v terénu potřebují jasné termíny, adresy a historii prací.',
        points: ['technici v terénu', 'termíny', 'zákazníci', 'historie prací'],
      },
      {
        title: 'Montážní firmy',
        text: 'Plánování lidí, stav zakázky a fotodokumentace bez chaosu v chatu.',
        points: ['plánování lidí', 'materiál a náklady', 'stav zakázky', 'fotodokumentace'],
      },
      {
        title: 'Řemeslníci',
        text: 'Menší zakázky, výjezdy k zákazníkům, fotky práce a přehled, co je hotové.',
        points: ['výjezdy k zákazníkům', 'menší zakázky', 'fotky práce', 'čas a náklady'],
      },
      {
        title: 'Stavební a dokončovací práce',
        text: 'Zakázky běží více dní, pracuje na nich více lidí a výsledek je potřeba předat.',
        points: ['více dní', 'více lidí', 'postup prací', 'předávací fotky'],
      },
      {
        title: 'Správa objektů',
        text: 'Opakované práce, požadavky zákazníků a kontrola, že je hotovo.',
        points: ['opakované práce', 'požadavky zákazníků', 'kontrola splnění'],
      },
    ],
    industriesSeo: {
      title: 'Pro jaké firmy je Diriqo vhodné',
      intro:
        'Diriqo je pro firmy a týmy, které nepracují jen u jednoho stolu. Pomáhá plánovat zakázky, posílat lidi do terénu, ukládat fotky, hlídat čas, náklady a stav práce.',
      groups: [
        {
          title: 'Úklid a facility',
          intro: 'Hodí se pro úklidové a facility provozy, kde je potřeba dokazovat výsledek, plánovat opakované práce a mít fotky u správné zakázky.',
          professions: [
            'úklidové firmy',
            'generální úklidy',
            'postavební úklidy',
            'mytí oken',
            'čištění podlah',
            'průmyslové čištění',
            'specializované čištění',
            'údržba objektů',
            'facility management',
            'správa budov',
            'technická správa objektů',
            'výškové práce',
            'dezinfekce',
            'deratizace',
          ],
        },
        {
          title: 'Řemeslníci',
          intro: 'Jako software pro řemeslníky pomáhá Diriqo udržet přehled o výjezdech, zakázkách, fotkách, materiálu, čase a komunikaci se zákazníkem.',
          professions: [
            'malíři',
            'podlaháři',
            'elektrikáři',
            'instalatéři',
            'topenáři',
            'truhláři',
            'zámečníci',
            'obkladači',
            'sádrokartonáři',
            'klempíři',
            'pokrývači',
            'zedníci',
            'fasádníci',
            'hodinoví manželé',
            'zahradníci',
            'kominíci',
            'servisní technici',
          ],
        },
        {
          title: 'Stavby a montáže',
          intro: 'Pro stavební a montážní týmy slouží Diriqo jako software pro stavební firmy, evidence zakázek a jednoduché plánování lidí na práci.',
          professions: [
            'stavební firmy',
            'dokončovací práce',
            'montážní firmy',
            'montážní technici',
            'instalační firmy',
            'montáže nábytku',
            'montáže kuchyní',
            'montáže technologií',
            'rekuperace',
            'klimatizace',
            'vzduchotechnika',
            'HVAC firmy',
            'montáže ocelových konstrukcí',
            'lešenářské práce',
          ],
        },
        {
          title: 'Servis',
          intro: 'Jako systém pro servisní firmy a aplikace pro techniky pomáhá Diriqo řešit termíny, historii práce, fotodokumentaci zakázek a stav každého výjezdu.',
          professions: [
            'servis klimatizací',
            'servis kotlů',
            'servis tepelných čerpadel',
            'servis elektro zařízení',
            'servis strojů',
            'revizní technici',
            'technické kontroly',
            'údržba zařízení',
          ],
        },
        {
          title: 'Další provozní týmy',
          intro: 'Diriqo využijí i další firmy, které plánují práci lidí, řeší zákazníky, úkoly, fotky, čas a přehled nákladů mimo kancelář.',
          professions: [
            'autoservisy',
            'detailing',
            'pneuservisy',
            'stěhovací firmy',
            'rozvozové firmy',
            'catering',
            'pekárny',
            'výroba',
            'skladové provozy',
            'bezpečnostní služby',
            'ostraha objektů',
          ],
        },
      ],
      seoText:
        'Diriqo je vhodné pro firmy, které plánují zakázky, řídí pracovníky v terénu, potřebují evidovat docházku, fotodokumentaci, náklady, komunikaci se zákazníky a stav práce. Systém využijí malé firmy, živnostníci i větší týmy s více pracovníky. Pomáhá jako systém pro zakázky, aplikace pro pracovníky v terénu, software pro úklidové firmy, systém pro servisní firmy, software pro řemeslníky i jednoduchý nástroj pro řízení zakázek.',
      problemsTitle: 'Jaké problémy Diriqo řeší',
      problemsIntro:
        'Nejde o složitý firemní systém. Diriqo dává běžné provozní věci na jedno místo, aby se práce nemusela skládat z telefonu, chatu a tabulek.',
      problems: [
        'chaos ve WhatsAppu',
        'nepřehledné Excel tabulky',
        'ztracené fotky zakázek',
        'nejasná docházka pracovníků',
        'chybějící přehled nákladů',
        'špatná komunikace mezi pracovníky',
        'ztracené cenové nabídky',
        'nepořádek v zakázkách',
        'nejasný stav práce',
        'chybějící historie zakázek',
        'plánování pracovníků bez přehledu',
        'docházka zaměstnanců mimo zakázky',
      ],
    },
    demoPage: {
      eyebrow: 'Demo',
      title: 'Podívej se na základní flow.',
      text: 'Demo režim připravujeme. Zatím si můžeš vytvořit testovací účet a projít si, jak Diriqo řeší zakázky, lidi, fotky a čas.',
      samplesTitle: 'Ukázky',
      dashboardTitle: 'Dashboard majitele',
      dashboardText: 'Přehled dnešních zakázek, lidí, hodin a orientačního výsledku.',
      mobileTitle: 'Mobil pracovníka',
      mobileText: 'Práce v mobilu, fotky a čas bez složitého školení.',
    },
    contactPage: {
      eyebrow: 'Kontakt',
      title: 'Napiš nám, co potřebuješ řídit.',
      text: 'Ozveme se k vyzkoušení Diriqo, nastavení firmy nebo add-onu Website & Customer Portal.',
      setupTitle: 'Chci pomoct s nastavením',
      setupText: 'Popiš firmu, počet lidí a typ práce. Navrhneme jednoduchý start.',
      support: 'Podpora',
      form: {
        name: 'Jméno',
        email: 'E-mail',
        company: 'Firma',
        message: 'Zpráva',
        submit: 'Odeslat',
      },
    },
    legal: {
      eyebrow: 'Právní informace',
      privacy: {
        title: 'Ochrana osobních údajů',
        intro:
          'Tato stránka popisuje základní principy práce s údaji na veřejném webu Diriqo. Finální znění může být upravené podle provozovatele služby.',
        sections: [
          { title: 'Jaké údaje můžeme zpracovat', text: 'Pokud vyplníš kontaktní formulář, můžeme zpracovat jméno, e-mail, název firmy a obsah zprávy.' },
          { title: 'Proč údaje používáme', text: 'Údaje používáme pro komunikaci, přípravu nabídky, podporu a základní provoz webu.' },
          { title: 'Kontakt', text: `Kvůli dotazům k osobním údajům nám napiš na ${contactEmail}.` },
        ],
      },
      terms: {
        title: 'Obchodní podmínky',
        intro:
          'Tato stránka je základní pracovní verze obchodních podmínek pro veřejný web Diriqo.',
        sections: [
          { title: 'Služba', text: 'Diriqo je SaaS systém pro řízení zakázek, pracovníků, fotek, hodin, zákazníků a orientačního přehledu nákladů.' },
          { title: 'Ceny', text: 'Ceny na webu jsou orientační a mohou se lišit podle rozsahu služby, počtu lidí nebo doplňkových požadavků.' },
          { title: 'Doplňkové služby', text: 'Website & Customer Portal může zahrnovat firemní web, poptávkové formuláře, zákaznický portál a branding.' },
          { title: 'Kontakt', text: `Dotazy k podmínkám pošli na ${contactEmail}.` },
        ],
      },
      cookies: {
        title: 'Cookies',
        intro:
          'Cookies pomáhají webu fungovat a mohou sloužit k základnímu měření návštěvnosti.',
        sections: [
          { title: 'Nezbytné cookies', text: 'Tyto cookies pomáhají s technickým fungováním webu, bezpečností a správným načtením stránek.' },
          { title: 'Analytika', text: 'Pro základní měření návštěvnosti používáme Vercel Web Analytics bez analytických cookies.' },
          { title: 'Kontakt', text: `Dotazy ke cookies pošli na ${contactEmail}.` },
        ],
      },
    },
    mockup: {
      dashboardEyebrow: 'Dnes ve firmě',
      dashboardTitle: 'Přehled zakázek',
      activeJobs: '12 aktivních',
      revenue: 'Tržby',
      hours: 'Hodiny',
      profit: 'Zisk',
      rows: [
        ['Úklid kanceláří', 'Dnes 08:00', '2 lidé', 'V práci'],
        ['Servis klimatizace', 'Dnes 13:30', '1 člověk', 'Naplánováno'],
        ['Montáž regálů', 'Zítra 09:00', '3 lidé', 'Připraveno'],
      ],
      mobileEyebrow: 'Moje práce',
      mobileTitle: 'Dnešní zakázka',
      mobileJob: 'Úklid showroomu',
      mobileTime: 'Praha 4, 08:00-11:00',
      photos: 'Fotky',
      time: 'Čas',
      uploadPhoto: 'Nahrát fotku',
    },
  },

  en: {
    locale: 'en',
    meta: {
      home: { title: 'Diriqo - Finally simple job management', description: 'A simple system for jobs, workers, photos, hours, customers and cost overview.' },
      features: { title: 'Diriqo Features - jobs, people, photos and work overview', description: 'Modules for jobs, workers, mobile work, photos, hours, calendar, customers, costs and portal.' },
      howItWorks: { title: 'How Diriqo works - a simple guide', description: 'From inquiry to quote, job, worker mobile app, costs, invoice and customer overview.' },
      pricing: { title: 'Diriqo Pricing - simple price by team size', description: 'Starter, Growth, Business and Scale plans for teams up to 50 workers. Larger operations can use a custom setup.' },
      industries: { title: 'Who Diriqo is for - cleaning, service, installation and facility teams', description: 'Diriqo helps field teams in cleaning, service, installation, construction and facility management.' },
      demo: { title: 'Diriqo Demo - job management preview', description: 'A preview of the basic Diriqo flow: dashboard, job, mobile app, photos and worker time.' },
      contact: { title: 'Contact Diriqo', description: 'Contact Diriqo about a trial, setup, website, customer portal or product questions.' },
      privacy: { title: 'Diriqo Privacy Policy', description: 'Basic information about personal data processing on the Diriqo website.' },
      terms: { title: 'Diriqo Terms', description: 'Basic terms for the Diriqo website and services.' },
      cookies: { title: 'Diriqo Cookies', description: 'Information about cookies on the public Diriqo website.' },
    },
    common: { login: 'Sign in', trial: 'Start free trial', demo: 'View demo', createAccount: 'Create account', openMenu: 'Open menu', closeMenu: 'Close menu', popular: 'Popular', notReady: 'Demo mode is coming soon.' },
    navLinks: nav(['Features', 'How it works', 'Pricing', 'Industries', 'Demo', 'Contact']),
    legalLinks: legal(['Terms', 'Privacy', 'Cookies', 'GDPR']),
    footer: { description: 'A simple system for companies that manage jobs, workers, photos, hours and customers in the field.', web: 'Website', legal: 'Legal', contact: 'Contact', appLogin: 'Log in to app', setupHelp: 'I want help with setup', copyright: 'All rights reserved.' },
    home: {
      heroEyebrow: 'Simple software for field teams',
      heroTitle: 'Finally simple job management.',
      heroSubtitle: 'Create your account, set up your company and start managing jobs, workers and customers in minutes.',
      secondaryCta: 'View demo',
      heroNote: 'Create your account first. You will set up your company in the next step.',
      problemEyebrow: 'Problem',
      problemTitle: 'A small business does not need more chaos.',
      problemText: 'Work often lives in chats, papers, calls and camera rolls. One busy day is enough and the overview is gone.',
      solutionEyebrow: 'Solution',
      solutionTitle: 'Diriqo gives every job a clear place.',
      solutionText: 'Nothing heavy. Just a clear view of what needs doing, who is doing it, where the photos are and how much work is done.',
      stepsEyebrow: '3 steps',
      stepsTitle: 'How it works',
      stepsText: 'Add a customer, add a worker and create a job. The worker sees it on mobile, uploads photos and the admin has the overview.',
      featuresEyebrow: 'Features',
      featuresTitle: 'Everything important for work in the field.',
      industriesEyebrow: 'Who it is for',
      industriesTitle: 'For companies working outside, at customer sites or across many locations.',
      pricingEyebrow: 'Pricing',
      pricingTitle: 'Simple price by number of people.',
      finalCtaTitle: 'Start managing jobs simply.',
      finalCtaText: 'Less calling around, less searching for photos and more calm in daily operations.',
    },
    problemItems: ['Jobs in WhatsApp', 'Photos lost in camera rolls', 'Papers and notes everywhere', 'Arguments about hours', 'Customer calls asking where you are', 'Owner does not know who works where'],
    solutionItems: ['Every job has one place', 'Workers see work on mobile', 'Photos belong to the right job', 'Hours are saved to the job', 'Customers and history stay together', 'The owner sees company status without calling everyone'],
    homeSteps: [
      { title: 'Add a customer', text: 'Save contact, address and notes. Next time you do not search your phone.' },
      { title: 'Add a worker', text: 'They get access and see what to do on mobile.' },
      { title: 'Create a job', text: 'Assign people, date and work. Photos, time and status stay with the job.' },
    ],
    featureCards: [
      { title: 'Jobs', text: 'Date, address, people, photos, notes and work status.' },
      { title: 'Workers', text: 'People overview, job assignment and simple work records.' },
      { title: 'Mobile app', text: 'Workers open the phone and see today’s work.' },
      { title: 'Before/after photos', text: 'Photos stay with the job, not in a gallery.' },
      { title: 'Calendar', text: 'See who goes where today, tomorrow and next week.' },
      { title: 'Costs and profit', text: 'Get a rough view of job cost and margin.' },
      { title: 'Customers', text: 'Contacts, job history and notes in one place.' },
      { title: 'Quotes and inquiries', text: 'From inquiry to quote to work without copying data.' },
    ],
    industries: ['Cleaning companies', 'Service companies', 'Installations', 'Tradespeople', 'Construction crews', 'Facility management', 'Small operations teams'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ month', people: 'Up to 5 people', description: 'For small teams and new companies.', features: ['jobs', 'customers', 'workers', 'mobile app', 'photos', 'basic overview'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ month', people: '6-15 people', description: 'For companies that need clear control of people and work.', featured: true, features: ['everything in Starter', 'calendar', 'work records', 'job costs', 'better overviews'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ month', people: '16-30 people', description: 'For established service companies with larger operations.', features: ['jobs', 'customers', 'workers', 'mobile app', 'photos', 'calendar', 'work records', 'job costs', 'reports'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ month', people: '31-50 people', description: 'For larger service teams that still want simple operations management.', features: ['jobs', 'customers', 'workers', 'mobile app', 'photos', 'calendar', 'work records', 'job costs', 'reports'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'For companies that want to manage work, win inquiries and give customers a professional portal.', features: ['company website', 'inquiry forms', 'Diriqo connection', 'customer portal', 'public quotes', 'company branding'], note: 'The price is indicative and can vary by website and portal scope.' },
    faqs: [
      { question: 'Is Diriqo for a small business?', answer: 'Yes. It is built mainly for small and medium companies where the owner handles daily work.' },
      { question: 'Do I need to know complex software?', answer: 'No. If someone can open Facebook, they can use Diriqo.' },
      { question: 'Does Diriqo work on mobile?', answer: 'Yes. Workers see work, add time and upload photos on mobile.' },
      { question: 'Can I start without training?', answer: 'Yes. The basics are customer, worker, job and assignment.' },
      { question: 'Can I add a customer portal?', answer: 'Yes. Website and portal are an add-on for better customer communication.' },
      { question: 'Can a cleaning company use it?', answer: 'Yes. It is useful for before/after photos, checks, attendance and many jobs per day.' },
      { question: 'Will it work for service or installation companies?', answer: 'Yes. It handles appointments, people in the field, work history, photos and job status.' },
    ],
    featuresPage: { eyebrow: 'Features', title: 'Jobs, people, photos and work overview.', text: 'Diriqo does not hide simple work behind heavy ERP language. Each module solves a real daily problem.', solves: 'What it solves', helps: 'Why it helps', example: 'Example' },
    featureModules: [
      { title: 'Jobs', solves: 'Every job has its own card instead of being buried in chat.', helps: 'Owner and workers see date, address, status and notes.', example: 'A technician opens a job, sees the address and adds photos after work.' },
      { title: 'Workers', solves: 'Less calling and messaging people manually.', helps: 'You know who works where and what is done.', example: 'In the morning you assign cleaning to two people and they see it on mobile.' },
      { title: 'Mobile app', solves: 'Workers do not need an office or laptop.', helps: 'The phone is enough for work, photos and time.', example: 'An installer uploads a photo before starting and after finishing.' },
      { title: 'Job photos', solves: 'Photos do not disappear in personal galleries and chats.', helps: 'Proof of work is stored with the right customer and job.', example: 'A customer asks for cleaning proof. You open the job and show photos.' },
      { title: 'Attendance and hours', solves: 'Fewer arguments about who worked how much.', helps: 'Time is tied to a job, not to a paper at the end of the week.', example: 'A worker adds time to a job and admin checks it.' },
      { title: 'Calendar', solves: 'Jobs are not scattered across calendar, chat and memory.', helps: 'You see today, tomorrow and team capacity.', example: 'During a customer call you immediately see when the team is free.' },
      { title: 'Customers', solves: 'Contacts and history are not only in the owner’s phone.', helps: 'Each customer has jobs, addresses and notes together.', example: 'Repeat work is created faster because data is already saved.' },
      { title: 'Costs and profit', solves: 'The owner does not know if a job paid off.', helps: 'You see rough costs, work and result without a complex spreadsheet.', example: 'After finishing, you check price, hours and materials.' },
      { title: 'Quotes, inquiries and portal', solves: 'Inquiries and quotes do not get lost in email.', helps: 'A customer request can become the next step in the system.', example: 'A new website inquiry becomes a customer and prepared quote.' },
    ],
    howPage: { eyebrow: 'How it works', title: 'From inquiry to invoice in one flow.', text: 'Inquiry, quote, job, worker mobile app, costs, invoice and customer overview stay connected.', cards: [{ title: 'Mobile is part of operations', text: 'Workers see the job, confirm the result and upload photos in the field.' }, { title: 'Job economics stay visible', text: 'Time, costs and estimated profit stay with the job.' }, { title: 'Portal is optional', text: 'The website package adds website inquiries and a customer overview.' }] },
    howItWorksSteps: ['Inquiry comes into Diriqo', 'Send a smart quote', 'Approved quote becomes a job', 'Worker sees the job on mobile', 'Worker confirms time and photos', 'You see costs and profit', 'Send the invoice', 'Customer has their own overview'],
    industriesPage: { eyebrow: 'Industries', title: 'Diriqo fits anyone who works with jobs.', text: 'It is not tied to one industry. It fits wherever work is planned, done at customer sites or in the field, and needs photos, time, people, costs and overview.' },
    industryDetails: [
      { title: 'Cleaning companies', text: 'Many jobs per day, before/after photos and customers who want proof.', points: ['before/after photos', 'work checks', 'attendance', 'many jobs per day', 'proof for customer'] },
      { title: 'Service companies', text: 'Field technicians need clear dates, addresses and work history.', points: ['field technicians', 'appointments', 'customers', 'work history'] },
      { title: 'Installation companies', text: 'People planning, job status and photo documentation without chat chaos.', points: ['people planning', 'materials and costs', 'job status', 'photo documentation'] },
      { title: 'Tradespeople', text: 'Smaller jobs, customer visits, work photos and a clear view of what is done.', points: ['customer visits', 'small jobs', 'work photos', 'time and costs'] },
      { title: 'Construction and finishing work', text: 'Jobs run for several days, with more people and handover photos.', points: ['multiple days', 'multiple people', 'work progress', 'handover photos'] },
      { title: 'Facility management', text: 'Recurring work, customer requests and checks that work is done.', points: ['recurring work', 'customer requests', 'completion checks'] },
    ],
    industriesSeo: {
      title: 'What types of companies Diriqo fits',
      intro:
        'Diriqo is for companies and teams that do not work from one desk all day. It helps plan jobs, send people into the field, store photos, track time, costs and work status.',
      groups: [
        {
          title: 'Cleaning and facility',
          intro: 'Useful for cleaning and facility teams that need proof of work, recurring jobs and photos saved with the right job.',
          professions: [
            'cleaning companies',
            'deep cleaning',
            'post-construction cleaning',
            'window cleaning',
            'floor cleaning',
            'industrial cleaning',
            'specialized cleaning',
            'property maintenance',
            'facility management',
            'building management',
            'technical building management',
            'work at heights',
            'disinfection',
            'pest control',
          ],
        },
        {
          title: 'Tradespeople',
          intro: 'As software for tradespeople, Diriqo keeps customer visits, jobs, photos, materials, time and customer communication in one place.',
          professions: [
            'painters',
            'floor layers',
            'electricians',
            'plumbers',
            'heating engineers',
            'carpenters',
            'locksmiths',
            'tilers',
            'drywall installers',
            'sheet metal workers',
            'roofers',
            'bricklayers',
            'facade workers',
            'handyman services',
            'gardeners',
            'chimney sweeps',
            'service technicians',
          ],
        },
        {
          title: 'Construction and installation',
          intro: 'For construction and installation teams, Diriqo works as job management software, job records and simple worker scheduling.',
          professions: [
            'construction companies',
            'finishing work',
            'installation companies',
            'installation technicians',
            'fitting companies',
            'furniture assembly',
            'kitchen installation',
            'technology installation',
            'heat recovery systems',
            'air conditioning',
            'ventilation',
            'HVAC companies',
            'steel structure installation',
            'scaffolding work',
          ],
        },
        {
          title: 'Service',
          intro: 'As a system for service companies and an app for technicians, Diriqo helps with appointments, work history, job photos and the status of each visit.',
          professions: [
            'air conditioning service',
            'boiler service',
            'heat pump service',
            'electrical equipment service',
            'machine service',
            'inspection technicians',
            'technical inspections',
            'equipment maintenance',
          ],
        },
        {
          title: 'Other operations teams',
          intro: 'Diriqo also fits teams that plan people, handle customers, tasks, photos, time and costs outside the office.',
          professions: [
            'car repair shops',
            'detailing',
            'tire services',
            'moving companies',
            'delivery companies',
            'catering',
            'bakeries',
            'production',
            'warehouse operations',
            'security services',
            'property security',
          ],
        },
      ],
      seoText:
        'Diriqo is suitable for companies that plan jobs, manage workers in the field, track attendance, job photos, costs, customer communication and work status. Small businesses, sole traders and larger teams with more workers can use it as job management software, a field worker app, software for cleaning companies, a system for service companies, software for tradespeople and a simple tool for operational job control.',
      problemsTitle: 'Problems Diriqo solves',
      problemsIntro:
        'It is not a heavy company system. Diriqo puts everyday operations in one place, so work does not have to be pieced together from calls, chats and spreadsheets.',
      problems: [
        'chaos in WhatsApp',
        'messy Excel sheets',
        'lost job photos',
        'unclear worker attendance',
        'missing cost overview',
        'poor communication between workers',
        'lost quotes',
        'messy job records',
        'unclear work status',
        'missing job history',
        'worker scheduling without overview',
        'employee attendance outside jobs',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'See the basic flow.', text: 'Demo mode is coming soon. For now, create a test account and see how Diriqo handles jobs, people, photos and time.', samplesTitle: 'Previews', dashboardTitle: 'Owner dashboard', dashboardText: 'Today’s jobs, people, hours and rough result.', mobileTitle: 'Worker mobile app', mobileText: 'Work on mobile, photos and time without complex training.' },
    contactPage: { eyebrow: 'Contact', title: 'Tell us what you need to manage.', text: 'We will get back to you about Diriqo trial, company setup or the Website & Customer Portal add-on.', setupTitle: 'I want help with setup', setupText: 'Describe your company, team size and type of work. We will suggest a simple start.', support: 'Support', form: { name: 'Name', email: 'E-mail', company: 'Company', message: 'Message', submit: 'Send' } },
    legal: {
      eyebrow: 'Legal information',
      privacy: { title: 'Privacy Policy', intro: 'This page describes the basic principles of data handling on the public Diriqo website.', sections: [{ title: 'Data we may process', text: 'If you fill in the contact form, we may process your name, e-mail, company name and message.' }, { title: 'Why we use data', text: 'We use data for communication, offer preparation, support and basic website operation.' }, { title: 'Contact', text: `Questions about personal data: ${contactEmail}.` }] },
      terms: { title: 'Terms', intro: 'This page is a basic working version of terms for the public Diriqo website.', sections: [{ title: 'Service', text: 'Diriqo is a SaaS system for jobs, workers, photos, hours, customers and rough cost overview.' }, { title: 'Prices', text: 'Website prices are indicative and may vary by scope, team size or additional needs.' }, { title: 'Additional services', text: 'Website & Customer Portal can include a company website, inquiry forms, customer portal and branding.' }, { title: 'Contact', text: `Questions about terms: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies help the website work and may be used for basic traffic measurement.', sections: [{ title: 'Necessary cookies', text: 'These cookies help the technical operation, security and loading of pages.' }, { title: 'Analytics', text: 'We use Vercel Web Analytics for basic traffic measurement without analytics cookies.' }, { title: 'Contact', text: `Questions about cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Today in company',
      dashboardTitle: 'Job overview',
      activeJobs: '12 active',
      revenue: 'Revenue',
      hours: 'Hours',
      profit: 'Profit',
      rows: [['Office cleaning', 'Today 08:00', '2 people', 'In progress'], ['AC service', 'Today 13:30', '1 person', 'Planned'], ['Shelf installation', 'Tomorrow 09:00', '3 people', 'Ready']],
      mobileEyebrow: 'My work',
      mobileTitle: 'Today’s job',
      mobileJob: 'Showroom cleaning',
      mobileTime: 'Prague 4, 08:00-11:00',
      photos: 'Photos',
      time: 'Time',
      uploadPhoto: 'Upload photo',
    },
  },

  de: {
    locale: 'de',
    meta: {
      home: { title: 'Diriqo - Endlich einfache Steuerung von Aufträgen', description: 'Ein einfaches System für Aufträge, Mitarbeiter, Fotos, Stunden, Kunden und Kostenüberblick.' },
      features: { title: 'Diriqo Funktionen - Aufträge, Menschen, Fotos und Überblick', description: 'Module für Aufträge, Mitarbeiter, mobile Arbeit, Fotos, Stunden, Kalender, Kunden, Kosten und Portal.' },
      howItWorks: { title: 'So funktioniert Diriqo - einfache Anleitung', description: 'Von Anfrage zu Angebot, Auftrag, mobiler App, Kosten, Rechnung und Kundenübersicht.' },
      pricing: { title: 'Diriqo Preise - einfache Preise nach Teamgröße', description: 'Starter, Growth, Business und Scale für Teams bis 50 Mitarbeiter. Größere Betriebe bekommen ein individuelles Setup.' },
      industries: { title: 'Für wen ist Diriqo - Reinigung, Service, Montage und Objektbetreuung', description: 'Diriqo hilft Teams im Außendienst und vor Ort.' },
      demo: { title: 'Diriqo Demo - Vorschau des Systems', description: 'Vorschau auf Dashboard, Auftrag, mobile App, Fotos und Arbeitszeit.' },
      contact: { title: 'Kontakt Diriqo', description: 'Kontaktiere Diriqo für Testzugang, Einrichtung, Website, Kundenportal oder Fragen.' },
      privacy: { title: 'Diriqo Datenschutz', description: 'Grundlegende Informationen zur Verarbeitung personenbezogener Daten.' },
      terms: { title: 'Diriqo Geschäftsbedingungen', description: 'Grundlegende Bedingungen für Website und Services von Diriqo.' },
      cookies: { title: 'Diriqo Cookies', description: 'Informationen zu Cookies auf der öffentlichen Diriqo Website.' },
    },
    common: { login: 'Anmelden', trial: 'Kostenlos testen', demo: 'Demo starten', createAccount: 'Konto erstellen', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', popular: 'Beliebt', notReady: 'Der Demo-Modus ist in Vorbereitung.' },
    navLinks: nav(['Funktionen', 'So funktioniert es', 'Preise', 'Branchen', 'Demo', 'Kontakt']),
    legalLinks: legal(['Bedingungen', 'Datenschutz', 'Cookies', 'GDPR']),
    footer: { description: 'Ein einfaches System für Unternehmen, die Aufträge, Mitarbeiter, Fotos, Stunden und Kunden im Außendienst steuern.', web: 'Website', legal: 'Rechtliches', contact: 'Kontakt', appLogin: 'Zur App anmelden', setupHelp: 'Ich möchte Hilfe beim Start', copyright: 'Alle Rechte vorbehalten.' },
    home: {
      heroEyebrow: 'Einfaches System für Teams vor Ort',
      heroTitle: 'Endlich einfache Steuerung von Aufträgen.',
      heroSubtitle: 'Aufträge, Mitarbeiter, Fotos und Firmenüberblick an einem Ort.',
      secondaryCta: 'Ansehen, wie es funktioniert',
      heroNote: 'Aufträge, Menschen und Fotos an einem Ort. Weniger Chaos. Mehr Überblick.',
      problemEyebrow: 'Problem',
      problemTitle: 'Ein kleines Unternehmen braucht nicht noch mehr Chaos.',
      problemText: 'Arbeit liegt oft in Chats, Papier, Telefonaten und Fotogalerien. Ein voller Tag reicht und der Überblick ist weg.',
      solutionEyebrow: 'Lösung',
      solutionTitle: 'Diriqo gibt jedem Auftrag einen festen Platz.',
      solutionText: 'Nicht kompliziert. Nur klar sehen, was zu tun ist, wer es macht, wo Fotos sind und wie weit die Arbeit ist.',
      stepsEyebrow: '3 Schritte',
      stepsTitle: 'So funktioniert es',
      stepsText: 'Kunde, Mitarbeiter und Auftrag anlegen. Der Mitarbeiter sieht die Arbeit mobil, lädt Fotos hoch und der Admin hat den Überblick.',
      featuresEyebrow: 'Funktionen',
      featuresTitle: 'Alles Wichtige für Arbeit im Außendienst.',
      industriesEyebrow: 'Für wen',
      industriesTitle: 'Für Firmen, die draußen, beim Kunden oder an mehreren Orten arbeiten.',
      pricingEyebrow: 'Preise',
      pricingTitle: 'Einfache Preise nach Anzahl der Personen.',
      finalCtaTitle: 'Starte einfache Auftragssteuerung.',
      finalCtaText: 'Weniger Nachtelefonieren, weniger Fotos suchen und mehr Ruhe im Alltag.',
    },
    problemItems: ['Aufträge in WhatsApp', 'Fotos verschwinden in Galerien', 'Papier und Notizen überall', 'Diskussionen über Stunden', 'Kunde ruft und fragt, wo ihr seid', 'Chef weiß nicht, wer wo arbeitet'],
    solutionItems: ['Jeder Auftrag hat einen Ort', 'Mitarbeiter sehen Arbeit mobil', 'Fotos gehören zum Auftrag', 'Stunden werden beim Auftrag gespeichert', 'Kunden und Verlauf bleiben zusammen', 'Der Chef sieht den Stand ohne Telefonkette'],
    homeSteps: [
      { title: 'Kunden anlegen', text: 'Kontakt, Adresse und Notizen speichern. Beim nächsten Mal suchst du nicht im Telefon.' },
      { title: 'Mitarbeiter anlegen', text: 'Die Person bekommt Zugriff und sieht mobil, was zu tun ist.' },
      { title: 'Auftrag erstellen', text: 'Menschen, Termin und Arbeit zuweisen. Fotos, Zeit und Status bleiben beim Auftrag.' },
    ],
    featureCards: [
      { title: 'Aufträge', text: 'Termin, Adresse, Personen, Fotos, Notizen und Status.' },
      { title: 'Mitarbeiter', text: 'Überblick über Menschen, Zuweisung und Leistung.' },
      { title: 'Mobile App', text: 'Mitarbeiter öffnen das Telefon und sehen die heutige Arbeit.' },
      { title: 'Vorher/Nachher-Fotos', text: 'Fotos bleiben beim Auftrag, nicht in der Galerie.' },
      { title: 'Kalender', text: 'Du siehst, wer heute, morgen und nächste Woche wohin fährt.' },
      { title: 'Kosten und Gewinn', text: 'Grobe Sicht auf Kosten und Ergebnis des Auftrags.' },
      { title: 'Kunden', text: 'Kontakte, Auftragsverlauf und Notizen an einem Ort.' },
      { title: 'Angebote und Anfragen', text: 'Von Anfrage zu Angebot zu Arbeit ohne Kopieren.' },
    ],
    industries: ['Reinigungsfirmen', 'Servicefirmen', 'Montage', 'Handwerker', 'Bauteams', 'Objektbetreuung', 'Kleine Betriebsteams'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ Monat', people: 'Bis 5 Personen', description: 'Für kleine Teams und junge Firmen.', features: ['Aufträge', 'Kunden', 'Mitarbeiter', 'mobile App', 'Fotos', 'Basisüberblick'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ Monat', people: '6-15 Personen', description: 'Für Firmen, die Menschen und Arbeit klar steuern müssen.', featured: true, features: ['alles aus Starter', 'Kalender', 'Arbeitsnachweise', 'Auftragskosten', 'bessere Übersichten'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ Monat', people: '16-30 Personen', description: 'Für etablierte Servicefirmen mit größerem Betrieb.', features: ['Aufträge', 'Kunden', 'Mitarbeiter', 'mobile App', 'Fotos', 'Kalender', 'Arbeitserfassung', 'Auftragskosten', 'Auswertungen'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ Monat', people: '31-50 Personen', description: 'Für größere Teams, die einfache Betriebssteuerung behalten wollen.', features: ['Aufträge', 'Kunden', 'Mitarbeiter', 'mobile App', 'Fotos', 'Kalender', 'Arbeitserfassung', 'Auftragskosten', 'Auswertungen'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} Einrichtung`, description: 'Für Firmen, die Arbeit steuern, Anfragen gewinnen und Kunden ein professionelles Portal geben wollen.', features: ['Firmenwebsite', 'Anfrageformulare', 'Diriqo Anbindung', 'Kundenportal', 'öffentliche Angebote', 'Branding'], note: 'Der Preis ist Richtwert und kann je nach Umfang variieren.' },
    faqs: [
      { question: 'Ist Diriqo für kleine Firmen geeignet?', answer: 'Ja. Es ist für kleine und mittlere Firmen gebaut, in denen der Inhaber täglich Arbeit steuert.' },
      { question: 'Muss ich komplizierte Software können?', answer: 'Nein. Wer Facebook öffnen kann, kann auch Diriqo nutzen.' },
      { question: 'Funktioniert Diriqo mobil?', answer: 'Ja. Mitarbeiter sehen Arbeit, erfassen Zeit und laden Fotos mobil hoch.' },
      { question: 'Kann ich ohne Schulung starten?', answer: 'Ja. Kunde, Mitarbeiter, Auftrag und Zuweisung reichen für den Start.' },
      { question: 'Kann ein Kundenportal ergänzt werden?', answer: 'Ja. Website und Portal sind ein Add-on für bessere Kundenkommunikation.' },
      { question: 'Passt es für Reinigungsfirmen?', answer: 'Ja. Für Vorher/Nachher-Fotos, Kontrolle, Anwesenheit und viele Jobs pro Tag.' },
      { question: 'Passt es für Service oder Montage?', answer: 'Ja. Termine, Außendienst, Verlauf, Fotos und Auftragsstatus sind abgedeckt.' },
    ],
    featuresPage: { eyebrow: 'Funktionen', title: 'Aufträge, Menschen, Fotos und Arbeitsüberblick.', text: 'Diriqo versteckt einfache Arbeit nicht hinter ERP-Sprache. Jedes Modul löst ein tägliches Problem.', solves: 'Was es löst', helps: 'Warum es hilft', example: 'Beispiel' },
    featureModules: [
      { title: 'Aufträge', solves: 'Jede Arbeit hat eine eigene Karte statt Chat-Suche.', helps: 'Chef und Mitarbeiter sehen Termin, Adresse, Status und Notizen.', example: 'Ein Techniker öffnet den Auftrag, sieht die Adresse und ergänzt Fotos.' },
      { title: 'Mitarbeiter', solves: 'Weniger Anrufe und Nachrichten an einzelne Menschen.', helps: 'Du weißt, wer wo arbeitet und was erledigt ist.', example: 'Morgens weist du zwei Personen Reinigung zu und sie sehen es mobil.' },
      { title: 'Mobile App', solves: 'Mitarbeiter brauchen kein Büro und keinen Laptop.', helps: 'Telefon reicht für Arbeit, Fotos und Zeit.', example: 'Ein Monteur lädt vor und nach der Arbeit Fotos hoch.' },
      { title: 'Auftragsfotos', solves: 'Fotos verschwinden nicht in privaten Galerien.', helps: 'Nachweis liegt beim richtigen Kunden und Auftrag.', example: 'Der Kunde will einen Nachweis. Du öffnest den Auftrag und hast die Fotos.' },
      { title: 'Anwesenheit und Stunden', solves: 'Weniger Streit über geleistete Stunden.', helps: 'Zeit hängt am Auftrag, nicht an Papier.', example: 'Mitarbeiter ergänzt Zeit, Admin prüft.' },
      { title: 'Kalender', solves: 'Aufträge sind nicht über Kalender, Chat und Kopf verteilt.', helps: 'Du siehst heute, morgen und Teamkapazität.', example: 'Beim Kundenanruf siehst du sofort freie Termine.' },
      { title: 'Kunden', solves: 'Kontakte und Verlauf sind nicht nur im Telefon des Chefs.', helps: 'Jeder Kunde hat Aufträge, Adressen und Notizen zusammen.', example: 'Wiederkehrende Arbeit ist schneller angelegt.' },
      { title: 'Kosten und Gewinn', solves: 'Der Chef weiß nicht, ob sich ein Auftrag lohnt.', helps: 'Grobe Kosten und Ergebnis ohne komplizierte Tabelle.', example: 'Nach Abschluss prüfst du Preis, Stunden und Material.' },
      { title: 'Angebote, Anfragen und Portal', solves: 'Anfragen und Angebote gehen nicht in E-Mails verloren.', helps: 'Eine Kundenanfrage wird zum nächsten Schritt.', example: 'Eine Web-Anfrage wird Kunde und vorbereitetes Angebot.' },
    ],
    howPage: { eyebrow: 'So funktioniert es', title: 'Von Anfrage bis Rechnung in einem Ablauf.', text: 'Anfrage, Angebot, Auftrag, mobile App, Kosten, Rechnung und Kundenübersicht bleiben verbunden.', cards: [{ title: 'Mobil gehört zum Betrieb', text: 'Mitarbeiter sehen den Auftrag, bestätigen das Ergebnis und laden Fotos vor Ort hoch.' }, { title: 'Wirtschaftlichkeit bleibt sichtbar', text: 'Zeit, Kosten und geschätzter Gewinn bleiben beim Auftrag.' }, { title: 'Portal ist optional', text: 'Das Website-Paket ergänzt Website-Anfragen und Kundenübersicht.' }] },
    howItWorksSteps: ['Anfrage kommt in Diriqo', 'Smartes Angebot senden', 'Angenommenes Angebot wird Auftrag', 'Mitarbeiter sieht Auftrag mobil', 'Zeit und Fotos bestätigen', 'Kosten und Gewinn sehen', 'Rechnung senden', 'Kunde hat eigene Übersicht'],
    industriesPage: { eyebrow: 'Branchen', title: 'Diriqo passt für alle, die Aufträge erledigen.', text: 'Es ist nicht an eine Branche gebunden. Es passt überall, wo Arbeit geplant, beim Kunden oder vor Ort erledigt wird und Fotos, Zeit, Menschen, Kosten und Überblick braucht.' },
    industryDetails: [
      { title: 'Reinigungsfirmen', text: 'Viele Jobs am Tag, Vorher/Nachher-Fotos und Kunden, die Nachweise wollen.', points: ['Vorher/Nachher-Fotos', 'Kontrolle', 'Anwesenheit', 'viele Jobs pro Tag', 'Nachweis'] },
      { title: 'Servicefirmen', text: 'Techniker brauchen klare Termine, Adressen und Verlauf.', points: ['Techniker', 'Termine', 'Kunden', 'Arbeitsverlauf'] },
      { title: 'Montagefirmen', text: 'Planung, Auftragsstatus und Fotodokumentation ohne Chat-Chaos.', points: ['Planung', 'Material und Kosten', 'Status', 'Fotos'] },
      { title: 'Handwerker', text: 'Kleinere Aufträge, Kundentermine, Arbeitsfotos und Überblick, was erledigt ist.', points: ['Kundentermine', 'kleine Aufträge', 'Arbeitsfotos', 'Zeit und Kosten'] },
      { title: 'Bau und Ausbau', text: 'Mehrere Tage, mehrere Menschen und Fotos zur Übergabe.', points: ['mehrere Tage', 'mehrere Menschen', 'Fortschritt', 'Übergabefotos'] },
      { title: 'Objektbetreuung', text: 'Wiederkehrende Arbeiten, Kundenanforderungen und Abschlusskontrolle.', points: ['wiederkehrende Arbeit', 'Kundenanfragen', 'Kontrolle'] },
    ],
    industriesSeo: {
      title: 'Für welche Firmen Diriqo geeignet ist',
      intro:
        'Diriqo ist für Firmen und Teams, die nicht den ganzen Tag an einem Schreibtisch arbeiten. Es hilft bei Aufträgen, Mitarbeitern im Außendienst, Fotos, Zeiten, Kosten und Arbeitsstatus.',
      groups: [
        {
          title: 'Reinigung und Facility',
          intro: 'Geeignet für Reinigungs- und Facility-Teams, die Ergebnisse nachweisen, wiederkehrende Arbeiten planen und Fotos beim richtigen Auftrag speichern müssen.',
          professions: [
            'Reinigungsfirmen',
            'Grundreinigungen',
            'Bauendreinigungen',
            'Fensterreinigung',
            'Bodenreinigung',
            'Industriereinigung',
            'Spezialreinigung',
            'Objektwartung',
            'Facility Management',
            'Gebäudeverwaltung',
            'technische Objektbetreuung',
            'Höhenarbeiten',
            'Desinfektion',
            'Schädlingsbekämpfung',
          ],
        },
        {
          title: 'Handwerker',
          intro: 'Als Software für Handwerker hält Diriqo Einsätze, Aufträge, Fotos, Material, Zeit und Kundenkommunikation zusammen.',
          professions: [
            'Maler',
            'Bodenleger',
            'Elektriker',
            'Installateure',
            'Heizungsbauer',
            'Tischler',
            'Schlosser',
            'Fliesenleger',
            'Trockenbauer',
            'Klempner',
            'Dachdecker',
            'Maurer',
            'Fassadenbauer',
            'Hausmeisterdienste',
            'Gärtner',
            'Schornsteinfeger',
            'Servicetechniker',
          ],
        },
        {
          title: 'Bau und Montage',
          intro: 'Für Bau- und Montageteams dient Diriqo als Software für Aufträge, Auftragsdokumentation und einfache Mitarbeiterplanung.',
          professions: [
            'Baufirmen',
            'Ausbauarbeiten',
            'Montagefirmen',
            'Montagetechniker',
            'Installationsfirmen',
            'Möbelmontage',
            'Küchenmontage',
            'Technikmontage',
            'Lüftungsanlagen mit Wärmerückgewinnung',
            'Klimaanlagen',
            'Lüftungstechnik',
            'HVAC-Firmen',
            'Stahlbaumontage',
            'Gerüstbau',
          ],
        },
        {
          title: 'Service',
          intro: 'Als System für Servicefirmen und App für Techniker hilft Diriqo mit Terminen, Arbeitsverlauf, Auftragsfotos und Status jedes Einsatzes.',
          professions: [
            'Klimaservice',
            'Kesselservice',
            'Wärmepumpenservice',
            'Service für Elektrogeräte',
            'Maschinenservice',
            'Prüftechniker',
            'technische Kontrollen',
            'Gerätewartung',
          ],
        },
        {
          title: 'Weitere operative Teams',
          intro: 'Diriqo passt auch für Teams, die Menschen, Kunden, Aufgaben, Fotos, Zeit und Kosten außerhalb des Büros steuern.',
          professions: [
            'Autowerkstätten',
            'Fahrzeugaufbereitung',
            'Reifenservice',
            'Umzugsfirmen',
            'Lieferdienste',
            'Catering',
            'Bäckereien',
            'Produktion',
            'Lagerbetriebe',
            'Sicherheitsdienste',
            'Objektschutz',
          ],
        },
      ],
      seoText:
        'Diriqo eignet sich für Firmen, die Aufträge planen, Mitarbeiter im Außendienst steuern, Anwesenheit, Fotodokumentation, Kosten, Kundenkommunikation und Arbeitsstatus erfassen müssen. Kleine Firmen, Selbstständige und größere Teams nutzen es als System für Aufträge, App für Außendienstmitarbeiter, Software für Reinigungsfirmen, System für Servicefirmen, Software für Handwerker und einfaches Werkzeug zur Auftragssteuerung.',
      problemsTitle: 'Welche Probleme Diriqo löst',
      problemsIntro:
        'Es ist kein schweres Firmensystem. Diriqo bringt alltägliche Abläufe an einen Ort, damit Arbeit nicht aus Telefon, Chat und Tabellen zusammengesetzt werden muss.',
      problems: [
        'Chaos in WhatsApp',
        'unübersichtliche Excel-Tabellen',
        'verlorene Auftragsfotos',
        'unklare Anwesenheit der Mitarbeiter',
        'fehlender Kostenüberblick',
        'schlechte Kommunikation im Team',
        'verlorene Angebote',
        'Unordnung in Aufträgen',
        'unklarer Arbeitsstatus',
        'fehlende Auftragshistorie',
        'Mitarbeiterplanung ohne Überblick',
        'Arbeitszeiten außerhalb von Aufträgen',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'Sieh dir den Grundablauf an.', text: 'Der Demo-Modus ist in Vorbereitung. Bis dahin kannst du ein Testkonto erstellen und Diriqo ausprobieren.', samplesTitle: 'Vorschau', dashboardTitle: 'Dashboard des Inhabers', dashboardText: 'Heutige Aufträge, Menschen, Stunden und grobes Ergebnis.', mobileTitle: 'Mobile App für Mitarbeiter', mobileText: 'Arbeit, Fotos und Zeit mobil ohne komplizierte Schulung.' },
    contactPage: { eyebrow: 'Kontakt', title: 'Sag uns, was du steuern willst.', text: 'Wir melden uns zum Test, zur Einrichtung oder zum Website & Customer Portal Add-on.', setupTitle: 'Ich möchte Hilfe beim Start', setupText: 'Beschreibe Firma, Teamgröße und Art der Arbeit. Wir schlagen einen einfachen Start vor.', support: 'Support', form: { name: 'Name', email: 'E-Mail', company: 'Firma', message: 'Nachricht', submit: 'Senden' } },
    legal: {
      eyebrow: 'Rechtliche Informationen',
      privacy: { title: 'Datenschutz', intro: 'Diese Seite beschreibt Grundsätze zur Verarbeitung von Daten auf der öffentlichen Diriqo Website.', sections: [{ title: 'Welche Daten wir verarbeiten können', text: 'Beim Kontaktformular können Name, E-Mail, Firma und Nachricht verarbeitet werden.' }, { title: 'Warum wir Daten nutzen', text: 'Wir nutzen Daten für Kommunikation, Angebote, Support und Websitebetrieb.' }, { title: 'Kontakt', text: `Fragen zu personenbezogenen Daten: ${contactEmail}.` }] },
      terms: { title: 'Geschäftsbedingungen', intro: 'Dies ist eine Arbeitsversion der Bedingungen für die öffentliche Diriqo Website.', sections: [{ title: 'Service', text: 'Diriqo ist ein SaaS-System für Aufträge, Mitarbeiter, Fotos, Stunden, Kunden und Kostenüberblick.' }, { title: 'Preise', text: 'Preise sind Richtwerte und können je nach Umfang variieren.' }, { title: 'Zusatzleistungen', text: 'Website & Customer Portal kann Website, Formulare, Kundenportal und Branding enthalten.' }, { title: 'Kontakt', text: `Fragen zu Bedingungen: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies helfen beim Betrieb der Website und können zur einfachen Analyse dienen.', sections: [{ title: 'Notwendige Cookies', text: 'Sie unterstützen Technik, Sicherheit und Laden der Seiten.' }, { title: 'Analyse', text: 'Wir nutzen Vercel Web Analytics für einfache Besuchsmessung ohne Analyse-Cookies.' }, { title: 'Kontakt', text: `Fragen zu Cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Heute in der Firma',
      dashboardTitle: 'Auftragsübersicht',
      activeJobs: '12 aktiv',
      revenue: 'Umsatz',
      hours: 'Stunden',
      profit: 'Gewinn',
      rows: [['Büroreinigung', 'Heute 08:00', '2 Personen', 'In Arbeit'], ['Klimaservice', 'Heute 13:30', '1 Person', 'Geplant'], ['Regalmontage', 'Morgen 09:00', '3 Personen', 'Bereit']],
      mobileEyebrow: 'Meine Arbeit',
      mobileTitle: 'Heutiger Auftrag',
      mobileJob: 'Showroom Reinigung',
      mobileTime: 'Prag 4, 08:00-11:00',
      photos: 'Fotos',
      time: 'Zeit',
      uploadPhoto: 'Foto hochladen',
    },
  },

  pl: {
    locale: 'pl',
    meta: {
      home: { title: 'Diriqo - wreszcie proste zarządzanie zleceniami', description: 'Prosty system do zleceń, pracowników, zdjęć, godzin, klientów i kosztów.' },
      features: { title: 'Funkcje Diriqo - zlecenia, ludzie, zdjęcia i przegląd pracy', description: 'Moduły dla zleceń, pracowników, telefonu, zdjęć, godzin, kalendarza, klientów i kosztów.' },
      howItWorks: { title: 'Jak działa Diriqo - prosty przewodnik', description: 'Od zapytania przez ofertę, zlecenie, aplikację mobilną, koszty i fakturę po widok klienta.' },
      pricing: { title: 'Cennik Diriqo - prosta cena według wielkości zespołu', description: 'Plany Starter, Growth, Business i Scale dla zespołów do 50 pracowników. Większe operacje mają indywidualne ustawienie.' },
      industries: { title: 'Dla kogo jest Diriqo - sprzątanie, serwis, montaże i obsługa obiektów', description: 'Diriqo pomaga firmom pracującym w terenie.' },
      demo: { title: 'Demo Diriqo - podgląd systemu', description: 'Podgląd flow: dashboard, zlecenie, aplikacja mobilna, zdjęcia i czas.' },
      contact: { title: 'Kontakt Diriqo', description: 'Skontaktuj się w sprawie testu, konfiguracji, strony, portalu klienta lub pytań.' },
      privacy: { title: 'Prywatność Diriqo', description: 'Podstawowe informacje o danych osobowych na stronie Diriqo.' },
      terms: { title: 'Regulamin Diriqo', description: 'Podstawowe warunki dla strony i usług Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informacje o cookies na publicznej stronie Diriqo.' },
    },
    common: { login: 'Logowanie', trial: 'Zacznij za darmo', demo: 'Uruchom demo', createAccount: 'Utwórz konto', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', popular: 'Popularne', notReady: 'Tryb demo jest w przygotowaniu.' },
    navLinks: nav(['Funkcje', 'Jak to działa', 'Cennik', 'Branże', 'Demo', 'Kontakt']),
    legalLinks: legal(['Regulamin', 'Prywatność', 'Cookies', 'GDPR']),
    footer: { description: 'Prosty system dla firm, które zarządzają zleceniami, pracownikami, zdjęciami, godzinami i klientami w terenie.', web: 'Strona', legal: 'Prawo', contact: 'Kontakt', appLogin: 'Logowanie do aplikacji', setupHelp: 'Chcę pomoc w konfiguracji', copyright: 'Wszelkie prawa zastrzeżone.' },
    home: {
      heroEyebrow: 'Prosty system dla firm terenowych',
      heroTitle: 'Wreszcie proste zarządzanie zleceniami.',
      heroSubtitle: 'Zlecenia, pracownicy, zdjęcia i przegląd firmy w jednym miejscu.',
      secondaryCta: 'Zobacz, jak to działa',
      heroNote: 'Zlecenia, ludzie i zdjęcia w jednym miejscu. Mniej chaosu. Więcej kontroli.',
      problemEyebrow: 'Problem',
      problemTitle: 'Mała firma nie potrzebuje kolejnego chaosu.',
      problemText: 'Praca często jest w czacie, papierach, telefonach i galerii zdjęć. Jeden intensywny dzień i przegląd znika.',
      solutionEyebrow: 'Rozwiązanie',
      solutionTitle: 'Diriqo daje każdemu zleceniu jasne miejsce.',
      solutionText: 'Bez ciężkiego systemu. Widzisz, co trzeba zrobić, kto to robi, gdzie są zdjęcia i ile pracy już wykonano.',
      stepsEyebrow: '3 kroki',
      stepsTitle: 'Jak to działa',
      stepsText: 'Dodaj klienta, pracownika i zlecenie. Pracownik widzi pracę w telefonie, dodaje zdjęcia, a admin ma przegląd.',
      featuresEyebrow: 'Funkcje',
      featuresTitle: 'Wszystko ważne dla pracy w terenie.',
      industriesEyebrow: 'Dla kogo',
      industriesTitle: 'Dla firm pracujących u klienta, w terenie lub w wielu miejscach.',
      pricingEyebrow: 'Cennik',
      pricingTitle: 'Prosta cena według liczby osób.',
      finalCtaTitle: 'Zacznij prosto zarządzać zleceniami.',
      finalCtaText: 'Mniej telefonów, mniej szukania zdjęć i więcej spokoju w codziennej pracy.',
    },
    problemItems: ['Zlecenia w WhatsAppie', 'Zdjęcia giną w galerii', 'Papiery i notatki wszędzie', 'Spory o godziny', 'Klient dzwoni, gdzie jesteście', 'Właściciel nie wie, kto gdzie pracuje'],
    solutionItems: ['Każde zlecenie ma swoje miejsce', 'Pracownicy widzą pracę w telefonie', 'Zdjęcia należą do zlecenia', 'Godziny zapisują się do pracy', 'Klienci i historia są razem', 'Właściciel widzi stan firmy bez obdzwaniania'],
    homeSteps: [
      { title: 'Dodajesz klienta', text: 'Zapisujesz kontakt, adres i notatki. Następnym razem nie szukasz w telefonie.' },
      { title: 'Dodajesz pracownika', text: 'Dostaje dostęp i w telefonie widzi, co ma zrobić.' },
      { title: 'Tworzysz zlecenie', text: 'Przypisujesz ludzi, termin i pracę. Zdjęcia, czas i status zostają przy zleceniu.' },
    ],
    featureCards: [
      { title: 'Zlecenia', text: 'Termin, adres, ludzie, zdjęcia, notatki i status pracy.' },
      { title: 'Pracownicy', text: 'Przegląd ludzi, przypisania i prosta ewidencja pracy.' },
      { title: 'Aplikacja mobilna', text: 'Pracownik otwiera telefon i widzi dzisiejszą pracę.' },
      { title: 'Zdjęcia przed/po', text: 'Zdjęcia są przy zleceniu, nie w galerii.' },
      { title: 'Kalendarz', text: 'Widzisz, kto gdzie jedzie dziś, jutro i w kolejnym tygodniu.' },
      { title: 'Koszty i zysk', text: 'Masz orientacyjny koszt i wynik zlecenia.' },
      { title: 'Klienci', text: 'Kontakty, historia zleceń i notatki w jednym miejscu.' },
      { title: 'Oferty i zapytania', text: 'Od zapytania przez ofertę do pracy bez przepisywania.' },
    ],
    industries: ['Firmy sprzątające', 'Firmy serwisowe', 'Montaże', 'Rzemieślnicy', 'Ekipy budowlane', 'Obsługa obiektów', 'Małe zespoły operacyjne'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ miesiąc', people: 'Do 5 osób', description: 'Dla małych zespołów i nowych firm.', features: ['zlecenia', 'klienci', 'pracownicy', 'aplikacja mobilna', 'zdjęcia', 'podstawowy przegląd'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ miesiąc', people: '6-15 osób', description: 'Dla firm, które muszą jasno prowadzić ludzi i pracę.', featured: true, features: ['wszystko ze Starter', 'kalendarz', 'ewidencja pracy', 'koszty zleceń', 'lepsze przeglądy'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ miesiąc', people: '16-30 osób', description: 'Dla stabilnych firm usługowych z większym operacyjnym ruchem.', features: ['zlecenia', 'klienci', 'pracownicy', 'aplikacja mobilna', 'zdjęcia', 'kalendarz', 'ewidencja pracy', 'koszty zleceń', 'raporty'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ miesiąc', people: '31-50 osób', description: 'Dla większych zespołów, które chcą zachować proste zarządzanie.', features: ['zlecenia', 'klienci', 'pracownicy', 'aplikacja mobilna', 'zdjęcia', 'kalendarz', 'ewidencja pracy', 'koszty zleceń', 'raporty'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'Dla firm, które chcą zarządzać pracą, zdobywać zapytania i dać klientom profesjonalny portal.', features: ['strona firmowa', 'formularze zapytań', 'połączenie z Diriqo', 'portal klienta', 'publiczne oferty', 'branding firmy'], note: 'Cena jest orientacyjna i może zależeć od zakresu strony i portalu.' },
    faqs: [
      { question: 'Czy Diriqo jest dla małej firmy?', answer: 'Tak. Jest tworzone głównie dla małych i średnich firm z codzienną pracą operacyjną.' },
      { question: 'Czy muszę znać skomplikowane oprogramowanie?', answer: 'Nie. Jeśli ktoś potrafi otworzyć Facebooka, poradzi sobie z Diriqo.' },
      { question: 'Czy Diriqo działa na telefonie?', answer: 'Tak. Pracownik widzi pracę, dodaje czas i zdjęcia w telefonie.' },
      { question: 'Czy mogę zacząć bez szkolenia?', answer: 'Tak. Podstawa to klient, pracownik, zlecenie i przypisanie.' },
      { question: 'Czy można dodać portal klienta?', answer: 'Tak. Strona i portal są dodatkiem do lepszej komunikacji.' },
      { question: 'Czy system pasuje do firmy sprzątającej?', answer: 'Tak. Dla zdjęć przed/po, kontroli, obecności i wielu zleceń dziennie.' },
      { question: 'Czy działa dla serwisu lub montażu?', answer: 'Tak. Obsługuje terminy, ludzi w terenie, historię, zdjęcia i status.' },
    ],
    featuresPage: { eyebrow: 'Funkcje', title: 'Zlecenia, ludzie, zdjęcia i przegląd pracy.', text: 'Diriqo nie udaje ciężkiego ERP. Każdy moduł rozwiązuje codzienny problem.', solves: 'Co rozwiązuje', helps: 'Dlaczego pomaga', example: 'Przykład' },
    featureModules: [
      { title: 'Zlecenia', solves: 'Każda praca ma własną kartę zamiast szukania w czacie.', helps: 'Właściciel i pracownicy widzą termin, adres, status i notatki.', example: 'Technik otwiera zlecenie, widzi adres i po pracy dodaje zdjęcia.' },
      { title: 'Pracownicy', solves: 'Mniej ręcznego dzwonienia i wysyłania informacji.', helps: 'Wiesz, kto gdzie pracuje i co jest gotowe.', example: 'Rano przypisujesz sprzątanie dwóm osobom i od razu widzą je w telefonie.' },
      { title: 'Aplikacja mobilna', solves: 'Pracownik nie potrzebuje biura ani laptopa.', helps: 'Telefon wystarczy do pracy, zdjęć i czasu.', example: 'Monter dodaje zdjęcie przed rozpoczęciem i po zakończeniu.' },
      { title: 'Zdjęcia ze zleceń', solves: 'Zdjęcia nie giną w prywatnych galeriach i czatach.', helps: 'Dowód pracy jest przy właściwym kliencie i zleceniu.', example: 'Klient chce dowód sprzątania. Otwierasz zlecenie i masz zdjęcia.' },
      { title: 'Obecność i godziny', solves: 'Mniej sporów o przepracowany czas.', helps: 'Czas jest powiązany ze zleceniem, nie z kartką.', example: 'Pracownik dodaje czas, a admin go sprawdza.' },
      { title: 'Kalendarz', solves: 'Zlecenia nie są rozrzucone po kalendarzu, czacie i pamięci.', helps: 'Widzisz dziś, jutro i obciążenie zespołu.', example: 'Podczas rozmowy z klientem od razu widzisz wolny termin.' },
      { title: 'Klienci', solves: 'Kontakty i historia nie są tylko w telefonie właściciela.', helps: 'Każdy klient ma zlecenia, adresy i notatki razem.', example: 'Powtarzalna praca powstaje szybciej, bo dane już są.' },
      { title: 'Koszty i zysk', solves: 'Właściciel nie wie, czy zlecenie się opłaciło.', helps: 'Widzisz koszty, pracę i wynik bez skomplikowanej tabeli.', example: 'Po zakończeniu sprawdzasz cenę, godziny i materiał.' },
      { title: 'Oferty, zapytania i portal', solves: 'Zapytania i oferty nie giną w e-mailu.', helps: 'Zapytanie klienta staje się kolejnym krokiem.', example: 'Zapytanie ze strony staje się klientem i ofertą.' },
    ],
    howPage: { eyebrow: 'Jak to działa', title: 'Od zapytania do faktury w jednym flow.', text: 'Zapytanie, oferta, zlecenie, aplikacja mobilna, koszty, faktura i widok klienta są połączone.', cards: [{ title: 'Telefon jest częścią pracy', text: 'Pracownik widzi zlecenie, potwierdza wynik i dodaje zdjęcia w terenie.' }, { title: 'Ekonomia jest przy zleceniu', text: 'Czas, koszty i szacowany zysk zostają przy pracy.' }, { title: 'Portal jest opcjonalny', text: 'Pakiet webowy dodaje zapytania z webu i widok klienta.' }] },
    howItWorksSteps: ['Zapytanie trafia do Diriqo', 'Wysyłasz inteligentną ofertę', 'Zaakceptowana oferta staje się zleceniem', 'Pracownik widzi zlecenie w telefonie', 'Potwierdza czas i zdjęcia', 'Widzisz koszty i zysk', 'Wysyłasz fakturę', 'Klient ma własny przegląd'],
    industriesPage: { eyebrow: 'Branże', title: 'Diriqo pasuje do każdego, kto realizuje zlecenia.', text: 'Nie jest przypisane do jednej branży. Pasuje wszędzie tam, gdzie praca jest planowana, wykonywana u klienta lub w terenie i potrzebuje zdjęć, czasu, ludzi, kosztów oraz przeglądu.' },
    industryDetails: [
      { title: 'Firmy sprzątające', text: 'Wiele zleceń dziennie, zdjęcia przed/po i klient, który chce dowód.', points: ['zdjęcia przed/po', 'kontrola pracy', 'obecność', 'wiele zleceń', 'dowód dla klienta'] },
      { title: 'Firmy serwisowe', text: 'Technicy w terenie potrzebują terminów, adresów i historii.', points: ['technicy', 'terminy', 'klienci', 'historia prac'] },
      { title: 'Firmy montażowe', text: 'Planowanie ludzi, status zlecenia i dokumentacja bez chaosu w czacie.', points: ['planowanie', 'materiał i koszty', 'status', 'zdjęcia'] },
      { title: 'Rzemieślnicy', text: 'Mniejsze zlecenia, wyjazdy do klientów, zdjęcia pracy i jasny status wykonania.', points: ['wyjazdy do klientów', 'mniejsze zlecenia', 'zdjęcia pracy', 'czas i koszty'] },
      { title: 'Budowa i wykończenia', text: 'Prace trwają kilka dni, z wieloma ludźmi i zdjęciami odbioru.', points: ['wiele dni', 'wiele osób', 'postęp', 'zdjęcia odbioru'] },
      { title: 'Obsługa obiektów', text: 'Prace cykliczne, zgłoszenia klientów i kontrola wykonania.', points: ['prace cykliczne', 'zgłoszenia', 'kontrola'] },
    ],
    industriesSeo: {
      title: 'Dla jakich firm Diriqo jest odpowiednie',
      intro:
        'Diriqo jest dla firm i zespołów, które nie pracują cały dzień przy jednym biurku. Pomaga planować zlecenia, wysyłać ludzi w teren, zapisywać zdjęcia, czas, koszty i status pracy.',
      groups: [
        {
          title: 'Sprzątanie i facility',
          intro: 'Pasuje do zespołów sprzątających i facility, które muszą pokazać efekt pracy, planować prace cykliczne i trzymać zdjęcia przy właściwym zleceniu.',
          professions: [
            'firmy sprzątające',
            'sprzątanie generalne',
            'sprzątanie po budowie',
            'mycie okien',
            'czyszczenie podłóg',
            'czyszczenie przemysłowe',
            'czyszczenie specjalistyczne',
            'utrzymanie obiektów',
            'facility management',
            'zarządzanie budynkami',
            'techniczne utrzymanie obiektów',
            'prace wysokościowe',
            'dezynfekcja',
            'deratyzacja',
          ],
        },
        {
          title: 'Rzemieślnicy',
          intro: 'Jako oprogramowanie dla rzemieślników Diriqo porządkuje wyjazdy, zlecenia, zdjęcia, materiały, czas i komunikację z klientem.',
          professions: [
            'malarze',
            'posadzkarze',
            'elektrycy',
            'hydraulicy',
            'instalatorzy ogrzewania',
            'stolarze',
            'ślusarze',
            'glazurnicy',
            'monterzy płyt g-k',
            'blacharze',
            'dekarze',
            'murarze',
            'elewatorzy',
            'złote rączki',
            'ogrodnicy',
            'kominiarze',
            'technicy serwisowi',
          ],
        },
        {
          title: 'Budowa i montaże',
          intro: 'Dla ekip budowlanych i montażowych Diriqo działa jako system do zleceń, ewidencja pracy i proste planowanie pracowników.',
          professions: [
            'firmy budowlane',
            'prace wykończeniowe',
            'firmy montażowe',
            'technicy montażowi',
            'firmy instalacyjne',
            'montaż mebli',
            'montaż kuchni',
            'montaż technologii',
            'rekuperacja',
            'klimatyzacja',
            'wentylacja',
            'firmy HVAC',
            'montaż konstrukcji stalowych',
            'prace rusztowaniowe',
          ],
        },
        {
          title: 'Serwis',
          intro: 'Jako system dla firm serwisowych i aplikacja dla techników Diriqo pomaga z terminami, historią pracy, zdjęciami zleceń i statusem każdego wyjazdu.',
          professions: [
            'serwis klimatyzacji',
            'serwis kotłów',
            'serwis pomp ciepła',
            'serwis urządzeń elektrycznych',
            'serwis maszyn',
            'technicy przeglądów',
            'kontrole techniczne',
            'utrzymanie urządzeń',
          ],
        },
        {
          title: 'Inne zespoły operacyjne',
          intro: 'Diriqo wykorzystają też firmy, które planują ludzi, obsługują klientów, zadania, zdjęcia, czas i koszty poza biurem.',
          professions: [
            'warsztaty samochodowe',
            'detailing',
            'serwisy opon',
            'firmy przeprowadzkowe',
            'firmy dostawcze',
            'catering',
            'piekarnie',
            'produkcja',
            'magazyny',
            'usługi ochrony',
            'ochrona obiektów',
          ],
        },
      ],
      seoText:
        'Diriqo jest odpowiednie dla firm, które planują zlecenia, zarządzają pracownikami w terenie, potrzebują ewidencji obecności, fotodokumentacji zleceń, kosztów, komunikacji z klientami i statusu pracy. Małe firmy, jednoosobowe działalności i większe zespoły użyją go jako systemu do zleceń, aplikacji dla pracowników terenowych, oprogramowania dla firm sprzątających, systemu dla firm serwisowych, oprogramowania dla rzemieślników i prostego narzędzia do zarządzania pracą.',
      problemsTitle: 'Jakie problemy rozwiązuje Diriqo',
      problemsIntro:
        'To nie jest ciężki system firmowy. Diriqo zbiera codzienne sprawy operacyjne w jednym miejscu, żeby pracy nie składać z telefonu, czatu i tabel.',
      problems: [
        'chaos w WhatsAppie',
        'nieczytelne tabele Excel',
        'zgubione zdjęcia zleceń',
        'niejasna obecność pracowników',
        'brak przeglądu kosztów',
        'słaba komunikacja między pracownikami',
        'zgubione oferty',
        'bałagan w zleceniach',
        'niejasny status pracy',
        'brak historii zleceń',
        'planowanie pracowników bez przeglądu',
        'obecność poza zleceniami',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'Zobacz podstawowe flow.', text: 'Tryb demo jest w przygotowaniu. Na razie możesz utworzyć konto testowe i przejść przez zlecenia, ludzi, zdjęcia i czas.', samplesTitle: 'Podglądy', dashboardTitle: 'Dashboard właściciela', dashboardText: 'Dzisiejsze zlecenia, ludzie, godziny i orientacyjny wynik.', mobileTitle: 'Telefon pracownika', mobileText: 'Praca, zdjęcia i czas bez skomplikowanego szkolenia.' },
    contactPage: { eyebrow: 'Kontakt', title: 'Napisz, czym chcesz zarządzać.', text: 'Odezwiemy się w sprawie testu Diriqo, konfiguracji firmy lub dodatku Website & Customer Portal.', setupTitle: 'Chcę pomoc w konfiguracji', setupText: 'Opisz firmę, liczbę osób i typ pracy. Zaproponujemy prosty start.', support: 'Wsparcie', form: { name: 'Imię', email: 'E-mail', company: 'Firma', message: 'Wiadomość', submit: 'Wyślij' } },
    legal: {
      eyebrow: 'Informacje prawne',
      privacy: { title: 'Prywatność', intro: 'Ta strona opisuje podstawowe zasady pracy z danymi na publicznej stronie Diriqo.', sections: [{ title: 'Jakie dane możemy przetwarzać', text: 'Przy formularzu kontaktowym możemy przetwarzać imię, e-mail, firmę i wiadomość.' }, { title: 'Dlaczego używamy danych', text: 'Dane służą do komunikacji, oferty, wsparcia i działania strony.' }, { title: 'Kontakt', text: `Pytania o dane osobowe: ${contactEmail}.` }] },
      terms: { title: 'Regulamin', intro: 'To podstawowa wersja robocza warunków dla publicznej strony Diriqo.', sections: [{ title: 'Usługa', text: 'Diriqo to system SaaS do zleceń, pracowników, zdjęć, godzin, klientów i kosztów.' }, { title: 'Ceny', text: 'Ceny są orientacyjne i mogą zależeć od zakresu oraz potrzeb.' }, { title: 'Usługi dodatkowe', text: 'Website & Customer Portal może obejmować stronę, formularze, portal klienta i branding.' }, { title: 'Kontakt', text: `Pytania o warunki: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies pomagają stronie działać i mogą służyć do podstawowej analityki.', sections: [{ title: 'Niezbędne cookies', text: 'Pomagają w technicznym działaniu, bezpieczeństwie i ładowaniu stron.' }, { title: 'Analityka', text: 'Używamy Vercel Web Analytics do podstawowego pomiaru ruchu bez analitycznych cookies.' }, { title: 'Kontakt', text: `Pytania o cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Dziś w firmie',
      dashboardTitle: 'Przegląd zleceń',
      activeJobs: '12 aktywnych',
      revenue: 'Przychód',
      hours: 'Godziny',
      profit: 'Zysk',
      rows: [['Sprzątanie biur', 'Dziś 08:00', '2 osoby', 'W pracy'], ['Serwis klimatyzacji', 'Dziś 13:30', '1 osoba', 'Zaplanowane'], ['Montaż regałów', 'Jutro 09:00', '3 osoby', 'Gotowe']],
      mobileEyebrow: 'Moja praca',
      mobileTitle: 'Dzisiejsze zlecenie',
      mobileJob: 'Sprzątanie showroomu',
      mobileTime: 'Praga 4, 08:00-11:00',
      photos: 'Zdjęcia',
      time: 'Czas',
      uploadPhoto: 'Dodaj zdjęcie',
    },
  },

  hu: {
    locale: 'hu',
    meta: {
      home: { title: 'Diriqo - végre egyszerű munkakezelés', description: 'Egyszerű rendszer munkákhoz, dolgozókhoz, fotókhoz, órákhoz, ügyfelekhez és költségekhez.' },
      features: { title: 'Diriqo funkciók - munkák, emberek, fotók és áttekintés', description: 'Modulok munkákhoz, dolgozókhoz, mobilhoz, fotókhoz, órákhoz, naptárhoz, ügyfelekhez és költségekhez.' },
      howItWorks: { title: 'Így működik a Diriqo - egyszerű útmutató', description: 'Érdeklődéstől ajánlaton, munkán, mobil appon, költségeken és számlán át az ügyfélnézetig.' },
      pricing: { title: 'Diriqo árak - egyszerű ár csapatméret alapján', description: 'Starter, Growth, Business és Scale csomagok 50 dolgozóig. Nagyobb működéshez egyedi beállítás készül.' },
      industries: { title: 'Kinek való a Diriqo - takarítás, szerviz, szerelés és üzemeltetés', description: 'Diriqo terepen dolgozó csapatoknak.' },
      demo: { title: 'Diriqo demo - rendszerbemutató', description: 'Alap flow: dashboard, munka, mobil app, fotók és munkaidő.' },
      contact: { title: 'Diriqo kapcsolat', description: 'Keress minket próba, beállítás, weboldal, ügyfélportál vagy kérdések miatt.' },
      privacy: { title: 'Diriqo adatvédelem', description: 'Alap információk a személyes adatok kezeléséről.' },
      terms: { title: 'Diriqo feltételek', description: 'Alap feltételek a Diriqo weboldalhoz és szolgáltatásokhoz.' },
      cookies: { title: 'Diriqo cookies', description: 'Információk a cookies használatáról.' },
    },
    common: { login: 'Belépés', trial: 'Ingyenes próba', demo: 'Demo indítása', createAccount: 'Fiók létrehozása', openMenu: 'Menü megnyitása', closeMenu: 'Menü bezárása', popular: 'Népszerű', notReady: 'A demo mód készül.' },
    navLinks: nav(['Funkciók', 'Hogyan működik', 'Árak', 'Ágazatok', 'Demo', 'Kapcsolat']),
    legalLinks: legal(['Feltételek', 'Adatvédelem', 'Cookies', 'GDPR']),
    footer: { description: 'Egyszerű rendszer cégeknek, amelyek terepen kezelnek munkákat, dolgozókat, fotókat, órákat és ügyfeleket.', web: 'Web', legal: 'Jogi', contact: 'Kapcsolat', appLogin: 'Belépés az appba', setupHelp: 'Segítséget kérek a beállításhoz', copyright: 'Minden jog fenntartva.' },
    home: {
      heroEyebrow: 'Egyszerű rendszer terepi csapatoknak',
      heroTitle: 'Végre egyszerű munkakezelés.',
      heroSubtitle: 'Munkák, dolgozók, fotók és céges áttekintés egy helyen.',
      secondaryCta: 'Nézd meg, hogyan működik',
      heroNote: 'Munkák, emberek és fotók egy helyen. Kevesebb káosz. Több átláthatóság.',
      problemEyebrow: 'Probléma',
      problemTitle: 'Egy kis cégnek nincs szüksége több káoszra.',
      problemText: 'A munka gyakran chatben, papíron, telefonban és galériában él. Egy zsúfolt nap elég, és eltűnik az áttekintés.',
      solutionEyebrow: 'Megoldás',
      solutionTitle: 'A Diriqo minden munkának saját helyet ad.',
      solutionText: 'Nem bonyolult. Csak látod, mit kell elvégezni, ki csinálja, hol vannak a fotók és mennyi készült el.',
      stepsEyebrow: '3 lépés',
      stepsTitle: 'Hogyan működik',
      stepsText: 'Hozzáadsz ügyfelet, dolgozót és munkát. A dolgozó mobilon látja, fotókat tölt fel, az admin pedig átlátja.',
      featuresEyebrow: 'Funkciók',
      featuresTitle: 'Minden fontos dolog a terepi munkához.',
      industriesEyebrow: 'Kinek való',
      industriesTitle: 'Cégeknek, amelyek ügyfeleknél, terepen vagy több helyen dolgoznak.',
      pricingEyebrow: 'Árak',
      pricingTitle: 'Egyszerű ár a létszám alapján.',
      finalCtaTitle: 'Kezdd egyszerűen kezelni a munkákat.',
      finalCtaText: 'Kevesebb telefonálás, kevesebb fotókeresés és nyugodtabb napi működés.',
    },
    problemItems: ['Munkák WhatsAppban', 'Fotók elvesznek a galériában', 'Papírok és jegyzetek mindenhol', 'Viták a munkaórákról', 'Ügyfél hív, hol vagytok', 'A tulajdonos nem tudja, ki hol dolgozik'],
    solutionItems: ['Minden munkának saját helye van', 'Dolgozók mobilon látják a munkát', 'Fotók a megfelelő munkához tartoznak', 'Órák a munkához mentődnek', 'Ügyfelek és előzmények együtt vannak', 'A tulajdonos hívogatás nélkül látja az állapotot'],
    homeSteps: [
      { title: 'Ügyfél hozzáadása', text: 'Elmented a kontaktot, címet és jegyzeteket. Legközelebb nem keresgélsz telefonban.' },
      { title: 'Dolgozó hozzáadása', text: 'Hozzáférést kap, és mobilon látja, mit kell csinálni.' },
      { title: 'Munka létrehozása', text: 'Hozzárendeled az embereket, időpontot és feladatot. Fotók, idő és státusz a munkánál marad.' },
    ],
    featureCards: [
      { title: 'Munkák', text: 'Időpont, cím, emberek, fotók, jegyzetek és státusz.' },
      { title: 'Dolgozók', text: 'Emberek, hozzárendelések és egyszerű teljesítményáttekintés.' },
      { title: 'Mobil app', text: 'A dolgozó megnyitja a telefont és látja a mai munkát.' },
      { title: 'Előtte/utána fotók', text: 'A fotók a munkánál vannak, nem a galériában.' },
      { title: 'Naptár', text: 'Látod, ki hová megy ma, holnap és jövő héten.' },
      { title: 'Költség és profit', text: 'Durva kép a munka költségéről és eredményéről.' },
      { title: 'Ügyfelek', text: 'Kontaktok, munkaelőzmények és jegyzetek egy helyen.' },
      { title: 'Ajánlatok és érdeklődések', text: 'Érdeklődéstől ajánlatig és munkáig másolgatás nélkül.' },
    ],
    industries: ['Takarító cégek', 'Szerviz cégek', 'Szerelések', 'Szakemberek', 'Építő csapatok', 'Létesítményüzemeltetés', 'Kis operatív csapatok'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ hónap', people: 'Legfeljebb 5 fő', description: 'Kis csapatoknak és induló cégeknek.', features: ['munkák', 'ügyfelek', 'dolgozók', 'mobil app', 'fotók', 'alap áttekintés'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ hónap', people: '6-15 fő', description: 'Cégeknek, amelyeknek tisztán kell irányítaniuk embereket és munkát.', featured: true, features: ['minden a Starterből', 'naptár', 'munkaidő nyilvántartás', 'munkaköltségek', 'jobb áttekintések'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ hónap', people: '16-30 fő', description: 'Bejáratott szolgáltató cégeknek nagyobb működéssel.', features: ['munkák', 'ügyfelek', 'dolgozók', 'mobil app', 'fotók', 'naptár', 'munkaidő', 'költségek', 'riportok'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ hónap', people: '31-50 fő', description: 'Nagyobb csapatoknak, amelyek egyszerű működéskezelést akarnak.', features: ['munkák', 'ügyfelek', 'dolgozók', 'mobil app', 'fotók', 'naptár', 'munkaidő', 'költségek', 'riportok'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'Cégeknek, amelyek munkát kezelnek, érdeklődéseket gyűjtenek és ügyfeleknek profi portált adnak.', features: ['céges weboldal', 'érdeklődési űrlapok', 'Diriqo kapcsolat', 'ügyfélportál', 'nyilvános ajánlatok', 'céges branding'], note: 'Az ár tájékoztató jellegű, a web és portál terjedelmétől függhet.' },
    faqs: [
      { question: 'A Diriqo kis cégnek való?', answer: 'Igen. Főleg kis és közepes cégeknek készül, ahol a tulajdonos napi munkát irányít.' },
      { question: 'Kell bonyolult szoftvert ismernem?', answer: 'Nem. Aki meg tudja nyitni a Facebookot, a Diriqót is tudja használni.' },
      { question: 'Működik mobilon?', answer: 'Igen. A dolgozó látja a munkát, időt ad hozzá és fotókat tölt fel.' },
      { question: 'El lehet kezdeni oktatás nélkül?', answer: 'Igen. Az alap: ügyfél, dolgozó, munka és hozzárendelés.' },
      { question: 'Lehet ügyfélportált hozzáadni?', answer: 'Igen. A web és portál add-on jobb ügyfélkommunikációhoz.' },
      { question: 'Takarító cég használhatja?', answer: 'Igen. Előtte/utána fotókhoz, ellenőrzéshez, jelenléthez és sok napi munkához.' },
      { question: 'Szerviz vagy szerelő cégnek is jó?', answer: 'Igen. Időpontok, terepi emberek, előzmények, fotók és státusz.' },
    ],
    featuresPage: { eyebrow: 'Funkciók', title: 'Munkák, emberek, fotók és munkakép.', text: 'A Diriqo nem nehéz ERP nyelven beszél. Minden modul napi problémát old meg.', solves: 'Mit old meg', helps: 'Miért segít', example: 'Példa' },
    featureModules: [
      { title: 'Munkák', solves: 'Minden munkának saját kártyája van chat-keresés helyett.', helps: 'Tulajdonos és dolgozó látja az időt, címet, státuszt és jegyzetet.', example: 'A technikus megnyitja a munkát, látja a címet és utána fotót ad hozzá.' },
      { title: 'Dolgozók', solves: 'Kevesebb kézi telefonálás és üzengetés.', helps: 'Tudod, ki hol dolgozik és mi készült el.', example: 'Reggel két emberhez takarítást rendelsz, ők mobilon látják.' },
      { title: 'Mobil app', solves: 'A dolgozónak nem kell iroda vagy laptop.', helps: 'Telefon elég munkához, fotóhoz és időhöz.', example: 'A szerelő fotót tölt fel kezdés előtt és befejezés után.' },
      { title: 'Munkafotók', solves: 'A fotók nem vesznek el privát galériákban.', helps: 'A bizonyíték a megfelelő ügyfélnél és munkánál van.', example: 'Az ügyfél bizonyítékot kér. Megnyitod a munkát és ott a fotó.' },
      { title: 'Jelenlét és órák', solves: 'Kevesebb vita a ledolgozott időről.', helps: 'Az idő a munkához kapcsolódik, nem papírhoz.', example: 'A dolgozó időt ad hozzá, az admin ellenőrzi.' },
      { title: 'Naptár', solves: 'A munkák nincsenek szétszórva naptárban, chatben és fejben.', helps: 'Látod a mai, holnapi és csapatkapacitást.', example: 'Ügyfélhívás közben azonnal látod a szabad időt.' },
      { title: 'Ügyfelek', solves: 'Kontaktok és előzmények nem csak a tulaj telefonjában vannak.', helps: 'Minden ügyfélnél együtt vannak munkák, címek és jegyzetek.', example: 'Ismétlődő munka gyorsabban létrejön.' },
      { title: 'Költség és profit', solves: 'A tulajdonos nem tudja, megérte-e a munka.', helps: 'Látod a durva költséget és eredményt táblázat nélkül.', example: 'Befejezés után ellenőrzöd az árat, órákat és anyagot.' },
      { title: 'Ajánlatok, érdeklődések és portál', solves: 'Az érdeklődések és ajánlatok nem vesznek el e-mailben.', helps: 'Az ügyfélkérésből következő lépés lesz.', example: 'Webes érdeklődésből ügyfél és ajánlat készül.' },
    ],
    howPage: { eyebrow: 'Hogyan működik', title: 'Érdeklődéstől számláig egy folyamatban.', text: 'Érdeklődés, ajánlat, munka, mobil app, költségek, számla és ügyfélnézet összekapcsolva.', cards: [{ title: 'A mobil a működés része', text: 'A dolgozó látja a munkát, visszaigazolja az eredményt és fotókat tölt fel terepen.' }, { title: 'A pénzügy a munkánál marad', text: 'Idő, költség és becsült profit a munkához kapcsolódik.' }, { title: 'A portál opcionális', text: 'A webes csomag webes érdeklődéseket és ügyfélnézetet ad.' }] },
    howItWorksSteps: ['Érdeklődés érkezik a Diriqóba', 'Okos ajánlatot küldesz', 'Elfogadott ajánlatból munka lesz', 'Dolgozó mobilon látja', 'Időt és fotót rögzít', 'Látod a költséget és profitot', 'Számlát küldesz', 'Az ügyfél saját áttekintést kap'],
    industriesPage: { eyebrow: 'Ágazatok', title: 'A Diriqo mindenkinek jó, aki munkákat kezel.', text: 'Nem egyetlen ágazathoz kötött. Ott működik jól, ahol a munkát tervezni kell, ügyfélnél vagy terepen végzik, és fotókra, időre, emberekre, költségekre és áttekintésre van szükség.' },
    industryDetails: [
      { title: 'Takarító cégek', text: 'Sok napi munka, előtte/utána fotók és ügyfél, aki bizonyítékot kér.', points: ['előtte/utána fotók', 'ellenőrzés', 'jelenlét', 'sok napi munka', 'bizonyíték'] },
      { title: 'Szerviz cégek', text: 'Terepi technikusoknak egyértelmű időpont, cím és előzmény kell.', points: ['technikusok', 'időpontok', 'ügyfelek', 'előzmények'] },
      { title: 'Szerelő cégek', text: 'Embertervezés, munkaállapot és fotódokumentáció chat-káosz nélkül.', points: ['tervezés', 'anyag és költség', 'állapot', 'fotók'] },
      { title: 'Szakemberek', text: 'Kisebb munkák, ügyfélkiszállások, munkafotók és tiszta kép arról, mi készült el.', points: ['ügyfélkiszállások', 'kisebb munkák', 'munkafotók', 'idő és költség'] },
      { title: 'Építés és befejező munkák', text: 'Több napos munkák, több ember és átadási fotók.', points: ['több nap', 'több ember', 'haladás', 'átadási fotók'] },
      { title: 'Létesítményüzemeltetés', text: 'Ismétlődő munkák, ügyfélkérések és teljesítés ellenőrzése.', points: ['ismétlődő munka', 'ügyfélkérések', 'ellenőrzés'] },
    ],
    industriesSeo: {
      title: 'Milyen cégeknek való a Diriqo',
      intro:
        'A Diriqo azoknak a cégeknek és csapatoknak való, amelyek nem egy asztalnál dolgoznak egész nap. Segít munkákat tervezni, embereket terepre küldeni, fotókat, időt, költséget és munkastátuszt rögzíteni.',
      groups: [
        {
          title: 'Takarítás és facility',
          intro: 'Takarító és facility csapatoknak, ahol fontos az elvégzett munka bizonyítása, az ismétlődő munka tervezése és a fotók tárolása a megfelelő munkánál.',
          professions: [
            'takarító cégek',
            'nagytakarítás',
            'építkezés utáni takarítás',
            'ablakmosás',
            'padlótisztítás',
            'ipari tisztítás',
            'speciális tisztítás',
            'objektumkarbantartás',
            'facility management',
            'épületkezelés',
            'műszaki objektumkezelés',
            'magasban végzett munka',
            'fertőtlenítés',
            'kártevőirtás',
          ],
        },
        {
          title: 'Szakemberek',
          intro: 'Szakembereknek szánt szoftverként a Diriqo egyben tartja a kiszállásokat, munkákat, fotókat, anyagokat, időt és ügyfélkommunikációt.',
          professions: [
            'festők',
            'burkolók',
            'villanyszerelők',
            'vízvezeték-szerelők',
            'fűtésszerelők',
            'asztalosok',
            'lakatosok',
            'csempézők',
            'gipszkartonosok',
            'bádogosok',
            'tetőfedők',
            'kőművesek',
            'homlokzatosok',
            'ezermesterek',
            'kertészek',
            'kéményseprők',
            'szerviztechnikusok',
          ],
        },
        {
          title: 'Építés és szerelés',
          intro: 'Építő és szerelő csapatoknak a Diriqo munkakezelő szoftverként, munkanyilvántartásként és egyszerű dolgozótervezőként működik.',
          professions: [
            'építőipari cégek',
            'befejező munkák',
            'szerelő cégek',
            'szerelési technikusok',
            'telepítő cégek',
            'bútorszerelés',
            'konyhaszerelés',
            'technológiai telepítés',
            'hővisszanyerő rendszerek',
            'klíma',
            'légtechnika',
            'HVAC cégek',
            'acélszerkezet-szerelés',
            'állványozás',
          ],
        },
        {
          title: 'Szerviz',
          intro: 'Szervizcégek rendszereként és technikusi appként a Diriqo segít időpontokkal, munkatörténettel, munkafotókkal és minden kiszállás állapotával.',
          professions: [
            'klímaszerviz',
            'kazánszerviz',
            'hőszivattyú szerviz',
            'elektromos berendezések szervize',
            'gépszerviz',
            'felülvizsgáló technikusok',
            'műszaki ellenőrzések',
            'berendezés-karbantartás',
          ],
        },
        {
          title: 'További operatív csapatok',
          intro: 'A Diriqo más olyan csapatoknak is hasznos, amelyek embereket, ügyfeleket, feladatokat, fotókat, időt és költségeket kezelnek irodán kívül.',
          professions: [
            'autószervizek',
            'autókozmetika',
            'gumiszervizek',
            'költöztető cégek',
            'kiszállító cégek',
            'catering',
            'pékségek',
            'gyártás',
            'raktári üzemek',
            'biztonsági szolgáltatások',
            'objektumőrzés',
          ],
        },
      ],
      seoText:
        'A Diriqo olyan cégeknek alkalmas, amelyek munkákat terveznek, terepen dolgozó embereket irányítanak, jelenlétet, munkafotókat, költségeket, ügyfélkommunikációt és munkastátuszt rögzítenek. Kis cégek, egyéni vállalkozók és nagyobb csapatok is használhatják munkakezelő rendszerként, terepi dolgozói appként, takarító cégek szoftvereként, szervizcégek rendszereként, szakemberek szoftvereként és egyszerű operatív irányító eszközként.',
      problemsTitle: 'Milyen problémákat old meg a Diriqo',
      problemsIntro:
        'Ez nem nehéz vállalati rendszer. A Diriqo egy helyre teszi a napi működési dolgokat, hogy a munkát ne telefonból, chatből és táblázatokból kelljen összerakni.',
      problems: [
        'káosz WhatsAppban',
        'átláthatatlan Excel táblák',
        'elveszett munkafotók',
        'nem egyértelmű dolgozói jelenlét',
        'hiányzó költségáttekintés',
        'rossz kommunikáció a dolgozók között',
        'elveszett ajánlatok',
        'rendetlen munkanyilvántartás',
        'nem egyértelmű munkastátusz',
        'hiányzó munkatörténet',
        'dolgozótervezés áttekintés nélkül',
        'jelenlét munkákon kívül',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'Nézd meg az alap flow-t.', text: 'A demo mód készül. Addig létrehozhatsz tesztfiókot, és megnézheted a munkákat, embereket, fotókat és időt.', samplesTitle: 'Előnézetek', dashboardTitle: 'Tulajdonosi dashboard', dashboardText: 'Mai munkák, emberek, órák és durva eredmény.', mobileTitle: 'Dolgozói mobil', mobileText: 'Munka mobilon, fotók és idő bonyolult oktatás nélkül.' },
    contactPage: { eyebrow: 'Kapcsolat', title: 'Írd meg, mit szeretnél kezelni.', text: 'Visszajelzünk a Diriqo próbával, cégbeállítással vagy Website & Customer Portal add-onnal kapcsolatban.', setupTitle: 'Segítséget kérek a beállításhoz', setupText: 'Írd le a céget, létszámot és munkatípust. Javaslunk egyszerű indulást.', support: 'Támogatás', form: { name: 'Név', email: 'E-mail', company: 'Cég', message: 'Üzenet', submit: 'Küldés' } },
    legal: {
      eyebrow: 'Jogi információk',
      privacy: { title: 'Adatvédelem', intro: 'Ez az oldal a Diriqo nyilvános weboldalán történő adatkezelés alapelveit írja le.', sections: [{ title: 'Milyen adatokat kezelhetünk', text: 'Kapcsolati űrlap esetén név, e-mail, cégnév és üzenet kezelhető.' }, { title: 'Miért használjuk az adatokat', text: 'Kommunikációhoz, ajánlatkészítéshez, támogatáshoz és weboldal működéséhez.' }, { title: 'Kapcsolat', text: `Személyes adatokkal kapcsolatos kérdések: ${contactEmail}.` }] },
      terms: { title: 'Feltételek', intro: 'Ez a Diriqo nyilvános weboldal feltételeinek alap munkaverziója.', sections: [{ title: 'Szolgáltatás', text: 'A Diriqo SaaS rendszer munkákhoz, dolgozókhoz, fotókhoz, órákhoz, ügyfelekhez és költségekhez.' }, { title: 'Árak', text: 'Az árak tájékoztató jellegűek, és a terjedelemtől függhetnek.' }, { title: 'Kiegészítő szolgáltatások', text: 'A Website & Customer Portal weboldalt, űrlapokat, ügyfélportált és brandinget tartalmazhat.' }, { title: 'Kapcsolat', text: `Feltételekkel kapcsolatos kérdések: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'A cookies segítik a weboldal működését és alap analitikát szolgálhatnak.', sections: [{ title: 'Szükséges cookies', text: 'Technikai működéshez, biztonsághoz és oldalletöltéshez kellenek.' }, { title: 'Analitika', text: 'A Vercel Web Analytics szolgáltatást használjuk alap forgalommérésre analitikai cookies nélkül.' }, { title: 'Kapcsolat', text: `Cookies kérdések: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Ma a cégben',
      dashboardTitle: 'Munkaáttekintés',
      activeJobs: '12 aktív',
      revenue: 'Bevétel',
      hours: 'Órák',
      profit: 'Profit',
      rows: [['Irodatakarítás', 'Ma 08:00', '2 fő', 'Folyamatban'], ['Klímaszerviz', 'Ma 13:30', '1 fő', 'Tervezve'], ['Polcszerelés', 'Holnap 09:00', '3 fő', 'Kész']],
      mobileEyebrow: 'Munkáim',
      mobileTitle: 'Mai munka',
      mobileJob: 'Showroom takarítás',
      mobileTime: 'Prága 4, 08:00-11:00',
      photos: 'Fotók',
      time: 'Idő',
      uploadPhoto: 'Fotó feltöltése',
    },
  },

  es: {
    locale: 'es',
    meta: {
      home: { title: 'Diriqo - gestión de trabajos por fin sencilla', description: 'Un sistema simple para trabajos, empleados, fotos, horas, clientes y costes.' },
      features: { title: 'Funciones de Diriqo - trabajos, personas, fotos y control', description: 'Módulos para trabajos, empleados, móvil, fotos, horas, calendario, clientes y costes.' },
      howItWorks: { title: 'Cómo funciona Diriqo - guía sencilla', description: 'De solicitud a presupuesto, trabajo, app móvil, costes, factura y vista del cliente.' },
      pricing: { title: 'Precios de Diriqo - precio simple por tamaño de equipo', description: 'Planes Starter, Growth, Business y Scale para equipos de hasta 50 trabajadores. Operaciones mayores usan configuración a medida.' },
      industries: { title: 'Para quién es Diriqo - limpieza, servicio, montajes y mantenimiento', description: 'Diriqo ayuda a equipos que trabajan en campo.' },
      demo: { title: 'Demo de Diriqo - vista del sistema', description: 'Vista del flujo básico: dashboard, trabajo, app móvil, fotos y tiempo.' },
      contact: { title: 'Contacto Diriqo', description: 'Contacta con Diriqo para prueba, configuración, web, portal de clientes o preguntas.' },
      privacy: { title: 'Privacidad Diriqo', description: 'Información básica sobre datos personales en la web de Diriqo.' },
      terms: { title: 'Condiciones Diriqo', description: 'Condiciones básicas para la web y servicios Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Información sobre cookies en la web pública de Diriqo.' },
    },
    common: { login: 'Iniciar sesión', trial: 'Probar gratis', demo: 'Abrir demo', createAccount: 'Crear cuenta', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', popular: 'Popular', notReady: 'El modo demo está en preparación.' },
    navLinks: nav(['Funciones', 'Cómo funciona', 'Precios', 'Sectores', 'Demo', 'Contacto']),
    legalLinks: legal(['Condiciones', 'Privacidad', 'Cookies', 'GDPR']),
    footer: { description: 'Un sistema simple para empresas que gestionan trabajos, empleados, fotos, horas y clientes en campo.', web: 'Web', legal: 'Legal', contact: 'Contacto', appLogin: 'Entrar en la app', setupHelp: 'Quiero ayuda con la configuración', copyright: 'Todos los derechos reservados.' },
    home: {
      heroEyebrow: 'Software simple para equipos de campo',
      heroTitle: 'Gestión de trabajos por fin sencilla.',
      heroSubtitle: 'Trabajos, empleados, fotos y visión de empresa en un solo lugar.',
      secondaryCta: 'Ver cómo funciona',
      heroNote: 'Trabajos, personas y fotos en un solo lugar. Menos caos. Más control.',
      problemEyebrow: 'Problema',
      problemTitle: 'Una pequeña empresa no necesita más caos.',
      problemText: 'El trabajo suele estar en chats, papeles, llamadas y galerías. Un día ocupado basta para perder el control.',
      solutionEyebrow: 'Solución',
      solutionTitle: 'Diriqo da un lugar claro a cada trabajo.',
      solutionText: 'Nada pesado. Solo ves qué hay que hacer, quién lo hace, dónde están las fotos y cuánto se ha avanzado.',
      stepsEyebrow: '3 pasos',
      stepsTitle: 'Cómo funciona',
      stepsText: 'Añades cliente, empleado y trabajo. El empleado lo ve en el móvil, sube fotos y el admin tiene control.',
      featuresEyebrow: 'Funciones',
      featuresTitle: 'Todo lo importante para trabajar en campo.',
      industriesEyebrow: 'Para quién',
      industriesTitle: 'Para empresas que trabajan fuera, en clientes o en varias ubicaciones.',
      pricingEyebrow: 'Precios',
      pricingTitle: 'Precio simple por número de personas.',
      finalCtaTitle: 'Empieza a gestionar trabajos de forma simple.',
      finalCtaText: 'Menos llamadas, menos búsqueda de fotos y más calma diaria.',
    },
    problemItems: ['Trabajos en WhatsApp', 'Fotos perdidas en la galería', 'Papeles y notas por todas partes', 'Dudas sobre horas trabajadas', 'El cliente llama preguntando dónde estáis', 'El dueño no sabe quién trabaja dónde'],
    solutionItems: ['Cada trabajo tiene su lugar', 'Los empleados ven el trabajo en el móvil', 'Las fotos pertenecen al trabajo correcto', 'Las horas se guardan en el trabajo', 'Clientes e historial juntos', 'El dueño ve el estado sin llamar a todos'],
    homeSteps: [
      { title: 'Añades un cliente', text: 'Guardas contacto, dirección y notas. La próxima vez no buscas en el teléfono.' },
      { title: 'Añades un empleado', text: 'Recibe acceso y ve en el móvil qué debe hacer.' },
      { title: 'Creas un trabajo', text: 'Asignas personas, fecha y tarea. Fotos, tiempo y estado quedan en el trabajo.' },
    ],
    featureCards: [
      { title: 'Trabajos', text: 'Fecha, dirección, personas, fotos, notas y estado.' },
      { title: 'Empleados', text: 'Vista de personas, asignaciones y registros simples.' },
      { title: 'App móvil', text: 'El empleado abre el móvil y ve el trabajo de hoy.' },
      { title: 'Fotos antes/después', text: 'Las fotos quedan en el trabajo, no en la galería.' },
      { title: 'Calendario', text: 'Ves quién va dónde hoy, mañana y la próxima semana.' },
      { title: 'Costes y beneficio', text: 'Vista aproximada del coste y resultado del trabajo.' },
      { title: 'Clientes', text: 'Contactos, historial y notas en un lugar.' },
      { title: 'Ofertas y solicitudes', text: 'De solicitud a oferta y trabajo sin copiar datos.' },
    ],
    industries: ['Empresas de limpieza', 'Empresas de servicio', 'Montajes', 'Oficios', 'Equipos de obra', 'Mantenimiento de inmuebles', 'Pequeños equipos operativos'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mes', people: 'Hasta 5 personas', description: 'Para equipos pequeños y empresas que empiezan.', features: ['trabajos', 'clientes', 'empleados', 'app móvil', 'fotos', 'vista básica'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mes', people: '6-15 personas', description: 'Para empresas que necesitan controlar personas y trabajo.', featured: true, features: ['todo Starter', 'calendario', 'registro de trabajo', 'costes de trabajos', 'mejores vistas'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ mes', people: '16-30 personas', description: 'Para empresas de servicios establecidas con más operación.', features: ['trabajos', 'clientes', 'empleados', 'app móvil', 'fotos', 'calendario', 'registros', 'costes', 'informes'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mes', people: '31-50 personas', description: 'Para equipos más grandes que quieren mantener una gestión simple.', features: ['trabajos', 'clientes', 'empleados', 'app móvil', 'fotos', 'calendario', 'registros', 'costes', 'informes'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'Para empresas que quieren gestionar trabajo, recibir solicitudes y dar a clientes un portal profesional.', features: ['web corporativa', 'formularios de solicitud', 'conexión con Diriqo', 'portal de clientes', 'ofertas públicas', 'branding'], note: 'El precio es orientativo y puede variar según el alcance.' },
    faqs: [
      { question: '¿Diriqo es para una pequeña empresa?', answer: 'Sí. Está pensado para pequeñas y medianas empresas con trabajo diario.' },
      { question: '¿Debo saber usar software complejo?', answer: 'No. Si alguien puede abrir Facebook, puede usar Diriqo.' },
      { question: '¿Diriqo funciona en móvil?', answer: 'Sí. El empleado ve el trabajo, añade tiempo y sube fotos.' },
      { question: '¿Puedo empezar sin formación?', answer: 'Sí. Cliente, empleado, trabajo y asignación son la base.' },
      { question: '¿Se puede añadir portal de clientes?', answer: 'Sí. Web y portal son un add-on para mejorar comunicación.' },
      { question: '¿Sirve para una empresa de limpieza?', answer: 'Sí. Para fotos antes/después, control, asistencia y muchos trabajos al día.' },
      { question: '¿Funciona para servicio o montaje?', answer: 'Sí. Gestiona citas, técnicos, historial, fotos y estado.' },
    ],
    featuresPage: { eyebrow: 'Funciones', title: 'Trabajos, personas, fotos y control.', text: 'Diriqo no es un ERP pesado. Cada módulo resuelve un problema diario.', solves: 'Qué resuelve', helps: 'Por qué ayuda', example: 'Ejemplo' },
    featureModules: [
      { title: 'Trabajos', solves: 'Cada trabajo tiene su ficha en lugar de buscar en chats.', helps: 'Dueño y empleados ven fecha, dirección, estado y notas.', example: 'Un técnico abre el trabajo, ve la dirección y añade fotos al terminar.' },
      { title: 'Empleados', solves: 'Menos llamadas y mensajes manuales.', helps: 'Sabes quién está en qué trabajo y qué está hecho.', example: 'Por la mañana asignas limpieza a dos personas y lo ven en móvil.' },
      { title: 'App móvil', solves: 'El empleado no necesita oficina ni portátil.', helps: 'El teléfono basta para trabajo, fotos y tiempo.', example: 'Un montador sube foto antes y después.' },
      { title: 'Fotos de trabajos', solves: 'Las fotos no se pierden en galerías y chats.', helps: 'La prueba queda con el cliente y trabajo correctos.', example: 'El cliente pide prueba de limpieza. Abres el trabajo y tienes fotos.' },
      { title: 'Asistencia y horas', solves: 'Menos dudas sobre quién trabajó cuánto.', helps: 'El tiempo está vinculado al trabajo.', example: 'El empleado añade tiempo y el admin lo revisa.' },
      { title: 'Calendario', solves: 'Los trabajos no están repartidos entre calendario, chat y memoria.', helps: 'Ves hoy, mañana y la capacidad del equipo.', example: 'En una llamada ves cuándo está libre el equipo.' },
      { title: 'Clientes', solves: 'Contactos e historial no están solo en el móvil del dueño.', helps: 'Cada cliente tiene trabajos, direcciones y notas juntos.', example: 'Un trabajo repetido se crea más rápido.' },
      { title: 'Costes y beneficio', solves: 'El dueño no sabe si un trabajo salió rentable.', helps: 'Ves costes aproximados y resultado sin hoja compleja.', example: 'Al terminar revisas precio, horas y material.' },
      { title: 'Ofertas, solicitudes y portal', solves: 'Solicitudes y ofertas no se pierden en e-mail.', helps: 'Una solicitud se convierte en el siguiente paso.', example: 'Una solicitud web se convierte en cliente y oferta.' },
    ],
    howPage: { eyebrow: 'Cómo funciona', title: 'De solicitud a factura en un flujo.', text: 'Solicitud, presupuesto, trabajo, app móvil, costes, factura y vista del cliente permanecen conectados.', cards: [{ title: 'El móvil es parte del trabajo', text: 'El trabajador ve el trabajo, confirma el resultado y sube fotos en campo.' }, { title: 'La economía queda en el trabajo', text: 'Tiempo, costes y beneficio estimado quedan junto al trabajo.' }, { title: 'El portal es opcional', text: 'El paquete web añade solicitudes desde la web y vista del cliente.' }] },
    howItWorksSteps: ['La solicitud entra en Diriqo', 'Envías un presupuesto inteligente', 'El presupuesto aprobado crea el trabajo', 'El trabajador lo ve en móvil', 'Confirma tiempo y fotos', 'Ves costes y beneficio', 'Envías la factura', 'El cliente tiene su vista'],
    industriesPage: { eyebrow: 'Sectores', title: 'Diriqo sirve para cualquiera que gestione trabajos.', text: 'No está atado a un solo sector. Encaja donde el trabajo se planifica, se hace en casa del cliente o en campo y necesita fotos, tiempo, personas, costes y control.' },
    industryDetails: [
      { title: 'Empresas de limpieza', text: 'Muchos trabajos al día, fotos antes/después y cliente que quiere prueba.', points: ['fotos antes/después', 'control de trabajo', 'asistencia', 'muchos trabajos', 'prueba para cliente'] },
      { title: 'Empresas de servicio', text: 'Técnicos en campo necesitan fechas, direcciones e historial.', points: ['técnicos', 'citas', 'clientes', 'historial'] },
      { title: 'Empresas de montaje', text: 'Planificación de personas, estado y fotos sin caos de chat.', points: ['planificación', 'material y costes', 'estado', 'fotos'] },
      { title: 'Oficios', text: 'Trabajos pequeños, visitas a clientes, fotos del trabajo y una vista clara de lo terminado.', points: ['visitas a clientes', 'trabajos pequeños', 'fotos del trabajo', 'tiempo y costes'] },
      { title: 'Construcción y acabados', text: 'Trabajos de varios días, más personas y fotos de entrega.', points: ['varios días', 'varias personas', 'progreso', 'fotos de entrega'] },
      { title: 'Mantenimiento de inmuebles', text: 'Trabajos repetidos, solicitudes de clientes y control de finalización.', points: ['trabajo recurrente', 'solicitudes', 'control'] },
    ],
    industriesSeo: {
      title: 'Para qué tipos de empresas sirve Diriqo',
      intro:
        'Diriqo es para empresas y equipos que no trabajan todo el día desde una mesa. Ayuda a planificar trabajos, enviar personas al campo, guardar fotos, registrar tiempo, costes y estado del trabajo.',
      groups: [
        {
          title: 'Limpieza y facility',
          intro: 'Para equipos de limpieza y facility que necesitan demostrar el resultado, planificar trabajos recurrentes y guardar fotos en el trabajo correcto.',
          professions: [
            'empresas de limpieza',
            'limpiezas generales',
            'limpiezas post obra',
            'limpieza de ventanas',
            'limpieza de suelos',
            'limpieza industrial',
            'limpieza especializada',
            'mantenimiento de inmuebles',
            'facility management',
            'gestión de edificios',
            'gestión técnica de inmuebles',
            'trabajos en altura',
            'desinfección',
            'control de plagas',
          ],
        },
        {
          title: 'Oficios',
          intro: 'Como software para oficios, Diriqo mantiene juntas las visitas a clientes, trabajos, fotos, materiales, tiempo y comunicación.',
          professions: [
            'pintores',
            'instaladores de suelos',
            'electricistas',
            'fontaneros',
            'técnicos de calefacción',
            'carpinteros',
            'cerrajeros',
            'alicatadores',
            'instaladores de pladur',
            'chapistas',
            'techadores',
            'albañiles',
            'especialistas en fachadas',
            'manitas',
            'jardineros',
            'deshollinadores',
            'técnicos de servicio',
          ],
        },
        {
          title: 'Construcción y montajes',
          intro: 'Para equipos de construcción y montaje, Diriqo funciona como software para trabajos, registro de trabajos y planificación simple de personas.',
          professions: [
            'empresas de construcción',
            'trabajos de acabados',
            'empresas de montaje',
            'técnicos de montaje',
            'empresas instaladoras',
            'montaje de muebles',
            'montaje de cocinas',
            'montaje de tecnología',
            'recuperación de calor',
            'aire acondicionado',
            'ventilación',
            'empresas HVAC',
            'montaje de estructuras metálicas',
            'andamios',
          ],
        },
        {
          title: 'Servicio',
          intro: 'Como sistema para empresas de servicio y app para técnicos, Diriqo ayuda con citas, historial, fotos del trabajo y estado de cada visita.',
          professions: [
            'servicio de aire acondicionado',
            'servicio de calderas',
            'servicio de bombas de calor',
            'servicio de equipos eléctricos',
            'servicio de máquinas',
            'técnicos de revisión',
            'controles técnicos',
            'mantenimiento de equipos',
          ],
        },
        {
          title: 'Otros equipos operativos',
          intro: 'Diriqo también encaja en empresas que planifican personas, clientes, tareas, fotos, tiempo y costes fuera de la oficina.',
          professions: [
            'talleres mecánicos',
            'detailing',
            'servicios de neumáticos',
            'empresas de mudanzas',
            'empresas de reparto',
            'catering',
            'panaderías',
            'producción',
            'operaciones de almacén',
            'servicios de seguridad',
            'vigilancia de inmuebles',
          ],
        },
      ],
      seoText:
        'Diriqo es adecuado para empresas que planifican trabajos, gestionan trabajadores en campo, necesitan registrar asistencia, fotodocumentación de trabajos, costes, comunicación con clientes y estado del trabajo. Lo pueden usar pequeñas empresas, autónomos y equipos más grandes como sistema para trabajos, app para trabajadores en campo, software para empresas de limpieza, sistema para empresas de servicio, software para oficios y herramienta simple de gestión operativa.',
      problemsTitle: 'Qué problemas resuelve Diriqo',
      problemsIntro:
        'No es un sistema pesado de empresa. Diriqo pone las cosas operativas diarias en un lugar para que el trabajo no se reconstruya desde llamadas, chat y hojas de cálculo.',
      problems: [
        'caos en WhatsApp',
        'tablas de Excel poco claras',
        'fotos de trabajos perdidas',
        'asistencia de trabajadores poco clara',
        'falta de vista de costes',
        'mala comunicación entre trabajadores',
        'presupuestos perdidos',
        'desorden en los trabajos',
        'estado del trabajo poco claro',
        'historial de trabajos incompleto',
        'planificación de trabajadores sin vista clara',
        'asistencia fuera de los trabajos',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'Mira el flujo básico.', text: 'El modo demo está en preparación. Mientras tanto puedes crear una cuenta de prueba y ver trabajos, personas, fotos y tiempo.', samplesTitle: 'Vistas', dashboardTitle: 'Dashboard del dueño', dashboardText: 'Trabajos de hoy, personas, horas y resultado aproximado.', mobileTitle: 'Móvil del empleado', mobileText: 'Trabajo, fotos y tiempo sin formación compleja.' },
    contactPage: { eyebrow: 'Contacto', title: 'Cuéntanos qué necesitas gestionar.', text: 'Te responderemos sobre prueba, configuración o el add-on Website & Customer Portal.', setupTitle: 'Quiero ayuda con la configuración', setupText: 'Describe tu empresa, número de personas y tipo de trabajo. Te propondremos un inicio simple.', support: 'Soporte', form: { name: 'Nombre', email: 'E-mail', company: 'Empresa', message: 'Mensaje', submit: 'Enviar' } },
    legal: {
      eyebrow: 'Información legal',
      privacy: { title: 'Privacidad', intro: 'Esta página describe los principios básicos de gestión de datos en la web pública de Diriqo.', sections: [{ title: 'Qué datos podemos procesar', text: 'Al enviar el formulario podemos procesar nombre, e-mail, empresa y mensaje.' }, { title: 'Por qué usamos datos', text: 'Para comunicación, preparación de oferta, soporte y funcionamiento de la web.' }, { title: 'Contacto', text: `Preguntas sobre datos personales: ${contactEmail}.` }] },
      terms: { title: 'Condiciones', intro: 'Esta es una versión básica de trabajo de las condiciones de la web pública de Diriqo.', sections: [{ title: 'Servicio', text: 'Diriqo es un sistema SaaS para trabajos, empleados, fotos, horas, clientes y costes.' }, { title: 'Precios', text: 'Los precios son orientativos y pueden variar según alcance y necesidades.' }, { title: 'Servicios adicionales', text: 'Website & Customer Portal puede incluir web, formularios, portal y branding.' }, { title: 'Contacto', text: `Preguntas sobre condiciones: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Las cookies ayudan a que la web funcione y pueden usarse para analítica básica.', sections: [{ title: 'Cookies necesarias', text: 'Ayudan al funcionamiento técnico, seguridad y carga de páginas.' }, { title: 'Analítica', text: 'Usamos Vercel Web Analytics para medición básica de tráfico sin cookies analíticas.' }, { title: 'Contacto', text: `Preguntas sobre cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Hoy en la empresa',
      dashboardTitle: 'Vista de trabajos',
      activeJobs: '12 activos',
      revenue: 'Ingresos',
      hours: 'Horas',
      profit: 'Beneficio',
      rows: [['Limpieza de oficinas', 'Hoy 08:00', '2 personas', 'En curso'], ['Servicio de clima', 'Hoy 13:30', '1 persona', 'Planificado'], ['Montaje de estanterías', 'Mañana 09:00', '3 personas', 'Listo']],
      mobileEyebrow: 'Mi trabajo',
      mobileTitle: 'Trabajo de hoy',
      mobileJob: 'Limpieza de showroom',
      mobileTime: 'Praga 4, 08:00-11:00',
      photos: 'Fotos',
      time: 'Tiempo',
      uploadPhoto: 'Subir foto',
    },
  },

  it: {
    locale: 'it',
    meta: {
      home: { title: 'Diriqo - finalmente gestione lavori semplice', description: 'Un sistema semplice per lavori, operatori, foto, ore, clienti e costi.' },
      features: { title: 'Funzioni Diriqo - lavori, persone, foto e controllo', description: 'Moduli per lavori, operatori, mobile, foto, ore, calendario, clienti e costi.' },
      howItWorks: { title: 'Come funziona Diriqo - guida semplice', description: 'Da richiesta a preventivo, lavoro, app mobile, costi, fattura e vista cliente.' },
      pricing: { title: 'Prezzi Diriqo - prezzo semplice per dimensione team', description: 'Piani Starter, Growth, Business e Scale per team fino a 50 operatori. Operazioni più grandi usano una configurazione su misura.' },
      industries: { title: 'Per chi è Diriqo - pulizie, service, installazioni e facility', description: 'Diriqo aiuta team che lavorano sul campo.' },
      demo: { title: 'Demo Diriqo - anteprima del sistema', description: 'Anteprima del flow: dashboard, lavoro, app mobile, foto e tempo.' },
      contact: { title: 'Contatto Diriqo', description: 'Contatta Diriqo per prova, configurazione, sito, portale clienti o domande.' },
      privacy: { title: 'Privacy Diriqo', description: 'Informazioni base sul trattamento dei dati personali.' },
      terms: { title: 'Termini Diriqo', description: 'Condizioni base per sito e servizi Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informazioni sui cookies del sito pubblico Diriqo.' },
    },
    common: { login: 'Accedi', trial: 'Prova gratis', demo: 'Avvia demo', createAccount: 'Crea account', openMenu: 'Apri menu', closeMenu: 'Chiudi menu', popular: 'Popolare', notReady: 'La modalità demo è in preparazione.' },
    navLinks: nav(['Funzioni', 'Come funziona', 'Prezzi', 'Settori', 'Demo', 'Contatto']),
    legalLinks: legal(['Termini', 'Privacy', 'Cookies', 'GDPR']),
    footer: { description: 'Un sistema semplice per aziende che gestiscono lavori, operatori, foto, ore e clienti sul campo.', web: 'Web', legal: 'Legale', contact: 'Contatto', appLogin: 'Accedi all’app', setupHelp: 'Voglio aiuto con la configurazione', copyright: 'Tutti i diritti riservati.' },
    home: {
      heroEyebrow: 'Sistema semplice per team sul campo',
      heroTitle: 'Finalmente gestione lavori semplice.',
      heroSubtitle: 'Lavori, operatori, foto e panoramica aziendale in un unico posto.',
      secondaryCta: 'Vedi come funziona',
      heroNote: 'Lavori, persone e foto in un solo posto. Meno caos. Più controllo.',
      problemEyebrow: 'Problema',
      problemTitle: 'Una piccola azienda non ha bisogno di altro caos.',
      problemText: 'Il lavoro spesso vive in chat, carta, telefonate e gallerie foto. Basta una giornata piena e il controllo sparisce.',
      solutionEyebrow: 'Soluzione',
      solutionTitle: 'Diriqo dà a ogni lavoro un posto chiaro.',
      solutionText: 'Niente di pesante. Vedi cosa fare, chi lo fa, dove sono le foto e quanto lavoro è stato fatto.',
      stepsEyebrow: '3 passi',
      stepsTitle: 'Come funziona',
      stepsText: 'Aggiungi cliente, operatore e lavoro. L’operatore vede tutto sul telefono, carica foto e l’admin ha il controllo.',
      featuresEyebrow: 'Funzioni',
      featuresTitle: 'Tutto ciò che serve per il lavoro sul campo.',
      industriesEyebrow: 'Per chi',
      industriesTitle: 'Per aziende che lavorano fuori, presso clienti o in più sedi.',
      pricingEyebrow: 'Prezzi',
      pricingTitle: 'Prezzo semplice per numero di persone.',
      finalCtaTitle: 'Inizia a gestire i lavori in modo semplice.',
      finalCtaText: 'Meno chiamate, meno ricerca di foto e più calma ogni giorno.',
    },
    problemItems: ['Lavori su WhatsApp', 'Foto perse in galleria', 'Carta e note ovunque', 'Dubbi sulle ore', 'Cliente chiama chiedendo dove siete', 'Il titolare non sa chi lavora dove'],
    solutionItems: ['Ogni lavoro ha il suo posto', 'Gli operatori vedono il lavoro sul telefono', 'Le foto appartengono al lavoro giusto', 'Le ore si salvano sul lavoro', 'Clienti e storico sono insieme', 'Il titolare vede lo stato senza chiamare tutti'],
    homeSteps: [
      { title: 'Aggiungi un cliente', text: 'Salvi contatto, indirizzo e note. La prossima volta non cerchi nel telefono.' },
      { title: 'Aggiungi un operatore', text: 'Riceve accesso e vede sul telefono cosa fare.' },
      { title: 'Crei un lavoro', text: 'Assegni persone, data e attività. Foto, tempo e stato restano nel lavoro.' },
    ],
    featureCards: [
      { title: 'Lavori', text: 'Data, indirizzo, persone, foto, note e stato.' },
      { title: 'Operatori', text: 'Vista persone, assegnazioni e registri semplici.' },
      { title: 'App mobile', text: 'L’operatore apre il telefono e vede il lavoro di oggi.' },
      { title: 'Foto prima/dopo', text: 'Le foto restano nel lavoro, non in galleria.' },
      { title: 'Calendario', text: 'Vedi chi va dove oggi, domani e la prossima settimana.' },
      { title: 'Costi e profitto', text: 'Vista indicativa di costo e risultato del lavoro.' },
      { title: 'Clienti', text: 'Contatti, storico lavori e note in un posto.' },
      { title: 'Preventivi e richieste', text: 'Da richiesta a preventivo e lavoro senza copiare dati.' },
    ],
    industries: ['Imprese di pulizie', 'Aziende di servizio', 'Installazioni', 'Artigiani', 'Squadre edili', 'Facility management', 'Piccoli team operativi'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mese', people: 'Fino a 5 persone', description: 'Per piccoli team e aziende che iniziano.', features: ['lavori', 'clienti', 'operatori', 'app mobile', 'foto', 'vista base'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mese', people: '6-15 persone', description: 'Per aziende che devono gestire chiaramente persone e lavoro.', featured: true, features: ['tutto Starter', 'calendario', 'registrazione lavoro', 'costi lavori', 'viste migliori'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ mese', people: '16-30 persone', description: 'Per aziende di servizi avviate con operatività più ampia.', features: ['lavori', 'clienti', 'operatori', 'app mobile', 'foto', 'calendario', 'registri', 'costi', 'report'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mese', people: '31-50 persone', description: 'Per team più grandi che vogliono mantenere una gestione semplice.', features: ['lavori', 'clienti', 'operatori', 'app mobile', 'foto', 'calendario', 'registri', 'costi', 'report'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'Per aziende che vogliono gestire lavoro, ottenere richieste e offrire un portale professionale ai clienti.', features: ['sito aziendale', 'moduli richiesta', 'collegamento Diriqo', 'portale clienti', 'preventivi pubblici', 'branding'], note: 'Il prezzo è indicativo e può variare in base al progetto.' },
    faqs: [
      { question: 'Diriqo è per una piccola azienda?', answer: 'Sì. È pensato per piccole e medie aziende con lavoro operativo quotidiano.' },
      { question: 'Devo conoscere software complessi?', answer: 'No. Se una persona sa aprire Facebook, può usare Diriqo.' },
      { question: 'Diriqo funziona su mobile?', answer: 'Sì. L’operatore vede il lavoro, aggiunge tempo e carica foto.' },
      { question: 'Posso iniziare senza formazione?', answer: 'Sì. Cliente, operatore, lavoro e assegnazione sono la base.' },
      { question: 'Si può aggiungere un portale clienti?', answer: 'Sì. Sito e portale sono un add-on per migliorare la comunicazione.' },
      { question: 'Va bene per un’impresa di pulizie?', answer: 'Sì. Per foto prima/dopo, controllo, presenze e molti lavori al giorno.' },
      { question: 'Funziona per service o installazioni?', answer: 'Sì. Gestisce appuntamenti, persone sul campo, storico, foto e stato.' },
    ],
    featuresPage: { eyebrow: 'Funzioni', title: 'Lavori, persone, foto e controllo.', text: 'Diriqo non è un ERP pesante. Ogni modulo risolve un problema quotidiano.', solves: 'Cosa risolve', helps: 'Perché aiuta', example: 'Esempio' },
    featureModules: [
      { title: 'Lavori', solves: 'Ogni lavoro ha una scheda invece di cercare in chat.', helps: 'Titolare e operatori vedono data, indirizzo, stato e note.', example: 'Un tecnico apre il lavoro, vede l’indirizzo e aggiunge foto a fine lavoro.' },
      { title: 'Operatori', solves: 'Meno chiamate e messaggi manuali.', helps: 'Sai chi lavora dove e cosa è finito.', example: 'La mattina assegni una pulizia a due persone e loro la vedono sul telefono.' },
      { title: 'App mobile', solves: 'L’operatore non ha bisogno di ufficio o laptop.', helps: 'Il telefono basta per lavoro, foto e tempo.', example: 'Un installatore carica foto prima e dopo.' },
      { title: 'Foto lavori', solves: 'Le foto non si perdono tra gallerie e chat.', helps: 'La prova resta con cliente e lavoro corretti.', example: 'Il cliente chiede prova. Apri il lavoro e hai le foto.' },
      { title: 'Presenze e ore', solves: 'Meno discussioni sulle ore lavorate.', helps: 'Il tempo è legato al lavoro.', example: 'L’operatore aggiunge tempo e l’admin controlla.' },
      { title: 'Calendario', solves: 'I lavori non sono sparsi tra calendario, chat e memoria.', helps: 'Vedi oggi, domani e capacità del team.', example: 'Durante una chiamata vedi subito quando il team è libero.' },
      { title: 'Clienti', solves: 'Contatti e storico non sono solo nel telefono del titolare.', helps: 'Ogni cliente ha lavori, indirizzi e note insieme.', example: 'Un lavoro ricorrente si crea più velocemente.' },
      { title: 'Costi e profitto', solves: 'Il titolare non sa se un lavoro è redditizio.', helps: 'Vedi costi e risultato senza tabella complessa.', example: 'Alla fine controlli prezzo, ore e materiale.' },
      { title: 'Preventivi, richieste e portale', solves: 'Richieste e preventivi non si perdono in e-mail.', helps: 'Una richiesta cliente diventa il passo successivo.', example: 'Una richiesta web diventa cliente e preventivo.' },
    ],
    howPage: { eyebrow: 'Come funziona', title: 'Da richiesta a fattura in un flusso.', text: 'Richiesta, preventivo, lavoro, app mobile, costi, fattura e vista cliente restano collegati.', cards: [{ title: 'Il mobile fa parte del lavoro', text: 'L’operatore vede il lavoro, conferma il risultato e carica foto sul campo.' }, { title: 'Economia dentro il lavoro', text: 'Tempo, costi e profitto stimato restano collegati al lavoro.' }, { title: 'Il portale è opzionale', text: 'Il pacchetto web aggiunge richieste dal sito e vista cliente.' }] },
    howItWorksSteps: ['La richiesta entra in Diriqo', 'Invii un preventivo intelligente', 'Il preventivo approvato diventa lavoro', 'L’operatore lo vede sul mobile', 'Conferma tempo e foto', 'Vedi costi e profitto', 'Invii la fattura', 'Il cliente ha una vista propria'],
    industriesPage: { eyebrow: 'Settori', title: 'Diriqo è adatto a chiunque gestisca lavori.', text: 'Non è legato a un solo settore. Funziona dove il lavoro si pianifica, si svolge dal cliente o sul campo e richiede foto, tempo, persone, costi e controllo.' },
    industryDetails: [
      { title: 'Imprese di pulizie', text: 'Molti lavori al giorno, foto prima/dopo e clienti che chiedono prova.', points: ['foto prima/dopo', 'controllo', 'presenze', 'molti lavori', 'prova cliente'] },
      { title: 'Aziende di servizio', text: 'Tecnici sul campo hanno bisogno di date, indirizzi e storico.', points: ['tecnici', 'appuntamenti', 'clienti', 'storico'] },
      { title: 'Aziende di installazione', text: 'Pianificazione persone, stato lavoro e foto senza caos in chat.', points: ['pianificazione', 'materiale e costi', 'stato', 'foto'] },
      { title: 'Artigiani', text: 'Piccoli lavori, visite dai clienti, foto del lavoro e vista chiara di ciò che è finito.', points: ['visite clienti', 'piccoli lavori', 'foto del lavoro', 'tempo e costi'] },
      { title: 'Edilizia e finiture', text: 'Lavori su più giorni, più persone e foto di consegna.', points: ['più giorni', 'più persone', 'progresso', 'foto consegna'] },
      { title: 'Facility management', text: 'Lavori ricorrenti, richieste clienti e controllo completamento.', points: ['lavori ricorrenti', 'richieste', 'controllo'] },
    ],
    industriesSeo: {
      title: 'Per quali aziende è adatto Diriqo',
      intro:
        'Diriqo è per aziende e team che non lavorano tutto il giorno alla stessa scrivania. Aiuta a pianificare lavori, mandare persone sul campo, salvare foto, registrare tempo, costi e stato del lavoro.',
      groups: [
        {
          title: 'Pulizie e facility',
          intro: 'Per team di pulizie e facility che devono dimostrare il risultato, pianificare lavori ricorrenti e tenere le foto nel lavoro corretto.',
          professions: [
            'imprese di pulizie',
            'pulizie generali',
            'pulizie post cantiere',
            'lavaggio vetri',
            'pulizia pavimenti',
            'pulizia industriale',
            'pulizia specializzata',
            'manutenzione immobili',
            'facility management',
            'gestione edifici',
            'gestione tecnica immobili',
            'lavori in quota',
            'disinfezione',
            'derattizzazione',
          ],
        },
        {
          title: 'Artigiani',
          intro: 'Come software per artigiani, Diriqo tiene insieme visite clienti, lavori, foto, materiali, tempo e comunicazione.',
          professions: [
            'imbianchini',
            'posatori di pavimenti',
            'elettricisti',
            'idraulici',
            'termotecnici',
            'falegnami',
            'fabbri',
            'piastrellisti',
            'cartongessisti',
            'lattonieri',
            'copritetto',
            'muratori',
            'specialisti facciate',
            'tuttofare',
            'giardinieri',
            'spazzacamini',
            'tecnici di servizio',
          ],
        },
        {
          title: 'Edilizia e installazioni',
          intro: 'Per team edili e di installazione, Diriqo funziona come software lavori, registro operativo e semplice pianificazione delle persone.',
          professions: [
            'imprese edili',
            'lavori di finitura',
            'aziende di installazione',
            'tecnici installatori',
            'imprese impiantistiche',
            'montaggio mobili',
            'montaggio cucine',
            'installazione tecnologie',
            'recupero di calore',
            'climatizzazione',
            'ventilazione',
            'aziende HVAC',
            'montaggio strutture metalliche',
            'ponteggi',
          ],
        },
        {
          title: 'Service',
          intro: 'Come sistema per aziende di service e app per tecnici, Diriqo aiuta con appuntamenti, storico lavori, foto e stato di ogni intervento.',
          professions: [
            'service climatizzatori',
            'service caldaie',
            'service pompe di calore',
            'service apparecchi elettrici',
            'service macchine',
            'tecnici revisori',
            'controlli tecnici',
            'manutenzione attrezzature',
          ],
        },
        {
          title: 'Altri team operativi',
          intro: 'Diriqo si adatta anche ad aziende che pianificano persone, clienti, attività, foto, tempo e costi fuori dall’ufficio.',
          professions: [
            'officine auto',
            'detailing',
            'gommisti',
            'ditte di traslochi',
            'aziende di consegna',
            'catering',
            'panifici',
            'produzione',
            'magazzini',
            'servizi di sicurezza',
            'vigilanza immobili',
          ],
        },
      ],
      seoText:
        'Diriqo è adatto ad aziende che pianificano lavori, gestiscono operatori sul campo, registrano presenze, foto dei lavori, costi, comunicazione con clienti e stato del lavoro. Piccole aziende, artigiani e team più grandi possono usarlo come sistema per lavori, app per operatori sul campo, software per imprese di pulizie, sistema per aziende di service, software per artigiani e strumento semplice per la gestione operativa.',
      problemsTitle: 'Quali problemi risolve Diriqo',
      problemsIntro:
        'Non è un sistema aziendale pesante. Diriqo mette le attività operative quotidiane in un posto, così il lavoro non va ricostruito da chiamate, chat e fogli di calcolo.',
      problems: [
        'caos su WhatsApp',
        'tabelle Excel poco chiare',
        'foto dei lavori perse',
        'presenze operatori poco chiare',
        'mancanza di vista sui costi',
        'comunicazione debole tra operatori',
        'preventivi persi',
        'disordine nei lavori',
        'stato del lavoro poco chiaro',
        'storico lavori mancante',
        'pianificazione persone senza visione',
        'presenze fuori dai lavori',
      ],
    },
    demoPage: { eyebrow: 'Demo', title: 'Guarda il flow di base.', text: 'La modalità demo è in preparazione. Per ora puoi creare un account test e vedere lavori, persone, foto e tempo.', samplesTitle: 'Anteprime', dashboardTitle: 'Dashboard titolare', dashboardText: 'Lavori di oggi, persone, ore e risultato indicativo.', mobileTitle: 'Mobile operatore', mobileText: 'Lavoro, foto e tempo senza formazione complessa.' },
    contactPage: { eyebrow: 'Contatto', title: 'Scrivici cosa devi gestire.', text: 'Ti risponderemo per prova Diriqo, configurazione o add-on Website & Customer Portal.', setupTitle: 'Voglio aiuto con la configurazione', setupText: 'Descrivi azienda, numero di persone e tipo di lavoro. Ti proponiamo un avvio semplice.', support: 'Supporto', form: { name: 'Nome', email: 'E-mail', company: 'Azienda', message: 'Messaggio', submit: 'Invia' } },
    legal: {
      eyebrow: 'Informazioni legali',
      privacy: { title: 'Privacy', intro: 'Questa pagina descrive i principi base del trattamento dati sul sito pubblico Diriqo.', sections: [{ title: 'Quali dati possiamo trattare', text: 'Con il modulo contatto possiamo trattare nome, e-mail, azienda e messaggio.' }, { title: 'Perché usiamo i dati', text: 'Per comunicazione, offerta, supporto e funzionamento del sito.' }, { title: 'Contatto', text: `Domande sui dati personali: ${contactEmail}.` }] },
      terms: { title: 'Termini', intro: 'Questa è una versione base delle condizioni per il sito pubblico Diriqo.', sections: [{ title: 'Servizio', text: 'Diriqo è un sistema SaaS per lavori, operatori, foto, ore, clienti e costi.' }, { title: 'Prezzi', text: 'I prezzi sono indicativi e possono variare in base al progetto.' }, { title: 'Servizi aggiuntivi', text: 'Website & Customer Portal può includere sito, moduli, portale clienti e branding.' }, { title: 'Contatto', text: `Domande sui termini: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'I cookies aiutano il sito a funzionare e possono servire per analisi base.', sections: [{ title: 'Cookies necessari', text: 'Aiutano funzionamento tecnico, sicurezza e caricamento pagine.' }, { title: 'Analisi', text: 'Usiamo Vercel Web Analytics per misurare il traffico di base senza cookies analitici.' }, { title: 'Contatto', text: `Domande sui cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Oggi in azienda',
      dashboardTitle: 'Vista lavori',
      activeJobs: '12 attivi',
      revenue: 'Ricavi',
      hours: 'Ore',
      profit: 'Profitto',
      rows: [['Pulizia uffici', 'Oggi 08:00', '2 persone', 'In corso'], ['Service climatizzazione', 'Oggi 13:30', '1 persona', 'Pianificato'], ['Montaggio scaffali', 'Domani 09:00', '3 persone', 'Pronto']],
      mobileEyebrow: 'Il mio lavoro',
      mobileTitle: 'Lavoro di oggi',
      mobileJob: 'Pulizia showroom',
      mobileTime: 'Praga 4, 08:00-11:00',
      photos: 'Foto',
      time: 'Tempo',
      uploadPhoto: 'Carica foto',
    },
  },

  fr: {
    locale: 'fr',
    meta: {
      home: { title: 'Diriqo - enfin une gestion simple des interventions', description: 'Un système simple pour interventions, équipes, photos, heures, clients et coûts.' },
      features: { title: 'Fonctions Diriqo - interventions, personnes, photos et suivi', description: 'Modules pour interventions, équipes, mobile, photos, heures, calendrier, clients et coûts.' },
      howItWorks: { title: 'Comment fonctionne Diriqo - guide simple', description: 'De la demande au devis, intervention, app mobile, coûts, facture et vue client.' },
      pricing: { title: 'Tarifs Diriqo - prix simple selon la taille d’équipe', description: 'Plans Starter, Growth, Business et Scale pour équipes jusqu’à 50 personnes. Les opérations plus grandes passent par une configuration adaptée.' },
      industries: { title: 'Pour qui est Diriqo - nettoyage, service, installation et facility', description: 'Diriqo aide les équipes qui travaillent sur le terrain.' },
      demo: { title: 'Démo Diriqo - aperçu du système', description: 'Aperçu du flow: dashboard, intervention, app mobile, photos et temps.' },
      contact: { title: 'Contact Diriqo', description: 'Contacte Diriqo pour essai, configuration, site web, portail client ou questions.' },
      privacy: { title: 'Confidentialité Diriqo', description: 'Informations de base sur les données personnelles.' },
      terms: { title: 'Conditions Diriqo', description: 'Conditions de base pour le site et les services Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informations sur les cookies du site public Diriqo.' },
    },
    common: { login: 'Connexion', trial: 'Essayer gratuitement', demo: 'Lancer la démo', createAccount: 'Créer un compte', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', popular: 'Populaire', notReady: 'Le mode démo est en préparation.' },
    navLinks: nav(['Fonctions', 'Comment ça marche', 'Tarifs', 'Secteurs', 'Démo', 'Contact']),
    legalLinks: legal(['Conditions', 'Confidentialité', 'Cookies', 'GDPR']),
    footer: { description: 'Un système simple pour les entreprises qui gèrent interventions, équipes, photos, heures et clients sur le terrain.', web: 'Web', legal: 'Légal', contact: 'Contact', appLogin: 'Connexion à l’app', setupHelp: 'Je veux de l’aide pour configurer', copyright: 'Tous droits réservés.' },
    home: {
      heroEyebrow: 'Système simple pour équipes terrain',
      heroTitle: 'Enfin une gestion simple des interventions.',
      heroSubtitle: 'Interventions, équipes, photos et aperçu de l’entreprise au même endroit.',
      secondaryCta: 'Voir comment ça marche',
      heroNote: 'Interventions, personnes et photos au même endroit. Moins de chaos. Plus de clarté.',
      problemEyebrow: 'Problème',
      problemTitle: 'Une petite entreprise n’a pas besoin de plus de chaos.',
      problemText: 'Le travail vit souvent dans les chats, papiers, appels et galeries photo. Une journée chargée suffit pour perdre le fil.',
      solutionEyebrow: 'Solution',
      solutionTitle: 'Diriqo donne une place claire à chaque intervention.',
      solutionText: 'Rien de lourd. Tu vois quoi faire, qui le fait, où sont les photos et où en est le travail.',
      stepsEyebrow: '3 étapes',
      stepsTitle: 'Comment ça marche',
      stepsText: 'Ajoute un client, un équipier et une intervention. L’équipier la voit sur mobile, ajoute des photos et l’admin garde le suivi.',
      featuresEyebrow: 'Fonctions',
      featuresTitle: 'Tout l’essentiel pour le travail terrain.',
      industriesEyebrow: 'Pour qui',
      industriesTitle: 'Pour les entreprises qui travaillent dehors, chez les clients ou sur plusieurs sites.',
      pricingEyebrow: 'Tarifs',
      pricingTitle: 'Prix simple selon le nombre de personnes.',
      finalCtaTitle: 'Commence à gérer tes interventions simplement.',
      finalCtaText: 'Moins d’appels, moins de recherche de photos et plus de calme au quotidien.',
    },
    problemItems: ['Interventions dans WhatsApp', 'Photos perdues dans la galerie', 'Papiers et notes partout', 'Discussions sur les heures', 'Le client appelle pour savoir où vous êtes', 'Le dirigeant ne sait pas qui travaille où'],
    solutionItems: ['Chaque intervention a sa place', 'Les équipes voient le travail sur mobile', 'Les photos sont liées à la bonne intervention', 'Les heures sont enregistrées sur le travail', 'Clients et historique restent ensemble', 'Le dirigeant voit l’état sans appeler tout le monde'],
    homeSteps: [
      { title: 'Ajoute un client', text: 'Enregistre contact, adresse et notes. La prochaine fois, tu ne cherches pas dans le téléphone.' },
      { title: 'Ajoute un équipier', text: 'Il reçoit un accès et voit sur mobile ce qu’il doit faire.' },
      { title: 'Crée une intervention', text: 'Assigne les personnes, la date et le travail. Photos, temps et statut restent avec l’intervention.' },
    ],
    featureCards: [
      { title: 'Interventions', text: 'Date, adresse, personnes, photos, notes et statut.' },
      { title: 'Équipes', text: 'Vue des personnes, affectations et suivi simple.' },
      { title: 'App mobile', text: 'L’équipier ouvre le téléphone et voit le travail du jour.' },
      { title: 'Photos avant/après', text: 'Les photos restent avec l’intervention, pas dans la galerie.' },
      { title: 'Calendrier', text: 'Tu vois qui va où aujourd’hui, demain et la semaine prochaine.' },
      { title: 'Coûts et marge', text: 'Vue approximative du coût et du résultat.' },
      { title: 'Clients', text: 'Contacts, historique et notes au même endroit.' },
      { title: 'Devis et demandes', text: 'De la demande au devis puis au travail sans recopier.' },
    ],
    industries: ['Entreprises de nettoyage', 'Sociétés de service', 'Installations', 'Artisans', 'Équipes bâtiment', 'Gestion d’immeubles', 'Petites équipes opérationnelles'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mois', people: 'Jusqu’à 5 personnes', description: 'Pour petites équipes et entreprises qui démarrent.', features: ['interventions', 'clients', 'équipes', 'app mobile', 'photos', 'vue de base'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mois', people: '6-15 personnes', description: 'Pour entreprises qui doivent piloter clairement personnes et travail.', featured: true, features: ['tout Starter', 'calendrier', 'suivi du travail', 'coûts des interventions', 'meilleures vues'] },
      { name: 'Business', price: commonPricing.businessPrice, period: '/ mois', people: '16-30 personnes', description: 'Pour entreprises de service établies avec plus d’activité.', features: ['interventions', 'clients', 'équipes', 'app mobile', 'photos', 'calendrier', 'suivi', 'coûts', 'rapports'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mois', people: '31-50 personnes', description: 'Pour équipes plus grandes qui veulent garder une gestion simple.', features: ['interventions', 'clients', 'équipes', 'app mobile', 'photos', 'calendrier', 'suivi', 'coûts', 'rapports'] },
    ],
    addon: { title: 'Website & Customer Portal', price: `${commonPricing.addonPrice} setup`, description: 'Pour entreprises qui veulent gérer le travail, recevoir des demandes et offrir un portail professionnel aux clients.', features: ['site d’entreprise', 'formulaires de demande', 'connexion Diriqo', 'portail client', 'devis publics', 'branding'], note: 'Le prix est indicatif et peut varier selon le périmètre.' },
    faqs: [
      { question: 'Diriqo est-il pour une petite entreprise?', answer: 'Oui. Il est conçu pour petites et moyennes entreprises avec travail opérationnel quotidien.' },
      { question: 'Faut-il savoir utiliser un logiciel complexe?', answer: 'Non. Si quelqu’un peut ouvrir Facebook, il peut utiliser Diriqo.' },
      { question: 'Diriqo fonctionne sur mobile?', answer: 'Oui. L’équipier voit le travail, ajoute du temps et charge des photos.' },
      { question: 'Puis-je commencer sans formation?', answer: 'Oui. Client, équipier, intervention et affectation suffisent pour démarrer.' },
      { question: 'Peut-on ajouter un portail client?', answer: 'Oui. Site et portail sont un add-on pour mieux communiquer.' },
      { question: 'Est-ce adapté au nettoyage?', answer: 'Oui. Photos avant/après, contrôle, présence et nombreuses interventions par jour.' },
      { question: 'Cela marche pour service ou installation?', answer: 'Oui. Rendez-vous, équipes terrain, historique, photos et statut.' },
    ],
    featuresPage: { eyebrow: 'Fonctions', title: 'Interventions, personnes, photos et suivi.', text: 'Diriqo n’est pas un ERP lourd. Chaque module résout un problème quotidien.', solves: 'Ce que ça résout', helps: 'Pourquoi ça aide', example: 'Exemple' },
    featureModules: [
      { title: 'Interventions', solves: 'Chaque travail a sa fiche au lieu d’être perdu dans le chat.', helps: 'Dirigeant et équipes voient date, adresse, statut et notes.', example: 'Un technicien ouvre l’intervention, voit l’adresse et ajoute des photos.' },
      { title: 'Équipes', solves: 'Moins d’appels et messages manuels.', helps: 'Tu sais qui travaille où et ce qui est terminé.', example: 'Le matin, tu assignes un nettoyage à deux personnes et elles le voient sur mobile.' },
      { title: 'App mobile', solves: 'L’équipier n’a pas besoin de bureau ni ordinateur.', helps: 'Le téléphone suffit pour travail, photos et temps.', example: 'Un installateur charge une photo avant et après.' },
      { title: 'Photos d’intervention', solves: 'Les photos ne disparaissent pas dans galeries et chats.', helps: 'La preuve reste avec le bon client et travail.', example: 'Le client demande une preuve. Tu ouvres l’intervention et les photos sont là.' },
      { title: 'Présence et heures', solves: 'Moins de discussions sur les heures travaillées.', helps: 'Le temps est lié à l’intervention.', example: 'L’équipier ajoute le temps et l’admin vérifie.' },
      { title: 'Calendrier', solves: 'Les interventions ne sont pas dispersées entre calendrier, chat et mémoire.', helps: 'Tu vois aujourd’hui, demain et la capacité.', example: 'Pendant un appel client, tu vois tout de suite un créneau libre.' },
      { title: 'Clients', solves: 'Contacts et historique ne sont pas seulement dans le téléphone du dirigeant.', helps: 'Chaque client a travaux, adresses et notes ensemble.', example: 'Un travail récurrent est créé plus vite.' },
      { title: 'Coûts et marge', solves: 'Le dirigeant ne sait pas si le travail est rentable.', helps: 'Tu vois coûts et résultat sans tableau compliqué.', example: 'À la fin, tu vérifies prix, heures et matériel.' },
      { title: 'Devis, demandes et portail', solves: 'Demandes et devis ne se perdent pas dans l’e-mail.', helps: 'Une demande client devient l’étape suivante.', example: 'Une demande web devient client et devis préparé.' },
    ],
    howPage: { eyebrow: 'Comment ça marche', title: 'De la demande à la facture dans un flux.', text: 'Demande, devis, intervention, app mobile, coûts, facture et vue client restent reliés.', cards: [{ title: 'Le mobile fait partie du travail', text: 'L’équipe voit l’intervention, confirme le résultat et charge les photos terrain.' }, { title: 'L’économie reste sur l’intervention', text: 'Temps, coûts et marge estimée restent liés au travail.' }, { title: 'Le portail est optionnel', text: 'Le forfait web ajoute demandes depuis le site et vue client.' }] },
    howItWorksSteps: ['La demande arrive dans Diriqo', 'Tu envoies un devis intelligent', 'Le devis accepté devient intervention', 'L’équipe la voit sur mobile', 'Elle confirme temps et photos', 'Tu vois coûts et marge', 'Tu envoies la facture', 'Le client a sa vue'],
    industriesPage: { eyebrow: 'Secteurs', title: 'Diriqo convient à tous ceux qui gèrent des interventions.', text: 'Il n’est pas lié à un seul secteur. Il convient partout où le travail est planifié, réalisé chez le client ou sur le terrain, avec photos, temps, personnes, coûts et suivi.' },
    industryDetails: [
      { title: 'Entreprises de nettoyage', text: 'Beaucoup d’interventions par jour, photos avant/après et clients qui veulent une preuve.', points: ['photos avant/après', 'contrôle', 'présence', 'nombreuses interventions', 'preuve client'] },
      { title: 'Sociétés de service', text: 'Techniciens terrain avec besoin de dates, adresses et historique.', points: ['techniciens', 'rendez-vous', 'clients', 'historique'] },
      { title: 'Sociétés d’installation', text: 'Planification, statut et documentation photo sans chaos de chat.', points: ['planification', 'matériel et coûts', 'statut', 'photos'] },
      { title: 'Artisans', text: 'Petites interventions, visites client, photos du travail et vue claire de ce qui est terminé.', points: ['visites client', 'petites interventions', 'photos du travail', 'temps et coûts'] },
      { title: 'Bâtiment et finitions', text: 'Travaux sur plusieurs jours, plusieurs personnes et photos de remise.', points: ['plusieurs jours', 'plusieurs personnes', 'progression', 'photos de remise'] },
      { title: 'Gestion d’immeubles', text: 'Travaux récurrents, demandes clients et contrôle de réalisation.', points: ['récurrent', 'demandes', 'contrôle'] },
    ],
    industriesSeo: {
      title: 'Pour quels types d’entreprises Diriqo est adapté',
      intro:
        'Diriqo est conçu pour les entreprises et équipes qui ne travaillent pas toute la journée derrière un bureau. Il aide à planifier les interventions, envoyer les personnes sur le terrain, enregistrer photos, temps, coûts et statut du travail.',
      groups: [
        {
          title: 'Nettoyage et facility',
          intro: 'Pour les équipes de nettoyage et facility qui doivent prouver le résultat, planifier des travaux récurrents et garder les photos avec la bonne intervention.',
          professions: [
            'entreprises de nettoyage',
            'nettoyages généraux',
            'nettoyages après chantier',
            'lavage de vitres',
            'nettoyage de sols',
            'nettoyage industriel',
            'nettoyage spécialisé',
            'maintenance d’immeubles',
            'facility management',
            'gestion de bâtiments',
            'gestion technique d’immeubles',
            'travaux en hauteur',
            'désinfection',
            'dératisation',
          ],
        },
        {
          title: 'Artisans',
          intro: 'Comme logiciel pour artisans, Diriqo garde ensemble visites client, interventions, photos, matériaux, temps et communication.',
          professions: [
            'peintres',
            'poseurs de sols',
            'électriciens',
            'plombiers',
            'chauffagistes',
            'menuisiers',
            'serruriers',
            'carreleurs',
            'plaquistes',
            'zingueurs',
            'couvreurs',
            'maçons',
            'façadiers',
            'hommes à tout faire',
            'jardiniers',
            'ramoneurs',
            'techniciens de service',
          ],
        },
        {
          title: 'Bâtiment et installations',
          intro: 'Pour les équipes bâtiment et installation, Diriqo sert de logiciel d’interventions, registre de travail et planification simple des personnes.',
          professions: [
            'entreprises du bâtiment',
            'travaux de finition',
            'sociétés d’installation',
            'techniciens d’installation',
            'installateurs',
            'montage de meubles',
            'installation de cuisines',
            'installation de technologies',
            'récupération de chaleur',
            'climatisation',
            'ventilation',
            'entreprises HVAC',
            'montage de structures métalliques',
            'échafaudage',
          ],
        },
        {
          title: 'Service',
          intro: 'Comme système pour sociétés de service et app pour techniciens, Diriqo aide avec rendez-vous, historique, photos et statut de chaque visite.',
          professions: [
            'service climatisation',
            'service chaudières',
            'service pompes à chaleur',
            'service équipements électriques',
            'service machines',
            'techniciens de contrôle',
            'contrôles techniques',
            'maintenance équipements',
          ],
        },
        {
          title: 'Autres équipes opérationnelles',
          intro: 'Diriqo convient aussi aux entreprises qui planifient personnes, clients, tâches, photos, temps et coûts hors du bureau.',
          professions: [
            'garages automobiles',
            'detailing',
            'services pneus',
            'sociétés de déménagement',
            'sociétés de livraison',
            'catering',
            'boulangeries',
            'production',
            'opérations d’entrepôt',
            'services de sécurité',
            'surveillance d’immeubles',
          ],
        },
      ],
      seoText:
        'Diriqo convient aux entreprises qui planifient des interventions, gèrent des équipes terrain, suivent présence, photos d’intervention, coûts, communication client et statut du travail. Petites entreprises, indépendants et équipes plus grandes peuvent l’utiliser comme système d’interventions, app pour équipes terrain, logiciel pour entreprises de nettoyage, système pour sociétés de service, logiciel pour artisans et outil simple de gestion opérationnelle.',
      problemsTitle: 'Quels problèmes Diriqo résout',
      problemsIntro:
        'Ce n’est pas un système lourd. Diriqo rassemble les opérations quotidiennes au même endroit pour ne pas reconstruire le travail depuis appels, chats et tableurs.',
      problems: [
        'chaos dans WhatsApp',
        'tableurs Excel peu clairs',
        'photos d’intervention perdues',
        'présence des équipes peu claire',
        'manque de vue sur les coûts',
        'mauvaise communication entre équipes',
        'devis perdus',
        'désordre dans les interventions',
        'statut du travail peu clair',
        'historique d’interventions manquant',
        'planification des équipes sans vue claire',
        'présence hors interventions',
      ],
    },
    demoPage: { eyebrow: 'Démo', title: 'Découvre le flow de base.', text: 'Le mode démo est en préparation. Tu peux déjà créer un compte test et voir travaux, équipes, photos et temps.', samplesTitle: 'Aperçus', dashboardTitle: 'Dashboard dirigeant', dashboardText: 'Interventions du jour, personnes, heures et résultat indicatif.', mobileTitle: 'Mobile équipier', mobileText: 'Travail, photos et temps sans formation complexe.' },
    contactPage: { eyebrow: 'Contact', title: 'Dis-nous ce que tu dois gérer.', text: 'Nous te répondrons pour un essai Diriqo, une configuration ou l’add-on Website & Customer Portal.', setupTitle: 'Je veux de l’aide pour configurer', setupText: 'Décris l’entreprise, le nombre de personnes et le type de travail. Nous proposerons un départ simple.', support: 'Support', form: { name: 'Nom', email: 'E-mail', company: 'Entreprise', message: 'Message', submit: 'Envoyer' } },
    legal: {
      eyebrow: 'Informations légales',
      privacy: { title: 'Confidentialité', intro: 'Cette page décrit les principes de base du traitement des données sur le site public Diriqo.', sections: [{ title: 'Données que nous pouvons traiter', text: 'Avec le formulaire, nous pouvons traiter nom, e-mail, entreprise et message.' }, { title: 'Pourquoi nous utilisons les données', text: 'Pour communication, offre, support et fonctionnement du site.' }, { title: 'Contact', text: `Questions sur les données personnelles: ${contactEmail}.` }] },
      terms: { title: 'Conditions', intro: 'Ceci est une version de base des conditions pour le site public Diriqo.', sections: [{ title: 'Service', text: 'Diriqo est un système SaaS pour interventions, équipes, photos, heures, clients et coûts.' }, { title: 'Prix', text: 'Les prix sont indicatifs et peuvent varier selon le périmètre.' }, { title: 'Services additionnels', text: 'Website & Customer Portal peut inclure site, formulaires, portail client et branding.' }, { title: 'Contact', text: `Questions sur les conditions: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Les cookies aident le site à fonctionner et peuvent servir à une analyse de base.', sections: [{ title: 'Cookies nécessaires', text: 'Ils aident au fonctionnement technique, à la sécurité et au chargement.' }, { title: 'Analyse', text: 'Nous utilisons Vercel Web Analytics pour une mesure de fréquentation de base sans cookies d’analyse.' }, { title: 'Contact', text: `Questions sur les cookies: ${contactEmail}.` }] },
    },
    mockup: {
      dashboardEyebrow: 'Aujourd’hui dans l’entreprise',
      dashboardTitle: 'Vue interventions',
      activeJobs: '12 actives',
      revenue: 'Revenus',
      hours: 'Heures',
      profit: 'Marge',
      rows: [['Nettoyage bureaux', 'Aujourd’hui 08:00', '2 personnes', 'En cours'], ['Service climatisation', 'Aujourd’hui 13:30', '1 personne', 'Planifié'], ['Montage étagères', 'Demain 09:00', '3 personnes', 'Prêt']],
      mobileEyebrow: 'Mon travail',
      mobileTitle: 'Intervention du jour',
      mobileJob: 'Nettoyage showroom',
      mobileTime: 'Prague 4, 08:00-11:00',
      photos: 'Photos',
      time: 'Temps',
      uploadPhoto: 'Charger photo',
    },
  },
}

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale))
}

export function getPricingPageCopy(locale: Locale): PricingPageCopy {
  const content = pricingPageCopy[locale]
  const overrides = pricingOverrides[locale]

  return {
    ...content,
    ...overrides,
  }
}

export function getMarketingContent(locale: Locale): MarketingContent {
  const content = marketingContent[locale]
  const pricing = getPricingPageCopy(locale)
  const pricingPlans = webPricingPlans
    .map((plan) => {
      const marketingPlan = getPricingPlanMarketingCopy(locale, plan.id)

      return {
        id: plan.id,
        name: marketingPlan?.name ?? plan.name,
        slug: plan.slug,
        price: plan.monthlyPrice === null ? pricing.customPriceLabel ?? formatWebMonthlyPrice(plan) : formatWebMonthlyPrice(plan),
        period: plan.monthlyPrice === null ? undefined : pricing.monthlyPeriod ?? '/ month',
        people: marketingPlan?.people ?? formatLocalizedWorkerRange(locale, plan.workerLimitMin, plan.workerLimitMax),
        description: marketingPlan?.description ?? localizedPlanDescriptions[locale][plan.id],
        featured: plan.recommended,
        features: marketingPlan?.features ?? pricing.commonFeatures,
        ctaLabel: plan.contactSales ? pricing.contactSalesCta ?? 'Contact us' : pricing.checkoutCta ?? content.common.trial,
        ctaHref: plan.contactSales ? localizePath(locale, '/contact') : undefined,
        monthlyPrice: plan.monthlyPrice,
        yearlyPrice: plan.yearlyPrice,
        currency: plan.currency,
        workerLimitMin: plan.workerLimitMin,
        workerLimitMax: plan.workerLimitMax,
        contactSales: plan.contactSales,
      }
    })

  return {
    ...content,
    meta: {
      ...content.meta,
      pricing: {
        ...content.meta.pricing,
        title: locale === 'en' ? 'Diriqo Pricing - simple plans by users and workers' : content.meta.pricing.title,
        description: pricing.description,
      },
    },
    home: {
      ...content.home,
      pricingTitle: pricing.title,
    },
    pricingPlans,
    pricingUi: {
      monthlyLabel: pricing.monthlyLabel ?? 'Monthly',
      annualLabel: pricing.annualLabel ?? 'Annual',
      annualBadge: pricing.annualBadge ?? '2 months free',
      annualSavingText: pricing.annualSavingText ?? 'Save 2 months with annual billing',
      noCreditCardText: pricing.noCreditCardText ?? 'No credit card required',
      monthlyPeriod: pricing.monthlyPeriod ?? '/ month',
      yearlyPeriod: pricing.yearlyPeriod ?? '/ year',
    },
    pricingCustomSetup: {
      ...pricingCustomSetupByLocale[locale],
      href: localizePath(locale, '/contact'),
    },
    addon: pricing.addon,
  }
}

export function localizePath(locale: Locale, href: PageHref | string): string {
  if (href === '/') return `/${locale}`
  return `/${locale}${href}`
}

export function stripLocaleFromPath(pathname: string): PageHref | string {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length > 0 && isLocale(parts[0])) {
    const rest = `/${parts.slice(1).join('/')}`
    return rest === '/' ? '/' : rest
  }

  return pathname || '/'
}

export function alternateLanguages(path: PageHref | string) {
  return Object.fromEntries(
    locales.map((locale) => [htmlLang[locale], localizePath(locale, path)])
  )
}
