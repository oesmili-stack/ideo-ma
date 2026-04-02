'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function BeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-[#EDEDEE]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Fichier_104@2x.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Image
                src="/LogoBebyideo.png"
                alt="Be! by IDEO"
                width={300}
                height={100}
                className="w-auto h-24"
              />
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('be.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('be.hero.subtitle')}
            </p>

            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D42027] text-white font-semibold rounded-lg hover:bg-[#b81b21] transition-colors">
              {t('be.hero.cta')}
            </Link>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/Be_Hero_Speexx_Mockup.png"
              alt="Be! Langues Platform"
              width={900}
              height={750}
              className="w-full h-auto max-w-3xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
