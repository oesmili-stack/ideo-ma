'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { X, Check } from 'lucide-react';
import Image from 'next/image';

export default function ConstatPromesse() {
  const { t } = useLanguage();

  const barriers = [
    t('be.constat.barriers.item1'),
    t('be.constat.barriers.item2'),
    t('be.constat.barriers.item3'),
    t('be.constat.barriers.item4'),
    t('be.constat.barriers.item5'),
  ];

  const answers = [
    t('be.constat.answer.item1'),
    t('be.constat.answer.item2'),
    t('be.constat.answer.item3'),
    t('be.constat.answer.item4'),
    t('be.constat.answer.item5'),
  ];

  const stats = [
    { number: '5', label: t('be.constat.stat1') },
    { number: 'A1→C2', label: t('be.constat.stat2') },
    { number: '4', label: t('be.constat.stat3') },
    { number: '24/7', label: t('be.constat.stat4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[rgba(27,107,125,0.08)] text-[#1B6B7D] text-sm font-bold rounded-full mb-4">
            {t('be.constat.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('be.constat.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('be.constat.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#FFF8F8] border border-[#FFE5E5] rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#D42027] text-white flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#D42027] uppercase">
                {t('be.constat.barriers.title')}
              </h3>
            </div>
            <ul className="space-y-3">
              {barriers.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D42027] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#EDF5F7] border border-[#D0E8ED] rounded-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1B6B7D] text-white flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B6B7D] uppercase">
                {t('be.constat.answer.title')}
              </h3>
            </div>
            <ul className="space-y-3">
              {answers.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B6B7D] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E5EA] pt-[52px]">
          <div className="flex flex-wrap justify-center" style={{ gap: '72px' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[48px] font-black text-[#D42027] mb-1 leading-none">
                  {stat.number}
                </div>
                <div className="text-[15px] text-[#6B6B7B] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Image
              src="/LogoBebyideo.png"
              alt="Be! by IDEO"
              width={300}
              height={100}
              className="w-auto h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
