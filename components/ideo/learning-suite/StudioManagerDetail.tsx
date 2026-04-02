'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { CircleCheck as CheckCircle2, Sparkles } from 'lucide-react';

export default function StudioManagerDetail() {
  const { t } = useLanguage();

  const aiFeatures = [
    t('suite.studio.point1'),
    t('suite.studio.point2'),
    t('suite.studio.point3'),
    t('suite.studio.point4'),
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-wide uppercase text-[#E8912D] mb-2 block">
              {t('suite.studio.label')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
              {t('suite.studio.title')}
            </h2>
            <p className="text-lg text-[#4A4A5A] mb-8 leading-relaxed">
              {t('suite.studio.intro')}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                {t('suite.studio.feature1.title')}
              </h3>
              <p className="text-[#4A4A5A] mb-6">
                {t('suite.studio.feature1.desc')}
              </p>

              <div className="flex items-start gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-[#E8912D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                    {t('suite.studio.feature2.title')}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8912D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4A5A]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#E8912D] to-[#D97F1C] text-white p-6 rounded-xl shadow-lg">
              <p className="text-lg font-bold">
                {t('suite.studio.callout')}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/IDEO_StudioManager_Mockup-2.png"
                alt="IDEO Studio Manager"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
