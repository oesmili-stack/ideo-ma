'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function LearningAgencyHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#EDEDEE]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Fichier_104@2x.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="badge-surtitre">
                {t('agency.hero.badge')}
              </span>
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('agency.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('agency.hero.subtitle')}
            </p>

            <Link href="/contact">
              <button className="bg-[#D42027] hover:bg-[#b81b21] text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition-colors">
                {t('agency.hero.cta')}
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="relative rounded-[32px] bg-gradient-to-br from-gray-500 to-gray-700 p-3 shadow-2xl"
              style={{
                transform: 'perspective(1000px) rotateY(-2deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/image copy copy copy copy copy copy copy.png"
                  alt="Smart Learning Academy Studio"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
