import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { VENUE_INFO } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    eventType: 'Walima Reception',
    guestCount: '500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello *${VENUE_INFO.name}*,

I submitted an inquiry from your website:

👤 *Name:* ${formData.fullName || 'Not specified'}
📞 *Phone:* ${formData.phone || 'Not specified'}
📅 *Date:* ${formData.eventDate || 'To be determined'}
🎉 *Event Type:* ${formData.eventType}
👥 *Guests:* ${formData.guestCount}
💬 *Message:* ${formData.message || 'No additional notes'}

Please contact me with availability and package details.`;

    window.open(`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] text-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#800020] bg-[#800020]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Location & Inquiries</span>
          </div>
          <h2 className="font-serif-playfair text-3xl sm:text-5xl font-bold text-[#500A1A] mb-4">
            Visit Us or Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] mx-auto rounded-full mb-6" />
          <p className="text-base text-[#2C1810]/80">
            Conveniently situated at Muqam Chowk, Defence Colony, Mardan. Drop by for a physical hall tour or contact us on WhatsApp anytime!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="bg-[#500A1A] text-white p-8 rounded-2xl shadow-xl border border-[#D4AF37]/40 space-y-6">
              <div>
                <span className="text-[#E2B755] font-serif-playfair text-sm uppercase font-semibold block mb-1">
                  Contact Information
                </span>
                <h3 className="font-serif-playfair text-2xl font-bold text-[#FFFDF9]">
                  Ilyas Grace Marquee
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E2B755] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E2B755] uppercase font-semibold block mb-0.5">
                    Address
                  </span>
                  <p className="text-sm text-[#FAF7F2]/90 leading-relaxed font-light">
                    {VENUE_INFO.location}
                  </p>
                </div>
              </div>

              {/* Phone & Call */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E2B755] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E2B755] uppercase font-semibold block mb-0.5">
                    Call & WhatsApp
                  </span>
                  <a
                    href={`tel:${VENUE_INFO.phoneRaw}`}
                    className="text-base font-bold text-[#FFFDF9] hover:text-[#E2B755] transition-colors block"
                  >
                    {VENUE_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-gray-300">Available 6:00 AM – 10:00 PM Daily</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E2B755] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E2B755] uppercase font-semibold block mb-0.5">
                    Hall Inspection Hours
                  </span>
                  <p className="text-sm text-[#FAF7F2]/90 font-light">
                    {VENUE_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=Hello%20Ilyas%20Grace%20Marquee,%20I%20would%20like%20to%20visit%20the%20hall%20today.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${VENUE_INFO.phoneRaw}`}
                  className="w-full bg-[#FAF7F2] hover:bg-white text-[#2C1810] font-semibold text-sm py-2.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#800020]" />
                  <span>Call Directly ({VENUE_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Directions Note */}
            <div className="bg-white p-5 rounded-xl border border-[#D4AF37]/30 shadow-sm flex items-center gap-3">
              <Navigation className="w-6 h-6 text-[#800020] shrink-0" />
              <div className="text-xs text-gray-700">
                <span className="font-bold text-[#500A1A] block">Landmark Tip:</span>
                Located near Training Ground Area at Muqam Chowk, Defence Colony, Mardan. Accessible via Nowshera Road & Ring Road.
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form & Google Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#D4AF37]/30">
              <h3 className="font-serif-playfair text-2xl font-bold text-[#500A1A] mb-2">
                Send Booking Inquiry
              </h3>
              <p className="text-xs text-gray-600 mb-6 font-light">
                Fill out the form below and our venue manager will reach out to you promptly.
              </p>

              {submitted ? (
                <div className="bg-[#FAF7F2] border border-[#25D366] p-6 rounded-xl text-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <div>
                    <h4 className="font-serif-playfair text-xl font-bold text-[#500A1A]">
                      Inquiry Received!
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Thank you <span className="font-semibold text-[#500A1A]">{formData.fullName}</span>. You can also send this information directly to our WhatsApp for faster response!
                    </p>
                  </div>

                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Send Inquiry to WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gray-500 underline hover:text-[#500A1A] block mx-auto pt-2 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Engineer Hamza Afridi"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        placeholder="0313 8677761"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                      >
                        <option value="Walima Reception">Walima (ولیمہ)</option>
                        <option value="Barat Ceremony">Barat (بارات)</option>
                        <option value="Engagement">Engagement (منگنی)</option>
                        <option value="Corporate Expo">Corporate Expo</option>
                        <option value="Other Function">Other Gathering</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                        Guests
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                      >
                        <option value="200-400">200 – 400 Guests</option>
                        <option value="500-700">500 – 700 Guests</option>
                        <option value="800-1000">800 – 1000 Guests</option>
                        <option value="1200+">1200+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                      Special Requirements or Menu Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="e.g. Separate ladies seating required, fresh flower stage decoration..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#800020]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#500A1A] hover:bg-[#7A122B] text-white font-bold text-sm py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E2B755]" />
                    <span>Submit Online Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 h-72 relative">
              <iframe
                title="Ilyas Grace Marquee Google Map Location Mardan"
                src={VENUE_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
