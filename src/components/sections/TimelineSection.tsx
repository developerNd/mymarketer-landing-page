import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Calendar, TrendingUp, Users, Trophy } from 'lucide-react';

export const TimelineSection = () => {
  const timelineSteps = [
    {
      day: "Day 1",
      icon: Calendar,
      title: "You're frustrated, tired of chasing",
      status: "frustrated",
      color: "text-red-400"
    },
    {
      day: "Day 30", 
      icon: TrendingUp,
      title: "You've already got a steady flow of prospects reaching out",
      status: "progress",
      color: "text-yellow-400"
    },
    {
      day: "Day 60",
      icon: Users,
      title: "Your team is growing on its own—people are bringing people",
      status: "growing",
      color: "text-blue-400"
    },
    {
      day: "Day 90",
      icon: Trophy,
      title: "You're looking at a 100+ member team, excited, motivated, and finally in control",
      status: "success",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Imagine Your Next <span className="gradient-accent-text">90 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform from frustrated to unstoppable in just three months
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 200}
              className="relative"
            >
              <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="absolute left-1/2 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2" />
                )}
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className={`text-sm font-medium ${step.color} mb-2`}>
                      {step.day}
                    </div>
                    <p className="text-lg font-semibold">
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center glass border-2 ${
                    step.status === 'success' ? 'border-accent bg-gradient-accent' :
                    step.status === 'growing' ? 'border-blue-400 bg-blue-400/10' :
                    step.status === 'progress' ? 'border-yellow-400 bg-yellow-400/10' :
                    'border-red-400 bg-red-400/10'
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      step.status === 'success' ? 'text-accent-foreground' : step.color
                    }`} />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="text-center mt-16 space-y-4">
            <p className="text-xl font-semibold">No begging.</p>
            <p className="text-xl font-semibold">No endless follow-ups.</p>
            <p className="text-2xl font-bold gradient-accent-text">Just predictable growth.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};