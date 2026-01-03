import { Shield, Award, CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[#3A3938] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Safety, Our Priority
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every therapist undergoes rigorous verification to ensure your peace of mind
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h4 className="font-serif text-xl md:text-2xl font-semibold">
              100% Verified
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Comprehensive background checks and identity verification for every therapist on our platform.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h4 className="font-serif text-xl md:text-2xl font-semibold">
              NCII Certified
            </h4>
            <p className="text-gray-300 leading-relaxed">
              All therapists hold valid National Certification Level II credentials from TESDA.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#C5A059]" />
            </div>
            <h4 className="font-serif text-xl md:text-2xl font-semibold">
              Background Checked
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Multi-step screening process including police clearance and professional reference verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
