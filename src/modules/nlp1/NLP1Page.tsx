import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import NLP1CTASection from "./components/NLP1CTASection";
import "./styles/nlp1-theme.css";
import { useEffect } from "react";

const NLP1Page = () => {
    useEffect(() => {
        let isFiring = false;
        const handleAllCTA = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && (target.closest(".cta-button") || target.dataset.trackLead === "true")) {
                if (isFiring) return;
                isFiring = true;
                console.log("CTA Clicked (Lead Event) ✅", target);
                const win = window as any;
                if (win.fbq) {
                    win.fbq("track", "Lead");
                }
                setTimeout(() => { isFiring = false; }, 1000);
            }
        };

        document.addEventListener("click", handleAllCTA);
        return () => {
            document.removeEventListener("click", handleAllCTA);
        };
    }, []);

    return (
        <div className="nlp1-module min-h-screen bg-background overflow-x-hidden pb-24">
            <HeroSection />
            <IntroSection />
            <WhatWeBuildSection />
            <HowItWorksSection />
            <WhoForSection />
            <NLP1CTASection />
        </div>
    );
};

export default NLP1Page;
