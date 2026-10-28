import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';

// Pages
import HomePage from './pages/HomePage';
import RefrigeratorRepairPage from './pages/RefrigeratorRepairPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import RefrigeratorTypePage from './pages/RefrigeratorTypePage';
import ServicesHubPage from './pages/ServicesHubPage';
import RefrigeratorTypesHubPage from './pages/RefrigeratorTypesHubPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
          <Navbar />
          
          {/* Main content area with bottom padding for mobile sticky conversion bar */}
          <main className="flex-grow pb-24 sm:pb-28 lg:pb-0">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* Main Service Page / Google Ads Landing Page */}
              <Route path="/refrigerator-repair-mumbai" element={<RefrigeratorRepairPage />} />
              
              {/* Individual SEO Service Pages */}
              <Route 
                path="/refrigerator-service-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-service" />} 
              />
              <Route 
                path="/refrigerator-gas-charging-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-gas-charging" />} 
              />
              <Route 
                path="/refrigerator-not-cooling-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-not-cooling" />} 
              />
              <Route 
                path="/refrigerator-water-leakage-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-water-leakage" />} 
              />
              <Route 
                path="/refrigerator-compressor-repair-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-compressor-repair" />} 
              />
              <Route 
                path="/refrigerator-thermostat-repair-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-thermostat-repair" />} 
              />
              <Route 
                path="/refrigerator-pcb-repair-mumbai" 
                element={<ServiceDetailPage serviceId="refrigerator-pcb-repair" />} 
              />

              {/* Individual SEO Refrigerator Type Pages */}
              <Route 
                path="/single-door-refrigerator-repair-mumbai" 
                element={<RefrigeratorTypePage typeId="single-door" />} 
              />
              <Route 
                path="/double-door-refrigerator-repair-mumbai" 
                element={<RefrigeratorTypePage typeId="double-door" />} 
              />
              <Route 
                path="/side-by-side-refrigerator-repair-mumbai" 
                element={<RefrigeratorTypePage typeId="side-by-side" />} 
              />

              {/* Hub & Informational Pages */}
              <Route path="/services" element={<ServicesHubPage />} />
              <Route path="/refrigerator-types" element={<RefrigeratorTypesHubPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />

              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <MobileStickyBar />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}
