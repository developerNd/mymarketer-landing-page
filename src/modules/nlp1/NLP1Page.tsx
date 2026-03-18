import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import NLP1CTASection from "./components/NLP1CTASection";
import "./styles/nlp1-theme.css";

const NLP1Page = () => {

    return (
        <div className="nlp1-module min-h-screen bg-background overflow-x-hidden pb-24">

            <HeroSection />
            <IntroSection />
            <WhatWeBuildSection />
            <HowItWorksSection />
            <WhoForSection />
            <NLP1CTASection />

            {/* ✅ Bottom Sticky Bar (React way - SAFE) */}
            <div id="nlp1-bottom-nav" className="fixed bottom-0 left-0 w-full z-50">
                <div className="bottom-nav-container">
                    <div className="bottom-nav-inner">
                        <div className="bottom-nav-flex">

                            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ fontSize: "26px", fontWeight: "900", color: "#DAA520" }}>
                                        ₹99
                                    </span>
                                    <span style={{ fontSize: "16px", textDecoration: "line-through", opacity: 0.6 }}>
                                        ₹4,999
                                    </span>
                                </div>
                                <div style={{ fontSize: "12px", color: "#e5e7eb", fontWeight: "600" }}>
                                    Special Launch Offer
                                </div>
                            </div>

                            <button
                                className="cta-button"
                                onClick={() =>
                                    window.open(
                                        "https://rzp.io/rzp/u2YpQe7",
                                        "_blank"
                                    )
                                }
                            >
                                Book Your Zoom Call Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NLP1Page;
