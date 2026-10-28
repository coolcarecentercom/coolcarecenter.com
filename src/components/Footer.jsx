import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { businessInfo, servicesData, refrigeratorTypes, mumbaiRegions } from '../data/websiteData';

export default function Footer() {
  return (
    <footer className="bg-[#070D1A] text-slate-300 border-t border-slate-800 pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Bio (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md shadow-cyan-900/30 border border-cyan-500/30 bg-[#060D1B] flex-shrink-0 flex items-center justify-center">
                <img 
                  src={businessInfo.logo} 
                  alt="Cool Care Centre Official Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  COOL CARE <span className="text-cyan-400">CENTRE</span>
                </span>
                <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                  Doorstep Refrigerator Repair Mumbai
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Cool Care Centre provides professional, reliable refrigerator repair and service directly at your doorstep across all Mumbai locations. Expert fault diagnosis, transparent service, and quality repair solutions for single door, double door, and side-by-side models.
            </p>

            <div className="space-y-2.5 pt-2">
              <a 
                href={businessInfo.phoneTel} 
                className="flex items-center gap-3 text-sm font-semibold text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Helpline: {businessInfo.phoneDisplay}</span>
              </a>

              <a 
                href={`mailto:${businessInfo.email}`} 
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{businessInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{businessInfo.operatingHours}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Doorstep Service Across All Mumbai Locations</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-cyan-400 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/refrigerator-repair-mumbai" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Refrigerator Repair</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/refrigerator-types" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Refrigerator Types</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Contact & Book</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Refrigerator Services */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-cyan-400 pl-2.5">
              Refrigerator Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link to={srv.slug} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="truncate">{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/refrigerator-gas-charging-mumbai" className="text-cyan-400 hover:underline text-xs font-semibold pt-1 inline-block">
                  + Gas Charging & Leak Detection →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Refrigerator Types */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-cyan-400 pl-2.5">
              Appliance Types
            </h4>
            <ul className="space-y-2.5 text-sm">
              {refrigeratorTypes.map((type) => (
                <li key={type.id}>
                  <Link to={type.slug} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{type.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mumbai Coverage Areas Row */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Doorstep Service Coverage Across Mumbai</span>
            </h4>
            <span className="text-xs text-slate-400">
              Western Suburbs • South Mumbai • Central Mumbai • Eastern Suburbs
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
            {mumbaiRegions.map((reg) => (
              <div key={reg.region} className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <span className="block font-semibold text-slate-200 mb-1.5">{reg.region}</span>
                <p className="text-slate-400 leading-relaxed">
                  {reg.areas.slice(0, 5).join(', ')}, & more
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <span className="text-slate-400">Website: coolcarecenter.com</span>
          </div>

          <p className="text-center md:text-right text-slate-400">
            © 2026 Cool Care Centre. All Rights Reserved. Doorstep Refrigerator Repair in Mumbai.
          </p>
        </div>

      </div>
    </footer>
  );
}
