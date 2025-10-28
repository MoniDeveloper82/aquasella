import React, { useState } from 'react';

const VideoHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = (e: any) => {
    console.error('Video failed to load:', e);
    console.error('Trying fallback to original video...');
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('✅ Video optimizado cargado correctamente!');
    setVideoLoaded(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Fallback background solo si hay error */}
      {(videoError || !videoLoaded) && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black z-0">
        </div>
      )}

      {/* Video optimizado - versión simple que debe funcionar */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleVideoLoaded}
        >
          <source src="/videos/AFTERMOVIEOptimizado.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4 pt-20">
        {/* Festival Info */}
        <div className="opacity-0 fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-glow">
            Aquasella
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mt-4">
            13 - 16 AGOSTO 2026
          </h2>
          <p className="text-sm md:text-base font-light tracking-widest border-t border-b border-white/50 py-1 mt-2 inline-block">
            ARRIONDAS, ASTURIAS
          </p>
        </div>

  {/* Tickets info removed from VideoHero. If you'd like it back, you can re-add the JSX or use `HomeTicketsSection`. */}
      </div>
    </section>
  );
};

export default VideoHero;
