import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Wrench,
  Flame,
  Snowflake,
  Cpu,
  Clock
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import TrustStrip from '../components/TrustStrip';
import BrandsSection from '../components/BrandsSection';
import ServiceAreaSection from '../components/ServiceAreaSection';
import PremiumCtaSection from '../components/PremiumCtaSection';
import FaqSection from '../components/FaqSection';
import { servicesData, businessInfo, refrigeratorTypes } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function ServiceDetailPage({ serviceId }) {
  const { openBookingModal } = useBooking();

  // Find service either by prop or fallback
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  // Related services (excluding current)
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`${service.h1} | Cool Care Centre`}
        description={`${service.shortDesc} Professional doorstep service across all Mumbai locations. Call ${businessInfo.phoneDisplay}.`}
        canonical={`https://coolcarecenter.com${service.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.h1,
          "serviceType": service.title,
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
          "description": service.shortDesc
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#091122] text-white pt-10 pb-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Doorstep Service Across Mumbai</span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => openBookingModal({ problem: service.title })}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer text-sm active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Book Refrigerator Service</span>
                </button>

                <a
                  href={businessInfo.phoneTel}
                  onClick={() => trackPhoneClick('service_detail_call')}
                  className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>

                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('service_detail_whatsapp')}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 transition-colors text-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Accurate Fault Diagnosis • Transparent Estimate • Doorstep Service</span>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-5">
              <BookingForm 
                initialProblem={service.title} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Main Educational & Diagnostic Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Problem Explanation */}
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Technical Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Understanding {service.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {service.problemExplanation}
            </p>
          </div>

          {/* Symptoms and Possible Causes Side-by-Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Symptoms Card */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Common Symptoms Observed
                </h3>
              </div>
              <ul className="space-y-3 pt-1">
                {service.symptoms?.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Possible Causes Card */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Possible Root Causes
                </h3>
              </div>
              <ul className="space-y-3 pt-1">
                {service.possibleCauses?.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Professional Repair Approach */}
          <div className="bg-gradient-to-r from-slate-900 to-[#0A1628] text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                Safety & Systematic Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Professional Repair Approach
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {service.repairApproach}
              </p>
              
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-cyan-300 block">Professional Safety Advisory:</span>
                <span>
                  Modern refrigerators contain pressurized refrigerants, high-voltage starter capacitors, and sensitive electronic boards. We advise against unauthorized tampering or DIY electrical bypassing, as incorrect handling can cause safety hazards or permanent compressor motor damage.
                </span>
              </div>
            </div>
          </div>

          {/* Refrigerator Types Serviced Under This Service */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Compatible Refrigerator Formats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {refrigeratorTypes.slice(0, 3).map((type) => (
                <div key={type.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 transition-all">
                  <h4 className="font-bold text-slate-900 text-base mb-1">{type.title}</h4>
                  <p className="text-xs text-slate-600 mb-3">{type.shortDesc}</p>
                  <Link to={type.slug} className="text-xs font-bold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1">
                    <span>View Type Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Links to Related Services */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Related Refrigerator Services in Mumbai
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={rel.slug}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <span className="font-bold text-slate-800 group-hover:text-cyan-700 text-sm">
                    {rel.title}
                  </span>
                  <span className="text-xs text-cyan-700 inline-flex items-center gap-1 mt-2">
                    <span>Read Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
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

      {/* Service-Specific FAQs */}
      {service.faqs && (
        <FaqSection
          customFaqs={service.faqs}
          title={`FAQs About ${service.title}`}
          subtitle={`Frequently asked questions about ${service.title.toLowerCase()} in Mumbai.`}
        />
      )}
    </>
  );
}
