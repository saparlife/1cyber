'use client';

import { useTranslations } from 'next-intl';
import { GlitchText } from './GlitchText';
import { TypeWriter } from './TypeWriter';
import { useState } from 'react';

export function Hero() {
  const t = useTranslations('hero');
  const [headlineDone, setHeadlineDone] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center z-10">
      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 text-green-dark text-2xl opacity-30 hidden md:block">
        {'['}
      </div>
      <div className="absolute top-8 right-8 text-green-dark text-2xl opacity-30 hidden md:block">
        {']'}
      </div>
      <div className="absolute bottom-8 left-8 text-green-dark text-2xl opacity-30 hidden md:block">
        {'['}
      </div>
      <div className="absolute bottom-8 right-8 text-green-dark text-2xl opacity-30 hidden md:block">
        {']'}
      </div>

      {/* Status line */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-green-dark text-xs tracking-[0.3em] opacity-40 uppercase">
        {'// secure connection established'}
      </div>

      {/* Logo */}
      <div className="mb-10">
        <GlitchText
          text="1CYBER"
          className="text-green text-4xl md:text-6xl font-bold tracking-[0.2em] glow"
        />
      </div>

      {/* Typed headline */}
      <h1 className="text-green text-2xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl leading-tight min-h-[2.5em] md:min-h-[1.5em]">
        <TypeWriter
          text={t('headline')}
          speed={40}
          delay={800}
          onComplete={() => setHeadlineDone(true)}
        />
      </h1>

      {/* Subtitle - appears after typing */}
      <div
        className={`transition-all duration-1000 max-w-2xl mb-12 ${
          headlineDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-gray text-sm md:text-base whitespace-pre-line leading-relaxed">
          {t('sub')}
        </p>
      </div>

      {/* CTA */}
      <div
        className={`transition-all duration-700 delay-300 ${
          headlineDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <a
          href="#contact"
          className="btn-cyber inline-block border border-green text-green px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] relative z-10"
        >
          <span className="relative z-10">{t('cta')}</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          headlineDone ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-green-dim text-xs">
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
