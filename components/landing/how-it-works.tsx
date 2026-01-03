import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, UserCheck, Smile } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2A29] mb-4">
            How It Works
          </h3>
          <p className="text-lg text-[#5C5B57] max-w-2xl mx-auto">
            Three simple steps to your perfect wellness experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="border-2 border-[#C5A059]/20 rounded-lg hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#C5A059]/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#2B2A29]">
                Select Treatment
              </h4>
              <p className="text-[#5C5B57] leading-relaxed">
                Choose from our curated menu of premium massage and spa treatments tailored to your needs.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 border-[#C5A059]/20 rounded-lg hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#C5A059]/10 rounded-full flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#2B2A29]">
                Choose Therapist
              </h4>
              <p className="text-[#5C5B57] leading-relaxed">
                Browse verified, certified professionals. View ratings, specialties, and availability in real-time.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 border-[#C5A059]/20 rounded-lg hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#C5A059]/10 rounded-full flex items-center justify-center">
                <Smile className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#2B2A29]">
                Relax
              </h4>
              <p className="text-[#5C5B57] leading-relaxed">
                Your therapist arrives with everything needed. Just relax and enjoy your personalized spa experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
