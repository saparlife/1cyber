'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRef, useState } from 'react';

const contracts = {
  ru: {
    docTitle: 'ДОГОВОР',
    docSubtitle: 'на проведение тестирования безопасности',
    city: 'г. Астана',
    dateLine: '«____» ______________ 20___ г.',
    sections: [
      {
        title: '1. Стороны',
        content: [
          '<b>Исполнитель:</b> ИП / ТОО «1CYBER», в лице ________________________________________,\nдействующего на основании ________________________________________,',
          '<b>Заказчик:</b> ________________________________________,\nв лице ________________________________________,\nдействующего на основании ________________________________________,',
          'совместно именуемые «Стороны», заключили настоящий Договор о нижеследующем:',
        ],
      },
      {
        title: '2. Предмет договора',
        content: [
          '2.1. Заказчик поручает, а Исполнитель принимает на себя обязательства по проведению тестирования на проникновение (пентест) и анализа защищённости информационных ресурсов Заказчика с целью выявления уязвимостей в системе безопасности.',
          '2.2. Заказчик подтверждает, что является законным владельцем (или уполномоченным представителем владельца) указанных в п. 3 информационных ресурсов и имеет полное право разрешить проведение тестирования.',
          '2.3. Настоящий договор является письменным разрешением (авторизацией) Заказчика на проведение тестирования безопасности в рамках согласованного объёма работ.',
        ],
      },
      {
        title: '3. Объекты тестирования',
        content: ['3.1. Тестированию подлежат следующие ресурсы Заказчика:'],
        fields: [
          'Веб-сайты / веб-приложения:',
          'Мобильные приложения (APK):',
          'Серверы / IP-адреса:',
          'API-адреса:',
        ],
      },
      {
        title: '4. Разрешённые действия',
        content: ['Исполнителю разрешается проводить следующие виды работ:'],
        list: [
          'Сбор информации об инфраструктуре (разведка)',
          'Автоматическое сканирование на известные уязвимости',
          'Ручное тестирование на проникновение',
          'Анализ исходного кода и конфигураций (если предоставлен доступ)',
          'Анализ мобильных приложений (APK): декомпиляция, анализ трафика, проверка API',
          'Проверка механизмов аутентификации и авторизации',
          'Тестирование API-эндпоинтов',
          'Проверка конфигурации серверов и сервисов',
        ],
      },
      {
        title: '5. Запрещённые действия',
        content: ['Исполнителю <b>запрещается</b>:'],
        list: [
          'Проведение атак типа «отказ в обслуживании» (DDoS/DoS)',
          'Намеренное нарушение работоспособности сервисов Заказчика',
          'Удаление или модификация данных Заказчика (кроме тестовых)',
          'Распространение найденных уязвимостей третьим лицам',
          'Использование найденных уязвимостей в корыстных целях',
          'Тестирование ресурсов, не указанных в п. 3 настоящего Договора',
          'Социальная инженерия в отношении сотрудников Заказчика (если не согласовано отдельно)',
        ],
      },
      {
        title: '6. Обязанности сторон',
        content: ['<b>Исполнитель обязуется:</b>'],
        list: [
          'Проводить тестирование исключительно в согласованных рамках',
          'Минимизировать влияние на работоспособность систем Заказчика',
          'Предоставить подробный отчёт по результатам тестирования',
          'Соблюдать конфиденциальность всей полученной информации',
          'Немедленно уведомлять Заказчика об обнаружении критических уязвимостей',
        ],
        content2: ['<b>Заказчик обязуется:</b>'],
        list2: [
          'Предоставить необходимый доступ и информацию для проведения тестирования',
          'Назначить контактное лицо для оперативной связи',
          'Оплатить услуги Исполнителя в соответствии с условиями Договора',
          'Не привлекать Исполнителя к ответственности за действия, совершённые в рамках согласованного объёма работ',
        ],
      },
      {
        title: '7. Конфиденциальность',
        content: [
          '7.1. Исполнитель обязуется не разглашать информацию, полученную в ходе тестирования, включая обнаруженные уязвимости, данные Заказчика и результаты работ.',
          '7.2. Отчёт о результатах тестирования передаётся исключительно Заказчику или уполномоченным им лицам.',
          '7.3. Обязательства по конфиденциальности действуют бессрочно после завершения работ.',
        ],
      },
      {
        title: '8. Сроки и стоимость',
        content: [
          '8.1. Срок проведения тестирования: с «____» ______________ 20___ г. по «____» ______________ 20___ г.',
          '8.2. Стоимость работ составляет: ________________________________________ тенге.',
          '8.3. Оплата производится: ________________________________________.',
        ],
      },
      {
        title: '9. Ответственность',
        content: [
          '9.1. Исполнитель несёт ответственность за ущерб, причинённый умышленно или вследствие грубой неосторожности при выходе за рамки согласованного объёма работ.',
          '9.2. Заказчик освобождает Исполнителя от ответственности за действия, совершённые в рамках настоящего Договора и согласованного объёма работ.',
          '9.3. Стороны подтверждают, что тестирование проводится с целью повышения безопасности информационных систем Заказчика и не направлено на причинение вреда.',
        ],
      },
      {
        title: '10. Заключительные положения',
        content: [
          '10.1. Настоящий Договор вступает в силу с момента подписания обеими Сторонами.',
          '10.2. Все споры решаются путём переговоров, а при недостижении согласия — в суде по месту нахождения Исполнителя.',
          '10.3. Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу, по одному для каждой Стороны.',
        ],
      },
    ],
    sigTitle: 'Подписи сторон',
    sigExecutor: 'Исполнитель:',
    sigClient: 'Заказчик:',
    sigLabels: ['Наименование', 'ФИО', 'Подпись', 'Дата'],
    sigClientLabels: ['Наименование компании', 'ФИО', 'Подпись', 'Дата'],
  },
  kz: {
    docTitle: 'ШАРТ',
    docSubtitle: 'қауіпсіздікті тексеруді жүргізуге',
    city: 'Астана қ.',
    dateLine: '«____» ______________ 20___ ж.',
    sections: [
      {
        title: '1. Тараптар',
        content: [
          '<b>Орындаушы:</b> ЖК / ЖШС «1CYBER», ________________________________________ атынан,\n________________________________________ негізінде әрекет ететін,',
          '<b>Тапсырыс беруші:</b> ________________________________________,\n________________________________________ атынан,\n________________________________________ негізінде әрекет ететін,',
          'бірлесіп «Тараптар» деп аталатын, төмендегі туралы осы Шартты жасасты:',
        ],
      },
      {
        title: '2. Шарттың мәні',
        content: [
          '2.1. Тапсырыс беруші тапсырма береді, ал Орындаушы Тапсырыс берушінің ақпараттық ресурстарының қауіпсіздік жүйесіндегі осалдықтарды анықтау мақсатында ену тестін (пентест) жүргізу және қорғалу деңгейін талдау бойынша міндеттемелерді қабылдайды.',
          '2.2. Тапсырыс беруші 3-тармақта көрсетілген ақпараттық ресурстардың заңды иесі (немесе иесінің уәкілетті өкілі) екенін растайды және тестілеуге рұқсат беруге толық құқығы бар.',
          '2.3. Осы шарт Тапсырыс берушінің келісілген жұмыс көлемі шеңберінде қауіпсіздік тестін жүргізуге жазбаша рұқсаты (авторизациясы) болып табылады.',
        ],
      },
      {
        title: '3. Тестілеу объектілері',
        content: ['3.1. Тапсырыс берушінің келесі ресурстары тестілеуге жатады:'],
        fields: [
          'Веб-сайттар / веб-қосымшалар:',
          'Мобильді қосымшалар (APK):',
          'Серверлер / IP-мекенжайлар:',
          'API-мекенжайлар:',
        ],
      },
      {
        title: '4. Рұқсат етілген әрекеттер',
        content: ['Орындаушыға жұмыстардың келесі түрлерін жүргізуге рұқсат етіледі:'],
        list: [
          'Инфрақұрылым туралы ақпарат жинау (барлау)',
          'Белгілі осалдықтарға автоматты сканерлеу',
          'Қолмен ену тестін жүргізу',
          'Бастапқы код пен конфигурацияларды талдау (қолжетімділік берілген жағдайда)',
          'Мобильді қосымшаларды (APK) талдау: декомпиляция, трафикті талдау, API тексеру',
          'Аутентификация және авторизация механизмдерін тексеру',
          'API-эндпоинттерді тестілеу',
          'Серверлер мен сервистердің конфигурациясын тексеру',
        ],
      },
      {
        title: '5. Тыйым салынған әрекеттер',
        content: ['Орындаушыға <b>тыйым салынады</b>:'],
        list: [
          '«Қызмет көрсетуден бас тарту» (DDoS/DoS) шабуылдарын жүргізу',
          'Тапсырыс берушінің сервистерінің жұмысын әдейі бұзу',
          'Тапсырыс берушінің деректерін жою немесе өзгерту (тестілік деректерден басқа)',
          'Табылған осалдықтарды үшінші тұлғаларға тарату',
          'Табылған осалдықтарды жеке мақсатта пайдалану',
          'Осы Шарттың 3-тармағында көрсетілмеген ресурстарды тестілеу',
          'Тапсырыс берушінің қызметкерлеріне қатысты әлеуметтік инженерия (жеке келісілмесе)',
        ],
      },
      {
        title: '6. Тараптардың міндеттемелері',
        content: ['<b>Орындаушы міндеттенеді:</b>'],
        list: [
          'Тестілеуді тек келісілген шеңберде жүргізу',
          'Тапсырыс берушінің жүйелерінің жұмысына әсерді барынша азайту',
          'Тестілеу нәтижелері бойынша толық есеп беру',
          'Алынған барлық ақпараттың құпиялылығын сақтау',
          'Маңызды осалдықтар табылған жағдайда Тапсырыс берушіге дереу хабарлау',
        ],
        content2: ['<b>Тапсырыс беруші міндеттенеді:</b>'],
        list2: [
          'Тестілеуді жүргізу үшін қажетті қолжетімділік пен ақпаратты беру',
          'Жедел байланыс үшін байланыс тұлғасын тағайындау',
          'Шарт талаптарына сәйкес Орындаушының қызметтеріне ақы төлеу',
          'Келісілген жұмыс көлемі шеңберінде жасалған әрекеттер үшін Орындаушыны жауапкершілікке тартпау',
        ],
      },
      {
        title: '7. Құпиялылық',
        content: [
          '7.1. Орындаушы тестілеу барысында алынған ақпаратты, соның ішінде табылған осалдықтарды, Тапсырыс берушінің деректерін және жұмыс нәтижелерін жарияламауға міндеттенеді.',
          '7.2. Тестілеу нәтижелері туралы есеп тек Тапсырыс берушіге немесе оның уәкілетті тұлғаларына беріледі.',
          '7.3. Құпиялылық міндеттемелері жұмыс аяқталғаннан кейін мерзімсіз қолданылады.',
        ],
      },
      {
        title: '8. Мерзімдер мен құны',
        content: [
          '8.1. Тестілеу мерзімі: «____» ______________ 20___ ж. бастап «____» ______________ 20___ ж. дейін.',
          '8.2. Жұмыстардың құны: ________________________________________ теңге.',
          '8.3. Төлем жүргізіледі: ________________________________________.',
        ],
      },
      {
        title: '9. Жауапкершілік',
        content: [
          '9.1. Орындаушы келісілген жұмыс көлемінен шығу кезінде қасақана немесе өрескел абайсыздық салдарынан келтірілген зиян үшін жауапты.',
          '9.2. Тапсырыс беруші осы Шарт пен келісілген жұмыс көлемі шеңберінде жасалған әрекеттер үшін Орындаушыны жауапкершіліктен босатады.',
          '9.3. Тараптар тестілеудің Тапсырыс берушінің ақпараттық жүйелерінің қауіпсіздігін арттыру мақсатында жүргізілетінін және зиян келтіруге бағытталмағанын растайды.',
        ],
      },
      {
        title: '10. Қорытынды ережелер',
        content: [
          '10.1. Осы Шарт екі Тарап қол қойған сәттен бастап күшіне енеді.',
          '10.2. Барлық дауларды келіссөздер арқылы шешіледі, ал келісімге қол жеткізілмеген жағдайда — Орындаушының тұрған жеріндегі сотта.',
          '10.3. Шарт бірдей заңды күші бар екі данада жасалған, әрбір Тарапқа біреуден.',
        ],
      },
    ],
    sigTitle: 'Тараптардың қолтаңбалары',
    sigExecutor: 'Орындаушы:',
    sigClient: 'Тапсырыс беруші:',
    sigLabels: ['Атауы', 'Аты-жөні', 'Қолтаңба', 'Күні'],
    sigClientLabels: ['Компания атауы', 'Аты-жөні', 'Қолтаңба', 'Күні'],
  },
  en: {
    docTitle: 'AGREEMENT',
    docSubtitle: 'for Security Testing Services',
    city: 'Astana',
    dateLine: '"____" ______________ 20___',
    sections: [
      {
        title: '1. Parties',
        content: [
          '<b>Contractor:</b> IE / LLP "1CYBER", represented by ________________________________________,\nacting on the basis of ________________________________________,',
          '<b>Client:</b> ________________________________________,\nrepresented by ________________________________________,\nacting on the basis of ________________________________________,',
          'hereinafter jointly referred to as the "Parties", have entered into this Agreement as follows:',
        ],
      },
      {
        title: '2. Subject of the Agreement',
        content: [
          '2.1. The Client engages, and the Contractor undertakes to perform penetration testing (pentest) and security assessment of the Client\'s information resources to identify vulnerabilities in the security system.',
          '2.2. The Client confirms that they are the legal owner (or authorized representative of the owner) of the information resources specified in Section 3 and have full authority to authorize testing.',
          '2.3. This Agreement constitutes the Client\'s written authorization to conduct security testing within the agreed scope of work.',
        ],
      },
      {
        title: '3. Testing Scope',
        content: ['3.1. The following Client resources are subject to testing:'],
        fields: [
          'Websites / web applications:',
          'Mobile applications (APK):',
          'Servers / IP addresses:',
          'API endpoints:',
        ],
      },
      {
        title: '4. Authorized Actions',
        content: ['The Contractor is authorized to perform the following types of work:'],
        list: [
          'Infrastructure information gathering (reconnaissance)',
          'Automated scanning for known vulnerabilities',
          'Manual penetration testing',
          'Source code and configuration analysis (if access is provided)',
          'Mobile application (APK) analysis: decompilation, traffic analysis, API testing',
          'Authentication and authorization mechanism testing',
          'API endpoint testing',
          'Server and service configuration review',
        ],
      },
      {
        title: '5. Prohibited Actions',
        content: ['The Contractor is <b>prohibited</b> from:'],
        list: [
          'Conducting denial-of-service attacks (DDoS/DoS)',
          'Intentionally disrupting the Client\'s services',
          'Deleting or modifying the Client\'s data (except test data)',
          'Disclosing discovered vulnerabilities to third parties',
          'Exploiting discovered vulnerabilities for personal gain',
          'Testing resources not specified in Section 3 of this Agreement',
          'Social engineering against the Client\'s employees (unless separately agreed)',
        ],
      },
      {
        title: '6. Obligations of the Parties',
        content: ['<b>The Contractor undertakes to:</b>'],
        list: [
          'Conduct testing exclusively within the agreed scope',
          'Minimize impact on the Client\'s system operations',
          'Provide a detailed report on testing results',
          'Maintain confidentiality of all obtained information',
          'Immediately notify the Client upon discovery of critical vulnerabilities',
        ],
        content2: ['<b>The Client undertakes to:</b>'],
        list2: [
          'Provide necessary access and information for testing',
          'Designate a contact person for communication',
          'Pay for the Contractor\'s services in accordance with the terms of the Agreement',
          'Not hold the Contractor liable for actions performed within the agreed scope of work',
        ],
      },
      {
        title: '7. Confidentiality',
        content: [
          '7.1. The Contractor undertakes not to disclose information obtained during testing, including discovered vulnerabilities, Client data, and work results.',
          '7.2. The testing results report shall be provided exclusively to the Client or their authorized representatives.',
          '7.3. Confidentiality obligations shall remain in effect indefinitely after completion of work.',
        ],
      },
      {
        title: '8. Timeline and Cost',
        content: [
          '8.1. Testing period: from "____" ______________ 20___ to "____" ______________ 20___.',
          '8.2. Total cost of services: ________________________________________ KZT.',
          '8.3. Payment terms: ________________________________________.',
        ],
      },
      {
        title: '9. Liability',
        content: [
          '9.1. The Contractor shall be liable for damage caused intentionally or through gross negligence when exceeding the agreed scope of work.',
          '9.2. The Client releases the Contractor from liability for actions performed within this Agreement and the agreed scope of work.',
          '9.3. The Parties confirm that testing is conducted to improve the security of the Client\'s information systems and is not intended to cause harm.',
        ],
      },
      {
        title: '10. Final Provisions',
        content: [
          '10.1. This Agreement shall enter into force upon signing by both Parties.',
          '10.2. All disputes shall be resolved through negotiations, and if no agreement is reached — in court at the location of the Contractor.',
          '10.3. This Agreement is made in two copies of equal legal force, one for each Party.',
        ],
      },
    ],
    sigTitle: 'Signatures',
    sigExecutor: 'Contractor:',
    sigClient: 'Client:',
    sigLabels: ['Company name', 'Full name', 'Signature', 'Date'],
    sigClientLabels: ['Company name', 'Full name', 'Signature', 'Date'],
  },
};

