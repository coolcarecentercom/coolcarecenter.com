import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BookingForm from '../components/BookingForm';
import TrustStrip from '../components/TrustStrip';
import ServiceAreaSection from '../components/ServiceAreaSection';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function ContactPage() {
  const { openBookingModal } = useBooking();

  return (
    <>
      <SEOHead
        title="Contact Cool Care Centre | Doorstep Refrigerator Repair Mumbai"
        description="Contact Cool Care Centre for professional refrigerator repair & service across Mumbai. Phone: 9136327975, Email: coolcarecenter.com@gmail.com. Book doorstep service now."
        canonical="https://coolcarecenter.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Cool Care Centre",
          "description": "Contact Cool Care Centre for doorstep refrigerator repair and service in Mumbai.",
          "mainEntity": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Cool Care Centre",
            "telephone": "+919136327975",
            "email": "coolcarecenter.com@gmail.com",
            "url": "https://coolcarecenter.com",
            "areaServed": "Mumbai"
          }
        }}
      />

      {/* Hero / Header */}
      <section className="bg-[#091122] text-white pt-12 pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact Cool Care Centre
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an urgent cooling failure or need routine refrigerator servicing? Reach out via phone, WhatsApp, or our online booking form. Our Mumbai service team responds promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Business Details & Contact Cards */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                  Business Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                  COOL CARE CENTRE
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Professional Doorstep Refrigerator Repair & Service
                </p>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Call Now */}
                <a
                  href={businessInfo.phoneTel}
                  onClick={() => trackPhoneClick('contact_page_call')}
                  className="flex flex-col items-center justify-center min-h-[48px] p-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-all text-center shadow-md group active:scale-95"
                >
                  <Phone className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">Call Now</span>
                  <span className="text-xs text-slate-400 mt-0.5">{businessInfo.phoneDisplay}</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_page_whatsapp')}
                  className="flex flex-col items-center justify-center min-h-[48px] p-4 rounded-2xl bg-emerald-950 text-emerald-200 hover:bg-emerald-900 transition-all text-center border border-emerald-700/50 shadow-md group active:scale-95"
                >
                  <MessageCircle className="w-6 h-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">WhatsApp</span>
                  <span className="text-xs text-emerald-300 mt-0.5">Chat Directly</span>
                </a>

                {/* Book Service */}
                <button
                  onClick={() => openBookingModal()}
                  className="flex flex-col items-center justify-center min-h-[48px] p-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 hover:from-cyan-300 hover:to-sky-300 transition-all text-center shadow-md group cursor-pointer active:scale-95"
                >
                  <CalendarCheck className="w-6 h-6 text-slate-950 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black">Book Service</span>
                  <span className="text-xs text-slate-900/80 mt-0.5">Doorstep Slot</span>
                </button>
              </div>

              {/* Detailed Contact List */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Phone Helpline</span>
                    <a href={businessInfo.phoneTel} className="text-base font-bold text-slate-900 hover:text-cyan-700">
                      {businessInfo.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Direct technician & service coordination</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Email Address</span>
                    <a href={`mailto:${businessInfo.email}`} className="text-base font-bold text-slate-900 hover:text-cyan-700">
                      {businessInfo.email}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">Inquiries and service follow-up</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Service Area</span>
                    <span className="text-base font-bold text-slate-900">
                      All Mumbai Locations
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">Western Suburbs, South Mumbai, Central Mumbai & Eastern Suburbs</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Operating Hours</span>
                    <span className="text-base font-bold text-slate-900">
                      {businessInfo.operatingHours}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">Open every day including weekends</span>
                  </div>
                </div>
              </div>

              {/* Service Assurance */}
              <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200/70 text-xs text-cyan-900 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-cyan-950">
                  <ShieldCheck className="w-4 h-4 text-cyan-700" />
                  <span>Doorstep Inspection Protocol</span>
                </div>
                <p className="leading-relaxed">
                  Our service technician comes equipped with diagnostic tools to examine your refrigerator at home. You will always be informed of the exact fault and repair estimate before work commences.
                </p>
              </div>
            </div>

            {/* Right Column: Contact & Booking Form */}
            <div className="lg:col-span-6">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Mumbai Coverage Details */}
      <ServiceAreaSection />
    </>
  );
}
