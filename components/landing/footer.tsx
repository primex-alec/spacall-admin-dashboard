import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#2B2A29] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-serif text-2xl font-bold text-[#C5A059] mb-4">Spacall</h5>
            <p className="text-gray-400 text-sm">
              Sanctuary, Delivered.
            </p>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4">Services</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Swedish Massage</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Deep Tissue</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Hot Stone</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Aromatherapy</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Company</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Press</Link></li>
              <li><Link href="/admin/dashboard" className="hover:text-[#C5A059] transition-colors">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Support</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Safety</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spacall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
