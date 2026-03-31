'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = ['ru', 'kz', 'en'] as const;

export function LangSwitcher() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  }

  return (
    <nav className="fixed top-0 right-0 z-50 flex gap-0.5 p-4">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] transition-all cursor-pointer ${
            l === locale
              ? 'text-green border border-green bg-green/5 shadow-[0_0_10px_rgba(0,255,65,0.1)]'
              : 'text-dark-gray border border-transparent hover:text-green hover:border-card-border'
          }`}
        >
          {t(l)}
        </button>
      ))}
    </nav>
  );
}
