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
          '2.2. Заказчик подтверждает, что является законным владельцем (или уполномоченным представителем владельца) указанных в п. 4 информационных ресурсов и имеет полное право разрешить проведение тестирования.',
          '2.3. Настоящий договор является письменным разрешением (авторизацией) Заказчика на проведение тестирования безопасности в рамках согласованного объёма работ.',
        ],
      },
      {
        title: '3. Конфиденциальность (NDA)',
        content: [
          '<b>3.1.</b> Стороны обязуются не разглашать конфиденциальную информацию, полученную в связи с исполнением настоящего Договора, включая, но не ограничиваясь:',
        ],
        list: [
          'Обнаруженные уязвимости и результаты тестирования',
          'Внутренние данные, документы и системы Заказчика',
          'Коммерческую тайну и ноу-хау обеих Сторон',
          'Условия и содержание настоящего Договора',
          'Персональные данные сотрудников и клиентов Заказчика',
        ],
        content2: [
          '<b>3.2.</b> Отчёт о результатах тестирования передаётся исключительно Заказчику или уполномоченным им лицам.',
          '<b>3.3.</b> Обязательства по конфиденциальности действуют бессрочно после завершения работ по настоящему Договору.',
          '<b>3.4.</b> За нарушение обязательств по конфиденциальности виновная Сторона несёт ответственность в соответствии с законодательством Республики Казахстан.',
        ],
      },
      {
        title: '4. Объекты тестирования (Scope)',
        content: ['4.1. Тестированию подлежат следующие ресурсы Заказчика:'],
        fields: [
          'Веб-сайты / веб-приложения:',
          'Мобильные приложения (APK/IPA):',
          'Серверы / IP-адреса:',
          'API-адреса:',
        ],
        content2: [
          '<b>4.2.</b> Тестирование за пределами указанных объектов строго запрещено.',
        ],
      },
      {
        title: '5. Авторизация на тестирование (Authorization to Test)',
        content: [
          '<b>5.1.</b> Настоящий раздел является официальным письменным разрешением Заказчика на проведение тестирования безопасности указанных в п. 4 ресурсов.',
          '<b>5.2.</b> Заказчик подтверждает, что обладает полными полномочиями для выдачи такого разрешения.',
          '<b>5.3.</b> Заказчик обязуется не привлекать Исполнителя к ответственности (safe harbor) за действия, совершённые в рамках согласованного объёма работ и в период действия настоящего Договора.',
          '<b>5.4.</b> Период тестирования: с «____» ______________ 20___ г. по «____» ______________ 20___ г.',
        ],
      },
      {
        title: '6. Разрешённые действия',
        content: ['Исполнителю разрешается проводить следующие виды работ:'],
        list: [
          'Сбор информации об инфраструктуре (разведка)',
          'Автоматическое сканирование на известные уязвимости',
          'Ручное тестирование на проникновение',
          'Анализ исходного кода и конфигураций (если предоставлен доступ)',
          'Анализ мобильных приложений (APK/IPA): декомпиляция, анализ трафика, проверка API',
          'Проверка механизмов аутентификации и авторизации',
          'Тестирование API-эндпоинтов',
          'Проверка конфигурации серверов и сервисов',
        ],
      },
      {
        title: '7. Запрещённые действия',
        content: ['Исполнителю <b>запрещается</b>:'],
        list: [
          'Проведение атак типа «отказ в обслуживании» (DDoS/DoS)',
          'Намеренное нарушение работоспособности сервисов Заказчика',
          'Удаление или модификация данных Заказчика (кроме тестовых)',
          'Распространение найденных уязвимостей третьим лицам',
          'Использование найденных уязвимостей в корыстных целях',
          'Тестирование ресурсов, не указанных в п. 4 настоящего Договора',
          'Социальная инженерия в отношении сотрудников Заказчика (если не согласовано отдельно)',
        ],
      },
      {
        title: '8. Обязанности сторон',
        content: ['<b>Исполнитель обязуется:</b>'],
        list: [
          'Проводить тестирование исключительно в согласованных рамках',
          'Минимизировать влияние на работоспособность систем Заказчика',
          'Предоставить подробный отчёт с proof-of-concept (PoC) для каждой уязвимости',
          'Соблюдать конфиденциальность всей полученной информации',
          'Немедленно уведомлять Заказчика об обнаружении критических уязвимостей',
        ],
        content2: ['<b>Заказчик обязуется:</b>'],
        list2: [
          'Предоставить необходимый доступ и информацию для проведения тестирования',
          'Назначить контактное лицо для оперативной связи',
          'В течение 14 дней проверить предоставленные PoC и подписать акт приёма-передачи',
          'Оплатить услуги Исполнителя в течение 30 дней после подписания акта',
          'Не привлекать Исполнителя к ответственности за действия в рамках согласованного объёма',
        ],
      },
      {
        title: '9. Стоимость и порядок оплаты',
        content: [
          '<b>9.1.</b> Оплата производится за подтверждённые уязвимости по следующим тарифам (USD):',
        ],
        list: [
          'LOW (CVSS 0.1–3.9): $100 за уязвимость',
          'MEDIUM (CVSS 4.0–6.9): $300 за уязвимость',
          'HIGH (CVSS 7.0–8.9): $1,000 за уязвимость',
          'CRITICAL (CVSS 9.0–10.0): $2,000 за уязвимость',
        ],
        content2: [
          '<b>9.2.</b> Оплата в USD или эквивалент в KZT/RUB по курсу на день выставления счёта.',
          '<b>9.3.</b> Срок оплаты: 30 календарных дней с момента подписания акта приёма-передачи.',
          '<b>9.4.</b> Иной порядок оплаты (при наличии): ________________________________________.',
        ],
      },
      {
        title: '10. Отчётность и приёмка',
        content: [
          '<b>10.1.</b> По завершении тестирования Исполнитель предоставляет Заказчику отчёт, содержащий:',
        ],
        list: [
          'Описание каждой обнаруженной уязвимости',
          'Уровень критичности по CVSS 3.1',
          'Работающий proof-of-concept (PoC) для каждой уязвимости',
          'Рекомендации по устранению',
        ],
        content2: [
          '<b>10.2.</b> Заказчик в течение 14 дней проверяет PoC и подписывает акт приёма-передачи.',
          '<b>10.3.</b> При наличии разногласий Стороны проводят совместную верификацию.',
        ],
      },
      {
        title: '11. Ответственность',
        content: [
          '11.1. Исполнитель несёт ответственность за ущерб, причинённый умышленно или вследствие грубой неосторожности при выходе за рамки согласованного объёма работ.',
          '11.2. Заказчик освобождает Исполнителя от ответственности за действия, совершённые в рамках настоящего Договора и согласованного объёма работ (safe harbor).',
          '11.3. Стороны подтверждают, что тестирование проводится с целью повышения безопасности информационных систем Заказчика и не направлено на причинение вреда.',
        ],
      },
      {
        title: '12. Заключительные положения',
        content: [
          '12.1. Настоящий Договор вступает в силу с момента подписания обеими Сторонами.',
          '12.2. Все споры решаются путём переговоров, а при недостижении согласия — в суде по месту нахождения Исполнителя.',
          '12.3. Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу, по одному для каждой Стороны.',
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
          '2.2. Тапсырыс беруші 4-тармақта көрсетілген ақпараттық ресурстардың заңды иесі (немесе иесінің уәкілетті өкілі) екенін растайды және тестілеуге рұқсат беруге толық құқығы бар.',
          '2.3. Осы шарт Тапсырыс берушінің келісілген жұмыс көлемі шеңберінде қауіпсіздік тестін жүргізуге жазбаша рұқсаты (авторизациясы) болып табылады.',
        ],
      },
      {
        title: '3. Құпиялылық (NDA)',
        content: [
          '<b>3.1.</b> Тараптар осы Шартты орындауға байланысты алынған құпия ақпаратты жарияламауға міндеттенеді, оның ішінде, бірақ мұнымен шектелмей:',
        ],
        list: [
          'Табылған осалдықтар мен тестілеу нәтижелері',
          'Тапсырыс берушінің ішкі деректері, құжаттары мен жүйелері',
          'Екі Тараптың коммерциялық құпиясы мен ноу-хау',
          'Осы Шарттың талаптары мен мазмұны',
          'Тапсырыс берушінің қызметкерлері мен клиенттерінің жеке деректері',
        ],
        content2: [
          '<b>3.2.</b> Тестілеу нәтижелері туралы есеп тек Тапсырыс берушіге немесе оның уәкілетті тұлғаларына беріледі.',
          '<b>3.3.</b> Құпиялылық міндеттемелері осы Шарт бойынша жұмыстар аяқталғаннан кейін мерзімсіз қолданылады.',
          '<b>3.4.</b> Құпиялылық міндеттемелерін бұзғаны үшін кінәлі Тарап Қазақстан Республикасының заңнамасына сәйкес жауапты болады.',
        ],
      },
      {
        title: '4. Тестілеу объектілері (Scope)',
        content: ['4.1. Тапсырыс берушінің келесі ресурстары тестілеуге жатады:'],
        fields: [
          'Веб-сайттар / веб-қосымшалар:',
          'Мобильді қосымшалар (APK/IPA):',
          'Серверлер / IP-мекенжайлар:',
          'API-мекенжайлар:',
        ],
        content2: [
          '<b>4.2.</b> Көрсетілген объектілерден тыс тестілеу қатаң тыйым салынған.',
        ],
      },
      {
        title: '5. Тестілеуге авторизация (Authorization to Test)',
        content: [
          '<b>5.1.</b> Осы бөлім 4-тармақта көрсетілген ресурстарды қауіпсіздік тестілеуін жүргізуге Тапсырыс берушінің ресми жазбаша рұқсаты болып табылады.',
          '<b>5.2.</b> Тапсырыс беруші осындай рұқсатты беруге толық өкілеттігі бар екенін растайды.',
          '<b>5.3.</b> Тапсырыс беруші келісілген жұмыс көлемі шеңберінде және осы Шарттың қолданылу кезеңінде жасалған әрекеттер үшін Орындаушыны жауапкершілікке тартпауға (safe harbor) міндеттенеді.',
          '<b>5.4.</b> Тестілеу кезеңі: «____» ______________ 20___ ж. бастап «____» ______________ 20___ ж. дейін.',
        ],
      },
      {
        title: '6. Рұқсат етілген әрекеттер',
        content: ['Орындаушыға жұмыстардың келесі түрлерін жүргізуге рұқсат етіледі:'],
        list: [
          'Инфрақұрылым туралы ақпарат жинау (барлау)',
          'Белгілі осалдықтарға автоматты сканерлеу',
          'Қолмен ену тестін жүргізу',
          'Бастапқы код пен конфигурацияларды талдау (қолжетімділік берілген жағдайда)',
          'Мобильді қосымшаларды (APK/IPA) талдау: декомпиляция, трафикті талдау, API тексеру',
          'Аутентификация және авторизация механизмдерін тексеру',
          'API-эндпоинттерді тестілеу',
          'Серверлер мен сервистердің конфигурациясын тексеру',
        ],
      },
      {
        title: '7. Тыйым салынған әрекеттер',
        content: ['Орындаушыға <b>тыйым салынады</b>:'],
        list: [
          '«Қызмет көрсетуден бас тарту» (DDoS/DoS) шабуылдарын жүргізу',
          'Тапсырыс берушінің сервистерінің жұмысын әдейі бұзу',
          'Тапсырыс берушінің деректерін жою немесе өзгерту (тестілік деректерден басқа)',
          'Табылған осалдықтарды үшінші тұлғаларға тарату',
          'Табылған осалдықтарды жеке мақсатта пайдалану',
          'Осы Шарттың 4-тармағында көрсетілмеген ресурстарды тестілеу',
          'Тапсырыс берушінің қызметкерлеріне қатысты әлеуметтік инженерия (жеке келісілмесе)',
        ],
      },
      {
        title: '8. Тараптардың міндеттемелері',
        content: ['<b>Орындаушы міндеттенеді:</b>'],
        list: [
          'Тестілеуді тек келісілген шеңберде жүргізу',
          'Тапсырыс берушінің жүйелерінің жұмысына әсерді барынша азайту',
          'Әр осалдық үшін proof-of-concept (PoC) бар толық есеп беру',
          'Алынған барлық ақпараттың құпиялылығын сақтау',
          'Маңызды осалдықтар табылған жағдайда Тапсырыс берушіге дереу хабарлау',
        ],
        content2: ['<b>Тапсырыс беруші міндеттенеді:</b>'],
        list2: [
          'Тестілеуді жүргізу үшін қажетті қолжетімділік пен ақпаратты беру',
          'Жедел байланыс үшін байланыс тұлғасын тағайындау',
          '14 күн ішінде берілген PoC-ты тексеру және қабылдау актісіне қол қою',
          'Акт қол қойылғаннан кейін 30 күн ішінде Орындаушының қызметтеріне ақы төлеу',
          'Келісілген жұмыс көлемі шеңберінде жасалған әрекеттер үшін Орындаушыны жауапкершілікке тартпау',
        ],
      },
      {
        title: '9. Құны және төлем тәртібі',
        content: [
          '<b>9.1.</b> Расталған осалдықтар үшін келесі тарифтер бойынша төлем жүргізіледі (USD):',
        ],
        list: [
          'LOW (CVSS 0.1–3.9): осалдық үшін $100',
          'MEDIUM (CVSS 4.0–6.9): осалдық үшін $300',
          'HIGH (CVSS 7.0–8.9): осалдық үшін $1,000',
          'CRITICAL (CVSS 9.0–10.0): осалдық үшін $2,000',
        ],
        content2: [
          '<b>9.2.</b> Төлем USD немесе шот-фактура жасалған күнгі бағам бойынша KZT/RUB эквивалентінде.',
          '<b>9.3.</b> Төлем мерзімі: қабылдау актісіне қол қойылған сәттен бастап 30 күнтізбелік күн.',
          '<b>9.4.</b> Өзге төлем тәртібі (бар болса): ________________________________________.',
        ],
      },
      {
        title: '10. Есептілік және қабылдау',
        content: [
          '<b>10.1.</b> Тестілеу аяқталғаннан кейін Орындаушы Тапсырыс берушіге мынадай есепті ұсынады:',
        ],
        list: [
          'Табылған әр осалдықтың сипаттамасы',
          'CVSS 3.1 бойынша қауіптілік деңгейі',
          'Әр осалдық үшін жұмыс істейтін proof-of-concept (PoC)',
          'Жою бойынша ұсыныстар',
        ],
        content2: [
          '<b>10.2.</b> Тапсырыс беруші 14 күн ішінде PoC-ты тексеріп, қабылдау актісіне қол қояды.',
          '<b>10.3.</b> Келіспеушіліктер болған жағдайда Тараптар бірлескен верификация жүргізеді.',
        ],
      },
      {
        title: '11. Жауапкершілік',
        content: [
          '11.1. Орындаушы келісілген жұмыс көлемінен шығу кезінде қасақана немесе өрескел абайсыздық салдарынан келтірілген зиян үшін жауапты.',
          '11.2. Тапсырыс беруші осы Шарт пен келісілген жұмыс көлемі шеңберінде жасалған әрекеттер үшін Орындаушыны жауапкершіліктен босатады (safe harbor).',
          '11.3. Тараптар тестілеудің Тапсырыс берушінің ақпараттық жүйелерінің қауіпсіздігін арттыру мақсатында жүргізілетінін және зиян келтіруге бағытталмағанын растайды.',
        ],
      },
      {
        title: '12. Қорытынды ережелер',
        content: [
          '12.1. Осы Шарт екі Тарап қол қойған сәттен бастап күшіне енеді.',
          '12.2. Барлық даулар келіссөздер арқылы шешіледі, ал келісімге қол жеткізілмеген жағдайда — Орындаушының тұрған жеріндегі сотта.',
          '12.3. Шарт бірдей заңды күші бар екі данада жасалған, әрбір Тарапқа біреуден.',
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
          '2.2. The Client confirms that they are the legal owner (or authorized representative of the owner) of the information resources specified in Section 4 and have full authority to authorize testing.',
          '2.3. This Agreement constitutes the Client\'s written authorization to conduct security testing within the agreed scope of work.',
        ],
      },
      {
        title: '3. Confidentiality (NDA)',
        content: [
          '<b>3.1.</b> The Parties undertake not to disclose confidential information obtained in connection with the performance of this Agreement, including but not limited to:',
        ],
        list: [
          'Discovered vulnerabilities and testing results',
          'Internal data, documents and systems of the Client',
          'Trade secrets and know-how of both Parties',
          'Terms and contents of this Agreement',
          'Personal data of the Client\'s employees and customers',
        ],
        content2: [
          '<b>3.2.</b> The testing results report shall be provided exclusively to the Client or their authorized representatives.',
          '<b>3.3.</b> Confidentiality obligations shall remain in effect indefinitely after completion of work under this Agreement.',
          '<b>3.4.</b> The breaching Party shall be liable for violation of confidentiality obligations in accordance with the laws of the Republic of Kazakhstan.',
        ],
      },
      {
        title: '4. Testing Scope',
        content: ['4.1. The following Client resources are subject to testing:'],
        fields: [
          'Websites / web applications:',
          'Mobile applications (APK/IPA):',
          'Servers / IP addresses:',
          'API endpoints:',
        ],
        content2: [
          '<b>4.2.</b> Testing outside the specified scope is strictly prohibited.',
        ],
      },
      {
        title: '5. Authorization to Test',
        content: [
          '<b>5.1.</b> This section constitutes the Client\'s official written authorization to conduct security testing of the resources specified in Section 4.',
          '<b>5.2.</b> The Client confirms that they have full authority to grant such authorization.',
          '<b>5.3.</b> The Client agrees not to hold the Contractor liable (safe harbor) for actions performed within the agreed scope of work and during the validity period of this Agreement.',
          '<b>5.4.</b> Testing period: from "____" ______________ 20___ to "____" ______________ 20___.',
        ],
      },
      {
        title: '6. Authorized Actions',
        content: ['The Contractor is authorized to perform the following types of work:'],
        list: [
          'Infrastructure information gathering (reconnaissance)',
          'Automated scanning for known vulnerabilities',
          'Manual penetration testing',
          'Source code and configuration analysis (if access is provided)',
          'Mobile application (APK/IPA) analysis: decompilation, traffic analysis, API testing',
          'Authentication and authorization mechanism testing',
          'API endpoint testing',
          'Server and service configuration review',
        ],
      },
      {
        title: '7. Prohibited Actions',
        content: ['The Contractor is <b>prohibited</b> from:'],
        list: [
          'Conducting denial-of-service attacks (DDoS/DoS)',
          'Intentionally disrupting the Client\'s services',
          'Deleting or modifying the Client\'s data (except test data)',
          'Disclosing discovered vulnerabilities to third parties',
          'Exploiting discovered vulnerabilities for personal gain',
          'Testing resources not specified in Section 4 of this Agreement',
          'Social engineering against the Client\'s employees (unless separately agreed)',
        ],
      },
      {
        title: '8. Obligations of the Parties',
        content: ['<b>The Contractor undertakes to:</b>'],
        list: [
          'Conduct testing exclusively within the agreed scope',
          'Minimize impact on the Client\'s system operations',
          'Provide a detailed report with proof-of-concept (PoC) for each vulnerability',
          'Maintain confidentiality of all obtained information',
          'Immediately notify the Client upon discovery of critical vulnerabilities',
        ],
        content2: ['<b>The Client undertakes to:</b>'],
        list2: [
          'Provide necessary access and information for testing',
          'Designate a contact person for communication',
          'Verify provided PoCs within 14 days and sign the acceptance act',
          'Pay for the Contractor\'s services within 30 days after signing the acceptance act',
          'Not hold the Contractor liable for actions performed within the agreed scope of work',
        ],
      },
      {
        title: '9. Cost and Payment Terms',
        content: [
          '<b>9.1.</b> Payment is made for confirmed vulnerabilities at the following rates (USD):',
        ],
        list: [
          'LOW (CVSS 0.1–3.9): $100 per vulnerability',
          'MEDIUM (CVSS 4.0–6.9): $300 per vulnerability',
          'HIGH (CVSS 7.0–8.9): $1,000 per vulnerability',
          'CRITICAL (CVSS 9.0–10.0): $2,000 per vulnerability',
        ],
        content2: [
          '<b>9.2.</b> Payment in USD or equivalent in KZT/RUB at the exchange rate on the invoice date.',
          '<b>9.3.</b> Payment deadline: 30 calendar days from the date of signing the acceptance act.',
          '<b>9.4.</b> Alternative payment arrangement (if applicable): ________________________________________.',
        ],
      },
      {
        title: '10. Reporting and Acceptance',
        content: [
          '<b>10.1.</b> Upon completion of testing, the Contractor shall provide the Client with a report containing:',
        ],
        list: [
          'Description of each discovered vulnerability',
          'Severity level according to CVSS 3.1',
          'Working proof-of-concept (PoC) for each vulnerability',
          'Remediation recommendations',
        ],
        content2: [
          '<b>10.2.</b> The Client shall verify the PoCs within 14 days and sign the acceptance act.',
          '<b>10.3.</b> In case of disagreements, the Parties shall conduct joint verification.',
        ],
      },
      {
        title: '11. Liability',
        content: [
          '11.1. The Contractor shall be liable for damage caused intentionally or through gross negligence when exceeding the agreed scope of work.',
          '11.2. The Client releases the Contractor from liability for actions performed within this Agreement and the agreed scope of work (safe harbor).',
          '11.3. The Parties confirm that testing is conducted to improve the security of the Client\'s information systems and is not intended to cause harm.',
        ],
      },
      {
        title: '12. Final Provisions',
        content: [
          '12.1. This Agreement shall enter into force upon signing by both Parties.',
          '12.2. All disputes shall be resolved through negotiations, and if no agreement is reached — in court at the location of the Contractor.',
          '12.3. This Agreement is made in two copies of equal legal force, one for each Party.',
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
