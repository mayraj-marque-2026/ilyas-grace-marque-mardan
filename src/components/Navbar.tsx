import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, MessageCircle, Calendar } from 'lucide-react';
import { VENUE_INFO } from '../data';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-[#3D0613] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#E2B755]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Muqam Chowk, Defence Colony, Mardan</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{VENUE_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${VENUE_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#E2B755] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium">{VENUE_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#D4AF37]/40">|</span>
            <a
              href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20am%20interested%20in%20booking%20a%20hall.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 bg-[#25D366] text-white px-2 py-0.5 rounded text-[11px] font-medium hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#500A1A]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D4AF37]/30'
            : 'bg-[#6B0F24] py-4 border-b border-[#D4AF37]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#500A1A] rounded-full flex items-center justify-center border border-[#FAF7F2]/10">
                <span className="font-serif-playfair text-xl sm:text-2xl font-bold text-[#E2B755]">
                  IG
                </span>
              </div>
            </div>
            <div>
              <span className="block font-serif-playfair text-lg sm:text-2xl font-bold tracking-tight text-[#FFFDF9] group-hover:text-[#E2B755] transition-colors">
                ILYAS GRACE
              </span>
              <span className="block text-[10px] sm:text-xs font-light tracking-[0.2em] text-[#D4AF37] uppercase -mt-1">
                Marquee & Event Hall
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#FAF7F2]/90 hover:text-[#E2B755] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="gold-button-gradient text-[#2C1810] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-md shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer border border-[#FFFDF9]/30"
            >
              <Calendar className="w-4 h-4 text-[#2C1810]" />
              <span>Book Event</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#FAF7F2] p-2 rounded-md focus:outline-none hover:bg-[#500A1A] border border-[#D4AF37]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E2B755]" /> : <Menu className="w-6 h-6 text-[#E2B755]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3D0613] border-t border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#FAF7F2] hover:text-[#E2B755] border-b border-[#FAF7F2]/5"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full gold-button-gradient text-[#2C1810] font-semibold text-sm py-3 rounded-md shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#2C1810]" />
                <span>Calculate & Book Package</span>
              </button>

              <a
                href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20want%20to%20inquire%20about%20event%20booking.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white font-medium text-sm py-2.5 rounded-md shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+92 313 8677761)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
