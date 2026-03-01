import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forItems = [
    "New Distributors Who Want Fast Momentum",
    "Existing Distributors Stuck At Same Level",
    "City Leaders Who Want Market Domination",
    "Anyone Serious About 10–15 Sales Per Month",
];

const notForItems = [
    "People Waiting Only For Referrals",
    'People Who Think "Market Kharab Hai"',
    "People Not Ready To Invest In Growth",
];

const WhoForSection = () => {
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
                        Is This <span className="text-gradient-gold">For You?</span>
                    </h2>
                    <div className="line-gold w-24 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-card rounded-xl p-8 border border-gold/20"
                    >
                        <h3 className="text-xl font-display font-bold mb-6 text-primary flex items-center gap-2">
                            🎯 Who This Is For
                        </h3>
                        <div className="space-y-4">
                            {forItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <p className="text-foreground font-body">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-card rounded-xl p-8 border border-border"
                    >
                        <h3 className="text-xl font-display font-bold mb-6 text-destructive flex items-center gap-2">
                            ❌ Who This Is NOT For
                        </h3>
                        <div className="space-y-4">
                            {notForItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-destructive" />
                                    </div>
                                    <p className="text-muted-foreground font-body">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoForSection;
