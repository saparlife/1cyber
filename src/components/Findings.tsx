import { useTranslations } from 'next-intl';

export function Findings() {
  const t = useTranslations('findings');

  const items = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div
            key={i}
            className="fade-in bg-card-bg border border-card-border border-l-2 border-l-green p-5 transition-colors hover:border-l-red"
          >
            <h3 className="text-green text-sm font-bold mb-2 uppercase tracking-wide">
              {t(`items.${i}.name`)}
            </h3>
            <p className="text-gray text-sm leading-relaxed">
              {t(`items.${i}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
