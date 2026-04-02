'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function PartnerSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[30%_70%] gap-12 items-center">
          {/* Logo in card frame */}
          <div className="flex items-center justify-center">
            <div className="w-full bg-white border border-[#E0E0E0] rounded-xl p-8 flex items-center justify-center">
              <Image
                src="/logoImmersive.png"
                alt="Immersive Factory"
                width={300}
                height={100}
                className="w-full h-auto max-h-[100px] object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">
              {t('hse.partner.title')}
            </h2>
            <p className="text-lg text-[#555] mb-6 leading-relaxed">
              {t('hse.partner.text1')}
            </p>
            <p className="text-lg text-[#555] leading-relaxed">
              {t('hse.partner.text2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
