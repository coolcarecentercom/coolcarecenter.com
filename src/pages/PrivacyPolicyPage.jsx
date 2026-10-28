import React from 'react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/websiteData';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Cool Care Centre"
        description="Privacy policy and data protection practices for Cool Care Centre (coolcarecenter.com) doorstep refrigerator repair service in Mumbai."
        canonical="https://coolcarecenter.com/privacy-policy"
      />

      <section className="bg-[#091122] text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mt-2">Effective Date: October 2026 • Cool Care Centre (coolcarecenter.com)</p>
        </div>
      </section>

      <section className="py-14 bg-white text-slate-700 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              Cool Care Centre ("we", "our", or "us") operates the website <strong>coolcarecenter.com</strong> and provides doorstep refrigerator repair and maintenance services throughout Mumbai, Maharashtra, India. We are committed to protecting the personal information and privacy of our customers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>When you book a service or contact us via our website, telephone, or WhatsApp, we collect details necessary to coordinate technician dispatch, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Full Name</li>
              <li>Mobile Contact Number</li>
              <li>Address, Neighborhood, and Locality in Mumbai</li>
              <li>Appliance Make, Model, and Reported Issue details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p>Your details are used strictly for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Scheduling and fulfilling doorstep refrigerator inspection and repair appointments.</li>
              <li>Direct customer communication via phone or WhatsApp regarding technician arrival and service status.</li>
              <li>Generating transparent invoices and service records.</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or trade your personal contact details to third-party marketing companies.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Data Security</h2>
            <p>
              We implement industry-standard organizational and technical safeguards to secure your personal data against unauthorized access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update your details, please contact us:
            </p>
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
