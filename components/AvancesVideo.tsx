import React, { useRef, useEffect } from 'react';

const AvancesVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Forzar la reproducción después de que el componente se monte
      const playVideo = async () => {
        try {
          video.load(); // Forzar recarga del video
          await video.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };
      
      // Intentar reproducir inmediatamente y después de un pequeño delay
      playVideo();
      setTimeout(playVideo, 100);
      
      // Listener para cuando el video esté listo
      video.addEventListener('loadeddata', playVideo);
      video.addEventListener('canplay', playVideo);
      
      return () => {
        video.removeEventListener('loadeddata', playVideo);
        video.removeEventListener('canplay', playVideo);
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
              preload="metadata"
              controls={false}
              aria-label="Video de avances Aquasella"
              webkit-playsinline="true"
            >
              {/* Video avances1 optimizado para Vercel - priorizando el más pequeño */}
              <source src="/videos/avances1_vercel.webm" type="video/webm; codecs=vp9" />
              <source src="/videos/avances1.webm" type="video/webm; codecs=vp9" />
              <source src="/videos/avances1.mp4" type="video/mp4; codecs=avc1.42E01E" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>

          {/* thin black line below the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />
        </div>
      </div>
    </section>
  );
};

export default AvancesVideo;
