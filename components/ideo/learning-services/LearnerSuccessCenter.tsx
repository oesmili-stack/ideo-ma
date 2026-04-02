'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';

const cards = [
  { key: 'card1', icon: Heart },
  { key: 'card2', icon: GraduationCap },
  { key: 'card3', icon: Users },
];

export default function LearnerSuccessCenter() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      {/* Part A - The Learner Success Center */}
      <div className="py-12 sm:py-20 bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Surtitre */}
          <div className="text-center mb-3">
            <span className="badge-surtitre">
              LEARNING SERVICE 05
            </span>
          </div>

          {/* Title */}
          <h2 className="h2-section text-center">
            {t('ils.lsc.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-[#4A4A5A] text-center leading-[1.7] mb-6 max-w-3xl mx-auto">
            {t('ils.lsc.subtitle')}
          </p>

          {/* Stat */}
          <div className="text-center mb-16">
            <span className="text-[42px] font-bold text-[#D42027]">+50 000</span>
            <span className="text-[14px] text-[#888888] ml-3">{t('ils.lsc.stat')}</span>
          </div>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D42027]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[16px] text-[#1A1A1A] mb-4">
                    {t(`ils.lsc.${card.key}.title`)}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D42027] mt-2 shrink-0" />
                        <span className="text-[14px] text-[#555555] leading-[1.5]">
                          {t(`ils.lsc.${card.key}.bullet${i}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Part B - Powered by IDEO Tutoring */}
      <div className="py-10 sm:py-16 bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <div>
              {/* Surtitre */}
              <span className="badge-surtitre">
                {t('ils.tutoring.badge')}
              </span>

              {/* Title */}
              <h3 className="text-[26px] lg:text-[28px] font-bold text-[#1A1A1A] mb-2">
                {t('ils.tutoring.title')}
              </h3>

              {/* Red Subtitle */}
              <div className="text-[16px] font-semibold text-[#D42027] mb-4">
                {t('ils.tutoring.subtitle')}
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#555555] leading-[1.7] mb-6">
                {t('ils.tutoring.description')}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#D42027] font-bold mt-0.5">—</span>
                    <span className="text-[15px] text-[#555555] leading-[1.7]">
                      {t(`ils.tutoring.bullet${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Right */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/IDEO_Tutoring_Mockup-2.png"
                alt="IDEO Tutoring"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
