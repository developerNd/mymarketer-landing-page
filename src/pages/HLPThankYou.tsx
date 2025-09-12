import React from 'react';
import { Button } from '@/components/ui/premium-button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle, Calendar, Clock } from 'lucide-react';

const HLPThankYou = () => {
  const handleBookMeeting = () => {
    window.open('https://tool.aiwhatsapp.in/calender/329/565/30%20min', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* Background Elements - Enhanced */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-10 left-4 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Success Icon */}
          <AnimatedSection animation="scale-in">
            <div className="flex justify-center mb-6">
              <div className="glass p-6 rounded-full bg-gradient-accent/20">
                <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-accent animate-pulse" />
              </div>
            </div>
          </AnimatedSection>

          {/* Congratulations heading */}
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">Thank You!</span>
            </h1>
          </AnimatedSection>
          
          {/* Enhanced Subheadings */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 space-y-3">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                Your submission has been received.
              </p>
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                You can schedule your session below
              </p>
            </div>
          </AnimatedSection>
          
          {/* Book Meeting Section */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mb-12">
              <div className="glass p-6 md:p-8 rounded-2xl mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-4">
                  <span className="gradient-accent-text">Book Your Meeting Now</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6">
                  Choose a time that works best for you
                </p>
                
                {/* Single CTA Button */}
                <div className="flex justify-center">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="group min-w-[250px]"
                    onClick={handleBookMeeting}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Now
                    <Clock className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default HLPThankYou;


