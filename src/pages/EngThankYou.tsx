import React, { useEffect } from 'react';
import { Button } from '@/components/ui/premium-button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle, Calendar, Clock } from 'lucide-react';
import { trackPurchase, trackEvent } from '@/lib/facebook-tracking';

const EngThankYou = () => {

    useEffect(() => {
        // ✅ Lead event (ONLY ONCE)
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }

        // ✅ Purchase event
        trackPurchase({}, {
            content_name: 'English Strategy Session',
            content_category: 'Coaching',
            value: 99.00,
            currency: 'INR'
        });

        // ✅ Custom purchase event (optional)
        trackEvent('Purchase NM', {}, {
            value: 99.00,
            currency: 'INR'
        });

        console.log("Lead + Purchase Fired ✅");

    }, []);

    const handleYesClick = () => {
        window.open('https://tools.aiwhatsapp.in/calender/329/565/60%20min', '_blank');
    };

    const handleNoClick = () => {
        window.open('https://tools.aiwhatsapp.in/calender/329/166/30%20min', '_blank');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">

            <div className="absolute inset-0 bg-gradient-hero opacity-90" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-5xl mx-auto">

                    <AnimatedSection animation="scale-in">
                        <div className="flex justify-center mb-6">
                            <div className="glass p-6 rounded-full">
                                <CheckCircle className="w-16 h-16 text-accent" />
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            🎉 Congratulations!
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up">
                        <p className="text-lg mb-8">
                            Payment Successful - You're All Set!
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up">
                        <div className="flex justify-center gap-4 flex-wrap">

                            <Button onClick={handleYesClick}>
                                <Calendar className="mr-2" />
                                Yes
                            </Button>

                            <Button onClick={handleNoClick}>
                                <Calendar className="mr-2" />
                                No
                            </Button>

                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
};

export default EngThankYou;
