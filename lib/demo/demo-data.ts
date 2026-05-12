export type DemoJobWorkState =
  | 'future'
  | 'not_started'
  | 'in_progress'
  | 'waiting_check'
  | 'done'
  | 'problem'

export type DemoBillingState =
  | 'not_ready'
  | 'waiting_for_invoice'
  | 'invoiced'
  | 'paid'
  | 'overdue'

export type DemoQuoteStatus = 'draft' | 'sent' | 'accepted' | 'expired'

export type DemoInvoiceStatus = 'ready' | 'draft' | 'issued' | 'paid' | 'overdue'

export type DemoCustomer = {
  id: string
  name: string
  type: string
  contact: string
  email: string
  phone: string
  address: string
}

export type DemoWorker = {
  id: string
  name: string
  role: string
  type: 'admin' | 'worker' | 'external'
  email: string
  phone: string
  hourlyRate: number
  status: 'working' | 'assigned' | 'available' | 'off'
}

export type DemoJob = {
  id: string
  title: string
  customerId: string
  location: string
  date: string
  startTime: string
  endTime: string
  workerIds: string[]
  workState: DemoJobWorkState
  billingState: DemoBillingState
  price: number
  laborCost: number
  otherCost: number
  profit: number
  note: string
  checklist: Array<{ id: string; text: string; done: boolean }>
  photos: Array<{ id: string; label: string; type: 'before' | 'after' | 'issue'; tone: 'blue' | 'green' | 'orange' | 'purple' }>
  issue?: string
}

export type DemoQuote = {
  id: string
  number: string
  title: string
  customerId: string
  status: DemoQuoteStatus
  quoteDate: string
  validUntil: string
  total: number
  costs: number
  profit: number
  rows: Array<{ id: string; label: string; quantity: number; unit: string; unitPrice: number; total: number }>
  note: string
}

export type DemoInvoice = {
  id: string
  number: string
  customerId: string
  jobId?: string
  status: DemoInvoiceStatus
  issueDate: string
  dueDate: string
  total: number
  note: string
}

export type DemoCalendarEvent = {
  id: string
  date: string
  day: string
  time: string
  title: string
  type: 'job' | 'task' | 'internal'
  jobId?: string
}

export const demoCompany = {
  name: 'Demo Cleaning s.r.o.',
  field: 'úklidové a servisní práce',
  currency: 'EUR',
  language: 'Čeština',
  plan: 'Demo režim',
}

export const demoUser = {
  name: 'Adam Novák',
  initials: 'AN',
  role: 'Admin / vedoucí',
}

export const demoCustomers: DemoCustomer[] = [
  {
    id: 'customer-hotel-central',
    name: 'Hotel Central',
    type: 'Hotel',
    contact: 'Lucie Benešová',
    email: 'recepce@hotel-central.demo',
    phone: '+420 700 100 101',
    address: 'Central Square 12',
  },
  {
    id: 'customer-office-park',
    name: 'Office Park North',
    type: 'Administrativní objekt',
    contact: 'Pavel Šimek',
    email: 'sprava@office-north.demo',
    phone: '+420 700 100 102',
    address: 'North Avenue 4',
  },
  {
    id: 'customer-bistro-luna',
    name: 'Bistro Luna',
    type: 'Gastro',
    contact: 'Marta Havelková',
    email: 'info@bistro-luna.demo',
    phone: '+420 700 100 103',
    address: 'Moon Street 8',
  },
  {
    id: 'customer-retail-west',
    name: 'Retail Store West',
    type: 'Prodejna',
    contact: 'Jan Král',
    email: 'store@retail-west.demo',
    phone: '+420 700 100 104',
    address: 'West Mall 21',
  },
]

