import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Shield, CreditCard, Zap } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency header */}
          <Badge variant="outline" className="mb-6 bg-destructive/20 border-destructive text-destructive text-lg py-2 px-6 animate-pulse">
            <Clock className="h-4 w-4 mr-2" />
            Limited Time Offer
          </Badge>

          {/* Main CTA */}
          <div className="glass-card p-12 rounded-3xl animate-slide-up mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-primary animate-glow" />
              <h2 className="text-3xl md:text-5xl font-bold">
                Special Offer: Only <span className="gradient-text text-6xl">₹99</span>
              </h2>
            </div>
            
            <p className="text-2xl text-muted-foreground line-through mb-2">₹999</p>
            <p className="text-xl text-destructive font-bold mb-8">
              🔥 Limited Seats Left – Enroll Now Before It's Gone!
            </p>

            <Button variant="hero" size="lg" className="text-2xl px-16 py-8 mb-6 w-full md:w-auto animate-glow">
              🔴 ENROLL NOW
              <ArrowRight className="h-8 w-8 ml-3" />
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Instant access</span>
              </div>
            </div>
          </div>


          {/* Countdown timer */}
          <div className="glass-card p-6 rounded-2xl max-w-md mx-auto animate-slide-up">
            <p className="text-sm text-muted-foreground mb-2">Offer expires in:</p>
            <div className="flex justify-center gap-4">
              {[
                { value: "02", label: "Hours" },
                { value: "47", label: "Minutes" },
                { value: "33", label: "Seconds" }
              ].map((time, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold text-2xl px-3 py-2 rounded-lg">
                    {time.value}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{time.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final urgency message */}
          <div className="mt-12 animate-slide-up">
            <p className="text-lg text-muted-foreground mb-4">
              Don't let this opportunity slip away.
            </p>
            <p className="text-xl font-bold">
              Join <span className="gradient-text">1000+ successful wellness coaches</span> who have transformed their business with our proven system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
