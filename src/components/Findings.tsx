'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

function DecodeText({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState(text);
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEF';

  useEffect(() => {
    if (!active) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += 1;
      if (iteration > text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [active, text]);

  return <>{displayed}</>;
}

export function Findings() {
  const t = useTranslations('findings');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = [0, 1, 2, 3, 4, 5];
  const severities = ['CRITICAL', 'HIGH', 'CRITICAL', 'HIGH', 'MEDIUM', 'CRITICAL'];
  const severityColors: Record<string, string> = {
    CRITICAL: 'text-red',
    HIGH: 'text-[#ff6600]',
    MEDIUM: 'text-[#ffcc00]',
  };

  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <div className="mb-16 reveal">
        <span className="text-dark-gray text-xs tracking-widest uppercase">
          {'// vulnerability scanner results'}
        </span>
        <h2 className="text-green text-2xl md:text-3xl font-bold mt-2 glow">
          <span className="text-dark-gray">$</span> {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            data-index={i}
            className={`group relative bg-card-bg border border-card-border p-5 transition-all duration-500 overflow-hidden ${
              visibleCards.has(i)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Scan line on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="scan-line" />
            </div>

            {/* Severity badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold tracking-widest ${severityColors[severities[i]]}`}>
                [{severities[i]}]
              </span>
              <span className="text-dark-gray text-[10px]">CVE-2024-{String(1000 + i)}</span>
            </div>

            {/* Left accent border */}
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${
              severities[i] === 'CRITICAL' ? 'bg-red' : severities[i] === 'HIGH' ? 'bg-[#ff6600]' : 'bg-[#ffcc00]'
            }`} />

            <h3 className="text-green text-sm font-bold mb-2 group-hover:glow transition-all">
              <DecodeText text={t(`items.${i}.name`)} active={visibleCards.has(i)} />
            </h3>
            <p className="text-dark-gray text-xs leading-relaxed group-hover:text-gray transition-colors">
              {t(`items.${i}.desc`)}
            </p>

            {/* Bottom data line */}
            <div className="mt-3 pt-2 border-t border-card-border flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              <span className="text-dark-gray text-[10px]">status: exploitable</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
