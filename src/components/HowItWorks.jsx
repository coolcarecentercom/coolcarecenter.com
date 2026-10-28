import React from 'react';
import { CalendarCheck, Search, FileText, CheckCircle2, Phone } from 'lucide-react';
import { howItWorksSteps, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick } from '../utils/tracking';

const stepIcons = [
  CalendarCheck,
  Search,
  FileText,
  CheckCircle2
];

export default function HowItWorks() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
            Frictionless Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Four straightforward steps to restore optimal cooling to your refrigerator at your doorstep.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {howItWorksSteps.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={index}
                className="relative bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-cyan-400 hover:bg-white transition-all duration-300 hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-cyan-500/40 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* How it works CTA */}
        <div className="mt-10 sm:mt-12 text-center flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openBookingModal()}
            className="min-h-[48px] px-6 py-3 rounded-xl text-sm font-black uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-95"
          >
            <CalendarCheck className="w-4 h-4 text-slate-950" />
            <span>Book Your Service Visit</span>
          </button>
          <a
            href={businessInfo.phoneTel}
            onClick={() => trackPhoneClick('how_it_works_cta')}
            className="min-h-[48px] px-6 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-600" />
            <span>Call {businessInfo.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
