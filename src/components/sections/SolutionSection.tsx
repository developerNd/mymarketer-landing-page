import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Magnet, Users, Target, Zap } from 'lucide-react';

export const SolutionSection = () => {
  const benefits = [
    "Instead of you hunting people, they come to YOU",
    "Instead of you convincing them, they are already convinced",
    "Instead of \"Can you please join?\" you start hearing \"How do I join your team?\""
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Magnet className="w-4 h-4 text-accent" />
            <span>The New Way</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            The Truth About <span className="gradient-accent-text">Team Building</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            The old way of chasing people is dead. The new way is{' '}
            <span className="text-primary font-semibold">attraction-based digital marketing.</span>
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-lg group-hover:text-primary transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 animate-glow" />
              <div className="relative glass p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold gradient-text">Attraction</div>
                    <div className="text-sm text-muted-foreground">Not Chasing</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl">
                    <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                    <div className="text-2xl font-bold gradient-accent-text">Conversion</div>
                    <div className="text-sm text-muted-foreground">Not Convincing</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold gradient-text">
                    This is exactly what I teach.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};