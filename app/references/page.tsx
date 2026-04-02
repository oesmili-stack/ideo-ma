'use client';

import Navbar from '@/components/ideo/Navbar';
import Footer from '@/components/ideo/Footer';
import ReferencesHero from '@/components/ideo/references/ReferencesHero';
import SectorBlocks from '@/components/ideo/references/SectorBlocks';
import FinalCTA from '@/components/ideo/FinalCTA';
import DynamicMetadata from '@/components/ideo/DynamicMetadata';

export default function ReferencesPage() {
  return (
    <main>
      <DynamicMetadata
        titleFr="Nos références — IDEO Factory"
        titleEn="Our references — IDEO Factory"
        descriptionFr="Des entreprises leaders et institutions publiques nous font confiance. Découvrez nos références par secteur."
        descriptionEn="Leading companies and public institutions trust us. Discover our references by sector."
      />
      <Navbar variant="light" />
      <ReferencesHero />
      <SectorBlocks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
