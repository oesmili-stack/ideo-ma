'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />

      <section className="relative h-[40vh] overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2A] to-[#3A3A38]" />
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/Fichier_5@2x.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center pt-24">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border border-white/30">
                  {t('privacy.badge')}
                </div>
              </div>
              <h1 className="h1-hero-internal-white">
                {t('privacy.title')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              {t('privacy.last_updated')}
            </p>

            <p className="text-[17px] text-[#555] leading-[1.8] mb-8">
              {t('privacy.intro')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.section1.title')}
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.8] mb-6">
              {t('privacy.section1.content')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.section2.title')}
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.8] mb-6">
              {t('privacy.section2.content')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.section3.title')}
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.8] mb-6">
              {t('privacy.section3.content')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.section4.title')}
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.8] mb-6">
              {t('privacy.section4.content')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.section5.title')}
            </h2>
            <p className="text-[17px] text-[#555] leading-[1.8] mb-6">
              {t('privacy.section5.content')}
            </p>

            <h2 className="text-[28px] font-bold text-[#1A1A2E] mt-12 mb-4">
              {t('privacy.contact.title')}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 text-[16px] text-[#555] leading-[1.8]">
              <p className="mb-2">
                <strong>IDEO Factory</strong>
              </p>
              <p className="mb-2">
                {t('privacy.contact.address')}
              </p>
              <p className="mb-2">
                {t('privacy.contact.email')} <a href="mailto:contactma@ideolearning.com" className="text-[#D42027] hover:underline">contactma@ideolearning.com</a>
              </p>
              <p>
                {t('privacy.contact.phone')} <a href="tel:+212522275168" className="text-[#D42027] hover:underline">+212 5 22 27 51 68</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
