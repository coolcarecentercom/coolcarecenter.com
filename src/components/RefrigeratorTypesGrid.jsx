import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Columns2, 
  SplitSquareVertical, 
  LayoutGrid, 
  Cpu, 
  Wind, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { refrigeratorTypes } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';

const typeIcons = {
  "single-door": Columns2,
  "double-door": Columns2,
  "side-by-side": SplitSquareVertical,
  "french-door": LayoutGrid,
  "inverter-refrigerator": Cpu,
  "frost-free-refrigerator": Wind,
};

export default function RefrigeratorTypesGrid() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100" id="refrigerator-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
            Refrigerator Formats
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Service for All Major Refrigerator Types
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether your appliance is a direct-cool unit or a high-capacity multi-door inverter refrigerator, our Mumbai technicians provide precise diagnosis.
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {refrigeratorTypes.map((type) => {
            const Icon = typeIcons[type.id] || Columns2;
            return (
              <div 
                key={type.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      All Brands
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {type.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {type.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                    {type.keyPoints.slice(0, 2).map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => openBookingModal({ problem: `${type.title} Repair` })}
                    className="min-h-[44px] px-3.5 py-2 rounded-xl bg-cyan-600/10 text-cyan-800 hover:bg-cyan-600 hover:text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Book Repair
                  </button>
                  <Link
                    to={type.slug}
                    className="inline-flex items-center gap-1 min-h-[44px] px-2 text-xs font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
