import React, { useState, useEffect } from 'react';
import { enableGA, disableGA, trackPageView } from '../src/analytics';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      // Si ya se aceptaron, activar GA
      enableGA();
    } else if (cookiesAccepted === 'false') {
      // Si se rechazaron, desactivar GA
      disableGA();
    } else {
      // Primera visita, mostrar banner
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    // Activar Google Analytics
    enableGA();
    // Track event
    if (window.gtag) {
      window.gtag('event', 'cookies_accepted', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      });
    }
    console.log('Cookies aceptadas - GA activado');
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
    // Desactivar Google Analytics
    disableGA();
    // Track event
    if (window.gtag) {
      window.gtag('event', 'cookies_rejected', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      });
    }
    console.log('Cookies rechazadas - GA desactivado');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 border-t border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p className="text-sm">
            Utilizamos cookies para mejorar tu experiencia. 
            <a href="/cookies" className="text-red-400 hover:text-red-300 underline ml-1">
              Más información
            </a>
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;