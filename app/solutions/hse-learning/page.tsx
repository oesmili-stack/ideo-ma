'use client';

import Navbar from '@/components/ideo/Navbar';
import HSEHero from '@/components/ideo/hse/HSEHero';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import ApproachAndStats from '@/components/ideo/hse/ApproachAndStats';
import SafetyDays from '@/components/ideo/hse/SafetyDays';
import DigitalLearning from '@/components/ideo/hse/DigitalLearning';
import SmartLearning from '@/components/ideo/hse/SmartLearning';
import PartnerSection from '@/components/ideo/hse/PartnerSection';
import HSEFAQ from '@/components/ideo/hse/HSEFAQ';
import FinalCTA from '@/components/ideo/FinalCTA';
import Footer from '@/components/ideo/Footer';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function HSELearningPage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="HSE Learning | Formation Santé Sécurité au Travail e-learning — IDEO Factory"
        titleEn="HSE Learning | Occupational Health & Safety E-learning — IDEO Factory"
        descriptionFr="Formations e-learning en santé, sécurité et environnement. Modules interactifs pour sensibiliser vos équipes aux risques professionnels."
        descriptionEn="E-learning courses in health, safety and environment. Interactive modules to raise awareness of occupational risks."
      />
      <Navbar variant="light" />
      <HSEHero />
      <LogosMarquee />
      <ApproachAndStats />
      <SafetyDays />
      <DigitalLearning />
      <SmartLearning />
      <PartnerSection />
      <HSEFAQ />
      <FinalCTA variant="hse" />
      <Footer />
    </main>
  );
}
