import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Strategic Positioning",
        description: "We craft your authority message for Indian market psychology.",
    },
    {
        number: "02",
        title: "Paid Ads Setup",
        description: "We run targeted ads to attract serious buyers.",
    },
    {
        number: "03",
        title: "Automated Funnel",
        description: "Landing page + qualification system filters time-wasters.",
    },
    {
        number: "04",
        title: "Demo Optimization Training",
        description: "We train you to convert booked demos into high-ticket sales.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-body font-semibold tracking-wider uppercase text-sm">🧠 The Process</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
                        How It <span className="text-gradient-gold">Works</span>
                    </h2>
                    <div className="line-gold w-24 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative bg-gradient-card rounded-xl p-8 border border-border hover:border-gold/30 transition-all group"
                        >
                            <span className="text-6xl font-display font-bold text-gold/10 absolute top-4 right-6 group-hover:text-gold/20 transition-colors">
                                {step.number}
                            </span>
                            <div className="relative z-10">
                                <span className="text-xs font-body font-semibold text-primary tracking-wider uppercase">
                                    Step {step.number}
                                </span>
                                <h3 className="text-xl font-display font-bold mt-2 mb-3 text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground font-body">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center bg-gradient-card rounded-xl p-8 border border-gold/20"
                >
                    <p className="text-xl md:text-2xl font-display font-bold text-foreground">
                        Result? <span className="text-gradient-gold">Consistent Flow. Predictable Growth. Controlled Scale.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
