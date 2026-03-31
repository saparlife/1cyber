import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clients = [
  { name: 'Temir Service', logo: '/clients/temir-service.svg', url: 'https://temir-service.kz/' },
  { name: 'ShopAdili', logo: '/clients/shopadili.jpg', url: 'https://shopadili.com/' },
  { name: 'CPG Media Group', logo: '/clients/cpgmedia.svg', url: 'https://cpgmediagroup.com/' },
  { name: 'Shaqyr', logo: '/clients/shaqyr.png', url: 'https://www.shaqyr.com/' },
];

export function Clients() {
  const t = useTranslations('clients');

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-green text-2xl md:text-3xl font-bold mb-12 fade-in">
        {'> '}{t('title')}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in">
        {clients.map((client, i) => (
          <a
            key={i}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-bg border border-card-border h-24 flex items-center justify-center p-4 hover:border-green transition-colors"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={56}
              className="max-h-12 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity brightness-0 invert"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
