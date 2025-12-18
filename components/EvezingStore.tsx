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

      {/* Contenedor con estilizado decorativo */}
      <div className="relative border-2 border-red-500 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 shadow-[0_0_40px_10px_rgba(239,68,68,0.6)]">
        {/* Outline animado */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 via-pink-500 to-red-600 opacity-30 animate-pulse"></div>

        {/* Contenido del widget */}
        <div ref={containerRef} className="relative z-10">
          <div id="evezing-shop-aquasella-2026" style={{ paddingBottom: "15px" }}>
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
  );
};

export default EvezingStore;
