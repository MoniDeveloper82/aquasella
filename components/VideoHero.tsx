import React, { useState, useEffect } from 'react';

const VideoHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Timeout más largo para dar tiempo al video desde GitHub
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log('⏱️ Video timeout - probando fallback');
        // No marcar error todavía, dar más tiempo
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoLoaded, videoError]);

  const handleVideoError = (e: any) => {
    console.error('❌ Video failed to load:', e);
    console.error('Video error details:', e.target?.error);
    console.error('Showing animated fallback background...');
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('✅ Video heder_tiny.mp4 cargado correctamente!');
    setVideoLoaded(true);
  };

  const handleCanPlay = () => {
    console.log('🎬 Video listo para reproducir');
    setVideoLoaded(true);
  };

  return (
    <section className="w-full">
      {/* Video con overlay de fechas */}
      <div className="relative w-full" style={{ minHeight: '70vh' }}>
        {/* Fallback background si hay error o no carga */}
        {(videoError || !videoLoaded) && (
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)'
              }}
            />
          </div>
        )}

        {/* Video optimizado con fallback a imagen */}
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            className={`w-full h-auto min-h-[70vh] object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleCanPlay}
            onLoadStart={() => console.log('🔄 Video: Iniciando carga...')}
            onProgress={() => console.log('📊 Video: Progreso de carga')}
            onSuspend={() => console.log('⏸️ Video: Suspendido')}
            onAbort={() => console.log('❌ Video: Abortado')}
            onEmptied={() => console.log('🗑️ Video: Emptied')}
          >
            {/* CDN externos para máxima compatibilidad */}
            <source src="https://github.com/MoniDeveloper82/aquasella/raw/main/public/videos/heder_tiny.mp4" type="video/mp4" />
            <source src="https://github.com/MoniDeveloper82/aquasella/raw/main/public/videos/heder_small.mp4" type="video/mp4" />
            <source src="/videos/heder_tiny.mp4" type="video/mp4" />
            <source src="/videos/heder_small.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        ) : (
          <div className="w-full min-h-[70vh] bg-gray-900">
            {/* Fallback: GIF animado */}
            <img 
              src="/videos/heder_fallback.gif"
              alt="Aquasella Video Background"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center center',
                minHeight: '70vh'
              }}
              onError={() => {
                console.log('📸 Fallback GIF también falló, usando fondo estático');
              }}
            />
            
            {/* Fondo de respaldo si también falla el GIF */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%), radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 60%)',
                backgroundBlendMode: 'overlay',
                zIndex: -1
              }}
            >
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(239, 68, 68, 0.1) 2px, rgba(239, 68, 68, 0.1) 4px)',
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        )}

        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10"></div>

        {/* Fechas superpuestas al video */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <div className="fade-in-up">
            {/* Main Aquasella Logo - OCULTO */}
            <div className="-mb-48 md:-mb-60 lg:-mb-72 xl:-mb-84 2xl:-mb-96 hidden">
              <img 
                src="/img/aquasella_logometalfinal (1).png" 
                alt="Aquasella Festival Logo"
                className="w-auto h-80 md:h-96 lg:h-110 xl:h-128 2xl:h-144 mx-auto filter brightness-110 contrast-110"
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.5)) drop-shadow(0 0 30px rgba(220, 38, 38, 0.3))',
                  maxWidth: '90vw',
                  height: 'clamp(320px, 25vw, 576px)'
                }}
              />
            </div>

            {/* Logo Image with Dates */}
            <div className="mb-0">
              <img 
                src="/img/FECHAS AQS.png" 
                alt="Aquasella Festival 2026 - 13-16 Agosto"
                className="w-auto h-48 md:h-64 lg:h-80 xl:h-96 mx-auto filter brightness-110 contrast-110"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))',
                  maxWidth: '95vw',
                  height: 'clamp(192px, 15vw, 384px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
