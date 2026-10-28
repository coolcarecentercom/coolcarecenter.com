import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Wrench,
  Columns2,
  SplitSquareVertical
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import TrustStrip from '../components/TrustStrip';
import BrandsSection from '../components/BrandsSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import FaqSection from '../components/FaqSection';
import { refrigeratorTypes, businessInfo, servicesData } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function RefrigeratorTypePage({ typeId }) {
  const { openBookingModal } = useBooking();
  const fridgeType = refrigeratorTypes.find(t => t.id === typeId) || refrigeratorTypes[0];

  const typeFaqs = [
    {
      q: `Do you provide doorstep repair for ${fridgeType.title} in Mumbai?`,
      a: `Yes, Cool Care Centre provides on-site doorstep diagnosis and repair for all ${fridgeType.title} makes across South Mumbai, Central Mumbai, Western Suburbs, and Eastern Suburbs.`,
    },
    {
      q: `What brands of ${fridgeType.title} do you service?`,
      a: `We repair all major manufacturers including LG, Samsung, Whirlpool, Godrej, Haier, Bosch, Panasonic, and Hitachi.`,
    },
    {
      q: `Can ${fridgeType.title} cooling issues be resolved on the same visit?`,
      a: `In most instances involving start relays, thermostat calibration, sensor faults, fan motors, or defrost heaters, our technicians carry common testing tools and parts to resolve the issue directly during the doorstep visit.`,
    },
  ];

  return (
    <>
      <SEOHead
        title={`${fridgeType.title} Repair in Mumbai | Cool Care Centre`}
        description={`Professional doorstep ${fridgeType.title} repair & service across Mumbai. Experienced technicians for cooling, gas charging, compressor, and PCB issues. Call ${businessInfo.phoneDisplay}.`}
        canonical={`https://coolcarecenter.com${fridgeType.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${fridgeType.title} Repair in Mumbai`,
          "serviceType": `${fridgeType.title} Repair`,
          "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Cool Care Centre",
            "telephone": `+91${businessInfo.phone}`,
            "url": "https://coolcarecenter.com"
          },
          "areaServed": {
            "@type": "City",
            "name": "Mumbai"
          },
          "description": fridgeType.fullDesc
        }}
      />

      {/* Hero Header */}
      <section className="bg-[#091122] text-white pt-10 pb-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Specialized Appliance Category</span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {fridgeType.title} Repair in Mumbai
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {fridgeType.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => openBookingModal({ problem: `${fridgeType.title} Repair` })}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer text-sm active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Book Refrigerator Service</span>
                </button>

                <a
                  href={businessInfo.phoneTel}
                  onClick={() => trackPhoneClick('refrigerator_type_call')}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>

                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('refrigerator_type_whatsapp')}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 transition-colors text-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Doorstep Inspection • Upfront Diagnostic Quotation • All Mumbai Neighborhoods</span>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-5">
              <BookingForm 
                initialType={fridgeType.title}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Model-Specific Diagnostic Scope */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Technical Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Diagnostic & Repair Scope for {fridgeType.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every refrigerator configuration requires a customized diagnostic workflow. Our Mumbai technicians apply specialized testing protocols to evaluate cooling coils, airflow fans, electronic sensors, and compressor starting circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fridgeType.keyPoints.map((point, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{point}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Systematic verification performed right at your residence using precision multimeters and manifold gauge sets.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Related Common Services */}
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Common Services for {fridgeType.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link 
                to="/refrigerator-not-cooling-mumbai"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition-all group"
              >
                <h4 className="font-bold text-slate-800 group-hover:text-cyan-700">Not Cooling Diagnostics</h4>
                <p className="text-xs text-slate-500 mt-1">Freezer freezing but fridge warm, or total loss of cooling.</p>
              </Link>
              <Link 
                to="/refrigerator-gas-charging-mumbai"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition-all group"
              >
                <h4 className="font-bold text-slate-800 group-hover:text-cyan-700">Refrigerant Leak Fix & Charging</h4>
                <p className="text-xs text-slate-500 mt-1">Nitrogen leak test, deep vacuum evacuation, and gas refill.</p>
              </Link>
              <Link 
                to="/refrigerator-compressor-repair-mumbai"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition-all group"
              >
                <h4 className="font-bold text-slate-800 group-hover:text-cyan-700">Compressor Electrical Testing</h4>
                <p className="text-xs text-slate-500 mt-1">Start relay replacement and inverter driver testing.</p>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Brands We Service */}
      <BrandsSection />

      {/* Mumbai Service Areas */}
      <ServiceAreaSection />

      {/* Dark Navy CTA */}
      <PremiumCtaSection />

      {/* FAQs */}
      <FaqSection
        customFaqs={typeFaqs}
        title={`FAQs About ${fridgeType.title} Repair`}
        subtitle={`Frequently asked questions for ${fridgeType.title} servicing in Mumbai.`}
      />
    </>
  );
}
