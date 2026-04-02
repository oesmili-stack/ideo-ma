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

export default function PreuveSociale() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats Banner */}
        <div className="bg-[#D42027] rounded-xl md:rounded-2xl py-8 px-5 md:p-12 lg:p-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-[22px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                {t('conseil.preuve.stat1')}
              </div>
              <div className="text-[11px] md:text-[14px] text-white opacity-90">
                {t('conseil.preuve.stat1.label')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-[22px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                {t('conseil.preuve.stat2')}
              </div>
              <div className="text-[11px] md:text-[14px] text-white opacity-90">
                {t('conseil.preuve.stat2.label')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-[22px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                {t('conseil.preuve.stat3')}
              </div>
              <div className="text-[11px] md:text-[14px] text-white opacity-90">
                {t('conseil.preuve.stat3.label')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-[22px] md:text-[42px] font-bold text-white mb-1 md:mb-2 whitespace-nowrap">
                {t('conseil.preuve.stat4')}
              </div>
              <div className="text-[11px] md:text-[14px] text-white opacity-90">
                {t('conseil.preuve.stat4.label')}
              </div>
            </div>
          </div>
        </div>

        {/* Academy Logos Section */}
        <div className="text-center">
          <div className="mb-6">
            <span className="badge-surtitre">
              {t('conseil.preuve.badge') || 'ILS NOUS FONT CONFIANCE'}
            </span>
          </div>

          <h2 className="h2-section mb-4">
            {t('conseil.preuve.title')}
          </h2>

          <p className="section-subtitle italic mb-10 max-w-3xl mx-auto">
            {t('conseil.preuve.subtitle')}
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
