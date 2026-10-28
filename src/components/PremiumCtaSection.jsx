import React from 'react';
import { Phone, MessageCircle, CalendarCheck, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function PremiumCtaSection() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-14 sm:py-24 bg-[#080E1C] text-white relative overflow-hidden border-t border-slate-800" id="final-cta">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Doorstep Service Across All Mumbai</span>
        </div>

        {/* Headline & Subheading */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
            Need Refrigerator Repair in Mumbai?
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional doorstep refrigerator repair & service for homes across Mumbai. Clear diagnosis and upfront quote.
          </p>
        </div>

        {/* Action Buttons: Book Service | Call 9136327975 | WhatsApp Us */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
          
          {/* Button 1: Book Service */}
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl shadow-cyan-500/25 transition-all transform active:scale-95 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-slate-950" />
            <span>Book Service</span>
          </button>

          {/* Button 2: Call 9136327975 */}
          <a
            href={businessInfo.phoneTel}
            onClick={() => trackPhoneClick('final_cta')}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 shadow-lg transition-all transform active:scale-95"
          >
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>Call {businessInfo.phoneDisplay}</span>
          </a>

          {/* Button 3: WhatsApp Us */}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('final_cta')}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/50 shadow-lg transition-all transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Trust summary strip below buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>Open All 7 Days (8:00 AM – 9:00 PM)</span>
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>All Mumbai Suburbs Covered</span>
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>Transparent Diagnosis Before Repair</span>
          </span>
        </div>

      </div>
    </section>
  );
}
