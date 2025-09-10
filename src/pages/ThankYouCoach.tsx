import React from 'react';
import { Button } from '@/components/ui/premium-button';
import { AnimatedSection } from '@/components/ui/animated-section';

const ThankYouCoach = () => {
  const handleYesClick = () => {
    window.open('https://tool.aiwhatsapp.in/calender/329/3/45%20min', '_blank');
  };

  const handleNoClick = () => {
    window.open('https://tool.aiwhatsapp.in/calender/329/565/30%20min', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements - Matching Landing Page */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Congratulations heading */}
          <AnimatedSection animation="fade-up">
            <h1 className="text-6xl lg:text-8xl font-display font-bold leading-tight mb-8">
              <span className="gradient-text">Congratulations!</span>
            </h1>
          </AnimatedSection>
          
          {/* Subheadings */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-xl lg:text-2xl text-muted-foreground mb-12 space-y-4">
              <p>You have successfully done your payment</p>
              <p>Now Schedule your Meeting</p>
            </div>
          </AnimatedSection>
          
          {/* Question */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-12">
                <span className="gradient-accent-text">Are you Herbalife Coach??</span>
              </h2>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                {/* Yes Button */}
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group w-full sm:w-auto"
                  onClick={handleYesClick}
                >
                  Yes
                </Button>
                
                {/* No Button */}
                <Button 
                  variant="premium" 
                  size="xl" 
                  className="group w-full sm:w-auto"
                  onClick={handleNoClick}
                >
                  No
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Success Stats - Matching Landing Page Style */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex items-center justify-center gap-12 pt-12">
              <div className="flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <div className="w-6 h-6 bg-gradient-accent rounded-full"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">Payment</div>
                  <div className="text-sm text-muted-foreground">Successful</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-accent-text">Next Step</div>
                  <div className="text-sm text-muted-foreground">Schedule Meeting</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ThankYouCoach;
