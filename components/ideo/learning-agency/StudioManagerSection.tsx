'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function StudioManagerSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="badge-surtitre">
            {t('agency.studioManager.badge')}
          </span>
          <h2 className="h2-section">
            {t('agency.studioManager.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[55%_43%] gap-12 items-center">
          <div className="space-y-4">
            <p className="text-[17px] text-[#4A4A5A] leading-[1.7]">
              {t('agency.studioManager.text')}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/IDEO_StudioManager_Mockup-2.png"
                alt="IDEO Studio Manager"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
