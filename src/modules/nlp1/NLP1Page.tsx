import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import NLP1CTASection from "./components/NLP1CTASection";
import "./styles/nlp1-theme.css";

// BottomNav component (UI unchanged)
const BottomNav = () => {
  const handleClick = () => {
    console.log("CTA Clicked ✅ (Bottom Nav)");
    // ❌ Removed fbq here — global handler in NLP1Page covers this
    setTimeout(() => {
      window.open("https://rzp.io/rzp/u2YpQe7", "_blank");
    }, 500);
  };

  return (
    <div id="nlp1-bottom-nav">
      <div className="bottom-nav-container">
        <div className="bottom-nav-inner">
          <div className="bottom-nav-flex">
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  className="price-label"
                  style={{
                    fontSize: "26px",
                    fontWeight: 900,
                    color: "#DAA520",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ₹99
                </span>
                <span
                  style={{ fontSize: "16px", color: "#9ca3af", textDecoration: "line-through", opacity: 0.6 }}
                >
                  ₹4,999
                </span>
              </div>
              <div
                className="offer-text"
                style={{
                  fontSize: "12px",
                  color: "#e5e7eb",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  opacity: 0.9,
                }}
              >
                Special Launch Offer
              </div>
            </div>
            <button className="cta-button" onClick={handleClick}>
              Book Your Zoom Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NLP1Page = () => {
  useEffect(() => {
    // Global click handler for ALL CTA buttons — single source of truth for Lead tracking
    const handleAllCTA = (e) => {
      const target = e.target;

      if (target && (target.closest(".cta-button") || target.dataset.trackLead === "true")) {
        console.log("CTA Clicked ✅", target);
        if (window.fbq) {
          window.fbq("track", "Lead");
        }
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
      <BottomNav />
    </div>
  );
};

export default NLP1Page;
