'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Sparkles, Rocket } from 'lucide-react';

export default function ThreePillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Target,
      title: t('suite.pillars.personalization'),
      description: t('suite.pillars.personalization.desc'),
      color: '#D42027',
    },
    {
      icon: Sparkles,
      title: t('suite.pillars.engagement'),
      description: t('suite.pillars.engagement.desc'),
      color: '#2E86DE',
    },
    {
      icon: Rocket,
      title: t('suite.pillars.productivity'),
      description: t('suite.pillars.productivity.desc'),
      color: '#E8912D',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-wide uppercase px-4 py-2 bg-[#D42027]/10 text-[#D42027] rounded-full">
              {t('suite.pillars.badge')}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
            {t('suite.pillars.title')}
          </h2>
          <p className="text-xl text-[#4A4A5A] max-w-3xl mx-auto">
            {t('suite.pillars.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: pillar.color }} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#4A4A5A] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
