'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { UserCheck, Zap, LayoutGrid, ChartBar as BarChart3, TrendingUp, GitMerge } from 'lucide-react';

const benefits = [
  { key: 'card1', icon: UserCheck },
  { key: 'card2', icon: Zap },
  { key: 'card3', icon: LayoutGrid },
  { key: 'card4', icon: BarChart3 },
  { key: 'card5', icon: TrendingUp },
  { key: 'card6', icon: GitMerge },
];

export default function CeQueVousGagnez() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="badge-surtitre">
              {t('conseil.benefices.badge')}
            </span>
          </div>
          <h2 className="h2-section mb-4">
            {t('conseil.benefices.title')}
          </h2>
          <p className="text-[18px] text-[#555] leading-[1.7] max-w-3xl mx-auto">
            {t('conseil.benefices.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="bg-white rounded-xl p-8 min-h-[180px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#D42027]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[18px] text-[#1a1a1a] mb-3">
                  {t(`conseil.benefices.${benefit.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#555] leading-[1.6]">
                  {t(`conseil.benefices.${benefit.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
