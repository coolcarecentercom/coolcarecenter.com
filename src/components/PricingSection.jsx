import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  CalendarCheck, 
  FileText, 
  Eye, 
  HelpCircle 
} from 'lucide-react';
import { businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';

const pricingGuidelines = [
  {
    service: "Doorstep Physical Inspection & Testing",
    scope: "Full electrical winding test, relay inspection, and refrigerant pressure reading.",
    timeline: "30–45 mins",
    note: "Nominal inspection charge (adjusted if repair work is carried out)."
  },
  {
    service: "Compressor Starter Relay & OLP Replacement",
    scope: "Testing start capacitor, PTC relay, and overload protector.",
    timeline: "30–40 mins",
    note: "High-grade replacement relays matched to compressor specifications."
  },
  {
    service: "Defrost System & Drain Line Flushing",
    scope: "Clearing frozen drainage channels, testing defrost heater and bimetal sensor.",
    timeline: "45–60 mins",
    note: "Restores air circulation and stops internal pooling."
  },
  {
    service: "Thermostat Switch & Sensor Replacement",
    scope: "Temperature dial replacement or NTC thermistor sensor wiring check.",
    timeline: "30–45 mins",
    note: "Fixes continuous running or food overfreezing."
  },
  {
    service: "Evaporator / Condenser Fan Motor Servicing",
    scope: "Resolving squealing motor bearings, fan blade alignment, or motor replacement.",
    timeline: "45–60 mins",
    note: "Restores forced cold airflow between compartments."
  },
  {
    service: "Refrigerant Leak Repair & Full Gas Charging",
    scope: "Nitrogen pressure testing, pinhole brazing, vacuum pump evacuation, and gas refill.",
    timeline: "60–90 mins",
    note: "Factory-grade R600a (Isobutane) or R134a charged by weight."
  }
];

export default function PricingSection() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
            Honest Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Transparent Service & Diagnostic Guidelines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            We believe in complete pricing transparency. Our technician evaluates your refrigerator on-site, explains the exact fault, and provides an upfront quote for your approval before performing any work.
          </p>
        </div>

        {/* 4 Transparency Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
            <span className="text-2xl font-black font-mono text-cyan-700 block mb-2">01</span>
            <h4 className="font-bold text-slate-900 text-base mb-1">On-Site Inspection</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Technician examines mechanical and electrical parts right at your residence.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
            <span className="text-2xl font-black font-mono text-cyan-700 block mb-2">02</span>
            <h4 className="font-bold text-slate-900 text-base mb-1">Upfront Quotation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear explanation of necessary repairs and cost before any work commences.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
            <span className="text-2xl font-black font-mono text-cyan-700 block mb-2">03</span>
            <h4 className="font-bold text-slate-900 text-base mb-1">No Surprise Charges</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You only pay for approved services and components. No hidden line items.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
            <span className="text-2xl font-black font-mono text-cyan-700 block mb-2">04</span>
            <h4 className="font-bold text-slate-900 text-base mb-1">Cooling Verification</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Testing temperatures and refrigeration cycles prior to final sign-off.
            </p>
          </div>
        </div>

        {/* Pricing Guideline Table / Card Grid */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Common Service Categories & Scope
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Typical technical requirements across Mumbai households.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 bg-cyan-100/60 px-3 py-1.5 rounded-lg border border-cyan-200">
              <ShieldCheck className="w-4 h-4 text-cyan-700" />
              <span>Quote Approved Prior to Repair</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricingGuidelines.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/90 flex flex-col justify-between hover:border-cyan-400 hover:shadow-xs transition-all"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.service}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.scope}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Turnaround:</span>
                    <span className="font-medium text-slate-800">{item.timeline}</span>
                  </div>
                  <p className="text-[11px] text-cyan-700 font-medium">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 max-w-xl text-center sm:text-left">
              *All repair quotes depend on the specific refrigerator format (Single Door, Frost Free, Side-by-Side), brand model specifications, and whether component replacement is required.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openBookingModal()}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-xs cursor-pointer shadow-sm"
              >
                Book Inspection Visit
              </button>
              <a
                href={businessInfo.phoneTel}
                className="px-4 py-2.5 rounded-xl font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 text-xs"
              >
                Call: {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
