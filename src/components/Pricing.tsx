import { useTranslations, useLocale } from 'next-intl';

const TIER_COLORS = ['text-gray', 'text-yellow', 'text-orange', 'text-red'];
const TIER_BORDERS = ['border-gray', 'border-yellow', 'border-orange', 'border-red'];

export function Pricing() {
  const t = useTranslations('pricing');
  const td = useTranslations('dogovor');
  const locale = useLocale();

  const tiers = [0, 1, 2, 3];
  const planAPoints = [0, 1, 2, 3, 4, 5];
  const planBPoints = [0, 1, 2, 3, 4, 5];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-4 fade-in">
        {'> '}{t('title')}
      </h2>

      <p className="text-dark-gray text-sm mb-12 fade-in">
        {t('currency_note')}
      </p>

      {/* Two plans side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Plan A: Pay Per Finding */}
        <div className="fade-in bg-card-bg border-2 border-red p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-red text-lg font-bold tracking-wider">
              {t('planA.name')}
            </h3>
            <span className="text-xs border border-red text-red px-2 py-0.5 uppercase tracking-wider">
              {t('planA.badge')}
            </span>
          </div>
          <div className="border-t border-card-border my-3" />
          <p className="text-gray text-sm leading-relaxed mb-5">
            {t('planA.desc')}
          </p>
          <ul className="space-y-2 flex-1">
            {planAPoints.map((i) => (
              <li key={i} className="text-gray text-sm flex items-start gap-2">
                <span className="text-red mt-0.5 shrink-0">-</span>
                {t(`planA.points.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan B: Annual Subscription */}
        <div className="fade-in bg-card-bg border-2 border-green p-6 flex flex-col relative">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-green text-lg font-bold tracking-wider">
              {t('planB.name')}
            </h3>
            <span className="text-xs border border-green text-green px-2 py-0.5 uppercase tracking-wider">
              {t('planB.badge')}
            </span>
          </div>
          <div className="border-t border-card-border my-3" />
          <p className="text-green text-2xl md:text-3xl font-bold mb-1">
            {t('planB.price')}
          </p>
          <p className="text-dark-gray text-xs mb-4 italic">
            {t('planB.contract')}
          </p>
          <p className="text-gray text-sm leading-relaxed mb-5">
            {t('planB.desc')}
          </p>
          <ul className="space-y-2 flex-1">
            {planBPoints.map((i) => (
              <li key={i} className="text-gray text-sm flex items-start gap-2">
                <span className="text-green mt-0.5 shrink-0">-</span>
                {t(`planB.points.${i}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Comparison helper */}
      <div className="fade-in bg-card-bg border border-card-border p-5 mb-8">
        <h4 className="text-green text-sm font-bold mb-3 tracking-wider uppercase">
          {'> '}{t('comparison.title')}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <span className="text-red shrink-0 font-bold">A</span>
            <span className="text-gray text-sm">{t('comparison.payPerFinding')}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green shrink-0 font-bold">B</span>
            <span className="text-gray text-sm">{t('comparison.subscription')}</span>
          </div>
        </div>
      </div>

      {/* Severity tiers */}
      <div className="fade-in mb-8">
        <h4 className="text-green text-sm font-bold mb-1 tracking-wider uppercase">
          {'> '}{t('tiers.title')}
        </h4>
        <p className="text-dark-gray text-xs mb-4">
          {t('tiers.subtitle')}
        </p>
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
