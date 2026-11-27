import { PageShell } from '../../components/PageShell';
import { Announcement } from '../../components/Announcement';
import { HomeHeader } from '../../components/HomeHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { Hero } from './Hero';
import { Problem } from './Problem';
import { HowItWorks } from './HowItWorks';
import { Benefits } from './Benefits';
import { UseCases } from './UseCases';
import { WhatYouNeed } from './WhatYouNeed';
import { Pricing } from './Pricing';
import { YourData } from './YourData';
import { Resources } from './Resources';
import { Team } from './Team';
import { Faq } from './Faq';
import { FinalCta } from './FinalCta';
import './home.css';

export function HomePage() {
  return (
    <PageShell
      title="MoldAid · Mold designs in minutes"
      description="Upload your part as a STEP file. MoldAid Studio turns it into a printable injection mold with split line, gate and vents."
    >
      <Announcement />
      <HomeHeader />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <WhatYouNeed />
      <Pricing />
      <YourData />
      <Resources />
      <Team />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </PageShell>
  );
}
