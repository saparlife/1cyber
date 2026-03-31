import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clients = [
  { name: 'Client 1', logo: '/clients/client-1.svg' },
  { name: 'Client 2', logo: '/clients/client-2.svg' },
  { name: 'Client 3', logo: '/clients/client-3.svg' },
  { name: 'Client 4', logo: '/clients/client-4.svg' },
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
          <div
            key={i}
            className="bg-card-bg border border-card-border p-6 flex items-center justify-center hover:border-green transition-colors"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={48}
              className="opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
