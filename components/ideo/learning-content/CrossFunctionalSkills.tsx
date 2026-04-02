'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Heart, MessageCircle, TrendingUp, Lightbulb, Cpu, Monitor, Languages, FolderKanban, Leaf, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function CrossFunctionalSkills() {
  const { t, language } = useLanguage();

  const categories = [
    {
      icon: Users,
      color: 'bg-[#FEF0F0] text-[#D42027]',
      name: t('content.cat1'),
      modules: '57 modules · 6 parcours',
      tags: ['Leadership', 'Performance', 'Délégation & feedbacks', 'Entrée en fonction', 'Perfectionnement', 'Styles de management'],
    },
    {
      icon: Heart,
      color: 'bg-[#EAF3DE] text-[#639922]',
      name: t('content.cat2'),
      modules: '55 modules · 5 parcours',
      tags: ['Assertivité & confiance', 'Émotions', 'Gestion du temps', 'Bien-être', 'Capacités cognitives'],
    },
    {
      icon: MessageCircle,
      color: 'bg-[#E6F1FB] text-[#378ADD]',
      name: t('content.cat3'),
      modules: '40 modules · 5 parcours',
      tags: ['Prise de parole', 'Feedback & conflits', 'Rédaction', 'Négociation', 'Réunion'],
    },
    {
      icon: TrendingUp,
      color: 'bg-[#FAEEDA] text-[#BA7517]',
      name: t('content.cat4'),
      modules: '60 modules · 7 parcours',
      tags: ['Prospection', 'Négociation commerciale', 'Expérience client', 'KAM', 'Présentation'],
    },
    {
      icon: Lightbulb,
      color: 'bg-[#FBEAF0] text-[#D4537E]',
      name: t('content.cat5'),
      modules: '31 modules · 3 parcours',
      tags: ['Adaptation au changement', 'Conduite du changement', 'Innovation & créativité'],
    },
    {
      icon: Cpu,
      color: 'bg-[#EEEDFE] text-[#534AB7]',
      name: t('content.cat6'),
      modules: '35 modules · 3 parcours',
      tags: ['Intelligence artificielle', 'Compétences digitales', 'Numérique responsable'],
    },
    {
      icon: Monitor,
      color: 'bg-[#E1F5EE] text-[#1D9E75]',
      name: t('content.cat7'),
      modules: '99 modules · 8 parcours',
      tags: ['Excel', 'Word', 'PowerPoint', 'Office 365', 'MS Project', 'Collaboratif', 'Création web'],
    },
    {
      icon: Languages,
      color: 'bg-[#E6F1FB] text-[#378ADD]',
      name: t('content.cat8'),
      modules: language === 'fr' ? '10 parcours · niveaux A1→C2' : '10 paths · levels A1→C2',
      tags: ['Anglais', 'Français', 'Espagnol', 'Allemand', 'Italien'],
    },
    {
      icon: FolderKanban,
      color: 'bg-[#FAECE7] text-[#D85A30]',
      name: t('content.cat9'),
      modules: '24 modules · 3 parcours',
      tags: ['Projet agile', 'Équipe projet', 'Planification'],
    },
    {
      icon: Leaf,
      color: 'bg-[#E1F5EE] text-[#0F6E56]',
      name: t('content.cat10'),
      modules: '27 modules · 3 parcours',
      tags: ['Transition écologique', 'RSE', 'Inclusion & diversité'],
    },
    {
      icon: Briefcase,
      color: 'bg-[#FAEEDA] text-[#BA7517]',
      name: t('content.cat11'),
      modules: '19 modules · 2 parcours',
      tags: ['Formation de formateurs', 'Gestion des talents'],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="badge-surtitre">
              {t('content.skills.badge')}
            </span>
          </div>
          <h2 className="h2-section text-center">
            {t('content.skills.title')}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            {t('content.skills.subtitle')}
          </p>

          <div className="flex justify-center mb-12">
            <div className="relative max-w-3xl w-full">
              <Image
                src="/ImageLearningContent2.png"
                alt="Learning Content Domains"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1A1A2E] mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.modules}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
