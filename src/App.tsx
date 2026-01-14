import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Countdown } from "@/components/Countdown";
import { RSVPForm } from "@/components/RSVPForm";
import { Toaster } from "@/components/ui/sonner";
import { Calendar, MapPin, Heart, Gift } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />

      {/* Countdown Section */}
      <Section className="bg-secondary/50">
        <div className="flex flex-col items-center">
          <Heart className="text-primary mb-8 animate-pulse" size={32} strokeWidth={1} />
          <h3 className="text-2xl md:text-3xl font-serif mb-12 text-center italic text-balance">
            Counting down the days until we say "I do"
          </h3>
          <Countdown />
        </div>
      </Section>

      {/* Our Story */}
      <Section id="story" subtitle="Our Story" title="The Journey to Always">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              It all started in a small coffee shop in Brooklyn. Sarah was struggling with a complex architectural drawing, and Andrew, noticing her frustration, offered his expertise (and a fresh latte).
            </p>
            <p>
              What began as a simple conversation about blueprints and beans soon turned into late-night walks across the bridge, weekends exploring art galleries, and a shared love for jazz and golden hour sunsets.
            </p>
            <p className="font-serif italic text-xl text-foreground/80">
              "Three years later, on a snowy evening in Central Park, Andrew asked Sarah to design their life together forever."
            </p>
            <p>
              She said yes before he could even finish the question. We can't wait to start this next chapter and celebrate with our closest friends and family.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden shadow-elegant transition-all duration-700 group-hover:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1646380909362-d252b5cabe61?auto=format&fit=crop&q=80&w=1000" 
                alt="Sarah and Andrew" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 -z-10" />
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-primary/10 -z-10" />
          </div>
        </div>
      </Section>

      {/* Events */}
      <Section id="events" subtitle="The Big Day" title="Events & Location" dark>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-background p-8 md:p-16 shadow-elegant flex flex-col items-center text-center border border-primary/5 group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
              <Calendar className="text-primary" size={32} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4">Wedding Ceremony</h3>
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-8">4:00 PM - 5:00 PM</p>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-serif text-xl text-foreground">St. Patrick's Cathedral</p>
              <p className="max-w-[200px]">5th Ave, New York, NY 10022</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary text-xs font-bold mt-8 uppercase tracking-widest hover:tracking-[0.2em] transition-all"
              >
                <MapPin size={14} className="mr-2" /> View on Map
              </a>
            </div>
          </div>

          <div className="bg-background p-8 md:p-16 shadow-elegant flex flex-col items-center text-center border border-primary/5 group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
              <Gift className="text-primary" size={32} strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-serif mb-4">Reception</h3>
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-8">6:30 PM - LATE</p>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-serif text-xl text-foreground">The Plaza Hotel</p>
              <p className="max-w-[200px]">768 5th Ave, New York, NY 10019</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary text-xs font-bold mt-8 uppercase tracking-widest hover:tracking-[0.2em] transition-all"
              >
                <MapPin size={14} className="mr-2" /> View on Map
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Registry */}
      <Section id="registry" subtitle="Gift Registry" title="For the New Home">
        <div className="text-center max-w-3xl mx-auto space-y-12">
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following stores:
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {["Amazon", "Crate & Barrel", "Williams Sonoma"].map((store) => (
              <a 
                key={store}
                href="#" 
                className="min-w-[200px] px-8 py-5 border border-primary/10 hover:border-primary hover:text-primary transition-all font-semibold uppercase tracking-[0.2em] text-xs shadow-sm hover:shadow-md"
              >
                {store}
              </a>
            ))}
          </div>
          <div className="pt-12 italic text-muted-foreground font-serif">
            Thank you for thinking of us!
          </div>
        </div>
      </Section>

      {/* RSVP Section */}
      <Section id="rsvp" subtitle="RSVP" title="Kindly Respond" dark>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-muted-foreground mb-12">
            Please respond by August 1st, 2026. We look forward to celebrating with you!
          </p>
          <RSVPForm />
        </div>
      </Section>

      <footer className="bg-foreground text-background py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl font-serif mb-6 tracking-tighter">S<span className="text-primary">&</span>A</h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-12 bg-primary/30" />
            <p className="text-sm uppercase tracking-[0.5em] text-primary font-bold">Forever & Always</p>
            <div className="h-px w-12 bg-primary/30" />
          </div>
          <p className="mt-12 text-xs opacity-40 uppercase tracking-widest">© 2026 Sarah & Andrew • September 12, 2026</p>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </main>
  );
}

export default App;
