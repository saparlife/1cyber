'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Client 1', logo: '/clients/client-1.svg' },
  { name: 'Client 2', logo: '/clients/client-2.svg' },
  { name: 'Client 3', logo: '/clients/client-3.svg' },
  { name: 'Client 4', logo: '/clients/client-4.svg' },
];

export function Clients() {
  const t = useTranslations('clients');
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
          {'// trusted by'}
        </span>
        <h2 className="text-green text-2xl md:text-3xl font-bold mt-2 glow">
          <span className="text-dark-gray">$</span> {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client, i) => (
          <div
            key={i}
            className={`group relative bg-card-bg border border-card-border p-8 flex items-center justify-center transition-all duration-700 hover:border-green-dim ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={48}
              className="opacity-40 group-hover:opacity-80 transition-all duration-300 brightness-0 invert"
            />
            {/* Hover glow */}
            <div className="absolute inset-0 bg-green opacity-0 group-hover:opacity-[0.02] transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
