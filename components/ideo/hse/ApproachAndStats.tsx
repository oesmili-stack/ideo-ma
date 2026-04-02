'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Glasses, Shield } from 'lucide-react';
import Image from 'next/image';

export default function ApproachAndStats() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Lightbulb,
      title: t('hse.approach.card1.title'),
      text: t('hse.approach.card1.text'),
    },
    {
      icon: Glasses,
      title: t('hse.approach.card2.title'),
      text: t('hse.approach.card2.text'),
    },
    {
      icon: Shield,
      title: t('hse.approach.card3.title'),
      text: t('hse.approach.card3.text'),
    },
  ];

  const stats = [
    { number: '90%', label: t('hse.approach.stat1') },
    { number: '8', label: t('hse.approach.stat2') },
    { number: '3', label: t('hse.approach.stat3') },
    { number: '1', label: t('hse.approach.stat4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[#D4A017] text-white font-semibold text-sm uppercase tracking-wide rounded-full">
            {t('hse.approach.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">
            {t('hse.approach.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto leading-relaxed">
            {t('hse.approach.intro')}
          </p>
        </div>

        {/* Cards with site-standard styling - no top border */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[rgba(212,160,23,0.1)] flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-[#D4A017]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {card.title}
              </h3>
              <p className="text-[#555] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Logo + Stats section */}
        <div className="flex flex-col items-center gap-12">
          {/* Logo centered and larger */}
          <div className="flex-shrink-0">
            <Image
              src="/LogoHSELearning.png"
              alt="HSE Learning"
              width={300}
              height={85}
              className="h-[85px] w-auto object-contain"
            />
          </div>

          {/* Stats centered below logo */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-[#D42027] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#666] max-w-[140px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
