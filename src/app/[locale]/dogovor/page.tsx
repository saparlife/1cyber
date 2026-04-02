import { Dogovor } from '@/components/Dogovor';
import { LangSwitcher } from '@/components/LangSwitcher';
import { ScrollAnimator } from '@/components/ScrollAnimator';

export default function DogovorPage() {
  return (
    <>
      <LangSwitcher />
      <main>
        <Dogovor />
      </main>
      <ScrollAnimator />
    </>
  );
}
