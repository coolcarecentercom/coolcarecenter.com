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
import FaqSection from '../components/FaqSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function RefrigeratorRepairPage() {
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

  const repairFaqs = [
    {
      q: "Do you offer doorstep refrigerator repair in Mumbai?",
      a: "Yes. Cool Care Centre sends professional refrigerator technicians directly to your residence across all Western Suburbs, South Mumbai, Central Mumbai, and Eastern Suburbs.",
    },
    {
      q: "What types of refrigerator problems do you repair?",
      a: "We troubleshoot and fix all primary issues including refrigerators not cooling, gas leaks, compressor start failures, water leakage inside or under trays, noisy fan motors, thermostat faults, and PCB electronic board errors.",
    },
    {
      q: "Can I get an upfront quote before repair begins?",
      a: "Yes. Our technician inspects the refrigerator first, diagnoses the exact defect, and explains the required repair and costs for your approval before proceeding with any work.",
    },
    {
      q: "Which refrigerator brands do you repair in Mumbai?",
      a: "We service LG, Samsung, Whirlpool, Godrej, Haier, Bosch, Panasonic, Hitachi, IFB, Voltas Beko, and all major Indian and international refrigerator brands.",
    },
    {
      q: "Do you repair inverter and frost-free refrigerators?",
      a: "Yes. Our technicians are experienced with both conventional fixed-speed models and modern BLDC inverter compressor systems, multi-sensor airflow dampers, and defrost heating elements.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Refrigerator Repair in Mumbai | Doorstep Service | Cool Care Centre"
        description="Professional doorstep refrigerator repair & service for homes across Mumbai. Expert diagnosis for single door, double door & side-by-side fridges. Call 9136327975."
        canonical="https://coolcarecenter.com/refrigerator-repair-mumbai"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Refrigerator Repair Service",
          "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Cool Care Centre",
            "telephone": "+919136327975",
            "url": "https://coolcarecenter.com"
          },
          "areaServed": {
            "@type": "City",
            "name": "Mumbai"
          },
          "description": "Professional doorstep refrigerator repair service in Mumbai covering single door, double door, and inverter refrigerators."
        }}
      />

      {/* ==================================================
          1. LOGO + HERO & 2. CALL / BOOK CTA
          High-Converting Google Ads Landing Experience
          Visitor understands within 3 seconds:
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
            
            {/* Left Column: Hero Copy + Primary Conversion CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Brand identifier & Location Badge */}
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

              {/* Primary Conversion CTAs: [CALL NOW] & [BOOK SERVICE] */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* CALL NOW */}
                <a
                  href={businessInfo.phoneTel}
                  onClick={() => trackPhoneClick('ads_hero_call_now')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-xl text-base font-extrabold text-white bg-slate-800/95 hover:bg-slate-700 border border-slate-600 shadow-lg transition-all transform active:scale-95"
                  aria-label="Call 9136327975 Now"
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

                {/* Secondary WhatsApp */}
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('ads_hero_whatsapp')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 min-h-[48px] rounded-xl text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/50 shadow-md transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Small Trust Line beneath buttons */}
              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-300/90">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Doorstep Service • Professional Diagnosis • Upfront Quote</span>
              </div>

            </div>

            {/* Right Column: Premium Appliance Visual with soft lighting */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-slate-900 group">
                <picture>
                  <source srcSet="/images/hero-refrigerator.webp" type="image/webp" />
                  <img 
                    src="/images/hero-refrigerator.jpg" 
                    alt="Premium modern refrigerator with clean ambient cooling lighting" 
                    className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-transparent to-transparent" />
                
                {/* Floating Trust Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1528]/95 backdrop-blur-md p-3.5 rounded-2xl border border-cyan-500/30 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <div>
                      <span className="text-xs font-bold text-white block">Technicians On Call in Mumbai</span>
                      <span className="text-[11px] text-slate-300 block">Single Door • Double Door • Inverter Fridges</span>
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
          3. COMPACT TRUST / VALUE STRIP
          Immediately after Hero CTA:
          ✓ Doorstep Service
          ✓ Professional Diagnosis
          ✓ Mumbai Service Area
         ================================================== */}
      <TrustStrip compact={true} />

      {/* ==================================================
          4. REFRIGERATOR PROBLEM SELECTOR
          Quick clickable problem tiles pre-fill & scroll to form
         ================================================== */}
      <ProblemSection onSelectProblem={(prob) => scrollToBooking(prob)} />

      {/* ==================================================
          5. BOOKING FORM — HIGH CONVERSION
          Simplified, large touch targets, no unnecessary fields
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

      {/* ==================================================
          10. MUMBAI SERVICE AREAS
         ================================================== */}
      <ServiceAreaSection />

      {/* ==================================================
          11. FAQ
         ================================================== */}
      <FaqSection 
        customFaqs={repairFaqs}
        title="Refrigerator Repair FAQs"
        subtitle="Common questions about doorstep refrigerator repair service in Mumbai."
      />

      {/* ==================================================
          12. FINAL CTA
         ================================================== */}
      <PremiumCtaSection />
    </>
  );
}
