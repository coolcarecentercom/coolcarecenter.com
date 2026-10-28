import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { businessInfo, servicesData, refrigeratorTypes } from '../data/websiteData';
import { useBooking } from '../context/BookingContext';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/tracking';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [typesDropdown, setTypesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTypesOpen, setMobileTypesOpen] = useState(false);
  
  const location = useLocation();
  const { openBookingModal } = useBooking();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesDropdown(false);
    setTypesDropdown(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#070D18] text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Doorstep Service Across All Mumbai Locations</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>8:00 AM – 9:00 PM (All 7 Days)</span>
            </span>
          </div>
          <div className="flex items-center gap-3 ml-auto text-xs">
            <a 
              href={`mailto:${businessInfo.email}`}
              className="hidden lg:inline text-slate-400 hover:text-white transition-colors"
            >
              {businessInfo.email}
            </a>
            <a 
              href={businessInfo.phoneTel} 
              onClick={() => trackPhoneClick('top_bar')}
              className="inline-flex items-center gap-1.5 font-bold text-white bg-cyan-600/30 hover:bg-cyan-600/50 px-3 py-1 rounded-full border border-cyan-500/30 transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-cyan-400 flex-shrink-0" />
              <span>Call: {businessInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B1325]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-cyan-500/20' 
            : 'bg-[#0B1325] border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md shadow-cyan-900/30 border border-cyan-500/30 bg-[#060D1B] flex-shrink-0 flex items-center justify-center">
                <img 
                  src={businessInfo.logo} 
                  alt="Cool Care Centre Logo" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1">
                  <span>COOL CARE</span>
                  <span className="text-cyan-400">CENTRE</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  Refrigerator Repair Mumbai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Section 4: Logo, Home, Services, Refrigerator Types, About, Contact) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === '/' 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    location.pathname.includes('/refrigerator-') || location.pathname === '/services'
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={servicesDropdown}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                </button>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-700/80 p-3 grid gap-1">
                      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800">
                        Doorstep Mumbai Services
                      </div>
                      <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1">
                        <Link
                          to="/refrigerator-repair-mumbai"
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-cyan-300 hover:text-white hover:bg-cyan-950/60 transition-all font-bold"
                        >
                          <span>Refrigerator Repair (Main)</span>
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                        </Link>
                        {servicesData.slice(1, 8).map((srv) => (
                          <Link
                            key={srv.id}
                            to={srv.slug}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-cyan-950/40 hover:border-cyan-500/20 transition-all border border-transparent"
                          >
                            <span className="font-medium truncate">{srv.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                          </Link>
                        ))}
                      </div>
                      <Link 
                        to="/services" 
                        className="mt-2 block text-center text-xs font-bold py-2 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 transition-colors border border-cyan-500/30"
                      >
                        View All Refrigerator Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Refrigerator Types Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setTypesDropdown(true)}
                onMouseLeave={() => setTypesDropdown(false)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    location.pathname.includes('-door-') || location.pathname.includes('side-by-side') || location.pathname === '/refrigerator-types'
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={typesDropdown}
                >
                  <span>Refrigerator Types</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${typesDropdown ? 'rotate-180' : ''}`} />
                </button>

                {typesDropdown && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-700/80 p-3 grid gap-1">
                      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800">
                        Appliance Categories
                      </div>
                      {refrigeratorTypes.map((type) => (
                        <Link
                          key={type.id}
                          to={type.slug}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-cyan-950/40 hover:border-cyan-500/20 transition-all border border-transparent"
                        >
                          <span className="font-medium">{type.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                        </Link>
                      ))}
                      <Link 
                        to="/refrigerator-types" 
                        className="mt-2 block text-center text-xs font-bold py-2 px-3 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 transition-colors border border-cyan-500/30"
                      >
                        Compare All Fridge Types →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop Action Buttons: CALL NOW & BOOK SERVICE */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href={businessInfo.phoneTel} 
                onClick={() => trackPhoneClick('desktop_header_call_now')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-extrabold tracking-wide uppercase text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all shadow-sm group"
                title={`Call ${businessInfo.phoneDisplay}`}
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>CALL NOW • {businessInfo.phoneDisplay}</span>
              </a>

              <button 
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl text-xs font-black tracking-wide uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>BOOK SERVICE</span>
              </button>
            </div>

            {/* Mobile Header Icons with >= 44px touch targets */}
            <div className="flex lg:hidden items-center space-x-2">
              <a 
                href={businessInfo.phoneTel}
                onClick={() => trackPhoneClick('mobile_header')}
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center active:scale-95"
                aria-label="Call Cool Care Centre"
              >
                <Phone className="w-5 h-5" />
              </a>

              <a 
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('mobile_header')}
                className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-600/50 text-emerald-400 flex items-center justify-center active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-center focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A101D] border-b border-slate-800 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white"
              >
                Home
              </Link>

              <Link 
                to="/refrigerator-repair-mumbai" 
                className="block px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-cyan-400 hover:bg-slate-800/80"
              >
                Refrigerator Repair (Main)
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/80"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-900/50 rounded-xl my-1 border border-slate-800">
                    {servicesData.slice(0, 7).map((srv) => (
                      <Link
                        key={srv.id}
                        to={srv.slug}
                        className="block px-3 py-2 text-sm text-slate-300 hover:text-white font-medium"
                      >
                        {srv.title}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Types Accordion */}
              <div>
                <button 
                  onClick={() => setMobileTypesOpen(!mobileTypesOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/80"
                >
                  <span>Refrigerator Types</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileTypesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileTypesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-900/50 rounded-xl my-1 border border-slate-800">
                    {refrigeratorTypes.map((type) => (
                      <Link
                        key={type.id}
                        to={type.slug}
                        className="block px-3 py-2 text-sm text-slate-300 hover:text-white font-medium"
                      >
                        {type.title}
                      </Link>
                    ))}
                    <Link
                      to="/refrigerator-types"
                      className="block px-3 py-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      All Refrigerator Types →
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="block px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white"
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="block px-3 py-3 min-h-[44px] rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800/80 hover:text-white"
              >
                Contact
              </Link>
            </div>

            {/* Quick Actions in mobile menu */}
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-xl text-sm font-black uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK SERVICE</span>
              </button>

              <a
                href={businessInfo.phoneTel}
                onClick={() => trackPhoneClick('mobile_menu_call')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-xl text-sm font-bold text-white bg-slate-800 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {businessInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
