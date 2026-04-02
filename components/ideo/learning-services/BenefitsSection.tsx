'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, TrendingUp, ChartBar as BarChart3, UserCheck, Zap, RefreshCw } from 'lucide-react';

const benefits = [
  { key: 'card1', icon: ShieldCheck },
  { key: 'card2', icon: TrendingUp },
  { key: 'card3', icon: BarChart3 },
  { key: 'card4', icon: UserCheck },
  { key: 'card5', icon: Zap },
  { key: 'card6', icon: RefreshCw },
];

export default function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Surtitre */}
        <div className="text-center mb-3">
          <span className="badge-surtitre">
            {t('ils.benefits.badge')}
          </span>
        </div>

        {/* Title */}
        <h2 className="h2-section text-center">
          {t('ils.benefits.title')}
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-[#4A4A5A] text-center leading-[1.7] mb-16 max-w-3xl mx-auto">
          {t('ils.benefits.subtitle')}
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="bg-white rounded-xl p-9 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Icon */}
                <Icon className="w-8 h-8 text-[#D42027] mb-4" />

                {/* Title */}
                <h3 className="font-bold text-[18px] text-[#1A1A1A] mb-2.5">
                  {t(`ils.benefits.${benefit.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#555555] leading-[1.7]">
                  {t(`ils.benefits.${benefit.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
