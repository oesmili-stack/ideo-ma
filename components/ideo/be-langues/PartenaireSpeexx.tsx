'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function PartenaireSpeexx() {
  const { t } = useLanguage();

  const languages = [
    { flag: '🇬🇧', name: t('be.speexx.english') },
    { flag: '🇪🇸', name: t('be.speexx.spanish') },
    { flag: '🇫🇷', name: t('be.speexx.french') },
    { flag: '🇩🇪', name: t('be.speexx.german') },
    { flag: '🇮🇹', name: t('be.speexx.italian') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[rgba(27,107,125,0.08)] text-[#1B6B7D] text-sm font-bold rounded-full mb-4">
            {t('be.speexx.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('be.speexx.title')}
          </h2>
        </div>

        <div className="bg-[#F5F5F5] border border-[#E5E5EA] rounded-xl p-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <div className="text-center">
              <Image
                src="/LogoSpeexx.png"
                alt="Speexx"
                width={200}
                height={60}
                className="w-auto h-12 mx-auto mb-4"
              />
              <div className="text-xs text-[#6B6B7B] mb-8">
                {t('be.speexx.subtitle')}
              </div>
              <div className="flex justify-center gap-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#E5E5EA] flex items-center justify-center text-xl">
                      {lang.flag}
                    </div>
                    <div className="text-[10px] text-[#6B6B7B]">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                {t('be.speexx.content.title')}
              </h3>
              <p className="text-base text-[#4A4A5A] mb-4 leading-relaxed">
                {t('be.speexx.content.p1')}
              </p>
              <p className="text-base text-[#4A4A5A] leading-relaxed">
                {t('be.speexx.content.p2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
