import React from 'react';
import { brandsList } from '../data/websiteData';
import { ShieldCheck } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section className="py-14 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
            Brand Versatility
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Brands We Service
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Professional repair diagnosis for all leading refrigerator manufacturers in India.
          </p>
        </div>

        {/* Text-based Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brandsList.map((brand) => (
            <div
              key={brand}
              className="bg-slate-50/80 hover:bg-white rounded-xl p-4 border border-slate-200/80 hover:border-cyan-400 hover:shadow-md transition-all text-center flex flex-col items-center justify-center min-h-[76px] group"
            >
              <span className="text-base font-extrabold text-slate-800 tracking-tight group-hover:text-cyan-700 transition-colors">
                {brand}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                Repair & Service
              </span>
            </div>
          ))}
          
          <div className="bg-cyan-50/50 rounded-xl p-4 border border-cyan-200/60 text-center flex flex-col items-center justify-center min-h-[76px]">
            <span className="text-sm font-bold text-cyan-800 tracking-tight">
              + Other Makes
            </span>
            <span className="text-[10px] text-cyan-600 tracking-wider mt-0.5">
              All Major Brands
            </span>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          *Brand names and trademarks belong to their respective owners and are mentioned purely for appliance identification and repair compatibility purposes.
        </p>

      </div>
    </section>
  );
}
