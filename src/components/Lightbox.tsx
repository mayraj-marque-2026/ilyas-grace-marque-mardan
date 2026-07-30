import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../types';
import { VENUE_INFO } from '../data';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={item.imagePath}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-[#D4AF37]/40 mb-4"
        />

        <div className="text-center text-white max-w-xl px-4">
          <h3 className="font-serif-playfair text-xl sm:text-2xl font-bold text-[#E2B755] mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-light mb-3">
            {item.description}
          </p>
          <a
            href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20saw%20this%20setup%20in%20your%20gallery%20(${encodeURIComponent(item.title)})%20and%20want%20to%20inquire%20about%20booking.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs px-4 py-2 rounded-md hover:bg-[#1ebd59] transition-colors font-medium shadow"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire About This Decor on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
