import { Play, Clock, Users, Star } from "lucide-react";
import videoFile from '@/assets/VN20250911_125223.mp4';

const VideoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative group animate-fade-in">
            <div className="glass-card rounded-3xl overflow-hidden p-8 hover:scale-105 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl relative overflow-hidden border border-primary/20">
                {/* Video Element */}
                <video
                  src={videoFile}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Video stats overlay - Left side badges */}
                <div className="absolute top-2 left-2 z-30">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1.5 border border-white/20">
                    <div className="flex flex-col items-center gap-1 text-xs font-medium text-white">
                      <Clock className="h-3 w-3 text-white" />
                      <span>30min</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2 z-30">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1.5 border border-white/20">
                    <div className="flex flex-col items-center gap-1 text-xs font-medium text-white">
                      <Star className="h-3 w-3 text-white fill-white" />
                      <span>4.9★</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side badge */}
                <div className="absolute bottom-2 right-2 z-30">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1.5 border border-white/20">
                    <div className="flex flex-col items-center gap-1 text-xs font-medium text-white">
                      <Users className="h-3 w-3 text-white" />
                      <span>2.8K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action below video */}
          <div className="text-center mt-12 animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              Watch How <span className="gradient-text">Top Wellness Coaches</span> Are Scaling
            </h3>
            <p className="text-muted-foreground text-lg">
              Discover the exact system used by successful coaches to reach ₹10 Lakhs+ monthly profit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
