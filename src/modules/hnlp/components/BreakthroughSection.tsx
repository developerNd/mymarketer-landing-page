import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, BookOpen, TrendingUp, MessageSquareText } from "lucide-react";

const BreakthroughSection = () => {
  return (
    <section className="py-16 sm:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float absolute top-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="animate-float absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              The Breakthrough Moment
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-gradient">मैंने decide किया</span>
            </h2>
          </div>

          {/* Decision Card */}
          <Card className="glass border-primary/30 p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 animate-slide-up">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                अगर मुझे लोगों का trust चाहिए…
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                मुझे Human body type, actions, और nutrition में बहुत deep knowledge रखना होगा।
              </p>
            </div>
          </Card>

          {/* The Transformation Story */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 animate-slide-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                जब मैंने nutrition properly पढ़ना start किया,
                <span className="text-accent"> सब change हो गया।</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="glass p-4 sm:p-6 rounded-xl border border-accent/20">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    पहली बार जब client ने बोला: 
                    <span className="text-foreground font-semibold block mt-2">
                      "Why should I trust you with my health?"
                    </span>
                  </p>
                </div>
                
                <div className="glass p-4 sm:p-6 rounded-xl border border-primary/20">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    मैंने confidently science और logic explain किया।
                    <span className="text-primary font-semibold block mt-2">
                      और तुरंत उन्होंने sign-up कर लिया।
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in mt-8 lg:mt-0">
              <Card className="glass border-accent/30 p-6 sm:p-8">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    तब समझ आया:
                  </h4>
                  <p className="text-lg sm:text-xl text-accent-gradient font-semibold">
                    Knowledge के सामने कोई argument टिकता नहीं।
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Real Client Interaction */}
          <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-primary/30 animate-slide-up">
            <div className="text-center mb-6 sm:mb-8">
              <MessageSquareText className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Real Client Conversation Example
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/20 p-4 sm:p-6 rounded-xl">
                <p className="text-base sm:text-lg font-medium text-foreground">
                  <span className="text-destructive">Client:</span> "Why should I trust you with my health?"
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-4 sm:p-6 rounded-xl">
                <p className="text-base sm:text-lg font-medium text-foreground">
                  <span className="text-primary">Old Me:</span> "Sir, Herbalife is a very good company... products are natural..."
                  <span className="text-muted-foreground block mt-2 text-sm sm:text-base italic">
                    (Generic script, no confidence, no sale)
                  </span>
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/20 p-4 sm:p-6 rounded-xl">
                <p className="text-base sm:text-lg font-medium text-foreground">
                  <span className="text-accent">New Me:</span> "Based on your BMI of 28.5 and sedentary lifestyle, your body needs 1,800 calories daily. Our Formula 1 provides 170 calories with 24 essential nutrients, creating a 400-calorie deficit that leads to 0.5kg weekly fat loss while preserving muscle mass..."
                  <span className="text-accent block mt-2 text-sm sm:text-base font-semibold">
                    ✅ Instant trust, immediate sign-up!
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <Button variant="premium" size="lg" className="text-base sm:text-lg">
                मुझे भी यह Knowledge चाहिए
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughSection;