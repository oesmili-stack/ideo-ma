'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CyberAwareHero() {
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
                src="/Fichier_8@2x-8.png"
                alt="CyberAware by IDEO"
                width={400}
                height={80}
                className="h-[60px] sm:h-[75px] w-auto object-contain"
              />
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('cyber.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('cyber.hero.subtitle')}
            </p>

            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D42027] text-white font-semibold rounded-lg hover:bg-[#b81b21] transition-colors">
              {t('cyber.hero.cta')}
            </Link>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/Image_Hero.png"
              alt="CyberAware - Je suis Cyber Aware"
              width={600}
              height={600}
              className="w-full h-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
