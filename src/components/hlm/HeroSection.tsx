import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium wellness coaching"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass-card p-4 rounded-2xl">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl">
          <Users className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-6 animate-slide-up glass-card border-primary/20">
          <Star className="h-4 w-4 mr-2 text-primary" />
          Trusted by 1000+ Wellness Coaches
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-up leading-tight">
          Give us <span className="gradient-text">30 min</span> & we will<br />
          Show You How To
        </h1>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary leading-tight">
            Scale Your Wellness Business To<br />
            <span className="text-6xl md:text-8xl gradient-text">₹10 Lakhs/Month</span>
            <br />PROFIT
          </h2>
        </div>

        <div className="animate-slide-up mb-8" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Using A Simple Client Attraction System
          </p>
          <p className="text-lg text-muted-foreground">
            … No offline event, No webinar, No offline activities.
          </p>
        </div>

        <div className="animate-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["✅ No COI", "✅ No Free Trials", "✅ No Force on People To Join"].map((item, index) => (
              <Badge key={index} variant="outline" className="glass-card border-primary/30 text-lg py-2 px-4">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="text-xl px-12 py-6 mb-8 btn-premium">
            Watch Free Training Now
            <ArrowRight className="h-6 w-6 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground">No signup required • Instant access</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
