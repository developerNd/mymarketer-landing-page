import React from 'react';
import {
  HeroSection,
  VideoSection,
  AgendaSection,
  ResultsSection,
  WhyWorksSection,
  BonusesSection,
  FinalCTASection,
  BottomNav
} from '@/components/hlm';

const HLP = () => {
  return (
    <div className="hlm-theme">
      <main className="min-h-screen pb-16" style={{ background: 'var(--gradient-hero)' }}>
        <HeroSection />
        <VideoSection />
        <AgendaSection />
        <ResultsSection />
        <WhyWorksSection />
        <BonusesSection />
        <FinalCTASection />
        <BottomNav />
      </main>
    </div>
  );
};

export default HLP;


