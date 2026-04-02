'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FinalCTAProps {
  variant?: 'default' | 'hse';
}

export default function FinalCTA({ variant = 'default' }: FinalCTAProps) {
  const { t } = useLanguage();

  const titleKey = variant === 'hse' ? 'hse.cta.title' : 'cta.title';
  const subtitleKey = variant === 'hse' ? 'hse.cta.subtitle' : 'cta.subtitle';
  const buttonKey = variant === 'hse' ? 'hse.cta.button' : 'cta.button';
  const contactKey = variant === 'hse' ? 'hse.cta.link' : 'cta.contact';

  return (
    <section className="relative overflow-hidden h-auto md:h-[300px]">
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
      <div className="relative z-20 h-full flex items-center py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-6 w-full">
          <div className="md:ml-[400px] lg:ml-[480px] text-center md:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              {t(titleKey)}
            </h2>
            <p className="text-base lg:text-lg text-white/90 mb-6 max-w-xl mx-auto md:mx-0">
              {t(subtitleKey)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
              <Link href="/contact">
                <button className="bg-white text-[#D42027] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  {t(buttonKey)}
                </button>
              </Link>
              <Link
                href="/contact"
                className="text-white underline hover:no-underline transition-all flex items-center gap-2"
              >
                {t(contactKey)}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
