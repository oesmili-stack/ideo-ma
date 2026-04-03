'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ConseilHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#EDEDEE]">
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
            <div className="inline-block mb-6">
              <span className="badge-surtitre">
                {t('conseil.hero.badge')}
              </span>
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('conseil.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('conseil.hero.subtitle')}
            </p>

            <Link href="/contact">
              <button className="bg-[#D42027] hover:bg-[#b81b21] text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition-colors">
                {t('conseil.hero.cta')}
              </button>
            </Link>
          </div>

          <div>
            <div className="relative">
              <Image
                src="/Conseil_Hero.png"
                alt="Strategic e-learning roadmap"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
