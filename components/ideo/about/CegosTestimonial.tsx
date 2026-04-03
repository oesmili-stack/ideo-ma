'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function CegosTestimonial() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-[#D42027] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* LEFT COLUMN - Image 40% */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/CEGOSbisbis.png"
                alt="Cegos Learning Collection 2025"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Content 60% */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('about.cegos.title')}
            </h2>
            <p className="text-lg mb-8 text-white/90">
              {t('about.cegos.subtitle')}
            </p>

            <div className="relative mb-8">
              <Quote className="w-16 h-16 text-white/30 absolute -top-4 -left-2" />
              <blockquote className="text-lg leading-relaxed pl-10 italic">
                {t('about.cegos.quote')}
              </blockquote>
            </div>

            <div className="mb-6">
              <p className="font-bold text-xl mb-1">
                {t('about.cegos.attribution.name')}
              </p>
              <p className="text-white/90">
                {t('about.cegos.attribution.title')}
              </p>
            </div>

            {/* Logos side by side */}
            <div className="flex items-center gap-8">
              <div className="relative w-32 h-16">
                <Image
                  src="/LogoCEGOS.png"
                  alt="CEGOS"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative w-32 h-16">
                <Image
                  src="/Fichier_7@2x.png"
                  alt="IDEO"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
