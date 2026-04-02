'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function OurStudios() {
  const { t } = useLanguage();

  const studios = [
    {
      image: '/Studio3.jpg',
      label: t('agency.studios.label1'),
    },
    {
      image: '/Studio2.jpg',
      label: t('agency.studios.label2'),
    },
    {
      image: '/Studio1.jpg',
      label: t('agency.studios.label3'),
    },
    {
      image: '/Studio4.png',
      label: t('agency.studios.label4'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge-surtitre">
            {t('agency.studios.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.studios.title')}
          </h2>
          <p className="text-[17px] text-[#4A4A5A] leading-[1.7] max-w-4xl mx-auto">
            {t('agency.studios.text')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {studios.map((studio, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={studio.image}
                alt={studio.label}
                width={800}
                height={450}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-[18px]">{studio.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
