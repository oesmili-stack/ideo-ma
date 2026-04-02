'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Users, MessageSquare, Calendar } from 'lucide-react';

export default function IdeoTutoringDetail() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('suite.tutoring.feature1.title'),
      description: t('suite.tutoring.feature1.desc'),
    },
    {
      icon: MessageSquare,
      title: t('suite.tutoring.feature2.title'),
      description: t('suite.tutoring.feature2.desc'),
    },
    {
      icon: Calendar,
      title: t('suite.tutoring.feature3.title'),
      description: t('suite.tutoring.feature3.desc'),
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/IDEO_Tutoring_Mockup-2.png"
                alt="IDEO Tutoring CRM"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold tracking-wide uppercase text-[#2E86DE] mb-2 block">
              {t('suite.tutoring.label')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
              {t('suite.tutoring.title')}
            </h2>
            <p className="text-lg text-[#4A4A5A] mb-8 leading-relaxed">
              {t('suite.tutoring.intro')}
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2E86DE]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#2E86DE]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#4A4A5A]">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#2E86DE]/10 border-l-4 border-[#2E86DE] p-6 rounded-r-lg">
              <p className="text-[#1A1A2E] font-semibold">
                {t('suite.tutoring.callout')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
