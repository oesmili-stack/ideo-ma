'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ClientCases() {
  const { language, t } = useLanguage();

  const cases = [
    {
      client: 'Groupe CDG',
      image: '/CDG.png',
      sector: language === 'fr' ? 'Finance & investissement public' : 'Finance & Public Investment',
      project: language === 'fr' ? 'e-Académie Groupe CDG' : 'e-Academy Groupe CDG',
      description: language === 'fr'
        ? 'Académie en ligne complète combinant plateforme LMS, catalogues Soft Skills et langues, bibliothèque numérique et application mobile pour les collaborateurs du groupe.'
        : 'Comprehensive online academy combining LMS platform, Soft Skills and language catalogs, digital library, and mobile app for group employees.',
    },
    {
      client: 'TAQA Morocco',
      image: '/Taqabisbis.png',
      sector: language === 'fr' ? 'Énergie' : 'Energy',
      project: 'E-TAQA Morocco Academy',
      description: language === 'fr'
        ? 'Académie digitale dédiée au secteur énergétique avec formations techniques spécialisées, parcours d\'onboarding et accompagnement personnalisé des apprenants.'
        : 'Digital academy dedicated to the energy sector with specialized technical training, onboarding paths, and personalized learner support.',
    },
    {
      client: 'Tanger Med',
      image: '/TangerMED2.png',
      sector: language === 'fr' ? 'Transport & logistique' : 'Transport & Logistics',
      project: 'Tanger Med E-learning',
      description: language === 'fr'
        ? 'Plateforme e-learning du premier port d\'Afrique structurée en 6 espaces thématiques : management, sécurité, douane, logistique, environnement et soft skills.'
        : 'E-learning platform for Africa\'s leading port structured in 6 thematic areas: management, safety, customs, logistics, environment, and soft skills.',
    },
    {
      client: language === 'fr' ? 'Ministère de l\'Économie et des Finances' : 'Ministry of Economy and Finance',
      image: '/ministere-de-lEconomie.jpg',
      sector: language === 'fr' ? 'Administration publique' : 'Public Administration',
      project: language === 'fr' ? 'Programme Be! Langues' : 'Be! Language Program',
      description: language === 'fr'
        ? 'Programme de formation linguistique multimodale pour les cadres du ministère combinant e-learning, classes virtuelles et coaching individuel en 5 langues.'
        : 'Multimodal language training program for ministry executives combining e-learning, virtual classes, and individual coaching in 5 languages.',
    },
    {
      client: 'SAHAM Bank',
      image: '/Sahambank.png',
      sector: language === 'fr' ? 'Banque' : 'Banking',
      project: language === 'fr' ? 'Plateforme e-learning' : 'E-learning Platform',
      description: language === 'fr'
        ? 'Déploiement de la plateforme IDEO Learn avec intégration de catalogues de formation en compliance, relation client et produits bancaires.'
        : 'Deployment of IDEO Learn platform with integration of training catalogs in compliance, customer relations, and banking products.',
    },
    {
      client: language === 'fr' ? 'ONU Femmes' : 'UN Women',
      image: '/ONUfemmes.png',
      sector: language === 'fr' ? 'Organisation internationale' : 'International organization',
      project: language === 'fr' ? 'Renforcement des capacités et digitalisation' : 'Capacity building and training digitization',
      description: language === 'fr'
        ? 'Accompagnement d\'ONU Femmes dans la digitalisation de ses modules de formation et le renforcement des capacités de ses équipes et partenaires.'
        : 'Supporting UN Women in digitizing training modules and strengthening the capacities of its teams and partners.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#f7f7f8]" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-2">
          <h2 className="text-[28px] sm:text-[42px] font-bold text-[#1a1a1a] mb-10">
            {t('cases.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image Banner with Overlay and Client Name */}
              <div className="relative h-[200px] w-full">
                <Image
                  src={caseItem.image}
                  alt={caseItem.client}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
                  }}
                />
                {/* Client name on image */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="text-white font-bold text-[22px] text-center">
                    {caseItem.client}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="inline-block bg-[#EEEDFE] text-[#534AB7] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {caseItem.sector}
                </div>

                <h4 className="text-xl font-bold text-[#2C2C2A] mb-3">
                  {caseItem.project}
                </h4>

                <p className="text-[#888780] leading-relaxed text-sm">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/references"
            className="text-[#D42027] font-semibold hover:underline inline-flex items-center gap-2"
          >
            {t('cases.link')}
          </a>
        </div>
      </div>
    </section>
  );
}
