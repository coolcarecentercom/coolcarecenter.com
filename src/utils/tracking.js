/**
 * Google Ads & Analytics Conversion Tracking Helper
 * Configured with standard event hooks ready for Google Ads / Google Tag Manager (GTM).
 * Event names:
 *  - phone_click
 *  - whatsapp_click
 *  - booking_submit
 *  - contact_submit
 */

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    event_category: 'conversion',
    ...params,
    timestamp: new Date().toISOString()
  };

  // Push to GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // Call gtag if initialized
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Dispatch custom event for developer monitoring/integrations
  try {
    window.dispatchEvent(new CustomEvent('coolcare_tracking', { detail: eventPayload }));
  } catch {
    // Ignore in unsupported environments
  }
};

export const trackPhoneClick = (location = 'website') => {
  trackEvent('phone_click', {
    method: 'phone',
    location,
    target: 'tel:+919136327975'
  });
};

export const trackWhatsAppClick = (location = 'website') => {
  trackEvent('whatsapp_click', {
    method: 'whatsapp',
    location,
    target: 'https://wa.me/919136327975'
  });
};

export const trackBookingSubmit = (details = {}) => {
  trackEvent('booking_submit', {
    method: 'online_booking',
    locality: details.locality || '',
    refrigerator_type: details.refrigeratorType || '',
    problem: details.problem || '',
    booking_ref: details.bookingRef || ''
  });
};

export const trackContactSubmit = (details = {}) => {
  trackEvent('contact_submit', {
    method: 'contact_form',
    subject: details.subject || ''
  });
};
