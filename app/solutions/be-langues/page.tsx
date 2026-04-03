'use client';

import Navbar from '@/components/ideo/Navbar';
import BeHero from '@/components/ideo/be-langues/BeHero';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import ConstatPromesse from '@/components/ideo/be-langues/ConstatPromesse';
import DeuxPiliers from '@/components/ideo/be-langues/DeuxPiliers';
import ParcoursMultimodal from '@/components/ideo/be-langues/ParcoursMultimodal';
import QuatreFormules from '@/components/ideo/be-langues/QuatreFormules';
import PartenaireSpeexx from '@/components/ideo/be-langues/PartenaireSpeexx';
import BeFAQ from '@/components/ideo/be-langues/BeFAQ';
import FinalCTA from '@/components/ideo/FinalCTA';
import Footer from '@/components/ideo/Footer';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function BeLanguesPage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="Be! Langues | Formation langues en ligne pour entreprises au Maroc — IDEO Factory"
        titleEn="Be! Languages | Online Language Training for Companies in Morocco — IDEO Factory"
        descriptionFr="Formations en langues pour entreprises. Anglais, français, espagnol et 7 autres langues avec accompagnement tutoral personnalisé."
        descriptionEn="Language training for companies. English, French, Spanish and 7 other languages with personalized tutoring support."
        canonicalPath="/solutions/be-langues"
      />
      <ServiceSchema
        name="Be! Langues"
        description="Formations en langues pour entreprises : anglais, français, espagnol, allemand, italien. E-learning 24/7 avec Speexx, classes virtuelles et coaching linguistique individuel."
        url="/solutions/be-langues"
      />
      <Navbar variant="light" />
      <BeHero />
      <LogosMarquee />
      <ConstatPromesse />
      <DeuxPiliers />
      <ParcoursMultimodal />
      <QuatreFormules />
      <PartenaireSpeexx />
      <BeFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
