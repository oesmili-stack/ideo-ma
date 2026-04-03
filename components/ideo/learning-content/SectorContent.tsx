'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SectorContent() {
  const { t } = useLanguage();

  const sectors = [
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop',
      title: t('content.sector1.title'),
      description: t('content.sector1.desc'),
      tags: ['Sensibilisation SSI', 'Protection des données', 'Conformité CNDP', 'Phishing'],
    },
    {
      image: '/Casa_finance_city_6.jpg',
      title: t('content.sector2.title'),
      description: t('content.sector2.desc'),
      tags: ['Compliance bancaire locale', 'Lutte anti-blanchiment', 'KYC'],
    },
    {
      image: '/Hotellerie_&_Tourisme.jpeg',
      title: t('content.sector3.title'),
      description: t('content.sector3.desc'),
      tags: ['Accueil', 'Restauration', 'Housekeeping', 'Hygiène alimentaire', 'Gestion hôtelière'],
    },
    {
      image: '/Agriculture_&_Environnement.jpeg',
      title: t('content.sector4.title'),
      description: t('content.sector4.desc'),
      tags: ['Réchauffement climatique', 'Transition écologique', 'Pratiques agricoles', 'Gestion de l\'eau'],
    },
    {
      image: '/Administration_publique.jpeg',
      title: t('content.sector5.title'),
      description: t('content.sector5.desc'),
      tags: ['Langue administrative', 'Dématérialisation', 'Accueil des usagers', 'Procédures publiques'],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="badge-surtitre">
              {t('content.sector.badge')}
            </span>
          </div>
          <h2 className="h2-section text-center">
            {t('content.sector.title')}
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            {t('content.sector.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {sectors.slice(0, 3).map((sector, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
              >
                <div className="relative h-[170px] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/15"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1A1A2E] mb-2 text-base">{sector.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#FEF0F0] text-[#991B1B] rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sectors.slice(3, 5).map((sector, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
              >
                <div className="relative h-[170px] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/15"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1A1A2E] mb-2 text-base">{sector.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#FEF0F0] text-[#991B1B] rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
