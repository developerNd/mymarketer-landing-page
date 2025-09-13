import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import local slider images
import slideImg1 from '@/assets/slider/silde-img-1.jpg';
import slideImg2 from '@/assets/slider/silde-img-2.jpg';
import slideImg3 from '@/assets/slider/silde-img-3.jpg';
import slideImg4 from '@/assets/slider/silde-img-4.jpg';
import slideImg5 from '@/assets/slider/silde-img-5.jpg';

interface ProfileSliderProps {
  className?: string;
}

const ProfileSlider: React.FC<ProfileSliderProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Local slider images array
  const sliderImages = [slideImg1, slideImg2, slideImg3, slideImg4, slideImg5];

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const currentImage = sliderImages[currentIndex];

  return (
    <div className={cn("relative w-full", className)}>
      {/* Mobile: Full width layout */}
      <div className="block md:hidden">
        <div className="w-full h-[400px] relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-xl bg-gray-100">
          <img
            src={currentImage}
            alt={`Slider image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
          
          {/* Mobile Navigation Arrows - Overlay */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProfile}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg rounded-full w-10 h-10 border border-gray-200 z-10"
            aria-label="Previous profile"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProfile}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg rounded-full w-10 h-10 border border-gray-200 z-10"
            aria-label="Next profile"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Desktop: Side-by-side layout */}
      <div className="hidden md:flex items-center gap-4">
        {/* Left Navigation Arrow - Outside */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevProfile}
          className="bg-white hover:bg-gray-50 text-gray-700 shadow-lg rounded-full w-12 h-12 border border-gray-200"
          aria-label="Previous profile"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Full Width Image Card with Border and Shadow */}
        <div className="flex-1 h-[600px] relative overflow-hidden rounded-xl border-2 border-gray-200 shadow-xl bg-gray-100">
          <img
            src={currentImage}
            alt={`Slider image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Navigation Arrow - Outside */}
        <Button
          variant="ghost"
          size="icon"
          onClick={nextProfile}
          className="bg-white hover:bg-gray-50 text-gray-700 shadow-lg rounded-full w-12 h-12 border border-gray-200"
          aria-label="Next profile"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileSlider;
