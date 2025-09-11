import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { SystemSection } from '@/components/sections/SystemSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CTASection } from '@/components/sections/CTASection';
import { MobileStickyCTA } from '@/components/ui/mobile-sticky-cta';

const LNM = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SystemSection />
      <TimelineSection />
      <AuthoritySection />
      <CTASection />
      <MobileStickyCTA />
    </main>
  );
};

export default LNM;
