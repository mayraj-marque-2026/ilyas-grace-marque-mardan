import React from 'react';
import { Building2, Users, UtensilsCrossed, Car, Sparkles, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Building2 className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Grand Air-Conditioned Hall',
      description: 'Massive pillar-less marquee with high ceilings, luxurious crystal chandeliers, and climate control for hot summers and cold winters.'
    },
    {
      icon: <Users className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Separate Male & Female Partitions',
      description: 'Dignified, private, and culturally respectful seating arrangements with dedicated female reception desks and female service hostesses.'
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Royal Pakistani Catering',
      description: 'Master chefs preparing aromatic Degi Biryani, Mutton Karahi, Seekh Kebabs, Naan, and traditional Pashtun & Pakistani sweet dishes.'
    },
    {
      icon: <Car className="w-7 h-7 text-[#D4AF37]" />,
      title: 'Ample Secure Parking',
      description: 'Expansive on-site parking area accommodating over 300 vehicles with 24/7 CCTV surveillance and valet assistance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF7F2] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#800020] bg-[#800020]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Welcome to Ilyas Grace Marquee</span>
          </div>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#500A1A] mb-4">
            Where Family Traditions Meet Royal Elegance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#2C1810]/80 font-normal leading-relaxed">
            Located in the heart of Mardan at <span className="font-semibold text-[#500A1A]">Muqam Chowk, Defence Colony</span>, Ilyas Grace Marquee is engineered to transform your wedding, Walima, engagement, or corporate gathering into a regal celebration.
          </p>
        </div>

        {/* Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#500A1A] flex items-center justify-center mb-5 group-hover:bg-[#7A122B] transition-colors shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-serif-playfair text-xl font-bold text-[#500A1A] mb-3 group-hover:text-[#800020] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2C1810]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAF7F2] flex items-center gap-1.5 text-xs font-semibold text-[#800020]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Premium Quality Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Banner Showcase */}
        <div className="bg-[#500A1A] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 grid grid-cols-1 lg:grid-cols-12 text-white">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <span className="text-[#E2B755] font-serif-playfair text-sm uppercase tracking-widest font-semibold mb-2">
              Unmatched Facilities in Mardan
            </span>
            <h3 className="font-serif-playfair text-2xl sm:text-4xl font-bold mb-6 text-[#FFFDF9]">
              Designed for Dignity, Luxury & Complete Convenience
            </h3>
            <p className="text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed mb-6">
              At Ilyas Grace Marquee, we respect local traditions (Pukhtoon values & Islamic hospitality). Our dedicated management ensures separate entrance points, private dining halls for ladies, and courteous, trained service staff.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E2B755] shrink-0 mt-0.5" />
                <span className="text-sm text-[#FAF7F2]">Continuous Heavy Generator Backup (Zero Load-shedding)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E2B755] shrink-0 mt-0.5" />
                <span className="text-sm text-[#FAF7F2]">Bridal Suites with Private Bathrooms & Dressing Mirrors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E2B755] shrink-0 mt-0.5" />
                <span className="text-sm text-[#FAF7F2]">High-definition LED Screen & Crystal Sound Setup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E2B755] shrink-0 mt-0.5" />
                <span className="text-sm text-[#FAF7F2]">Custom Stage Flower Arrangements (Fresh & Silk)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#D4AF37]/30">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#E2B755]" />
                <div>
                  <span className="block text-xs text-[#E2B755] font-semibold">500+ Weddings Hosted</span>
                  <span className="block text-[11px] text-[#FAF7F2]/70">Trusted by Families Across KPK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src="/images/hall-1.jpg"
              alt="Ilyas Grace Marquee Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D0613] via-transparent to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-6 left-6 right-6 bg-[#3D0613]/80 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/40 text-center">
              <span className="font-serif-playfair text-lg text-[#E2B755] font-bold block">
                Muqam Chowk, Defence Colony, Mardan
              </span>
              <span className="text-xs text-[#FAF7F2]/90">
                Easy location access for guests coming from Peshawar, Swabi, Nowshera & Malakand.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
