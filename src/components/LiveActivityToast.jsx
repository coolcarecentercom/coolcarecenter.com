import React, { useState, useEffect } from 'react';
import { MapPin, CheckCircle2, X } from 'lucide-react';

const activities = [
  { area: "Bandra West", action: "Doorstep technician dispatched for Double Door inspection", time: "8 mins ago" },
  { area: "Andheri East", action: "Gas leak testing & recharge completed", time: "22 mins ago" },
  { area: "Powai", action: "Inverter compressor start relay serviced", time: "35 mins ago" },
  { area: "Borivali West", action: "Defrost heater replacement completed", time: "48 mins ago" },
  { area: "Dadar", action: "Doorstep appointment confirmed for tomorrow morning", time: "Just now" },
  { area: "Juhu", action: "Side-by-side refrigerator diagnostic check completed", time: "1 hour ago" },
];

export default function LiveActivityToast() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = activities[currentIdx];

  return (
    <div 
      className={`fixed bottom-20 left-4 z-30 hidden sm:block max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <div className="bg-[#0B1528]/95 backdrop-blur-md border border-cyan-500/30 text-white rounded-2xl p-3.5 shadow-2xl shadow-black/40 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MapPin className="w-4 h-4" />
        </div>

        <div className="flex-1 pr-2">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-bold text-cyan-300">{current.area}, Mumbai</span>
            <span className="text-[10px] text-slate-400">• {current.time}</span>
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            {current.action}
          </p>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
