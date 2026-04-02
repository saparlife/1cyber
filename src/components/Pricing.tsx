import { useTranslations } from 'next-intl';

export function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pentest card */}
        <div className="fade-in bg-card-bg border-2 border-red p-6">
          <h3 className="text-red text-lg font-bold mb-1 tracking-wider">
            {t('pentest.name')}
          </h3>
          <div className="border-t border-card-border my-3" />
          <p className="text-red text-2xl md:text-3xl font-bold mb-4">
            {t('pentest.price')}
          </p>
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <li key={i} className="text-gray text-sm flex items-start gap-2">
                <span className="text-red mt-0.5">-</span>
                {t(`pentest.features.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Monitoring card */}
        <div className="fade-in bg-card-bg border-2 border-green p-6">
          <h3 className="text-green text-lg font-bold mb-1 tracking-wider">
            {t('monitoring.name')}
          </h3>
          <div className="border-t border-card-border my-3" />
          <p className="text-green text-2xl md:text-3xl font-bold mb-4">
            {t('monitoring.price')}
          </p>
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i} className="text-gray text-sm flex items-start gap-2">
                <span className="text-green mt-0.5">-</span>
                {t(`monitoring.features.${i}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
