import type { LandingLocale } from './locales'

type ContactCopy = {
  title: string
  intro: string
  productTitle: string
  productText: string
  write: string
  operator: string
  holdingText: string
  visit: string
  registration: string
  address: string
  holdingContact: string
  privacyText: string
}

export const contactCopy: Record<LandingLocale, ContactCopy> = {
  cs: {
    title: 'Pojďme se spojit.',
    intro: 'Zajímá vás Diriqo, DiriPOS nebo spolupráce? Napište nám. Za projekty stojí JSPD Holding.',
    productTitle: 'Všechno kolem Diriqo.',
    productText: 'Dotazy k připravovaným produktům, zájem o testování i vaše nápady patří sem. Diriqo a DiriPOS jsou zatím ve vývoji.',
    write: 'Napsat týmu Diriqo',
    operator: 'Kdo za námi stojí',
    holdingText: 'JSPD Holding propojuje technologie, služby a výrobu. Více o společnosti a jejích aktivitách najdete na webu holdingu.',
    visit: 'Navštívit jspd.cz',
    registration: 'IČO', address: 'Sídlo společnosti', holdingContact: 'Kontakt na holding',
    privacyText: 'Jak nakládáme s údaji z vaší zprávy, popisujeme přímo tady na webu Diriqo.',
  },
  en: {
    title: 'Let’s get in touch.',
    intro: 'Interested in Diriqo, DiriPOS or working together? Write to us. JSPD Holding is the company behind our projects.',
    productTitle: 'Everything about Diriqo.',
    productText: 'Send us your product questions, interest in testing or ideas. Diriqo and DiriPOS are still in development.',
    write: 'Email the Diriqo team', operator: 'The company behind us',
    holdingText: 'JSPD Holding brings together technology, services and production. Visit the holding website to learn more about the company and its activities.',
    visit: 'Visit jspd.cz', registration: 'Company ID', address: 'Registered office', holdingContact: 'Holding contact',
    privacyText: 'Read how we handle the information in your message, right here on the Diriqo website.',
  },
  de: {
    title: 'Lassen Sie uns sprechen.',
    intro: 'Sie interessieren sich für Diriqo, DiriPOS oder eine Zusammenarbeit? Schreiben Sie uns. Hinter unseren Projekten steht JSPD Holding.',
    productTitle: 'Alles rund um Diriqo.',
    productText: 'Hier ist Platz für Fragen zu unseren Produkten, Interesse an Tests und Ihre Ideen. Diriqo und DiriPOS befinden sich noch in Entwicklung.',
    write: 'Dem Diriqo-Team schreiben', operator: 'Wer hinter uns steht',
    holdingText: 'JSPD Holding verbindet Technologie, Dienstleistungen und Produktion. Mehr über das Unternehmen und seine Aktivitäten erfahren Sie auf der Website der Holding.',
    visit: 'jspd.cz besuchen', registration: 'Unternehmensnummer', address: 'Firmensitz', holdingContact: 'Kontakt zur Holding',
    privacyText: 'Wie wir mit den Daten Ihrer Nachricht umgehen, erfahren Sie direkt hier auf der Diriqo-Website.',
  },
  pl: {
    title: 'Porozmawiajmy.',
    intro: 'Interesuje Cię Diriqo, DiriPOS lub współpraca? Napisz do nas. Za naszymi projektami stoi JSPD Holding.',
    productTitle: 'Wszystko o Diriqo.',
    productText: 'Tu możesz przesłać pytania o produkty, zgłosić chęć testowania lub podzielić się pomysłami. Diriqo i DiriPOS są nadal w fazie rozwoju.',
    write: 'Napisz do zespołu Diriqo', operator: 'Kto za nami stoi',
    holdingText: 'JSPD Holding łączy technologie, usługi i produkcję. Więcej o firmie i jej działalności znajdziesz na stronie holdingu.',
    visit: 'Odwiedź jspd.cz', registration: 'Numer firmy (IČO)', address: 'Siedziba firmy', holdingContact: 'Kontakt z holdingiem',
    privacyText: 'O przetwarzaniu danych z Twojej wiadomości przeczytasz tutaj, na stronie Diriqo.',
  },
  sk: {
    title: 'Spojme sa.',
    intro: 'Zaujíma vás Diriqo, DiriPOS alebo spolupráca? Napíšte nám. Za projektmi stojí JSPD Holding.',
    productTitle: 'Všetko okolo Diriqo.',
    productText: 'Otázky k pripravovaným produktom, záujem o testovanie aj vaše nápady patria sem. Diriqo a DiriPOS sú zatiaľ vo vývoji.',
    write: 'Napísať tímu Diriqo', operator: 'Kto za nami stojí',
    holdingText: 'JSPD Holding prepája technológie, služby a výrobu. Viac o spoločnosti a jej aktivitách nájdete na webe holdingu.',
    visit: 'Navštíviť jspd.cz', registration: 'IČO', address: 'Sídlo spoločnosti', holdingContact: 'Kontakt na holding',
    privacyText: 'Ako nakladáme s údajmi z vašej správy, opisujeme priamo tu na webe Diriqo.',
  },
  hu: {
    title: 'Lépjünk kapcsolatba.',
    intro: 'Érdekli a Diriqo, a DiriPOS vagy az együttműködés? Írjon nekünk. Projektjeink mögött a JSPD Holding áll.',
    productTitle: 'Minden, ami Diriqo.',
    productText: 'Küldje el termékekkel kapcsolatos kérdéseit, tesztelési szándékát vagy ötleteit. A Diriqo és a DiriPOS még fejlesztés alatt áll.',
    write: 'Írjon a Diriqo csapatának', operator: 'A mögöttünk álló vállalat',
    holdingText: 'A JSPD Holding a technológiát, a szolgáltatásokat és a termelést kapcsolja össze. A vállalatról és tevékenységeiről a holding honlapján olvashat.',
    visit: 'A jspd.cz megnyitása', registration: 'Cégazonosító (IČO)', address: 'Székhely', holdingContact: 'A holding elérhetősége',
    privacyText: 'Üzenete adatainak kezeléséről itt, a Diriqo honlapján tájékozódhat.',
  },
  es: {
    title: 'Hablemos.',
    intro: '¿Te interesa Diriqo, DiriPOS o colaborar con nosotros? Escríbenos. JSPD Holding es la empresa detrás de nuestros proyectos.',
    productTitle: 'Todo sobre Diriqo.',
    productText: 'Envíanos tus preguntas sobre los productos, tu interés en probarlos o tus ideas. Diriqo y DiriPOS siguen en desarrollo.',
    write: 'Escribir al equipo de Diriqo', operator: 'Quién está detrás',
    holdingText: 'JSPD Holding reúne tecnología, servicios y producción. Conoce la empresa y sus actividades en la web del grupo.',
    visit: 'Visitar jspd.cz', registration: 'Identificación de la empresa', address: 'Domicilio social', holdingContact: 'Contacto del grupo',
    privacyText: 'Consulta cómo tratamos los datos de tu mensaje aquí mismo, en la web de Diriqo.',
  },
  tr: {
    title: 'İletişime geçelim.',
    intro: 'Diriqo, DiriPOS veya iş birliğiyle mi ilgileniyorsunuz? Bize yazın. Projelerimizin arkasında JSPD Holding var.',
    productTitle: 'Diriqo hakkında her şey.',
    productText: 'Ürün sorularınızı, testlere katılma isteğinizi veya fikirlerinizi bize gönderin. Diriqo ve DiriPOS hâlâ geliştirme aşamasındadır.',
    write: 'Diriqo ekibine yazın', operator: 'Arkamızdaki şirket',
    holdingText: 'JSPD Holding teknoloji, hizmetler ve üretimi bir araya getirir. Şirket ve faaliyetleri hakkında holdingin web sitesinden bilgi alabilirsiniz.',
    visit: 'jspd.cz sitesini ziyaret edin', registration: 'Şirket kimlik numarası', address: 'Kayıtlı merkez', holdingContact: 'Holding iletişim bilgileri',
    privacyText: 'Mesajınızdaki verileri nasıl işlediğimizi Diriqo web sitesinde okuyabilirsiniz.',
  },
  sq: {
    title: 'Le të lidhemi.',
    intro: 'Ju intereson Diriqo, DiriPOS apo bashkëpunimi? Na shkruani. Pas projekteve tona qëndron JSPD Holding.',
    productTitle: 'Gjithçka rreth Diriqo.',
    productText: 'Na dërgoni pyetjet për produktet, interesin për testim ose idetë tuaja. Diriqo dhe DiriPOS janë ende në zhvillim.',
    write: 'Shkruajini ekipit Diriqo', operator: 'Kompania pas nesh',
    holdingText: 'JSPD Holding bashkon teknologjinë, shërbimet dhe prodhimin. Mësoni më shumë për kompaninë dhe veprimtaritë e saj në faqen e holdingut.',
    visit: 'Vizitoni jspd.cz', registration: 'Numri i identifikimit të kompanisë', address: 'Selia e regjistruar', holdingContact: 'Kontakti i holdingut',
    privacyText: 'Lexoni si i trajtojmë të dhënat e mesazhit tuaj këtu, në faqen e Diriqo.',
  },
  uk: {
    title: 'Будьмо на зв’язку.',
    intro: 'Цікавить Diriqo, DiriPOS або співпраця? Напишіть нам. За нашими проєктами стоїть JSPD Holding.',
    productTitle: 'Усе про Diriqo.',
    productText: 'Надсилайте запитання про продукти, побажання щодо тестування та свої ідеї. Diriqo і DiriPOS ще розробляються.',
    write: 'Написати команді Diriqo', operator: 'Хто за нами стоїть',
    holdingText: 'JSPD Holding поєднує технології, послуги та виробництво. Більше про компанію та її діяльність дізнайтеся на сайті холдингу.',
    visit: 'Відвідати jspd.cz', registration: 'Ідентифікаційний номер компанії', address: 'Юридична адреса', holdingContact: 'Контакт холдингу',
    privacyText: 'Про обробку даних із вашого повідомлення читайте тут, на сайті Diriqo.',
  },
  ro: {
    title: 'Să luăm legătura.',
    intro: 'Te interesează Diriqo, DiriPOS sau o colaborare? Scrie-ne. JSPD Holding este compania din spatele proiectelor noastre.',
    productTitle: 'Totul despre Diriqo.',
    productText: 'Trimite-ne întrebări despre produse, interesul pentru testare sau ideile tale. Diriqo și DiriPOS sunt încă în dezvoltare.',
    write: 'Scrie echipei Diriqo', operator: 'Cine se află în spatele nostru',
    holdingText: 'JSPD Holding reunește tehnologia, serviciile și producția. Află mai multe despre companie și activitățile sale pe site-ul holdingului.',
    visit: 'Vizitează jspd.cz', registration: 'Număr de identificare al companiei', address: 'Sediul social', holdingContact: 'Contactul holdingului',
    privacyText: 'Află cum prelucrăm datele din mesajul tău chiar aici, pe site-ul Diriqo.',
  },
  vi: {
    title: 'Hãy kết nối với chúng tôi.',
    intro: 'Bạn quan tâm đến Diriqo, DiriPOS hoặc cơ hội hợp tác? Hãy viết cho chúng tôi. JSPD Holding là công ty đứng sau các dự án này.',
    productTitle: 'Mọi thông tin về Diriqo.',
    productText: 'Gửi câu hỏi về sản phẩm, mong muốn tham gia thử nghiệm hoặc ý tưởng của bạn. Diriqo và DiriPOS vẫn đang được phát triển.',
    write: 'Gửi email cho đội ngũ Diriqo', operator: 'Công ty đứng sau chúng tôi',
    holdingText: 'JSPD Holding kết nối công nghệ, dịch vụ và sản xuất. Tìm hiểu thêm về công ty và các hoạt động trên trang web của tập đoàn.',
    visit: 'Truy cập jspd.cz', registration: 'Mã số doanh nghiệp', address: 'Trụ sở đăng ký', holdingContact: 'Liên hệ tập đoàn',
    privacyText: 'Tìm hiểu cách chúng tôi xử lý dữ liệu trong tin nhắn của bạn ngay trên trang web Diriqo.',
  },
  ar: {
    title: 'لنتواصل.',
    intro: 'هل تهتم بـ Diriqo أو DiriPOS أو التعاون معنا؟ اكتب إلينا. شركة JSPD Holding هي الجهة القائمة على مشاريعنا.',
    productTitle: 'كل ما يتعلق بـ Diriqo.',
    productText: 'أرسل أسئلتك عن المنتجات أو رغبتك في تجربتها أو أفكارك. لا يزال Diriqo وDiriPOS قيد التطوير.',
    write: 'راسل فريق Diriqo', operator: 'الشركة القائمة على مشاريعنا',
    holdingText: 'تجمع JSPD Holding بين التكنولوجيا والخدمات والإنتاج. تعرّف على الشركة وأنشطتها عبر موقع المجموعة.',
    visit: 'زيارة jspd.cz', registration: 'رقم تعريف الشركة', address: 'المقر المسجّل', holdingContact: 'التواصل مع المجموعة',
    privacyText: 'اطّلع على كيفية تعاملنا مع بيانات رسالتك هنا على موقع Diriqo.',
  },
}
