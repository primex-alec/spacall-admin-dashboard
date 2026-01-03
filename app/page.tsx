import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { TrustSection } from "@/components/landing/trust-section";
import { RecruitmentSection } from "@/components/landing/recruitment-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TrustSection />
      <RecruitmentSection />
      <Footer />
    </div>
  );
}
