'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const blocks = [
  {
    key: 'block1',
    layout: 'text-left',
    background: '#F7F7F8',
    image: '/Conseil_Hero.png',
    imageType: 'local'
  },
  {
    key: 'block2',
    layout: 'image-left',
    background: 'white',
    image: '/MoocIDEO.png',
    imageType: 'local'
  },
  {
    key: 'block3',
    layout: 'text-left',
    background: '#F7F7F8',
    image: '/Affiches_d\'academies-3.png',
    imageType: 'local'
  },
  {
    key: 'block4',
    layout: 'image-left',
    background: 'white',
    image: '/IDEO_Learn_Mockup-2.png',
    imageType: 'local'
  },
];

export default function LearningServicesBlocks() {
  const { t } = useLanguage();

  return (
    <>
      {blocks.map((block) => (
        <section
          key={block.key}
          className="py-12 sm:py-20"
          style={{ backgroundColor: block.background }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              block.layout === 'image-left' ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Text Side */}
              <div className={block.layout === 'image-left' ? 'lg:order-2' : ''}>
                {/* Surtitre */}
                <span className="badge-surtitre">
                  {t(`ils.${block.key}.badge`)}
                </span>

                {/* Title */}
                <h3 className="text-[26px] lg:text-[28px] font-bold text-[#1A1A1A] mb-2">
                  {t(`ils.${block.key}.title`)}
                </h3>

                {/* Red Subtitle */}
                <div className="text-[16px] font-semibold text-[#D42027] mb-4">
                  {t(`ils.${block.key}.subtitle`)}
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#555555] leading-[1.7] mb-6">
                  {t(`ils.${block.key}.description`)}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#D42027] font-bold mt-0.5">—</span>
                      <span className="text-[15px] text-[#555555] leading-[1.7]">
                        {t(`ils.${block.key}.bullet${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className={block.layout === 'image-left' ? 'lg:order-1' : ''}>
                {block.key === 'block4' ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
                    <Image
                      src={block.image}
                      alt={t(`ils.${block.key}.title`)}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={block.image}
                      alt={t(`ils.${block.key}.title`)}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
