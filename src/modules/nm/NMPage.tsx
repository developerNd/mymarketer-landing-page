import './styles/nm-theme.css';
import { Card } from "@/components/ui/card";
import { NMButton } from "./components/NMButton";
import NMBottomNav from "./components/NMBottomNav";
import { CheckCircle, Zap, Target, TrendingUp, Users, Rocket, Clock, Star, ArrowRight, Play } from "lucide-react";
import heroImage from "./assets/hero-marketer.jpg";
import teamImage from "./assets/team-building.jpg";
import automationImage from "./assets/automation-system.jpg";

const NMPage = () => {
  return (
    <div className="nm-module min-h-screen nm-bg-background nm-text-foreground overflow-x-hidden pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-0 sm:px-6 lg:px-8 nm-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-nm-bg-background via-nm-bg-background-secondary to-nm-bg-background-tertiary" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 nm-bg-primary-20 rounded-full blur-3xl nm-animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 nm-bg-success-10 rounded-full blur-3xl nm-animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          <div className="text-center lg:text-left nm-animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 nm-hindi-text" style={{ lineHeight: '1.3em' }}>
              सिर्फ <span className="nm-text-gradient-primary">90 Days</span> में Build करो{" "}
              <span className="nm-text-gradient-success">100+ Network Marketers</span> की Team
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl nm-text-muted-foreground mb-3 sm:mb-4 nm-leading-relaxed">
              <strong className="nm-text-warning">Without Chasing or Begging Anyone</strong>
            </p>
            <p className="text-base sm:text-lg lg:text-xl nm-text-muted-foreground mb-6 sm:mb-8 nm-leading-relaxed">
              सोचो अगर अगले 3 Months में तुम्हारी एक fast-growing और thriving Team हो जाए—
              <br />❌ बिना endless rejections
              <br />❌ बिना awkward pitching  
              <br />❌ बिना दोस्तों और Family के पीछे भागे।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <NMButton variant="hero" size="xxl" className="group text-sm sm:text-base lg:text-lg" href="https://rzp.io/rzp/u2YpQe7">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 group-hover:scale-110 transition-transform" />
                Yes! I'm Ready to Build My Team
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </NMButton>
            </div>
          </div>
          
          <div className="relative nm-animate-scale-in mt-8 lg:mt-0">
            <div className="nm-glass-card-strong p-4 sm:p-6 lg:p-8 nm-hover-lift">
              <img 
                src={heroImage} 
                alt="Successful Network Marketer Building Team" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 nm-glass-card p-2 sm:p-4 nm-animate-glow">
                <div className="flex items-center gap-1 sm:gap-2 nm-text-success font-bold text-xs sm:text-sm">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="hidden sm:inline">100+ Team Members</span>
                  <span className="sm:hidden">100+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-0 sm:px-6 lg:px-8 nm-bg-background-secondary">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 nm-animate-fade-in-up nm-leading-tight nm-hindi-text text-center" style={{ lineHeight: '1.3em' }}>
            ❌ कठिन सच्चाई जो अधिकतर <span className="nm-text-gradient-primary">Network Marketers</span> Face करते हैं
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="nm-glass-card-strong p-6 sm:p-8 nm-hover-lift text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 nm-bg-destructive-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 nm-text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">📞 Calls Ignore होने लगती हैं</h3>
              <p className="text-sm sm:text-base nm-text-muted-foreground">लोग आपकी calls नहीं उठाते और messages का reply नहीं देते</p>
            </Card>
            
            <Card className="nm-glass-card-strong p-6 sm:p-8 nm-hover-lift text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 nm-bg-destructive-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 nm-text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">🤷‍♂️ "सोचकर बताऊंगा" का जवाब</h3>
              <p className="text-sm sm:text-base nm-text-muted-foreground">लोग बोलते हैं "सोचकर बताऊंगा" और वापस कभी नहीं आते</p>
            </Card>
            
            <Card className="nm-glass-card-strong p-6 sm:p-8 nm-hover-lift text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 nm-bg-destructive-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 nm-text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">⏳ दिन हफ़्तों में बदल जाते हैं</h3>
              <p className="text-sm sm:text-base nm-text-muted-foreground">बिना नए recruits के और धीरे-धीरे लगता है सपना दूर जा रहा है</p>
            </Card>
          </div>
          
          <div className="nm-glass-card-strong p-8 lg:p-12 nm-animate-fade-in-up">
            <p className="text-2xl lg:text-3xl font-bold mb-6">
              <span className="nm-text-warning">पर यह आपकी गलती नहीं है।</span>
            </p>
            <p className="text-xl nm-text-muted-foreground">
              आपको वही पुराने तरीक़े बताए गए जो अब काम ही नहीं करते।
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-0 sm:px-6 lg:px-8 nm-bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 nm-animate-fade-in-up nm-leading-tight nm-hindi-text">
              🔑 सच क्या है आज की <span className="nm-text-gradient-success">Team Building</span> का?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl nm-text-muted-foreground mb-6 sm:mb-8 nm-leading-relaxed nm-hindi-text">
              पुराने chasing के तरीक़े ख़त्म।
            </p>
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold nm-text-gradient-primary mb-6 sm:mb-8 nm-leading-tight nm-hindi-text">
              नया तरीक़ा है → Attraction-based Digital Marketing।
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="nm-animate-fade-in-up">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 nm-glass-card p-4 sm:p-6 nm-hover-lift">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 nm-bg-success-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 nm-text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">आप उन्हें Chase नहीं करते</h3>
                    <p className="text-sm sm:text-base nm-text-muted-foreground">वो आपको Chase करते हैं</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 nm-glass-card p-4 sm:p-6 nm-hover-lift">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 nm-bg-success-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 nm-text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">आप उन्हें convince नहीं करते</h3>
                    <p className="text-sm sm:text-base nm-text-muted-foreground">वो पहले से convinced होते हैं</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 nm-glass-card p-4 sm:p-6 nm-hover-lift">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 nm-bg-success-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 nm-text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">"pls Join कर लो" की जगह</h3>
                    <p className="text-sm sm:text-base nm-text-muted-foreground">आप सुनते हो → "बताओ कैसे Join करूँ आपकी Team?"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative nm-animate-scale-in">
              <img 
                src={automationImage} 
                alt="Digital Marketing Automation System" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 nm-glass-card p-4 nm-animate-float">
                <div className="flex items-center gap-2 nm-text-primary font-bold">
                  <Star className="w-5 h-5" />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section className="py-24 px-0 sm:px-4 nm-bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 nm-animate-fade-in-up">
              🚀 मेरा <span className="nm-text-gradient-primary">Proven System</span> for Explosive Team Growth
            </h2>
            <p className="text-xl nm-text-muted-foreground mb-8">
              मैं महत्वाकांक्षी Network Marketers की मदद करता हूँ सिर्फ 90 Days में 100+ Members की Team बनाने में
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="nm-glass-card-strong p-8 nm-hover-lift text-center">
              <div className="w-16 h-16 nm-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Magnetic Messaging</h3>
              <p className="nm-text-muted-foreground">जिससे आपका Content सही Prospects को तुरंत खींच ले</p>
            </Card>
            
            <Card className="nm-glass-card-strong p-8 nm-hover-lift text-center">
              <div className="w-16 h-16 nm-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Automation</h3>
              <p className="nm-text-muted-foreground">ताकि आप Chasing कम और Closing ज़्यादा करो</p>
            </Card>
            
            <Card className="nm-glass-card-strong p-8 nm-hover-lift text-center">
              <div className="w-16 h-16 nm-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversion Secrets</h3>
              <p className="nm-text-muted-foreground">ताकि लोग सिर्फ सुनें नहीं, Action लें</p>
            </Card>
            
            <Card className="nm-glass-card-strong p-8 nm-hover-lift text-center">
              <div className="w-16 h-16 nm-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Leadership Formula</h3>
              <p className="nm-text-muted-foreground">ताकि आपकी Team आपको Copy करके और तेज़ Grow करे</p>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="nm-glass-card-strong p-8 lg:p-12 nm-animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 nm-text-gradient-success nm-leading-tight">
                यह System आपके Business को रेंगने से → EXPLODE तक ले आता है।
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-0 sm:px-4 nm-bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 nm-animate-fade-in-up">
              📈 सोचो आपको अगले <span className="nm-text-gradient-primary">90 Days</span> कैसे होंगे…
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative nm-animate-scale-in">
              <img 
                src={teamImage} 
                alt="Team Building Success Journey" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8 nm-animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 nm-bg-destructive-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold nm-text-destructive">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Day 1</h3>
                  <p className="nm-text-muted-foreground">Frustrated और Chasing से थके हुए।</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 nm-bg-warning-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold nm-text-warning">30</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Day 30</h3>
                  <p className="nm-text-muted-foreground">एक Consistent Flow में Prospects आपको Contact करना शुरू।</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 nm-bg-primary-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold nm-text-primary">60</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Day 60</h3>
                  <p className="nm-text-muted-foreground">Team अपने आप Grow कर रही है—लोग नए लोगों को ला रहे हैं।</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 nm-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">90</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Day 90</h3>
                  <p className="nm-text-muted-foreground">आपके पास एक 100+ Member Team, उत्साहित, प्रेरित और पूरे Control में।</p>
                </div>
              </div>
              
              <div className="nm-glass-card p-6 mt-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5" />
                    <span>कोई भीख नहीं।</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5" />
                    <span>कोई Endless Follow-ups नहीं।</span>
                  </div>
                  <div className="flex items-center gap-2 nm-text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold">सिर्फ Predictable Growth।</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 px-0 sm:px-4 nm-bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 nm-animate-fade-in-up">
            🌟 मुझे क्यों सुनोगे <span className="nm-text-gradient-primary">आप</span> ?
          </h2>
          
          <div className="nm-glass-card-strong p-8 lg:p-12 mb-12 nm-animate-fade-in-up">
            <p className="text-2xl lg:text-3xl font-bold mb-6">
              मैं Theory नहीं बताऊंगा।
            </p>
            <p className="text-xl nm-text-muted-foreground mb-8">
              मैं एक Ai Digital Marketing Expert हूँ जिन्होंने <span className="nm-text-gradient-success font-bold">589+ Network Marketers</span> को 
              Grind से निकालकर असली Leadership में लाया है।
            </p>
            <p className="text-lg nm-text-muted-foreground mb-8">
              मुझे पता है क्या काम करता है—और क्या बिलकुल नहीं।
            </p>
            <p className="text-xl font-bold nm-text-gradient-primary">
              और अब, मैं यह System आपको देना चाहता हूँ।
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="nm-glass-card p-6 nm-hover-lift">
              <div className="text-3xl font-bold nm-text-gradient-success mb-2">589+</div>
              <div className="nm-text-muted-foreground">Successful Marketers</div>
            </div>
            <div className="nm-glass-card p-6 nm-hover-lift">
              <div className="text-3xl font-bold nm-text-gradient-primary mb-2">90%</div>
              <div className="nm-text-muted-foreground">Success Rate</div>
            </div>
            <div className="nm-glass-card p-6 nm-hover-lift">
              <div className="text-3xl font-bold nm-text-gradient-success mb-2">5+</div>
              <div className="nm-text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-0 sm:px-6 lg:px-8 nm-bg-background relative overflow-hidden">
        <div className="absolute inset-0 nm-gradient-hero opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 nm-animate-fade-in-up nm-hindi-text text-center" style={{ lineHeight: '1.3em' }}>
            ⚡ तैयार हो अपनी <span className="nm-text-gradient-primary">Dream Team</span> Build करने के लिए?
          </h2>
          
          <div className="nm-glass-card-strong p-4 sm:p-8 lg:p-12 mb-8 sm:mb-12 nm-animate-fade-in-up">
            <p className="text-lg sm:text-xl lg:text-2xl nm-text-muted-foreground mb-4 sm:mb-6 nm-hindi-text text-center">
              कठिन रास्ता आप पहले ही Try कर चुके।
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 nm-text-gradient-success nm-leading-tight nm-hindi-text text-center">
              अब Smart Way का समय है।
            </p>
            <p className="text-base sm:text-lg nm-text-muted-foreground mb-6 sm:mb-8 nm-leading-relaxed nm-hindi-text text-center">
              अगर आप Seriously अपनी Team FAST Build करना चाहते हो—<span className="nm-text-warning font-bold">100+ Members in just 90 Days</span>—यह आपका Chance है।
            </p>
            <p className="text-lg sm:text-xl nm-text-muted-foreground mb-6 sm:mb-8 nm-leading-relaxed nm-hindi-text text-center">
              पुराने तरीक़ों के साथ एक और दिन बर्बाद मत करो।
            </p>
            <p className="text-xl sm:text-2xl font-bold nm-text-gradient-primary mb-8 sm:mb-12 nm-leading-tight nm-hindi-text text-center">
              कल के Leaders वही होते हैं जो Action लेते हैं आज।
            </p>
            
            <NMButton variant="hero" size="xxl" className="animate-glow group w-full sm:w-auto" href="https://rzp.io/rzp/u2YpQe7">
              <Rocket className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">🔥 Yes! I'm Ready to Build My Team</span>
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
            </NMButton>
          </div>
          
          <p className="text-xs sm:text-sm nm-text-muted-foreground px-4 sm:px-0">
            Join 589+ successful network marketers who transformed their business with our proven system
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-nm-bg-background to-transparent" />
      </section>
      
      {/* Bottom Navigation */}
      <NMBottomNav />
    </div>
  );
};

export default NMPage;
