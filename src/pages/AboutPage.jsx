import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Eye, 
  HeartHandshake,
  Clock,
  MapPin,
  Wrench
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import TrustStrip from '../components/TrustStrip';
import ServiceAreaSection from '../components/ServiceAreaSection';
import BrandsSection from '../components/BrandsSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick } from '../utils/tracking';

export default function AboutPage() {
  const { openBookingModal } = useBooking();

  return (
    <>
      <SEOHead
        title="About Cool Care Centre | Doorstep Refrigerator Repair in Mumbai"
        description="Learn about Cool Care Centre - delivering professional refrigerator repair and service directly to your doorstep across Mumbai with accurate diagnosis and transparent communication."
        canonical="https://coolcarecenter.com/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Cool Care Centre",
          "description": "Cool Care Centre provides professional refrigerator repair and service at customers' doorsteps across Mumbai.",
          "publisher": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Cool Care Centre",
            "url": "https://coolcarecenter.com"
          }
        }}
      />

      {/* Hero */}
      <section className="bg-[#091122] text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Our Appliance Service Mission
            </span>
            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Cool Care Centre
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Cool Care Centre provides professional refrigerator repair and service at customers' doorsteps across Mumbai. We focus on accurate diagnosis, transparent communication, and reliable repair solutions to keep your cooling appliances operating at peak performance.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer text-sm active:scale-95"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Refrigerator Service</span>
              </button>

              <a
                href={businessInfo.phoneTel}
                onClick={() => trackPhoneClick('about_hero_call')}
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm active:scale-95"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {businessInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Core Principles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <img 
                  src={businessInfo.technicianImage} 
                  alt="Cool Care Centre technician providing doorstep refrigerator service in Mumbai" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right Story & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Professional Approach
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Dedicated Doorstep Refrigerator Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When a household refrigerator fails, families face immediate disruption. Moving a bulky 200-liter or 600-liter appliance to an off-site workshop risks structural damage and unnecessary transport expenses.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Cool Care Centre is organized entirely around doorstep service. Our technicians travel to your home with professional electrical multimeters, manifold pressure gauges, vacuum equipment, and essential replacement components to inspect and service your refrigerator right in your kitchen.
              </p>

              {/* 5 Core Pillars from prompt */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Professional Service</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Skilled technicians applying methodical refrigeration diagnostics without guesswork.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Accurate Diagnosis</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Testing compressor winding continuity, refrigerant pressures, and sensor resistances before recommending action.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Customer Convenience</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Flexible appointment booking directly to your doorstep across South, Central, Western, and Eastern Mumbai.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Communication</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Clear explanation of the diagnosed issue and an upfront estimate for your approval before work begins.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Reliable Repair Solutions</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Long-lasting technical repairs using quality replacement components where required.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Brands We Service */}
      <BrandsSection />

      {/* Mumbai Coverage Areas */}
      <ServiceAreaSection />

      {/* Dark Navy CTA */}
      <PremiumCtaSection />
    </>
  );
}
