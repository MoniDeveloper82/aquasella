import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const VentaPlazosPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && containerRef.current) {
      const scriptId = 'evezing-script-aquasella-2026-plazos';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.src = 'https://aquasellatpvplazos.evezing.com/iframe-shop/event/aquasella-2026';
        script.id = scriptId;
        script.async = true;
        containerRef.current.appendChild(script);
      }
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div className="min-h-screen bg-black text-white pt-0 pb-10">
      <>
        {/* Navegación de regreso - Por encima del banner */}
        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <Link 
            to="/tickets" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Tickets
          </Link>
        </div>
        
        <img src="/img/t1.png" alt="Aquasella Banner" className="w-full max-h-64 object-cover rounded-b-3xl mb-8" loading="lazy" />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Venta a Plazos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compra tu entrada pagando en varios plazos cómodamente.
          </p>
        </div>

        {/* Tienda Evezing con diseño avanzado */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          {/* TITULO SECCION - Movido arriba en móvil */}
          <div className="text-center mb-8 hidden md:block">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-2xl">🎫</span>
              Entradas Oficiales AQUASELLA 2026
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Elige tu entrada y completa tu compra segura
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* CONTENEDOR DEL IFRAME IGUAL QUE VENTA GENERAL */}
          <div
            className="relative border-2 border-red-300 shadow-[0_0_18px_rgba(255,0,60,0.5),0_0_32px_rgba(255,0,60,0.25)] rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_24px_4px_rgba(255,0,60,0.5),0_0_40px_8px_rgba(255,0,60,0.3)] hover:z-10"
            style={{
              backgroundImage: "url('/img/fondo-aqs-web.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0,0,0,0.90)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none z-0" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
                  <span className="text-yellow-400 text-2xl">🎫</span>
                  Selecciona tus entradas
                </h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Elige tu entrada y completa tu compra segura
                </p>
                <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
              </div>
              <div
                id="evezing-shop-aquasella-2026"
                ref={containerRef}
                style={{ paddingBottom: '15px' }}
              >
                <p className="evezing-shop-checking text-center text-gray-300" style={{ padding: '15px', fontSize: '16px' }}>
                  Comprobando disponibilidad de entradas...
                </p>
              </div>
            </div>
          </div>
          {/* Información adicional */}
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <div className="rounded-xl p-6 shadow-2xl border-2 border-red-300 transform hover:-rotate-2 hover:scale-105 transition-all duration-300 relative" style={{
              backgroundImage: "url('/img/fondo-aqs-web.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Información Importante</h3>
                <ul className="space-y-2 text-white">
                  <li>• Las entradas son nominativas e intransferibles</li>
                  <li>• Se requiere DNI/Pasaporte para el acceso</li>
                  <li>• Mayores de 18 años</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl p-6 shadow-2xl border-2 border-red-300 transform hover:rotate-2 hover:scale-105 transition-all duration-300 relative" style={{
              backgroundImage: "url('/img/fondo-aqs-web.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4"> ¿Qué incluye?</h3>
                <ul className="space-y-2 text-white">
                  <li>• Acceso a todas las áreas musicales</li>
                  <li>• Pulsera oficial del festival</li>
                  <li>•Acceso a la zona de dia del festival (restauración)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default VentaPlazosPage;
