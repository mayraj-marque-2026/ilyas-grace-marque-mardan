import React, { useState } from 'react';
import { X, Calculator, MessageCircle, Check, Users, Calendar, Sparkles, Utensils } from 'lucide-react';
import { VENUE_INFO, PACKAGES } from '../data';

interface PackageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
}

export const PackageCalculatorModal: React.FC<PackageCalculatorModalProps> = ({
  isOpen,
  onClose,
  defaultPackageId = 'pkg-gold',
}) => {
  const [guestCount, setGuestCount] = useState<number>(500);
  const [eventType, setEventType] = useState<string>('Walima Reception');
  const [selectedPackageId, setSelectedPackageId] = useState<string>(defaultPackageId);
  const [eventDate, setEventDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  // Add-ons
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    femaleStaff: true,
    freshFlowers: false,
    liveBBQ: false,
    ledWall: false,
  });

  if (!isOpen) return null;

  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];

  // Base rate calculation from string "Rs. 1,850 / head" -> 1850
  const parsePerHeadPrice = (priceStr: string): number => {
    const num = priceStr.replace(/[^0-9]/g, '');
    return parseInt(num, 10) || 1850;
  };

  const basePerHead = parsePerHeadPrice(currentPackage.pricePerHead);
  
  // Calculate add-ons
  let addonFlatTotal = 0;
  let addonPerHeadTotal = 0;

  if (addOns.femaleStaff) addonFlatTotal += 15000;
  if (addOns.freshFlowers) addonFlatTotal += 35000;
  if (addOns.ledWall) addonFlatTotal += 25000;
  if (addOns.liveBBQ) addonPerHeadTotal += 150;

  const totalFoodAndHallBase = basePerHead * guestCount;
  const totalPerHeadAddons = addonPerHeadTotal * guestCount;
  const grandTotal = totalFoodAndHallBase + totalPerHeadAddons + addonFlatTotal;
  const effectivePerHead = Math.round(grandTotal / guestCount);

  const toggleAddon = (key: string) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendWhatsAppQuote = () => {
    const message = `Hello *${VENUE_INFO.name}*,

I would like to inquire about booking my event with the following details:

👤 *Client Name:* ${clientName || 'Not specified'}
📞 *Phone:* ${clientPhone || 'Not specified'}
📅 *Event Date:* ${eventDate || 'To be confirmed'}
🎉 *Event Type:* ${eventType}
👥 *Estimated Guests:* ${guestCount} Guests
📦 *Package Selected:* ${currentPackage.name} (${currentPackage.pricePerHead})

✨ *Selected Add-ons:*
${addOns.femaleStaff ? '• Separate Female Reception & Hostesses\n' : ''}${
      addOns.freshFlowers ? '• Fresh Floral Stage Decor Upgrade\n' : ''
    }${addOns.liveBBQ ? '• Live BBQ Station (+Rs 150/head)\n' : ''}${
      addOns.ledWall ? '• HD LED Wall & Stage Sound\n' : ''
    }
💰 *Estimated Total:* Rs. ${grandTotal.toLocaleString()} (Approx. Rs. ${effectivePerHead}/head)

Please confirm hall availability for my date and send a formal proposal. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FFFDF9] text-[#2C1810] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden relative my-8">
        {/* Modal Header */}
        <div className="bg-[#500A1A] text-white px-6 py-5 flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#E2B755]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-playfair text-xl sm:text-2xl font-bold text-[#FFFDF9]">
                Interactive Event Quote Calculator
              </h3>
              <p className="text-xs text-[#E2B755]">
                Customized for Ilyas Grace Marquee Mardan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Step 1: Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                Your Name / Family Name
              </label>
              <input
                type="text"
                placeholder="e.g. Malik Zeeshan Khan"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#800020]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                WhatsApp Phone Number
              </label>
              <input
                type="text"
                placeholder="0313 8677761"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#800020]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#800020] font-medium"
              >
                <option value="Walima Reception">Walima Reception (ولیمہ)</option>
                <option value="Barat Ceremony">Barat Ceremony (بارات)</option>
                <option value="Engagement Ceremony">Engagement / Mangni (منگنی)</option>
                <option value="Corporate Expo & Conference">Corporate Expo / Expo (ایکسپو)</option>
                <option value="Family Gathering / Party">Family Gathering / Party</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-1">
                Tentative Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-[#800020]"
              />
            </div>
          </div>

          {/* Step 2: Guest Count Slider */}
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#D4AF37]/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-[#500A1A] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#800020]" />
                <span>Estimated Guests:</span>
              </span>
              <span className="text-xl font-serif-playfair font-bold text-[#800020]">
                {guestCount} <span className="text-xs font-sans text-gray-600">Guests</span>
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="1500"
              step="50"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
              className="w-full accent-[#800020] cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              <span>200 Guests</span>
              <span>750 Guests</span>
              <span>1500+ Guests</span>
            </div>
          </div>

          {/* Step 3: Choose Base Package */}
          <div>
            <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-2">
              Select Package Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                    selectedPackageId === pkg.id
                      ? 'bg-[#500A1A] text-white border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]/50'
                      : 'bg-white text-[#2C1810] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-2.5 right-2 bg-[#D4AF37] text-[#2C1810] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Popular
                    </span>
                  )}
                  <span className="font-serif-playfair font-bold text-sm block">
                    {pkg.name}
                  </span>
                  <span className={`text-xs block mb-1 ${selectedPackageId === pkg.id ? 'text-[#E2B755]' : 'text-[#800020]'}`}>
                    {pkg.pricePerHead}
                  </span>
                  <span className={`text-[11px] line-clamp-1 ${selectedPackageId === pkg.id ? 'text-gray-200' : 'text-gray-500'}`}>
                    {pkg.tagline}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Optional Upgrades */}
          <div>
            <label className="block text-xs font-semibold uppercase text-[#500A1A] mb-2">
              Optional Enhancements & Decor Upgrades
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label
                onClick={() => toggleAddon('femaleStaff')}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  addOns.femaleStaff
                    ? 'bg-[#800020]/10 border-[#800020] text-[#500A1A] font-medium'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${addOns.femaleStaff ? 'bg-[#800020] text-white border-[#800020]' : 'border-gray-400'}`}>
                    {addOns.femaleStaff && <Check className="w-3 h-3" />}
                  </div>
                  <span>Female Reception & Hostess Desk</span>
                </div>
                <span className="font-bold text-[#800020]">+Rs. 15,000</span>
              </label>

              <label
                onClick={() => toggleAddon('freshFlowers')}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  addOns.freshFlowers
                    ? 'bg-[#800020]/10 border-[#800020] text-[#500A1A] font-medium'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${addOns.freshFlowers ? 'bg-[#800020] text-white border-[#800020]' : 'border-gray-400'}`}>
                    {addOns.freshFlowers && <Check className="w-3 h-3" />}
                  </div>
                  <span>Fresh Floral Stage & Entry Arch</span>
                </div>
                <span className="font-bold text-[#800020]">+Rs. 35,000</span>
              </label>

              <label
                onClick={() => toggleAddon('liveBBQ')}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  addOns.liveBBQ
                    ? 'bg-[#800020]/10 border-[#800020] text-[#500A1A] font-medium'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${addOns.liveBBQ ? 'bg-[#800020] text-white border-[#800020]' : 'border-gray-400'}`}>
                    {addOns.liveBBQ && <Check className="w-3 h-3" />}
                  </div>
                  <span>Live BBQ Counter (Seekh/Boti)</span>
                </div>
                <span className="font-bold text-[#800020]">+Rs. 150 / head</span>
              </label>

              <label
                onClick={() => toggleAddon('ledWall')}
                className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  addOns.ledWall
                    ? 'bg-[#800020]/10 border-[#800020] text-[#500A1A] font-medium'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${addOns.ledWall ? 'bg-[#800020] text-white border-[#800020]' : 'border-gray-400'}`}>
                    {addOns.ledWall && <Check className="w-3 h-3" />}
                  </div>
                  <span>HD LED Wall & Stage Audio</span>
                </div>
                <span className="font-bold text-[#800020]">+Rs. 25,000</span>
              </label>
            </div>
          </div>

          {/* Price Calculation Summary Box */}
          <div className="bg-[#3D0613] text-white p-5 rounded-xl border border-[#D4AF37] shadow-inner">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#E2B755] uppercase font-semibold block mb-0.5">
                  Estimated Total Investment
                </span>
                <span className="font-serif-playfair text-3xl font-bold text-[#FFFDF9] gold-text-gradient">
                  Rs. {grandTotal.toLocaleString()}
                </span>
                <span className="text-xs text-gray-300 block mt-0.5">
                  Approx. <span className="text-[#E2B755] font-bold">Rs. {effectivePerHead}</span> per head ({guestCount} guests)
                </span>
              </div>

              <button
                type="button"
                onClick={handleSendWhatsAppQuote}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Proposal via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