export const demoWorkers: DemoWorker[] = [
  {
    id: 'worker-adam',
    name: 'Adam Novák',
    role: 'Admin / vedoucí',
    type: 'admin',
    email: 'adam@demo-cleaning.test',
    phone: '+420 700 200 101',
    hourlyRate: 24,
    status: 'working',
  },
  {
    id: 'worker-petra',
    name: 'Petra Svobodová',
    role: 'Pracovník',
    type: 'worker',
    email: 'petra@demo-cleaning.test',
    phone: '+420 700 200 102',
    hourlyRate: 18,
    status: 'working',
  },
  {
    id: 'worker-martin',
    name: 'Martin Dvořák',
    role: 'Pracovník',
    type: 'worker',
    email: 'martin@demo-cleaning.test',
    phone: '+420 700 200 103',
    hourlyRate: 18,
    status: 'assigned',
  },
  {
    id: 'worker-eva',
    name: 'Eva Králová',
    role: 'Pracovník',
    type: 'worker',
    email: 'eva@demo-cleaning.test',
    phone: '+420 700 200 104',
    hourlyRate: 19,
    status: 'available',
  },
  {
    id: 'worker-tomas',
    name: 'Tomáš Marek',
    role: 'Externista',
    type: 'external',
    email: 'tomas@externi-demo.test',
    phone: '+420 700 200 105',
    hourlyRate: 28,
    status: 'assigned',
  },
]

export const demoJobs: DemoJob[] = [
  {
    id: 'job-office-cleaning',
    title: 'Pravidelný úklid kanceláří',
    customerId: 'customer-office-park',
    location: 'Office Park North, North Avenue 4',
    date: '2026-05-09',
    startTime: '08:00',
    endTime: '11:30',
    workerIds: ['worker-petra', 'worker-martin'],
    workState: 'in_progress',
    billingState: 'not_ready',
    price: 420,
    laborCost: 126,
    otherCost: 38,
    profit: 256,
    note: 'Pravidelný ranní úklid společných prostor a kuchyněk.',
    checklist: [
      { id: 'c1', text: 'Recepce a vstupní prostor', done: true },
      { id: 'c2', text: 'Kuchyňky ve 2. a 3. patře', done: true },
      { id: 'c3', text: 'Doplnit hygienu', done: false },
    ],
    photos: [
      { id: 'p1', label: 'Recepce před úklidem', type: 'before', tone: 'blue' },
      { id: 'p2', label: 'Kuchyňka po úklidu', type: 'after', tone: 'green' },
    ],
  },
  {
    id: 'job-windows-entry',
    title: 'Mytí výloh a vstupu',
    customerId: 'customer-retail-west',
    location: 'Retail Store West, West Mall 21',
    date: '2026-05-09',
    startTime: '13:00',
    endTime: '15:00',
    workerIds: ['worker-adam', 'worker-tomas'],
    workState: 'waiting_check',
    billingState: 'waiting_for_invoice',
    price: 310,
    laborCost: 92,
    otherCost: 24,
    profit: 194,
    note: 'Zákazník chce fotky před/po kvůli kontrole vstupu.',
    checklist: [
      { id: 'c1', text: 'Výlohy z vnější strany', done: true },
      { id: 'c2', text: 'Vstupní dveře', done: true },
      { id: 'c3', text: 'Fotky po dokončení', done: true },
    ],
    photos: [
      { id: 'p1', label: 'Výloha před prací', type: 'before', tone: 'purple' },
      { id: 'p2', label: 'Vstup po práci', type: 'after', tone: 'green' },
    ],
  },
  {
    id: 'job-post-construction',
    title: 'Postavební úklid jednotky',
    customerId: 'customer-hotel-central',
    location: 'Hotel Central, 4. patro',
    date: '2026-05-10',
    startTime: '09:00',
    endTime: '17:00',
    workerIds: ['worker-petra', 'worker-eva', 'worker-tomas'],
    workState: 'future',
    billingState: 'not_ready',
    price: 980,
    laborCost: 312,
    otherCost: 96,
    profit: 572,
    note: 'Vícedenní práce. První den hrubý úklid, druhý den detail.',
    checklist: [
      { id: 'c1', text: 'Hrubý stavební prach', done: false },
      { id: 'c2', text: 'Koupelny a dlažba', done: false },
      { id: 'c3', text: 'Předávací fotky', done: false },
    ],
    photos: [{ id: 'p1', label: 'Stav jednotky před prací', type: 'before', tone: 'orange' }],
  },
  {
    id: 'job-floor-machine',
    title: 'Strojové čištění podlahy',
    customerId: 'customer-retail-west',
    location: 'Retail Store West, skladová část',
    date: '2026-05-07',
    startTime: '18:00',
    endTime: '22:00',
    workerIds: ['worker-adam', 'worker-martin'],
    workState: 'done',
    billingState: 'waiting_for_invoice',
    price: 760,
    laborCost: 168,
    otherCost: 84,
    profit: 508,
    note: 'Hotovo, připraveno k fakturaci.',
    checklist: [
      { id: 'c1', text: 'Strojové čištění', done: true },
      { id: 'c2', text: 'Vysušení podlahy', done: true },
      { id: 'c3', text: 'Kontrola vedoucím', done: true },
    ],
    photos: [
      { id: 'p1', label: 'Podlaha před čištěním', type: 'before', tone: 'blue' },
      { id: 'p2', label: 'Podlaha po čištění', type: 'after', tone: 'green' },
    ],
  },
  {
    id: 'job-hotel-control',
    title: 'Kontrola po úklidu',
    customerId: 'customer-hotel-central',
    location: 'Hotel Central, pokoje 201-212',
    date: '2026-05-08',
    startTime: '10:00',
    endTime: '12:00',
    workerIds: ['worker-eva'],
    workState: 'done',
    billingState: 'invoiced',
    price: 260,
    laborCost: 48,
    otherCost: 0,
    profit: 212,
    note: 'Kontrola pokojů po pravidelném úklidu.',
    checklist: [
      { id: 'c1', text: 'Kontrola koupelen', done: true },
      { id: 'c2', text: 'Kontrola lůžkovin', done: true },
      { id: 'c3', text: 'Report recepci', done: true },
    ],
    photos: [{ id: 'p1', label: 'Pokoj po kontrole', type: 'after', tone: 'green' }],
  },
  {
    id: 'job-entry-claim',
    title: 'Reklamace - doplnit detail u vstupu',
    customerId: 'customer-bistro-luna',
    location: 'Bistro Luna, Moon Street 8',
    date: '2026-05-06',
    startTime: '07:30',
    endTime: '08:30',
    workerIds: ['worker-petra'],
    workState: 'problem',
    billingState: 'overdue',
    price: 180,
    laborCost: 36,
    otherCost: 12,
    profit: 132,
    note: 'Zákazník hlásí šmouhy u vstupních dveří. Potřeba dořešit a nafotit.',
    issue: 'Po splatnosti a zákazník čeká na opravu detailu.',
    checklist: [
      { id: 'c1', text: 'Zkontrolovat vstup', done: true },
      { id: 'c2', text: 'Doplnit detail u dveří', done: false },
      { id: 'c3', text: 'Poslat fotku zákazníkovi', done: false },
    ],
    photos: [{ id: 'p1', label: 'Reklamovaný detail', type: 'issue', tone: 'orange' }],
  },
]

