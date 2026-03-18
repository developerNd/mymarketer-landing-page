import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoForSection from "./components/WhoForSection";
import NLP1CTASection from "./components/NLP1CTASection";
import "./styles/nlp1-theme.css";

// Reusable function for Lead tracking
const trackLead = (e) => {
  const target = e.currentTarget;

  // Prevent duplicate firing
  if (!target.dataset.leadFired) {
    target.dataset.leadFired = "true";
    console.log("CTA Clicked ✅", target);

    // Fire Facebook Pixel Lead event
    if (window.fbq) window.fbq("track", "Lead");

    // If bottom nav button, open Razorpay
    if (target.dataset.razorpay) {
      window.open("https://rzp.io/rzp/u2YpQe7", "_blank");
    }
  }
};

// BottomNav component (UI unchanged)
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
            {/* Attach trackLead directly to button */}
            <button className="cta-button" data-razorpay onClick={trackLead}>
              Book Your Zoom Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NLP1Page = () => {
  return (
    <div className="nlp1-module min-h-screen bg-background overflow-x-hidden pb-24">
      {/* Top CTA button in HeroSection */}
      <HeroSection trackLead={trackLead} />

      {/* Middle CTA button in NLP1CTASection or IntroSection */}
      <IntroSection trackLead={trackLead} />
      <WhatWeBuildSection />
      <HowItWorksSection />
      <WhoForSection />
      <NLP1CTASection trackLead={trackLead} />

      {/* Bottom CTA */}
      <BottomNav />
    </div>
  );
};

export default NLP1Page;
