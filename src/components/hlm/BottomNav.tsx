import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card shadow-2xl border-t border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left Side - Pricing and Text */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">₹99</span>
              <span className="text-lg text-destructive line-through">₹999</span>
            </div>
            <div className="text-xs text-muted-foreground font-medium">
              Limited Time Offer - Save 90%
            </div>
          </div>

          {/* Right Side - CTA and Badge */}
          <div className="flex flex-col items-end gap-1">
            <Badge className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
              10 Seats Left
            </Badge>
            <Button 
              size="sm" 
              className="font-bold px-6 py-2 rounded-lg text-sm btn-premium"
            >
              ENROLL NOW
            </Button>
            <div className="text-xs text-muted-foreground font-medium">
              + Unbelievable Bonuses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