export const demoQuotes: DemoQuote[] = [
  {
    id: 'quote-draft',
    number: 'CN-2026-014',
    title: 'Měsíční úklid kanceláří',
    customerId: 'customer-office-park',
    status: 'draft',
    quoteDate: '2026-05-08',
    validUntil: '2026-05-22',
    total: 1840,
    costs: 1190,
    profit: 650,
    note: 'Rozpracovaná nabídka pro pravidelný úklid 3 pater.',
    rows: [
      { id: 'r1', label: 'Pravidelný úklid kanceláří', quantity: 20, unit: 'směna', unitPrice: 72, total: 1440 },
      { id: 'r2', label: 'Materiál a hygiena', quantity: 1, unit: 'měsíc', unitPrice: 400, total: 400 },
    ],
  },
  {
    id: 'quote-sent',
    number: 'CN-2026-013',
    title: 'Mytí výloh pro prodejnu',
    customerId: 'customer-retail-west',
    status: 'sent',
    quoteDate: '2026-05-06',
    validUntil: '2026-05-20',
    total: 980,
    costs: 610,
    profit: 370,
    note: 'Odeslaná nabídka. Čeká se na potvrzení zákazníka.',
    rows: [
      { id: 'r1', label: 'Mytí výloh', quantity: 4, unit: 'zásah', unitPrice: 180, total: 720 },
      { id: 'r2', label: 'Doprava a koordinace', quantity: 1, unit: 'měsíc', unitPrice: 260, total: 260 },
    ],
  },
  {
    id: 'quote-accepted',
    number: 'CN-2026-012',
    title: 'Postavební úklid hotelové jednotky',
    customerId: 'customer-hotel-central',
    status: 'accepted',
    quoteDate: '2026-04-29',
    validUntil: '2026-05-13',
    total: 2960,
    costs: 1830,
    profit: 1130,
    note: 'Přijato. Z nabídky vznikne zakázka.',
    rows: [
      { id: 'r1', label: 'Hrubý úklid po stavbě', quantity: 2, unit: 'den', unitPrice: 780, total: 1560 },
      { id: 'r2', label: 'Detailní dočištění', quantity: 1, unit: 'den', unitPrice: 1100, total: 1100 },
      { id: 'r3', label: 'Materiál', quantity: 1, unit: 'paušál', unitPrice: 300, total: 300 },
    ],
  },
  {
    id: 'quote-expired',
    number: 'CN-2026-009',
    title: 'Noční úklid kuchyně',
    customerId: 'customer-bistro-luna',
    status: 'expired',
    quoteDate: '2026-04-12',
    validUntil: '2026-04-26',
    total: 740,
    costs: 690,
    profit: 50,
    note: 'Expirovaná nabídka s nízkou marží.',
    rows: [
      { id: 'r1', label: 'Noční úklid kuchyně', quantity: 2, unit: 'zásah', unitPrice: 300, total: 600 },
      { id: 'r2', label: 'Chemie', quantity: 1, unit: 'paušál', unitPrice: 140, total: 140 },
    ],
  },
]

