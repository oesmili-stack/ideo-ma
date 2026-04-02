'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Partners() {
  const { language, t } = useLanguage();

  const partners = [
    {
      name: 'CEGOS',
      logo: '/LogoCEGOS.png',
      specialty: t('partners.cegos.specialty'),
      description: t('partners.cegos.description'),
    },
    {
      name: 'AGIRH',
      logo: '/Agirh2.png',
      specialty: t('partners.agirh.specialty'),
      description: t('partners.agirh.description'),
    },
    {
      name: 'Speexx',
      logo: '/LogoSpeexx.png',
      specialty: t('partners.speexx.specialty'),
      description: t('partners.speexx.description'),
    },
    {
      name: 'ENI',
      logo: '/Logo_ENI.png',
      specialty: t('partners.eni.specialty'),
      description: t('partners.eni.description'),
    },
    {
      name: 'YouScribe',
      logo: '/LogoYouscribe.png',
      specialty: t('partners.youscribe.specialty'),
      description: t('partners.youscribe.description'),
    },
    {
      name: 'Immersive Factory',
      logo: '/logoImmersive.png',
      specialty: t('partners.immersive.specialty'),
      description: t('partners.immersive.description'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-10">
            {t('partners.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Logo Area */}
              <div className="bg-white h-[100px] flex items-center justify-center px-6">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={45}
                  className="max-h-[45px] max-w-[180px] w-auto object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="inline-block bg-[#D42027] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {partner.specialty}
                </div>

                <p className="text-[#888780] leading-relaxed text-sm">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
