'use client';

import { useTranslations, useLocale } from 'next-intl';

export function Dogovor() {
  const t = useTranslations('dogovor');
  const locale = useLocale();

  function handleDownload() {
    window.print();
  }

  return (
    <div className="min-h-screen">
      {/* Screen-only header */}
      <div className="print:hidden px-6 pt-8 max-w-4xl mx-auto">
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
          className="btn-glitch border-2 border-green text-green px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer mb-12"
        >
          {t('download')}
        </button>
      </div>

      {/* Contract body — visible on screen and print */}
      <div className="contract-body px-6 max-w-4xl mx-auto pb-20">
        <div className="bg-card-bg border border-card-border p-8 md:p-12 print:bg-white print:border-none print:p-0 print:text-black">

          <div className="text-center mb-10">
            <h2 className="text-green print:text-black text-xl md:text-2xl font-bold mb-2">
              ДОГОВОР
            </h2>
            <p className="text-green print:text-black text-lg font-bold mb-4">
              на проведение тестирования безопасности
            </p>
            <p className="text-gray print:text-black text-sm">
              г. Астана &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; «____» ______________ 20___ г.
            </p>
          </div>

          <div className="space-y-8 text-gray print:text-black text-sm leading-relaxed">

            {/* 1. Стороны */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">1. Стороны</h3>
              <p className="mb-2">
                <strong>Исполнитель:</strong> ИП / ТОО «1CYBER», в лице ________________________________________,
                действующего на основании ________________________________________,
              </p>
              <p>
                <strong>Заказчик:</strong> ________________________________________,
                в лице ________________________________________,
                действующего на основании ________________________________________,
              </p>
              <p className="mt-2">совместно именуемые «Стороны», заключили настоящий Договор о нижеследующем:</p>
            </div>

            {/* 2. Предмет */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">2. Предмет договора</h3>
              <p>
                2.1. Заказчик поручает, а Исполнитель принимает на себя обязательства по проведению
                тестирования на проникновение (пентест) и анализа защищённости информационных ресурсов
                Заказчика с целью выявления уязвимостей в системе безопасности.
              </p>
              <p className="mt-2">
                2.2. Заказчик подтверждает, что является законным владельцем (или уполномоченным представителем владельца)
                указанных в п. 3 информационных ресурсов и имеет полное право разрешить проведение тестирования.
              </p>
              <p className="mt-2">
                2.3. Настоящий договор является письменным разрешением (авторизацией) Заказчика на проведение
                тестирования безопасности в рамках согласованного объёма работ.
              </p>
            </div>

            {/* 3. Объекты */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">3. Объекты тестирования</h3>
              <p className="mb-2">3.1. Тестированию подлежат следующие ресурсы Заказчика:</p>

              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-bold">Веб-сайты / веб-приложения:</p>
                  <div className="border-b border-card-border print:border-gray-400 mt-1 mb-2 h-6"></div>
                  <div className="border-b border-card-border print:border-gray-400 mt-1 mb-2 h-6"></div>
                </div>
                <div>
                  <p className="font-bold">Мобильные приложения (APK):</p>
                  <div className="border-b border-card-border print:border-gray-400 mt-1 mb-2 h-6"></div>
                </div>
                <div>
                  <p className="font-bold">Серверы / IP-адреса:</p>
                  <div className="border-b border-card-border print:border-gray-400 mt-1 mb-2 h-6"></div>
                </div>
                <div>
                  <p className="font-bold">API-адреса:</p>
                  <div className="border-b border-card-border print:border-gray-400 mt-1 mb-2 h-6"></div>
                </div>
              </div>
            </div>

            {/* 4. Разрешённые действия */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">4. Разрешённые действия</h3>
              <p className="mb-2">Исполнителю разрешается проводить следующие виды работ:</p>
              <ul className="list-none ml-4 space-y-1">
                <li>— Сбор информации об инфраструктуре (разведка)</li>
                <li>— Автоматическое сканирование на известные уязвимости</li>
                <li>— Ручное тестирование на проникновение</li>
                <li>— Анализ исходного кода и конфигураций (если предоставлен доступ)</li>
                <li>— Анализ мобильных приложений (APK): декомпиляция, анализ трафика, проверка API</li>
                <li>— Проверка механизмов аутентификации и авторизации</li>
                <li>— Тестирование API-эндпоинтов</li>
                <li>— Проверка конфигурации серверов и сервисов</li>
              </ul>
            </div>

            {/* 5. Запрещённые действия */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">5. Запрещённые действия</h3>
              <p className="mb-2">Исполнителю <strong>запрещается</strong>:</p>
              <ul className="list-none ml-4 space-y-1">
                <li>— Проведение атак типа «отказ в обслуживании» (DDoS/DoS)</li>
                <li>— Намеренное нарушение работоспособности сервисов Заказчика</li>
                <li>— Удаление или модификация данных Заказчика (кроме тестовых)</li>
                <li>— Распространение найденных уязвимостей третьим лицам</li>
                <li>— Использование найденных уязвимостей в корыстных целях</li>
                <li>— Тестирование ресурсов, не указанных в п. 3 настоящего Договора</li>
                <li>— Социальная инженерия в отношении сотрудников Заказчика (если не согласовано отдельно)</li>
              </ul>
            </div>

            {/* 6. Обязанности */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">6. Обязанности сторон</h3>

              <p className="font-bold mb-2">Исполнитель обязуется:</p>
              <ul className="list-none ml-4 space-y-1 mb-4">
                <li>— Проводить тестирование исключительно в согласованных рамках</li>
                <li>— Минимизировать влияние на работоспособность систем Заказчика</li>
                <li>— Предоставить подробный отчёт по результатам тестирования</li>
                <li>— Соблюдать конфиденциальность всей полученной информации</li>
                <li>— Немедленно уведомлять Заказчика об обнаружении критических уязвимостей</li>
              </ul>

              <p className="font-bold mb-2">Заказчик обязуется:</p>
              <ul className="list-none ml-4 space-y-1">
                <li>— Предоставить необходимый доступ и информацию для проведения тестирования</li>
                <li>— Назначить контактное лицо для оперативной связи</li>
                <li>— Оплатить услуги Исполнителя в соответствии с условиями Договора</li>
                <li>— Не привлекать Исполнителя к ответственности за действия, совершённые в рамках согласованного объёма работ</li>
              </ul>
            </div>

            {/* 7. Конфиденциальность */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">7. Конфиденциальность</h3>
              <p>
                7.1. Исполнитель обязуется не разглашать информацию, полученную в ходе тестирования,
                включая обнаруженные уязвимости, данные Заказчика и результаты работ.
              </p>
              <p className="mt-2">
                7.2. Отчёт о результатах тестирования передаётся исключительно Заказчику
                или уполномоченным им лицам.
              </p>
              <p className="mt-2">
                7.3. Обязательства по конфиденциальности действуют бессрочно после завершения работ.
              </p>
            </div>

            {/* 8. Сроки */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">8. Сроки и стоимость</h3>
              <p>8.1. Срок проведения тестирования: с «____» ______________ 20___ г. по «____» ______________ 20___ г.</p>
              <p className="mt-2">8.2. Стоимость работ составляет: ________________________________________ тенге.</p>
              <p className="mt-2">8.3. Оплата производится: ________________________________________.</p>
            </div>

            {/* 9. Ответственность */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">9. Ответственность</h3>
              <p>
                9.1. Исполнитель несёт ответственность за ущерб, причинённый умышленно
                или вследствие грубой неосторожности при выходе за рамки согласованного объёма работ.
              </p>
              <p className="mt-2">
                9.2. Заказчик освобождает Исполнителя от ответственности за действия, совершённые
                в рамках настоящего Договора и согласованного объёма работ.
              </p>
              <p className="mt-2">
                9.3. Стороны подтверждают, что тестирование проводится с целью повышения
                безопасности информационных систем Заказчика и не направлено на причинение вреда.
              </p>
            </div>

            {/* 10. Заключительные */}
            <div>
              <h3 className="text-green print:text-black font-bold text-base mb-3">10. Заключительные положения</h3>
              <p>
                10.1. Настоящий Договор вступает в силу с момента подписания обеими Сторонами.
              </p>
              <p className="mt-2">
                10.2. Все споры решаются путём переговоров, а при недостижении согласия —
                в суде по месту нахождения Исполнителя.
              </p>
              <p className="mt-2">
                10.3. Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу,
                по одному для каждой Стороны.
              </p>
            </div>

            {/* Подписи */}
            <div className="mt-12 pt-8 border-t border-card-border print:border-gray-400">
              <h3 className="text-green print:text-black font-bold text-base mb-8">Подписи сторон</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="font-bold mb-4">Исполнитель:</p>
                  <div className="space-y-4">
                    <p>1CYBER</p>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Наименование</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">ФИО</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Подпись</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Дата</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-4">Заказчик:</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Наименование компании</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">ФИО</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Подпись</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                    <div>
                      <p className="text-dark-gray print:text-gray-500 text-xs mb-1">Дата</p>
                      <div className="border-b border-card-border print:border-gray-400 h-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
