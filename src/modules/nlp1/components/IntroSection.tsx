import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const IntroSection = () => {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
            <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <Zap className="w-6 h-6 text-primary" />
                        <span className="text-primary font-body font-semibold tracking-wider uppercase text-sm">Introducing</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        The Enagic Growth{" "}
                        <span className="text-gradient-gold">Acceleration System</span>
                        <span className="block text-xl md:text-2xl text-muted-foreground font-body font-normal mt-3">(India)</span>
                    </h2>
                    <div className="line-gold w-24 mx-auto mb-8" />
                    <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto mb-4">
                        A Complete Done-For-You <span className="text-foreground font-semibold">Ads + Funnel + Closing Support System</span>{" "}
                        Designed Specifically For Enagic Distributors.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 text-muted-foreground font-body">
                        <span className="px-4 py-2 rounded-lg bg-muted">This Is NOT Just Training.</span>
                        <span className="px-4 py-2 rounded-lg bg-muted">This Is NOT Just Leads.</span>
                        <span className="px-4 py-2 rounded-lg border border-gold/30 bg-gold/5 text-primary font-semibold">
                            This Is A Predictable Client Attraction System.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntroSection;
