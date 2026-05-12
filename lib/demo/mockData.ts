export type JobStatus = 'planned' | 'in_progress' | 'done' | 'waiting_check'
export type BillingState = 'waiting_for_invoice' | 'invoiced' | 'paid'
export type WorkerStatus = 'working' | 'available' | 'assigned' | 'off'
export type WorkerType = 'internal' | 'external'
export type QuoteStatus = 'draft' | 'sent' | 'accepted' | 'declined'
export type CalendarEventType = 'job' | 'task' | 'internal'

export type Company = {
  name: string
  plan: string
  workersLimit: number
  address: string
  email: string
  phone: string
  vatId: string
}

export type User = {
  name: string
  initials: string
  role: string
}

export type Customer = {
  id: string
  name: string
  type: string
  contact: string
  email: string
  phone: string
  address: string
  jobsCount: number
  revenue: number
  note: string
}

export type Worker = {
  id: string
  name: string
  type: WorkerType
  role: string
  status: WorkerStatus
  phone: string
  hoursThisMonth: number
  hourlyRate: number
  payout: number
  todayJobIds: string[]
  shifts: Array<{ date: string; time: string; title: string }>
}

export type JobPhoto = {
  id: string
  jobId: string
  label: string
  type: 'before' | 'after' | 'demo'
  tone: 'cyan' | 'violet' | 'emerald' | 'amber'
}

export type CostItem = {
  id: string
  label: string
  type: 'internal_labor' | 'contractor' | 'direct'
  amount: number
}

export type JobMessage = {
  id: string
  author: string
  text: string
  time: string
}

export type Job = {
  id: string
  title: string
  customerName: string
  customerId: string
  date: string
  day: string
  startTime: string
  endTime: string
  status: JobStatus
  billingState: BillingState
  price: number
  internalLaborCost: number
  contractorCost: number
  directCosts: number
  assignedWorkers: string[]
  location: string
  marginWarning?: boolean
  notes: string
  checklist: Array<{ id: string; text: string; done: boolean }>
  costItems: CostItem[]
  messages: JobMessage[]
  photoIds: string[]
  workedHours: number
}

export type Invoice = {
  id: string
  jobId: string
  customerName: string
  amount: number
  state: BillingState
  dueDate: string
}

export type Quote = {
  id: string
  title: string
  customerName: string
  contactName: string
  email: string
  phone: string
  amount: number
  costs: number
  profit: number
  margin: number
  status: QuoteStatus
  createdAt: string
  validUntil: string
  intro: string
  note: string
  internalNote: string
  rows: Array<{
    id: string
    label: string
    quantity: number
    unit: string
    unitPrice: number
    total: number
  }>
  internalCosts: Array<{ id: string; category: string; amount: number; note: string }>
  timeline: Array<{ id: string; label: string; date: string }>
}

export type CalendarEvent = {
  id: string
  jobId?: string
  type: CalendarEventType
  date: string
  day: string
  time: string
  title: string
  description: string
}

export type DemoNote = {
  id: string
  text: string
  urgent?: boolean
}

export type Absence = {
  id: string
  workerName: string
  date: string
  reason: string
  status: 'approved' | 'pending'
}

export type AdvanceRequest = {
  id: string
  workerName: string
  amount: number
  date: string
  status: 'pending' | 'approved'
}

export const company: Company = {
  name: 'Diriqo Demo s.r.o.',
  plan: 'Growth',
  workersLimit: 15,
  address: 'Demo ulice 12, Praha',
  email: 'demo@example.test',
  phone: '+420 700 000 000',
  vatId: 'CZ00000000',
}

export const user: User = {
  name: 'Adam Admin',
  initials: 'AA',
  role: 'Administrátor',
}

