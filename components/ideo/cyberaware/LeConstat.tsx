'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ShieldCheck, Scale, Star, RefreshCcw } from 'lucide-react';

export default function LeConstat() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: ShieldCheck,
      title: t('cyber.constat.card1.title'),
      desc: t('cyber.constat.card1.desc'),
    },
    {
      icon: Scale,
      title: t('cyber.constat.card2.title'),
      desc: t('cyber.constat.card2.desc'),
    },
    {
      icon: Star,
      title: t('cyber.constat.card3.title'),
      desc: t('cyber.constat.card3.desc'),
    },
    {
      icon: RefreshCcw,
      title: t('cyber.constat.card4.title'),
      desc: t('cyber.constat.card4.desc'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="mb-8">
              <div className="text-6xl font-extrabold text-[#D42027] mb-2">
                80 %
              </div>
              <div className="text-sm text-[#888780]">
                {t('cyber.constat.stat')}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">
              {t('cyber.constat.title')}
            </h2>

            <p className="text-lg text-[#4A4A5A] mb-6 leading-relaxed">
              {t('cyber.constat.text1')}
            </p>

            <p className="text-lg font-semibold text-[#1A1A2E] leading-relaxed">
              {t('cyber.constat.text2')}
            </p>
          </div>

          <div className="relative h-full min-h-[400px]">
            <Image
              src="/cyberawareimage3.png"
              alt="Cybersecurity"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all min-h-[140px]"
            >
              <card.icon className="w-9 h-9 text-[#4FA8D1] mb-4" />
              <h3 className="text-[15px] font-bold text-[#1A1A2E] mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] text-[#888780] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
