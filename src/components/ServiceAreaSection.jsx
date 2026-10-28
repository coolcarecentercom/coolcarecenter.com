import React, { useState } from 'react';
import { MapPin, Phone, CalendarCheck } from 'lucide-react';
import { mumbaiRegions, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick } from '../utils/tracking';

export default function ServiceAreaSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { openBookingModal } = useBooking();

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
            Local Doorstep Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Doorstep Refrigerator Service Across Mumbai
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Cool Care Centre sends experienced technicians directly to your doorstep across Western Suburbs, South Mumbai, Central Mumbai, and Eastern Suburbs.
          </p>
        </div>

        {/* Region Tabs with min-h-[44px] */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
          {mumbaiRegions.map((region, index) => (
            <button
              key={region.region}
              onClick={() => setActiveTab(index)}
              className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === index
                  ? 'bg-slate-900 text-cyan-400 shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>

        {/* Active Region Display */}
        <div className="bg-slate-50 rounded-3xl p-5 sm:p-7 border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6 pb-6 border-b border-slate-200/80">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span>Doorstep Service in {mumbaiRegions[activeTab].region}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Technicians available for single door, double door, side-by-side, and inverter refrigerators across:
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={businessInfo.phoneTel}
                onClick={() => trackPhoneClick('service_area_header')}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call {businessInfo.phoneDisplay}</span>
              </a>
              <button
                onClick={() => openBookingModal()}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Service</span>
              </button>
            </div>
          </div>

          {/* Area Badges Grid with min-h-[44px] touch targets */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {mumbaiRegions[activeTab].areas.map((area) => (
              <button
                key={area}
                onClick={() => openBookingModal()}
                className="bg-white p-3 min-h-[44px] rounded-xl border border-slate-200/80 text-center hover:border-cyan-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-center items-center"
              >
                <span className="text-xs font-bold text-slate-800 group-hover:text-cyan-700 block truncate w-full">
                  {area}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Doorstep Service
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>Also serving all surrounding housing societies, towers, and localities in Mumbai.</span>
            <span className="font-bold text-cyan-700">Mon–Sun: 8:00 AM – 9:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
