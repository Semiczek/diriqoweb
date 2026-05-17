import type { Locale, StepItem } from '@/lib/marketing/content'

type FieldWorkFAQ = {
  question: string
  answer: string
}

type FieldWorkCopy = {
  workflowText: string
  workflowSteps: StepItem[]
  mobile: {
    eyebrow: string
    title: string
    text: string
    bullets: string[]
    phoneTitle: string
    phoneSubtitle: string
    status: string
    progress: string
    photos: string
    note: string
  }
  trust: {
    eyebrow: string
    title: string
    text: string
    items: { title: string; text: string }[]
    helpTitle: string
    helpText: string
  }
  demoDetail: string
  faqs: FieldWorkFAQ[]
}

export const fieldWorkCopyByLocale: Record<Locale, FieldWorkCopy> = {
  cs: {
    workflowText:
      'Diriqo propojuje poptávky, chytré nabídky, zakázky, pracovníky v mobilu, náklady, faktury a zákaznický přehled v jednom jednoduchém toku.',
    workflowSteps: [
      {
        title: 'Poptávky na jednom místě',
        text: 'Poptávky mohou přijít z e-mailu, ručně od zákazníka nebo přímo z webu do Diriqo.',
        note: 'Volitelně vám poptávky z nového webu napojíme do systému jednorázovým webovým balíčkem.',
      },
      {
        title: 'Odešlete chytrou nabídku',
        text: 'Jedním klikem odešlete nabídku a vidíte, kdy ji zákazník otevřel, co si prohlížel a na co reaguje.',
        note: 'Se zákazníkem můžete komunikovat přímo z Diriqo.',
      },
      {
        title: 'Z nabídky vznikne zakázka',
        text: 'Ze schválené nabídky na pár kliknutí vytvoříte zakázku a odešlete ji pracovníkům do mobilní aplikace.',
      },
      {
        title: 'Pracovník ji má v mobilu',
        text: 'V terénu vidí místo, čas, poznámky, úkoly i potřebné informace.',
      },
      {
        title: 'Pracovník potvrdí práci',
        text: 'Po dokončení potvrdí práci, nahraje fotky a systém automaticky uloží čas.',
        note: 'Z uloženého času lze počítat odměny pracovníků.',
      },
      {
        title: 'Vidíte náklady i zisk',
        text: 'Po ukončení směn máte přehled o průběhu zakázky, časech, nákladech i zisku.',
      },
      {
        title: 'Faktura jde z Diriqo',
        text: 'Po ukončení zakázky vytvoříte fakturu a odešlete ji e-mailem přímo ze systému.',
      },
      {
        title: 'Zákazník má vlastní přehled',
        text: 'S webovým balíčkem vidí průběh práce, objednané zakázky, nabídky i faktury.',
        note: 'Další práci může objednat přes systém jako novou poptávku.',
      },
    ],
    mobile: {
      eyebrow: 'Mobilní práce',
      title: 'Mobilní aplikace pro pracovníky v terénu.',
      text: 'Diriqo není jen administrace v prohlížeči. Pracovníci mají jednoduchý pracovní přehled v telefonu, takže méně věcí končí ve WhatsAppu a telefonátech.',
      bullets: [
        'dnešní zakázky a adresa v kapse',
        'fotky před/po u správné práce',
        'stav práce a čas bez papírů',
        'jednoduché i pro netechnické pracovníky',
      ],
      phoneTitle: 'Dnešní práce',
      phoneSubtitle: 'Úklid kanceláří',
      status: 'Přiřazeno',
      progress: 'Průběh práce',
      photos: 'Fotky před/po',
      note: 'Méně volání. Méně dohledávání. Více klidu v provozu.',
    },
    trust: {
      eyebrow: 'Důvěra a podpora',
      title: 'Jednoduché pro tým, čitelné pro majitele.',
      text: 'Diriqo je stavěné pro malé servisní firmy, které potřebují práci řídit bez složitého ERP. V aplikaci je navíc kontextová nápověda dostupná na každé stránce.',
      items: [
        { title: 'Bezpečný cloudový systém', text: 'Účet, firma a přístupy jsou oddělené podle firemního provozu.' },
        { title: 'Role a přístupy', text: 'Webová administrace a pracovní pohled mají jasně oddělený účel.' },
        { title: 'Navrženo v Evropě', text: 'Praktický systém pro malé týmy, ne korporátní ERP vrstva navíc.' },
      ],
      helpTitle: 'Plovoucí nápověda v aplikaci',
      helpText: 'Po registraci lze začít hned, spustit krátký tutorial, detailnější průvodce a kdykoliv se k nápovědě vrátit.',
    },
    demoDetail:
      'Demo si můžete projít bez nastavování. Uvidíte, jak spolu souvisí zakázky, pracovníci, fotky a přehled firmy.',
    faqs: [
      {
        question: 'Je v Diriqo mobilní aplikace pro pracovníky?',
        answer: 'Ano. Pracovníci mají jednoduchý mobilní pohled na zakázky, detaily práce, fotky a průběh.',
      },
      {
        question: 'Můžu si Diriqo vyzkoušet před zadáním vlastních dat?',
        answer: 'Ano. Demo slouží k prohlížení ukázkových dat bez nastavování a bez zásahu do skutečné firmy.',
      },
      {
        question: 'Co se stane po registraci?',
        answer: 'Nejprve vytvoříte účet, potom nastavíte firmu. V aplikaci je možné použít krátký nebo podrobnější průvodce.',
      },
      {
        question: 'Můžu začít bez složitého nastavení?',
        answer: 'Ano. Základ je jednoduchý: zákazník, pracovník, zakázka a přiřazení práce.',
      },
    ],
  },
  en: {
    workflowText:
      'Diriqo connects inquiries, smart quotes, jobs, workers on mobile, costs, invoices and the customer overview in one simple flow.',
    workflowSteps: [
      {
        title: 'Inquiries in one place',
        text: 'Inquiries can come from email, be added manually, or arrive from your website directly into Diriqo.',
        note: 'If you want website inquiries connected to Diriqo, ask us about the one-time website package.',
      },
      {
        title: 'Send a smart quote',
        text: 'Send a quote in one click and see when the customer opened it, what they viewed and what they react to.',
        note: 'You can communicate with the customer directly from Diriqo.',
      },
      {
        title: 'Turn an approved quote into a job',
        text: 'Create a job from an approved quote in a few clicks and send it to workers in the mobile app.',
      },
      {
        title: 'Worker has the job on mobile',
        text: 'In the field they see location, time, notes, tasks and the information they need.',
      },
      {
        title: 'Worker confirms the work',
        text: 'After finishing, they confirm the work, upload photos and the system saves time automatically.',
        note: 'Saved time can be used to calculate worker pay.',
      },
      {
        title: 'See progress, costs and profit',
        text: 'After shifts end, you see job progress, time, costs and estimated profit.',
      },
      {
        title: 'Send the invoice from Diriqo',
        text: 'After the job is closed, create an invoice and send it by email directly from the system.',
      },
      {
        title: 'Customer has their own overview',
        text: 'With the website package, customers can see work progress, ordered jobs, quotes and invoices.',
        note: 'They can request more work through the system as a new inquiry.',
      },
    ],
    mobile: {
      eyebrow: 'Field work',
      title: 'Mobile app for your workers.',
      text: 'Diriqo is not only browser administration. Workers get a simple mobile view of their work, so fewer details end up in WhatsApp threads and phone calls.',
      bullets: [
        'today’s jobs and address in the pocket',
        'before/after photos on the right job',
        'work progress and time without paper',
        'simple enough for non-technical workers',
      ],
      phoneTitle: 'Today’s work',
      phoneSubtitle: 'Office cleaning',
      status: 'Assigned',
      progress: 'Work progress',
      photos: 'Before/after photos',
      note: 'Less calling. Less searching. More calm in daily operations.',
    },
    trust: {
      eyebrow: 'Trust and guidance',
      title: 'Simple for the team, clear for the owner.',
      text: 'Diriqo is built for small service businesses that need operations without heavy ERP overhead. Contextual help is available inside the app on every page.',
      items: [
        { title: 'Secure cloud system', text: 'Accounts, companies and access are separated around the company workspace.' },
        { title: 'Role-based access', text: 'Office administration and worker views have a clear purpose.' },
        { title: 'Designed in Europe', text: 'A practical system for small teams, not another enterprise layer.' },
      ],
      helpTitle: 'Floating help inside the app',
      helpText: 'After registration, users can start immediately, use a short tutorial, open a detailed guide and return to help anytime.',
    },
    demoDetail:
      'You can explore the demo without setting anything up and see how jobs, workers, photos and company overview fit together.',
    faqs: [
      {
        question: 'Is there a mobile app for workers?',
        answer: 'Yes. Workers have a simple mobile view for jobs, work details, photos and progress.',
      },
      {
        question: 'Can I try Diriqo before entering real data?',
        answer: 'Yes. The demo lets you explore sample data without setup and without changing your real company data.',
      },
      {
        question: 'What happens after registration?',
        answer: 'You create an account first, then set up your company. Inside the app, you can use a short or more detailed guide.',
      },
      {
        question: 'Can I start without setup?',
        answer: 'Yes. The basic flow is intentionally simple: customer, worker, job and assignment.',
      },
    ],
  },
  de: {
    workflowText:
      'Diriqo verbindet Anfragen, smarte Angebote, Aufträge, Mitarbeiter in der mobilen App, Kosten, Rechnungen und Kundenübersicht in einem einfachen Ablauf.',
    workflowSteps: [
      {
        title: 'Anfragen an einem Ort',
        text: 'Anfragen kommen per E-Mail, manuell vom Kunden oder direkt von der Website in Diriqo.',
        note: 'Wenn Website-Anfragen direkt ins System gehen sollen, sprecht uns auf das einmalige Website-Paket an.',
      },
      {
        title: 'Smartes Angebot senden',
        text: 'Du sendest ein Angebot mit einem Klick und siehst, wann der Kunde es öffnet, was er ansieht und worauf er reagiert.',
        note: 'Mit dem Kunden kannst du direkt aus Diriqo kommunizieren.',
      },
      {
        title: 'Aus Angebot wird Auftrag',
        text: 'Aus einem angenommenen Angebot erstellst du in wenigen Klicks einen Auftrag und sendest ihn an die mobile App.',
      },
      {
        title: 'Mitarbeiter hat den Auftrag mobil',
        text: 'Vor Ort sieht er Ort, Zeit, Notizen, Aufgaben und alle wichtigen Informationen.',
      },
      {
        title: 'Mitarbeiter bestätigt die Arbeit',
        text: 'Nach Abschluss bestätigt er die Arbeit, lädt Fotos hoch und das System speichert die Zeit automatisch.',
        note: 'Aus der gespeicherten Zeit lassen sich Vergütungen berechnen.',
      },
      {
        title: 'Fortschritt, Kosten und Gewinn',
        text: 'Nach Ende der Schichten siehst du Verlauf, Zeiten, Kosten und geschätzten Gewinn.',
      },
      {
        title: 'Rechnung direkt aus Diriqo',
        text: 'Nach Abschluss des Auftrags erstellst du die Rechnung und sendest sie per E-Mail aus dem System.',
      },
      {
        title: 'Kunde hat eigene Übersicht',
        text: 'Mit dem Website-Paket sieht der Kunde Arbeitsverlauf, bestellte Aufträge, Angebote und Rechnungen.',
        note: 'Weitere Arbeit kann er als neue Anfrage direkt im System bestellen.',
      },
    ],
    mobile: {
      eyebrow: 'Arbeit vor Ort',
      title: 'Mobile App für Mitarbeiter im Feld.',
      text: 'Diriqo ist nicht nur Verwaltung im Browser. Mitarbeiter bekommen eine einfache mobile Arbeitsansicht und weniger landet in Chats oder Telefonaten.',
      bullets: ['heutige Aufträge und Adresse', 'Vorher/Nachher-Fotos beim Auftrag', 'Fortschritt und Zeit ohne Papier', 'einfach auch für nicht-technische Mitarbeiter'],
      phoneTitle: 'Heutige Arbeit',
      phoneSubtitle: 'Büroreinigung',
      status: 'Zugewiesen',
      progress: 'Arbeitsfortschritt',
      photos: 'Vorher/Nachher-Fotos',
      note: 'Weniger Telefonate. Weniger Suchen. Mehr Ruhe im Betrieb.',
    },
    trust: {
      eyebrow: 'Vertrauen und Hilfe',
      title: 'Einfach fürs Team, klar für den Inhaber.',
      text: 'Diriqo ist für kleine Servicebetriebe gebaut, die Betrieb ohne schweres ERP brauchen. Kontextuelle Hilfe ist in der App auf jeder Seite verfügbar.',
      items: [
        { title: 'Sicheres Cloud-System', text: 'Konten, Firmen und Zugriffe sind nach Firmenarbeitsbereich getrennt.' },
        { title: 'Rollen und Zugriffe', text: 'Administration und Mitarbeiteransicht haben klare Aufgaben.' },
        { title: 'In Europa entworfen', text: 'Ein praktisches System für kleine Teams, keine Enterprise-Schicht.' },
      ],
      helpTitle: 'Schwebende Hilfe in der App',
      helpText: 'Nach der Registrierung kann man sofort starten, ein kurzes Tutorial nutzen oder später zur Hilfe zurückkehren.',
    },
    demoDetail: 'Die Demo funktioniert ohne Einrichtung und zeigt, wie Aufträge, Mitarbeiter, Fotos und Überblick zusammenpassen.',
    faqs: [
      { question: 'Gibt es eine mobile App für Mitarbeiter?', answer: 'Ja. Mitarbeiter sehen Aufträge, Details, Fotos und Fortschritt mobil.' },
      { question: 'Kann ich Diriqo ohne eigene Daten testen?', answer: 'Ja. Die Demo nutzt Beispieldaten und verändert keine echte Firma.' },
      { question: 'Was passiert nach der Registrierung?', answer: 'Zuerst Konto erstellen, danach Firma einrichten. In der App gibt es Hilfe und Tutorial.' },
      { question: 'Kann ich ohne große Einrichtung starten?', answer: 'Ja. Der Grundfluss bleibt Kunde, Mitarbeiter, Auftrag und Zuweisung.' },
    ],
  },
  pl: {
    workflowText:
      'Diriqo łączy zapytania, inteligentne oferty, zlecenia, pracowników w aplikacji mobilnej, koszty, faktury i przegląd klienta w jednym prostym flow.',
    workflowSteps: [
      {
        title: 'Zapytania w jednym miejscu',
        text: 'Zapytania mogą przyjść z e-maila, zostać dodane ręcznie albo trafić z webu prosto do Diriqo.',
        note: 'Jeśli chcesz zapytania z webu w systemie, zapytaj o jednorazowy pakiet webowy.',
      },
      {
        title: 'Wysyłasz inteligentną ofertę',
        text: 'Jednym kliknięciem wysyłasz ofertę i widzisz, kiedy klient ją otworzył, co oglądał i na co reaguje.',
        note: 'Z klientem możesz komunikować się bezpośrednio z Diriqo.',
      },
      {
        title: 'Z oferty powstaje zlecenie',
        text: 'Z zaakceptowanej oferty tworzysz zlecenie w kilka kliknięć i wysyłasz je do aplikacji mobilnej.',
      },
      {
        title: 'Pracownik ma zlecenie w telefonie',
        text: 'W terenie widzi miejsce, czas, notatki, zadania i potrzebne informacje.',
      },
      {
        title: 'Pracownik potwierdza pracę',
        text: 'Po zakończeniu potwierdza pracę, dodaje zdjęcia, a system automatycznie zapisuje czas.',
        note: 'Z zapisanego czasu można liczyć wynagrodzenia pracowników.',
      },
      {
        title: 'Widzisz koszty i zysk',
        text: 'Po zakończeniu zmian masz przegląd przebiegu zlecenia, czasu, kosztów i zysku.',
      },
      {
        title: 'Faktura wychodzi z Diriqo',
        text: 'Po zamknięciu zlecenia tworzysz fakturę i wysyłasz ją e-mailem prosto z systemu.',
      },
      {
        title: 'Klient ma własny przegląd',
        text: 'Z pakietem webowym klient widzi przebieg pracy, zamówione zlecenia, oferty i faktury.',
        note: 'Kolejną pracę może zamówić w systemie jako nowe zapytanie.',
      },
    ],
    mobile: {
      eyebrow: 'Praca w terenie',
      title: 'Aplikacja mobilna dla pracowników.',
      text: 'Diriqo to nie tylko administracja w przeglądarce. Pracownicy mają prosty widok pracy w telefonie, więc mniej informacji ginie w WhatsAppie i telefonach.',
      bullets: ['dzisiejsze zlecenia i adres w telefonie', 'zdjęcia przed/po przy zleceniu', 'postęp i czas bez papieru', 'proste także dla nietechnicznych osób'],
      phoneTitle: 'Dzisiejsza praca',
      phoneSubtitle: 'Sprzątanie biura',
      status: 'Przypisane',
      progress: 'Postęp pracy',
      photos: 'Zdjęcia przed/po',
      note: 'Mniej telefonów. Mniej szukania. Więcej spokoju w pracy.',
    },
    trust: {
      eyebrow: 'Zaufanie i pomoc',
      title: 'Proste dla zespołu, czytelne dla właściciela.',
      text: 'Diriqo jest dla małych firm usługowych, które potrzebują działania bez ciężkiego ERP. Kontekstowa pomoc jest dostępna w aplikacji na każdej stronie.',
      items: [
        { title: 'Bezpieczny system cloud', text: 'Konta, firmy i dostępy są oddzielone według przestrzeni firmy.' },
        { title: 'Role i dostępy', text: 'Administracja i widok pracownika mają jasny cel.' },
        { title: 'Zaprojektowane w Europie', text: 'Praktyczny system dla małych zespołów, bez korporacyjnej warstwy.' },
      ],
      helpTitle: 'Pływająca pomoc w aplikacji',
      helpText: 'Po rejestracji można zacząć od razu, użyć krótkiego tutorialu albo wrócić do pomocy później.',
    },
    demoDetail: 'Demo można przejść bez konfiguracji i zobaczyć, jak zlecenia, pracownicy, zdjęcia i przegląd firmy działają razem.',
    faqs: [
      { question: 'Czy jest aplikacja mobilna dla pracowników?', answer: 'Tak. Pracownicy widzą zlecenia, szczegóły, zdjęcia i postęp w telefonie.' },
      { question: 'Czy mogę sprawdzić Diriqo bez własnych danych?', answer: 'Tak. Demo korzysta z przykładowych danych i nie zmienia prawdziwej firmy.' },
      { question: 'Co dzieje się po rejestracji?', answer: 'Najpierw konto, potem konfiguracja firmy. W aplikacji jest pomoc i tutorial.' },
      { question: 'Czy mogę zacząć bez dużej konfiguracji?', answer: 'Tak. Podstawowy flow to klient, pracownik, zlecenie i przypisanie.' },
    ],
  },
  hu: {
    workflowText:
      'A Diriqo egy egyszerű folyamatba köti az érdeklődéseket, ajánlatokat, munkákat, mobilos dolgozókat, költségeket, számlákat és ügyféláttekintést.',
    workflowSteps: [
      {
        title: 'Érdeklődések egy helyen',
        text: 'Az érdeklődés jöhet e-mailből, kézzel az ügyféltől vagy közvetlenül a weboldalról a Diriqóba.',
        note: 'Ha webes érdeklődéseket is szeretnél a rendszerben, kérdezz az egyszeri webes csomagról.',
      },
      {
        title: 'Okos ajánlat küldése',
        text: 'Egy kattintással elküldöd az ajánlatot, és látod, mikor nyitotta meg az ügyfél, mit nézett és mire reagált.',
        note: 'Az ügyféllel közvetlenül a Diriqóból kommunikálhatsz.',
      },
      {
        title: 'Ajánlatból munka lesz',
        text: 'Az elfogadott ajánlatból pár kattintással munkát hozol létre, és kiküldöd a mobil appba.',
      },
      {
        title: 'A dolgozó mobilon látja',
        text: 'Terepen látja a helyet, időt, jegyzeteket, feladatokat és minden fontos információt.',
      },
      {
        title: 'A dolgozó lezárja a munkát',
        text: 'Befejezés után megerősíti a munkát, fotókat tölt fel, a rendszer pedig automatikusan menti az időt.',
        note: 'A mentett időből dolgozói díjazás számolható.',
      },
      {
        title: 'Látod a költséget és profitot',
        text: 'A műszakok után azonnal látod a munka állapotát, időket, költségeket és profitot.',
      },
      {
        title: 'Számla Diriqóból',
        text: 'A munka lezárása után számlát készítesz és e-mailben elküldöd közvetlenül a rendszerből.',
      },
      {
        title: 'Az ügyfél saját áttekintést kap',
        text: 'A webes csomaggal az ügyfél látja a munkák állapotát, megrendeléseket, ajánlatokat és számlákat.',
        note: 'Új munkát közvetlenül a rendszerben kérhet új érdeklődésként.',
      },
    ],
    mobile: {
      eyebrow: 'Terepmunka',
      title: 'Mobil app a terepen dolgozóknak.',
      text: 'A Diriqo nem csak böngészős admin. A dolgozók egyszerű mobil nézetet kapnak, így kevesebb részlet vész el chatekben és hívásokban.',
      bullets: ['mai munkák és cím mobilon', 'előtte/utána fotók a munkánál', 'haladás és idő papír nélkül', 'egyszerű nem technikai dolgozóknak is'],
      phoneTitle: 'Mai munka',
      phoneSubtitle: 'Irodatakarítás',
      status: 'Kiosztva',
      progress: 'Munka állapota',
      photos: 'Előtte/utána fotók',
      note: 'Kevesebb telefon. Kevesebb keresés. Nyugodtabb működés.',
    },
    trust: {
      eyebrow: 'Bizalom és segítség',
      title: 'Egyszerű a csapatnak, átlátható a tulajdonosnak.',
      text: 'A Diriqo kis szolgáltató cégeknek készült, nehéz ERP nélkül. Kontextusos segítség elérhető az app minden oldalán.',
      items: [
        { title: 'Biztonságos cloud rendszer', text: 'Fiókok, cégek és hozzáférések céges munkaterület szerint különülnek el.' },
        { title: 'Szerepek és hozzáférések', text: 'Az admin és dolgozói nézet célja világosan különbözik.' },
        { title: 'Európában tervezve', text: 'Gyakorlati rendszer kis csapatoknak, nem enterprise réteg.' },
      ],
      helpTitle: 'Lebegő segítség az appban',
      helpText: 'Regisztráció után azonnal lehet kezdeni, rövid tutorialt használni vagy később visszatérni a segítséghez.',
    },
    demoDetail: 'A demó beállítás nélkül kipróbálható, és megmutatja, hogyan kapcsolódik munka, dolgozó, fotó és áttekintés.',
    faqs: [
      { question: 'Van mobil app a dolgozóknak?', answer: 'Igen. A dolgozók mobilon látják a munkákat, részleteket, fotókat és állapotot.' },
      { question: 'Kipróbálhatom saját adatok nélkül?', answer: 'Igen. A demó mintaadatokat használ, és nem módosít valódi céget.' },
      { question: 'Mi történik regisztráció után?', answer: 'Először fiók, utána cégbeállítás. Az appban segítség és tutorial is van.' },
      { question: 'Kezdhetek nagy beállítás nélkül?', answer: 'Igen. Az alap folyamat: ügyfél, dolgozó, munka és hozzárendelés.' },
    ],
  },
  es: {
    workflowText:
      'Diriqo conecta solicitudes, presupuestos inteligentes, trabajos, trabajadores en móvil, costes, facturas y vista del cliente en un flujo simple.',
    workflowSteps: [
      {
        title: 'Solicitudes en un lugar',
        text: 'Las solicitudes pueden llegar por e-mail, añadirse manualmente o entrar desde la web directamente en Diriqo.',
        note: 'Si quieres solicitudes de la web conectadas al sistema, pregunta por el paquete web único.',
      },
      {
        title: 'Envía un presupuesto inteligente',
        text: 'Envías el presupuesto en un clic y ves cuándo el cliente lo abrió, qué miró y a qué responde.',
        note: 'Puedes comunicarte con el cliente directamente desde Diriqo.',
      },
      {
        title: 'Del presupuesto sale el trabajo',
        text: 'Desde un presupuesto aceptado creas el trabajo en pocos clics y lo envías a la app móvil.',
      },
      {
        title: 'Trabajador lo tiene en móvil',
        text: 'En campo ve lugar, hora, notas, tareas y toda la información necesaria.',
      },
      {
        title: 'Trabajador confirma el trabajo',
        text: 'Al terminar confirma el trabajo, sube fotos y el sistema guarda el tiempo automáticamente.',
        note: 'El tiempo guardado puede servir para calcular pagos.',
      },
      {
        title: 'Ves costes y beneficio',
        text: 'Al cerrar turnos tienes una vista del progreso, tiempos, costes y beneficio.',
      },
      {
        title: 'Factura desde Diriqo',
        text: 'Al terminar el trabajo creas la factura y la envías por e-mail desde el sistema.',
      },
      {
        title: 'El cliente tiene su vista',
        text: 'Con el paquete web puede ver avance, trabajos pedidos, presupuestos y facturas.',
        note: 'También puede pedir más trabajo como nueva solicitud.',
      },
    ],
    mobile: {
      eyebrow: 'Trabajo en campo',
      title: 'App móvil para tus trabajadores.',
      text: 'Diriqo no es solo administración web. Los trabajadores tienen una vista simple en móvil, así menos detalles acaban en WhatsApp y llamadas.',
      bullets: ['trabajos de hoy y dirección en móvil', 'fotos antes/después en el trabajo', 'progreso y tiempo sin papel', 'simple para trabajadores no técnicos'],
      phoneTitle: 'Trabajo de hoy',
      phoneSubtitle: 'Limpieza de oficina',
      status: 'Asignado',
      progress: 'Progreso',
      photos: 'Fotos antes/después',
      note: 'Menos llamadas. Menos búsqueda. Más calma operativa.',
    },
    trust: {
      eyebrow: 'Confianza y ayuda',
      title: 'Simple para el equipo, claro para el dueño.',
      text: 'Diriqo está pensado para pequeñas empresas de servicios sin ERP pesado. La ayuda contextual está disponible dentro de la app en cada página.',
      items: [
        { title: 'Sistema cloud seguro', text: 'Cuentas, empresas y accesos se separan por espacio de empresa.' },
        { title: 'Roles y accesos', text: 'La administración y la vista del trabajador tienen objetivos claros.' },
        { title: 'Diseñado en Europa', text: 'Un sistema práctico para equipos pequeños, no otra capa enterprise.' },
      ],
      helpTitle: 'Ayuda flotante en la app',
      helpText: 'Tras el registro se puede empezar, usar un tutorial corto o volver a la ayuda más tarde.',
    },
    demoDetail: 'La demo se puede explorar sin configuración y muestra cómo encajan trabajos, trabajadores, fotos y vista de empresa.',
    faqs: [
      { question: '¿Hay app móvil para trabajadores?', answer: 'Sí. Los trabajadores ven trabajos, detalles, fotos y progreso en móvil.' },
      { question: '¿Puedo probar Diriqo sin datos reales?', answer: 'Sí. La demo usa datos de ejemplo y no cambia una empresa real.' },
      { question: '¿Qué pasa después del registro?', answer: 'Primero creas cuenta y después configuras empresa. La app incluye ayuda y tutorial.' },
      { question: '¿Puedo empezar sin mucha configuración?', answer: 'Sí. El flujo básico es cliente, trabajador, trabajo y asignación.' },
    ],
  },
  it: {
    workflowText:
      'Diriqo collega richieste, preventivi intelligenti, lavori, operatori su mobile, costi, fatture e vista cliente in un flusso semplice.',
    workflowSteps: [
      {
        title: 'Richieste in un posto',
        text: 'Le richieste possono arrivare via e-mail, essere inserite a mano o entrare dal sito direttamente in Diriqo.',
        note: 'Se vuoi richieste dal nuovo sito nel sistema, chiedi il pacchetto web una tantum.',
      },
      {
        title: 'Invii un preventivo intelligente',
        text: 'Invii il preventivo con un clic e vedi quando il cliente lo apre, cosa guarda e a cosa reagisce.',
        note: 'Puoi comunicare con il cliente direttamente da Diriqo.',
      },
      {
        title: 'Dal preventivo nasce il lavoro',
        text: 'Da un preventivo approvato crei il lavoro in pochi clic e lo invii all’app mobile.',
      },
      {
        title: 'L’operatore lo ha sul mobile',
        text: 'Sul campo vede luogo, ora, note, attività e informazioni necessarie.',
      },
      {
        title: 'L’operatore conferma il lavoro',
        text: 'Alla fine conferma il lavoro, carica foto e il sistema salva automaticamente il tempo.',
        note: 'Dal tempo salvato si possono calcolare i compensi.',
      },
      {
        title: 'Vedi costi e profitto',
        text: 'Dopo i turni hai una vista su avanzamento, tempi, costi e profitto.',
      },
      {
        title: 'Fattura da Diriqo',
        text: 'Alla chiusura del lavoro crei la fattura e la invii via e-mail dal sistema.',
      },
      {
        title: 'Il cliente ha una vista propria',
        text: 'Con il pacchetto web vede avanzamento, lavori ordinati, preventivi e fatture.',
        note: 'Può ordinare altro lavoro come nuova richiesta nel sistema.',
      },
    ],
    mobile: {
      eyebrow: 'Lavoro sul campo',
      title: 'App mobile per gli operatori.',
      text: 'Diriqo non è solo amministrazione web. Gli operatori hanno una vista mobile semplice, così meno dettagli finiscono in WhatsApp e telefonate.',
      bullets: ['lavori di oggi e indirizzo nel telefono', 'foto prima/dopo nel lavoro giusto', 'progresso e tempo senza carta', 'semplice anche per operatori non tecnici'],
      phoneTitle: 'Lavoro di oggi',
      phoneSubtitle: 'Pulizia ufficio',
      status: 'Assegnato',
      progress: 'Progresso',
      photos: 'Foto prima/dopo',
      note: 'Meno chiamate. Meno ricerche. Più calma operativa.',
    },
    trust: {
      eyebrow: 'Fiducia e aiuto',
      title: 'Semplice per il team, chiaro per il titolare.',
      text: 'Diriqo è pensato per piccole aziende di servizi senza ERP pesante. L’aiuto contestuale è disponibile nell’app su ogni pagina.',
      items: [
        { title: 'Sistema cloud sicuro', text: 'Account, aziende e accessi sono separati per spazio aziendale.' },
        { title: 'Ruoli e accessi', text: 'Amministrazione e vista operatore hanno scopi chiari.' },
        { title: 'Disegnato in Europa', text: 'Sistema pratico per piccoli team, non un livello enterprise.' },
      ],
      helpTitle: 'Aiuto flottante nell’app',
      helpText: 'Dopo la registrazione si può iniziare subito, usare un tutorial breve o tornare all’aiuto più tardi.',
    },
    demoDetail: 'La demo si esplora senza configurazione e mostra come lavori, operatori, foto e panoramica aziendale stanno insieme.',
    faqs: [
      { question: 'C’è un’app mobile per gli operatori?', answer: 'Sì. Gli operatori vedono lavori, dettagli, foto e avanzamento sul mobile.' },
      { question: 'Posso provare Diriqo senza dati reali?', answer: 'Sì. La demo usa dati esempio e non modifica aziende reali.' },
      { question: 'Cosa succede dopo la registrazione?', answer: 'Prima crei account, poi configuri azienda. Nell’app ci sono aiuto e tutorial.' },
      { question: 'Posso iniziare senza molta configurazione?', answer: 'Sì. Il flusso base è cliente, operatore, lavoro e assegnazione.' },
    ],
  },
  fr: {
    workflowText:
      'Diriqo relie demandes, devis intelligents, interventions, équipes sur mobile, coûts, factures et vue client dans un flux simple.',
    workflowSteps: [
      {
        title: 'Demandes au même endroit',
        text: 'Les demandes peuvent venir par e-mail, être ajoutées à la main ou arriver du site directement dans Diriqo.',
        note: 'Si tu veux connecter les demandes du site au système, demande le forfait web ponctuel.',
      },
      {
        title: 'Envoie un devis intelligent',
        text: 'Tu envoies le devis en un clic et vois quand le client l’ouvre, ce qu’il regarde et ce à quoi il réagit.',
        note: 'Tu peux communiquer avec le client directement depuis Diriqo.',
      },
      {
        title: 'Le devis devient intervention',
        text: 'Depuis un devis accepté, tu crées l’intervention en quelques clics et l’envoies dans l’app mobile.',
      },
      {
        title: 'L’équipe l’a sur mobile',
        text: 'Sur le terrain, elle voit lieu, heure, notes, tâches et informations nécessaires.',
      },
      {
        title: 'L’équipe confirme le travail',
        text: 'À la fin, elle confirme le travail, charge les photos et le système enregistre le temps automatiquement.',
        note: 'Le temps enregistré peut servir à calculer les rémunérations.',
      },
      {
        title: 'Tu vois coûts et marge',
        text: 'Après les shifts, tu vois avancement, temps, coûts et marge estimée.',
      },
      {
        title: 'Facture depuis Diriqo',
        text: 'Une fois l’intervention terminée, tu crées la facture et l’envoies par e-mail depuis le système.',
      },
      {
        title: 'Le client a sa vue',
        text: 'Avec le forfait web, il suit l’avancement, les interventions commandées, les devis et les factures.',
        note: 'Il peut commander un nouveau travail dans le système comme nouvelle demande.',
      },
    ],
    mobile: {
      eyebrow: 'Travail terrain',
      title: 'Application mobile pour les équipes.',
      text: 'Diriqo n’est pas seulement une administration web. Les équipes ont une vue mobile simple, donc moins de détails finissent dans WhatsApp et les appels.',
      bullets: ['interventions du jour et adresse sur mobile', 'photos avant/après sur la bonne intervention', 'avancement et temps sans papier', 'simple pour équipes non techniques'],
      phoneTitle: 'Travail du jour',
      phoneSubtitle: 'Nettoyage bureau',
      status: 'Assigné',
      progress: 'Avancement',
      photos: 'Photos avant/après',
      note: 'Moins d’appels. Moins de recherche. Plus de calme opérationnel.',
    },
    trust: {
      eyebrow: 'Confiance et aide',
      title: 'Simple pour l’équipe, clair pour le responsable.',
      text: 'Diriqo est pensé pour petites entreprises de services sans ERP lourd. L’aide contextuelle est disponible dans l’app sur chaque page.',
      items: [
        { title: 'Système cloud sécurisé', text: 'Comptes, entreprises et accès sont séparés par espace entreprise.' },
        { title: 'Rôles et accès', text: 'Administration et vue équipe ont des objectifs clairs.' },
        { title: 'Conçu en Europe', text: 'Un système pratique pour petites équipes, pas une couche enterprise.' },
      ],
      helpTitle: 'Aide flottante dans l’app',
      helpText: 'Après inscription, on peut démarrer, utiliser un court tutoriel ou revenir à l’aide plus tard.',
    },
    demoDetail: 'La démo se parcourt sans configuration et montre comment interventions, équipes, photos et vue entreprise fonctionnent ensemble.',
    faqs: [
      { question: 'Y a-t-il une application mobile pour les équipes ?', answer: 'Oui. Les équipes voient interventions, détails, photos et avancement sur mobile.' },
      { question: 'Puis-je tester Diriqo sans données réelles ?', answer: 'Oui. La démo utilise des données exemple et ne modifie aucune vraie entreprise.' },
      { question: 'Que se passe-t-il après inscription ?', answer: 'D’abord le compte, puis la configuration entreprise. L’app inclut aide et tutoriel.' },
      { question: 'Puis-je commencer sans grande configuration ?', answer: 'Oui. Le flux de base est client, équipe, intervention et assignation.' },
    ],
  },
}

export function getFieldWorkCopy(locale: Locale) {
  return fieldWorkCopyByLocale[locale] ?? fieldWorkCopyByLocale.en
}
