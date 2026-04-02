'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function OurStory() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-8">
          {t('about.story.title')}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-[48%]">
            <div className="space-y-6 text-[#4A4A5A] leading-relaxed">
              <p className="text-lg">
                {t('about.story.text1')}
              </p>

              <p className="text-2xl font-bold text-[#D42027] my-8">
                {t('about.story.belief')}
              </p>

              <p className="text-lg">
                {t('about.story.text2')}
              </p>

              <p className="text-lg">
                {t('about.story.text3')}
              </p>

              <p className="text-lg">
                {t('about.story.text4')}
              </p>
            </div>
          </div>

          <div className="lg:w-[52%] flex flex-col">
            <div className="flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Team.png"
                  alt="IDEO Team"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center mt-3 text-sm text-[#6B6B6B] italic">
                {t('about.story.caption')}
              </p>
            </div>

            <div className="relative mt-10">
              <Image
                src="/Fichier_21@2x.png"
                alt="IDEO Timeline 2006-2026"
                width={900}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
