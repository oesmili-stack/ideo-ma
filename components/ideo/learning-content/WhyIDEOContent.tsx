'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, MapPin, CircleCheck as CheckCircle, RefreshCw, Smartphone, Zap } from 'lucide-react';

export default function WhyIDEOContent() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Globe,
      color: 'bg-blue-100 text-blue-600',
      title: t('content.why1.title'),
      description: t('content.why1.desc'),
    },
    {
      icon: MapPin,
      color: 'bg-red-100 text-red-600',
      title: t('content.why2.title'),
      description: t('content.why2.desc'),
    },
    {
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600',
      title: t('content.why3.title'),
      description: t('content.why3.desc'),
    },
    {
      icon: RefreshCw,
      color: 'bg-purple-100 text-purple-600',
      title: t('content.why4.title'),
      description: t('content.why4.desc'),
    },
    {
      icon: Smartphone,
      color: 'bg-amber-100 text-amber-600',
      title: t('content.why5.title'),
      description: t('content.why5.desc'),
    },
    {
      icon: Zap,
      color: 'bg-orange-100 text-orange-600',
      title: t('content.why6.title'),
      description: t('content.why6.desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <span className="badge-surtitre">
            {t('content.why.badge')}
          </span>
        </div>
        <h2 className="h2-section text-center mb-12">
          {t('content.why.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg ${advantage.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
