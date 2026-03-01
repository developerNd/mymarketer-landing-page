import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, ShieldCheck } from "lucide-react";

const callPoints = [
    "Analyse Your Current Situation",
    "Identify Your Sales Bottleneck",
    "Show You The Exact Growth Roadmap",
    "Decide If We Are A Good Fit",
];

const CTASection = () => {
    return (
        <section id="book-call" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-gold/20 shadow-gold text-center"
                >
                    <span className="text-primary font-body font-semibold tracking-wider uppercase text-sm">
                        🚀 Ready To Build A Real System?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-3">
                        Book Your Free{" "}
                        <span className="text-gradient-gold">1:1 Growth Strategy</span>{" "}
                        Zoom Call
                    </h2>
                    <p className="text-muted-foreground font-body mb-8 text-lg">
                        We Are Currently Inviting Serious Enagic Distributors
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
                        {callPoints.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-foreground font-body text-sm">{point}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-muted-foreground font-body mb-8 italic">
                        No Random Pitch. Only Strategy.
                    </p>

                    <motion.a
                        href="https://rzp.io/rzp/u2YpQe7"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-primary-foreground font-body font-bold text-lg rounded-xl shadow-gold glow-gold"
                    >
                        <Phone className="w-5 h-5" />
                        Book Your Zoom Call Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-body">Limited Slots Per Week · Serious Distributors Only</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
