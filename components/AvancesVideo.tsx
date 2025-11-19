import React, { useRef, useEffect, useState } from 'react';

const AvancesVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    // Forzar mostrar video después de un breve momento
    const timer = setTimeout(() => setForceShow(true), 500);
    
    const video = videoRef.current;
    if (!video) return;

    // Función super agresiva para forzar reproducción
    const forceVideoPlay = async () => {
      try {
        console.log('🚀 Forzando reproducción de video');
        
        // Resetear completamente el video
        video.currentTime = 0;
        video.load();
        
        // Esperar a que se cargue
        await new Promise((resolve) => {
          const onLoaded = () => {
            video.removeEventListener('loadeddata', onLoaded);
            resolve(true);
          };
          video.addEventListener('loadeddata', onLoaded);
        });
        
        // Reproducir con máxima prioridad
        const playPromise = video.play();
        await playPromise;
        
        setIsVideoLoaded(true);
        console.log('✅ VIDEO FUNCIONANDO!');
        
      } catch (error) {
        console.log('❌ Error reproduciendo:', error);
        
        // Si falla, reintenta en 1 segundo
        setTimeout(forceVideoPlay, 1000);
      }
    };

    // Múltiples estrategias simultáneas
    forceVideoPlay();
    setTimeout(forceVideoPlay, 200);
    setTimeout(forceVideoPlay, 1000);
    setTimeout(forceVideoPlay, 3000);
    
    // En cualquier interacción del usuario
    const onUserInteraction = () => {
      forceVideoPlay();
    };
    
    document.addEventListener('click', onUserInteraction);
    document.addEventListener('touchstart', onUserInteraction);
    document.addEventListener('keydown', onUserInteraction);
    document.addEventListener('scroll', onUserInteraction);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', onUserInteraction);
      document.removeEventListener('touchstart', onUserInteraction);
      document.removeEventListener('keydown', onUserInteraction);
      document.removeEventListener('scroll', onUserInteraction);
    };
  }, []);

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
            {/* Forzar visibilidad del video */}
            <video
              ref={videoRef}
              className={`w-full h-full object-contain object-center bg-black ${forceShow ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={!isVideoLoaded}
              aria-label="Video de avances Aquasella"
              webkit-playsinline="true"
              style={{
                display: 'block',
                visibility: 'visible',
                zIndex: 10
              }}
              onLoadedData={() => {
                console.log('🎬 Video data loaded');
                if (videoRef.current) {
                  videoRef.current.play().catch(e => console.log('Play failed:', e));
                }
              }}
              onCanPlay={() => {
                console.log('▶️ Video can play');
                if (videoRef.current) {
                  videoRef.current.play().catch(e => console.log('Play failed:', e));
                }
              }}
              onPlay={() => {
                console.log('🎉 VIDEO STARTED PLAYING!');
                setIsVideoLoaded(true);
              }}
            >
              {/* Solo el video más pequeño para evitar problemas */}
              <source src="/videos/avances1_micro.webm?v=2" type="video/webm" />
              <source src="/videos/avances1_vercel.webm?v=2" type="video/webm" />
              <source src="/videos/avances1.webm?v=2" type="video/webm" />
              Tu navegador no soporta la reproducción de video.
            </video>
            
            {/* Indicador de estado */}
            {!isVideoLoaded && forceShow && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-white text-lg font-bold">
                  🎬 Cargando video avances1...
                </div>
              </div>
            )}
            
            {isVideoLoaded && (
              <div className="absolute top-4 right-4 text-green-400 text-xs opacity-70 bg-black bg-opacity-50 p-2 rounded">
                ✅ Video reproduciendo
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
