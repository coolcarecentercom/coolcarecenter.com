import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  AlertCircle, 
  MessageCircle, 
  Wrench, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { businessInfo, allMumbaiAreas } from '../data/websiteData';
import { trackBookingSubmit, trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const problemOptions = [
  "Not Cooling / Weak Cooling",
  "Water Leaking Inside / Under Fridge",
  "Gas Leakage / Charging Required",
  "Compressor Not Starting / Clicking Noise",
  "Loud Humming or Fan Noise",
  "Excessive Ice / Frost Buildup",
  "PCB Error Code / Power Tripping",
  "Door Not Sealing / Gasket Damaged",
  "General Refrigerator Inspection",
  "Other Refrigerator Issue"
];

const timeSlotOptions = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
  "Earliest Available Slot"
];

export default function BookingForm({ 
  initialProblem = '', 
  onSuccess = null 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    locality: '',
    problem: initialProblem || '',
    preferredDate: '',
    preferredTime: 'Earliest Available Slot',
  });

  const [showOptionalPreferences, setShowOptionalPreferences] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.locality.trim()) {
      setErrorMessage('Please enter your area or locality in Mumbai.');
      return;
    }

    if (!formData.problem) {
      setErrorMessage('Please select your refrigerator problem.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Generate readable reference code
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const refCode = `CCC-MUM-${randomNum}`;

    setTimeout(() => {
      setBookingRef(refCode);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Google Ads conversion tracking
      trackBookingSubmit({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        locality: formData.locality,
        problem: formData.problem,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        bookingRef: refCode
      });

      if (onSuccess) onSuccess(refCode);
    }, 450);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Cool Care Centre, I need refrigerator repair service in Mumbai.%0A%0A` +
      `*Booking Ref:* ${bookingRef}%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Phone:* ${formData.mobileNumber}%0A` +
      `*Area:* ${encodeURIComponent(formData.locality)}, Mumbai%0A` +
      `*Problem:* ${encodeURIComponent(formData.problem)}%0A` +
      (formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}%0A` : '') +
      `*Preferred Slot:* ${encodeURIComponent(formData.preferredTime)}`;
    
    return `https://wa.me/919136327975?text=${text}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            Booking Confirmed
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Thank you! Your service request has been received.
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Our Mumbai service coordinator will call you shortly on <span className="font-bold text-slate-900">{formData.mobileNumber}</span> to confirm your doorstep technician visit.
          </p>
        </div>

        {/* Reference summary box */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
            <span className="text-slate-500 font-medium">Service Reference ID:</span>
            <span className="font-mono font-black text-cyan-700 text-base">{bookingRef}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Customer Name:</span>
            <span className="font-bold text-slate-800">{formData.fullName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Service Location:</span>
            <span className="font-bold text-slate-800">{formData.locality}, Mumbai</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Issue Reported:</span>
            <span className="font-bold text-slate-800">{formData.problem}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200/80">
            <span className="text-slate-500">Preferred Slot:</span>
            <span className="font-bold text-cyan-800">
              {formData.preferredDate ? `${formData.preferredDate} • ` : ''}{formData.preferredTime}
            </span>
          </div>
        </div>

        {/* Quick Follow-up CTAs */}
        <div className="space-y-3 pt-1">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('booking_success_screen')}
            className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] py-3 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20 text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Details on WhatsApp for Instant Confirmation</span>
          </a>

          <a
            href={businessInfo.phoneTel}
            onClick={() => trackPhoneClick('booking_success_screen')}
            className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] py-3 px-5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm border border-slate-300"
          >
            <Phone className="w-4 h-4 text-cyan-600" />
            <span>Call Service Team: {businessInfo.phoneDisplay}</span>
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              mobileNumber: '',
              locality: '',
              problem: '',
              preferredDate: '',
              preferredTime: 'Earliest Available Slot',
            });
          }}
          className="text-xs font-semibold text-slate-400 hover:text-cyan-700 underline pt-2 block mx-auto cursor-pointer"
        >
          Book Another Service Visit
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-2xl relative text-left">
      {/* Form Header */}
      <div className="mb-5 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
          <span>Doorstep Refrigerator Service Mumbai</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Book Refrigerator Service
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Accurate diagnosis & doorstep repair for all refrigerator types across Mumbai.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-red-700 text-xs sm:text-sm font-semibold">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Primary Fields: Name, Mobile Number, Area/Locality, Refrigerator Problem */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full pl-10 pr-3.5 min-h-[48px] py-3 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              inputMode="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-10 pr-3.5 min-h-[48px] py-3 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Area / Locality in Mumbai */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
            Area / Locality in Mumbai <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="locality"
              list="mumbai-localities"
              value={formData.locality}
              onChange={handleChange}
              placeholder="e.g. Andheri, Bandra, Powai, Borivali, Dadar..."
              required
              className="w-full pl-10 pr-3.5 min-h-[48px] py-3 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            />
            <datalist id="mumbai-localities">
              {allMumbaiAreas.map((area) => (
                <option key={area} value={area} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Refrigerator Problem */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
            Refrigerator Problem <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Wrench className="w-4 h-4" />
            </div>
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-8 min-h-[48px] py-3 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Select Refrigerator Problem</option>
              {problemOptions.map((prob) => (
                <option key={prob} value={prob}>{prob}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Optional: Preferred Date & Time toggle */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowOptionalPreferences(!showOptionalPreferences)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 cursor-pointer py-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{showOptionalPreferences ? "Hide Schedule Preferences" : "+ Add Preferred Date & Time (Optional)"}</span>
          </button>

          {showOptionalPreferences && (
            <div className="mt-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  min={getTodayDateString()}
                  onChange={handleChange}
                  className="w-full px-3.5 min-h-[44px] py-2 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3.5 min-h-[44px] py-2 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {timeSlotOptions.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* CTA: Book Refrigerator Service */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[50px] py-3.5 px-6 rounded-xl font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 text-base cursor-pointer transform active:scale-98 disabled:opacity-75"
          >
            {isSubmitting ? (
              <span>Logging Your Request...</span>
            ) : (
              <>
                <span>Book Refrigerator Service</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </>
            )}
          </button>
        </div>

        {/* Micro-trust strip below CTA */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-500 text-center flex-wrap">
          <span>✓ Doorstep Service</span>
          <span>•</span>
          <span>✓ Professional Diagnosis</span>
          <span>•</span>
          <span>✓ Mumbai Coverage</span>
        </div>
      </form>
    </div>
  );
}
