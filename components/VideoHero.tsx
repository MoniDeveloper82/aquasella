import React, { useState, useEffect } from 'react';

const VideoHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoAttempted, setVideoAttempted] = useState(false);

  // Intentar cargar el video después de que el componente se monte
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log('Attempting to load video after delay...');
        setVideoAttempted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoLoaded, videoError]);

  const handleVideoError = (e: any) => {
    console.error('Video failed to load:', e);
    console.error('Video source:', '/videos/AFTERMOVIEOptimizado.mp4');
    console.log('Switching to fallback background...');
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', '/videos/AFTERMOVIEOptimizado.mp4');
    setVideoLoaded(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Indicador de carga de video (solo para debug) */}
      {!videoLoaded && !videoError && (
        <div className="absolute top-4 left-4 z-50 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Cargando video...
        </div>
      )}

      {/* Fallback background con gradientes atractivos */}
      {(videoError || !videoLoaded) && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {/* Gradiente de fondo atractivo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
          {/* Animación de ondas */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 animate-pulse"></div>
          </div>
          {/* Efecto de partículas */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-sky-300 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-2000"></div>
          </div>
        </div>
      )}

      {/* Video optimizado - con estrategia mejorada para Vercel */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-2000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleVideoLoaded}
          onLoadStart={() => console.log('Video loading started...')}
          onProgress={() => console.log('Video loading progress...')}
          onLoadedMetadata={() => console.log('Video metadata loaded')}
          onWaiting={() => console.log('Video waiting for data...')}
        >
          {/* Priorizar el video optimizado */}
          <source src="/videos/AFTERMOVIEOptimizado.mp4" type="video/mp4" />
          {/* Fallback al video original si el optimizado falla */}
          <source src="/videos/AFTERMOVIEAQS25.mp4" type="video/mp4" />
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
