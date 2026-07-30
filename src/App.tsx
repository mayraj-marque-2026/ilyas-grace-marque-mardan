import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageCalculatorModal } from './components/PackageCalculatorModal';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [activePackageId, setActivePackageId] = useState<string>('pkg-gold');

  const handleOpenCalculator = (packageId?: string) => {
    if (packageId) {
      setActivePackageId(packageId);
    }
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] font-sans-poppins flex flex-col selection:bg-[#800020] selection:text-[#E2B755]">
      {/* Sticky Header */}
      <Navbar onOpenBookingModal={() => handleOpenCalculator()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBookingModal={() => handleOpenCalculator()} />
        <About />
        <Gallery />
        <Packages onOpenBookingModal={(pkgId) => handleOpenCalculator(pkgId)} />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Interactive Booking & Calculator Modal */}
      <PackageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        defaultPackageId={activePackageId}
      />
    </div>
  );
}
