'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function PresentationStats() {
  const { t } = useLanguage();

  const stats = [
    { value: '+500', label: t('content.stat1') },
    { value: '50+', label: t('content.stat2') },
    { value: '5', label: t('content.stat3') },
    { value: '4', label: t('content.stat4') },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-[40px] lg:text-[44px] font-bold text-[#1A1A2E] mb-12 text-center leading-[1.15]">
          {t('content.presentation.title')}
        </h2>

        <div className="grid lg:grid-cols-[65%_35%] gap-6 items-center mb-16">
          <div>
            <p className="text-[17px] text-[#666] leading-[1.6] text-left">
              {t('content.presentation.text')}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/LogoIdeoLearningContent.png"
              alt="IDEO Learning Content"
              width={270}
              height={108}
              className="w-auto h-auto object-contain"
              style={{ maxWidth: '270px' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl py-8 px-6 text-center"
            >
              <div className="text-[52px] font-bold text-[#D42027] mb-2 leading-none" style={{ fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-[15px] text-[#666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
