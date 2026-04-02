'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Minus } from 'lucide-react';

export default function QuatreFormules() {
  const { t } = useLanguage();

  const features = [
    t('be.plans.feature1'),
    t('be.plans.feature2'),
    t('be.plans.feature3'),
    t('be.plans.feature4'),
    t('be.plans.feature5'),
    t('be.plans.feature6'),
    t('be.plans.feature7'),
  ];

  const plans = [
    {
      name: t('be.plans.one.name'),
      stars: '★',
      desc: t('be.plans.one.desc'),
      enabled: [true, true, true, true, true, false, false],
    },
    {
      name: t('be.plans.class.name'),
      stars: '★★',
      desc: t('be.plans.class.desc'),
      enabled: [true, true, true, true, true, true, false],
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[rgba(27,107,125,0.08)] text-[#1B6B7D] text-sm font-bold rounded-full mb-4">
            {t('be.plans.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('be.plans.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('be.plans.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5EA] rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2" style={{ color: '#D4A528' }}>
                {plan.stars}
              </div>
              <h3 className="text-xl font-black text-[#1A1A2E] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#4A4A5A] mb-6">{plan.desc}</p>
              <div className="border-t border-[#E5E5EA] pt-6">
                <ul className="space-y-3 text-left">
                  {features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-xs">
                      {plan.enabled[fidx] ? (
                        <div className="w-5 h-5 rounded-full bg-[#E3F5E9] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#22C55E]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                          <Minus className="w-3 h-3 text-[#9CA3AF]" />
                        </div>
                      )}
                      <span
                        className={
                          plan.enabled[fidx]
                            ? 'text-[#1A1A2E]'
                            : 'text-[#9CA3AF]'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="bg-white border-2 border-[#1B6B7D] rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-lg transition-all relative">
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
              <div className="bg-[#1B6B7D] text-white text-[10px] font-semibold px-4 py-1 rounded-full uppercase">
                {t('be.plans.coach.tag')}
              </div>
            </div>
            <div className="text-2xl mb-2" style={{ color: '#D4A528' }}>
              ★★★
            </div>
            <h3 className="text-xl font-black text-[#1B6B7D] mb-2">
              {t('be.plans.coach.name')}
            </h3>
            <p className="text-sm text-[#4A4A5A] mb-6">
              {t('be.plans.coach.desc')}
            </p>
            <div className="border-t border-[#E5E5EA] pt-6">
              <ul className="space-y-3 text-left">
                {features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-xs">
                    <div className="w-5 h-5 rounded-full bg-[#E3F5E9] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#22C55E]" />
                    </div>
                    <span className="text-[#1A1A2E]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="border border-[#E8D5A8] rounded-xl p-7 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
            style={{
              background: 'linear-gradient(160deg, #FEFCF7, #FFF9EE)',
            }}
          >
            <div className="text-2xl mb-2" style={{ color: '#D4A528' }}>
              ✦
            </div>
            <h3 className="text-xl font-black text-[#1A1A2E] mb-2">
              {t('be.plans.yourself.name')}
            </h3>
            <p className="text-sm text-[#4A4A5A] mb-6">
              {t('be.plans.yourself.desc')}
            </p>
            <div className="border-t border-[#E8D5A8] pt-6">
              <p className="text-xs text-[#4A4A5A] mb-4 text-left">
                {t('be.plans.yourself.intro')}
              </p>
              <ul className="space-y-2 text-left">
                <li className="text-xs text-[#1A1A2E] flex items-start gap-1">
                  <span style={{ color: '#D4A528' }}>+</span>
                  {t('be.plans.yourself.opt1')}
                </li>
                <li className="text-xs text-[#1A1A2E] flex items-start gap-1">
                  <span style={{ color: '#D4A528' }}>+</span>
                  {t('be.plans.yourself.opt2')}
                </li>
                <li className="text-xs text-[#1A1A2E] flex items-start gap-1">
                  <span style={{ color: '#D4A528' }}>+</span>
                  {t('be.plans.yourself.opt3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
