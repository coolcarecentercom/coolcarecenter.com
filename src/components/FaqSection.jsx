import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, CalendarCheck } from 'lucide-react';
import { globalFaqs, businessInfo } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';

export default function FaqSection({ customFaqs = null, title = "Frequently Asked Questions", subtitle = "Helpful answers to common questions about refrigerator repair in Mumbai." }) {
  const faqs = customFaqs || globalFaqs;
  const [openIndex, setOpenIndex] = useState(0);
  const { openBookingModal } = useBooking();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Structured schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question || f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer || f.a,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const question = faq.question || faq.q;
            const answer = faq.answer || faq.a;
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-cyan-300 shadow-md shadow-cyan-900/5' 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-cyan-800' : 'text-slate-900'}`}>
                    {question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-cyan-50 text-cyan-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question about your refrigerator?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Speak with our Mumbai service team directly.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={businessInfo.phoneTel}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Call {businessInfo.phoneDisplay}
            </a>
            <button
              onClick={() => openBookingModal()}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Book Service
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
