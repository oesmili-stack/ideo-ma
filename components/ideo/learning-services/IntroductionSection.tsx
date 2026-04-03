'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function IntroductionSection() {
  const { t } = useLanguage();

  const stats = [
    { number: '5', label: t('ils.intro.stat1') },
    { number: '+50 000', label: t('ils.intro.stat2') },
    { number: '3', label: t('ils.intro.stat3') },
    { number: t('ils.intro.stat4.number'), label: t('ils.intro.stat4.label') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Surtitre */}
        <div className="text-center mb-3">
          <span className="text-[#D42027] font-bold text-[13px] tracking-[1.5px] uppercase">
            {t('ils.intro.badge')}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-6">
          {t('ils.intro.title')}
        </h2>

        {/* Description */}
        <p className="text-xl text-[#4A4A5A] text-center leading-[1.7] mb-12 max-w-3xl mx-auto">
          {t('ils.intro.description')}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#E5E7EB]" />
              )}
              <div className="text-[44px] font-extrabold text-[#D42027] mb-2 whitespace-nowrap">
                {stat.number}
              </div>
              <div className="text-[15px] text-[#666666] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
