import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { XCircle, Users, Brain, Target } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      icon: Users,
      title: "बार-बार chase करना पड़ता है",
      description: "Clients को repeatedly follow up करना पड़ता है क्योंकि trust नहीं बन पाता।"
    },
    {
      icon: Brain,
      title: "Clients 'सोच कर बताते हैं'",
      description: "Knowledge की कमी से clients में confidence नहीं आता और वो decisions delay करते हैं।"
    },
    {
      icon: Target,
      title: "End में burnout हो जाते हो",
      description: "Constant rejection और frustration से motivation खत्म हो जाता है।"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-destructive/20 text-destructive border-destructive/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              The Real Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-foreground">सच यह है कि...</span>
            </h2>
          </div>

          {/* Truth Statements */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="glass border-primary/30 p-6 sm:p-8 animate-slide-up">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl">❌</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Log Herbalife product पे trust करके नहीं खरीदते।
                </h3>
              </div>
            </Card>

            <Card className="glass border-accent/30 p-6 sm:p-8 animate-slide-up">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl sm:text-2xl">✅</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Wo आपकी knowledge और confidence पे trust करके खरीदते हैं।
                </h3>
              </div>
            </Card>
          </div>

          {/* The Knowledge Factor */}
          <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-accent/30 mb-12 sm:mb-16 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">
              अगर आप logically explain कर पाओ:
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">
                  क्यों यह nutrition work करता है
                </h4>
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">
                  कैसे अलग-अलग body types पे adapt होता है
                </h4>
              </div>
              
              <div className="text-center space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-glow" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground">
                  कितने दिनों में Result मिलेगा
                </h4>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <p className="text-xl sm:text-2xl font-bold text-accent">
                ...तो client automatically हाँ बोलेंगे।
              </p>
            </div>
          </div>

          {/* Pain Points Grid */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">
              और अगर knowledge नहीं है?
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {painPoints.map((point, index) => (
                <Card key={index} className="glass border-destructive/30 p-4 sm:p-6 hover:border-destructive/50 transition-all duration-300">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                      <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">
                      {point.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;