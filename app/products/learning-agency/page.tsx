'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import FinalCTA from '@/components/ideo/FinalCTA';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import LearningAgencyHero from '@/components/ideo/learning-agency/LearningAgencyHero';
import PresentationStats from '@/components/ideo/learning-agency/PresentationStats';
import OurTeam from '@/components/ideo/learning-agency/OurTeam';
import ProductionFormats from '@/components/ideo/learning-agency/ProductionFormats';
import OurStudios from '@/components/ideo/learning-agency/OurStudios';
import Methodology from '@/components/ideo/learning-agency/Methodology';
import StudioManagerSection from '@/components/ideo/learning-agency/StudioManagerSection';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function LearningAgencyPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <DynamicMetadata
        titleFr="IDEO Learning Agency — Votre studio e-learning sur mesure"
        titleEn="IDEO Learning Agency — Your custom e-learning studio"
        descriptionFr="Production de contenus e-learning sur mesure. Modules interactifs, vidéos, motion design, rapid learning, serious games."
        descriptionEn="Custom e-learning content production. Interactive modules, videos, motion design, rapid learning, serious games."
      />
      <Navbar variant="light" />
      <LearningAgencyHero />
      <LogosMarquee />
      <PresentationStats />
      <OurTeam />
      <ProductionFormats />
      <OurStudios />
      <Methodology />
      <StudioManagerSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
