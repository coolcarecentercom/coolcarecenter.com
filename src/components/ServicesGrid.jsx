import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Settings, 
  Flame, 
  Cpu, 
  Thermometer, 
  Droplets, 
  Snowflake, 
  Maximize2, 
  Fan, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  CalendarCheck
} from 'lucide-react';
import { servicesData, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick } from '../utils/tracking';

const iconCatalog = [
  Wrench,
  Settings,
  Flame,
  Snowflake,
  Droplets,
  Cpu,
  Thermometer,
  Cpu,
  Snowflake,
  Maximize2,
  Fan,
  ShieldCheck
];

export default function ServicesGrid({ limit = null, showHeading = true }) {
  const { openBookingModal } = useBooking();
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-100" id="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/60 px-3.5 py-1.5 rounded-full border border-cyan-200">
                Doorstep Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                Main Refrigerator Services in Mumbai
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                From gas refilling and PCB board repair to compressor replacements and gasket sealing across all Mumbai areas.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900 group min-h-[44px]"
            >
              <span>Explore All Refrigerator Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayServices.map((srv, index) => {
            const Icon = iconCatalog[index % iconCatalog.length];
            return (
              <div 
                key={srv.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => openBookingModal({ problem: srv.title })}
                    className="min-h-[44px] px-3.5 py-2 rounded-xl bg-cyan-50 text-cyan-800 hover:bg-cyan-100 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Book This Service
                  </button>
                  <Link
                    to={srv.slug}
                    className="inline-flex items-center gap-1 min-h-[44px] px-2 text-xs font-bold text-slate-500 hover:text-cyan-700 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services -> CTA Strip */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Need immediate service for one of these refrigerator issues?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Doorstep diagnosis across Mumbai. Upfront quote before any repair work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href={businessInfo.phoneTel}
              onClick={() => trackPhoneClick('services_cta_strip')}
              className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call Helpline: {businessInfo.phoneDisplay}</span>
            </a>
            <button
              onClick={() => openBookingModal()}
              className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <CalendarCheck className="w-4 h-4 text-slate-950" />
              <span>Book Doorstep Service</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
