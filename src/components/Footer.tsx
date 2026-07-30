import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Heart } from 'lucide-react';
import { VENUE_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C1810] text-[#FAF7F2] pt-16 pb-8 border-t-2 border-[#D4AF37]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Urdu Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#500A1A] border border-[#D4AF37] flex items-center justify-center font-serif-playfair text-xl font-bold text-[#E2B755]">
                IG
              </div>
              <div>
                <span className="block font-serif-playfair text-xl font-bold text-[#FFFDF9]">
                  ILYAS GRACE
                </span>
                <span className="block text-[10px] tracking-widest text-[#D4AF37] uppercase -mt-1">
                  Marquee & Event Hall
                </span>
              </div>
            </div>

            <p className="font-serif-playfair text-lg text-[#E2B755]">
              الیاس گریس مارکی اینڈ ایونٹ ہال
            </p>

            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Mardan's premier wedding hall for Barat, Walima, corporate expos, and royal family gatherings. Dedicated separate halls for ladies & gents.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-playfair text-base font-bold text-[#E2B755] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#E2B755] transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E2B755] transition-colors">About Venue & Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E2B755] transition-colors">Photo Gallery & Stage Decor</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#E2B755] transition-colors">Wedding & Event Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#E2B755] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E2B755] transition-colors">Google Map & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Events */}
          <div className="space-y-3">
            <h4 className="font-serif-playfair text-base font-bold text-[#E2B755] uppercase tracking-wider">
              Services & Events
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>Barat Ceremony (بارات)</li>
              <li>Walima Reception (ولیمہ)</li>
              <li>Engagement & Mangni (منگنی)</li>
              <li>Corporate Expos & Gatherings</li>
              <li>Royal Pakistani Catering</li>
              <li>Separate Female Reception Desk</li>
            </ul>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-playfair text-base font-bold text-[#E2B755] uppercase tracking-wider">
              Venue Location
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{VENUE_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${VENUE_INFO.phoneRaw}`} className="hover:text-[#E2B755] font-bold text-white">
                  {VENUE_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{VENUE_INFO.hours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <span className="text-[#E2B755] font-semibold">Ilyas Grace Marquee</span>. All rights reserved. Mardan, KPK, Pakistan.
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>Built with elegance for Mardan's finest celebrations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
