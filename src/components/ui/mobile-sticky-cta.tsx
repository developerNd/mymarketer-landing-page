import React from 'react';
import { Button } from '@/components/ui/premium-button';
import { ArrowRight } from 'lucide-react';
import { trackLead } from '@/lib/facebook-tracking';

export const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between gap-3">
          {/* Price Section */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-black">₹99</span>
              <span className="text-base text-gray-500 line-through">₹999</span>
            </div>
            <span className="text-xs text-gray-600">Limited Time Offer</span>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="default"
            className="group flex-1 max-w-[200px]"
            onClick={() => {
              trackLead(
                {},
                {
                  content_name: 'Mobile Sticky CTA',
                  content_category: 'Network Marketing',
                  value: 99
                }
              );
              window.location.href = 'https://rzp.io/rzp/u2YpQe7';
            }}
          >
            <span className="text-sm font-bold">Register Now</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};
