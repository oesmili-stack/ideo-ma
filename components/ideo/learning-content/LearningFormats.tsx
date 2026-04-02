'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, CirclePlay as PlayCircle, Mic, Gamepad2, Glasses } from 'lucide-react';

export default function LearningFormats() {
  const { t } = useLanguage();

  const formats = [
    {
      icon: Monitor,
      name: t('content.format1'),
      duration: '15–30 min',
      description: t('content.format1.desc'),
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: PlayCircle,
      name: t('content.format2'),
      duration: '3–60 min',
      description: t('content.format2.desc'),
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Mic,
      name: t('content.format3'),
      duration: '5–10 min',
      description: t('content.format3.desc'),
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Gamepad2,
      name: t('content.format4'),
      duration: '20 min',
      description: t('content.format4.desc'),
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Glasses,
      name: t('content.format5'),
      duration: t('content.format.immersive'),
      description: t('content.format5.desc'),
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <span className="badge-surtitre">
              {t('content.formats.badge')}
            </span>
          </div>
          <h2 className="h2-section">
            {t('content.formats.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-lg ${format.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1A1A2E] mb-1">{format.name}</h3>
                      <p className="text-sm text-gray-500">{format.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{format.description}</p>
                </div>
              );
            })}
          </div>

          <div className="relative lg:sticky lg:top-8">
            <img
              src="/Visuel_Hero_1.png"
              alt="Module e-learning"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
