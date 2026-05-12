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

const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ?? ''
const loginAppUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ?? 'https://app.diriqo.com'
const appPath = (path: string) => (appBaseUrl ? `${appBaseUrl}${path}` : path)

export const appLinks = {
  login: loginAppUrl,
  signup: appPath('/register'),
  app: appBaseUrl,
}

function withLocaleQuery(path: string, locale?: Locale) {
  if (!locale) return path
  const separator = path.includes('?') ? '&' : '?'
  return `${path}${separator}locale=${locale}`
}

export function getLoginHref(locale?: Locale) {
  void locale
  return loginAppUrl
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

const legalHrefs: PageHref[] = ['/privacy', '/terms', '/cookies']

function nav(labels: string[]): NavItem[] {
  return labels.map((label, index) => ({
    label,
    href: baseNavHrefs[index],
  }))
}

function legal(labels: string[]): NavItem[] {
  return labels.map((label, index) => ({
    label,
    href: legalHrefs[index],
  }))
}

const commonPricing = {
  starterPrice: '19 EUR',
  growthPrice: '39 EUR',
  scalePrice: '99 EUR',
  enterprisePrice: '149 EUR',
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
  enterpriseCta: string
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
    introBullets: ['Nejdřív účet, potom nastavení firmy.', 'Zakázky, pracovníci, zákazníci a plánování na jednom místě.', 'Týmy nad 30 pracovníků řešíme individuálně.'],
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
    description: 'Clear plans by team size. Create your account first, then set up your company.',
    introTitle: 'Pick a plan by number of people.',
    introText:
      'Choose the team size that fits you, create your account and set up your company in the next step.',
    introBullets: ['Create your account first, then set up your company.', 'Jobs, workers, customers and scheduling in one place.', 'Teams above 30 workers use custom pricing.'],
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
    introBullets: ['Feste Abos in EUR.', 'Jährliche Zahlung bedeutet 12 Monate Nutzung zum Preis von 10.', '100+ Nutzer/Mitarbeiter bekommen individuelle Preise.'],
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
    introBullets: ['Stałe subskrypcje w EUR.', 'Płatność roczna daje 12 miesięcy używania w cenie 10.', '100+ użytkowników/pracowników ma cenę indywidualną.'],
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
    introBullets: ['Fix előfizetések EUR-ban.', 'Éves fizetéssel 12 hónap használatot kapsz 10 hónap áráért.', '100+ felhasználó/dolgozó esetén egyedi ár van.'],
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
    introBullets: ['Suscripciones fijas en EUR.', 'El pago anual da 12 meses de uso por el precio de 10.', '100+ usuarios/trabajadores tienen precio personalizado.'],
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
    introBullets: ['Abbonamenti fissi in EUR.', 'Il pagamento annuale dà 12 mesi di uso al prezzo di 10.', '100+ utenti/operatori hanno prezzo personalizzato.'],
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
    introBullets: ['Abonnements fixes en EUR.', 'Le paiement annuel donne 12 mois d’usage pour le prix de 10.', '100+ utilisateurs/équipes ont un tarif personnalisé.'],
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

const localizedPlanDescriptions: Record<Locale, Record<WebPricingPlanId, string>> = {
  cs: {
    starter: 'Pro malé týmy na začátku.',
    growth: 'Pro rostoucí servisní firmy.',
    business: 'Pro větší týmy a více provozu.',
    scale: 'Pro větší provozy s více lidmi a potřebou lepšího přehledu.',
    enterprise: 'Pro velké týmy, které potřebují více kapacity a struktury.',
    custom: 'Pro firmy s individuálními požadavky.',
  },
  en: {
    starter: 'For small teams getting started.',
    growth: 'For growing service businesses.',
    business: 'For larger teams with more operations.',
    scale: 'For bigger operations with more people and stronger oversight.',
    enterprise: 'For large teams that need more capacity and structure.',
    custom: 'For companies with custom requirements.',
  },
  de: {
    starter: 'Für kleine Servicefirmen, die starten.',
    growth: 'Für wachsende Teams mit mehreren Mitarbeitern und Aufträgen.',
    business: 'Für etablierte Servicefirmen mit größerem Betrieb.',
    scale: 'Für größere Betriebe mit mehr Menschen und besserem Überblick.',
    enterprise: 'Für große Teams mit mehr Kapazität und Struktur.',
    custom: 'Für Firmen mit individuellen Anforderungen.',
  },
  pl: {
    starter: 'Dla małych firm usługowych na start.',
    growth: 'Dla rosnących zespołów z większą liczbą pracowników i zleceń.',
    business: 'Dla stabilnych firm usługowych z większym operacyjnym ruchem.',
    scale: 'Dla większych operacji z większą liczbą ludzi i lepszym przeglądem.',
    enterprise: 'Dla dużych zespołów, które potrzebują więcej pojemności i struktury.',
    custom: 'Dla firm z indywidualnymi wymaganiami.',
  },
  hu: {
    starter: 'Kis szolgáltató cégeknek induláshoz.',
    growth: 'Növekvő csapatoknak több dolgozóval és munkával.',
    business: 'Bejáratott szolgáltató cégeknek nagyobb működéssel.',
    scale: 'Nagyobb működéshez több emberrel és jobb áttekintéssel.',
    enterprise: 'Nagy csapatoknak nagyobb kapacitással és struktúrával.',
    custom: 'Egyedi igényű cégeknek.',
  },
  es: {
    starter: 'Para pequeñas empresas de servicios que empiezan.',
    growth: 'Para equipos en crecimiento con más trabajadores y trabajos.',
    business: 'Para empresas de servicios establecidas con más operación.',
    scale: 'Para operaciones más grandes con más personas y mejor control.',
    enterprise: 'Para equipos grandes que necesitan más capacidad y estructura.',
    custom: 'Para empresas con requisitos personalizados.',
  },
  it: {
    starter: 'Per piccole aziende di servizi che iniziano.',
    growth: 'Per team in crescita con più operatori e lavori.',
    business: 'Per aziende di servizi avviate con operatività più ampia.',
    scale: 'Per operazioni più grandi con più persone e controllo migliore.',
    enterprise: 'Per team grandi che richiedono più capacità e struttura.',
    custom: 'Per aziende con esigenze personalizzate.',
  },
  fr: {
    starter: 'Pour petites entreprises de service qui démarrent.',
    growth: 'Pour équipes en croissance avec plus de personnes et d’interventions.',
    business: 'Pour entreprises de service établies avec plus d’activité.',
    scale: 'Pour opérations plus grandes avec plus de personnes et un meilleur suivi.',
    enterprise: 'Pour grandes équipes qui ont besoin de plus de capacité et de structure.',
    custom: 'Pour entreprises avec besoins personnalisés.',
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
    enterprise: {
      people: 'Do 100 pracovníků',
      description: 'Pro velké týmy, které potřebují více kapacity a struktury.',
      features: ['vše ve Scale', 'nejvyšší standardní kapacita', 'strukturovanější provoz', 'připraveno pro větší firmy'],
    },
    custom: {
      name: 'Custom',
      people: 'Nad 100 pracovníků',
      description: 'Pro firmy s individuálními požadavky.',
      features: ['individuální domluva', 'větší týmy', 'příprava na specifický provoz'],
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
    enterprise: {
      people: 'Up to 100 workers',
      description: 'For large teams that need more capacity and structure.',
      features: ['everything in Scale', 'highest standard capacity', 'more structured operations', 'prepared for larger companies'],
    },
    custom: {
      name: 'Custom',
      people: 'Over 100 workers',
      description: 'For companies with custom requirements.',
      features: ['custom agreement', 'larger teams', 'prepared for specific operations'],
    },
  },
}

function getPricingPlanMarketingCopy(locale: Locale, planId: WebPricingPlanId) {
  return pricingPlanMarketingCopyByLocale[locale]?.[planId] ?? pricingPlanMarketingCopyByLocale.en?.[planId]
}

function formatLocalizedWorkerRange(locale: Locale, min: number, max: number | null) {
  const ranges: Record<Locale, string> = {
    cs: max === null ? '100+ uživatelů/pracovníků' : `${min}–${max} uživatelů/pracovníků`,
    en: max === null ? '100+ users/workers' : `${min}–${max} users/workers`,
    de: max === null ? '100+ Nutzer/Mitarbeiter' : `${min}–${max} Nutzer/Mitarbeiter`,
    pl: max === null ? '100+ użytkowników/pracowników' : `${min}–${max} użytkowników/pracowników`,
    hu: max === null ? '100+ felhasználó/dolgozó' : `${min}–${max} felhasználó/dolgozó`,
    es: max === null ? '100+ usuarios/trabajadores' : `${min}–${max} usuarios/trabajadores`,
    it: max === null ? '100+ utenti/operatori' : `${min}–${max} utenti/operatori`,
    fr: max === null ? '100+ utilisateurs/personnes' : `${min}–${max} utilisateurs/personnes`,
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
      'Starter až Enterprise se liší hlavně limitem lidí v týmu. Custom je pro individuální požadavky.',
      'Web, poptávky a zákaznický portál jsou samostatný nadstavbový balíček.',
    ],
    planDescriptions: [
      'Pro malé týmy, které chtějí pořádek v zakázkách a lidech.',
      'Pro rostoucí firmy, které potřebují řídit více lidí v terénu.',
      'Pro větší provozní týmy s více pracovníky a adminy.',
      'Pro týmy nad 30 lidí nebo specifické provozy.',
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
    enterpriseCta: 'Domluvit řešení',
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
      'Starter through Enterprise mainly differ by team size. Custom is for individual requirements.',
      'Website, inquiries and customer portal are a separate add-on.',
    ],
    planDescriptions: [
      'For small teams that want order in jobs and people.',
      'For growing companies managing more people in the field.',
      'For larger operations teams with more workers and admins.',
      'For teams over 30 people or specific operations.',
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
    enterpriseCta: 'Discuss a solution',
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
      'Starter bis Enterprise unterscheiden sich hauptsächlich nach Teamgröße. Custom ist für individuelle Anforderungen.',
      'Website, Anfragen und Kundenportal sind ein separates Add-on.',
    ],
    planDescriptions: [
      'Für kleine Teams, die Ordnung in Aufträgen und Menschen wollen.',
      'Für wachsende Firmen mit mehr Menschen im Außendienst.',
      'Für größere operative Teams mit mehr Mitarbeitern und Admins.',
      'Für Teams über 30 Personen oder spezielle Abläufe.',
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
    enterpriseCta: 'Lösung besprechen',
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
      'Starter do Enterprise różnią się głównie limitem osób. Custom jest dla indywidualnych wymagań.',
      'Strona, zapytania i portal klienta są osobnym dodatkiem.',
    ],
    planDescriptions: [
      'Dla małych zespołów, które chcą porządku w zleceniach i ludziach.',
      'Dla rosnących firm z większą liczbą ludzi w terenie.',
      'Dla większych zespołów operacyjnych z większą liczbą pracowników i adminów.',
      'Dla zespołów powyżej 30 osób lub specyficznych procesów.',
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
    enterpriseCta: 'Uzgodnić rozwiązanie',
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
      'A Startertől az Enterprise-ig főleg a létszám különbözik. A Custom egyedi igényekre van.',
      'A weboldal, érdeklődések és ügyfélportál külön add-on.',
    ],
    planDescriptions: [
      'Kis csapatoknak, amelyek rendet akarnak a munkákban és emberekben.',
      'Növekvő cégeknek több terepi dolgozóval.',
      'Nagyobb operatív csapatoknak több dolgozóval és adminnal.',
      '30 fő feletti csapatoknak vagy speciális működéshez.',
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
    enterpriseCta: 'Megoldás egyeztetése',
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
      'De Starter a Enterprise se diferencian sobre todo por tamaño de equipo. Custom es para requisitos individuales.',
      'Web, solicitudes y portal de clientes son un add-on separado.',
    ],
    planDescriptions: [
      'Para equipos pequeños que quieren orden en trabajos y personas.',
      'Para empresas en crecimiento con más personas en campo.',
      'Para equipos operativos más grandes con más empleados y admins.',
      'Para equipos de más de 30 personas o procesos específicos.',
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
    enterpriseCta: 'Hablar de solución',
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
      'Da Starter a Enterprise differiscono principalmente per dimensione del team. Custom è per esigenze personalizzate.',
      'Sito, richieste e portale clienti sono un add-on separato.',
    ],
    planDescriptions: [
      'Per piccoli team che vogliono ordine in lavori e persone.',
      'Per aziende in crescita con più persone sul campo.',
      'Per team operativi più grandi con più operatori e admin.',
      'Per team oltre 30 persone o processi specifici.',
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
    enterpriseCta: 'Definire soluzione',
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
      'De Starter à Enterprise, les plans diffèrent surtout par la taille d’équipe. Custom est pour les besoins personnalisés.',
      'Site web, demandes et portail client sont un add-on séparé.',
    ],
    planDescriptions: [
      'Pour petites équipes qui veulent de l’ordre dans interventions et personnes.',
      'Pour entreprises en croissance avec plus de personnes sur le terrain.',
      'Pour équipes opérationnelles plus grandes avec plus d’équipiers et admins.',
      'Pour équipes de plus de 30 personnes ou opérations spécifiques.',
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
    enterpriseCta: 'Discuter solution',
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
          'Podívej se na jednoduchý flow: firma, pracovníci, zákazník, zakázka, fotky, čas a přehled práce.',
      },
      pricing: {
        title: 'Ceník Diriqo - jednoduchá cena podle velikosti týmu',
        description:
          'Tarify Diriqo Starter, Growth, Business, Scale, Enterprise a Custom podle počtu pracovníků.',
      },
      industries: {
        title: 'Pro koho je Diriqo - úklid, servis, montáže a správa objektů',
        description:
          'Diriqo pomáhá firmám v terénu: úklidovým, servisním, montážním, stavebním a správcům objektů.',
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
    legalLinks: legal(['Ochrana osobních údajů', 'Obchodní podmínky', 'Cookies']),
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
        name: 'Scale',
        price: commonPricing.scalePrice,
        period: '/ měsíc',
        people: '16-30 lidí',
        description: 'Pro větší provozní týmy s více pracovníky a adminy.',
        features: ['zakázky a zákazníci', 'pracovníci a role', 'mobilní aplikace', 'fotky ze zakázek', 'kalendář a evidence práce', 'náklady a přehledy'],
      },
      {
        name: 'Enterprise',
        price: 'Individuálně',
        people: 'Nad 30 lidí',
        description: 'Pro týmy nad 30 lidí nebo specifické provozy.',
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
      title: 'Od zákazníka po hotovou zakázku bez zbytečností.',
      text: 'Rychle pochopíš, kde začít a co se děje dál.',
      cards: [
        { title: 'Pracovník ví, kam jet', text: 'V mobilu vidí práci, adresu, poznámky a termín.' },
        { title: 'Fotky jsou u práce', text: 'Před/po fotky se ukládají k zakázce, ne do chatu.' },
        { title: 'Admin má klidnější den', text: 'Vidí stav práce, čas i náklady bez obvolávání.' },
      ],
    },
    howItWorksSteps: [
      'Vytvoříš firmu',
      'Přidáš pracovníky',
      'Přidáš zákazníka',
      'Vytvoříš zakázku',
      'Přiřadíš pracovníky',
      'Pracovník vidí práci v mobilu',
      'Nahraje fotky a čas',
      'Admin zkontroluje výsledek',
      'Zakázka se uzavře',
      'Vidíš přehled práce a nákladů',
    ],
    industriesPage: {
      eyebrow: 'Obory',
      title: 'Diriqo není jen pro jednu oblast.',
      text: 'Hodí se všude, kde se práce plánuje, dělá v terénu a potřebuje fotky, čas, lidi a přehled.',
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
          { title: 'Analytika', text: 'Pokud bude zapnuté měření návštěvnosti, použijeme ho pro zlepšování webu.' },
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
      howItWorks: { title: 'How Diriqo works - a simple guide', description: 'From company setup to workers, customers, jobs, photos, time and work overview.' },
      pricing: { title: 'Diriqo Pricing - simple price by team size', description: 'Starter, Growth, Business, Scale, Enterprise and Custom plans by number of workers.' },
      industries: { title: 'Who Diriqo is for - cleaning, service, installation and facility teams', description: 'Diriqo helps field teams in cleaning, service, installation, construction and facility management.' },
      demo: { title: 'Diriqo Demo - job management preview', description: 'A preview of the basic Diriqo flow: dashboard, job, mobile app, photos and worker time.' },
      contact: { title: 'Contact Diriqo', description: 'Contact Diriqo about a trial, setup, website, customer portal or product questions.' },
      privacy: { title: 'Diriqo Privacy Policy', description: 'Basic information about personal data processing on the Diriqo website.' },
      terms: { title: 'Diriqo Terms', description: 'Basic terms for the Diriqo website and services.' },
      cookies: { title: 'Diriqo Cookies', description: 'Information about cookies on the public Diriqo website.' },
    },
    common: { login: 'Sign in', trial: 'Start free trial', demo: 'View demo', createAccount: 'Create account', openMenu: 'Open menu', closeMenu: 'Close menu', popular: 'Popular', notReady: 'Demo mode is coming soon.' },
    navLinks: nav(['Features', 'How it works', 'Pricing', 'Industries', 'Demo', 'Contact']),
    legalLinks: legal(['Privacy', 'Terms', 'Cookies']),
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
    industries: ['Cleaning companies', 'Service companies', 'Installations', 'Construction crews', 'Facility management', 'Small operations teams'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ month', people: 'Up to 5 people', description: 'For small teams and new companies.', features: ['jobs', 'customers', 'workers', 'mobile app', 'photos', 'basic overview'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ month', people: '6-15 people', description: 'For companies that need clear control of people and work.', featured: true, features: ['everything in Starter', 'calendar', 'work records', 'job costs', 'better overviews'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ month', people: '16-30 people', description: 'For larger operations teams.', features: ['everything in Growth', 'more admins', 'extended statistics', 'higher limits', 'better operations overview'] },
      { name: 'Enterprise', price: 'Custom', people: 'Over 30 people', description: 'For larger teams and specific operations.', features: ['custom agreement', 'onboarding', 'larger teams', 'specific needs'] },
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
    howPage: { eyebrow: 'How it works', title: 'From customer to finished job without extra noise.', text: 'You quickly understand where to start and what happens next.', cards: [{ title: 'Worker knows where to go', text: 'They see work, address, notes and date on mobile.' }, { title: 'Photos stay with the job', text: 'Before/after photos are saved to the job, not to chat.' }, { title: 'Admin has a calmer day', text: 'They see job status, time and costs without calling everyone.' }] },
    howItWorksSteps: ['Create a company', 'Add workers', 'Add a customer', 'Create a job', 'Assign workers', 'Worker sees work on mobile', 'Uploads photos and time', 'Admin checks the result', 'Job is closed', 'You see work and cost overview'],
    industriesPage: { eyebrow: 'Industries', title: 'Diriqo is not just for one industry.', text: 'It fits any work that is planned, done in the field and needs photos, time, people and overview.' },
    industryDetails: [
      { title: 'Cleaning companies', text: 'Many jobs per day, before/after photos and customers who want proof.', points: ['before/after photos', 'work checks', 'attendance', 'many jobs per day', 'proof for customer'] },
      { title: 'Service companies', text: 'Field technicians need clear dates, addresses and work history.', points: ['field technicians', 'appointments', 'customers', 'work history'] },
      { title: 'Installation companies', text: 'People planning, job status and photo documentation without chat chaos.', points: ['people planning', 'materials and costs', 'job status', 'photo documentation'] },
      { title: 'Construction and finishing work', text: 'Jobs run for several days, with more people and handover photos.', points: ['multiple days', 'multiple people', 'work progress', 'handover photos'] },
      { title: 'Facility management', text: 'Recurring work, customer requests and checks that work is done.', points: ['recurring work', 'customer requests', 'completion checks'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'See the basic flow.', text: 'Demo mode is coming soon. For now, create a test account and see how Diriqo handles jobs, people, photos and time.', samplesTitle: 'Previews', dashboardTitle: 'Owner dashboard', dashboardText: 'Today’s jobs, people, hours and rough result.', mobileTitle: 'Worker mobile app', mobileText: 'Work on mobile, photos and time without complex training.' },
    contactPage: { eyebrow: 'Contact', title: 'Tell us what you need to manage.', text: 'We will get back to you about Diriqo trial, company setup or the Website & Customer Portal add-on.', setupTitle: 'I want help with setup', setupText: 'Describe your company, team size and type of work. We will suggest a simple start.', support: 'Support', form: { name: 'Name', email: 'E-mail', company: 'Company', message: 'Message', submit: 'Send' } },
    legal: {
      eyebrow: 'Legal information',
      privacy: { title: 'Privacy Policy', intro: 'This page describes the basic principles of data handling on the public Diriqo website.', sections: [{ title: 'Data we may process', text: 'If you fill in the contact form, we may process your name, e-mail, company name and message.' }, { title: 'Why we use data', text: 'We use data for communication, offer preparation, support and basic website operation.' }, { title: 'Contact', text: `Questions about personal data: ${contactEmail}.` }] },
      terms: { title: 'Terms', intro: 'This page is a basic working version of terms for the public Diriqo website.', sections: [{ title: 'Service', text: 'Diriqo is a SaaS system for jobs, workers, photos, hours, customers and rough cost overview.' }, { title: 'Prices', text: 'Website prices are indicative and may vary by scope, team size or additional needs.' }, { title: 'Additional services', text: 'Website & Customer Portal can include a company website, inquiry forms, customer portal and branding.' }, { title: 'Contact', text: `Questions about terms: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies help the website work and may be used for basic traffic measurement.', sections: [{ title: 'Necessary cookies', text: 'These cookies help the technical operation, security and loading of pages.' }, { title: 'Analytics', text: 'If analytics is enabled, we use it to improve the website.' }, { title: 'Contact', text: `Questions about cookies: ${contactEmail}.` }] },
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
      howItWorks: { title: 'So funktioniert Diriqo - einfache Anleitung', description: 'Von Firma und Mitarbeitern bis zu Kunden, Aufträgen, Fotos, Zeit und Überblick.' },
      pricing: { title: 'Diriqo Preise - einfache Preise nach Teamgröße', description: 'Starter, Growth, Scale und Enterprise nach Anzahl der Personen.' },
      industries: { title: 'Für wen ist Diriqo - Reinigung, Service, Montage und Objektbetreuung', description: 'Diriqo hilft Teams im Außendienst und vor Ort.' },
      demo: { title: 'Diriqo Demo - Vorschau des Systems', description: 'Vorschau auf Dashboard, Auftrag, mobile App, Fotos und Arbeitszeit.' },
      contact: { title: 'Kontakt Diriqo', description: 'Kontaktiere Diriqo für Testzugang, Einrichtung, Website, Kundenportal oder Fragen.' },
      privacy: { title: 'Diriqo Datenschutz', description: 'Grundlegende Informationen zur Verarbeitung personenbezogener Daten.' },
      terms: { title: 'Diriqo Geschäftsbedingungen', description: 'Grundlegende Bedingungen für Website und Services von Diriqo.' },
      cookies: { title: 'Diriqo Cookies', description: 'Informationen zu Cookies auf der öffentlichen Diriqo Website.' },
    },
    common: { login: 'Anmelden', trial: 'Kostenlos testen', demo: 'Demo starten', createAccount: 'Konto erstellen', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', popular: 'Beliebt', notReady: 'Der Demo-Modus ist in Vorbereitung.' },
    navLinks: nav(['Funktionen', 'So funktioniert es', 'Preise', 'Branchen', 'Demo', 'Kontakt']),
    legalLinks: legal(['Datenschutz', 'Bedingungen', 'Cookies']),
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
    industries: ['Reinigungsfirmen', 'Servicefirmen', 'Montage', 'Bauteams', 'Objektbetreuung', 'Kleine Betriebsteams'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ Monat', people: 'Bis 5 Personen', description: 'Für kleine Teams und junge Firmen.', features: ['Aufträge', 'Kunden', 'Mitarbeiter', 'mobile App', 'Fotos', 'Basisüberblick'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ Monat', people: '6-15 Personen', description: 'Für Firmen, die Menschen und Arbeit klar steuern müssen.', featured: true, features: ['alles aus Starter', 'Kalender', 'Arbeitsnachweise', 'Auftragskosten', 'bessere Übersichten'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ Monat', people: '16-30 Personen', description: 'Für größere operative Teams.', features: ['alles aus Growth', 'mehr Admins', 'erweiterte Statistiken', 'höhere Limits', 'besserer Betriebsüberblick'] },
      { name: 'Enterprise', price: 'Individuell', people: 'Über 30 Personen', description: 'Für größere Teams und besondere Abläufe.', features: ['individuelle Vereinbarung', 'Onboarding', 'größere Teams', 'spezifische Anforderungen'] },
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
    howPage: { eyebrow: 'So funktioniert es', title: 'Vom Kunden bis zum fertigen Auftrag ohne Ballast.', text: 'Du verstehst schnell, womit du startest und was danach passiert.', cards: [{ title: 'Mitarbeiter weiß, wohin', text: 'Mobil sieht er Arbeit, Adresse, Notizen und Termin.' }, { title: 'Fotos bleiben beim Auftrag', text: 'Vorher/Nachher-Fotos landen nicht im Chat.' }, { title: 'Admin hat mehr Ruhe', text: 'Status, Zeit und Kosten sind sichtbar.' }] },
    howItWorksSteps: ['Firma erstellen', 'Mitarbeiter hinzufügen', 'Kunden hinzufügen', 'Auftrag erstellen', 'Mitarbeiter zuweisen', 'Mitarbeiter sieht Arbeit mobil', 'Fotos und Zeit hochladen', 'Admin prüft Ergebnis', 'Auftrag schließen', 'Überblick über Arbeit und Kosten sehen'],
    industriesPage: { eyebrow: 'Branchen', title: 'Diriqo ist nicht nur für eine Branche.', text: 'Es passt überall, wo Arbeit geplant, vor Ort erledigt und mit Fotos, Zeit und Menschen gesteuert wird.' },
    industryDetails: [
      { title: 'Reinigungsfirmen', text: 'Viele Jobs am Tag, Vorher/Nachher-Fotos und Kunden, die Nachweise wollen.', points: ['Vorher/Nachher-Fotos', 'Kontrolle', 'Anwesenheit', 'viele Jobs pro Tag', 'Nachweis'] },
      { title: 'Servicefirmen', text: 'Techniker brauchen klare Termine, Adressen und Verlauf.', points: ['Techniker', 'Termine', 'Kunden', 'Arbeitsverlauf'] },
      { title: 'Montagefirmen', text: 'Planung, Auftragsstatus und Fotodokumentation ohne Chat-Chaos.', points: ['Planung', 'Material und Kosten', 'Status', 'Fotos'] },
      { title: 'Bau und Ausbau', text: 'Mehrere Tage, mehrere Menschen und Fotos zur Übergabe.', points: ['mehrere Tage', 'mehrere Menschen', 'Fortschritt', 'Übergabefotos'] },
      { title: 'Objektbetreuung', text: 'Wiederkehrende Arbeiten, Kundenanforderungen und Abschlusskontrolle.', points: ['wiederkehrende Arbeit', 'Kundenanfragen', 'Kontrolle'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'Sieh dir den Grundablauf an.', text: 'Der Demo-Modus ist in Vorbereitung. Bis dahin kannst du ein Testkonto erstellen und Diriqo ausprobieren.', samplesTitle: 'Vorschau', dashboardTitle: 'Dashboard des Inhabers', dashboardText: 'Heutige Aufträge, Menschen, Stunden und grobes Ergebnis.', mobileTitle: 'Mobile App für Mitarbeiter', mobileText: 'Arbeit, Fotos und Zeit mobil ohne komplizierte Schulung.' },
    contactPage: { eyebrow: 'Kontakt', title: 'Sag uns, was du steuern willst.', text: 'Wir melden uns zum Test, zur Einrichtung oder zum Website & Customer Portal Add-on.', setupTitle: 'Ich möchte Hilfe beim Start', setupText: 'Beschreibe Firma, Teamgröße und Art der Arbeit. Wir schlagen einen einfachen Start vor.', support: 'Support', form: { name: 'Name', email: 'E-Mail', company: 'Firma', message: 'Nachricht', submit: 'Senden' } },
    legal: {
      eyebrow: 'Rechtliche Informationen',
      privacy: { title: 'Datenschutz', intro: 'Diese Seite beschreibt Grundsätze zur Verarbeitung von Daten auf der öffentlichen Diriqo Website.', sections: [{ title: 'Welche Daten wir verarbeiten können', text: 'Beim Kontaktformular können Name, E-Mail, Firma und Nachricht verarbeitet werden.' }, { title: 'Warum wir Daten nutzen', text: 'Wir nutzen Daten für Kommunikation, Angebote, Support und Websitebetrieb.' }, { title: 'Kontakt', text: `Fragen zu personenbezogenen Daten: ${contactEmail}.` }] },
      terms: { title: 'Geschäftsbedingungen', intro: 'Dies ist eine Arbeitsversion der Bedingungen für die öffentliche Diriqo Website.', sections: [{ title: 'Service', text: 'Diriqo ist ein SaaS-System für Aufträge, Mitarbeiter, Fotos, Stunden, Kunden und Kostenüberblick.' }, { title: 'Preise', text: 'Preise sind Richtwerte und können je nach Umfang variieren.' }, { title: 'Zusatzleistungen', text: 'Website & Customer Portal kann Website, Formulare, Kundenportal und Branding enthalten.' }, { title: 'Kontakt', text: `Fragen zu Bedingungen: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies helfen beim Betrieb der Website und können zur einfachen Analyse dienen.', sections: [{ title: 'Notwendige Cookies', text: 'Sie unterstützen Technik, Sicherheit und Laden der Seiten.' }, { title: 'Analyse', text: 'Wenn Analyse aktiv ist, nutzen wir sie zur Verbesserung der Website.' }, { title: 'Kontakt', text: `Fragen zu Cookies: ${contactEmail}.` }] },
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
      howItWorks: { title: 'Jak działa Diriqo - prosty przewodnik', description: 'Od firmy i pracowników do klienta, zlecenia, zdjęć, czasu i przeglądu pracy.' },
      pricing: { title: 'Cennik Diriqo - prosta cena według wielkości zespołu', description: 'Plany Starter, Growth, Scale i Enterprise według liczby osób.' },
      industries: { title: 'Dla kogo jest Diriqo - sprzątanie, serwis, montaże i obsługa obiektów', description: 'Diriqo pomaga firmom pracującym w terenie.' },
      demo: { title: 'Demo Diriqo - podgląd systemu', description: 'Podgląd flow: dashboard, zlecenie, aplikacja mobilna, zdjęcia i czas.' },
      contact: { title: 'Kontakt Diriqo', description: 'Skontaktuj się w sprawie testu, konfiguracji, strony, portalu klienta lub pytań.' },
      privacy: { title: 'Prywatność Diriqo', description: 'Podstawowe informacje o danych osobowych na stronie Diriqo.' },
      terms: { title: 'Regulamin Diriqo', description: 'Podstawowe warunki dla strony i usług Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informacje o cookies na publicznej stronie Diriqo.' },
    },
    common: { login: 'Logowanie', trial: 'Zacznij za darmo', demo: 'Uruchom demo', createAccount: 'Utwórz konto', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', popular: 'Popularne', notReady: 'Tryb demo jest w przygotowaniu.' },
    navLinks: nav(['Funkcje', 'Jak to działa', 'Cennik', 'Branże', 'Demo', 'Kontakt']),
    legalLinks: legal(['Prywatność', 'Regulamin', 'Cookies']),
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
    industries: ['Firmy sprzątające', 'Firmy serwisowe', 'Montaże', 'Ekipy budowlane', 'Obsługa obiektów', 'Małe zespoły operacyjne'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ miesiąc', people: 'Do 5 osób', description: 'Dla małych zespołów i nowych firm.', features: ['zlecenia', 'klienci', 'pracownicy', 'aplikacja mobilna', 'zdjęcia', 'podstawowy przegląd'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ miesiąc', people: '6-15 osób', description: 'Dla firm, które muszą jasno prowadzić ludzi i pracę.', featured: true, features: ['wszystko ze Starter', 'kalendarz', 'ewidencja pracy', 'koszty zleceń', 'lepsze przeglądy'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ miesiąc', people: '16-30 osób', description: 'Dla większych zespołów operacyjnych.', features: ['wszystko z Growth', 'więcej adminów', 'rozszerzone statystyki', 'wyższe limity', 'lepszy przegląd operacji'] },
      { name: 'Enterprise', price: 'Indywidualnie', people: 'Powyżej 30 osób', description: 'Dla większych zespołów i specyficznych procesów.', features: ['indywidualne ustalenia', 'onboarding', 'większe zespoły', 'specyficzne wymagania'] },
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
    howPage: { eyebrow: 'Jak to działa', title: 'Od klienta do zamkniętego zlecenia bez zbędnych kroków.', text: 'Szybko rozumiesz, od czego zacząć i co dzieje się dalej.', cards: [{ title: 'Pracownik wie, dokąd jechać', text: 'W telefonie widzi pracę, adres, notatki i termin.' }, { title: 'Zdjęcia są przy pracy', text: 'Zdjęcia przed/po zapisują się do zlecenia.' }, { title: 'Admin ma spokojniejszy dzień', text: 'Widoczny jest status, czas i koszty bez telefonów.' }] },
    howItWorksSteps: ['Tworzysz firmę', 'Dodajesz pracowników', 'Dodajesz klienta', 'Tworzysz zlecenie', 'Przypisujesz pracowników', 'Pracownik widzi pracę w telefonie', 'Dodaje zdjęcia i czas', 'Admin sprawdza wynik', 'Zlecenie się zamyka', 'Widzisz pracę i koszty'],
    industriesPage: { eyebrow: 'Branże', title: 'Diriqo nie jest tylko dla jednej branży.', text: 'Pasuje tam, gdzie praca jest planowana, wykonywana w terenie i potrzebuje zdjęć, czasu, ludzi i przeglądu.' },
    industryDetails: [
      { title: 'Firmy sprzątające', text: 'Wiele zleceń dziennie, zdjęcia przed/po i klient, który chce dowód.', points: ['zdjęcia przed/po', 'kontrola pracy', 'obecność', 'wiele zleceń', 'dowód dla klienta'] },
      { title: 'Firmy serwisowe', text: 'Technicy w terenie potrzebują terminów, adresów i historii.', points: ['technicy', 'terminy', 'klienci', 'historia prac'] },
      { title: 'Firmy montażowe', text: 'Planowanie ludzi, status zlecenia i dokumentacja bez chaosu w czacie.', points: ['planowanie', 'materiał i koszty', 'status', 'zdjęcia'] },
      { title: 'Budowa i wykończenia', text: 'Prace trwają kilka dni, z wieloma ludźmi i zdjęciami odbioru.', points: ['wiele dni', 'wiele osób', 'postęp', 'zdjęcia odbioru'] },
      { title: 'Obsługa obiektów', text: 'Prace cykliczne, zgłoszenia klientów i kontrola wykonania.', points: ['prace cykliczne', 'zgłoszenia', 'kontrola'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'Zobacz podstawowe flow.', text: 'Tryb demo jest w przygotowaniu. Na razie możesz utworzyć konto testowe i przejść przez zlecenia, ludzi, zdjęcia i czas.', samplesTitle: 'Podglądy', dashboardTitle: 'Dashboard właściciela', dashboardText: 'Dzisiejsze zlecenia, ludzie, godziny i orientacyjny wynik.', mobileTitle: 'Telefon pracownika', mobileText: 'Praca, zdjęcia i czas bez skomplikowanego szkolenia.' },
    contactPage: { eyebrow: 'Kontakt', title: 'Napisz, czym chcesz zarządzać.', text: 'Odezwiemy się w sprawie testu Diriqo, konfiguracji firmy lub dodatku Website & Customer Portal.', setupTitle: 'Chcę pomoc w konfiguracji', setupText: 'Opisz firmę, liczbę osób i typ pracy. Zaproponujemy prosty start.', support: 'Wsparcie', form: { name: 'Imię', email: 'E-mail', company: 'Firma', message: 'Wiadomość', submit: 'Wyślij' } },
    legal: {
      eyebrow: 'Informacje prawne',
      privacy: { title: 'Prywatność', intro: 'Ta strona opisuje podstawowe zasady pracy z danymi na publicznej stronie Diriqo.', sections: [{ title: 'Jakie dane możemy przetwarzać', text: 'Przy formularzu kontaktowym możemy przetwarzać imię, e-mail, firmę i wiadomość.' }, { title: 'Dlaczego używamy danych', text: 'Dane służą do komunikacji, oferty, wsparcia i działania strony.' }, { title: 'Kontakt', text: `Pytania o dane osobowe: ${contactEmail}.` }] },
      terms: { title: 'Regulamin', intro: 'To podstawowa wersja robocza warunków dla publicznej strony Diriqo.', sections: [{ title: 'Usługa', text: 'Diriqo to system SaaS do zleceń, pracowników, zdjęć, godzin, klientów i kosztów.' }, { title: 'Ceny', text: 'Ceny są orientacyjne i mogą zależeć od zakresu oraz potrzeb.' }, { title: 'Usługi dodatkowe', text: 'Website & Customer Portal może obejmować stronę, formularze, portal klienta i branding.' }, { title: 'Kontakt', text: `Pytania o warunki: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Cookies pomagają stronie działać i mogą służyć do podstawowej analityki.', sections: [{ title: 'Niezbędne cookies', text: 'Pomagają w technicznym działaniu, bezpieczeństwie i ładowaniu stron.' }, { title: 'Analityka', text: 'Jeśli analityka będzie włączona, użyjemy jej do ulepszania strony.' }, { title: 'Kontakt', text: `Pytania o cookies: ${contactEmail}.` }] },
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
      howItWorks: { title: 'Így működik a Diriqo - egyszerű útmutató', description: 'Cég, dolgozók, ügyfél, munka, fotók, idő és áttekintés.' },
      pricing: { title: 'Diriqo árak - egyszerű ár csapatméret alapján', description: 'Starter, Growth, Scale és Enterprise csomagok létszám szerint.' },
      industries: { title: 'Kinek való a Diriqo - takarítás, szerviz, szerelés és üzemeltetés', description: 'Diriqo terepen dolgozó csapatoknak.' },
      demo: { title: 'Diriqo demo - rendszerbemutató', description: 'Alap flow: dashboard, munka, mobil app, fotók és munkaidő.' },
      contact: { title: 'Diriqo kapcsolat', description: 'Keress minket próba, beállítás, weboldal, ügyfélportál vagy kérdések miatt.' },
      privacy: { title: 'Diriqo adatvédelem', description: 'Alap információk a személyes adatok kezeléséről.' },
      terms: { title: 'Diriqo feltételek', description: 'Alap feltételek a Diriqo weboldalhoz és szolgáltatásokhoz.' },
      cookies: { title: 'Diriqo cookies', description: 'Információk a cookies használatáról.' },
    },
    common: { login: 'Belépés', trial: 'Ingyenes próba', demo: 'Demo indítása', createAccount: 'Fiók létrehozása', openMenu: 'Menü megnyitása', closeMenu: 'Menü bezárása', popular: 'Népszerű', notReady: 'A demo mód készül.' },
    navLinks: nav(['Funkciók', 'Hogyan működik', 'Árak', 'Ágazatok', 'Demo', 'Kapcsolat']),
    legalLinks: legal(['Adatvédelem', 'Feltételek', 'Cookies']),
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
    industries: ['Takarító cégek', 'Szerviz cégek', 'Szerelések', 'Építő csapatok', 'Létesítményüzemeltetés', 'Kis operatív csapatok'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ hónap', people: 'Legfeljebb 5 fő', description: 'Kis csapatoknak és induló cégeknek.', features: ['munkák', 'ügyfelek', 'dolgozók', 'mobil app', 'fotók', 'alap áttekintés'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ hónap', people: '6-15 fő', description: 'Cégeknek, amelyeknek tisztán kell irányítaniuk embereket és munkát.', featured: true, features: ['minden a Starterből', 'naptár', 'munkaidő nyilvántartás', 'munkaköltségek', 'jobb áttekintések'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ hónap', people: '16-30 fő', description: 'Nagyobb operatív csapatoknak.', features: ['minden a Growthból', 'több admin', 'bővített statisztikák', 'magasabb limitek', 'jobb működési áttekintés'] },
      { name: 'Enterprise', price: 'Egyedi', people: '30 fő felett', description: 'Nagyobb csapatoknak és speciális igényekhez.', features: ['egyedi megállapodás', 'onboarding', 'nagyobb csapatok', 'speciális követelmények'] },
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
    howPage: { eyebrow: 'Hogyan működik', title: 'Ügyféltől lezárt munkáig felesleges körök nélkül.', text: 'Gyorsan látod, hol kezdd és mi jön utána.', cards: [{ title: 'A dolgozó tudja, hová menjen', text: 'Mobilon látja a munkát, címet, jegyzetet és időpontot.' }, { title: 'Fotók a munkánál maradnak', text: 'Előtte/utána fotók a munkához mentődnek.' }, { title: 'Az admin napja nyugodtabb', text: 'Státusz, idő és költség látható hívogatás nélkül.' }] },
    howItWorksSteps: ['Cég létrehozása', 'Dolgozók hozzáadása', 'Ügyfél hozzáadása', 'Munka létrehozása', 'Dolgozók hozzárendelése', 'Dolgozó mobilon látja a munkát', 'Fotókat és időt tölt fel', 'Admin ellenőrzi', 'Munka lezárása', 'Áttekintés munka és költségek szerint'],
    industriesPage: { eyebrow: 'Ágazatok', title: 'A Diriqo nem csak egy területre való.', text: 'Mindenhol működik, ahol a munkát tervezni, terepen elvégezni és fotókkal, idővel, emberekkel követni kell.' },
    industryDetails: [
      { title: 'Takarító cégek', text: 'Sok napi munka, előtte/utána fotók és ügyfél, aki bizonyítékot kér.', points: ['előtte/utána fotók', 'ellenőrzés', 'jelenlét', 'sok napi munka', 'bizonyíték'] },
      { title: 'Szerviz cégek', text: 'Terepi technikusoknak egyértelmű időpont, cím és előzmény kell.', points: ['technikusok', 'időpontok', 'ügyfelek', 'előzmények'] },
      { title: 'Szerelő cégek', text: 'Embertervezés, munkaállapot és fotódokumentáció chat-káosz nélkül.', points: ['tervezés', 'anyag és költség', 'állapot', 'fotók'] },
      { title: 'Építés és befejező munkák', text: 'Több napos munkák, több ember és átadási fotók.', points: ['több nap', 'több ember', 'haladás', 'átadási fotók'] },
      { title: 'Létesítményüzemeltetés', text: 'Ismétlődő munkák, ügyfélkérések és teljesítés ellenőrzése.', points: ['ismétlődő munka', 'ügyfélkérések', 'ellenőrzés'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'Nézd meg az alap flow-t.', text: 'A demo mód készül. Addig létrehozhatsz tesztfiókot, és megnézheted a munkákat, embereket, fotókat és időt.', samplesTitle: 'Előnézetek', dashboardTitle: 'Tulajdonosi dashboard', dashboardText: 'Mai munkák, emberek, órák és durva eredmény.', mobileTitle: 'Dolgozói mobil', mobileText: 'Munka mobilon, fotók és idő bonyolult oktatás nélkül.' },
    contactPage: { eyebrow: 'Kapcsolat', title: 'Írd meg, mit szeretnél kezelni.', text: 'Visszajelzünk a Diriqo próbával, cégbeállítással vagy Website & Customer Portal add-onnal kapcsolatban.', setupTitle: 'Segítséget kérek a beállításhoz', setupText: 'Írd le a céget, létszámot és munkatípust. Javaslunk egyszerű indulást.', support: 'Támogatás', form: { name: 'Név', email: 'E-mail', company: 'Cég', message: 'Üzenet', submit: 'Küldés' } },
    legal: {
      eyebrow: 'Jogi információk',
      privacy: { title: 'Adatvédelem', intro: 'Ez az oldal a Diriqo nyilvános weboldalán történő adatkezelés alapelveit írja le.', sections: [{ title: 'Milyen adatokat kezelhetünk', text: 'Kapcsolati űrlap esetén név, e-mail, cégnév és üzenet kezelhető.' }, { title: 'Miért használjuk az adatokat', text: 'Kommunikációhoz, ajánlatkészítéshez, támogatáshoz és weboldal működéséhez.' }, { title: 'Kapcsolat', text: `Személyes adatokkal kapcsolatos kérdések: ${contactEmail}.` }] },
      terms: { title: 'Feltételek', intro: 'Ez a Diriqo nyilvános weboldal feltételeinek alap munkaverziója.', sections: [{ title: 'Szolgáltatás', text: 'A Diriqo SaaS rendszer munkákhoz, dolgozókhoz, fotókhoz, órákhoz, ügyfelekhez és költségekhez.' }, { title: 'Árak', text: 'Az árak tájékoztató jellegűek, és a terjedelemtől függhetnek.' }, { title: 'Kiegészítő szolgáltatások', text: 'A Website & Customer Portal weboldalt, űrlapokat, ügyfélportált és brandinget tartalmazhat.' }, { title: 'Kapcsolat', text: `Feltételekkel kapcsolatos kérdések: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'A cookies segítik a weboldal működését és alap analitikát szolgálhatnak.', sections: [{ title: 'Szükséges cookies', text: 'Technikai működéshez, biztonsághoz és oldalletöltéshez kellenek.' }, { title: 'Analitika', text: 'Ha be van kapcsolva, a weboldal javítására használjuk.' }, { title: 'Kapcsolat', text: `Cookies kérdések: ${contactEmail}.` }] },
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
      howItWorks: { title: 'Cómo funciona Diriqo - guía sencilla', description: 'Desde la empresa y empleados hasta clientes, trabajos, fotos, tiempo y control.' },
      pricing: { title: 'Precios de Diriqo - precio simple por tamaño de equipo', description: 'Planes Starter, Growth, Scale y Enterprise por número de personas.' },
      industries: { title: 'Para quién es Diriqo - limpieza, servicio, montajes y mantenimiento', description: 'Diriqo ayuda a equipos que trabajan en campo.' },
      demo: { title: 'Demo de Diriqo - vista del sistema', description: 'Vista del flujo básico: dashboard, trabajo, app móvil, fotos y tiempo.' },
      contact: { title: 'Contacto Diriqo', description: 'Contacta con Diriqo para prueba, configuración, web, portal de clientes o preguntas.' },
      privacy: { title: 'Privacidad Diriqo', description: 'Información básica sobre datos personales en la web de Diriqo.' },
      terms: { title: 'Condiciones Diriqo', description: 'Condiciones básicas para la web y servicios Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Información sobre cookies en la web pública de Diriqo.' },
    },
    common: { login: 'Iniciar sesión', trial: 'Probar gratis', demo: 'Abrir demo', createAccount: 'Crear cuenta', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', popular: 'Popular', notReady: 'El modo demo está en preparación.' },
    navLinks: nav(['Funciones', 'Cómo funciona', 'Precios', 'Sectores', 'Demo', 'Contacto']),
    legalLinks: legal(['Privacidad', 'Condiciones', 'Cookies']),
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
    industries: ['Empresas de limpieza', 'Empresas de servicio', 'Montajes', 'Equipos de obra', 'Mantenimiento de inmuebles', 'Pequeños equipos operativos'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mes', people: 'Hasta 5 personas', description: 'Para equipos pequeños y empresas que empiezan.', features: ['trabajos', 'clientes', 'empleados', 'app móvil', 'fotos', 'vista básica'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mes', people: '6-15 personas', description: 'Para empresas que necesitan controlar personas y trabajo.', featured: true, features: ['todo Starter', 'calendario', 'registro de trabajo', 'costes de trabajos', 'mejores vistas'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mes', people: '16-30 personas', description: 'Para equipos operativos más grandes.', features: ['todo Growth', 'más admins', 'estadísticas ampliadas', 'límites mayores', 'mejor vista operativa'] },
      { name: 'Enterprise', price: 'A medida', people: 'Más de 30 personas', description: 'Para equipos grandes y necesidades específicas.', features: ['acuerdo individual', 'onboarding', 'equipos grandes', 'requisitos específicos'] },
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
    howPage: { eyebrow: 'Cómo funciona', title: 'Del cliente al trabajo cerrado sin pasos inútiles.', text: 'Entiendes rápido por dónde empezar y qué sigue.', cards: [{ title: 'El empleado sabe dónde ir', text: 'Ve trabajo, dirección, notas y fecha en el móvil.' }, { title: 'Las fotos quedan con el trabajo', text: 'Fotos antes/después se guardan en la ficha.' }, { title: 'El admin tiene un día más tranquilo', text: 'Estado, tiempo y costes visibles sin llamar.' }] },
    howItWorksSteps: ['Creas la empresa', 'Añades empleados', 'Añades cliente', 'Creas trabajo', 'Asignas empleados', 'Empleado ve el trabajo en móvil', 'Sube fotos y tiempo', 'Admin revisa resultado', 'Trabajo se cierra', 'Ves trabajo y costes'],
    industriesPage: { eyebrow: 'Sectores', title: 'Diriqo no es solo para un sector.', text: 'Encaja donde el trabajo se planifica, se hace en campo y necesita fotos, tiempo, personas y control.' },
    industryDetails: [
      { title: 'Empresas de limpieza', text: 'Muchos trabajos al día, fotos antes/después y cliente que quiere prueba.', points: ['fotos antes/después', 'control de trabajo', 'asistencia', 'muchos trabajos', 'prueba para cliente'] },
      { title: 'Empresas de servicio', text: 'Técnicos en campo necesitan fechas, direcciones e historial.', points: ['técnicos', 'citas', 'clientes', 'historial'] },
      { title: 'Empresas de montaje', text: 'Planificación de personas, estado y fotos sin caos de chat.', points: ['planificación', 'material y costes', 'estado', 'fotos'] },
      { title: 'Construcción y acabados', text: 'Trabajos de varios días, más personas y fotos de entrega.', points: ['varios días', 'varias personas', 'progreso', 'fotos de entrega'] },
      { title: 'Mantenimiento de inmuebles', text: 'Trabajos repetidos, solicitudes de clientes y control de finalización.', points: ['trabajo recurrente', 'solicitudes', 'control'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'Mira el flujo básico.', text: 'El modo demo está en preparación. Mientras tanto puedes crear una cuenta de prueba y ver trabajos, personas, fotos y tiempo.', samplesTitle: 'Vistas', dashboardTitle: 'Dashboard del dueño', dashboardText: 'Trabajos de hoy, personas, horas y resultado aproximado.', mobileTitle: 'Móvil del empleado', mobileText: 'Trabajo, fotos y tiempo sin formación compleja.' },
    contactPage: { eyebrow: 'Contacto', title: 'Cuéntanos qué necesitas gestionar.', text: 'Te responderemos sobre prueba, configuración o el add-on Website & Customer Portal.', setupTitle: 'Quiero ayuda con la configuración', setupText: 'Describe tu empresa, número de personas y tipo de trabajo. Te propondremos un inicio simple.', support: 'Soporte', form: { name: 'Nombre', email: 'E-mail', company: 'Empresa', message: 'Mensaje', submit: 'Enviar' } },
    legal: {
      eyebrow: 'Información legal',
      privacy: { title: 'Privacidad', intro: 'Esta página describe los principios básicos de gestión de datos en la web pública de Diriqo.', sections: [{ title: 'Qué datos podemos procesar', text: 'Al enviar el formulario podemos procesar nombre, e-mail, empresa y mensaje.' }, { title: 'Por qué usamos datos', text: 'Para comunicación, preparación de oferta, soporte y funcionamiento de la web.' }, { title: 'Contacto', text: `Preguntas sobre datos personales: ${contactEmail}.` }] },
      terms: { title: 'Condiciones', intro: 'Esta es una versión básica de trabajo de las condiciones de la web pública de Diriqo.', sections: [{ title: 'Servicio', text: 'Diriqo es un sistema SaaS para trabajos, empleados, fotos, horas, clientes y costes.' }, { title: 'Precios', text: 'Los precios son orientativos y pueden variar según alcance y necesidades.' }, { title: 'Servicios adicionales', text: 'Website & Customer Portal puede incluir web, formularios, portal y branding.' }, { title: 'Contacto', text: `Preguntas sobre condiciones: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Las cookies ayudan a que la web funcione y pueden usarse para analítica básica.', sections: [{ title: 'Cookies necesarias', text: 'Ayudan al funcionamiento técnico, seguridad y carga de páginas.' }, { title: 'Analítica', text: 'Si está activada, la usamos para mejorar la web.' }, { title: 'Contacto', text: `Preguntas sobre cookies: ${contactEmail}.` }] },
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
      howItWorks: { title: 'Come funziona Diriqo - guida semplice', description: 'Da azienda e operatori a clienti, lavori, foto, tempo e controllo.' },
      pricing: { title: 'Prezzi Diriqo - prezzo semplice per dimensione team', description: 'Piani Starter, Growth, Scale ed Enterprise per numero di persone.' },
      industries: { title: 'Per chi è Diriqo - pulizie, service, installazioni e facility', description: 'Diriqo aiuta team che lavorano sul campo.' },
      demo: { title: 'Demo Diriqo - anteprima del sistema', description: 'Anteprima del flow: dashboard, lavoro, app mobile, foto e tempo.' },
      contact: { title: 'Contatto Diriqo', description: 'Contatta Diriqo per prova, configurazione, sito, portale clienti o domande.' },
      privacy: { title: 'Privacy Diriqo', description: 'Informazioni base sul trattamento dei dati personali.' },
      terms: { title: 'Termini Diriqo', description: 'Condizioni base per sito e servizi Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informazioni sui cookies del sito pubblico Diriqo.' },
    },
    common: { login: 'Accedi', trial: 'Prova gratis', demo: 'Avvia demo', createAccount: 'Crea account', openMenu: 'Apri menu', closeMenu: 'Chiudi menu', popular: 'Popolare', notReady: 'La modalità demo è in preparazione.' },
    navLinks: nav(['Funzioni', 'Come funziona', 'Prezzi', 'Settori', 'Demo', 'Contatto']),
    legalLinks: legal(['Privacy', 'Termini', 'Cookies']),
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
    industries: ['Imprese di pulizie', 'Aziende di servizio', 'Installazioni', 'Squadre edili', 'Facility management', 'Piccoli team operativi'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mese', people: 'Fino a 5 persone', description: 'Per piccoli team e aziende che iniziano.', features: ['lavori', 'clienti', 'operatori', 'app mobile', 'foto', 'vista base'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mese', people: '6-15 persone', description: 'Per aziende che devono gestire chiaramente persone e lavoro.', featured: true, features: ['tutto Starter', 'calendario', 'registrazione lavoro', 'costi lavori', 'viste migliori'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mese', people: '16-30 persone', description: 'Per team operativi più grandi.', features: ['tutto Growth', 'più admin', 'statistiche estese', 'limiti più alti', 'migliore controllo operativo'] },
      { name: 'Enterprise', price: 'Su misura', people: 'Oltre 30 persone', description: 'Per team più grandi e requisiti specifici.', features: ['accordo individuale', 'onboarding', 'team grandi', 'esigenze specifiche'] },
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
    howPage: { eyebrow: 'Come funziona', title: 'Dal cliente al lavoro chiuso senza rumore.', text: 'Capisci subito da dove partire e cosa succede dopo.', cards: [{ title: 'L’operatore sa dove andare', text: 'Vede lavoro, indirizzo, note e data sul telefono.' }, { title: 'Le foto restano nel lavoro', text: 'Foto prima/dopo vengono salvate nella scheda.' }, { title: 'L’admin ha una giornata più tranquilla', text: 'Stato, tempo e costi sono visibili senza chiamate.' }] },
    howItWorksSteps: ['Crei l’azienda', 'Aggiungi operatori', 'Aggiungi cliente', 'Crei lavoro', 'Assegni operatori', 'L’operatore vede il lavoro sul mobile', 'Carica foto e tempo', 'Admin controlla risultato', 'Lavoro chiuso', 'Vedi lavoro e costi'],
    industriesPage: { eyebrow: 'Settori', title: 'Diriqo non è solo per un settore.', text: 'Funziona ovunque il lavoro si pianifica, si fa sul campo e richiede foto, tempo, persone e controllo.' },
    industryDetails: [
      { title: 'Imprese di pulizie', text: 'Molti lavori al giorno, foto prima/dopo e clienti che chiedono prova.', points: ['foto prima/dopo', 'controllo', 'presenze', 'molti lavori', 'prova cliente'] },
      { title: 'Aziende di servizio', text: 'Tecnici sul campo hanno bisogno di date, indirizzi e storico.', points: ['tecnici', 'appuntamenti', 'clienti', 'storico'] },
      { title: 'Aziende di installazione', text: 'Pianificazione persone, stato lavoro e foto senza caos in chat.', points: ['pianificazione', 'materiale e costi', 'stato', 'foto'] },
      { title: 'Edilizia e finiture', text: 'Lavori su più giorni, più persone e foto di consegna.', points: ['più giorni', 'più persone', 'progresso', 'foto consegna'] },
      { title: 'Facility management', text: 'Lavori ricorrenti, richieste clienti e controllo completamento.', points: ['lavori ricorrenti', 'richieste', 'controllo'] },
    ],
    demoPage: { eyebrow: 'Demo', title: 'Guarda il flow di base.', text: 'La modalità demo è in preparazione. Per ora puoi creare un account test e vedere lavori, persone, foto e tempo.', samplesTitle: 'Anteprime', dashboardTitle: 'Dashboard titolare', dashboardText: 'Lavori di oggi, persone, ore e risultato indicativo.', mobileTitle: 'Mobile operatore', mobileText: 'Lavoro, foto e tempo senza formazione complessa.' },
    contactPage: { eyebrow: 'Contatto', title: 'Scrivici cosa devi gestire.', text: 'Ti risponderemo per prova Diriqo, configurazione o add-on Website & Customer Portal.', setupTitle: 'Voglio aiuto con la configurazione', setupText: 'Descrivi azienda, numero di persone e tipo di lavoro. Ti proponiamo un avvio semplice.', support: 'Supporto', form: { name: 'Nome', email: 'E-mail', company: 'Azienda', message: 'Messaggio', submit: 'Invia' } },
    legal: {
      eyebrow: 'Informazioni legali',
      privacy: { title: 'Privacy', intro: 'Questa pagina descrive i principi base del trattamento dati sul sito pubblico Diriqo.', sections: [{ title: 'Quali dati possiamo trattare', text: 'Con il modulo contatto possiamo trattare nome, e-mail, azienda e messaggio.' }, { title: 'Perché usiamo i dati', text: 'Per comunicazione, offerta, supporto e funzionamento del sito.' }, { title: 'Contatto', text: `Domande sui dati personali: ${contactEmail}.` }] },
      terms: { title: 'Termini', intro: 'Questa è una versione base delle condizioni per il sito pubblico Diriqo.', sections: [{ title: 'Servizio', text: 'Diriqo è un sistema SaaS per lavori, operatori, foto, ore, clienti e costi.' }, { title: 'Prezzi', text: 'I prezzi sono indicativi e possono variare in base al progetto.' }, { title: 'Servizi aggiuntivi', text: 'Website & Customer Portal può includere sito, moduli, portale clienti e branding.' }, { title: 'Contatto', text: `Domande sui termini: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'I cookies aiutano il sito a funzionare e possono servire per analisi base.', sections: [{ title: 'Cookies necessari', text: 'Aiutano funzionamento tecnico, sicurezza e caricamento pagine.' }, { title: 'Analisi', text: 'Se attiva, la usiamo per migliorare il sito.' }, { title: 'Contatto', text: `Domande sui cookies: ${contactEmail}.` }] },
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
      howItWorks: { title: 'Comment fonctionne Diriqo - guide simple', description: 'De l’entreprise et des équipes au client, intervention, photos, temps et suivi.' },
      pricing: { title: 'Tarifs Diriqo - prix simple selon la taille d’équipe', description: 'Plans Starter, Growth, Scale et Enterprise selon le nombre de personnes.' },
      industries: { title: 'Pour qui est Diriqo - nettoyage, service, installation et facility', description: 'Diriqo aide les équipes qui travaillent sur le terrain.' },
      demo: { title: 'Démo Diriqo - aperçu du système', description: 'Aperçu du flow: dashboard, intervention, app mobile, photos et temps.' },
      contact: { title: 'Contact Diriqo', description: 'Contacte Diriqo pour essai, configuration, site web, portail client ou questions.' },
      privacy: { title: 'Confidentialité Diriqo', description: 'Informations de base sur les données personnelles.' },
      terms: { title: 'Conditions Diriqo', description: 'Conditions de base pour le site et les services Diriqo.' },
      cookies: { title: 'Cookies Diriqo', description: 'Informations sur les cookies du site public Diriqo.' },
    },
    common: { login: 'Connexion', trial: 'Essayer gratuitement', demo: 'Lancer la démo', createAccount: 'Créer un compte', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', popular: 'Populaire', notReady: 'Le mode démo est en préparation.' },
    navLinks: nav(['Fonctions', 'Comment ça marche', 'Tarifs', 'Secteurs', 'Démo', 'Contact']),
    legalLinks: legal(['Confidentialité', 'Conditions', 'Cookies']),
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
    industries: ['Entreprises de nettoyage', 'Sociétés de service', 'Installations', 'Équipes bâtiment', 'Gestion d’immeubles', 'Petites équipes opérationnelles'],
    pricingPlans: [
      { name: 'Starter', price: commonPricing.starterPrice, period: '/ mois', people: 'Jusqu’à 5 personnes', description: 'Pour petites équipes et entreprises qui démarrent.', features: ['interventions', 'clients', 'équipes', 'app mobile', 'photos', 'vue de base'] },
      { name: 'Growth', price: commonPricing.growthPrice, period: '/ mois', people: '6-15 personnes', description: 'Pour entreprises qui doivent piloter clairement personnes et travail.', featured: true, features: ['tout Starter', 'calendrier', 'suivi du travail', 'coûts des interventions', 'meilleures vues'] },
      { name: 'Scale', price: commonPricing.scalePrice, period: '/ mois', people: '16-30 personnes', description: 'Pour équipes opérationnelles plus grandes.', features: ['tout Growth', 'plus d’admins', 'statistiques étendues', 'limites plus hautes', 'meilleur suivi opérationnel'] },
      { name: 'Enterprise', price: 'Sur mesure', people: 'Plus de 30 personnes', description: 'Pour grandes équipes et besoins spécifiques.', features: ['accord individuel', 'onboarding', 'grandes équipes', 'besoins spécifiques'] },
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
    howPage: { eyebrow: 'Comment ça marche', title: 'Du client à l’intervention terminée sans étapes inutiles.', text: 'Tu comprends vite où commencer et ce qui suit.', cards: [{ title: 'L’équipier sait où aller', text: 'Il voit travail, adresse, notes et date sur mobile.' }, { title: 'Les photos restent avec le travail', text: 'Photos avant/après enregistrées sur la fiche.' }, { title: 'L’admin a une journée plus calme', text: 'Statut, temps et coûts visibles sans appels.' }] },
    howItWorksSteps: ['Créer l’entreprise', 'Ajouter les équipes', 'Ajouter un client', 'Créer une intervention', 'Affecter les équipes', 'L’équipier voit le travail sur mobile', 'Il charge photos et temps', 'L’admin vérifie', 'Intervention clôturée', 'Vue du travail et des coûts'],
    industriesPage: { eyebrow: 'Secteurs', title: 'Diriqo n’est pas limité à un seul domaine.', text: 'Il convient partout où le travail est planifié, réalisé sur le terrain et suivi avec photos, temps et personnes.' },
    industryDetails: [
      { title: 'Entreprises de nettoyage', text: 'Beaucoup d’interventions par jour, photos avant/après et clients qui veulent une preuve.', points: ['photos avant/après', 'contrôle', 'présence', 'nombreuses interventions', 'preuve client'] },
      { title: 'Sociétés de service', text: 'Techniciens terrain avec besoin de dates, adresses et historique.', points: ['techniciens', 'rendez-vous', 'clients', 'historique'] },
      { title: 'Sociétés d’installation', text: 'Planification, statut et documentation photo sans chaos de chat.', points: ['planification', 'matériel et coûts', 'statut', 'photos'] },
      { title: 'Bâtiment et finitions', text: 'Travaux sur plusieurs jours, plusieurs personnes et photos de remise.', points: ['plusieurs jours', 'plusieurs personnes', 'progression', 'photos de remise'] },
      { title: 'Gestion d’immeubles', text: 'Travaux récurrents, demandes clients et contrôle de réalisation.', points: ['récurrent', 'demandes', 'contrôle'] },
    ],
    demoPage: { eyebrow: 'Démo', title: 'Découvre le flow de base.', text: 'Le mode démo est en préparation. Tu peux déjà créer un compte test et voir travaux, équipes, photos et temps.', samplesTitle: 'Aperçus', dashboardTitle: 'Dashboard dirigeant', dashboardText: 'Interventions du jour, personnes, heures et résultat indicatif.', mobileTitle: 'Mobile équipier', mobileText: 'Travail, photos et temps sans formation complexe.' },
    contactPage: { eyebrow: 'Contact', title: 'Dis-nous ce que tu dois gérer.', text: 'Nous te répondrons pour un essai Diriqo, une configuration ou l’add-on Website & Customer Portal.', setupTitle: 'Je veux de l’aide pour configurer', setupText: 'Décris l’entreprise, le nombre de personnes et le type de travail. Nous proposerons un départ simple.', support: 'Support', form: { name: 'Nom', email: 'E-mail', company: 'Entreprise', message: 'Message', submit: 'Envoyer' } },
    legal: {
      eyebrow: 'Informations légales',
      privacy: { title: 'Confidentialité', intro: 'Cette page décrit les principes de base du traitement des données sur le site public Diriqo.', sections: [{ title: 'Données que nous pouvons traiter', text: 'Avec le formulaire, nous pouvons traiter nom, e-mail, entreprise et message.' }, { title: 'Pourquoi nous utilisons les données', text: 'Pour communication, offre, support et fonctionnement du site.' }, { title: 'Contact', text: `Questions sur les données personnelles: ${contactEmail}.` }] },
      terms: { title: 'Conditions', intro: 'Ceci est une version de base des conditions pour le site public Diriqo.', sections: [{ title: 'Service', text: 'Diriqo est un système SaaS pour interventions, équipes, photos, heures, clients et coûts.' }, { title: 'Prix', text: 'Les prix sont indicatifs et peuvent varier selon le périmètre.' }, { title: 'Services additionnels', text: 'Website & Customer Portal peut inclure site, formulaires, portail client et branding.' }, { title: 'Contact', text: `Questions sur les conditions: ${contactEmail}.` }] },
      cookies: { title: 'Cookies', intro: 'Les cookies aident le site à fonctionner et peuvent servir à une analyse de base.', sections: [{ title: 'Cookies nécessaires', text: 'Ils aident au fonctionnement technique, à la sécurité et au chargement.' }, { title: 'Analyse', text: 'Si activée, nous l’utilisons pour améliorer le site.' }, { title: 'Contact', text: `Questions sur les cookies: ${contactEmail}.` }] },
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
