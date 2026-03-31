'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export function Process() {
  const t = useTranslations('process');
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const steps = [0, 1, 2, 3, 4];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setActiveStep(steps[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [visible]);

  const steps = [0, 1, 2, 3, 4];
  const statusColors = ['text-green', 'text-green', 'text-red', 'text-green', 'text-green-dim'];

  return (
    <section ref={sectionRef} className="relative py-24 px-6 max-w-4xl mx-auto z-10">
      <div className="mb-16 reveal">
        <span className="text-dark-gray text-xs tracking-widest uppercase">
          {'// attack methodology'}
        </span>
        <h2 className="text-green text-2xl md:text-3xl font-bold mt-2 glow">
          <span className="text-dark-gray">$</span> {t('title')}
        </h2>
      </div>

      {/* Terminal window */}
      <div className="bg-card-bg border border-card-border overflow-hidden reveal">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-card-border bg-[#0f0f0f]">
          <span className="w-3 h-3 rounded-full bg-red opacity-80" />
          <span className="w-3 h-3 rounded-full bg-[#ffcc00] opacity-80" />
          <span className="w-3 h-3 rounded-full bg-green opacity-80" />
          <span className="text-dark-gray text-xs ml-4">1cyber@pentest ~ </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 space-y-4 font-mono text-sm">
          {steps.map((i) => (
            <div
              key={i}
              className={`flex items-start gap-3 transition-all duration-500 ${
                activeStep >= i
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              }`}
            >
              <span className="text-green shrink-0">
                {activeStep > i ? '✓' : activeStep === i ? '►' : '$'}
              </span>
              <code className={`${statusColors[i]} font-bold whitespace-nowrap`}>
                {t(`steps.${i}.cmd`)}
              </code>
              <span className="text-dark-gray hidden md:inline shrink-0">→</span>
              <span className="text-gray text-xs md:text-sm opacity-80">
                {t(`steps.${i}.desc`)}
              </span>
            </div>
          ))}

          {/* Blinking cursor at bottom */}
          {activeStep >= 4 && (
            <div className="flex items-center gap-2 mt-4 text-green opacity-60">
              <span>$</span>
              <span className="cursor-blink" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
