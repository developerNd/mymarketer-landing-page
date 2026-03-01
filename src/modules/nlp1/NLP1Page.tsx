import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import CTASection from "./components/CTASection";
import "./styles/nlp1-theme.css";

const NLP1Page = () => {
    return (
        <div className="nlp1-module min-h-screen bg-background overflow-x-hidden">
            <HeroSection />
            <IntroSection />
            <WhatWeBuildSection />
            <HowItWorksSection />
            <WhoForSection />
            <CTASection />
        </div>
    );
};

export default NLP1Page;
