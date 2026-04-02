'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Users, UserCheck, Headset, Camera, ChartBar as BarChart3 } from 'lucide-react';
import Image from 'next/image';

export default function SafetyDays() {
  const { t } = useLanguage();

  const infoPills = [
    { icon: MapPin, text: t('hse.safetydays.info1') },
    { icon: Clock, text: t('hse.safetydays.info2') },
    { icon: Users, text: t('hse.safetydays.info3') },
  ];

  const themes = [
    t('hse.safetydays.theme1'),
    t('hse.safetydays.theme2'),
    t('hse.safetydays.theme3'),
    t('hse.safetydays.theme4'),
    t('hse.safetydays.theme5'),
    t('hse.safetydays.theme6'),
    t('hse.safetydays.theme7'),
  ];

  const included = [
    { icon: UserCheck, text: t('hse.safetydays.included1') },
    { icon: Headset, text: t('hse.safetydays.included2') },
    { icon: Camera, text: t('hse.safetydays.included3') },
    { icon: BarChart3, text: t('hse.safetydays.included4') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mb-6">
              {t('hse.safetydays.title')}
            </h2>
            <p className="text-lg text-[#4A4A5A] mb-8 leading-relaxed">
              {t('hse.safetydays.description')}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {infoPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#D4A017]"
                >
                  <pill.icon className="w-4 h-4 text-[#D4A017]" />
                  <span className="text-sm font-medium text-[#1A1A2E]">
                    {pill.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">
                {t('hse.safetydays.theme1').includes('Risques') ? 'Thématiques disponibles :' : 'Available themes:'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white rounded-lg border-l-4 border-[#D4A017] text-sm text-[#1A1A2E]"
                  >
                    {theme}
                  </div>
                ))}
              </div>
            </div>

            {/* Included items in a grouped card */}
            <div className="bg-[#F9F9F9] rounded-xl p-6 mb-8">
              <h3 className="text-[15px] font-bold text-[#1A1A2E] mb-4">
                {t('hse.safetydays.included1').includes('Expert') ? 'Compris dans la prestation' : 'Included in the service'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <item.icon className="w-5 h-5 text-[#D4A017] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#1A1A2E]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#FFF8E1] border-l-4 border-[#D4A017] rounded-lg">
              <p className="text-sm text-[#1A1A2E] leading-relaxed italic">
                {t('hse.safetydays.callout')}
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/ImmersiveImage.jpg"
              alt="VR Safety Training"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
