import React, { useRef, useEffect, useState } from 'react';

const AvancesVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      let playAttempts = 0;
      const maxAttempts = 5;
      
      const forcePlay = async () => {
        try {
          playAttempts++;
          console.log(`Intento de reproducción ${playAttempts}:`, video.src);
          
          // Forzar recarga completa
          video.load();
          
          // Esperar a que esté listo
          await new Promise(resolve => {
            const onCanPlay = () => {
              video.removeEventListener('canplay', onCanPlay);
              resolve(true);
            };
            video.addEventListener('canplay', onCanPlay);
          });
          
          // Intentar reproducir
          const playPromise = video.play();
          await playPromise;
          
          setIsVideoLoaded(true);
          console.log('Video reproduciendo exitosamente');
          
        } catch (error) {
          console.log(`Error en intento ${playAttempts}:`, error);
          
          if (playAttempts < maxAttempts) {
            setTimeout(() => forcePlay(), 1000 * playAttempts);
          } else {
            console.log('Mostrando controles para interacción manual');
            setShowControls(true);
          }
        }
      };

      // Múltiples estrategias de inicio
      const startVideo = () => {
        forcePlay();
        
        // También intentar en eventos de interacción
        const handleInteraction = () => {
          forcePlay();
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('scroll', handleInteraction);
        };
        
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('scroll', handleInteraction, { once: true });
      };

      // Iniciar inmediatamente y en varios eventos
      startVideo();
      setTimeout(startVideo, 500);
      setTimeout(startVideo, 2000);
      
      return () => {
        // Cleanup si es necesario
      };
    }
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
            <video
              ref={videoRef}
              poster="/img/POSTINFOFINAL_AQS.jpg"
              className="w-full h-full object-contain object-center bg-black"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={showControls}
              aria-label="Video de avances Aquasella"
              webkit-playsinline="true"
              onLoadedData={() => {
                console.log('Video data loaded');
                if (videoRef.current) {
                  videoRef.current.play().catch(e => console.log('Play failed:', e));
                }
              }}
              onCanPlay={() => {
                console.log('Video can play');
                if (videoRef.current) {
                  videoRef.current.play().catch(e => console.log('Play failed:', e));
                }
              }}
            >
              {/* Priorizar el video más pequeño y confiable */}
              <source src="/videos/avances1_micro.webm" type="video/webm" />
              <source src="/videos/avances1_vercel.webm" type="video/webm" />
              <source src="/videos/avances1.webm" type="video/webm" />
              Tu navegador no soporta la reproducción de video.
            </video>
            
            {/* Mostrar estado de carga */}
            {!isVideoLoaded && !showControls && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-sm opacity-70">
                  Cargando video...
                </div>
              </div>
            )}
            
            {showControls && (
              <div className="absolute top-4 left-4 text-white text-xs opacity-70 bg-black bg-opacity-50 p-2 rounded">
                Haz clic en el video para reproducir
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
