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
          {/* Title just before the video */}
          <div className="w-full text-center mt-6 mb-6">
            <h2
              className="text-2xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-glow-red break-words px-2 w-full"
              style={{
                fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
                fontWeight: 'bold',
                lineHeight: 1.02
              }}
            >
              AFTERMOVIE 2025
            </h2>
          </div>
          {/* Video */}
          <div className="relative w-full h-auto sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] rounded-none sm:rounded-lg overflow-hidden bg-black mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sidOukngdlg?start=100"
              title="Aftermovie Aquasella 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvancesVideo;
