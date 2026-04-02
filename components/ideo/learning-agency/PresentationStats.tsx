'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function PresentationStats() {
  const { t } = useLanguage();

  const stats = [
    { number: '~150', label: t('agency.presentation.stat1') },
    { number: '5', label: t('agency.presentation.stat2') },
    { number: '20', label: t('agency.presentation.stat3') },
    { number: '3', label: t('agency.presentation.stat4') },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge-surtitre">
            {t('agency.presentation.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.presentation.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[65%_35%] gap-8 items-center mb-16">
          <div className="text-[17px] text-[#4A4A5A] leading-[1.7] text-left">
            {t('agency.presentation.text')}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/Studeo_Logo.png"
              alt="STUDEO"
              width={280}
              height={100}
              className="w-[250px] lg:w-[280px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[48px] lg:text-[56px] font-extrabold text-[#D42027] leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[14px] text-[#888] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
