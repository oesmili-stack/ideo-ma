'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SmartLearning() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('hse.smart.step1.title'),
      desc: t('hse.smart.step1.desc'),
    },
    {
      number: '2',
      title: t('hse.smart.step2.title'),
      desc: t('hse.smart.step2.desc'),
    },
    {
      number: '3',
      title: t('hse.smart.step3.title'),
      desc: t('hse.smart.step3.desc'),
    },
    {
      number: '4',
      title: t('hse.smart.step4.title'),
      desc: t('hse.smart.step4.desc'),
    },
    {
      number: '5',
      title: t('hse.smart.step5.title'),
      desc: t('hse.smart.step5.desc'),
    },
    {
      number: '6',
      title: t('hse.smart.step6.title'),
      desc: t('hse.smart.step6.desc'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">
            {t('hse.smart.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto leading-relaxed">
            {t('hse.smart.intro')}
          </p>
        </div>

        <div className="relative mb-12">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#D4A017]" />

          <div className="grid md:grid-cols-6 gap-8 md:gap-4 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4A017] text-white font-bold text-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#1A1A2E] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white border-l-4 border-[#D4A017] rounded-lg shadow-sm">
          <p className="text-[#1A1A2E] leading-relaxed">
            {t('hse.smart.results')}
          </p>
        </div>
      </div>
    </section>
  );
}
