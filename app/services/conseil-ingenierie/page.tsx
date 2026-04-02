'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import FinalCTA from '@/components/ideo/FinalCTA';
import ConseilHero from '@/components/ideo/conseil/ConseilHero';
import NotreApproche from '@/components/ideo/conseil/NotreApproche';
import DomainesIntervention from '@/components/ideo/conseil/DomainesIntervention';
import CeQueVousGagnez from '@/components/ideo/conseil/CeQueVousGagnez';
import PreuveSociale from '@/components/ideo/conseil/PreuveSociale';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function ConseilIngenieriePage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="Conseil & Ingénierie de formation | Accompagnement e-learning sur mesure — IDEO Factory"
        titleEn="Training Consulting & Engineering | Custom E-learning Support — IDEO Factory"
        descriptionFr="De l'audit à la feuille de route. Nos consultants conçoivent des parcours multimodaux alignés sur vos objectifs."
        descriptionEn="From audit to actionable roadmap. Our consultants design multimodal paths aligned with your goals."
      />
      <Navbar variant="light" />
      <ConseilHero />
      <LogosMarquee />
      <NotreApproche />
      <DomainesIntervention />
      <CeQueVousGagnez />
      <PreuveSociale />
      <FinalCTA />
      <Footer />
    </main>
  );
}
