import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";

const AgendaSection = () => {
  const agendaItems = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "How to Generate ₹10 Lakhs+ in Wellness Program Sales in ONE month",
      subtitle: "(without discounts or Free trials)",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "How to Sell Premium Coaching & Nutrition Packages Without Sales Calls",
      subtitle: "– and close clients in less than 5 hours a month",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Turn your wellness program into something clients want to join on their own",
      subtitle: "– no pressure, no pushing, just smooth enrollments.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 glass-card border-primary/30 text-sm md:text-lg py-2 px-4 md:px-6">
            Implementation Agenda
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">For Wellness Coaches</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">Here's what you'll discover:</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 mb-12 md:mb-16">
          {agendaItems.map((item, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-4 md:p-8 rounded-xl md:rounded-2xl group hover:scale-105 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className={`p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-r ${item.gradient} flex-shrink-0 self-center sm:self-start`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-3">
                      <Check className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-lg">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-6 md:p-12 rounded-2xl md:rounded-3xl max-w-2xl mx-auto animate-slide-up">
            <div className="mb-4 md:mb-6">
              <Badge variant="outline" className="bg-destructive/20 border-destructive text-destructive text-sm md:text-lg py-2 px-3 md:px-4 mb-3 md:mb-4">
                Limited Time Offer
              </Badge>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Enroll Today at Just <span className="gradient-text text-3xl sm:text-4xl md:text-5xl">₹99</span>
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground line-through mb-2">₹999</p>
              <p className="text-base md:text-lg text-destructive font-semibold">
                🔥 Seats Left: <span className="text-xl md:text-2xl font-bold">27</span>
              </p>
            </div>
            
            <Button size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 mb-3 md:mb-4 w-full btn-premium" onClick={() => window.open('https://rzp.io/rzp/AswNl79', '_blank', 'noopener,noreferrer')}>
              Secure Your Spot Now
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2" />
            </Button>
            
            <p className="text-xs md:text-sm text-muted-foreground">
              💳 Secure payment • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
