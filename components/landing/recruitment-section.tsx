import { Button } from "@/components/ui/button";
import { Award, Check } from "lucide-react";

export function RecruitmentSection() {
  return (
    <section id="apply" className="py-16 md:py-24 bg-[#2B2A29] text-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Join the Spacall Collective.
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are looking for NCII-certified professionals dedicated to the art of wellness. Enjoy higher earnings, safety-first protocols, and complete control over your schedule.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#2B2A29]" strokeWidth={3} />
                </div>
                <span className="text-lg text-white font-medium">Verified Clients</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#2B2A29]" strokeWidth={3} />
                </div>
                <span className="text-lg text-white font-medium">Premium Rates</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#2B2A29]" strokeWidth={3} />
                </div>
                <span className="text-lg text-white font-medium">Instant Payouts</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#2B2A29] rounded-lg px-8 py-6 text-base font-semibold transition-all"
              >
                Apply as a Therapist
              </Button>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#C5A059]/30 to-[#C5A059]/10 border-2 border-[#C5A059]/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 px-6">
                <Award className="w-16 h-16 text-[#C5A059] mx-auto" />
                <p className="font-serif text-lg text-[#C5A059]">Professional Therapist</p>
                <p className="text-sm text-gray-400">Spacall uniform & wellness kit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
