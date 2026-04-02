'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ClipboardCheck, TrendingUp, Layers, RefreshCw, Route } from 'lucide-react';
import Image from 'next/image';

const cards = [
  { key: 'card1', icon: ClipboardCheck },
  { key: 'card2', icon: TrendingUp },
  { key: 'card3', icon: Layers },
  { key: 'card4', icon: RefreshCw },
  { key: 'card5', icon: Route },
];

export default function DomainesIntervention() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-[#f7f7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="badge-surtitre">
              {t('conseil.domaines.badge')}
            </span>
          </div>
          <h2 className="h2-section mb-4">
            {t('conseil.domaines.title')}
          </h2>
          <p className="text-[18px] text-[#555] leading-[1.7] max-w-3xl mx-auto">
            {t('conseil.domaines.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#D42027]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[18px] text-[#1a1a1a] mb-2">
                  {t(`conseil.domaines.${card.key}.title`)}
                </h3>

                {/* Red subtitle */}
                <div className="font-semibold text-[15px] text-[#D42027] mb-3">
                  {t(`conseil.domaines.${card.key}.subtitle`)}
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#555] leading-[1.6]">
                  {t(`conseil.domaines.${card.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Second row - centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.slice(3).map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#D42027]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[18px] text-[#1a1a1a] mb-2">
                  {t(`conseil.domaines.${card.key}.title`)}
                </h3>

                {/* Red subtitle */}
                <div className="font-semibold text-[15px] text-[#D42027] mb-3">
                  {t(`conseil.domaines.${card.key}.subtitle`)}
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#555] leading-[1.6]">
                  {t(`conseil.domaines.${card.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
