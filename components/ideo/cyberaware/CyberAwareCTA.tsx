'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CyberAwareCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden h-[300px] bg-[#D42027]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Fichier_105@2x-8.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Woman Image - Positioned at bottom left */}
      <div className="absolute bottom-0 left-0 lg:left-12 z-10 h-full hidden md:block">
        <Image
          src="/FemmeOrdi.png"
          alt="Woman with laptop"
          width={400}
          height={400}
          className="h-full w-auto object-contain object-bottom"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      {/* Text and CTAs - Right side, vertically centered */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="md:ml-[400px] lg:ml-[480px] text-center md:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              {t('cyber.cta.title')}
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-6 max-w-xl mx-auto md:mx-0">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
              <Link href="/contact" className="bg-white text-[#D42027] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                {t('cta.button')}
              </Link>
              <Link
                href="/contact"
                className="text-white underline hover:no-underline transition-all flex items-center gap-2"
              >
                {t('cta.contact')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
