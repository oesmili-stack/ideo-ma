'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Landmark, Zap, Truck, Sprout, HeartPulse, Signal, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Sectors() {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Building,
      key: 'banking',
      iconColor: '#9333EA',
      bgColor: '#F3E8FF'
    },
    {
      icon: Landmark,
      key: 'public',
      iconColor: '#F59E0B',
      bgColor: '#FEF3C7'
    },
    {
      icon: Zap,
      key: 'energy',
      iconColor: '#3B82F6',
      bgColor: '#DBEAFE'
    },
    {
      icon: Truck,
      key: 'transport',
      iconColor: '#F97316',
      bgColor: '#FFEDD5'
    },
    {
      icon: Sprout,
      key: 'agriculture',
      iconColor: '#22C55E',
      bgColor: '#DCFCE7'
    },
    {
      icon: HeartPulse,
      key: 'pharma',
      iconColor: '#EC4899',
      bgColor: '#FCE7F3'
    },
    {
      icon: Signal,
      key: 'telecoms',
      iconColor: '#EF4444',
      bgColor: '#FEE2E2'
    },
    {
      icon: Globe,
      key: 'international',
      iconColor: '#14B8A6',
      bgColor: '#CCFBF1'
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#f7f7f8]" id="sectors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-10">
            {t('sectors.title')}
          </h2>
        </div>

        {/* Sectors grid - 4 columns x 2 rows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={sector.key}
                className="bg-white rounded-xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: sector.bgColor }}
                >
                  <IconComponent
                    size={24}
                    strokeWidth={2}
                    style={{ color: sector.iconColor }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2">
                  {t(`sectors.${sector.key}`)}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#666] leading-relaxed">
                  {t(`sectors.${sector.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to references */}
        <div className="text-center mt-8">
          <Link href="/references" className="text-[#D42027] font-semibold hover:underline">
            {t('sectors.view_references')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
