import { useTranslations } from 'next-intl';

export function Process() {
  const t = useTranslations('process');

  const steps = [0, 1, 2, 3, 4];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="space-y-4">
        {steps.map((i) => (
          <div key={i} className="fade-in flex items-start gap-4 group">
            <code className="text-green font-bold whitespace-nowrap shrink-0">
              $ {t(`steps.${i}.cmd`)}
            </code>
            <span className="text-dark-gray hidden md:inline">→</span>
            <span className="text-gray text-sm md:text-base group-hover:text-green transition-colors">
              {t(`steps.${i}.desc`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
