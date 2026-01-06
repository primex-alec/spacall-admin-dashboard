"use client"
import React from 'react';
import { Apple, Smartphone, Star } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-foreground text-background">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 pr-0 lg:pr-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Booking is Effortless
            </h2>
            <p className="text-white/70 text-lg mb-8 font-light max-w-lg">
              Our intuitive app connects you with top-tier professionals in seconds. 
              Browse profiles, read real reviews, and secure your appointment with a tap.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">1</div>
                <div>
                  <h4 className="text-xl font-medium text-white">Select Your Treatment</h4>
                  <p className="text-white/60 text-sm mt-1">Choose from a variety of modalities and durations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">2</div>
                <div>
                  <h4 className="text-xl font-medium text-white">Choose a Therapist</h4>
                  <p className="text-white/60 text-sm mt-1">View bios, ratings, and specialties to find your match.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">3</div>
                <div>
                  <h4 className="text-xl font-medium text-white">Relax & Restore</h4>
                  <p className="text-white/60 text-sm mt-1">Track your therapist&apos;s arrival and prepare to unwind.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-10">
              <button className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium">
                <Apple size={20} />
                <span>iOS Download</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors font-medium backdrop-blur-sm border border-white/10">
                <Smartphone size={20} />
                <span>Android Download</span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Phone Mockups */}
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[640px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-[-6deg] z-10 translate-x-8 lg:translate-x-0">
               {/* Screen Content 1 (Profile) */}
               <div className="relative h-full w-full bg-white overflow-hidden flex flex-col">
                  <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" className="h-2/3 w-full object-cover" alt="Therapist Profile" />
                  <div className="p-6 bg-white flex-1">
                     <h3 className="text-2xl font-serif font-bold text-gray-900">Sarah Jenkins</h3>
                     <p className="text-gray-500 text-sm mb-4">Deep Tissue Specialist • 4.9 <Star size={12} className="inline text-amber-400 fill-amber-400"/></p>
                     <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Sports</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Shiatsu</span>
                     </div>
                     <button className="mt-6 w-full py-3 bg-black text-white rounded-xl font-medium">Book Now</button>
                  </div>
               </div>
            </div>
            
            <div className="absolute top-12 left-0 lg:left-20 w-[260px] md:w-[300px] h-[540px] md:h-[600px] bg-white rounded-[3rem] border-8 border-gray-200 shadow-xl overflow-hidden transform rotate-[6deg] -z-0 opacity-80 hidden md:block">
               {/* Screen Content 2 (List) */}
               <div className="h-full w-full bg-gray-50 p-4 pt-12">
                  <div className="h-8 w-32 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="space-y-4">
                     {[1,2,3].map(i => (
                        <div key={i} className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex space-x-3">
                           <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                           <div className="flex-1 space-y-2">
                              <div className="h-4 w-24 bg-gray-200 rounded"></div>
                              <div className="h-3 w-16 bg-gray-100 rounded"></div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};