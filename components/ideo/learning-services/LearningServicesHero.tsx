'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function LearningServicesHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] bg-[#EDEDEE] overflow-hidden">
      {/* Background pattern - fades in from right */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'url(/Fichier_104@2x.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="max-w-xl">
            {/* Surtitre */}
            <div className="inline-block mb-4">
              <span className="badge-surtitre">
                LEARNING SERVICES
              </span>
            </div>

            {/* Title */}
            <h1 className="h1-hero-internal mb-6">
              {t('ils.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="section-subtitle mb-8">
              {t('ils.hero.subtitle')}
            </p>

            {/* CTA Button */}
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D42027] text-white font-semibold rounded-lg hover:bg-[#b81b21] transition-colors">
              {t('ils.hero.cta')}
            </Link>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative">
            <div className="relative w-full h-[300px] sm:h-[480px]">
              <Image
                src="/Fichier_31@2x-8.png"
                alt="Learning Services"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