export const customers: Customer[] = [
  {
    id: 'customer-supermarket',
    name: 'Supermarket Demo',
    type: 'Retail provoz',
    contact: 'Eva Provozní',
    email: 'supermarket@example.test',
    phone: '+420 700 111 222',
    address: 'Praha 4, Obchodní 12',
    jobsCount: 12,
    revenue: 128400,
    note: 'Pravidelný úklid, havarijní zásahy a fotodokumentace před/po.',
  },
  {
    id: 'customer-hotel',
    name: 'Hotel Aurora',
    type: 'Hotel',
    contact: 'Marek Recepce',
    email: 'aurora@example.test',
    phone: '+420 700 222 333',
    address: 'Plzeň, Aurora 8',
    jobsCount: 8,
    revenue: 84200,
    note: 'Kontroly pokojů, servisní zásahy a dokončovací práce.',
  },
  {
    id: 'customer-office',
    name: 'Office Park Nová',
    type: 'Správa objektu',
    contact: 'Lucie Správa',
    email: 'officepark@example.test',
    phone: '+420 700 333 444',
    address: 'Brno, Nová 21',
    jobsCount: 16,
    revenue: 156900,
    note: 'Opakované provozní práce, požadavky nájemců a kontrola splnění.',
  },
  {
    id: 'customer-house',
    name: 'Bytový dům Slunečná',
    type: 'Bytový dům',
    contact: 'Petr Výbor',
    email: 'slunecna@example.test',
    phone: '+420 700 444 555',
    address: 'Olomouc, Slunečná 4',
    jobsCount: 6,
    revenue: 39800,
    note: 'Drobné opravy, údržba společných prostor a předávací fotky.',
  },
]

export const workers: Worker[] = [
  {
    id: 'worker-adam',
    name: 'Petr Novák',
    type: 'internal',
    role: 'Vedoucí týmu',
    status: 'working',
    phone: '+420 731 100 100',
    hoursThisMonth: 126,
    hourlyRate: 220,
    payout: 27720,
    todayJobIds: ['job-supermarket-clean', 'job-office-task'],
    shifts: [
      { date: 'pátek 8. května', time: '08:00-11:00', title: 'Úklid prodejny' },
      { date: 'pátek 8. května', time: '14:00-16:00', title: 'Kontrola Office Park' },
    ],
  },
  {
    id: 'worker-anna',
    name: 'Anna Svobodová',
    type: 'internal',
    role: 'Pracovnice v terénu',
    status: 'assigned',
    phone: '+420 731 200 200',
    hoursThisMonth: 98,
    hourlyRate: 190,
    payout: 18620,
    todayJobIds: ['job-supermarket-clean'],
    shifts: [{ date: 'pátek 8. května', time: '08:00-11:00', title: 'Úklid prodejny' }],
  },
  {
    id: 'worker-marek',
    name: 'Marek Dvořák',
    type: 'external',
    role: 'Servisní technik',
    status: 'working',
    phone: '+420 731 300 300',
    hoursThisMonth: 54,
    hourlyRate: 350,
    payout: 18900,
    todayJobIds: ['job-hotel-service'],
    shifts: [{ date: 'pátek 8. května', time: '12:30-15:30', title: 'Servis dveří' }],
  },
  {
    id: 'worker-lucie',
    name: 'Lucie Králová',
    type: 'internal',
    role: 'Kontrola kvality',
    status: 'available',
    phone: '+420 731 400 400',
    hoursThisMonth: 88,
    hourlyRate: 210,
    payout: 18480,
    todayJobIds: [],
    shifts: [{ date: 'čtvrtek 7. května', time: '10:00-12:00', title: 'Kontrola pokojů' }],
  },
  {
    id: 'worker-tomas',
    name: 'Tomáš Havel',
    type: 'external',
    role: 'Montážník',
    status: 'assigned',
    phone: '+420 731 500 500',
    hoursThisMonth: 42,
    hourlyRate: 330,
    payout: 13860,
    todayJobIds: ['job-house-repair'],
    shifts: [{ date: 'sobota 9. května', time: '09:00-13:00', title: 'Oprava sklepních dveří' }],
  },
]

