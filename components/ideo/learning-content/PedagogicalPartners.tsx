'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function PedagogicalPartners() {
  const { t } = useLanguage();

  const partners = [
    {
      logo: '/LogoCEGOS.png',
      logoHeight: 40,
      name: t('content.partner1.name'),
      description: t('content.partner1.desc'),
    },
    {
      logo: '/LogoSpeexx.png',
      logoHeight: 35,
      name: t('content.partner2.name'),
      description: t('content.partner2.desc'),
    },
    {
      logo: '/Logo_ENI.png',
      logoHeight: 40,
      name: t('content.partner3.name'),
      description: t('content.partner3.desc'),
    },
    {
      logo: '/logoImmersive.png',
      logoHeight: 40,
      name: t('content.partner4.name'),
      description: t('content.partner4.desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-12 text-center">
          {t('content.partners.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center justify-center mx-auto mb-4 h-[50px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={partner.logoHeight}
                  className="object-contain"
                  style={{ height: `${partner.logoHeight}px`, width: 'auto' }}
                />
              </div>
              <h3 className="font-bold text-[#1A1A2E] mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
