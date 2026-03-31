import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative z-10 py-12 px-6 border-t border-card-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-dark-gray text-xs tracking-widest">
          <span className="text-green-dim">1cyber</span>.one
        </div>
        <div className="text-dark-gray text-xs text-center">
          {t('location')}
        </div>
        <div className="text-dark-gray text-xs">
          &copy; {new Date().getFullYear()} <span className="text-green-dark">// all rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
