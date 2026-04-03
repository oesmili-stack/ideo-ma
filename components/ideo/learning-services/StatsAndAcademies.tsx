'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const academyLogos = [
  { name: 'CDG', logo: '/ref-S2-02-cdg.png' },
  { name: 'Royal Air Maroc', logo: '/ref-S1-01-royal-air-maroc.png' },
  { name: 'ONDA', logo: '/ref-S1-02-onda.jpg' },
  { name: 'Tanger Med', logo: '/ref-S1-03-tanger-med.png' },
  { name: 'RMA Assurance', logo: '/ref-S2-09-rma-assurance.png' },
  { name: 'SAHAM Bank', logo: '/ref-S2-03-saham-bank.png' },
  { name: 'MAMDA MCMA', logo: '/ref-S2-11-mamda-mcma.png' },
  { name: 'Al Amana', logo: '/ref-S2-13-al-amana.png' },
  { name: 'Attawfiq', logo: '/ref-S2-14-attawfiq.png' },
  { name: 'Ministère de l\'Agriculture', logo: '/ref-S3-01-min-agriculture.jpg' },
  { name: 'Ministère de l\'Économie', logo: '/ref-S3-02-min-economie.jpg' },
  { name: 'Ministère du Tourisme', logo: '/ref-S3-03-min-tourisme.jpg' },
  { name: 'Ministère de l\'Industrie', logo: '/ref-S3-04-min-industrie.webp' },
  { name: 'Ministère de la Justice', logo: '/ref-S3-05-min-justice.jpg' },
  { name: 'DGCT', logo: '/ref-S3-09-dgct.jpg' },
  { name: 'ANAPEC', logo: '/ref-S3-11-anapec.png' },
  { name: 'Poste Maroc', logo: '/ref-S6-02-poste-maroc.png' },
  { name: 'HCP', logo: '/ref-S3-14-hcp.jpg' },
  { name: 'TAQA Morocco', logo: '/ref-S4-01-taqa.png' },
  { name: 'Masen', logo: '/ref-S4-02-masen.jpg' },
  { name: 'ONEE', logo: '/ref-S4-03-onee.jpg' },
  { name: 'SRM Casa-Settat', logo: '/ref-S4-05-srm-casa-settat.png' },
  { name: 'Richbond', logo: '/ref-S4-07-richbond.png' },
  { name: 'Afric-Phar', logo: '/ref-S7-01-afric-phar.jpg' },
  { name: 'Akdital', logo: '/ref-S7-02-akdital.png' },
];

export default function StatsAndAcademies() {
  const { t } = useLanguage();

  const stats = [
    { number: '+50 000', label: t('ils.stats.stat1') },
    { number: '+100 000', label: t('ils.stats.stat2') },
    { number: '~50', label: t('ils.stats.stat3') },
    { number: '20 ans', label: t('ils.stats.stat4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Part A - Stats Banner */}
        <div className="bg-[#D42027] rounded-xl md:rounded-2xl py-8 px-5 md:p-12 lg:p-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[18px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                  {stat.number}
                </div>
                <div className="text-[11px] md:text-[14px] text-white opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B - Academy Logos */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-[#FEE2E2] text-[#D42027] text-[13px] font-semibold rounded-full mb-6">
            {t('ils.academies.badge')}
          </div>

          {/* Title */}
          <h2 className="h2-section">
            {t('ils.academies.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-[#4A4A5A] italic mb-12 max-w-3xl mx-auto">
            {t('ils.academies.subtitle')}
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {academyLogos.map((academy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-20 mb-2">
                  <Image
                    src={academy.logo}
                    alt={academy.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#888] text-center leading-tight">
                  {academy.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
