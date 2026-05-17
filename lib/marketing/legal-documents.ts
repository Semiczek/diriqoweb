import type { Metadata } from 'next'

import {
  alternateLanguages,
  contactEmail,
  localizePath,
  type Locale,
  type MarketingContent,
  type MetadataCopy,
} from '@/lib/marketing/content'

export const legalPageOrder = ['terms', 'privacy', 'cookies', 'gdpr'] as const

export type LegalPageKey = (typeof legalPageOrder)[number]

export type LegalTable = {
  headers: string[]
  rows: string[][]
}

export type LegalSection = {
  id: string
  title: string
  body: string[]
  bullets?: string[]
  table?: LegalTable
  note?: string
}

export type LegalDocument = {
  key: LegalPageKey
  eyebrow: string
  title: string
  intro: string
  meta: MetadataCopy
  lastUpdated: string
  updatedLabel: string
  updateNotice: string
  tocTitle: string
  navigationTitle: string
  summaryItems: string[]
  sections: LegalSection[]
}

type LegacyLegalPageKey = Exclude<LegalPageKey, 'gdpr'>

export const legalOperator = {
  name: 'JSPD Holding s.r.o.',
  registrationNumber: '23415738',
  address: 'Riegrova 17, 779 00 Olomouc',
  email: contactEmail,
  website: 'https://www.diriqo.com',
}

const csLastUpdated = '17. května 2026'

const lastUpdatedByLocale: Record<Locale, string> = {
  cs: csLastUpdated,
  en: 'May 17, 2026',
  de: '17. Mai 2026',
  pl: '17 maja 2026',
  hu: '2026. május 17.',
  es: '17 de mayo de 2026',
  it: '17 maggio 2026',
  fr: '17 mai 2026',
}

const csLegalUi = {
  eyebrow: 'Právní dokumentace Diriqo',
  updatedLabel: 'Poslední aktualizace',
  updateNotice:
    'Tyto dokumenty můžeme průběžně aktualizovat, zejména při změnách služby, právních požadavků nebo používané infrastruktury. Aktuální znění je vždy dostupné na této stránce.',
  tocTitle: 'Obsah dokumentu',
  navigationTitle: 'Právní dokumenty',
}

const legalUiByLocale: Record<
  Locale,
  {
    updatedLabel: string
    updateNotice: string
    tocTitle: string
    navigationTitle: string
  }
> = {
  cs: csLegalUi,
  en: {
    updatedLabel: 'Last updated',
    updateNotice:
      'These documents may be updated over time, especially when the service, legal requirements or infrastructure change. The current version is always available on this page.',
    tocTitle: 'Contents',
    navigationTitle: 'Legal documents',
  },
  de: {
    updatedLabel: 'Letzte Aktualisierung',
    updateNotice:
      'Diese Dokumente können aktualisiert werden, insbesondere bei Änderungen des Dienstes, rechtlichen Anforderungen oder der Infrastruktur.',
    tocTitle: 'Inhalt',
    navigationTitle: 'Rechtliche Dokumente',
  },
  pl: {
    updatedLabel: 'Ostatnia aktualizacja',
    updateNotice:
      'Dokumenty mogą być aktualizowane, zwłaszcza przy zmianach usługi, wymogów prawnych lub infrastruktury.',
    tocTitle: 'Spis treści',
    navigationTitle: 'Dokumenty prawne',
  },
  hu: {
    updatedLabel: 'Utolsó frissítés',
    updateNotice:
      'A dokumentumok idővel frissülhetnek, különösen a szolgáltatás, jogi követelmények vagy infrastruktúra változása esetén.',
    tocTitle: 'Tartalom',
    navigationTitle: 'Jogi dokumentumok',
  },
  es: {
    updatedLabel: 'Última actualización',
    updateNotice:
      'Estos documentos pueden actualizarse con el tiempo, especialmente si cambia el servicio, la normativa o la infraestructura.',
    tocTitle: 'Contenido',
    navigationTitle: 'Documentos legales',
  },
  it: {
    updatedLabel: 'Ultimo aggiornamento',
    updateNotice:
      'Questi documenti possono essere aggiornati nel tempo, soprattutto in caso di modifiche al servizio, ai requisiti legali o all’infrastruttura.',
    tocTitle: 'Contenuti',
    navigationTitle: 'Documenti legali',
  },
  fr: {
    updatedLabel: 'Dernière mise à jour',
    updateNotice:
      'Ces documents peuvent être mis à jour, notamment en cas d’évolution du service, des exigences légales ou de l’infrastructure.',
    tocTitle: 'Sommaire',
    navigationTitle: 'Documents juridiques',
  },
}

