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
        // Create bottom nav element and append to body
        const bottomNavElement = document.createElement('div');
        bottomNavElement.id = 'nlp1-bottom-nav';
        bottomNavElement.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                background-color: rgba(11, 28, 53, 0.98);
                backdrop-filter: blur(8px);
                border-top: 1px solid rgba(218, 165, 32, 0.4);
                box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.4);
                width: 100vw;
                margin: 0;
                padding: 0;
                display: block;
            ">
                <div style="max-width: 1200px; margin: 0 auto; padding: 12px 20px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 15px; flex-wrap: wrap;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 26px; font-weight: 900; color: #DAA520; font-family: 'Playfair Display', serif; letter-spacing: -0.02em;">₹99</span>
                                <span style="font-size: 16px; color: #9ca3af; text-decoration: line-through; opacity: 0.6;">₹4,999</span>
                            </div>
                            <div style="font-size: 12px; color: #e5e7eb; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.9;">
                                Special Launch Offer
                            </div>
                        </div>
                        <button 
                            onclick="window.open('https://rzp.io/rzp/u2YpQe7', '_blank', 'noopener,noreferrer')"
                            style="
                                background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
                                color: #0b1c35;
                                border: none;
                                border-radius: 10px;
                                padding: 14px 28px;
                                font-weight: 900;
                                font-size: 14px;
                                cursor: pointer;
                                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                text-transform: uppercase;
                                box-shadow: 0 6px 20px rgba(218, 165, 32, 0.4);
                                font-family: 'Inter', sans-serif;
                                white-space: nowrap;
                                letter-spacing: 0.02em;
                            "
                            onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 25px rgba(218, 165, 32, 0.5)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(218, 165, 32, 0.4)';"
                        >
                            Book Your Zoom Call Now
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(bottomNavElement);

        // Cleanup function
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
