import { Badge } from "@/components/ui/badge";
import { Gift, FileText, Video, Users, Sparkles } from "lucide-react";
import ProfileSlider from "./ProfileSlider";

const BonusesSection = () => {
  const bonuses = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "High-converting wellness SALES CLOSING proven script",
      value: "₹8,999",
      description: "Word-for-word scripts that convert prospects into paying clients"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "100+ Instagram reels script for organic marketing",
      value: "₹9,999", 
      description: "Ready-to-use content that attracts your ideal wellness clients"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Private Wellness Coach Community for networking & support",
      value: "₹5,999",
      description: "Connect with successful coaches and get ongoing guidance"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 glass-card border-primary/30 text-lg py-2 px-6">
            <Gift className="h-4 w-4 mr-2" />
            Exclusive Bonuses
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Worth ₹24,997</span> – FREE Today
          </h2>
          <p className="text-xl text-muted-foreground">
            When you enroll, you'll also receive:
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Bonus badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-primary/20 border-primary text-primary font-bold">
                    Worth {bonus.value}
                  </Badge>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex-shrink-0 animate-glow">
                    {bonus.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {bonus.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total value highlight */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              Total Bonus Value: <span className="gradient-text text-4xl">₹24,997</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-4">
              Yours absolutely <span className="text-primary font-bold">FREE</span> when you enroll today
            </p>
            <Badge variant="outline" className="bg-primary/20 border-primary text-primary text-lg py-2 px-6">
              <Gift className="h-4 w-4 mr-2" />
              Limited Time Offer
            </Badge>
          </div>
        </div>

        {/* Profile Slider Section */}
        <div className="my-16">
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Some of our clients…</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Join thousands of successful professionals who transformed their careers
            </p>
          </div>
          <ProfileSlider />
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
