import { Hero } from '@/components/Hero';
import { Findings } from '@/components/Findings';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LangSwitcher } from '@/components/LangSwitcher';
import { MatrixRain } from '@/components/MatrixRain';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StructuredData } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <MatrixRain />
      <LangSwitcher />
      <main>
        <Hero />
        <Findings />
        <Process />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
