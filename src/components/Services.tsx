import { useTranslations } from 'next-intl';

export function Services() {
  const t = useTranslations('services');

  const icons = ['🌐', '📱', '🖥️'];
  const items = [0, 1, 2];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div
            key={i}
            className="fade-in bg-card-bg border border-card-border p-6 text-center hover:border-green transition-colors"
          >
            <div className="text-4xl mb-4">{icons[i]}</div>
            <h3 className="text-green text-sm font-bold mb-3 uppercase tracking-wide">
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
