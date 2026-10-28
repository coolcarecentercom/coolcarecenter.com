import React from 'react';
import { ShieldCheck, Home, Eye, Wrench, CheckCircle2 } from 'lucide-react';
import { trustCards } from '../data/websiteData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Home: Home,
  Eye: Eye,
  Wrench: Wrench,
};

export default function TrustStrip({ compact = false }) {
  if (compact) {
    return (
      <div className="w-full bg-[#070E1C] border-y border-slate-800 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Doorstep Service</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Professional Diagnosis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Mumbai Service Area</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
            Professional Refrigerator Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            Professional Service Standards in Mumbai
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dedicated refrigerator repair standards delivering dependable cooling solutions for homes across Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || ShieldCheck;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