export const photos: JobPhoto[] = [
  {
    id: 'photo-supermarket-before',
    jobId: 'job-supermarket-clean',
    label: 'Prodejna před prací',
    type: 'before',
    tone: 'cyan',
  },
  {
    id: 'photo-supermarket-after',
    jobId: 'job-supermarket-clean',
    label: 'Prodejna po práci',
    type: 'after',
    tone: 'emerald',
  },
  {
    id: 'photo-hotel-before',
    jobId: 'job-hotel-service',
    label: 'Dveře před servisem',
    type: 'before',
    tone: 'violet',
  },
  {
    id: 'photo-house-after',
    jobId: 'job-house-repair',
    label: 'Oprava po dokončení',
    type: 'after',
    tone: 'amber',
  },
]

export const jobs: Job[] = [
  {
    id: 'job-supermarket-clean',
    title: 'Úklid prodejny po ranní špičce',
    customerId: 'customer-supermarket',
    customerName: 'Supermarket Demo',
    date: 'pátek 8. května',
    day: 'Pátek',
    startTime: '08:00',
    endTime: '11:00',
    status: 'in_progress',
    billingState: 'waiting_for_invoice',
    price: 6800,
    internalLaborCost: 1350,
    contractorCost: 0,
    directCosts: 620,
    assignedWorkers: ['worker-adam', 'worker-anna'],
    location: 'Praha 4, Obchodní 12',
    notes: 'Zkontrolovat vstup, pečivo, pokladní zónu a nahrát fotky před/po.',
    checklist: [
      { id: 'c1', text: 'Převzít klíče od směnové vedoucí', done: true },
      { id: 'c2', text: 'Vyfotit stav před prací', done: true },
      { id: 'c3', text: 'Zkontrolovat pokladní zónu', done: false },
      { id: 'c4', text: 'Nahrát fotky po dokončení', done: false },
    ],
    costItems: [
      { id: 'cost-1', label: 'Interní práce 6 h', type: 'internal_labor', amount: 1350 },
      { id: 'cost-2', label: 'Čisticí chemie', type: 'direct', amount: 420 },
      { id: 'cost-3', label: 'Doprava', type: 'direct', amount: 200 },
    ],
    messages: [
      { id: 'm1', author: 'Adam Admin', text: 'Prosím nezapomenout fotky pokladní zóny.', time: '07:42' },
      { id: 'm2', author: 'Petr Novák', text: 'Jsme na místě, začínáme.', time: '08:05' },
    ],
    photoIds: ['photo-supermarket-before', 'photo-supermarket-after'],
    workedHours: 2.5,
  },
  {
    id: 'job-hotel-service',
    title: 'Servis dveří a kontrola pokojů',
    customerId: 'customer-hotel',
    customerName: 'Hotel Aurora',
    date: 'pátek 8. května',
    day: 'Pátek',
    startTime: '12:30',
    endTime: '15:30',
    status: 'planned',
    billingState: 'waiting_for_invoice',
    price: 7600,
    internalLaborCost: 0,
    contractorCost: 2100,
    directCosts: 950,
    assignedWorkers: ['worker-marek'],
    location: 'Plzeň, Aurora 8',
    notes: 'Vyměnit kování, zkontrolovat chod dveří a přidat fotku po servisu.',
    checklist: [
      { id: 'c1', text: 'Zkontrolovat dveře pokoje 214', done: false },
      { id: 'c2', text: 'Vyměnit kování', done: false },
      { id: 'c3', text: 'Dopsat čas práce', done: false },
    ],
    costItems: [
      { id: 'cost-1', label: 'Externí technik', type: 'contractor', amount: 2100 },
      { id: 'cost-2', label: 'Kování a materiál', type: 'direct', amount: 950 },
    ],
    messages: [{ id: 'm1', author: 'Recepce', text: 'Pokoj 214 je volný od 12:00.', time: '09:20' }],
    photoIds: ['photo-hotel-before'],
    workedHours: 0,
  },
  {
    id: 'job-office-task',
    title: 'Kontrola garáží a společných prostor',
    customerId: 'customer-office',
    customerName: 'Office Park Nová',
    date: 'pátek 8. května',
    day: 'Pátek',
    startTime: '14:00',
    endTime: '16:00',
    status: 'waiting_check',
    billingState: 'waiting_for_invoice',
    price: 5200,
    internalLaborCost: 920,
    contractorCost: 0,
    directCosts: 450,
    assignedWorkers: ['worker-adam'],
    location: 'Brno, Nová 21',
    notes: 'Zákazník chce potvrdit fotkami, že garáže jsou po úklidu bez závad.',
    checklist: [
      { id: 'c1', text: 'Projít garáže B1', done: true },
      { id: 'c2', text: 'Vyfotit výtahové lobby', done: true },
      { id: 'c3', text: 'Předat ke kontrole adminovi', done: true },
    ],
    costItems: [
      { id: 'cost-1', label: 'Interní práce', type: 'internal_labor', amount: 920 },
      { id: 'cost-2', label: 'Doprava', type: 'direct', amount: 450 },
    ],
    messages: [{ id: 'm1', author: 'Petr Novák', text: 'Hotovo, prosím o kontrolu fotek.', time: '16:08' }],
    photoIds: [],
    workedHours: 2,
  },
  {
    id: 'job-house-repair',
    title: 'Oprava sklepních dveří',
    customerId: 'customer-house',
    customerName: 'Bytový dům Slunečná',
    date: 'sobota 9. května',
    day: 'Sobota',
    startTime: '09:00',
    endTime: '13:00',
    status: 'done',
    billingState: 'invoiced',
    price: 4200,
    internalLaborCost: 0,
    contractorCost: 1800,
    directCosts: 1200,
    assignedWorkers: ['worker-tomas'],
    location: 'Olomouc, Slunečná 4',
    notes: 'Hotovo a předáno výboru domu.',
    checklist: [
      { id: 'c1', text: 'Demontovat staré kování', done: true },
      { id: 'c2', text: 'Namontovat nové zajištění', done: true },
      { id: 'c3', text: 'Nahrát fotky po dokončení', done: true },
    ],
    costItems: [
      { id: 'cost-1', label: 'Externí montážník', type: 'contractor', amount: 1800 },
      { id: 'cost-2', label: 'Materiál', type: 'direct', amount: 1200 },
    ],
    messages: [{ id: 'm1', author: 'Petr Výbor', text: 'Děkujeme, výsledek potvrzen.', time: '13:45' }],
    photoIds: ['photo-house-after'],
    workedHours: 4,
    marginWarning: true,
  },
  {
    id: 'job-unassigned',
    title: 'Mytí výloh u vstupu',
    customerId: 'customer-supermarket',
    customerName: 'Supermarket Demo',
    date: 'pondělí 11. května',
    day: 'Pondělí',
    startTime: '07:30',
    endTime: '09:30',
    status: 'planned',
    billingState: 'waiting_for_invoice',
    price: 3100,
    internalLaborCost: 0,
    contractorCost: 0,
    directCosts: 240,
    assignedWorkers: [],
    location: 'Praha 4, Obchodní 12',
    notes: 'Zakázka čeká na přiřazení pracovníků.',
    checklist: [
      { id: 'c1', text: 'Přiřadit pracovníka', done: false },
      { id: 'c2', text: 'Nahrát fotky před/po', done: false },
    ],
    costItems: [{ id: 'cost-1', label: 'Chemie', type: 'direct', amount: 240 }],
    messages: [],
    photoIds: [],
    workedHours: 0,
  },
]

