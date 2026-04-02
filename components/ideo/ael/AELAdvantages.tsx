'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Rocket, TrendingUp, Heart, GraduationCap, ArrowRightLeft } from 'lucide-react';

export default function AELAdvantages() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Trophy,
      title: t('ael.advantages.card1.title'),
      description: t('ael.advantages.card1.description'),
    },
    {
      icon: Rocket,
      title: t('ael.advantages.card2.title'),
      description: t('ael.advantages.card2.description'),
    },
    {
      icon: TrendingUp,
      title: t('ael.advantages.card3.title'),
      description: t('ael.advantages.card3.description'),
    },
    {
      icon: Heart,
      title: t('ael.advantages.card4.title'),
      description: t('ael.advantages.card4.description'),
    },
    {
      icon: GraduationCap,
      title: t('ael.advantages.card5.title'),
      description: t('ael.advantages.card5.description'),
    },
    {
      icon: ArrowRightLeft,
      title: t('ael.advantages.card6.title'),
      description: t('ael.advantages.card6.description'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-xs lg:text-sm font-bold tracking-[2px] uppercase px-4 py-2 bg-[#D42027] text-white shadow-md inline-block" style={{ borderRadius: '20px' }}>
            {t('ael.advantages.badge')}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-16">
          {t('ael.advantages.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-[#D42027] mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
