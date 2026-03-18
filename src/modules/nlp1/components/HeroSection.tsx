import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = ({ trackLead }) => {
    return (
        <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-4 pb-20 md:py-20 text-center max-w-5xl">
                {/* ...other content stays the same... */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <button
                        type="button"
                        onClick={(e) => trackLead(e, true)} // pass true to indicate Razorpay
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-bold text-lg rounded-lg shadow-gold animate-pulse-gold hover:scale-105 transition-transform"
                    >
                        Book Your Zoom Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                {/* ...rest stays the same... */}
            </div>
        </section>
    );
};

export default HeroSection;
