'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function AELPresentation() {
  const { t } = useLanguage();

  const stats = [
    { number: t('ael.presentation.stat2.number'), label: t('ael.presentation.stat2.label') },
    { number: t('ael.presentation.stat3.number'), label: t('ael.presentation.stat3.label') },
    { number: t('ael.presentation.stat4.number'), label: t('ael.presentation.stat4.label') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-16">
          {t('ael.presentation.title')}
        </h2>

        <div className="grid lg:grid-cols-[65%_35%] gap-12 items-center">
          <div>
            <p className="text-base text-[#555] leading-relaxed mb-12">
              {t('ael.presentation.description')}
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D42027] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#888] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/Logo-IDEO-AEL.png"
              alt="Logo IDEO Académie d'Entreprise en Ligne"
              width={600}
              height={250}
              className="w-full max-w-[250px] sm:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
