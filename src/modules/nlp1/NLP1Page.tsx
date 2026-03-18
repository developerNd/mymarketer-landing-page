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
        const bottomNavElement = document.createElement('div');
        bottomNavElement.id = 'nlp1-bottom-nav';
        bottomNavElement.innerHTML = `
            <div class="bottom-nav-container">
                <div class="bottom-nav-inner">
                    <div class="bottom-nav-flex">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span class="price-label" style="font-size: 26px; font-weight: 900; color: #DAA520;">₹99</span>
                                <span style="font-size: 16px; color: #9ca3af; text-decoration: line-through; opacity: 0.6;">₹4,999</span>
                            </div>
                            <div style="font-size: 12px; color: #e5e7eb; font-weight: 600;">
                                Special Launch Offer
                            </div>
                        </div>

                        <!-- ✅ ONLY redirect (NO Lead event here) -->
                        <button 
                            class="cta-button"
                            onclick="window.open('https://rzp.io/rzp/u2YpQe7', '_blank', 'noopener,noreferrer')"
                        >
                            Book Your Zoom Call Now
                        </button>

                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(bottomNavElement);

        return () => {
            const existingNav = document.getElementById('nlp1-bottom-nav');
            if (existingNav) {
                document.body.removeChild(existingNav);
            }
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
