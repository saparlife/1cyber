'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

function AnimatedPrice({ price, active }: { price: string; active: boolean }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!active) return;

    const chars = '₸0123456789 ';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        price
          .split('')
          .map((char, i) => {
            if (i < iteration) return price[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += 0.5;
      if (iteration > price.length) {
        setDisplayed(price);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [active, price]);

  return <>{displayed || price}</>;
}

export function Pricing() {
  const t = useTranslations('pricing');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6 max-w-5xl mx-auto z-10">
      <div className="mb-16 reveal">
        <span className="text-dark-gray text-xs tracking-widest uppercase">
          {'// service packages'}
        </span>
        <h2 className="text-green text-2xl md:text-3xl font-bold mt-2 glow">
          <span className="text-dark-gray">$</span> {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pentest */}
        <div
          className={`group relative bg-card-bg border border-red p-6 transition-all duration-700 overflow-hidden ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-red opacity-0 group-hover:opacity-[0.03] transition-opacity" />
          <div className="scan-line opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center justify-between mb-1">
            <h3 className="text-red text-base font-bold tracking-[0.2em]">
              {t('pentest.name')}
            </h3>
            <span className="text-[10px] text-red opacity-60 border border-red px-2 py-0.5">RECOMMENDED</span>
          </div>
          <div className="border-t border-card-border my-4" />
          <p className="text-red text-2xl md:text-3xl font-bold mb-6">
            <AnimatedPrice price={t('pentest.price')} active={visible} />
          </p>
          <ul className="space-y-2.5">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="text-gray text-xs flex items-start gap-3">
                <span className="text-red mt-0.5 shrink-0">{'>'}</span>
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {t(`pentest.features.${i}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Monitoring */}
        <div
          className={`group relative bg-card-bg border border-green-dim p-6 transition-all duration-700 delay-200 overflow-hidden ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-green opacity-0 group-hover:opacity-[0.03] transition-opacity" />
          <div className="scan-line opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center justify-between mb-1">
            <h3 className="text-green text-base font-bold tracking-[0.2em]">
              {t('monitoring.name')}
            </h3>
            <span className="text-[10px] text-green-dim opacity-60 border border-green-dim px-2 py-0.5">MONTHLY</span>
          </div>
          <div className="border-t border-card-border my-4" />
          <p className="text-green text-2xl md:text-3xl font-bold mb-6">
            <AnimatedPrice price={t('monitoring.price')} active={visible} />
          </p>
          <ul className="space-y-2.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i} className="text-gray text-xs flex items-start gap-3">
                <span className="text-green-dim mt-0.5 shrink-0">{'>'}</span>
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {t(`monitoring.features.${i}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
