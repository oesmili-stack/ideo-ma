'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function HSEHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden bg-[#EDEDEE]">
      {/* Background with gradient mask - pattern only on right side */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#EDEDEE]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/Fichier_104@2x-8.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {/* Logo badge instead of text badge */}
            <div className="mb-6 pt-16 sm:pt-0">
              <Image
                src="/LogoHSELearning.png"
                alt="HSE Learning"
                width={400}
                height={80}
                className="h-[50px] sm:h-[75px] w-auto object-contain"
              />
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('hse.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('hse.hero.subtitle')}
            </p>

            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D42027] text-white font-semibold rounded-lg hover:bg-[#b81b21] transition-colors">
              {t('hse.hero.cta')}
            </Link>
          </div>

          {/* VR woman image with blend mode */}
          <div className="relative flex items-center justify-center h-[350px] sm:h-[500px]">
            <Image
              src="/Image_realite_virtuelle.png"
              alt="Virtual Reality Training"
              width={600}
              height={600}
              className="w-auto h-[90%] object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
