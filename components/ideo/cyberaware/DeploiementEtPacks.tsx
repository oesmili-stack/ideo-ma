'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Monitor, ChartBar, GraduationCap, Plug, Megaphone, Check } from 'lucide-react';

export default function DeploiementEtPacks() {
  const { t, language } = useLanguage();

  const techComponents = [
    {
      icon: Monitor,
      title: t('cyber.deploy.tech1'),
      desc: language === 'fr' ? 'Ordinateur, mobile et tablette' : 'Desktop, mobile and tablet'
    },
    {
      icon: ChartBar,
      title: t('cyber.deploy.tech2'),
      desc: language === 'fr' ? 'Taux d\'achèvement et zones à risque' : 'Completion rates and risk areas'
    },
    {
      icon: GraduationCap,
      title: t('cyber.deploy.tech3'),
      desc: language === 'fr' ? 'Tutorat, webinaires, assistance' : 'Tutoring, webinars, assistance'
    },
    {
      icon: Plug,
      title: t('cyber.deploy.tech4'),
      desc: language === 'fr' ? 'IDEO Learn, IDEO Tutoring, LDAP' : 'IDEO Learn, IDEO Tutoring, LDAP'
    },
    {
      icon: Megaphone,
      title: t('cyber.deploy.tech5'),
      desc: language === 'fr' ? 'Affiches, stickers, écrans' : 'Posters, stickers, screens'
    },
  ];

  const packs = [
    {
      stars: '★',
      name: language === 'fr' ? 'Essentiel' : 'Essential',
      items: language === 'fr'
        ? ['Test de positionnement initial', 'Parcours e-learning adaptatif', 'Badge « Je suis Cyber Aware »']
        : ['Initial placement test', 'Adaptive e-learning path', '\'Je suis Cyber Aware\' badge'],
      tagline: language === 'fr' ? 'L\'essentiel pour démarrer' : 'The essentials to get started',
      highlighted: false,
    },
    {
      stars: '★★',
      name: 'Standard',
      items: language === 'fr'
        ? ['Tout le pack Essentiel', 'Ressources complémentaires (MOOC, livres, webinaires)', 'Accompagnement renforcé (tutorat, assistance pédagogique)', 'Tableau de bord de suivi RH / DSI']
        : ['Everything in Essential', 'Complementary resources (MOOCs, books, webinars)', 'Enhanced support (tutoring, pedagogical assistance)', 'HR / IT tracking dashboard'],
      tagline: language === 'fr' ? 'Le choix de la performance' : 'The performance choice',
      highlighted: false,
    },
    {
      stars: '★★★',
      name: 'Premium',
      items: language === 'fr'
        ? ['Tout le pack Standard', 'Campagne événementielle complète', 'Kit de communication interne (affiches, stickers, écrans)', 'Webinaires, conférences et escape games', 'Formations complémentaires en présentiel']
        : ['Everything in Standard', 'Full event-based campaign', 'Internal communication kit (posters, stickers, screens)', 'Webinars, conferences and escape games', 'Complementary in-person training'],
      tagline: language === 'fr' ? 'L\'expérience complète' : 'The complete experience',
      highlighted: true,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            {t('cyber.deploy.title')}
          </h2>
          <p className="text-lg text-[#4A4A5A] max-w-3xl mx-auto mb-6">
            {t('cyber.deploy.subtitle')}
          </p>
          <p className="text-base text-[#4A4A5A] max-w-4xl mx-auto leading-relaxed">
            {t('cyber.deploy.text')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {techComponents.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 text-center min-h-[120px] flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8F4FD] flex items-center justify-center mx-auto mb-3">
                <comp.icon className="w-6 h-6 text-[#4FA8D1]" />
              </div>
              <p className="text-[13px] font-bold text-[#1A1A2E] mb-1">
                {comp.title}
              </p>
              <p className="text-[11px] text-[#888780]">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packs.map((pack, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 text-left relative min-h-[220px] flex flex-col ${
                pack.highlighted
                  ? 'bg-[#FFFAFA] border-2 border-[#D42027]'
                  : 'bg-white border border-[#E5E7EB]'
              }`}
            >
              {pack.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D42027] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {language === 'fr' ? 'Recommandé' : 'Recommended'}
                </div>
              )}
              <div className="text-2xl mb-3" style={{ color: '#DAA520' }}>{pack.stars}</div>
              <h3 className={`text-[18px] font-bold mb-4 ${pack.highlighted ? 'text-[#D42027]' : 'text-[#1A1A2E]'}`}>
                {pack.name}
              </h3>
              <ul className="space-y-2 mb-4 flex-1">
                {pack.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#4FA8D1] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#4A4A5A]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] italic text-[#888] mt-auto">
                {pack.tagline}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-base font-semibold text-[#1A1A2E] max-w-4xl mx-auto">
          {t('cyber.deploy.conclusion')}
        </p>
      </div>
    </section>
  );
}
