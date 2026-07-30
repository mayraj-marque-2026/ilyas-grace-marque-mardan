import React, { useState } from 'react';
import { Sparkles, Maximize2, Image as ImageIcon, FolderCheck } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'hall', label: 'Hall Interior' },
    { id: 'stage', label: 'Stage & Flower Decor' },
    { id: 'food', label: 'Food & Catering' },
    { id: 'entrance', label: 'Entrance & Parking' },
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory || (activeCategory === 'entrance' && (img.category === 'reception' || img.category === 'entrance')));

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#FFFDF9] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#800020] bg-[#800020]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Venue Visual Tour</span>
          </div>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#500A1A] mb-4">
            Photo Gallery & Venue Setups
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] mx-auto rounded-full mb-6" />
          <p className="text-base text-[#2C1810]/80">
            Explore authentic photos of our grand hall, regal stage setups, gourmet catering spreads, and red carpet entrances at Ilyas Grace Marquee Mardan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#500A1A] text-[#FCF6BA] shadow-md border border-[#D4AF37]'
                  : 'bg-white text-[#2C1810]/80 hover:bg-[#FAF7F2] border border-[#D4AF37]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-[#500A1A] rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-[#D4AF37]/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-64 sm:h-72"
            >
              {/* Image */}
              <img
                src={img.imagePath}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D0613]/90 via-[#500A1A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-[#3D0613]/80 border border-[#D4AF37]/50 flex items-center justify-center text-[#E2B755] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-[#E2B755] uppercase tracking-wider mb-1 block">
                    {img.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif-playfair text-lg font-bold text-[#FFFDF9] mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/80 line-clamp-2 font-light">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Easy Image Replacement Notice for Venue Owner */}
        <div className="bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl p-5 text-center max-w-2xl mx-auto text-xs sm:text-sm text-[#2C1810]/90 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3">
          <FolderCheck className="w-6 h-6 text-[#800020] shrink-0" />
          <div className="text-left">
            <span className="font-semibold text-[#500A1A] block mb-0.5">
              Client Photo Replacement Ready
            </span>
            <span>
              Drop your real event photos in <code className="bg-[#500A1A] text-[#E2B755] px-1.5 py-0.5 rounded text-xs">/public/images/</code> as <code className="text-[#800020] font-medium">hall-1.jpg</code>, <code className="text-[#800020] font-medium">stage-1.jpg</code>, <code className="text-[#800020] font-medium">food-1.jpg</code> to update this live gallery instantly!
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedIndex !== null ? filteredImages[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
