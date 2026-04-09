import { useTranslations } from 'next-intl';

export function Process() {
  const t = useTranslations('process');

  const steps = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-card-border hidden md:block" />

        <div className="space-y-8">
          {steps.map((i) => (
            <div key={i} className="fade-in relative flex gap-6 group">
              {/* Step number circle */}
              <div className="shrink-0 w-12 h-12 rounded-full border-2 border-green bg-card-bg flex items-center justify-center z-10 group-hover:bg-green transition-colors duration-300">
                <span className="text-green text-sm font-bold group-hover:text-black transition-colors duration-300">
                  {t(`steps.${i}.step`)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card-bg border border-card-border p-5 group-hover:border-green transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                  <h3 className="text-green text-sm md:text-base font-bold uppercase tracking-wide">
                    {t(`steps.${i}.name`)}
                  </h3>
                  <span className="text-dark-gray text-xs font-mono border border-card-border px-2 py-0.5 w-fit">
                    {t(`steps.${i}.time`)}
                  </span>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  {t(`steps.${i}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
