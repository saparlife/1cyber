import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const td = useTranslations('dogovor');
  const locale = useLocale();

  return (
    <footer className="py-10 px-6 text-center border-t border-card-border">
      <p className="text-dark-gray text-sm">
        1cyber.one
      </p>
      <p className="text-dark-gray text-sm">
        {t('location')}
      </p>
      <p className="text-dark-gray text-sm mt-2">
        <a href={`/${locale}/dogovor`} className="text-green hover:underline text-xs">
          {td('link')}
        </a>
      </p>
      <p className="text-dark-gray text-sm mt-2">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
