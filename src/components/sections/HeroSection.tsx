import React from 'react';
import { Button } from '@/components/ui/premium-button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';
import { trackLead } from '@/lib/facebook-tracking';
import heroImage from '@/assets/hero-team.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Proven Success System</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Build a Team of{' '}
                <span className="gradient-accent-text">100+</span>{' '}
                Network Marketers in{' '}
                <span className="gradient-text">90 Days</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                What if I told you that in the next 3 months, you could have a thriving, fast-growing team—
                <span className="text-accent font-semibold"> without the endless rejections</span>, 
                without awkward pitching, and without chasing friends and family?
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => {
                    trackLead(
                      {},
                      {
                        content_name: 'Hero CTA - Build My Team',
                        content_category: 'Network Marketing',
                        value: 0
                      }
                    );
                    window.location.href = 'https://rzp.io/rzp/u2YpQe7';
                  }}
                >
                  Yes! I'm Ready to Build My Team
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="premium" 
                  size="xl"
                  onClick={() => {
                    trackLead(
                      {},
                      {
                        content_name: 'Hero CTA - Learn More',
                        content_category: 'Network Marketing',
                        value: 0
                      }
                    );
                    // Add your redirect logic here
                  }}
                >
                  Learn More
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="glass p-3 rounded-xl">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">10,000+</div>
                    <div className="text-sm text-muted-foreground">Success Stories</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="glass p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-accent-text">300%</div>
                    <div className="text-sm text-muted-foreground">Average Growth</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Hero Image */}
          <AnimatedSection animation="scale-in" delay={400} className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow" />
              <img
                src={heroImage}
                alt="Successful network marketing team"
                className="relative rounded-3xl shadow-elegant w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-accent-text">90</div>
                  <div className="text-sm text-muted-foreground">Days to Success</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};