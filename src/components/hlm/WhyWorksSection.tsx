import { Badge } from "@/components/ui/badge";
import { Check, TrendingUp, Calendar, DollarSign, Target } from "lucide-react";

const WhyWorksSection = () => {
  const benefits = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Fill their calendar with serious clients",
      subtitle: "(without chasing)"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Sell high-ticket memberships or programs with confidence",
      subtitle: ""
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Grow their income while spending more time serving, not selling",
      subtitle: ""
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why This Works For <br />
            <span className="gradient-text">Wellness Coaches</span> 👇
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats section */}
          <div className="glass-card p-8 rounded-2xl mb-12 animate-slide-up">
            <div className="text-center mb-8">
              <Badge variant="outline" className="border-primary/30 text-lg py-2 px-6 mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Proven Track Record
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                After generating <span className="gradient-text text-5xl">₹10+ Crores</span> in Sales,
              </h3>
              <p className="text-xl text-muted-foreground">
                this proven system is now tailored for wellness coaches who want to:
              </p>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <h4 className="text-lg md:text-xl font-bold">
                          {benefit.title}
                        </h4>
                      </div>
                      {benefit.subtitle && (
                        <p className="text-muted-foreground ml-8">
                          {benefit.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System name reveal */}
          <div className="text-center glass-card p-12 rounded-3xl animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We call it the <span className="gradient-text text-4xl">Reverse Funnel System</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              – your shortcut to hitting <span className="text-primary font-bold">₹1 Crore+ revenue</span> in 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorksSection;
