import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
                        <AlertTriangle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-body font-medium text-primary tracking-wider uppercase">
                            Attention Enagic Distributors in India
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                >
                    Are You Still Relying Only on{" "}
                    <span className="text-gradient-gold">Referrals & Offline Demos?</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl mx-auto mb-8 space-y-2 text-muted-foreground text-lg font-body"
                >
                    <p>Every Day: You give demos. You explain price.</p>
                    <p>You hear: <span className="text-foreground font-semibold">"Machine Mehengi Hai…"</span></p>
                    <p>Follow-up. Follow-up. Follow-up.</p>
                    <p className="text-primary font-bold text-xl pt-2">And Still… No Consistent Sales</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <a
                        href="https://rzp.io/rzp/u2YpQe7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-bold text-lg rounded-lg shadow-gold animate-pulse-gold hover:scale-105 transition-transform"
                    >
                        Book Your Free Zoom Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center text-sm text-muted-foreground font-body"
                >
                    {["⚠️ The Problem Is NOT The Machine", "⚠️ The Problem Is NOT The Market", "⚠️ The Problem Is The Old Sales System"].map((text, i) => (
                        <span key={i} className={i === 2 ? "text-primary font-semibold" : ""}>{text}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
