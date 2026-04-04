'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import LearningServicesHero from '@/components/ideo/learning-services/LearningServicesHero';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import IntroductionSection from '@/components/ideo/learning-services/IntroductionSection';
import LearningServicesBlocks from '@/components/ideo/learning-services/LearningServicesBlocks';
import LearnerSuccessCenter from '@/components/ideo/learning-services/LearnerSuccessCenter';
import BenefitsSection from '@/components/ideo/learning-services/BenefitsSection';
import StatsAndAcademies from '@/components/ideo/learning-services/StatsAndAcademies';
import FinalCTA from '@/components/ideo/FinalCTA';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function LearningServicesPage() {
  return (
    <main>
      <DynamicMetadata
        titleFr="Learning Services | Tutorat, hotline et pilotage e-learning — IDEO Factory"
        titleEn="Learning Services | Tutoring, Helpdesk & E-learning Management — IDEO Factory"
        descriptionFr="5 services intégrés pour piloter votre dispositif e-learning. Hotline, tutorat, communication, gestion déléguée."
        descriptionEn="5 integrated services to manage your e-learning program. Hotline, tutoring, communication, delegated management."
        canonicalPath="/services/learning-services"
      />
      <ServiceSchema
        name="IDEO Learning Services"
        description="Gestion déléguée de plateforme e-learning, hotline multicanale, Learner Success Center avec tutorat personnalisé. +50 000 apprenants accompagnés par an."
        url="/services/learning-services"
      />
      <Navbar variant="light" />
      <LearningServicesHero />
      <LogosMarquee />
      <IntroductionSection />
      <LearningServicesBlocks />
      <LearnerSuccessCenter />
      <BenefitsSection />
      <StatsAndAcademies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
