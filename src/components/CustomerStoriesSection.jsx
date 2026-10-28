import React from 'react';
import { MapPin, Clock, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const repairCaseStudies = [
  {
    location: "Bandra West, Mumbai",
    appliance: "Frost-Free Double Door Refrigerator",
    problem: "Freezer working fine, but lower fresh-food compartment staying lukewarm.",
    causeDiagnosed: "Burned defrost heating element leading to heavy frost choking the airflow damper passage.",
    actionTaken: "Heater element continuity tested, defective heater replaced on-site, and air supply duct cleared of ice.",
    turnaround: "55 minutes doorstep service"
  },
  {
    location: "Powai, Mumbai",
    appliance: "Smart Inverter Refrigerator",
    problem: "Compressor clicking repetitively every 2 minutes without starting.",
    causeDiagnosed: "Failing PTC starter relay and burned capacitor; compressor motor windings tested in healthy range.",
    actionTaken: "Starter relay module replaced immediately, saving customer from unnecessary compressor replacement.",
    turnaround: "40 minutes doorstep service"
  },
  {
    location: "Andheri West, Mumbai",
    appliance: "Direct Cool Refrigerator",
    problem: "Water constantly pooling beneath vegetable crisper trays onto kitchen floor.",
    causeDiagnosed: "Defrost drain chute clogged with food particles and bio-film at rear exit.",
    actionTaken: "Pressurized warm water flush of drain tube, sanitized evaporator pan, and checked door gasket seal.",
    turnaround: "35 minutes doorstep service"
  },
  {
    location: "Colaba, South Mumbai",
    appliance: "Side-by-Side Refrigerator",
    problem: "Gradual cooling drop over 4 days; compressor running non-stop with faint hissing sound.",
    causeDiagnosed: "Pinhole refrigerant leak on copper tubing joint due to motor vibration.",
    actionTaken: "Nitrogen pressure leak detection, brazing seal, deep vacuum pump evacuation, and calibrated R600a gas recharge.",
    turnaround: "75 minutes doorstep service"
  }
];

export default function CustomerStoriesSection() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
            Real Appliance Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Recent Doorstep Repair Scenarios in Mumbai
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            See how our technicians diagnose and resolve everyday refrigerator cooling faults across Mumbai neighborhoods with methodical technical accuracy.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repairCaseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Location & Turnaround header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{study.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{study.turnaround}</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block mb-1">
                    {study.appliance}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    "{study.problem}"
                  </h3>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1.5">
                  <div>
                    <span className="font-bold text-slate-700">Diagnosis: </span>
                    <span className="text-slate-600">{study.causeDiagnosed}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Doorstep Resolution: </span>
                    <span className="text-slate-600">{study.actionTaken}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Proper Cooling Restored</span>
                </span>
                <button
                  onClick={() => openBookingModal({ problem: study.problem })}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Book Similar Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
