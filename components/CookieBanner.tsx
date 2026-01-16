import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { enableGA, disableGA, trackPageView } from '../src/analytics';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    console.log('CookieBanner useEffect, cookiesAccepted:', cookiesAccepted);
    if (cookiesAccepted === 'true') {
      // Si ya se aceptaron, activar GA
      enableGA();
    } else if (cookiesAccepted === 'false' || cookiesAccepted === 'essential') {
      // Si se rechazaron o solo esenciales, desactivar GA
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

  const configureCookies = () => {
    // Mostrar modal de configuración
    setShowConfigModal(true);
  };

  const acceptAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    setShowConfigModal(false);
    enableGA();
    if (window.gtag) {
      window.gtag('event', 'cookies_accepted_all', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      });
    }
    console.log('Cookies aceptadas (todas) - GA activado');
  };

  const rejectAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
    setShowConfigModal(false);
    disableGA();
    if (window.gtag) {
      window.gtag('event', 'cookies_rejected_all', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      });
    }
    console.log('Cookies rechazadas (todas) - GA desactivado');
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookiesAccepted', 'essential');
    setShowBanner(false);
    setShowConfigModal(false);
    disableGA(); // No GA
    console.log('Solo cookies esenciales - GA desactivado');
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 border-t border-gray-700">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-4">
              <p className="text-sm">
                Utilizamos cookies para mejorar tu experiencia. 
                <Link to="/cookies" className="text-red-400 hover:text-red-300 underline ml-1">
                  Más información
                </Link>
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={configureCookies}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white rounded transition-colors"
              >
                Configurar
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfigModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Configurar Cookies</h3>
            <p className="text-sm mb-4">Elige qué cookies aceptar:</p>
            <div className="space-y-2">
              <button
                onClick={acceptAllCookies}
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
              >
                Aceptar todas las cookies
              </button>
              <button
                onClick={acceptEssentialOnly}
                className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors"
              >
                Solo cookies esenciales
              </button>
              <button
                onClick={rejectAllCookies}
                className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
              >
                Rechazar todas las cookies
              </button>
            </div>
            <button
              onClick={() => setShowConfigModal(false)}
              className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white rounded transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;