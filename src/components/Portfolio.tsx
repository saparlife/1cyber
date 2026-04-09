import { useTranslations } from 'next-intl';

export function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-4 fade-in">
        {'> '}{t('title')}
      </h2>

      <p className="text-gray text-sm md:text-base leading-relaxed mb-8 max-w-3xl fade-in">
        {t('desc')}
      </p>

      <div className="fade-in bg-card-bg border border-card-border border-l-2 border-l-green p-8 text-center">
        <div className="text-green text-4xl mb-4 font-mono">{'{ }'}</div>
        <h3 className="text-green text-lg font-bold mb-2 uppercase tracking-wide">
          {t('coming')}
        </h3>
        <p className="text-dark-gray text-sm max-w-lg mx-auto">
          {t('coming_desc')}
        </p>
      </div>
    </section>
  );
}
