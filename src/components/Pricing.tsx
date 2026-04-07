import { useTranslations, useLocale } from 'next-intl';

const TIER_COLORS = ['text-gray', 'text-yellow', 'text-orange', 'text-red'];
const TIER_BORDERS = ['border-gray', 'border-yellow', 'border-orange', 'border-red'];

export function Pricing() {
  const t = useTranslations('pricing');
  const td = useTranslations('dogovor');
  const locale = useLocale();

  const tiers = [0, 1, 2, 3];
  const points = [0, 1, 2, 3, 4, 5, 6];
  const monitoringFeatures = [0, 1, 2, 3, 4];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      {/* Free audit model card */}
      <div className="fade-in bg-card-bg border-2 border-red p-6 mb-6">
        <h3 className="text-red text-lg md:text-xl font-bold mb-2 tracking-wider">
          {t('model.name')}
        </h3>
        <div className="border-t border-card-border my-3" />
        <p className="text-gray text-sm md:text-base mb-5 leading-relaxed">
          {t('model.desc')}
        </p>
        <ul className="space-y-2">
          {points.map((i) => (
            <li key={i} className="text-gray text-sm flex items-start gap-2">
              <span className="text-red mt-0.5">-</span>
              {t(`model.points.${i}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Severity tiers */}
      <div className="fade-in mb-6">
        <h4 className="text-green text-sm font-bold mb-3 tracking-wider uppercase">
          {'> '}{t('tiers.title')}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tiers.map((i) => (
            <div
              key={i}
              className={`bg-card-bg border-2 ${TIER_BORDERS[i]} p-4 text-center`}
            >
              <div className={`${TIER_COLORS[i]} text-xs font-bold tracking-wider mb-1`}>
                {t(`tiers.items.${i}.level`)}
              </div>
              <div className="text-gray text-[10px] mb-2">
                {t(`tiers.items.${i}.cvss`)}
              </div>
              <div className={`${TIER_COLORS[i]} text-xl md:text-2xl font-bold`}>
                {t(`tiers.items.${i}.price`)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monitoring card */}
      <div className="fade-in bg-card-bg border-2 border-green p-6 mb-8">
        <h3 className="text-green text-lg font-bold mb-1 tracking-wider">
          {t('monitoring.name')}
        </h3>
        <div className="border-t border-card-border my-3" />
        <p className="text-green text-2xl md:text-3xl font-bold mb-1">
          {t('monitoring.price')}
        </p>
        <p className="text-gray text-xs mb-4 italic">
          {t('monitoring.desc')}
        </p>
        <ul className="space-y-2">
          {monitoringFeatures.map((i) => (
            <li key={i} className="text-gray text-sm flex items-start gap-2">
              <span className="text-green mt-0.5">-</span>
              {t(`monitoring.features.${i}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Dogovor link */}
      <div className="fade-in text-center">
        <a
          href={`/${locale}/dogovor`}
          className="btn-glitch inline-block border-2 border-green text-green px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
        >
          {td('link')} →
        </a>
      </div>
    </section>
  );
}
