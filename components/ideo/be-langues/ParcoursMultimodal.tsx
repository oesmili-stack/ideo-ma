'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CircleCheck as CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function ParcoursMultimodal() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(27,107,125,0.08)] text-[#1B6B7D] text-sm font-bold rounded-full mb-4">
            {t('be.pathway.badge')}
          </div>
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('be.pathway.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-4xl mx-auto">
            {t('be.pathway.subtitle')}
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-bold text-[#1B6B7D] uppercase mb-2">
                {t('be.pathway.step1.label')}
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                {t('be.pathway.step1.title')}
              </h3>
              <p className="text-base text-[#4A4A5A] mb-6 leading-relaxed">
                {t('be.pathway.step1.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step1.bullet1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step1.bullet2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step1.bullet3')}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Be_Etape1_Placement.png"
                alt="Test de placement Speexx"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <Image
                src="/Be_Etape2_Classe.png"
                alt="Classe virtuelle"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm font-bold text-[#1B6B7D] uppercase mb-2">
                {t('be.pathway.step2.label')}
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                {t('be.pathway.step2.title')}
              </h3>
              <p className="text-base text-[#4A4A5A] mb-6 leading-relaxed">
                {t('be.pathway.step2.desc')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step2.bullet1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step2.bullet2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step2.bullet3')}
                  </span>
                </li>
              </ul>
              <div className="bg-[#1B6B7D] text-white rounded-lg p-4 text-sm">
                {t('be.pathway.step2.callout')}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-bold text-[#1B6B7D] uppercase mb-2">
                {t('be.pathway.step3.label')}
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                {t('be.pathway.step3.title')}
              </h3>
              <p className="text-base text-[#4A4A5A] mb-6 leading-relaxed">
                {t('be.pathway.step3.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step3.bullet1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step3.bullet2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step3.bullet3')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#EDF5F7] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#1B6B7D]" />
                  </div>
                  <span className="text-sm text-[#4A4A5A]">
                    {t('be.pathway.step3.bullet4')}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Be_Etape3_Reporting.png"
                alt="Tableau de bord RH - Reporting"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
