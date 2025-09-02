import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { X, PhoneOff, Clock, Frown } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: PhoneOff,
      title: "Calls get ignored",
      description: "Friends and family stop answering your calls"
    },
    {
      icon: Clock,
      title: "\"I'll think about it\"",
      description: "People say they'll get back to you but never do"
    },
    {
      icon: Frown,
      title: "No new recruits",
      description: "Days turn into weeks with zero progress"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <X className="w-4 h-4 text-red-400" />
            <span>The Harsh Reality</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Most Network Marketers <span className="gradient-text">Face This</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's be real for a moment. Most people join network marketing with fire in their hearts. 
            They dream of financial freedom, a better lifestyle, and the joy of leading a strong team.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 200}
              className="group"
            >
              <div className="glass p-8 rounded-2xl hover:border-red-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-red-400/10 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="glass p-8 rounded-2xl border-red-400/20 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              And slowly, the dream feels out of reach.
            </p>
            <p className="text-xl font-semibold">
              <span className="text-red-400">It's not your fault.</span> You've been told to use outdated methods that no longer work.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};