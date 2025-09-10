import React from 'react';
import { Button } from '@/components/ui/premium-button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { trackLead } from '@/lib/facebook-tracking';

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span>Take Action Now</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Are You Ready to Build Your <span className="gradient-accent-text">Dream Team?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You've already tried the hard way. Now it's time for the smart way.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={200}>
          <div className="max-w-4xl mx-auto glass p-12 rounded-3xl text-center">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">The Old Way</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>❌ Chasing friends and family</li>
                  <li>❌ Endless rejections</li>
                  <li>❌ Slow, painful growth</li>
                  <li>❌ Feeling frustrated daily</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-accent-text">The Smart Way</h3>
                <ul className="space-y-2">
                  <li>✅ Prospects come to YOU</li>
                  <li>✅ Attraction-based marketing</li>
                  <li>✅ 100+ team members in 90 days</li>
                  <li>✅ Predictable, explosive growth</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl">
                👉 If you're serious about building your team FAST—100+ members in just 90 days—this is your chance.
              </p>
              <p className="text-lg text-muted-foreground">
                Don't let another day pass struggling with outdated methods. The leaders of tomorrow take action today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group animate-glow"
                  onClick={() => {
                    // Track lead conversion
                    trackLead(
                      {}, // user data (can be filled from form)
                      {
                        content_name: 'Build My Team CTA',
                        content_category: 'Network Marketing',
                        value: 0 // or your offer value
                      }
                    );
                    
                    // Add your redirect logic here
                    // window.location.href = 'your-signup-page';
                  }}
                >
                  🔥 Yes! I'm Ready to Build My Team
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <Clock className="w-4 h-4" />
                <span>Limited spots available this month</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-16 space-y-4">
            <p className="text-lg text-muted-foreground">
              Join thousands of successful network marketers who've transformed their business
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10,000+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-accent-text">300%</div>
                <div className="text-sm text-muted-foreground">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">90</div>
                <div className="text-sm text-muted-foreground">Days to Results</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};