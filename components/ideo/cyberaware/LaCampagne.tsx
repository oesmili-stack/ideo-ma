'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Eye, Sparkles, Handshake } from 'lucide-react';

export default function LaCampagne() {
  const { t } = useLanguage();

  const eventItems = [
    t('cyber.campaign.event.item1'),
    t('cyber.campaign.event.item2'),
    t('cyber.campaign.event.item3'),
    t('cyber.campaign.event.item4'),
    t('cyber.campaign.event.item5'),
  ];

  const benefits = [
    { icon: Eye, text: t('cyber.campaign.benefit1') },
    { icon: Sparkles, text: t('cyber.campaign.benefit2') },
    { icon: Handshake, text: t('cyber.campaign.benefit3') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('cyber.campaign.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-3xl mx-auto mb-6">
            {t('cyber.campaign.subtitle')}
          </p>
          <p className="text-base text-[#4A4A5A] max-w-4xl mx-auto leading-relaxed mb-8">
            {t('cyber.campaign.text')}
          </p>
          <div className="flex justify-center">
            <Image
              src="/Je_suis_CyberAware.png"
              alt="Je suis Cyber Aware"
              width={450}
              height={112}
              className="w-auto h-auto max-h-20"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-6 border border-[#E5E7EB]">
            <h3 className="text-base font-bold text-[#1A1A2E] mb-4">
              {t('cyber.campaign.event.title')}
            </h3>
            <ul className="space-y-3">
              {eventItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#4FA8D1] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#4A4A5A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative h-48 mb-4">
              <Image
                src="/Cyberawareimage2.png"
                alt="CyberAware Campaign"
                width={600}
                height={200}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-2 md:p-3 border border-[#E5E7EB] text-center"
                >
                  <benefit.icon className="w-5 h-5 text-[#4FA8D1] mx-auto mb-2" />
                  <p className="text-[10px] md:text-xs text-[#1A1A2E] font-medium leading-tight">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
