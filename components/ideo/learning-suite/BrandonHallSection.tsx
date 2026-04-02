'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Award } from 'lucide-react';

export default function BrandonHallSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-[#1A1A2E] via-[#2A2A3E] to-[#1A1A2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D42027] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E86DE] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center gap-8">
            <div className="relative">
              <Image
                src="/Brandon1.png"
                alt="Brandon Hall Award 2024"
                width={200}
                height={200}
                className="w-48 h-auto drop-shadow-2xl"
              />
            </div>
            <div className="relative">
              <Image
                src="/Brandon2.png"
                alt="Brandon Hall Silver Badge"
                width={200}
                height={200}
                className="w-48 h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-10 h-10 text-[#FFD700]" />
              <span className="text-sm font-bold tracking-wide uppercase text-[#FFD700]">
                Award Winner
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {t('suite.award.title')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('why.awards.line1')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
