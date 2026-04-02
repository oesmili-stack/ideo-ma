'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Trophy } from 'lucide-react';

export default function DeuxPiliers() {
  const { t } = useLanguage();

  const flexItems = [
    t('be.pillars.flex.item1'),
    t('be.pillars.flex.item2'),
    t('be.pillars.flex.item3'),
    t('be.pillars.flex.item4'),
  ];

  const effItems = [
    t('be.pillars.eff.item1'),
    t('be.pillars.eff.item2'),
    t('be.pillars.eff.item3'),
    t('be.pillars.eff.item4'),
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[rgba(27,107,125,0.08)] text-[#1B6B7D] text-sm font-bold rounded-full mb-4">
            {t('be.pillars.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('be.pillars.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('be.pillars.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E5E5EA] rounded-xl p-9 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-lg bg-[#EDF5F7] flex items-center justify-center mb-6">
              <Clock className="w-[22px] h-[22px] text-[#1B6B7D]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              {t('be.pillars.flex.title')}
            </h3>
            <p className="text-base text-[#4A4A5A] mb-6 leading-relaxed">
              {t('be.pillars.flex.desc')}
            </p>
            <ul className="space-y-3">
              {flexItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1B6B7D] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#4A4A5A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E5EA] rounded-xl p-9 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-lg bg-[rgba(212,32,39,0.08)] flex items-center justify-center mb-6">
              <Trophy className="w-[22px] h-[22px] text-[#D42027]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              {t('be.pillars.eff.title')}
            </h3>
            <p className="text-base text-[#4A4A5A] mb-6 leading-relaxed">
              {t('be.pillars.eff.desc')}
            </p>
            <ul className="space-y-3">
              {effItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D42027] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#4A4A5A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
