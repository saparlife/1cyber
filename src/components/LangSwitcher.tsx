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
    <nav className="fixed top-0 right-0 z-50 flex gap-1 p-4">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`px-3 py-1 text-xs font-bold tracking-wider transition-colors cursor-pointer ${
            l === locale
              ? 'text-green border border-green'
              : 'text-dark-gray border border-transparent hover:text-green'
          }`}
        >
          {t(l)}
        </button>
      ))}
    </nav>
  );
}
