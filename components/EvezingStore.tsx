import React, { useEffect, useRef, useState } from "react";

const EvezingStore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && containerRef.current) {
      const scriptId = "evezing-script-aquasella-2026";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://aquasella.evezing.com/iframe-shop/event/aquasella-2026";
        script.id = scriptId;
        script.async = true;
        document.body.appendChild(script);
      }
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          🎫 Entradas Oficiales
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mt-1">
          Elige tu entrada y completa tu compra segura
        </p>
      </div>

      {/* Contenedor decorativo */}
      <div className="relative overflow-visible">
        {/* Contenido del widget con borde, sin fondo ni esquinas redondeadas */}
        <div ref={containerRef} className="relative z-10 flex justify-center items-center">
          <div className="border-2 border-red-300" style={{width: '100%', maxWidth: 1100, borderRadius: 0, overflow: 'hidden', background: '#fff'}}>
            <div id="evezing-shop-aquasella-2026" style={{ paddingBottom: "15px" }}>
            {/* Forzar ajuste de texto en botones del widget Evezing */}
            <style>{`
              #evezing-shop-aquasella-2026 button {
                white-space: normal !important;
                word-break: break-word !important;
                font-size: 1rem !important;
                padding-left: 1rem !important;
                padding-right: 1rem !important;
                text-align: center !important;
                line-height: 1.2 !important;
                min-width: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
                box-sizing: border-box !important;
                display: block !important;
              }
              @media (max-width: 640px) {
                #evezing-shop-aquasella-2026 button {
                  font-size: 0.85rem !important;
                  padding-left: 0.25rem !important;
                  padding-right: 0.25rem !important;
                  width: 100% !important;
                  max-width: 100% !important;
                }
              }
            `}</style>
            <p
              className="evezing-shop-checking text-center text-gray-300"
              style={{ padding: "15px", fontSize: "16px" }}
            >
              Comprobando disponibilidad de entradas...
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-xs text-center mt-3">
        Compra segura con encriptación y procesadores oficiales.
      </p>
    </div>
    </div>
  );
};

export default EvezingStore;
