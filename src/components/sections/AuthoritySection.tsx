import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Award, Users, TrendingUp, Star } from 'lucide-react';
import expertImage from '@/assets/authority-expert.jpg';

export const AuthoritySection = () => {
  const credentials = [
    {
      icon: Award,
      title: "Digital Marketing Expert",
      description: "15+ years of proven expertise"
    },
    {
      icon: Users,
      title: "10,000+ Students Trained",
      description: "Successful network marketers worldwide"
    },
    {
      icon: TrendingUp,
      title: "300% Average Growth",
      description: "Consistent results across all students"
    },
    {
      icon: Star,
      title: "Industry Recognition",
      description: "Featured in top marketing publications"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Why Listen to <span className="gradient-text">Me?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm not teaching theory. I'm a digital marketing expert who has helped countless network marketers 
            escape the grind and step into true leadership.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow" />
              <img
                src={expertImage}
                alt="Digital marketing expert"
                className="relative rounded-3xl shadow-elegant w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 glass p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Expert</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {credentials.map((credential, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 150}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 glass rounded-2xl hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {credential.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center glass p-8 rounded-3xl">
            <p className="text-xl mb-4">
              I know exactly what works—and more importantly, <span className="text-accent font-semibold">what doesn't.</span>
            </p>
            <p className="text-2xl font-bold gradient-text">
              And now, I want to hand this system to YOU.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};