import { motion } from "framer-motion";
import { CheckCircle2, Target, Shield, Users, Calendar, TrendingUp } from "lucide-react";

const features = [
    { icon: Calendar, text: "High-Intent Demo Bookings Every Month" },
    { icon: Shield, text: "Authority Positioning In Your City" },
    { icon: Users, text: "Pre-Educated Prospects (Less Price Objection)" },
    { icon: TrendingUp, text: "Structured Follow-Up System" },
    { icon: Target, text: "10–15 Machine Sales Target Framework" },
];

const WhatWeBuildSection = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        What We Help You <span className="text-gradient-gold">Build</span>
                    </h2>
                    <div className="line-gold w-24 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-card rounded-xl p-6 border border-border hover:border-gold/30 transition-colors group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>
                                <p className="text-foreground font-body font-medium leading-relaxed">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-gold rounded-xl p-6 flex items-center justify-center md:col-span-2 lg:col-span-1"
                    >
                        <p className="text-primary-foreground font-display font-bold text-lg text-center">
                            Instead of Chasing Customers…<br />
                            <span className="text-xl">Customers Come Prepared To Buy.</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuildSection;
