import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { VENUE_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Floating Call Button (Bottom Left) */}
      <a
        href={`tel:${VENUE_INFO.phoneRaw}`}
        className="fixed bottom-5 left-5 z-40 bg-[#500A1A] hover:bg-[#7A122B] text-white p-3.5 sm:p-4 rounded-full shadow-2xl border-2 border-[#D4AF37] transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Call venue directly"
      >
        <Phone className="w-6 h-6 text-[#E2B755]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2 text-[#FAF7F2]">
          Call Venue
        </span>
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20am%20interested%20in%20booking%20and%20packages.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1ebd59] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2.5 border-2 border-white group animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-100 -mb-0.5">
            Book on WhatsApp
          </span>
          <span className="text-xs font-extrabold font-sans">
            +92 313 8677761
          </span>
        </div>
      </a>
    </>
  );
};
