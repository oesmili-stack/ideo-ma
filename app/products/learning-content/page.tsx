'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import LogosMarquee from '@/components/ideo/LogosMarquee';
import FinalCTA from '@/components/ideo/FinalCTA';
import LearningContentHero from '@/components/ideo/learning-content/LearningContentHero';
import PresentationStats from '@/components/ideo/learning-content/PresentationStats';
import LearningFormats from '@/components/ideo/learning-content/LearningFormats';
import CrossFunctionalSkills from '@/components/ideo/learning-content/CrossFunctionalSkills';
import SectorContent from '@/components/ideo/learning-content/SectorContent';
import WhyIDEOContent from '@/components/ideo/learning-content/WhyIDEOContent';
import PedagogicalPartners from '@/components/ideo/learning-content/PedagogicalPartners';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';
import { ServiceSchema } from '@/components/ideo/SchemaOrg';

export default function LearningContentPage() {
  return (
    <main className="min-h-screen bg-white">
      <DynamicMetadata
        titleFr="IDEO Learning Content | Catalogue de formations e-learning — Soft Skills, Langues, Digital"
        titleEn="IDEO Learning Content | E-learning Catalog — Soft Skills, Languages, Digital"
        descriptionFr="+500 modules, 50+ parcours, 5 formats pédagogiques. Cegos, Speexx, ENI et contenus localisés."
        descriptionEn="500+ modules, 50+ paths, 5 learning formats. Cegos, Speexx, ENI and localized content."
        canonicalPath="/products/learning-content"
      />
      <ServiceSchema
        name="IDEO Learning Content"
        description="Catalogue de +500 modules e-learning en soft skills, management, langues, bureautique et digital. Partenaires Cegos, Speexx, ENI. Contenus localisés pour le marché marocain et africain."
        url="/products/learning-content"
      />
      <Navbar variant="light" />
      <LearningContentHero />
      <LogosMarquee />
      <PresentationStats />
      <LearningFormats />
      <CrossFunctionalSkills />
      <SectorContent />
      <WhyIDEOContent />
      <PedagogicalPartners />
      <FinalCTA />
      <Footer />
    </main>
  );
}
