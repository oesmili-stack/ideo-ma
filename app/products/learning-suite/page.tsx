'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import LearningSuiteHero from '@/components/ideo/learning-suite/LearningSuiteHero';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import ThreePillars from '@/components/ideo/learning-suite/ThreePillars';
import ComponentsOverview from '@/components/ideo/learning-suite/ComponentsOverview';
import IdeoLearnDetail from '@/components/ideo/learning-suite/IdeoLearnDetail';
import IdeoTutoringDetail from '@/components/ideo/learning-suite/IdeoTutoringDetail';
import StudioManagerDetail from '@/components/ideo/learning-suite/StudioManagerDetail';
import BrandonHallSection from '@/components/ideo/learning-suite/BrandonHallSection';
import SuiteFAQ from '@/components/ideo/learning-suite/SuiteFAQ';
import FinalCTA from '@/components/ideo/FinalCTA';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function LearningSuitePage() {
  return (
    <main className="min-h-screen">
      <DynamicMetadata
        titleFr="IDEO Learning Suite | Plateforme LMS e-learning au Maroc"
        titleEn="IDEO Learning Suite | LMS Platform for E-learning in Morocco"
        descriptionFr="Plateforme LMS primée, CRM apprenant et outil de production IA. Trois outils intégrés pour piloter, engager et produire."
        descriptionEn="Award-winning LMS platform, learner CRM and AI production tool. Three integrated tools to manage, engage and produce."
        canonicalPath="/products/learning-suite"
      />
      <ServiceSchema
        name="IDEO Learning Suite"
        description="Plateforme LMS primée aux Brandon Hall Awards, CRM apprenant IDEO Tutoring et outil de production de contenus IDEO Studio Manager. Trois outils intégrés pour piloter, engager et produire."
        url="/products/learning-suite"
      />
      <Navbar variant="light" />
      <LearningSuiteHero />
      <LogosMarquee />
      <ThreePillars />
      <ComponentsOverview />
      <IdeoLearnDetail />
      <IdeoTutoringDetail />
      <StudioManagerDetail />
      <BrandonHallSection />
      <SuiteFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
