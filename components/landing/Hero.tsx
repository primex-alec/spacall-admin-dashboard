"use client"

import React from 'react';
import { Apple, Smartphone, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Massage Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white pt-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="flex text-amber-300">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-white/90">Premium Service Award 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight">
            Sanctuary, <br />
            <span className="italic text-amber-100 font-light">Delivered.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed">
            Experience 5-star spa treatments in the comfort of your home, hotel, or office. 
            Licensed therapists, curated for excellence, available in as little as an hour.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group flex items-center space-x-3 bg-white text-black px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-48 justify-center">
              <Apple size={24} className="group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-[10px] font-semibold uppercase tracking-wide opacity-60">Download on the</div>
                <div className="text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
            
            <button className="group flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-48 justify-center">
              <Smartphone size={24} className="group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-[10px] font-semibold uppercase tracking-wide opacity-60">Get it on</div>
                <div className="text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};