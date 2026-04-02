'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function AELAcademies() {
  const { t } = useLanguage();

  const clients = [
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

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-xs lg:text-sm font-bold tracking-[2px] uppercase px-4 py-2 bg-[#D42027] text-white shadow-md inline-block" style={{ borderRadius: '20px' }}>
            {t('ael.academies.badge')}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-4">
          {t('ael.academies.title')}
        </h2>

        <p className="text-base text-[#555] italic text-center mb-16">
          {t('ael.academies.subtitle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-20 mb-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-[#888] text-center leading-tight">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
