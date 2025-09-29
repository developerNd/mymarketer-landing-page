import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Epic background animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="animate-float absolute top-20 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="animate-float absolute top-40 right-20 w-32 h-32 bg-accent/30 rounded-full blur-2xl animation-delay-2000"></div>
        <div className="animate-float absolute bottom-20 left-1/3 w-48 h-48 bg-primary-glow/30 rounded-full blur-4xl animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Emotional Hook */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Your Why
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-foreground">आप Herbalife join इसलिए हुए थे</span>
              <br />
              <span className="text-gradient">कि आप लोगों की life change कर सको</span>
            </h2>
          </div>

          {/* The Reality Check */}
          <Card className="glass border-2 border-accent/30 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 text-center animate-slide-up">
            <div className="space-y-6 sm:space-y-8">
              <Target className="w-16 h-16 sm:w-20 sm:h-20 text-accent mx-auto" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                लेकिन बिना सही knowledge के कैसे करोगे?
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                हर दिन आप देखते हैं कि clients को help की जरूरत है, लेकिन आप properly guide नहीं कर पाते। 
                यह frustrating है, ना?
              </p>
            </div>
          </Card>

          {/* The Promise */}
          <div className="glass p-6 sm:p-8 lg:p-12 rounded-3xl border-2 border-primary/30 mb-12 sm:mb-16 animate-slide-up animate-glow">
            <div className="text-center space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                👉 इस 21 Days Program के बाद
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Knowledge</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    वो power होगी जो deals close करेगी
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Income</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    आपकी income बढ़ाएगी
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">Impact</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    लोगों की जिंदगी change करेगी
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="glass border-destructive/30 p-6 sm:p-8 animate-slide-up">
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                  अगर आज action नहीं लिया...
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-muted-foreground">• कल भी same frustration होगा</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• Clients का trust नहीं मिलेगा</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• Income growth रुक जाएगा</p>
                  <p className="text-sm sm:text-base text-muted-foreground">• Dreams incomplete रह जाएंगे</p>
                </div>
              </div>
            </Card>

            <Card className="glass border-accent/30 p-6 sm:p-8 animate-slide-up animate-glow">
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                  लेकिन अगर आज start करा...
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-accent font-medium">• 21 दिन में confident coach बनोगे</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• Clients automatically trust करेंगे</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• 10x income growth मिलेगा</p>
                  <p className="text-sm sm:text-base text-accent font-medium">• असली impact create करोगे</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6 sm:space-y-8 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              The Choice is Yours
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg sm:text-xl lg:text-2xl py-6 sm:py-8 px-8 sm:px-12 lg:px-16 animate-bounce"
                onClick={() => window.open('https://rzp.io/rzp/NjZxFD7y', '_blank')}
              >
                Yes! मुझे Knowledge चाहिए — Enroll Now
              </Button>
              
              <div className="text-center">
                <div className="text-xs sm:text-sm text-muted-foreground">Limited Time Offer</div>
                <div className="text-base sm:text-lg font-bold text-accent">21 Days to Transform Your Business</div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't let another day pass feeling helpless when clients ask tough questions. 
              <span className="text-accent font-semibold"> Transform yourself into the confident coach you were meant to be.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;