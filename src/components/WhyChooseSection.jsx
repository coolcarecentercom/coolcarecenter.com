import React from 'react';
import { CheckCircle2, Phone, CalendarCheck, ShieldCheck } from 'lucide-react';
import { whyChoosePoints, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';

export default function WhyChooseSection() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Realistic Technician Service Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-800">
              <img 
                src={businessInfo.technicianImage} 
                alt="Cool Care Centre professional refrigerator technician diagnosing cooling coil and compressor in Mumbai" 
                className="w-full h-[440px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B1528]/90 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/30 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Appliance Specialist At Doorstep</h4>
                    <p className="text-xs text-slate-300">Dedicated Refrigerator Service Across Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative backing */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-cyan-400/20 rounded-3xl -z-10 blur-xl" />
          </div>

          {/* Right Column: Content and Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
                Service Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                Why Choose Cool Care Centre?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                Refrigeration breakdowns require dedicated diagnostic know-how, not guesswork. At Cool Care Centre, we focus exclusively on refrigerators, giving Mumbai households dependable cooling repairs directly at home.
              </p>
            </div>

            {/* Specific 7 Points */}
            <div className="space-y-3.5 pt-2">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer text-sm"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Doorstep Visit</span>
              </button>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors text-sm shadow-xs"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call Helpline: {businessInfo.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
