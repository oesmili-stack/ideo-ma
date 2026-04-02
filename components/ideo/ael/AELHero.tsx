'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export default function AELHero() {
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
                src="/Logo-IDEO-AEL.png"
                alt="Logo IDEO Académie d'Entreprise en Ligne"
                width={500}
                height={200}
                className="w-full max-w-[350px] max-[768px]:max-w-[200px] min-[768px]:max-[1024px]:max-w-[280px] min-[768px]:max-[1024px]:mx-auto h-auto"
              />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('ael.hero.title')}
            </h1>

            <p className="section-subtitle mb-8">
              {t('ael.hero.subtitle')}
            </p>

            <Link href="/contact">
              <button className="bg-[#D42027] hover:bg-[#b81b21] text-white px-8 py-4 rounded-lg shadow-lg font-semibold transition-colors">
                {t('ael.hero.cta')}
              </button>
            </Link>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/Affiches_d'academies-4.png"
              alt="Affiches d'académies en ligne"
              width={600}
              height={750}
              className="w-full max-w-[450px] h-auto drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
