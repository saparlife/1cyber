import { useTranslations } from 'next-intl';

export function StructuredData() {
  const t = useTranslations('meta');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '1CYBER',
    url: 'https://1cyber.one',
    description: t('description'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Almaty',
      addressCountry: 'KZ',
    },
    areaServed: 'KZ',
    serviceType: [
      'Penetration Testing',
      'Security Audit',
      'Vulnerability Assessment',
      'Security Monitoring',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
