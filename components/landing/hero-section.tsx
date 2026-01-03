import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2B2A29] leading-tight">
              Sanctuary, Delivered.
            </h2>
            
            <p className="text-lg md:text-xl text-[#5C5B57] leading-relaxed">
              Experience five-star wellness in the comfort of your home. The Philippines premier on-demand spa platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#C5A059] hover:bg-[#B38F4A] text-white rounded-lg px-8 py-6 text-base">
                Book a Session
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 rounded-lg px-8 py-6 text-base"
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/5 border border-[#C5A059]/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Sparkles className="w-16 h-16 text-[#C5A059] mx-auto" />
                <p className="text-[#5C5B57] font-serif text-lg">Premium Spa Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