export const invoices: Invoice[] = [
  {
    id: 'invoice-1',
    jobId: 'job-house-repair',
    customerName: 'Bytový dům Slunečná',
    amount: 4200,
    state: 'invoiced',
    dueDate: '20. května',
  },
  {
    id: 'invoice-2',
    jobId: 'job-office-task',
    customerName: 'Office Park Nová',
    amount: 5200,
    state: 'waiting_for_invoice',
    dueDate: '15. května',
  },
]

export const quotes: Quote[] = [
  {
    id: 'quote-supermarket',
    title: 'Pravidelný úklid prodejny',
    customerName: 'Supermarket Demo',
    contactName: 'Eva Provozní',
    email: 'supermarket@example.test',
    phone: '+420 700 111 222',
    amount: 186400,
    costs: 128900,
    profit: 57500,
    margin: 31,
    status: 'sent',
    createdAt: '03. 05. 2026',
    validUntil: '17. 05. 2026',
    intro: 'Připravili jsme pro vás přehlednou nabídku služeb včetně rozsahu prací a celkové ceny.',
    note: 'Cena zahrnuje pravidelný úklid prodejní plochy, sociálního zázemí, plánované strojové čištění podlah, spotřební materiál a koordinaci prací.',
    internalNote:
      'Zákazník chce začít od června. V nabídce držet rezervu na víkendové směny. Při přijetí založit opakovanou zakázku.',
    rows: [
      { id: 'row-1', label: 'Denní úklid prodejní plochy', quantity: 20, unit: 'směna', unitPrice: 4200, total: 84000 },
      { id: 'row-2', label: 'Mytí sociálního zázemí', quantity: 20, unit: 'směna', unitPrice: 1250, total: 25000 },
      { id: 'row-3', label: 'Strojové čištění podlah', quantity: 4, unit: 'zásah', unitPrice: 9800, total: 39200 },
      { id: 'row-4', label: 'Spotřební materiál', quantity: 1, unit: 'měsíc', unitPrice: 18600, total: 18600 },
      { id: 'row-5', label: 'Doprava a koordinace', quantity: 1, unit: 'měsíc', unitPrice: 19600, total: 19600 },
    ],
    internalCosts: [
      { id: 'cost-1', category: 'Práce pracovníků', amount: 94500, note: '315 hodin podle plánovaných směn' },
      { id: 'cost-2', category: 'Materiál', amount: 18900, note: 'chemie, pytle, utěrky' },
      { id: 'cost-3', category: 'Doprava', amount: 7800, note: 'pravidelné dojezdy' },
      { id: 'cost-4', category: 'Rezerva', amount: 7700, note: 'drobné vícepráce' },
    ],
    timeline: [
      { id: 'timeline-1', label: 'Nabídka vytvořena', date: '03. 05. 2026' },
      { id: 'timeline-2', label: 'Interně zkontrolováno', date: '04. 05. 2026' },
      { id: 'timeline-3', label: 'Odesláno zákazníkovi', date: '05. 05. 2026' },
    ],
  },
  {
    id: 'quote-hotel',
    title: 'Generální úklid pokojů a chodeb',
    customerName: 'Hotel Aurora',
    contactName: 'Marek Recepce',
    email: 'aurora@example.test',
    phone: '+420 700 222 333',
    amount: 92600,
    costs: 71200,
    profit: 21400,
    margin: 23,
    status: 'draft',
    createdAt: '06. 05. 2026',
    validUntil: '20. května 2026',
    intro: 'Návrh generálního úklidu pokojů, chodeb a servisních prostor.',
    note: 'Nabídka počítá s úklidem pokojů, chodeb, sanitárních prostor a kontrolou po dokončení.',
    internalNote: 'Držet rezervu na víkendový termín a externí výpomoc.',
    rows: [
      { id: 'row-1', label: 'Generální úklid pokojů', quantity: 36, unit: 'pokoj', unitPrice: 1450, total: 52200 },
      { id: 'row-2', label: 'Čištění chodeb', quantity: 4, unit: 'patro', unitPrice: 5200, total: 20800 },
      { id: 'row-3', label: 'Sanitární servis', quantity: 1, unit: 'celek', unitPrice: 12600, total: 12600 },
      { id: 'row-4', label: 'Koordinace a předání', quantity: 1, unit: 'celek', unitPrice: 7000, total: 7000 },
    ],
    internalCosts: [
      { id: 'cost-1', category: 'Práce pracovníků', amount: 52600, note: 'interní tým a směny navíc' },
      { id: 'cost-2', category: 'Materiál', amount: 9800, note: 'chemie a spotřební materiál' },
      { id: 'cost-3', category: 'Externí výpomoc', amount: 8800, note: 'víkendové směny' },
    ],
    timeline: [
      { id: 'timeline-1', label: 'Nabídka vytvořena', date: '06. 05. 2026' },
      { id: 'timeline-2', label: 'Rozpracováno', date: '06. 05. 2026' },
    ],
  },
  {
    id: 'quote-office',
    title: 'Údržba společných prostor',
    customerName: 'Office Park Nová',
    contactName: 'Lucie Správa',
    email: 'officepark@example.test',
    phone: '+420 700 333 444',
    amount: 214800,
    costs: 146300,
    profit: 68500,
    margin: 32,
    status: 'accepted',
    createdAt: '28. 04. 2026',
    validUntil: '12. 05. 2026',
    intro: 'Pravidelná údržba společných prostor, reporty a drobné servisní zásahy.',
    note: 'Cena zahrnuje údržbu společných prostor, drobné opravy, pravidelné kontroly a měsíční report.',
    internalNote: 'Po přijetí založit měsíční opakovanou zakázku a kalendář kontrol.',
    rows: [
      { id: 'row-1', label: 'Týdenní kontrola objektu', quantity: 20, unit: 'kontrola', unitPrice: 4200, total: 84000 },
      { id: 'row-2', label: 'Úklid a drobná údržba', quantity: 20, unit: 'směna', unitPrice: 4800, total: 96000 },
      { id: 'row-3', label: 'Report pro správce', quantity: 5, unit: 'report', unitPrice: 3600, total: 18000 },
      { id: 'row-4', label: 'Koordinace provozu', quantity: 1, unit: 'měsíc', unitPrice: 16800, total: 16800 },
    ],
    internalCosts: [
      { id: 'cost-1', category: 'Práce pracovníků', amount: 112500, note: 'dlouhodobý provozní tým' },
      { id: 'cost-2', category: 'Materiál', amount: 16100, note: 'spotřební materiál a náhradní díly' },
      { id: 'cost-3', category: 'Doprava', amount: 9800, note: 'pravidelné kontroly' },
      { id: 'cost-4', category: 'Rezerva', amount: 7900, note: 'drobné havárie' },
    ],
    timeline: [
      { id: 'timeline-1', label: 'Nabídka vytvořena', date: '28. 04. 2026' },
      { id: 'timeline-2', label: 'Odesláno zákazníkovi', date: '29. 04. 2026' },
      { id: 'timeline-3', label: 'Zákazník nabídku přijal', date: '02. 05. 2026' },
    ],
  },
  {
    id: 'quote-house',
    title: 'Mytí oken a sklepních prostor',
    customerName: 'Bytový dům Slunečná',
    contactName: 'Petr Výbor',
    email: 'slunecna@example.test',
    phone: '+420 700 444 555',
    amount: 49000,
    costs: 47200,
    profit: 1800,
    margin: 4,
    status: 'declined',
    createdAt: '21. 04. 2026',
    validUntil: '05. 05. 2026',
    intro: 'Jednorázové mytí oken a úklid sklepních prostor bytového domu.',
    note: 'Cena zahrnuje mytí oken, úklid sklepů a odvoz drobného odpadu.',
    internalNote: 'Nízká marže, při další nabídce upravit cenu dopravy a práce.',
    rows: [
      { id: 'row-1', label: 'Mytí oken', quantity: 1, unit: 'celek', unitPrice: 26000, total: 26000 },
      { id: 'row-2', label: 'Úklid sklepních prostor', quantity: 1, unit: 'celek', unitPrice: 14200, total: 14200 },
      { id: 'row-3', label: 'Odvoz drobného odpadu', quantity: 1, unit: 'celek', unitPrice: 4800, total: 4800 },
      { id: 'row-4', label: 'Doprava a koordinace', quantity: 1, unit: 'celek', unitPrice: 4000, total: 4000 },
    ],
    internalCosts: [
      { id: 'cost-1', category: 'Práce pracovníků', amount: 34800, note: 'vyšší počet hodin kvůli sklepům' },
      { id: 'cost-2', category: 'Materiál', amount: 5400, note: 'čisticí prostředky' },
      { id: 'cost-3', category: 'Doprava', amount: 7000, note: 'dva dojezdy' },
    ],
    timeline: [
      { id: 'timeline-1', label: 'Nabídka vytvořena', date: '21. 04. 2026' },
      { id: 'timeline-2', label: 'Odesláno zákazníkovi', date: '22. 04. 2026' },
      { id: 'timeline-3', label: 'Zákazník nabídku odmítl', date: '25. 04. 2026' },
    ],
  },
]

