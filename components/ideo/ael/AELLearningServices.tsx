'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Globe, Mail, Headphones, Users } from 'lucide-react';

export default function AELLearningServices() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Compass,
      title: t('ael.services.card1.title'),
      description: t('ael.services.card1.description'),
    },
    {
      icon: Globe,
      title: t('ael.services.card2.title'),
      description: t('ael.services.card2.description'),
    },
    {
      icon: Mail,
      title: t('ael.services.card3.title'),
      description: t('ael.services.card3.description'),
    },
    {
      icon: Headphones,
      title: t('ael.services.card4.title'),
      description: t('ael.services.card4.description'),
    },
    {
      icon: Users,
      title: t('ael.services.card5.title'),
      description: t('ael.services.card5.description'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="text-xs lg:text-sm font-bold tracking-[2px] uppercase px-4 py-2 bg-[#D42027] text-white shadow-md inline-block" style={{ borderRadius: '20px' }}>
            {t('ael.services.badge')}
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] text-center mb-16">
          {t('ael.services.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-[#D42027] mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-[#555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-[#D42027] mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-[#555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
