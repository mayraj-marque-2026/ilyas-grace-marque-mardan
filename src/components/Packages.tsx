import React from 'react';
import { Sparkles, Check, Utensils, Star, Calendar } from 'lucide-react';
import { PACKAGES } from '../data';

interface PackagesProps {
  onOpenBookingModal: (packageId?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="packages" className="py-20 bg-[#FAF7F2] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#800020] bg-[#800020]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Wedding & Event Packages</span>
          </div>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#500A1A] mb-4">
            Tailored Services for Every Celebration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] mx-auto rounded-full mb-6" />
          <p className="text-base text-[#2C1810]/80">
            Choose from our curated wedding packages or easily customize catering and decor options to match your guest count and budget.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#500A1A] text-white shadow-2xl border-2 border-[#D4AF37] transform lg:-translate-y-2'
                  : 'bg-white text-[#2C1810] shadow-xl border border-[#D4AF37]/30 hover:border-[#D4AF37]'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-button-gradient text-[#2C1810] font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/50">
                  <Star className="w-3.5 h-3.5 fill-[#2C1810]" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b pb-6 mb-6 border-current/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`font-serif-playfair text-2xl font-bold ${pkg.popular ? 'text-[#FFFDF9]' : 'text-[#500A1A]'}`}>
                        {pkg.name}
                      </h3>
                      <span className={`text-sm font-serif-playfair font-semibold block ${pkg.popular ? 'text-[#E2B755]' : 'text-[#800020]'}`}>
                        {pkg.urduName}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs mb-4 font-light ${pkg.popular ? 'text-[#FAF7F2]/80' : 'text-gray-600'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className={`font-serif-playfair text-3xl font-bold ${pkg.popular ? 'text-[#E2B755]' : 'text-[#800020]'}`}>
                      {pkg.pricePerHead}
                    </span>
                  </div>
                  <span className={`text-xs block mt-1 font-medium ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                    Recommended for: {pkg.recommendedGuests}
                  </span>
                </div>

                {/* Venue & Hall Features */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${pkg.popular ? 'text-[#E2B755]' : 'text-[#800020]'}`}>
                    Venue Setup & Decor
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-[#E2B755]' : 'text-[#800020]'}`} />
                        <span className={pkg.popular ? 'text-[#FAF7F2]/90' : 'text-[#2C1810]/90'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Catering Menu Highlights */}
                <div className="mb-6 pt-6 border-t border-current/10">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${pkg.popular ? 'text-[#E2B755]' : 'text-[#800020]'}`}>
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Included Gourmet Menu</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {pkg.cateringMenu.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${pkg.popular ? 'bg-[#D4AF37]' : 'bg-[#800020]'}`} />
                        <span className={pkg.popular ? 'text-gray-200' : 'text-gray-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package CTA */}
              <button
                onClick={() => onOpenBookingModal(pkg.id)}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.popular
                    ? 'gold-button-gradient text-[#2C1810] shadow-lg hover:brightness-105'
                    : 'bg-[#500A1A] hover:bg-[#7A122B] text-white shadow-md'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Calculate & Book {pkg.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote Callout */}
        <div className="bg-[#500A1A] rounded-2xl p-8 border border-[#D4AF37]/50 shadow-xl text-center text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif-playfair text-2xl font-bold text-[#FFFDF9] mb-1">
              Need a Custom Event Plan or Unique Menu?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light max-w-xl">
              Planning an engagement, corporate expo, or specific menu arrangement? Use our interactive calculator or contact our management directly.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal()}
            className="shrink-0 gold-button-gradient text-[#2C1810] font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:brightness-105 transition-all cursor-pointer"
          >
            Open Interactive Calculator
          </button>
        </div>

      </div>
    </section>
  );
};
