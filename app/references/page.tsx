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
        titleFr="Nos références | +76 clients — Banques, Administrations, Énergie — IDEO Factory"
        titleEn="Our references | 76+ clients — Banks, Government, Energy — IDEO Factory"
        descriptionFr="Des entreprises leaders et institutions publiques nous font confiance. Découvrez nos références par secteur : banque, administration, énergie, transport."
        descriptionEn="Leading companies and public institutions trust us. Discover our references by sector: banking, government, energy, transport."
        canonicalPath="/references"
      />
      <Navbar variant="light" />
      <ReferencesHero />
      <SectorBlocks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
