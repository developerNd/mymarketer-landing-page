import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import "../styles/nlp1-theme.css";

const BottomNav = () => {
  const handleClick = () => {
    console.log("CTA Clicked ✅ (Bottom Nav)");
    const win = window as any;
    if (win.fbq) {
      win.fbq("track", "Lead");
    }
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

const NLP1CTASection = () => {
    const handleClick = () => {
        const win = window as any;
        if (win.fbq) {
            win.fbq("track", "Lead");
        }
        window.open("https://rzp.io/rzp/u2YpQe7", "_blank");
    };

    return (
        <>
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass border border-gold/30 p-12 rounded-3xl"
                    >
                        <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Ready to Build Your <span className="text-gradient-gold">Enagic Empire?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 font-body">
                            Stop chasing friends and family. Start attracting high-quality prospects today.
                        </p>
                        <button 
                            className="cta-button group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-primary-foreground font-bold text-xl rounded-xl shadow-gold hover:scale-105 transition-all"
                            onClick={handleClick}
                        >
                            Yes! I'm Ready to Scale
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>
            <BottomNav />
        </>
    );
};

export default NLP1CTASection;
