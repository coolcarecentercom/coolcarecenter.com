import React from 'react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/websiteData';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Cool Care Centre"
        description="Terms and conditions for doorstep refrigerator repair and service provided by Cool Care Centre (coolcarecenter.com) in Mumbai."
        canonical="https://coolcarecenter.com/terms-and-conditions"
      />

      <section className="bg-[#091122] text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm mt-2">Effective Date: October 2026 • Cool Care Centre (coolcarecenter.com)</p>
        </div>
      </section>

      <section className="py-14 bg-white text-slate-700 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Scope of Services</h2>
            <p>
              Cool Care Centre provides professional on-site doorstep inspection, diagnosis, repair, and maintenance for household and commercial refrigerators across Mumbai, Maharashtra. By scheduling a service booking with us, you agree to these Terms & Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Doorstep Inspection & Quotation</h2>
            <p>
              Our technician inspects the appliance on-site to diagnose electrical, mechanical, or refrigerant issues. A clear estimate outlining recommended repairs and replacement components is provided to the customer before repair execution commences. Work proceeds only upon customer confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Replacement Components</h2>
            <p>
              When component replacement (such as relays, thermostats, capacitors, fan motors, or PCB modules) is required, compatible parts matching appliance specifications are installed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Customer Responsibilities</h2>
            <p>
              Customers must ensure safe access to the refrigerator and electrical supply. If an appliance has pre-existing internal body corrosion, structural cabinet rupture, or tampering by unauthorized persons, our technician will advise accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Trademarks & Brand References</h2>
            <p>
              All product brand names, trademarks, and registered logos mentioned on this website (such as LG, Samsung, Whirlpool, Godrej, Haier, Bosch, etc.) belong to their respective proprietors and are referenced solely to describe appliance service compatibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact & Service Support</h2>
            <p>For service inquiries or clarifications regarding these terms:</p>
            <div className="mt-2 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm">
              <p><strong>Brand:</strong> Cool Care Centre</p>
              <p><strong>Phone:</strong> {businessInfo.phoneDisplay}</p>
              <p><strong>Email:</strong> {businessInfo.email}</p>
              <p><strong>Website:</strong> {businessInfo.website}</p>
              <p><strong>Service Area:</strong> Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
