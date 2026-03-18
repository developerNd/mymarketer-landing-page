import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import NLP1CTASection from "./components/NLP1CTASection";
import "./styles/nlp1-theme.css";

// BottomNav component (UI same)
const BottomNav = () => {
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
            <button className="cta-button" data-razorpay>
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
    const handleAllCTA = (e) => {
      const target = e.target.closest(".cta-button");
      if (!target) return;

      // Lead fires only once per button
      if (!target.dataset.leadFired) {
        target.dataset.leadFired = "true";
        console.log("CTA Clicked ✅", target);

        // Fire Facebook Pixel Lead event
        if (window.fbq) window.fbq("track", "Lead");

        // Bottom CTA opens Razorpay safely
        if (target.hasAttribute("data-razorpay")) {
          window.open("https://rzp.io/rzp/u2YpQe7", "_blank");
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
      {/* Top CTA */}
      <HeroSection />
      {/* Middle CTA */}
      <IntroSection />
      <WhatWeBuildSection />
      <HowItWorksSection />
      <WhoForSection />
      <NLP1CTASection />
      {/* Bottom CTA */}
      <BottomNav />
    </div>
  );
};

export default NLP1Page;
