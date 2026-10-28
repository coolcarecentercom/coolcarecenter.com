import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import BookingForm from './BookingForm';
import { useBooking } from '../context/BookingContext';

export default function BookingModal() {
  const { isModalOpen, closeBookingModal, initialData } = useBooking();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={closeBookingModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with >= 44px touch target */}
        <button
          onClick={closeBookingModal}
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-1 sm:p-2">
          <BookingForm
            initialProblem={initialData?.problem}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
