import React from 'react';
import { MessageCircle, Calendar, Sparkles, MapPin, Users, ShieldCheck, ChevronDown } from 'lucide-react';
import { VENUE_INFO } from '../data';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#2C1810] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Ilyas Grace Marquee Hall Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
        />
        {/* Deep Maroon & Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0613]/95 via-[#500A1A]/85 to-[#2C1810]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#2C1810]/40 to-[#1A0F0B]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Ornamental Crown Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FAF7F2]/10 backdrop-blur-md border border-[#D4AF37]/50 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-[#FCF6BA]">
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
          <span className="font-serif-playfair tracking-wide">Mardan's Gold Standard Event Hall</span>
          <span className="text-[#D4AF37] font-bold">|</span>
          <span className="font-serif-playfair text-[#E2B755]">مقام چوک، مردان</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-playfair text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFDF9] mb-4 leading-tight drop-shadow-md">
          ILYAS GRACE <span className="gold-text-gradient block sm:inline">MARQUEE</span>
        </h1>

        {/* Urdu Calligraphy Touch */}
        <p className="font-serif-playfair text-xl sm:text-3xl text-[#E2B755] mb-6 font-medium tracking-wide">
          الیاس گریس مارکی اینڈ ایونٹ ہال
        </p>

        {/* Tagline */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#FAF7F2]/90 font-light leading-relaxed mb-8">
          Crafting unforgettable <span className="text-[#FCF6BA] font-semibold">Barat</span>,{' '}
          <span className="text-[#FCF6BA] font-semibold">Walima</span>, and{' '}
          <span className="text-[#FCF6BA] font-semibold">Corporate Expos</span> in Mardan. Featuring spacious grand halls, royal stage setups, separate male & female receptions, and authentic Pakistani catering.
        </p>

        {/* Highlight Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-[#FAF7F2]/90">
          <div className="flex items-center gap-2 bg-[#3D0613]/70 border border-[#D4AF37]/30 rounded-lg px-3 py-2 shadow-sm">
            <Users className="w-4 h-4 text-[#D4AF37]" />
            <span>Capacity: 200 – 1500+ Guests</span>
          </div>
          <div className="flex items-center gap-2 bg-[#3D0613]/70 border border-[#D4AF37]/30 rounded-lg px-3 py-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Separate Male & Female Halls</span>
          </div>
          <div className="flex items-center gap-2 bg-[#3D0613]/70 border border-[#D4AF37]/30 rounded-lg px-3 py-2 shadow-sm">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Defence Colony, Mardan</span>
          </div>
        </div>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Primary WhatsApp CTA */}
          <a
            href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20would%20like%20to%20check%20hall%20availability%20and%20pricing%20for%20my%20event.`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base px-6 py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            <span>Book Now on WhatsApp</span>
          </a>

          {/* Secondary Calculator Button */}
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto gold-button-gradient text-[#2C1810] font-semibold text-base px-6 py-3.5 rounded-lg shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer border border-[#FFFDF9]/40"
          >
            <Calendar className="w-5 h-5 text-[#2C1810]" />
            <span>Get Instant Package Quote</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-1 text-[#D4AF37]/80 hover:text-[#E2B755] transition-colors">
          <a href="#about" className="text-xs tracking-widest uppercase flex flex-col items-center gap-1">
            <span>Explore Venue</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
