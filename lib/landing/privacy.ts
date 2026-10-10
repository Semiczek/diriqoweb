import { basePrivacy } from './privacy-base'
import type { LandingLocale } from './locales'
type PrivacyCopy = { title: string; controller: string; companyId: string; policy: string; sections: readonly (readonly [string, string])[] }
export const privacyCopy = {
 ...basePrivacy,
 de: {
  title: 'Datenschutz bei der Vorregistrierung', controller: 'Verantwortlicher', companyId: 'Unternehmens-ID', policy: 'Datenschutzerklärung',
  sections: [
   ['Zweck der Verarbeitung', 'Mit der Vorregistrierung bitten Sie um eine Nachricht zu Tests oder zum Start des gewählten Produkts und willigen in die Nutzung Ihrer E-Mail-Adresse für diesen Zweck ein. Weitere Produktneuigkeiten versenden wir nur mit gesonderter freiwilliger Einwilligung. Die Vorregistrierung begründet weder ein Konto noch eine Bestellung oder Zahlungspflicht.'],
   ['Welche Daten wir speichern', 'E-Mail-Adresse, gewähltes Produkt und Sprache sowie freiwillige Angaben zu Branche und Teamgröße. Dazu kommen das Registrierungsdatum, die Version dieses Datenschutzhinweises und eine etwaige Einwilligung in Produktneuigkeiten mit Datum und Textversion. Zum Schutz vor Spam verarbeiten wir kurzzeitig einen nicht umkehrbaren Hash der IP-Adresse. Die IP-Adresse selbst wird nicht in der Vorregistrierung gespeichert.'],
   ['Speicherdauer', 'Kontaktdaten sind für den genannten Zweck für höchstens 12 Monate ab Registrierung oder bis zum Widerruf der Einwilligung vorgesehen. Datensätze zum Spam-Schutz sind nach 24 Stunden zur Löschung vorgesehen.'],
   ['Zugriff auf die Daten', 'Zugriff haben das autorisierte Team des Betreibers und Anbieter der technischen Infrastruktur. Für die Website sind Vercel-Hosting und eine Supabase-Datenbank vorgesehen. Kontaktdaten sind nicht öffentlich und werden nicht verkauft. Einzelheiten zu Anbietern und möglichen Übermittlungen außerhalb des EWR finden Sie in der Datenschutzerklärung.'],
   ['Ihre Rechte', 'Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen. Sie können Auskunft, Berichtigung, Löschung, Einschränkung und gegebenenfalls Datenübertragbarkeit verlangen oder Widerspruch einlegen. Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren, unter anderem bei der tschechischen ÚOOÚ. Wir verwenden keine automatisierten Entscheidungen mit rechtlicher Wirkung.'],
   ['Solange die Online-Vorregistrierung noch nicht geöffnet ist', 'Das Formular weist ausdrücklich darauf hin. Die E-Mail-Schaltfläche öffnet lediglich Ihr E-Mail-Programm. Es werden dadurch weder automatisch Daten in der Liste gespeichert noch Nachrichten versendet.'],
  ],
 },
 pl: {
  title: 'Prywatność przy wstępnej rejestracji', controller: 'Administrator danych', companyId: 'Numer identyfikacyjny firmy', policy: 'Polityka prywatności',
  sections: [
   ['Cel przetwarzania', 'Wstępna rejestracja oznacza prośbę o wiadomość dotyczącą testów lub startu wybranego produktu oraz zgodę na wykorzystanie adresu e-mail w tym celu. Dodatkowe nowości produktowe wysyłamy wyłącznie za osobną, dobrowolną zgodą. Wstępna rejestracja nie tworzy konta, zamówienia ani obowiązku zapłaty.'],
   ['Jakie dane zapisujemy', 'Adres e-mail, wybrany produkt i język oraz dobrowolnie podaną branżę i wielkość zespołu. Zapisujemy też datę rejestracji, wersję informacji o prywatności oraz ewentualną zgodę na nowości wraz z datą i wersją jej treści. W celu ochrony przed spamem przetwarzamy krótkotrwały, jednokierunkowy skrót adresu IP. Sam adres IP nie jest zapisywany na liście przedrejestracyjnej.'],
   ['Okres przechowywania', 'Dane kontaktowe są przeznaczone do wskazanego celu przez maksymalnie 12 miesięcy od rejestracji lub do wycofania zgody. Dane zabezpieczające przed spamem są przeznaczone do usunięcia po 24 godzinach.'],
   ['Dostęp do danych', 'Dostęp ma upoważniony zespół operatora oraz dostawcy infrastruktury technicznej. Dla strony przygotowano hosting Vercel i bazę danych Supabase. Dane kontaktowe nie są publiczne ani sprzedawane. Szczegóły dotyczące dostawców i ewentualnego przekazywania danych poza EOG znajdują się w polityce prywatności.'],
   ['Twoje prawa', 'Zgodę można wycofać w dowolnym momencie e-mailem. Można żądać dostępu, sprostowania, usunięcia, ograniczenia przetwarzania oraz, w odpowiednich przypadkach, przenoszenia danych lub wnieść sprzeciw. Przysługuje prawo skargi do organu ochrony danych, w tym czeskiego ÚOOÚ. Nie stosujemy zautomatyzowanych decyzji wywołujących skutki prawne.'],
   ['Przed otwarciem rejestracji online', 'Formularz wyraźnie informuje o jej niedostępności. Przycisk e-mail otwiera jedynie program pocztowy. Nie wysyła automatycznie wiadomości ani nie zapisuje danych na liście.'],
  ],
 },
 sk: {
  title: 'Súkromie pri predregistrácii', controller: 'Prevádzkovateľ osobných údajov', companyId: 'IČO', policy: 'Úplné zásady ochrany osobných údajov (v češtine)',
  sections: [
   ['Na čo údaje slúžia', 'Odoslaním predregistrácie žiadate o správu o testovaní alebo spustení vybraného produktu a súhlasíte s použitím e-mailu na tento účel. Ďalšie produktové novinky posielame iba na základe samostatného dobrovoľného súhlasu. Predregistráciou nevzniká účet, objednávka ani povinnosť zaplatiť.'],
   ['Čo ukladáme', 'E-mail, vybraný produkt, jazyk a prípadne dobrovoľne uvedenú oblasť podnikania a veľkosť tímu. K tomu dátum registrácie, verziu informácie o súkromí a prípadný súhlas s novinkami vrátane dátumu a verzie jeho textu. Na ochranu pred spamom spracúvame krátkodobý jednosmerný odtlačok IP adresy. Samotná IP adresa sa do predregistrácií neukladá.'],
   ['Ako dlho', 'Kontakty sú určené na uvedený účel najviac na 12 mesiacov od registrácie alebo do odvolania súhlasu. Ochranné záznamy proti spamu sú určené na vymazanie po 24 hodinách.'],
   ['Kto má prístup', 'Prístup má oprávnený tím prevádzkovateľa a poskytovatelia technického zázemia. Pre web je pripravená infraštruktúra Vercel a databáza Supabase. Kontakty nie sú verejné a nepredávame ich. Podrobnosti o poskytovateľoch a prípadných prenosoch mimo EHP nájdete v zásadách ochrany osobných údajov.'],
   ['Vaše práva', 'Súhlas môžete kedykoľvek odvolať e-mailom. Môžete žiadať o prístup, opravu, vymazanie, obmedzenie spracúvania a v príslušných prípadoch prenosnosť údajov či namietať proti spracúvaniu. Máte právo podať sťažnosť dozornému orgánu vrátane českého Úřadu pro ochranu osobních údajů. Nepoužívame automatizované rozhodovanie s právnymi účinkami.'],
   ['Keď online predregistrácia ešte nie je otvorená', 'Formulár vás o tom výslovne informuje. Tlačidlo na e-mail iba otvorí váš poštový program. Žiadne údaje sa tým automaticky neuložia do zoznamu ani neodošlú.'],
  ],
 },
 hu: {
  title: 'Előregisztrációs adatkezelési tájékoztató', controller: 'Adatkezelő', companyId: 'Cégazonosító', policy: 'Adatvédelmi szabályzat',
  sections: [
   ['Az adatkezelés célja', 'Az előregisztrációval értesítést kér a kiválasztott termék teszteléséről vagy indulásáról, és hozzájárul e-mail-címének e célú használatához. További termékhíreket csak külön, önkéntes hozzájárulás alapján küldünk. Az előregisztráció nem hoz létre fiókot, megrendelést vagy fizetési kötelezettséget.'],
   ['Milyen adatokat tárolunk', 'Az e-mail-címet, a kiválasztott terméket, a nyelvet, valamint az önként megadott tevékenységi kört és csapatméretet. Rögzítjük a regisztráció dátumát, az adatkezelési tájékoztató verzióját, illetve a termékhírekhez adott hozzájárulást annak dátumával és szövegváltozatával együtt. A spam elleni védelemhez rövid ideig egyirányú IP-lenyomatot kezelünk. Magát az IP-címet nem tároljuk az előregisztrációs listán.'],
   ['Megőrzési idő', 'Az elérhetőségeket a megjelölt célra a regisztrációtól számított legfeljebb 12 hónapig vagy a hozzájárulás visszavonásáig kívánjuk kezelni. A spamvédelmi bejegyzések törlését 24 óra elteltével tervezzük.'],
   ['Ki férhet hozzá', 'Az üzemeltető felhatalmazott csapata és a technikai infrastruktúra szolgáltatói férhetnek hozzá. A weboldalhoz Vercel-tárhely és Supabase-adatbázis áll előkészítés alatt. Az elérhetőségek nem nyilvánosak, és nem értékesítjük őket. A szolgáltatókról és az EGT-n kívüli esetleges adattovábbításokról az adatvédelmi szabályzatban talál részleteket.'],
   ['Az Ön jogai', 'Hozzájárulását bármikor visszavonhatja e-mailben. Kérhet hozzáférést, helyesbítést, törlést, az adatkezelés korlátozását, valamint az alkalmazandó esetekben adathordozhatóságot, illetve tiltakozhat az adatkezelés ellen. Panaszt tehet adatvédelmi felügyeleti hatóságnál, köztük a cseh ÚOOÚ-nál. Nem alkalmazunk joghatással járó automatizált döntéshozatalt.'],
   ['Az online előregisztráció megnyitása előtt', 'Az űrlap egyértelműen jelzi, ha az előregisztráció nem érhető el. Az e-mail gomb csak a levelezőprogramot nyitja meg. Nem küld automatikusan üzenetet, és nem menti el az adatokat a listán.'],
  ],
 },
} as const satisfies Partial<Record<LandingLocale, PrivacyCopy>>