export const demoInvoices: DemoInvoice[] = [
  {
    id: 'invoice-ready-floor',
    number: 'Připraveno',
    customerId: 'customer-retail-west',
    jobId: 'job-floor-machine',
    status: 'ready',
    issueDate: '2026-05-09',
    dueDate: '2026-05-23',
    total: 760,
    note: 'Hotová zakázka čeká na vytvoření faktury.',
  },
  {
    id: 'invoice-draft-windows',
    number: 'Koncept',
    customerId: 'customer-retail-west',
    jobId: 'job-windows-entry',
    status: 'draft',
    issueDate: '2026-05-09',
    dueDate: '2026-05-23',
    total: 310,
    note: 'Připravený koncept po kontrole práce.',
  },
  {
    id: 'invoice-issued-hotel',
    number: 'VF-2026-018',
    customerId: 'customer-hotel-central',
    jobId: 'job-hotel-control',
    status: 'issued',
    issueDate: '2026-05-08',
    dueDate: '2026-05-22',
    total: 260,
    note: 'Vystavená faktura.',
  },
  {
    id: 'invoice-paid-office',
    number: 'VF-2026-017',
    customerId: 'customer-office-park',
    status: 'paid',
    issueDate: '2026-05-02',
    dueDate: '2026-05-16',
    total: 1260,
    note: 'Uhrazeno.',
  },
  {
    id: 'invoice-overdue-bistro',
    number: 'VF-2026-011',
    customerId: 'customer-bistro-luna',
    jobId: 'job-entry-claim',
    status: 'overdue',
    issueDate: '2026-04-21',
    dueDate: '2026-05-05',
    total: 180,
    note: 'Po splatnosti.',
  },
]

export const demoCalendarEvents: DemoCalendarEvent[] = [
  { id: 'event-office', date: '2026-05-09', day: 'Dnes', time: '08:00', title: 'Pravidelný úklid kanceláří', type: 'job', jobId: 'job-office-cleaning' },
  { id: 'event-windows', date: '2026-05-09', day: 'Dnes', time: '13:00', title: 'Mytí výloh a vstupu', type: 'job', jobId: 'job-windows-entry' },
  { id: 'event-hotel', date: '2026-05-10', day: 'Neděle', time: '09:00', title: 'Postavební úklid jednotky', type: 'job', jobId: 'job-post-construction' },
  { id: 'event-material', date: '2026-05-10', day: 'Neděle', time: '16:00', title: 'Objednat chemii', type: 'task' },
  { id: 'event-call', date: '2026-05-11', day: 'Pondělí', time: '09:30', title: 'Zavolat správci objektu', type: 'task' },
  { id: 'event-internal', date: '2026-05-12', day: 'Úterý', time: '14:00', title: 'Kontrola vybavení aut', type: 'internal' },
]
