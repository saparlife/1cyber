import { useTranslations } from 'next-intl';
import { Hero } from '@/components/Hero';
import { Findings } from '@/components/Findings';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LangSwitcher } from '@/components/LangSwitcher';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <LangSwitcher />
      <main>
        <Hero />
        <Findings />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
