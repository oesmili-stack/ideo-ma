'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function LearningContentHero() {
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
            <div className="mb-6">
              <Image
                src="/LogoIdeoLearningContent.png"
                alt="IDEO Learning Content"
                width={300}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('content.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('content.hero.subtitle')}
            </p>

            <Link href="/contact">
              <button className="bg-[#D42027] hover:bg-[#b81b21] text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition-colors">
                {t('content.hero.cta')}
              </button>
            </Link>
          </div>

          <div>
            <div className="relative flex items-center justify-center">
              <Image
                src="/Visuel_Hero_2.png"
                alt="IDEO Learning Content - Cegos Competencies"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
