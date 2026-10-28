import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import TrustStrip from '../components/TrustStrip';
import ProblemSection from '../components/ProblemSection';
import ServicesGrid from '../components/ServicesGrid';
import RefrigeratorTypesGrid from '../components/RefrigeratorTypesGrid';
import WhyChooseSection from '../components/WhyChooseSection';
import HowItWorks from '../components/HowItWorks';
import ServiceAreaSection from '../components/ServiceAreaSection';
import BrandsSection from '../components/BrandsSection';
import PricingSection from '../components/PricingSection';
import CustomerStoriesSection from '../components/CustomerStoriesSection';
import DiagnosticWizard from '../components/DiagnosticWizard';
import FaqSection from '../components/FaqSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function HomePage() {
  const { openBookingModal } = useBooking();
  const [selectedProblem, setSelectedProblem] = useState('');

  const scrollToBooking = (prob = '') => {
    if (prob) setSelectedProblem(prob);
    const bookingEl = document.getElementById('booking-form-section');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      openBookingModal(prob ? { problem: prob } : {});
    }
  };

  return (
    <>
      <SEOHead
        title="Cool Care Centre | Refrigerator Repair in Mumbai"
        description="Professional doorstep refrigerator repair & service for homes across Mumbai. Expert diagnosis for single door, double door & side-by-side fridges. Call 9136327975."
        canonical="https://coolcarecenter.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Cool Care Centre",
          "image": "https://coolcarecenter.com/logo.jpeg",
          "@id": "https://coolcarecenter.com/#business",
          "url": "https://coolcarecenter.com",
          "telephone": "+919136327975",
          "email": "coolcarecenter.com@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "areaServed": "Mumbai",
          "description": "Professional doorstep refrigerator repair & service for homes across Mumbai."
        }}
      />

      {/* ==================================================
          1. LOGO + HERO & 2. CALL / BOOK CTA
          High-Converting Google Ads Hero Experience
          WHAT: Refrigerator Repair
          WHERE: Mumbai
          ACTION: Book a Technician / Call Now
         ================================================== */}
      <section className="relative bg-[#070E1E] text-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 overflow-hidden border-b border-slate-800">
        {/* Soft Ambient Lighting Gradients */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-inner">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>COOL CARE CENTRE • Mumbai Doorstep Service</span>
              </div>

              {/* Exact Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Refrigerator Repair in Mumbai
              </h1>

              {/* Exact Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Professional doorstep refrigerator repair & service for homes across Mumbai.
              </p>

              {/* CTAs: [CALL NOW] & [BOOK SERVICE] */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* CALL NOW */}
                <a
                  href={businessInfo.phoneTel}
                  onClick={() => trackPhoneClick('home_hero_call_now')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-xl text-base font-extrabold text-white bg-slate-800/95 hover:bg-slate-700 border border-slate-600 shadow-lg transition-all transform active:scale-95"
                  aria-label="Call 9136327975"
                >
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>

                {/* BOOK SERVICE */}
                <button
                  onClick={() => scrollToBooking()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-xl text-base font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl shadow-cyan-500/25 transition-all transform active:scale-95 cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-slate-950 flex-shrink-0" />
                  <span>Book Service</span>
                </button>

                {/* WhatsApp */}
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('home_hero_whatsapp')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 min-h-[48px] rounded-xl text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/50 shadow-md transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Line */}
              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-300/90">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Doorstep Service • Professional Diagnosis • Upfront Quote</span>
              </div>

            </div>

            {/* Right Column: Premium Appliance Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-slate-900 group">
                <picture>
                  <source srcSet="/images/hero-refrigerator.webp" type="image/webp" />
                  <img 
                    src="/images/hero-refrigerator.jpg" 
                    alt="Cool Care Centre modern refrigerator service Mumbai" 
                    className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-transparent to-transparent" />
                
                {/* Floating Brand Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1528]/95 backdrop-blur-md p-3.5 rounded-2xl border border-cyan-500/30 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <div>
                      <span className="text-xs font-bold text-white block">Cool Care Centre Mumbai</span>
                      <span className="text-[11px] text-slate-300 block">Prompt Doorstep Appliance Support</span>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToBooking()}
                    className="text-xs font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. COMPACT TRUST STRIP
         ================================================== */}
      <TrustStrip compact={true} />

      {/* ==================================================
          4. REFRIGERATOR PROBLEM SELECTOR
         ================================================== */}
      <ProblemSection onSelectProblem={(prob) => scrollToBooking(prob)} />

      {/* ==================================================
          5. BOOKING FORM SECTION
         ================================================== */}
      <section className="py-12 sm:py-16 bg-slate-100/80 border-b border-slate-200" id="booking-form-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <BookingForm 
            initialProblem={selectedProblem} 
          />
        </div>
      </section>

      {/* ==================================================
          6. MAIN REFRIGERATOR SERVICES
         ================================================== */}
      <ServicesGrid />

      {/* ==================================================
          7. REFRIGERATOR TYPES
         ================================================== */}
      <RefrigeratorTypesGrid />

      {/* ==================================================
          8. WHY CHOOSE COOL CARE CENTRE
         ================================================== */}
      <WhyChooseSection />

      {/* ==================================================
          9. HOW IT WORKS
         ================================================== */}
      <HowItWorks />

      {/* Interactive Appliance Diagnostic Wizard */}
      <DiagnosticWizard />

      {/* Transparent Service Guidelines */}
      <PricingSection />

      {/* Real Diagnostics Case Scenarios */}
      <CustomerStoriesSection />

      {/* Brands Serviced */}
      <BrandsSection />

      {/* ==================================================
          10. MUMBAI SERVICE AREAS
         ================================================== */}
      <ServiceAreaSection />

      {/* ==================================================
          11. FAQ
         ================================================== */}
      <FaqSection />

      {/* ==================================================
          12. FINAL CTA
         ================================================== */}
      <PremiumCtaSection />
    </>
  );
}
