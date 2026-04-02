'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ContactHero() {
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
                {t('contact.hero.badge')}
              </span>
            </div>

            <h1 className="h1-hero-internal mb-6">
              {t('contact.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('contact.hero.subtitle')}
            </p>
          </div>

          <div>
            <div className="relative flex items-center justify-center">
              <Image
                src="/IDEO_LOGO.png"
                alt="IDEO Factory Logo"
                width={400}
                height={200}
                className="w-3/5 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