export const calendarEvents: CalendarEvent[] = [
  ...jobs.map((job) => ({
    id: `event-${job.id}`,
    jobId: job.id,
    type: 'job' as const,
    date: job.date,
    day: job.day,
    time: `${job.startTime}-${job.endTime}`,
    title: job.title,
    description: job.customerName,
  })),
  {
    id: 'task-material',
    type: 'task',
    date: 'pátek 8. května',
    day: 'Pátek',
    time: '16:30',
    title: 'Zaplatit fakturu za materiál',
    description: 'Přímé náklady k zakázkám',
  },
  {
    id: 'task-chemistry',
    type: 'task',
    date: 'pondělí 11. května',
    day: 'Pondělí',
    time: '10:00',
    title: 'Objednat chemii',
    description: 'Doplnit zásoby pro Supermarket Demo',
  },
  {
    id: 'task-manager',
    type: 'task',
    date: 'úterý 12. května',
    day: 'Úterý',
    time: '09:00',
    title: 'Zavolat správci objektu',
    description: 'Upřesnit požadavky Office Park Nová',
  },
  {
    id: 'internal-meeting',
    type: 'internal',
    date: 'středa 13. května',
    day: 'Středa',
    time: '08:30',
    title: 'Interní plánování směn',
    description: 'Rozdělení týmu na další týden',
  },
]

