import React, { useState, useEffect } from 'react';

const AvancesVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    // Detectar si estamos en producción (Vercel)
    setIsProduction(window.location.hostname.includes('vercel.app') || window.location.hostname.includes('aquasella'));
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
    console.log('✅ Video cargado correctamente');
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('❌ Error cargando video:', e.currentTarget.currentSrc);
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <section className="py-6 sm:py-10">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* thin black line above the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />

          {/* Title just before the video */}
            <div className="w-full text-center mt-6 mb-6">
              {/* Replaced image with large text title as requested */}
              <h2 className="mx-auto text-white font-extrabold uppercase tracking-wider px-4"
                  style={{
                    fontSize: 'clamp(2.25rem, 6vw, 5rem)',
                    lineHeight: 1.02,
                    fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
                    fontWeight: 'bold',
                  }}>
                PRIMERAS CONFIRMACIONES
              </h2>
            </div>

          {/* Larger video container to prevent text cropping, using object-contain to maintain aspect ratio */}
          <div className="relative w-full h-auto sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] rounded-none sm:rounded-lg overflow-hidden bg-black">
            
            {/* Información de debug en desarrollo */}
            {!isProduction && (
              <div className="absolute top-0 left-0 z-10 bg-black/80 text-white p-2 text-xs">
                <p>🔧 Debug: Local</p>
                <p>📹 Cargado: {videoLoaded ? '✅' : '❌'}</p>
                <p>⚠️ Error: {videoError ? '✅' : '❌'}</p>
              </div>
            )}

            <video
              poster="/img/POSTINFOFINAL_AQS.jpg"
              className="w-full h-full object-contain object-center bg-black"
              autoPlay={!videoError}
              muted
              loop
              playsInline
              preload="auto"
              controls={isProduction || videoError}
              aria-label="Video de avances Aquasella"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              onCanPlay={() => console.log('✅ Video puede reproducirse')}
              onPlay={() => console.log('🎬 Video iniciado')}
            >
              {/* Estrategia diferente para producción vs desarrollo */}
              {isProduction ? (
                <>
                  {/* Para Vercel: solo el video más pequeño y confiable */}
                  <source src="/videos/heder_tiny.mp4" type="video/mp4" />
                  <source src="/videos/heder_small.webm" type="video/webm" />
                </>
              ) : (
                <>
                  {/* Para desarrollo local: incluir videos de avances */}
                  <source src="/videos/avances1_vercel.webm" type="video/webm" />
                  <source src="/videos/avances1.webm" type="video/webm" />
                  <source src="/videos/avances1.mp4" type="video/mp4" />
                  <source src="/videos/heder_tiny.mp4" type="video/mp4" />
                </>
              )}
              
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <p className="text-xl mb-4">📹 Video no disponible</p>
                  <p className="text-sm opacity-75">Tu navegador no soporta la reproducción de video</p>
                </div>
              </div>
            </video>

            {/* Overlay de error */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                <div className="text-center p-4">
                  <p className="text-lg mb-2">⚠️ Error cargando video</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
                  >
                    🔄 Recargar página
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* thin black line below the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />
        </div>
      </div>
    </section>
  );
};

export default AvancesVideo;
