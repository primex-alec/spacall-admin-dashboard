import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-[#C5A059]/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#C5A059]">
            Spacall
          </h1>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-[#5C5B57] hover:text-[#C5A059] transition-colors">
              Services
            </Link>
            <Link href="#therapists" className="text-sm font-medium text-[#5C5B57] hover:text-[#C5A059] transition-colors">
              Therapists
            </Link>
            <Link href="#apply" className="text-sm font-medium text-[#5C5B57] hover:text-[#C5A059] transition-colors">
              Apply
            </Link>
          </div>

          <Button className="bg-[#C5A059] hover:bg-[#B38F4A] text-white rounded-lg px-6 md:px-8">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