type Section = {
  title: string;
  content: string[];
  fields?: string[];
  list?: string[];
  content2?: string[];
  list2?: string[];
};

export function Dogovor() {
  const t = useTranslations('dogovor');
  const locale = useLocale() as 'ru' | 'kz' | 'en';
  const contractRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const c = contracts[locale] || contracts.ru;

  async function handleDownload() {
    if (!contractRef.current || downloading) return;
    setDownloading(true);

    const html2pdf = (await import('html2pdf.js')).default;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (html2pdf as any)()
      .set({
        margin: [10, 15, 10, 15],
        filename: `1CYBER_contract_${locale}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(contractRef.current)
      .save();
    setDownloading(false);
  }

  return (
    <div className="min-h-screen">
      {/* Screen header */}
      <div className="px-6 pt-8 max-w-4xl mx-auto">
        <a href={`/${locale}`} className="text-green text-sm hover:underline">
          {t('back')}
        </a>

        <div className="mt-8 mb-4">
          <span className="text-green text-2xl font-bold tracking-widest">
            {'< '}1CYBER{' />'}
          </span>
        </div>

        <h1 className="text-green text-2xl md:text-3xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-gray mb-8">
          {t('subtitle')}
        </p>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="btn-glitch border-2 border-green text-green px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer mb-12 disabled:opacity-50 disabled:cursor-wait"
        >
          {downloading ? '...' : t('download')}
        </button>
      </div>

      {/* Contract body for PDF */}
      <div className="px-6 max-w-4xl mx-auto pb-20">
        <div
          ref={contractRef}
          className="bg-white text-black p-8 md:p-12"
          style={{ fontFamily: 'serif', fontSize: '13px', lineHeight: '1.7' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>
              {c.docTitle}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>
              {c.docSubtitle}
            </p>
            <p style={{ fontSize: '13px', color: '#333' }}>
              {c.city}
              <span style={{ display: 'inline-block', width: '200px' }} />
              {c.dateLine}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {c.sections.map((sec: Section, i: number) => (
              <div key={i}>
                <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>
                  {sec.title}
                </h3>

                {sec.content.map((p: string, j: number) => (
                  <p
                    key={j}
                    style={{ marginBottom: '6px', whiteSpace: 'pre-wrap' }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}

                {sec.fields && (
                  <div style={{ marginLeft: '16px', marginTop: '8px' }}>
                    {sec.fields.map((f: string, j: number) => (
                      <div key={j} style={{ marginBottom: '12px' }}>
                        <p style={{ fontWeight: 'bold' }}>{f}</p>
                        <div style={{ borderBottom: '1px solid #999', height: '24px', marginTop: '4px' }} />
                      </div>
                    ))}
                  </div>
                )}

                {sec.list && (
                  <ul style={{ marginLeft: '16px', marginTop: '4px', listStyle: 'none', padding: 0 }}>
                    {sec.list.map((item: string, j: number) => (
                      <li key={j} style={{ marginBottom: '3px' }}>— {item}</li>
                    ))}
                  </ul>
                )}

                {sec.content2 && sec.content2.map((p: string, j: number) => (
                  <p
                    key={`c2-${j}`}
                    style={{ marginBottom: '6px', marginTop: '12px' }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}

                {sec.list2 && (
                  <ul style={{ marginLeft: '16px', marginTop: '4px', listStyle: 'none', padding: 0 }}>
                    {sec.list2.map((item: string, j: number) => (
                      <li key={j} style={{ marginBottom: '3px' }}>— {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Signatures */}
          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #ccc' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '24px' }}>
              {c.sigTitle}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>{c.sigExecutor}</p>
                <p style={{ marginBottom: '8px' }}>1CYBER</p>
                {c.sigLabels.map((label: string, i: number) => (
                  <div key={i} style={{ marginBottom: '12px' }}>
                    <p style={{ fontSize: '11px', color: '#666', marginBottom: '2px' }}>{label}</p>
                    <div style={{ borderBottom: '1px solid #999', height: '20px' }} />
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>{c.sigClient}</p>
                <div style={{ marginBottom: '8px', height: '20px' }} />
                {c.sigClientLabels.map((label: string, i: number) => (
                  <div key={i} style={{ marginBottom: '12px' }}>
                    <p style={{ fontSize: '11px', color: '#666', marginBottom: '2px' }}>{label}</p>
                    <div style={{ borderBottom: '1px solid #999', height: '20px' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
