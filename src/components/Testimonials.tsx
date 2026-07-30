import React from 'react';
import { Sparkles, Star, Quote, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FFFDF9] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#800020] bg-[#800020]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Client Reviews & Feedback</span>
          </div>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#500A1A] mb-4">
            Trusted by Families Across KPK
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] mx-auto rounded-full mb-6" />
          <p className="text-base text-[#2C1810]/80">
            Read authentic reviews from clients who celebrated their Barat, Walima, and family events at Ilyas Grace Marquee.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#D4AF37]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#500A1A]/10 group-hover:text-[#500A1A]/20 transition-colors" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#2C1810]/90 italic font-light leading-relaxed mb-6">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-playfair text-lg font-bold text-[#500A1A]">
                    {review.clientName}
                  </h3>
                  <span className="text-xs text-gray-600 block">
                    {review.location}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-[#800020] bg-[#800020]/10 px-2.5 py-1 rounded-md block mb-0.5">
                    {review.eventType}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {review.eventDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl p-6 text-center max-w-xl mx-auto shadow-sm flex items-center justify-center gap-3 text-xs sm:text-sm text-[#2C1810]">
          <HeartHandshake className="w-6 h-6 text-[#800020] shrink-0" />
          <span>
            Have you hosted an event with us? We value your feedback! Share your experience with us on WhatsApp or Google Maps.
          </span>
        </div>

      </div>
    </section>
  );
};
