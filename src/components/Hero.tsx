import React from "react";
import { ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Slow Zoom */}
      <div 
        className="absolute inset-0 z-0 animate-slow-zoom"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1646380920717-ff9e186bcf2d?auto=format&fit=crop&q=80&w=2000')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl animate-fade-in">
        <span className="text-sm uppercase tracking-[0.4em] mb-6 block font-medium">
          Save the Date
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 tracking-tighter">
          Sarah <span className="text-primary italic">&</span> Andrew
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-[0.2em] mb-12">
          SEPTEMBER 12, 2026 • NEW YORK CITY
        </p>
        
        <a 
          href="#rsvp"
          className="inline-block px-10 py-4 bg-primary text-white uppercase tracking-[0.2em] text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-elegant"
        >
          RSVP Now
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/60" size={32} strokeWidth={1} />
      </div>
    </section>
  );
};
