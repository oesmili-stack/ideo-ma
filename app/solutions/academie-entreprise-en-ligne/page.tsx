'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import FinalCTA from '@/components/ideo/FinalCTA';
import AELHero from '@/components/ideo/ael/AELHero';
import AELPresentation from '@/components/ideo/ael/AELPresentation';
import AELDimensions from '@/components/ideo/ael/AELDimensions';
import AELLearningServices from '@/components/ideo/ael/AELLearningServices';
import AELAdvantages from '@/components/ideo/ael/AELAdvantages';
import AELAcademies from '@/components/ideo/ael/AELAcademies';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function AcademieEntreprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="Académie d'Entreprise en Ligne | Université digitale sur mesure — IDEO Factory"
        titleEn="Online Corporate Academy | Custom Digital University — IDEO Factory"
        descriptionFr="Créez votre université d'entreprise en ligne. Plateforme personnalisée, contenus catalogue et sur mesure, accompagnement de A à Z."
        descriptionEn="Create your online corporate university. Custom platform, off-the-shelf and bespoke content, end-to-end support."
        canonicalPath="/solutions/academie-entreprise-en-ligne"
      />
      <ServiceSchema
        name="Académie d'Entreprise en Ligne"
        description="Déployez votre propre université digitale clé en main. Plateforme LMS, catalogues de formation, ingénierie pédagogique et accompagnement des apprenants depuis 2006."
        url="/solutions/academie-entreprise-en-ligne"
      />
      <Navbar variant="light" />
      <AELHero />
      <LogosMarquee />
      <AELPresentation />
      <AELDimensions />
      <AELLearningServices />
      <AELAdvantages />
      <AELAcademies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
