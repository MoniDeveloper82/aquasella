import React, { useState } from 'react';

const VideoHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = (e: any) => {
    console.error('❌ Video failed to load:', e);
    console.error('Video error details:', e.target?.error);
    console.error('Showing fallback background...');
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('✅ Video heder_tiny.mp4 cargado correctamente! - Vercel v3');
    setVideoLoaded(true);
  };

  const handleCanPlay = () => {
    console.log('🎬 Video listo para reproducir - Vercel deployment v3');
    setVideoLoaded(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900" style={{ height: '100vh', minHeight: '100dvh' }}>
      {/* Fallback background si hay error o no carga */}
      {(videoError || !videoLoaded) && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)'
            }}
          />
        </div>
      )}

      {/* Video optimizado */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          className={`absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center center',
            transform: 'scale(1.0)',
            transformOrigin: 'center center',
            width: '100%',
            height: '100%'
          }}
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleCanPlay}
        >
          <source src="/videos/heder_tiny.mp4" type="video/mp4" />
          <source src="/videos/heder_small.mp4" type="video/mp4" />
          <source src="/videos/heder_small.webm" type="video/webm" />
          Tu navegador no soporta video HTML5.
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4 pt-20">
        {/* Festival Info */}
        <div className="fade-in-up">
          {/* Main Aquasella Logo */}
          <div className="-mb-48 md:-mb-60 lg:-mb-72 xl:-mb-84 2xl:-mb-96">
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
              className="w-auto h-64 md:h-80 lg:h-96 xl:h-110 mx-auto filter brightness-110 contrast-110"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))',
                maxWidth: '95vw',
                height: 'clamp(256px, 20vw, 440px)'
              }}
            />
          </div>

          {/* Location Text */}
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light tracking-widest border-t border-b border-white/50 py-1 -mt-32 md:-mt-44 lg:-mt-56 xl:-mt-68 2xl:-mt-80 inline-block">
        </p>
        </div>

  {/* Tickets info removed from VideoHero. If you'd like it back, you can re-add the JSX or use `HomeTicketsSection`. */}
      </div>
    </section>
  );
};

export default VideoHero;
