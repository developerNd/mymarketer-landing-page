import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { MessageSquare, Zap, Target, Users, CheckCircle } from 'lucide-react';
import systemImage from '@/assets/system-dashboard.jpg';

export const SystemSection = () => {
  const systemSteps = [
    {
      icon: MessageSquare,
      title: "Magnetic Messaging",
      description: "So your content pulls in the right prospects instantly"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "So you spend less time chasing and more time closing"
    },
    {
      icon: Target,
      title: "Conversion Secrets",
      description: "So prospects don't just listen, they take action fast"
    },
    {
      icon: Users,
      title: "Leadership Formula",
      description: "So your team duplicates your success and grows even faster"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Proven System</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            My Proven System for <span className="gradient-accent-text">Explosive</span> Team Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I help ambitious network marketers build teams of 100+ people in just 90 days using a simple, step-by-step strategy:
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <AnimatedSection animation="scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow" />
              <img
                src={systemImage}
                alt="Digital marketing system dashboard"
                className="relative rounded-3xl shadow-elegant w-full h-auto"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {systemSteps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 150}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 glass rounded-2xl hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      ✅ {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center glass p-8 rounded-3xl">
            <p className="text-2xl font-bold gradient-text mb-4">
              With this system, your business doesn't crawl…
            </p>
            <p className="text-4xl font-display font-bold gradient-accent-text">
              it EXPLODES.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};