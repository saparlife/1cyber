import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-10 px-6 text-center border-t border-card-border">
      <p className="text-dark-gray text-sm">
        1cyber.one
      </p>
      <p className="text-dark-gray text-sm">
        {t('location')}
      </p>
      <p className="text-dark-gray text-sm">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
