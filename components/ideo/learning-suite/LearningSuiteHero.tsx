'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function LearningSuiteHero() {
  const { t } = useLanguage();

  // Get the title and ensure ! stays on the same line
  const heroTitle = t('suite.hero.title');
  const formattedTitle = heroTitle.replace(/ !/, '\u00A0!').replace(/ \!/, '\u00A0!');

  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-32 overflow-visible bg-[#EDEDEE]">
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="mb-6">
              <Image
                src="/Logo_IDEO_Learning_Swite_B@2x-8.png"
                alt="IDEO Learning Suite"
                width={400}
                height={80}
                className="h-[60px] sm:h-[75px] w-auto object-contain"
              />
            </div>

            <h1 className="text-[34px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {formattedTitle}
            </h1>

            <p className="section-subtitle mb-8">
              {t('suite.hero.subtitle')}
            </p>

            <Link href="/contact">
              <button className="bg-[#D42027] hover:bg-[#b81b21] text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition-colors">
                {t('suite.hero.cta')}
              </button>
            </Link>
          </div>

          <div className="relative flex items-center justify-center overflow-visible">
            <Image
              src="/Image_Hero_IDEO_Learning_Suite_-_V2.png"
              alt="IDEO Learning Suite"
              width={1000}
              height={750}
              className="w-full max-w-[550px] h-auto drop-shadow-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
