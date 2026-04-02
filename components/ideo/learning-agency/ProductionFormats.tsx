'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ProductionFormats() {
  const { t } = useLanguage();

  const formats = [
    {
      title: t('agency.formats.format1.title'),
      description: t('agency.formats.format1.desc'),
      image: '/Module-elearning.png',
      imagePosition: 'right',
    },
    {
      title: t('agency.formats.format2.title'),
      description: t('agency.formats.format2.desc'),
      image: '/Mooc_Specifique-2.png',
      imagePosition: 'left',
    },
    {
      title: t('agency.formats.format3.title'),
      description: t('agency.formats.format3.desc'),
      image: '/image copy copy copy copy copy.png',
      imagePosition: 'right',
    },
    {
      title: t('agency.formats.format4.title'),
      description: t('agency.formats.format4.desc'),
      image: '/Emission_debat-2.JPG',
      imagePosition: 'left',
    },
    {
      title: t('agency.formats.format5.title'),
      description: t('agency.formats.format5.desc'),
      image: '/image copy copy copy copy copy copy copy copy.png',
      imagePosition: 'right',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="badge-surtitre">
            {t('agency.formats.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.formats.title')}
          </h2>
        </div>

        <div className="space-y-20">
          {formats.map((format, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                format.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {format.imagePosition === 'right' ? (
                <>
                  <div className="space-y-4">
                    <h3 className="text-[28px] font-bold text-[#1A1A2E] leading-[1.2]">
                      {format.title}
                    </h3>
                    <p className="text-[17px] text-[#4A4A5A] leading-[1.7]">
                      {format.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={format.image}
                      alt={format.title}
                      className="w-full h-auto object-contain rounded-xl shadow-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center order-2 lg:order-1">
                    <img
                      src={format.image}
                      alt={format.title}
                      className="w-full h-auto object-contain rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 order-1 lg:order-2">
                    <h3 className="text-[28px] font-bold text-[#1A1A2E] leading-[1.2]">
                      {format.title}
                    </h3>
                    <p className="text-[17px] text-[#4A4A5A] leading-[1.7]">
                      {format.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