export const notes: DemoNote[] = [
  { id: 'note-1', text: 'Zavolat zákazníkovi z Office Parku', urgent: true },
  { id: 'note-2', text: 'Zkontrolovat nízkou marži u opravy dveří' },
]

export const absences: Absence[] = [
  {
    id: 'absence-1',
    workerName: 'Anna Svobodová',
    date: 'pondělí 11. května',
    reason: 'Lékař',
    status: 'approved',
  },
  {
    id: 'absence-2',
    workerName: 'Tomáš Havel',
    date: 'úterý 12. května',
    reason: 'Volno po víkendové práci',
    status: 'pending',
  },
]

export const advanceRequests: AdvanceRequest[] = [
  {
    id: 'advance-1',
    workerName: 'Petr Novák',
    amount: 3000,
    date: '8. května',
    status: 'pending',
  },
  {
    id: 'advance-2',
    workerName: 'Anna Svobodová',
    amount: 2000,
    date: '6. května',
    status: 'approved',
  },
]

export const weekDays = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle']

export const jobStatusLabels: Record<JobStatus, string> = {
  planned: 'Plánováno',
  in_progress: 'Probíhá',
  waiting_check: 'Čeká na kontrolu',
  done: 'Hotovo',
}

export const billingStateLabels: Record<BillingState, string> = {
  waiting_for_invoice: 'Čeká na fakturaci',
  invoiced: 'Fakturováno',
  paid: 'Zaplaceno',
}

export const workerStatusLabels: Record<WorkerStatus, string> = {
  working: 'Dnes pracuje',
  available: 'Volno',
  assigned: 'Přiřazen',
  off: 'Nepřítomen',
}

export const workerTypeLabels: Record<WorkerType, string> = {
  internal: 'Interní',
  external: 'Externí',
}

export const quoteStatusLabels: Record<QuoteStatus, string> = {
  draft: 'Rozpracováno',
  sent: 'Odesláno',
  accepted: 'Přijato',
  declined: 'Odmítnuto',
}

export const eventTypeLabels: Record<CalendarEventType, string> = {
  job: 'Zakázka',
  task: 'Úkol',
  internal: 'Interní',
}
