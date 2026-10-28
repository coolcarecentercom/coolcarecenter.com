import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function MobileStickyBar() {
  const { openBookingModal } = useBooking();

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#070E1E]/95 backdrop-blur-md border-t border-cyan-500/20 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Mobile quick action bar"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL */}
        <a 
          href={businessInfo.phoneTel} 
          onClick={() => trackPhoneClick('mobile_sticky_bar')}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 active:scale-95 transition-transform"
          aria-label="Call Cool Care Centre"
        >
          <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Call</span>
        </a>

        {/* WHATSAPP */}
        <a 
          href={businessInfo.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={() => trackWhatsAppClick('mobile_sticky_bar')}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-600/50 active:scale-95 transition-transform"
          aria-label="Chat with Cool Care Centre on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* BOOK SERVICE */}
        <button 
          onClick={() => openBookingModal()}
          className="flex flex-col items-center justify-center min-h-[48px] py-1.5 px-1 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-black active:scale-95 transition-transform shadow-md shadow-cyan-500/20 cursor-pointer"
          aria-label="Book Refrigerator Service"
        >
          <CalendarCheck className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-wide uppercase">Book Service</span>
        </button>

      </div>
    </div>
  );
}
