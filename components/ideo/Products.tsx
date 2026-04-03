'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, BookOpen, Camera, Laptop, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: Monitor, label: t('products.tab1') },
    { icon: BookOpen, label: t('products.tab2') },
    { icon: Camera, label: t('products.tab3') },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-2">
            {t('products.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal mb-10">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col md:inline-flex md:flex-row bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] md:p-1.5 w-full md:w-auto">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 sm:gap-3 px-4 md:px-8 py-3 transition-all relative text-sm md:text-base border-b md:border-b-0 border-[#e5e5e5] last:border-b-0 ${
                  activeTab === idx
                    ? 'text-[#D42027] font-semibold border-l-[3px] md:border-l-0 border-[#D42027]'
                    : 'text-[#666] font-medium hover:text-[#1a1a1a]'
                }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                {tab.label}
                {activeTab === idx && (
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[3px] bg-[#D42027] rounded-t-sm" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="transition-opacity duration-300 px-4 sm:px-0">
          {activeTab === 0 && (
            <div className="grid lg:grid-cols-[40%_58%] gap-12 items-start">
              <div className="space-y-3 max-w-full overflow-wrap-break-word">
                <div className="mb-3">
                  <Image
                    src="/Logo_IDEO_Learning_Swite_B@2x-8.png"
                    alt="IDEO Learning Suite"
                    width={400}
                    height={70}
                    className="h-[50px] sm:h-[65px] w-auto object-contain"
                  />
                </div>
                <p className="text-[#D42027] font-semibold text-[16px] sm:text-[18px] break-words">
                  {t('products.suite.subtitle')}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#555] leading-[1.7] break-words">
                  {t('products.suite.description')}
                </p>

                {/* Sub-products */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-3">
                  <div className="bg-[#F5F5F3] rounded-xl p-4 sm:p-5 text-center border-l-4 border-[#D42027] shadow-sm hover:shadow-md transition-shadow w-full md:flex-1">
                    <div className="flex items-center justify-center mb-2 sm:mb-3 h-[35px] sm:h-[45px]">
                      <Image
                        src="/LogoIDEOLEARN.png"
                        alt="IDEO Learn"
                        width={200}
                        height={45}
                        className="max-h-[35px] sm:max-h-[45px] w-auto object-contain"
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#888780]">
                      {t('products.suite.card1_desc')}
                    </div>
                  </div>
                  <div className="bg-[#F5F5F3] rounded-xl p-4 sm:p-5 text-center border-l-4 border-[#6B7FD7] shadow-sm hover:shadow-md transition-shadow w-full md:flex-1">
                    <div className="flex items-center justify-center mb-2 sm:mb-3 h-[35px] sm:h-[45px]">
                      <Image
                        src="/LogoTutoring.png"
                        alt="IDEO Tutoring"
                        width={200}
                        height={45}
                        className="max-h-[35px] sm:max-h-[45px] w-auto object-contain"
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#888780]">
                      {t('products.suite.card2_desc')}
                    </div>
                  </div>
                  <div className="bg-[#F5F5F3] rounded-xl p-4 sm:p-5 text-center border-l-4 border-[#F5A623] shadow-sm hover:shadow-md transition-shadow w-full md:flex-1">
                    <div className="flex items-center justify-center mb-2 sm:mb-3 h-[35px] sm:h-[45px]">
                      <Image
                        src="/LogoStudioManager copy.png"
                        alt="IDEO Studio Manager"
                        width={200}
                        height={45}
                        className="max-h-[35px] sm:max-h-[45px] w-auto object-contain"
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#888780]">
                      {t('products.suite.card3_desc')}
                    </div>
                  </div>
                </div>

                <div className="pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#D42027] text-white px-6 py-3 sm:py-2.5 rounded-lg font-semibold hover:bg-[#b81b21] transition-colors text-sm min-h-[48px] sm:min-h-0">
                      {t('products.suite.cta')}
                    </button>
                  </Link>
                  <Link href="/products/learning-suite" className="text-[#D42027] font-semibold hover:underline text-sm text-center sm:text-left py-2 sm:py-0">
                    {t('products.suite.link')} →
                  </Link>
                </div>
              </div>

              {/* Platform mockup image */}
              <div className="flex items-center justify-center mt-2 sm:mt-8">
                <Image
                  src="/MockupBis.png"
                  alt="IDEO Learning Suite Platform on Multiple Devices"
                  width={1400}
                  height={900}
                  className="w-full max-w-full h-auto object-contain"
                />
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid lg:grid-cols-[40%_58%] gap-12 items-start">
              <div className="space-y-3 max-w-full overflow-wrap-break-word">
                <div className="mb-3">
                  <img
                    src="/LogoIdeoLearningContent.png"
                    alt="IDEO Learning Content"
                    style={{
                      maxHeight: '60px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <p className="text-[#D42027] font-semibold text-[16px] sm:text-[18px] break-words">
                  {t('products.content.subtitle')}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#555] leading-[1.7] break-words">
                  {t('products.content.description')}
                </p>

                {/* Partner logos */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 pt-6 items-start max-w-md">
                  <Image
                    src="/LogoCEGOS.png"
                    alt="CEGOS"
                    width={100}
                    height={35}
                    className="h-[35px] w-auto object-contain"
                  />
                  <Image
                    src="/LogoSpeexx.png"
                    alt="Speexx"
                    width={85}
                    height={30}
                    className="h-[30px] w-auto object-contain"
                  />
                  <Image
                    src="/Logo_ENI.png"
                    alt="ENI"
                    width={60}
                    height={35}
                    className="h-[35px] w-auto object-contain"
                  />
                  <Image
                    src="/LogoYouscribe.png"
                    alt="YouScribe"
                    width={90}
                    height={28}
                    className="h-[28px] w-auto object-contain"
                  />
                  <Image
                    src="/logoImmersive.png"
                    alt="Immersive Factory"
                    width={140}
                    height={35}
                    className="h-[35px] w-auto object-contain"
                  />
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#D42027] text-white px-6 py-3 sm:py-2.5 rounded-lg font-semibold hover:bg-[#b81b21] transition-colors text-sm min-h-[48px] sm:min-h-0">
                      {t('products.content.cta')}
                    </button>
                  </Link>
                  <Link href="/products/learning-content" className="text-[#D42027] font-semibold hover:underline text-sm text-center sm:text-left py-2 sm:py-0">
                    {t('products.content.link')} →
                  </Link>
                </div>
              </div>

              {/* Learning Content image */}
              <div className="flex items-center justify-center mt-4 sm:mt-8">
                <Image
                  src="/ImageLearningContent2.png"
                  alt="IDEO Learning Content Competencies"
                  width={500}
                  height={500}
                  className="w-auto h-auto object-contain max-w-[95%]"
                />
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="grid lg:grid-cols-[40%_58%] gap-12 items-start">
              <div className="space-y-3 max-w-full overflow-wrap-break-word">
                <div className="mb-3">
                  <h3 className="text-3xl font-bold text-[#2C2C2A] break-words">
                    {t('products.agency.title')}
                  </h3>
                </div>
                <p className="text-[#D42027] font-semibold text-[16px] sm:text-[18px] break-words">
                  {t('products.agency.subtitle')}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#555] leading-[1.7] break-words">
                  {t('products.agency.description')}
                </p>

                {/* Content types */}
                <div className="flex flex-wrap gap-3 pt-3">
                  {[
                    t('products.agency.item1'),
                    t('products.agency.item2'),
                    t('products.agency.item3'),
                    t('products.agency.item4'),
                    t('products.agency.item5'),
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F5F5F3] rounded-lg px-4 py-2 text-sm font-medium text-[#2C2C2A]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-[#D42027] text-white px-6 py-3 sm:py-2.5 rounded-lg font-semibold hover:bg-[#b81b21] transition-colors text-sm min-h-[48px] sm:min-h-0">
                      {t('products.agency.cta')}
                    </button>
                  </Link>
                  <Link href="/products/learning-agency" className="text-[#D42027] font-semibold hover:underline text-sm text-center sm:text-left py-2 sm:py-0">
                    {t('products.agency.link')} →
                  </Link>
                </div>
              </div>

              {/* Studio production image */}
              <div className="flex items-center justify-center mt-4 sm:mt-8">
                <Image
                  src="/image copy copy.png"
                  alt="IDEO Learning Agency Studio Production"
                  width={900}
                  height={600}
                  className="w-[95%] h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
