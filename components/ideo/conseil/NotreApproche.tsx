'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Target, PenTool, Rocket, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { key: 'step1', icon: Target },
  { key: 'step2', icon: PenTool },
  { key: 'step3', icon: Rocket },
  { key: 'step4', icon: Users },
  { key: 'step5', icon: GraduationCap },
];

export default function NotreApproche() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="badge-surtitre">
              {t('conseil.approche.badge')}
            </span>
          </div>
          <h2 className="h2-section mb-4">
            {t('conseil.approche.title')}
          </h2>
          <p className="text-[18px] text-[#555] leading-[1.7] max-w-3xl mx-auto">
            {t('conseil.approche.subtitle')}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Horizontal line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#e5e5e5]" />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="relative flex flex-col items-center">
                  {/* Circle with icon */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#D42027] bg-white flex items-center justify-center mb-4 relative z-10">
                    <Icon className="w-6 h-6 text-[#D42027]" />
                  </div>

                  {/* Step number */}
                  <div className="text-[13px] text-[#999] mb-2">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[16px] text-[#1a1a1a] mb-3 text-center">
                    {t(`conseil.approche.${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#555] text-center max-w-[200px] leading-[1.6]">
                    {t(`conseil.approche.${step.key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e5e5e5]" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="relative flex gap-6">
                  {/* Circle with icon */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#D42027] bg-white flex items-center justify-center shrink-0 relative z-10">
                    <Icon className="w-6 h-6 text-[#D42027]" />
                  </div>

                  <div className="flex-1 pt-1">
                    {/* Step number */}
                    <div className="text-[13px] text-[#999] mb-1">
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-[16px] text-[#1a1a1a] mb-3">
                      {t(`conseil.approche.${step.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#555] leading-[1.6]">
                      {t(`conseil.approche.${step.key}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Image */}
        <div className="mt-16">
          <Image
            src="/TimelineConseil.png"
            alt="Timeline Conseil"
            width={1200}
            height={400}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
