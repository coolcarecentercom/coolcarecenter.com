import React, { useState } from 'react';
import { 
  Wrench, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  CalendarCheck, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { businessInfo } from '../data/websiteData';

const diagnosticMatrix = [
  {
    type: "Double Door / Frost Free",
    issue: "Freezer is cold, but bottom fridge compartment is warm",
    suspect: "Failed Defrost Heater, Bimetal Sensor, or Evaporator Fan Motor",
    severity: "High (Food spoilage risk within 24h)",
    action: "Doorstep technician will inspect defrost timer, test heating element continuity, and clear blocked airflow damper.",
    estTime: "45–60 mins doorstep repair",
    category: "Airflow / Defrost System"
  },
  {
    type: "All Types (Single / Double / Inverter)",
    issue: "Clicking noise from rear every 2-3 minutes, fridge not cooling",
    suspect: "Defective PTC Starter Relay, Run Capacitor, or Overload Protector",
    severity: "Critical (Compressor motor unable to start)",
    action: "Technician tests compressor terminal resistances and starter relay with a digital multimeter to avoid unnecessary compressor replacement.",
    estTime: "30–45 mins doorstep repair",
    category: "Electrical Starter Circuit"
  },
  {
    type: "Direct Cool Single Door",
    issue: "Excessive ice block formation inside freezer box",
    suspect: "Degraded Thermostat Bellows or Hardened Door Gasket Seal",
    severity: "Medium (Excessive power consumption)",
    action: "Calibration or replacement of factory-calibrated thermostat switch and inspection of magnetic door gasket perimeter.",
    estTime: "30–40 mins doorstep repair",
    category: "Temperature Regulation"
  },
  {
    type: "All Models",
    issue: "Water leaking under crisper box or pooling on kitchen floor",
    suspect: "Choked Defrost Drain Chute or Cracked Compressor Drain Tray",
    severity: "Medium (Slipping hazard & electrical moisture)",
    action: "Deep flushing of internal drain line with pressurized warm flow and inspection of compressor evaporation tray.",
    estTime: "30–40 mins doorstep repair",
    category: "Drainage System"
  },
  {
    type: "Inverter / Smart Refrigerator",
    issue: "Error code blinking on panel (e.g., E1, E2, Er, F0)",
    suspect: "Inverter IPM Power Driver Board, Sensor Line, or Voltage Surge",
    severity: "High (System enters protective shutdown)",
    action: "Electronic diagnostic multimeter check across inverter PCB rails and temperature sensor resistance readings.",
    estTime: "60–90 mins doorstep repair",
    category: "Electronic Control PCB"
  },
  {
    type: "All Models",
    issue: "Gradual loss of cooling over days, compressor runs constantly",
    suspect: "Refrigerant Pin-hole Leakage (Gas Depletion)",
    severity: "High (Compressor runs dry and overheats)",
    action: "Nitrogen pressure leak test, brazing of pinhole leak, vacuum evacuation with pump, and precision gas recharging.",
    estTime: "60–90 mins doorstep repair",
    category: "Refrigeration Loop"
  }
];

export default function DiagnosticWizard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { openBookingModal } = useBooking();
  const currentDiagnosis = diagnosticMatrix[selectedIndex];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Fault Finder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instant Refrigerator Problem Diagnosis
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Select the symptom your refrigerator is showing to view the probable technical fault and recommended doorstep action.
          </p>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selector Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
              Select Your Observed Symptom:
            </span>
            {diagnosticMatrix.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                  selectedIndex === idx
                    ? 'bg-gradient-to-r from-cyan-950/90 to-slate-900 border-cyan-400 text-white shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'bg-[#0B1528] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${
                  selectedIndex === idx ? 'bg-cyan-400 ring-4 ring-cyan-400/20' : 'bg-slate-600'
                }`} />
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide block mb-0.5">
                    {item.type}
                  </span>
                  <p className="text-sm font-semibold leading-snug">
                    {item.issue}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Diagnostic Result Card */}
          <div className="lg:col-span-7 bg-[#0A1424] rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-lg border border-cyan-800/80">
                Technical Assessment
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentDiagnosis.estTime}</span>
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Selected Issue:
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  "{currentDiagnosis.issue}"
                </h3>
              </div>

              {/* Suspected Component */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Probable Suspected Component</span>
                </div>
                <p className="text-base font-bold text-slate-100">
                  {currentDiagnosis.suspect}
                </p>
                <div className="text-xs text-slate-400 pt-1 flex items-center gap-2">
                  <span className="text-slate-300 font-medium">Subsystem:</span>
                  <span className="text-cyan-300">{currentDiagnosis.category}</span>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Recommended Doorstep Inspection:
                </span>
                <p className="text-sm text-slate-300 leading-relaxed bg-[#060D1A] p-4 rounded-xl border border-slate-800">
                  {currentDiagnosis.action}
                </p>
              </div>

              {/* Safety notice */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>
                  Always disconnect power before inspection. Refrigerators contain high capacitance starter modules. Our Mumbai technicians carry calibrated testing meters.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={() => openBookingModal({ problem: currentDiagnosis.issue })}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/20 text-sm transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Schedule Technician for This Issue</span>
                </button>

                <a
                  href={businessInfo.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm transition-colors"
                >
                  <span>Helpline: {businessInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
