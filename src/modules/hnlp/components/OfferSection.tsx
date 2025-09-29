import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, Star, Clock, BookOpen, Users, Target } from "lucide-react";

const OfferSection = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Nutrition और body types का clear ज्ञान",
      description: "Scientific approach से समझें कि कौन सा nutrition किस body type के लिए perfect है"
    },
    {
      icon: Users,
      title: "Product logically explain करना",
      description: "Confidence के साथ clients को बताएं कि कैसे और क्यों Herbalife products काम करते हैं"
    },
    {
      icon: Target,
      title: "पहले 5 minute में ही trust जीतना",
      description: "First impression में ही client का भरोसा जीतने की techniques"
    },
    {
      icon: CheckCircle,
      title: "Real results देना clients को",
      description: "Repeat sales और referrals के लिए guaranteed results देने की strategy"
    },
    {
      icon: Star,
      title: "Deal close करना बिना chase किए",
      description: "Natural selling process जो clients को खुद से convince कर दे"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              The Ultimate Solution
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gradient">21 Days Nutrition</span>
              <br />
              <span className="text-foreground">Knowledge Program</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              सिर्फ 21 दिन में आप सीखोगे वो सब जो एक successful Herbalife Coach बनने के लिए जरूरी है।
            </p>
          </div>

          {/* Special Announcement */}
          <div className="glass p-6 sm:p-8 rounded-2xl border border-accent/30 mb-12 sm:mb-16 text-center animate-slide-up">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              यह कोई normal sales course नहीं है।
            </h3>
            <p className="text-lg sm:text-xl text-accent-gradient font-semibold">
              यह है असली nutrition knowledge जो आपके words को power देता है।
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12 animate-slide-up">
              सिर्फ 21 दिन में आप सीखोगे:
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {modules.map((module, index) => (
                <Card 
                  key={index} 
                  className="glass border-primary/30 p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <module.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">
                      ✅ {module.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="glass p-6 sm:p-8 lg:p-12 rounded-3xl border-2 border-accent/30 text-center mb-12 sm:mb-16 animate-slide-up animate-glow">
            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Transform Your Herbalife Business?
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl text-muted-foreground">
                  अब और clients lose मत करो, lack of knowledge की वजह से।
                </p>
                <p className="text-xl sm:text-2xl font-bold text-accent">
                  Time आ गया है, Herbalife industry में एक respected और trusted coach बनने का।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-lg sm:text-xl py-6 sm:py-8 px-8 sm:px-12 animate-bounce"
                  onClick={() => window.open('https://rzp.io/rzp/NjZxFD7y', '_blank')}
                >
                  👉 Join the 21-Day Program Now
                </Button>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">Lifetime Access</div>
                  <div className="text-base sm:text-lg font-bold text-accent">+ Bonus Materials</div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 animate-slide-up">
            <Card className="glass border-destructive/30 p-6 sm:p-8 text-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground">
                  ⚡ Seats limited हैं
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  सिर्फ serious Herbalife Coaches के लिए
                </p>
              </div>
            </Card>

            <Card className="glass border-accent/30 p-6 sm:p-8 text-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground">
                  ⏰ Delay मत करो
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  हर दिन का wait एक lost client है
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;