export const legalPageLabels: Record<Locale, Record<LegalPageKey, string>> = {
  cs: {
    terms: 'Podmínky',
    privacy: 'Ochrana osobních údajů',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  en: {
    terms: 'Terms',
    privacy: 'Privacy',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  de: {
    terms: 'Bedingungen',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  pl: {
    terms: 'Regulamin',
    privacy: 'Prywatność',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  hu: {
    terms: 'Feltételek',
    privacy: 'Adatvédelem',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  es: {
    terms: 'Condiciones',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  it: {
    terms: 'Termini',
    privacy: 'Privacy',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
  fr: {
    terms: 'Conditions',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
    gdpr: 'GDPR',
  },
}

const csLegalDocuments: Record<LegalPageKey, LegalDocument> = {
  terms: {
    key: 'terms',
    eyebrow: csLegalUi.eyebrow,
    title: 'Podmínky používání služby Diriqo',
    intro:
      'Tyto podmínky upravují používání veřejného webu, aplikace a souvisejících služeb Diriqo. Jsou psané pro profesionální B2B provoz, kde Diriqo pomáhá řídit zakázky, pracovníky, zákazníky, docházku, nabídky, komunikaci, fakturaci a provoz firem.',
    meta: {
      title: 'Podmínky používání Diriqo',
      description:
        'Profesionální podmínky používání služby Diriqo pro B2B SaaS provoz, účty, data, platby, dostupnost, bezpečnost a odpovědnost.',
    },
    lastUpdated: csLastUpdated,
    updatedLabel: csLegalUi.updatedLabel,
    updateNotice: csLegalUi.updateNotice,
    tocTitle: csLegalUi.tocTitle,
    navigationTitle: csLegalUi.navigationTitle,
    summaryItems: [
      'B2B SaaS pro řízení provozu firem',
      'Rozumné omezení odpovědnosti a dostupnosti',
      'Jasná pravidla pro data, export a bezpečnost',
    ],
    sections: [
      {
        id: 'uvod',
        title: '1. Úvod',
        body: [
          `Službu Diriqo provozuje ${legalOperator.name}, IČO ${legalOperator.registrationNumber}, se sídlem ${legalOperator.address}. Diriqo je profesionální SaaS platforma určená především podnikatelům a firmám pro řízení provozu, zakázek, pracovníků, zákazníků a souvisejících procesů.`,
          'Používáním služby uživatel potvrzuje, že se s těmito podmínkami seznámil a bude službu používat v souladu s nimi. Pokud je mezi provozovatelem a zákazníkem uzavřena samostatná písemná smlouva, má taková smlouva přednost v rozsahu, ve kterém se od těchto podmínek výslovně liší.',
        ],
      },
      {
        id: 'definice',
        title: '2. Definice pojmů',
        body: ['Pro účely těchto podmínek mají níže uvedené pojmy následující význam:'],
        bullets: [
          'Diriqo nebo služba znamená webovou aplikaci, mobilní rozhraní, veřejný web a související funkce poskytované pod značkou Diriqo.',
          'Provozovatel znamená JSPD Holding s.r.o.',
          'Zákazník znamená firmu nebo podnikající osobu, která si službu zřídí nebo ji používá pro svůj provoz.',
          'Uživatel znamená osobu, která přistupuje do služby za zákazníka, například administrátor, pracovník, technik nebo jiný člen týmu.',
          'Data zákazníka znamenají data vložená do služby zákazníkem nebo jeho uživateli, zejména údaje o zakázkách, pracovnících, zákaznících, směnách, docházce, fotografiích, nabídkách, fakturách a komunikaci.',
          'Chytré nabídky znamenají funkce pro tvorbu, sdílení a sledování nabídek, včetně základního trackingu interakcí s nabídkou.',
        ],
      },
      {
        id: 'registrace-a-ucet',
        title: '3. Registrace a účet',
        body: [
          'Pro používání vybraných částí služby je nutné vytvořit účet a uvést pravdivé a aktuální údaje. Zákazník odpovídá za správu uživatelských přístupů, nastavení rolí a za to, že do služby přistupují pouze oprávněné osoby.',
          'Uživatel je povinen chránit své přihlašovací údaje a bez zbytečného odkladu informovat provozovatele, pokud má podezření na zneužití účtu nebo bezpečnostní incident. Provozovatel může vyžadovat ověření identity nebo další bezpečnostní kroky, pokud je to přiměřené ochraně služby.',
        ],
      },
      {
        id: 'pouzivani-sluzby',
        title: '4. Používání služby',
        body: [
          'Diriqo je určeno k běžnému a zákonnému řízení firemního provozu. Zákazník odpovídá za to, že službu používá v souladu s právními předpisy, těmito podmínkami, interními pravidly své organizace a právy třetích osob.',
          'Zákazník bere na vědomí, že kvalita výstupů služby závisí také na správnosti a úplnosti dat, která do služby vloží. Diriqo nenahrazuje účetní, právní, daňové, pracovněprávní ani bezpečnostní poradenství.',
        ],
      },
      {
        id: 'zakazane-pouziti',
        title: '5. Zakázané použití',
        body: ['Službu není dovoleno používat způsobem, který by mohl ohrozit její provoz, bezpečnost, ostatní zákazníky nebo práva třetích osob. Zakázáno je zejména:'],
        bullets: [
          'zneužívat službu k nezákonnému, klamavému, škodlivému nebo obtěžujícímu jednání,',
          'provádět reverse engineering, obcházet bezpečnostní prvky, zkoušet neoprávněný přístup nebo narušovat integritu služby,',
          'scrapovat, automatizovaně vytěžovat nebo hromadně kopírovat data bez předchozího souhlasu provozovatele,',
          'nahrávat škodlivý kód, malware, nelegální obsah nebo data, ke kterým zákazník nemá oprávnění,',
          'nadměrně zatěžovat infrastrukturu, provádět zátěžové testy bez dohody nebo používat službu způsobem, který přesahuje běžné provozní využití,',
          'přeprodávat, pronajímat nebo poskytovat službu třetím stranám jako vlastní službu bez písemné dohody.',
        ],
      },
      {
        id: 'dostupnost-sluzby',
        title: '6. Dostupnost služby',
        body: [
          'Provozovatel vynakládá přiměřené úsilí, aby služba byla dostupná, bezpečná a funkční. Zákazník bere na vědomí, že žádný online systém nelze provozovat s absolutní a nepřetržitou dostupností.',
          'Dostupnost může být ovlivněna údržbou, aktualizacemi, výpadky infrastruktury, chybami třetích stran, bezpečnostními opatřeními, vyšší mocí nebo jinými okolnostmi mimo přiměřenou kontrolu provozovatele. Pokud to okolnosti umožňují, provozovatel se snaží významné plánované zásahy oznamovat předem.',
        ],
      },
      {
        id: 'zmeny-sluzby',
        title: '7. Změny služby',
        body: [
          'Diriqo se průběžně vyvíjí. Provozovatel může službu upravovat, rozšiřovat, měnit nebo ukončovat jednotlivé funkce, pokud je to přiměřené povaze SaaS produktu, bezpečnosti, provozu, právním požadavkům nebo obchodnímu vývoji služby.',
          'Při změnách, které mají podstatný dopad na placené používání služby, se provozovatel snaží postupovat transparentně a zákazníka informovat s přiměřeným předstihem, pokud to okolnosti umožňují.',
        ],
      },
      {
        id: 'beta-preview',
        title: '8. Beta a preview funkce',
        body: [
          'Některé funkce mohou být označeny jako beta, preview, experimentální nebo testovací. Takové funkce mohou být méně stabilní, mohou se měnit rychleji než běžné části služby a nemusí být vhodné pro kritické firemní procesy bez vlastního ověření zákazníkem.',
          'Provozovatel může beta nebo preview funkce upravit, omezit nebo ukončit. Zákazník bere na vědomí, že u těchto funkcí mohou platit nižší očekávání dostupnosti, kompatibility a dlouhodobé podpory.',
        ],
      },
      {
        id: 'predplatne-a-platby',
        title: '9. Předplatné a platby',
        body: [
          'Placené tarify, doplňkové služby a případné jednorázové implementace se řídí cenami uvedenými na webu, v aplikaci nebo v individuální nabídce. Ceny mohou být uvedeny bez daní a poplatků, pokud není výslovně uvedeno jinak.',
          'Platby mohou být zpracovávány prostřednictvím třetích stran, zejména Stripe nebo obdobných poskytovatelů platební infrastruktury. Provozovatel neukládá kompletní údaje platebních karet, pokud je zpracovává platební poskytovatel.',
          'Při prodlení s platbou může provozovatel po přiměřeném upozornění omezit nebo pozastavit přístup k placeným funkcím. Změny cen se u stávajících zákazníků uplatní způsobem uvedeným v příslušné nabídce, smlouvě nebo oznámení.',
        ],
      },
      {
        id: 'ukonceni-uctu',
        title: '10. Ukončení účtu',
        body: [
          'Zákazník může používání služby ukončit podle typu tarifu, smlouvy nebo nastavení předplatného. Před ukončením účtu doporučujeme provést export důležitých dat.',
          'Provozovatel může ukončit poskytování služby nebo konkrétního účtu zejména při dlouhodobém neplacení, závažném porušení podmínek, právních důvodech, bezpečnostním riziku nebo ukončení provozu služby jako celku. Pokud to okolnosti umožňují, zákazník bude o takovém kroku informován s přiměřeným předstihem.',
        ],
      },
      {
        id: 'pozastaveni-uctu',
        title: '11. Pozastavení účtu',
        body: [
          'Provozovatel může dočasně pozastavit nebo omezit účet, pokud existuje důvodné podezření na zneužití služby, ohrožení bezpečnosti, porušení právních předpisů, neoprávněný přístup, nadměrné zatížení infrastruktury nebo prodlení s platbou.',
          'Pozastavení je používáno jako ochranné opatření. Pokud to okolnosti umožňují a neohrozí to bezpečnost nebo práva třetích osob, provozovatel zákazníkovi sdělí důvod a umožní přiměřenou nápravu.',
        ],
      },
      {
        id: 'data-uzivatele',
        title: '12. Data uživatele',
        body: [
          'Zákazník a jeho uživatelé mohou do Diriqo vkládat provozní, obchodní a osobní údaje. Zákazník odpovídá za zákonnost, přesnost a oprávněnost těchto dat a za to, že má právo je ve službě zpracovávat.',
          'Provozovatel zpracovává data zákazníka za účelem poskytování služby, podpory, bezpečnosti, zlepšování provozu a plnění právních povinností. Podrobnosti k osobním údajům jsou uvedeny v dokumentu Ochrana osobních údajů a v dokumentu GDPR.',
        ],
      },
      {
        id: 'vlastnictvi-dat',
        title: '13. Vlastnictví dat',
        body: [
          'Zákazník si ponechává vlastnictví a odpovědnost za data, která do Diriqo vloží. Provozovatel nezískává vlastnická práva k datům zákazníka pouze tím, že jsou zpracovávána ve službě.',
          'Provozovatel si ponechává veškerá práva k platformě Diriqo, jejímu softwaru, designu, know-how, databázovým strukturám, značce, textům, dokumentaci a dalším prvkům služby, pokud nejsou výslovně označeny jako data zákazníka.',
        ],
      },
      {
        id: 'export-a-mazani-dat',
        title: '14. Export a mazání dat',
        body: [
          'Diriqo může umožňovat export vybraných dat podle dostupných funkcí služby. Rozsah, formát a dostupnost exportu se mohou lišit podle tarifu, technického stavu služby a povahy dat.',
          'Po ukončení účtu mohou být data zákazníka smazána nebo anonymizována po uplynutí přiměřené technické a právní retenční doby, pokud není nutné uchování pro plnění právních povinností, ochranu práv, účetnictví, bezpečnost nebo řešení sporů.',
        ],
      },
      {
        id: 'omezeni-odpovednosti',
        title: '15. Omezení odpovědnosti',
        body: [
          'V rozsahu povoleném právními předpisy odpovídá provozovatel pouze za přímou újmu způsobenou porušením svých povinností. Provozovatel neodpovídá za nepřímé škody, ušlý zisk, ztrátu obchodní příležitosti, ztrátu dobrého jména, následné škody nebo škody způsobené nesprávným použitím služby.',
          'Souhrnná odpovědnost provozovatele vůči zákazníkovi je v rozsahu povoleném právními předpisy omezena částkou uhrazenou zákazníkem za službu za posledních 12 měsíců před vznikem nároku. Pokud zákazník službu využíval bezplatně, je odpovědnost omezena částkou 100 EUR.',
          'Toto omezení se neuplatní v rozsahu, ve kterém jej nelze podle právních předpisů vyloučit nebo omezit.',
        ],
      },
      {
        id: 'ztrata-nebo-poskozeni-dat',
        title: '16. Ztráta nebo poškození dat',
        body: [
          'Provozovatel uplatňuje přiměřená technická a organizační opatření k ochraně dat, včetně opatření na úrovni infrastruktury a aplikace. Přesto nelze zaručit, že nikdy nedojde k chybě, výpadku, poškození nebo ztrátě dat.',
          'Zákazník bere na vědomí, že u kritických provozních údajů je vhodné používat dostupné exporty, interní procesy zálohování a vlastní kontrolní mechanismy. V případě incidentu provozovatel vynaloží přiměřené úsilí k obnově provozu a omezení dopadů.',
        ],
      },
      {
        id: 'vypadky-tretich-stran',
        title: '17. Výpadky třetích stran',
        body: [
          'Diriqo může využívat infrastrukturu a služby třetích stran, například hosting, databázové služby, platební brány, e-mailové služby, analytické nebo bezpečnostní nástroje. Mezi takové poskytovatele mohou patřit zejména Supabase, Vercel, Stripe, Mailgun, Resend a další infrastruktura.',
          'Provozovatel neodpovídá za výpadky, omezení nebo chyby třetích stran v rozsahu, ve kterém jsou mimo jeho přiměřenou kontrolu. Provozovatel však vynakládá přiměřené úsilí k výběru spolehlivých poskytovatelů a řešení dopadů na zákazníky.',
        ],
      },
      {
        id: 'chytre-nabidky',
        title: '18. Chytré nabídky a tracking interakcí',
        body: [
          'Diriqo může obsahovat funkce pro tvorbu a sdílení chytrých nabídek. Tyto funkce mohou zaznamenávat základní interakce s nabídkou, například otevření odkazu, zobrazení nabídky, přijetí, odmítnutí nebo technická metadata související s doručením a bezpečností.',
          'Účelem trackingu je pomoci zákazníkovi řídit obchodní komunikaci, zlepšit přehled o stavu nabídky a chránit službu před zneužitím. Zákazník odpovídá za to, že příjemce nabídky informuje v rozsahu vyžadovaném právními předpisy a že funkci používá férově a přiměřeně.',
        ],
      },
      {
        id: 'bezpecnost',
        title: '19. Bezpečnost',
        body: [
          'Provozovatel vynakládá přiměřené úsilí k ochraně služby, účtů a dat. Bezpečnostní opatření mohou zahrnovat řízení přístupů, šifrovanou komunikaci, logování, zálohovací a obnovovací mechanismy, monitoring a oddělení přístupových oprávnění.',
          'Zákazník je povinen nastavit přístupy odpovědně, odebírat přístupy osobám, které je již nepotřebují, a používat dostatečně bezpečné přihlašovací údaje. Bezpečnostní zranitelnosti nebo podezření na incident je možné hlásit na kontaktní e-mail provozovatele.',
        ],
      },
      {
        id: 'dusevni-vlastnictvi',
        title: '20. Duševní vlastnictví',
        body: [
          'Služba Diriqo, její software, uživatelské rozhraní, texty, obchodní označení, grafické prvky, databázová struktura a know-how jsou chráněny právem duševního vlastnictví. Zákazník získává pouze omezené právo službu používat v rozsahu sjednaného tarifu nebo dohody.',
          'Bez předchozího písemného souhlasu provozovatele není dovoleno kopírovat, upravovat, distribuovat, napodobovat, prodávat ani veřejně zpřístupňovat podstatné části služby.',
        ],
      },
      {
        id: 'zmeny-podminek',
        title: '21. Změny podmínek',
        body: [
          'Provozovatel může tyto podmínky aktualizovat, zejména při změně služby, obchodního modelu, právních požadavků nebo používané infrastruktury. Nové znění je účinné zveřejněním, pokud není uvedeno pozdější datum účinnosti.',
          'U podstatných změn, které se významně dotýkají práv nebo povinností zákazníka, se provozovatel snaží zákazníka informovat přiměřeným způsobem. Pokračování v používání služby po účinnosti změn znamená souhlas s aktualizovanými podmínkami.',
        ],
      },
      {
        id: 'rozhodne-pravo',
        title: '22. Rozhodné právo',
        body: [
          'Tyto podmínky se řídí právem České republiky. Spory budou řešeny především smírně. Pokud se spor nepodaří vyřešit dohodou, budou příslušné soudy České republiky, pokud kogentní právní předpisy nestanoví jinak.',
        ],
      },
      {
        id: 'kontakt',
        title: '23. Kontakt',
        body: [
          `Pro otázky k těmto podmínkám nás kontaktujte na ${legalOperator.email}. Poštovní adresa provozovatele je ${legalOperator.name}, ${legalOperator.address}. Web služby je ${legalOperator.website}.`,
        ],
      },
    ],
  },
  privacy: {
    key: 'privacy',
    eyebrow: csLegalUi.eyebrow,
    title: 'Ochrana osobních údajů',
    intro:
      'Tento dokument vysvětluje, jak Diriqo nakládá s osobními údaji na veřejném webu, v aplikaci a při poskytování B2B SaaS služby. Zohledňuje, že Diriqo může pracovat s údaji pracovníků, zákazníků, zakázek, směn, fotografií, nabídek, faktur, komunikace, docházky, auditních logů a technických metadat.',
    meta: {
      title: 'Ochrana osobních údajů Diriqo',
      description:
        'Zásady zpracování osobních údajů pro Diriqo, včetně rolí správce a zpracovatele, chytrých nabídek, metadat, třetích stran a práv subjektů údajů.',
    },
    lastUpdated: csLastUpdated,
    updatedLabel: csLegalUi.updatedLabel,
    updateNotice: csLegalUi.updateNotice,
    tocTitle: csLegalUi.tocTitle,
    navigationTitle: csLegalUi.navigationTitle,
    summaryItems: [
      'Role správce i zpracovatele podle kontextu',
      'Údaje z provozu zakázek, pracovníků a zákazníků',
      'Přiměřená bezpečnostní a retenční pravidla',
    ],
    sections: [
      {
        id: 'spravce-udaju',
        title: '1. Správce údajů',
        body: [
          `Správcem osobních údajů v případech popsaných v tomto dokumentu je ${legalOperator.name}, IČO ${legalOperator.registrationNumber}, se sídlem ${legalOperator.address}. Kontakt pro otázky k osobním údajům je ${legalOperator.email}.`,
          'V některých situacích Diriqo vystupuje jako zpracovatel osobních údajů pro své zákazníky. To se týká zejména osobních údajů, které zákazník vkládá do aplikace o svých pracovnících, zákaznících, dodavatelích nebo kontaktních osobách.',
        ],
      },
      {
        id: 'jake-udaje',
        title: '2. Jaké údaje zpracováváme',
        body: [
          'Rozsah údajů závisí na tom, jak zákazník službu používá. Může jít zejména o kontaktní údaje, identifikační údaje, údaje o firmě, přihlašovací a účetní údaje, údaje o zakázkách, pracovnících, směnách, docházce, fotografiích, zákaznících, nabídkách, fakturách a komunikaci.',
          'Dále můžeme zpracovávat technická metadata, například IP adresu, typ zařízení, prohlížeč, čas přístupu, identifikátory relací, logy událostí, informace o doručení e-mailů a záznamy o interakcích s chytrými nabídkami.',
        ],
        bullets: [
          'Údaje pracovníků: jméno, kontakt, role, směny, docházka, čas u zakázek, interní poznámky a související provozní údaje.',
          'Údaje zákazníků zákazníka: kontakty, adresy, požadavky, historie zakázek, nabídky, faktury a komunikace.',
          'Obsah zakázek: popisy práce, termíny, fotodokumentace, stav práce, náklady, interní poznámky a auditní logy.',
          'Údaje účtu: e-mail, nastavení firmy, jazyk, tarif, fakturační údaje a historie podpory.',
        ],
      },
      {
        id: 'ucely-zpracovani',
        title: '3. Účely zpracování',
        body: [
          'Osobní údaje zpracováváme za účelem poskytování a provozu služby Diriqo, správy uživatelských účtů, zákaznické podpory, fakturace, komunikace, bezpečnosti, prevence zneužití, zlepšování služby a plnění právních povinností.',
          'U dat vložených zákazníkem je hlavním účelem umožnit zákazníkovi řídit jeho vlastní provoz, například zakázky, pracovníky, směny, docházku, nabídky, komunikaci a fakturaci.',
        ],
      },
      {
        id: 'pravni-zaklady',
        title: '4. Právní základy',
        body: [
          'Právní základ se liší podle konkrétní situace. Typicky zpracováváme údaje pro plnění smlouvy nebo jednání o smlouvě, splnění právních povinností, oprávněný zájem na provozu, bezpečnosti a zlepšování služby, případně na základě souhlasu, pokud je vyžadován.',
          'Pokud Diriqo vystupuje jako zpracovatel, právní základ zpracování určuje zákazník jako správce. Zákazník odpovídá za to, že má pro vložení a zpracování osobních údajů ve službě odpovídající právní základ.',
        ],
      },
      {
        id: 'chytre-nabidky',
        title: '5. Chytré nabídky',
        body: [
          'Funkce chytrých nabídek mohou zaznamenávat základní interakce s nabídkou, například otevření odkazu, zobrazení nabídky, přijetí, odmítnutí, čas interakce a technická metadata. Tyto údaje pomáhají zákazníkovi sledovat stav obchodní komunikace a chránit nabídky před zneužitím.',
          'Zákazník odpovídá za to, že příjemce nabídky informuje o použití takového sledování, pokud to vyžadují právní předpisy nebo povaha komunikace.',
        ],
      },
      {
        id: 'technicka-metadata',
        title: '6. Technická metadata',
        body: [
          'Technická metadata používáme zejména pro bezpečnost, správné fungování služby, diagnostiku chyb, audit událostí, prevenci zneužití a zlepšování výkonu. Metadata mohou být uchovávána odděleně od obsahu zákazníka a mohou mít odlišné retenční lhůty.',
          'Kde je to rozumně možné, snažíme se používat přiměřený rozsah dat a omezovat přístup k metadatům pouze na oprávněné osoby nebo systémy.',
        ],
      },
      {
        id: 'cookies',
        title: '7. Cookies',
        body: [
          'Veřejný web a aplikace mohou používat cookies nebo podobné technologie. Diriqo aktuálně používá především nezbytné cookies potřebné pro fungování webu, přihlášení, bezpečnost a základní nastavení.',
          'Analytické nebo marketingové cookies mohou být přidány později pouze v souladu s právními požadavky a pravidly souhlasu. Podrobnosti jsou uvedeny v samostatném dokumentu Cookies.',
        ],
      },
      {
        id: 'treti-strany',
        title: '8. Třetí strany',
        body: [
          'Pro poskytování služby můžeme využívat důvěryhodné poskytovatele infrastruktury a nástrojů. Může jít zejména o Supabase, Vercel, Stripe, Mailgun, Resend a další poskytovatele hostingu, databází, plateb, e-mailů, bezpečnosti, monitoringu nebo podpory.',
          'Třetí strany vybíráme s ohledem na jejich roli, bezpečnostní standardy a vhodnost pro provoz SaaS služby. Rozsah sdílených údajů omezujeme na to, co je nezbytné pro daný účel.',
        ],
      },
      {
        id: 'prenos-mimo-eu',
        title: '9. Přenos mimo EU',
        body: [
          'Někteří poskytovatelé infrastruktury nebo jejich subdodavatelé mohou zpracovávat údaje mimo Evropskou unii nebo Evropský hospodářský prostor. Pokud k tomu dochází, používáme vhodné právní mechanismy, například rozhodnutí o odpovídající ochraně, standardní smluvní doložky nebo jiná opatření vyžadovaná právními předpisy.',
          'Přenosy mimo EU posuzujeme s ohledem na povahu služby, používané poskytovatele a dostupné smluvní a technické záruky.',
        ],
      },
      {
        id: 'doba-uchovani',
        title: '10. Doba uchování',
        body: [
          'Osobní údaje uchováváme pouze po dobu potřebnou pro účel, pro který byly zpracovány, nebo po dobu vyžadovanou právními předpisy. Údaje účtu a provozní data uchováváme po dobu trvání služby a následně po přiměřenou dobu pro zálohy, bezpečnost, účetnictví, řešení sporů a ochranu práv.',
          'Data vložená zákazníkem mohou být po ukončení účtu smazána nebo anonymizována po uplynutí technické a právní retenční doby. Konkrétní retenční pravidla se mohou lišit podle tarifu, smlouvy nebo technického nastavení služby.',
        ],
      },
      {
        id: 'role-spravce-zpracovatele',
        title: '11. Role správce vs. zpracovatele',
        body: [
          'Diriqo je správcem u údajů, které zpracovává pro vlastní účely, například správa účtů, fakturace, podpora, bezpečnost, marketingová komunikace nebo provoz veřejného webu.',
          'Diriqo je zpracovatelem u dat, která zákazník do služby vkládá za účelem řízení svého provozu a u kterých zákazník určuje účel a prostředky zpracování. Typicky jde o údaje pracovníků, zákazníků zákazníka, zakázek, docházky, komunikace, fotografií a interních poznámek.',
        ],
      },
      {
        id: 'bezpecnostni-opatreni',
        title: '12. Bezpečnostní opatření',
        body: [
          'Používáme přiměřená technická a organizační opatření, která odpovídají povaze služby, rozsahu dat a rizikům. Mezi tato opatření může patřit šifrovaná komunikace, řízení přístupů, role a oprávnění, monitoring, logování, zálohování, oddělení prostředí a procesy pro řešení incidentů.',
          'Žádné opatření však nemůže zaručit absolutní bezpečnost. Proto je důležitá také odpovědná správa přístupů na straně zákazníka.',
        ],
      },
      {
        id: 'prava-subjektu',
        title: '13. Práva subjektů údajů',
        body: [
          'Subjekty údajů mohou mít podle GDPR právo na přístup k osobním údajům, opravu, výmaz, omezení zpracování, přenositelnost, námitku proti zpracování a právo podat stížnost u dozorového úřadu.',
          'Pokud se žádost týká dat, u kterých je správcem zákazník, můžeme žádost předat nebo odkázat na příslušného zákazníka. Tím není dotčena povinnost Diriqo spolupracovat v rozsahu vyžadovaném právními předpisy a smluvním vztahem.',
        ],
      },
      {
        id: 'kontakt',
        title: '14. Kontakt',
        body: [
          `Dotazy k ochraně osobních údajů můžete posílat na ${legalOperator.email}. Pokud se domníváte, že vaše osobní údaje nejsou zpracovávány v souladu s právními předpisy, můžete se obrátit také na Úřad pro ochranu osobních údajů.`,
        ],
      },
    ],
  },
  cookies: {
    key: 'cookies',
    eyebrow: csLegalUi.eyebrow,
    title: 'Zásady používání cookies',
    intro:
      'Tento dokument popisuje, jak Diriqo používá cookies a podobné technologie na veřejném webu, v aplikaci a u souvisejících funkcí, včetně chytrých nabídek. Diriqo aktuálně používá především nezbytné cookies a technické mechanismy potřebné pro bezpečný provoz.',
    meta: {
      title: 'Cookies Diriqo',
      description:
        'Zásady používání cookies ve službě Diriqo, včetně nezbytných, preferenčních, analytických, marketingových cookies a interakcí s chytrými nabídkami.',
    },
    lastUpdated: csLastUpdated,
    updatedLabel: csLegalUi.updatedLabel,
    updateNotice: csLegalUi.updateNotice,
    tocTitle: csLegalUi.tocTitle,
    navigationTitle: csLegalUi.navigationTitle,
    summaryItems: [
      'Aktuálně především nezbytné cookies',
      'Analytika a marketing až při splnění právních požadavků',
      'Chytré nabídky mohou měřit základní interakce',
    ],
    sections: [
      {
        id: 'co-jsou-cookies',
        title: '1. Co jsou cookies',
        body: [
          'Cookies jsou malé soubory nebo podobné technologie ukládané v zařízení uživatele. Pomáhají webu nebo aplikaci rozpoznat prohlížeč, udržet přihlášení, zapamatovat nastavení, chránit službu a zlepšovat její fungování.',
          'Podobnou roli mohou mít také lokální úložiště prohlížeče, session storage, tokeny v URL, serverové logy nebo identifikátory relace. V tomto dokumentu používáme slovo cookies i pro tyto obdobné technologie, pokud plní podobný účel.',
        ],
      },
      {
        id: 'kategorie-cookies',
        title: '2. Kategorie cookies',
        body: [
          'Cookies dělíme podle účelu na nezbytné, preferenční, analytické a marketingové. Nezbytné cookies jsou potřebné pro fungování webu nebo aplikace. Ostatní kategorie používáme pouze tehdy, pokud je to technicky nasazeno a právně umožněno.',
        ],
      },
      {
        id: 'nezbytne-cookies',
        title: '3. Nezbytné cookies',
        body: [
          'Nezbytné cookies pomáhají zajistit přihlášení, bezpečnost, směrování požadavků, ochranu proti zneužití, fungování formulářů a základní technický provoz. Bez těchto cookies by web nebo aplikace nemusely fungovat správně.',
          'Diriqo aktuálně používá především nezbytné cookies a technické identifikátory. Tyto cookies nevyžadují souhlas, pokud jsou používány pouze pro účely nezbytné pro provoz služby.',
        ],
      },
      {
        id: 'preferencni-cookies',
        title: '4. Preferenční cookies',
        body: [
          'Preferenční cookies mohou sloužit k zapamatování jazyka, regionu, měny, nastavení rozhraní nebo jiných voleb uživatele. Pokud nejsou nezbytné pro fungování služby, mohou podléhat souhlasu podle konkrétního nastavení a právních požadavků.',
        ],
      },
      {
        id: 'analyticke-cookies',
        title: '5. Analytické cookies',
        body: [
          'Analytické cookies pomáhají měřit návštěvnost a zlepšovat web nebo aplikaci. Momentálně nejsou na veřejném webu Diriqo nasazeny klasické analytické nástroje mimo základní technické vyhodnocování a funkce chytrých nabídek.',
          'Pokud budou analytické nástroje přidány později, budou používány v souladu s GDPR, zákonem o elektronických komunikacích a příslušnými pravidly souhlasu.',
        ],
      },
      {
        id: 'marketingove-cookies',
        title: '6. Marketingové cookies',
        body: [
          'Marketingové cookies slouží k personalizaci reklamy, měření kampaní nebo propojení s reklamními platformami. Diriqo aktuálně na veřejném webu nepoužívá klasické marketingové cookies.',
          'Pokud budou marketingové cookies v budoucnu přidány, budou použity pouze v souladu s právními požadavky a na základě odpovídajícího souhlasu, pokud bude vyžadován.',
        ],
      },
      {
        id: 'chytre-nabidky-interakce',
        title: '7. Chytré nabídky a interakce',
        body: [
          'Chytré nabídky mohou používat jedinečné odkazy, tokeny, technická metadata nebo logy interakcí k tomu, aby zákazník viděl stav nabídky, například otevření, zobrazení, přijetí nebo odmítnutí. Tyto mechanismy nemusí vždy ukládat klasickou marketingovou cookie v zařízení příjemce.',
          'Účelem je přehled obchodní komunikace, bezpečnost a ochrana proti zneužití. Zákazník, který nabídku posílá, odpovídá za férové použití této funkce a za informování příjemce, pokud je to potřeba.',
        ],
      },
      {
        id: 'sprava-cookies',
        title: '8. Správa cookies',
        body: [
          'Cookies můžete spravovat v nastavení svého prohlížeče. Blokování nezbytných cookies může způsobit, že web nebo aplikace nebudou fungovat správně, zejména u přihlášení, zabezpečených částí nebo formulářů.',
          'Pokud bude Diriqo používat cookies vyžadující souhlas, bude uživateli nabídnut odpovídající mechanismus pro udělení, odmítnutí nebo změnu souhlasu.',
        ],
      },
      {
        id: 'prehled-cookies',
        title: '9. Přehledová tabulka cookies',
        body: [
          'Níže uvedený přehled popisuje typické cookies a podobné technologie, které mohou být používány v rámci webu nebo aplikace Diriqo. Skutečné názvy se mohou lišit podle technického prostředí, domény a použité infrastruktury.',
        ],
        table: {
          headers: ['Název', 'Provider', 'Účel', 'Kategorie', 'Expirace'],
          rows: [
            ['diriqo_session nebo obdobný identifikátor relace', 'Diriqo', 'Udržení bezpečné relace, přihlášení a základní provoz aplikace.', 'Nezbytné', 'Relace nebo dle nastavení účtu'],
            ['sb-*-auth-token nebo obdobný auth token', 'Supabase', 'Autentizace uživatele, bezpečnost přihlášení a správa relace.', 'Nezbytné', 'Dle nastavení autentizace'],
            ['NEXT_LOCALE, diriqo_locale nebo obdobná preference', 'Diriqo', 'Zapamatování jazyka nebo regionálního nastavení.', 'Preferenční', 'Až 12 měsíců'],
            ['stripe_* nebo obdobné platební identifikátory', 'Stripe', 'Bezpečné zpracování plateb, prevence podvodů a dokončení platebního procesu.', 'Nezbytné', 'Dle pravidel Stripe'],
            ['offer token v URL nebo obdobný identifikátor nabídky', 'Diriqo', 'Zobrazení chytré nabídky, stav interakce, bezpečnost a audit obchodní komunikace.', 'Nezbytné nebo analytické podle použití', 'Dle životnosti nabídky'],
            ['analytics_*', 'Budoucí analytický provider', 'Měření návštěvnosti a zlepšování webu, pokud bude analytika nasazena.', 'Analytické', 'Bude stanoveno při nasazení'],
            ['marketing_*', 'Budoucí marketingový provider', 'Měření kampaní nebo personalizace, pokud budou marketingové cookies nasazeny.', 'Marketingové', 'Bude stanoveno při nasazení'],
          ],
        },
      },
    ],
  },
  gdpr: {
    key: 'gdpr',
    eyebrow: csLegalUi.eyebrow,
    title: 'GDPR a zpracovatelský rámec',
    intro:
      'Tento dokument slouží jako profesionální GDPR a DPA přehled pro B2B zákazníky Diriqo. Popisuje role stran, typy osobních údajů, bezpečnostní opatření, další zpracovatele, incident management, export a mazání dat a odpovědnosti zákazníka. Konkrétní DPA nebo enterprise dodatek může být uzavřen samostatně.',
    meta: {
      title: 'GDPR a DPA Diriqo',
      description:
        'GDPR a zpracovatelský rámec Diriqo pro B2B a enterprise zákazníky, včetně rolí stran, kategorií údajů, subzpracovatelů, incidentů, exportu a mazání dat.',
    },
    lastUpdated: csLastUpdated,
    updatedLabel: csLegalUi.updatedLabel,
    updateNotice: csLegalUi.updateNotice,
    tocTitle: csLegalUi.tocTitle,
    navigationTitle: csLegalUi.navigationTitle,
    summaryItems: [
      'Připraveno pro B2B a enterprise zákazníky',
      'Rámec pro budoucí DPA workflow',
      'Jasné role zákazníka, Diriqo a dalších zpracovatelů',
    ],
    sections: [
      {
        id: 'ucel-dokumentu',
        title: '1. Účel dokumentu',
        body: [
          'Účelem tohoto dokumentu je popsat, jak Diriqo přistupuje ke zpracování osobních údajů při poskytování SaaS služby zákazníkům. Dokument má sloužit jako praktický rámec pro B2B klienty, bezpečnostní dotazníky, procurement a budoucí zpracovatelské smlouvy.',
          'Tento dokument nenahrazuje individuální smlouvu, pokud je se zákazníkem uzavřena samostatná DPA, rámcová smlouva nebo enterprise dodatek. V takovém případě má konkrétní smluvní ujednání přednost.',
        ],
      },
      {
        id: 'role-stran',
        title: '2. Role stran',
        body: [
          'Zákazník je zpravidla správcem osobních údajů, které do Diriqo vkládá za účelem řízení svého provozu. Určuje účel zpracování, rozsah dat, oprávnění uživatelů a právní základ vůči svým pracovníkům, zákazníkům nebo dalším subjektům údajů.',
          'Diriqo je v tomto vztahu zpravidla zpracovatelem, protože osobní údaje zpracovává podle pokynů zákazníka a za účelem poskytování služby. V některých oblastech však Diriqo vystupuje jako samostatný správce.',
        ],
      },
      {
        id: 'diriqo-jako-zpracovatel',
        title: '3. Diriqo jako zpracovatel',
        body: [
          'Jako zpracovatel Diriqo zpracovává osobní údaje pouze pro účely poskytování, zabezpečení, podpory a provozu služby, případně podle doložených pokynů zákazníka. Diriqo nepoužívá data zákazníka pro vlastní samostatné obchodní účely mimo rámec služby, pokud k tomu nemá odpovídající právní důvod.',
          'Zpracování může zahrnovat ukládání, zobrazení, přenos, zálohování, logování, technickou podporu, řešení incidentů a další operace nezbytné pro fungování SaaS platformy.',
        ],
      },
      {
        id: 'diriqo-jako-spravce',
        title: '4. Diriqo jako správce',
        body: [
          'Diriqo vystupuje jako správce například při správě vlastních zákaznických účtů, fakturaci, komunikaci se zákazníky, vedení obchodních záznamů, provozu veřejného webu, bezpečnosti služby, interním reportingu, marketingové komunikaci nebo plnění právních povinností.',
          'V těchto případech Diriqo určuje účely a prostředky zpracování samo a postupuje podle zásad uvedených v dokumentu Ochrana osobních údajů.',
        ],
      },
      {
        id: 'kategorie-udaju',
        title: '5. Kategorie údajů',
        body: [
          'Kategorie údajů závisí na způsobu používání služby zákazníkem. Diriqo může zpracovávat zejména kontaktní a identifikační údaje, údaje o pracovních rolích, směnách, docházce, zakázkách, zákaznících, adresách, nabídkách, fakturách, fotografiích, komunikaci, interních poznámkách, auditních záznamech a technických metadatech.',
          'Zákazník by neměl do služby vkládat zvláštní kategorie osobních údajů nebo vysoce citlivá data, pokud to není nezbytné pro jeho vlastní zákonný účel a pokud k tomu nemá odpovídající právní základ a interní pravidla.',
        ],
      },
      {
        id: 'kategorie-subjektu',
        title: '6. Kategorie subjektů údajů',
        body: ['Podle nastavení zákazníka mohou být ve službě zpracovávány osobní údaje těchto kategorií subjektů údajů:'],
        bullets: [
          'pracovníci, zaměstnanci, spolupracovníci, technici nebo členové provozních týmů zákazníka,',
          'zákazníci zákazníka, kontaktní osoby, objednatelé, zástupci firem a příjemci nabídek,',
          'dodavatelé, externí partneři nebo osoby zapojené do realizace zakázek,',
          'uživatelé aplikace, administrátoři, vlastníci účtů a osoby komunikující s podporou Diriqo.',
        ],
      },
      {
        id: 'ucely-zpracovani',
        title: '7. Účely zpracování',
        body: [
          'Hlavním účelem zpracování je umožnit zákazníkovi používat Diriqo pro řízení zakázek, lidí, docházky, fotografií, komunikace, nabídek, fakturace a provozních přehledů.',
          'Dalšími účely jsou technický provoz služby, správa přístupů, bezpečnost, audit, prevence zneužití, zákaznická podpora, zálohování, obnova po incidentu, plnění právních povinností a přiměřené zlepšování služby.',
        ],
      },
      {
        id: 'bezpecnostni-opatreni',
        title: '8. Bezpečnostní opatření',
        body: [
          'Diriqo používá přiměřená technická a organizační opatření odpovídající povaze služby a rizikům zpracování. Patří sem zejména řízení přístupů, role a oprávnění, šifrovaná komunikace, oddělení prostředí, logování, monitoring, zálohování, princip minimálního přístupu a procesy pro řešení bezpečnostních událostí.',
          'Bezpečnostní opatření se mohou měnit podle vývoje služby, používané infrastruktury a aktuálních rizik. Diriqo vynakládá přiměřené úsilí, aby opatření odpovídala modernímu SaaS provozu.',
        ],
      },
      {
        id: 'dalsi-zpracovatele',
        title: '9. Další zpracovatelé',
        body: [
          'Diriqo může využívat další zpracovatele pro hosting, databáze, autentizaci, platby, e-mailové doručování, monitoring, podporu nebo bezpečnost. Mezi používané nebo připravované poskytovatele mohou patřit Supabase, Vercel, Stripe, Mailgun, Resend a další infrastruktura.',
          'Diriqo se snaží používat poskytovatele, kteří poskytují přiměřené smluvní, bezpečnostní a organizační záruky. Zákazník bere na vědomí, že konkrétní seznam subzpracovatelů se může vyvíjet spolu se službou.',
        ],
      },
      {
        id: 'incident-management',
        title: '10. Incident management',
        body: [
          'Pokud Diriqo zjistí bezpečnostní incident, který se týká osobních údajů zpracovávaných pro zákazníka, vyhodnotí jeho povahu, rozsah a pravděpodobné dopady. Pokud incident představuje porušení zabezpečení osobních údajů ve smyslu GDPR, Diriqo bude zákazníka informovat bez zbytečného odkladu v rozsahu potřebném pro splnění jeho povinností.',
          'Oznámení může obsahovat dostupný popis incidentu, dotčené kategorie údajů, pravděpodobné dopady, přijatá nebo navrhovaná opatření a kontaktní místo pro další komunikaci, pokud jsou tyto informace v dané fázi známé.',
        ],
      },
      {
        id: 'export-a-mazani-dat',
        title: '11. Export a mazání dat',
        body: [
          'Zákazník může podle dostupných funkcí služby exportovat vybraná data. Diriqo může poskytovat exporty v rozsahu a formátu odpovídajícím technickým možnostem, tarifu a povaze dat.',
          'Po ukončení služby mohou být data zákazníka smazána, anonymizována nebo ponechána po přiměřenou retenční dobu v zálohách, technických záznamech nebo účetních a bezpečnostních záznamech. Uchování je omezeno na účely, pro které je nezbytné nebo právně vyžadované.',
        ],
      },
      {
        id: 'prenos-mimo-eu',
        title: '12. Přenos mimo EU',
        body: [
          'Někteří poskytovatelé nebo jejich subdodavatelé mohou zpracovávat osobní údaje mimo EU nebo EHP. Pokud k takovému přenosu dochází, Diriqo používá dostupné právní mechanismy, například rozhodnutí o odpovídající ochraně, standardní smluvní doložky nebo jiná vhodná opatření.',
          'Při výběru infrastruktury se Diriqo snaží zohledňovat bezpečnost, stabilitu, dostupnost, datovou ochranu a potřeby B2B zákazníků.',
        ],
      },
      {
        id: 'povinnosti-zakaznika',
        title: '13. Povinnosti zákazníka',
        body: [
          'Zákazník odpovídá za zákonnost dat, která do Diriqo vkládá, za informování dotčených osob, za určení právních základů zpracování a za nastavení interních pravidel pro používání služby.',
          'Zákazník by měl do služby vkládat pouze data, která jsou potřebná pro jeho provozní účely, udržovat je aktuální, nastavovat přístupy podle rolí a zajistit, aby službu používaly pouze oprávněné osoby.',
        ],
      },
      {
        id: 'ochrana-pristupu',
        title: '14. Ochrana přístupů',
        body: [
          'Zákazník odpovídá za správu uživatelských účtů, hesel, rolí a oprávnění ve své organizaci. Přístupy by měly odpovídat principu nejnižších potřebných oprávnění a měly by být pravidelně kontrolovány.',
          'Při odchodu pracovníka, změně role nebo podezření na zneužití účtu by měl zákazník přístup bez zbytečného odkladu odebrat nebo upravit. Bezpečnost služby je sdílená odpovědnost Diriqo a zákazníka.',
        ],
      },
      {
        id: 'kontakt',
        title: '15. Kontakt',
        body: [
          `Dotazy k GDPR, bezpečnosti nebo budoucímu DPA workflow posílejte na ${legalOperator.email}. Provozovatel: ${legalOperator.name}, IČO ${legalOperator.registrationNumber}, ${legalOperator.address}.`,
        ],
      },
    ],
  },
}

const enGdprDocument: LegalDocument = {
  key: 'gdpr',
  eyebrow: 'Diriqo legal documentation',
  title: 'GDPR and data processing framework',
  intro:
    'This page is prepared as the future English GDPR and DPA framework for B2B customers. It summarizes the main controller and processor roles, data categories, security measures, subprocessors, incident handling, export and deletion principles.',
  meta: {
    title: 'Diriqo GDPR and DPA',
    description:
      'Diriqo GDPR and data processing framework for B2B SaaS customers, including roles, data categories, subprocessors, incidents, export and deletion.',
  },
  lastUpdated: 'May 17, 2026',
  updatedLabel: legalUiByLocale.en.updatedLabel,
  updateNotice: legalUiByLocale.en.updateNotice,
  tocTitle: legalUiByLocale.en.tocTitle,
  navigationTitle: legalUiByLocale.en.navigationTitle,
  summaryItems: [
    'Prepared for B2B and future enterprise customers',
    'Controller and processor roles by context',
    'Framework for a future DPA workflow',
  ],
  sections: [
    {
      id: 'purpose',
      title: '1. Purpose',
      body: [
        'This document describes the high-level GDPR and data processing framework used by Diriqo when providing its SaaS service to business customers. A separate DPA or enterprise addendum may be agreed with individual customers.',
      ],
    },
    {
      id: 'roles',
      title: '2. Roles of the parties',
      body: [
        'For customer content entered into the service, the customer is usually the controller and Diriqo is usually the processor. For account administration, billing, support, website operation and security, Diriqo may act as an independent controller.',
      ],
    },
    {
      id: 'data-categories',
      title: '3. Data categories',
      body: [
        'Depending on customer use, Diriqo may process worker, customer, job, shift, attendance, photo, offer, invoice, communication, audit log and technical metadata.',
      ],
    },
    {
      id: 'security',
      title: '4. Security',
      body: [
        'Diriqo applies reasonable technical and organisational measures, including access controls, encrypted communication, logging, monitoring, backups and incident response processes appropriate for a modern B2B SaaS service.',
      ],
    },
    {
      id: 'contact',
      title: '5. Contact',
      body: [`For GDPR or DPA questions, contact ${legalOperator.email}.`],
    },
  ],
}

const legalDocumentsByLocale: Partial<Record<Locale, Partial<Record<LegalPageKey, LegalDocument>>>> = {
  cs: csLegalDocuments,
  en: {
    gdpr: enGdprDocument,
  },
}

function createLegacyDocument(
  locale: Locale,
  page: LegacyLegalPageKey,
  content: MarketingContent
): LegalDocument {
  const copy = content.legal[page]
  const ui = legalUiByLocale[locale]

  return {
    key: page,
    eyebrow: content.legal.eyebrow,
    title: copy.title,
    intro: copy.intro,
    meta: content.meta[page],
    lastUpdated: lastUpdatedByLocale[locale],
    updatedLabel: ui.updatedLabel,
    updateNotice: ui.updateNotice,
    tocTitle: ui.tocTitle,
    navigationTitle: ui.navigationTitle,
    summaryItems: [],
    sections: copy.sections.map((section, index) => ({
      id: `section-${index + 1}`,
      title: section.title,
      body: [section.text],
    })),
  }
}

export function getLegalDocument(
  locale: Locale,
  page: LegalPageKey,
  content?: MarketingContent
): LegalDocument {
  const localizedDocument = legalDocumentsByLocale[locale]?.[page]

  if (localizedDocument) {
    return localizedDocument
  }

  if (page !== 'gdpr' && content) {
    return createLegacyDocument(locale, page, content)
  }

  return csLegalDocuments[page]
}

export function getLegalPageNavigation(locale: Locale) {
  return legalPageOrder.map((key) => ({
    key,
    label: legalPageLabels[locale][key],
    href: localizePath(locale, `/${key}`),
  }))
}

export function createLegalMetadata(
  locale: Locale,
  page: LegalPageKey,
  content?: MarketingContent
): Metadata {
  const document = getLegalDocument(locale, page, content)
  const path = `/${page}`

  return {
    title: document.meta.title,
    description: document.meta.description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: alternateLanguages(path),
    },
  }
}
