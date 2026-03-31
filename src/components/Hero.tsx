import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <span className="text-green text-2xl font-bold tracking-widest">
          {'< '}1CYBER{' />'}
        </span>
      </div>

      <h1 className="text-green text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
        {t('headline')}
        <span className="cursor-blink text-red">_</span>
      </h1>

      <p className="text-gray text-base md:text-lg max-w-2xl mb-10 whitespace-pre-line">
        {t('sub')}
      </p>

      <a
        href="#contact"
        className="btn-glitch border-2 border-green text-green px-8 py-3 text-base font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
      >
        {t('cta')}
      </a>
    </section>
  );
}
