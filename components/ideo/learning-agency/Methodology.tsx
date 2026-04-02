'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('agency.methodology.step1.title'),
      description: t('agency.methodology.step1.desc'),
    },
    {
      number: '2',
      title: t('agency.methodology.step2.title'),
      description: t('agency.methodology.step2.desc'),
    },
    {
      number: '3',
      title: t('agency.methodology.step3.title'),
      description: t('agency.methodology.step3.desc'),
    },
    {
      number: '4',
      title: t('agency.methodology.step4.title'),
      description: t('agency.methodology.step4.desc'),
    },
    {
      number: '5',
      title: t('agency.methodology.step5.title'),
      description: t('agency.methodology.step5.desc'),
    },
    {
      number: '6',
      title: t('agency.methodology.step6.title'),
      description: t('agency.methodology.step6.desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="badge-surtitre">
            {t('agency.methodology.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.methodology.title')}
          </h2>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-[50px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#D42027] via-[#E8912D] to-[#D42027]"></div>

            <div className="grid grid-cols-6 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-[100px] h-[100px] mx-auto rounded-full bg-[#D42027] flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-white text-[32px] font-bold">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2 text-[15px]">{step.title}</h3>
                  <p className="text-[13px] text-[#4A4A5A] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] rounded-full bg-[#D42027] flex items-center justify-center shadow-lg">
                  <span className="text-white text-[24px] font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1A1A2E] mb-2 text-[16px]">{step.title}</h3>
                <p className="text-[14px] text-[#4A4A5A] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
