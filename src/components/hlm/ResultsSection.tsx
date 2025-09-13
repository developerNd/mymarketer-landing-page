import { Badge } from "@/components/ui/badge";
import { Clock, MessageCircle, Users, Star } from "lucide-react";

const ResultsSection = () => {
  const mockMessages = [
    {
      name: "Priya Sharma",
      message: "Just enrolled in your wellness program! Can't wait to start my transformation journey. 💪",
      time: "2 min ago",
      amount: "₹15,000"
    },
    {
      name: "Rajesh Kumar",
      message: "Your nutrition coaching changed my life. Signing up for the premium package!",
      time: "15 min ago",
      amount: "₹25,000"
    },
    {
      name: "Anita Patel",
      message: "Finally found a wellness coach who understands my needs. Payment done! ✨",
      time: "1 hour ago",
      amount: "₹12,000"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 glass-card border-primary/30 text-lg py-2 px-6">
            <Clock className="h-4 w-4 mr-2" />
            In Just 7 Days...
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            You'll Start Attracting <br />
            <span className="gradient-text">Ready-To-Buy Clients</span> <br />
            Who Are Excited To Invest In Their Health With You!
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - explanation */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Inside this, we will reveal <span className="gradient-text">Top-Secret methods</span> which the Top 3% Wellness Coaches are using
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                (they never reveal it publicly...)
              </p>
              <p className="text-xl font-semibold mb-6">
                And once you apply these methods, your inbox could look like this:
              </p>
              <div className="flex items-center gap-3 text-primary">
                <MessageCircle className="h-6 w-6" />
                <span className="font-semibold">💌 Clients signing up & paying for your programs on autopilot.</span>
              </div>
            </div>
          </div>

          {/* Right side - mock inbox */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-lg">Client Messages</h4>
                <Badge variant="secondary" className="ml-auto">Live</Badge>
              </div>
              
              <div className="space-y-4">
                {mockMessages.map((msg, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 hover:bg-primary/10 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <span className="font-semibold">{msg.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{msg.time}</div>
                          <Badge variant="outline" className="text-primary border-primary/30 mt-1">
                            {msg.amount}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50 text-center">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  <span className="text-sm font-semibold">+47 new enrollment notifications today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
