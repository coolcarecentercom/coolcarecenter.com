import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Columns2, 
  ArrowRight, 
  CalendarCheck, 
  Phone, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RefrigeratorTypesGrid from '../components/RefrigeratorTypesGrid';
import TrustStrip from '../components/TrustStrip';
import ServiceAreaSection from '../components/ServiceAreaSection';
import BrandsSection from '../components/BrandsSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';

export default function RefrigeratorTypesHubPage() {
  const { openBookingModal } = useBooking();

  return (
    <>
      <SEOHead
        title="Refrigerator Types Serviced in Mumbai | Cool Care Centre"
        description="Doorstep repair and maintenance for Single Door, Double Door, Side-by-Side, French Door, and Inverter Refrigerators across Mumbai. Call 9136327975."
        canonical="https://coolcarecenter.com/refrigerator-types"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Refrigerator Types Serviced in Mumbai",
          "description": "Comprehensive guide to refrigerator types and models serviced by Cool Care Centre across Mumbai.",
          "publisher": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Cool Care Centre",
            "url": "https://coolcarecenter.com"
          }
        }}
      />

      {/* Hero */}
      <section className="bg-[#091122] text-white pt-12 pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Appliance Categories
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Refrigerator Types We Repair
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We cater to all cooling capacities and design formats across Mumbai homes, including direct-cool single-door refrigerators, multi-zone double-door models, large-format side-by-side units, and advanced inverter technology appliances.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer text-sm"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Service for Your Fridge</span>
              </button>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm"
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

      {/* Types Grid */}
      <RefrigeratorTypesGrid />

      {/* Brands We Service */}
      <BrandsSection />

      {/* Mumbai Coverage Areas */}
      <ServiceAreaSection />

      {/* Dark Navy CTA */}
      <PremiumCtaSection />
    </>
  );
}
