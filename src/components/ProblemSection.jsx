import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Snowflake,
  Volume2,
  Droplets,
  Layers,
  Wrench,
  PowerOff,
  Cpu,
  Flame,
  ArrowRight,
  Phone,
  CalendarCheck
} from 'lucide-react';
import { problemCards, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick } from '../utils/tracking';

const problemIconMap = {
  "not-cooling": Snowflake,
  "making-noise": Volume2,
  "water-leaking": Droplets,
  "too-much-ice": Layers,
  "compressor-issue": Wrench,
  "fridge-turning-off": PowerOff,
  "pcb-error": Cpu,
  "gas-charging": Flame,
};

export default function ProblemSection({ onSelectProblem = null }) {
  const { openBookingModal } = useBooking();

  const handleProblemClick = (problemTitle) => {
    const cleanProblem = problemTitle.replace('?', '').trim();
    if (onSelectProblem) {
      onSelectProblem(cleanProblem);
      const bookingEl = document.getElementById('booking-form-section');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    openBookingModal({ problem: cleanProblem });
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden" id="problem-selector">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800">
            Quick Diagnostic Selector
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-3 text-white">
            What's Wrong With Your Refrigerator?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Select your symptom below for targeted doorstep diagnosis across Mumbai.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problemCards.map((prob) => {
            const Icon = problemIconMap[prob.id] || Wrench;
            return (
              <div 
                key={prob.id}
                className="bg-[#0B1528] rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {prob.summary}
                  </p>

                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Common Cause:
                    </span>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {prob.causes}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 border-t border-slate-800/80">
                  <button
                    onClick={() => handleProblemClick(prob.title)}
                    className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-400 text-cyan-300 hover:text-slate-950 text-xs font-bold transition-all text-center border border-cyan-500/30 cursor-pointer active:scale-95"
                  >
                    Fix This Issue
                  </button>
                  <Link
                    to={prob.slug}
                    className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                    title="View details"
                    aria-label={`View details for ${prob.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Conversion Strip (Problem Section -> CTA) */}
        <div className="mt-10 sm:mt-12 bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Not sure what's causing the problem?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Our technician conducts an on-site multi-point inspection and explains the exact issue.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center">
            <a
              href={businessInfo.phoneTel}
              onClick={() => trackPhoneClick('problem_section_cta')}
              className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-700 hover:bg-slate-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call {businessInfo.phoneDisplay}</span>
            </a>
            <button
              onClick={() => openBookingModal()}
              className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <CalendarCheck className="w-4 h-4 text-slate-950" />
              <span>Book Service</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
