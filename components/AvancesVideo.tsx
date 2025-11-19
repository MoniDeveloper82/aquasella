import React from 'react';

const AvancesVideo: React.FC = () => {
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
              poster="/img/POSTINFOFINAL_AQS.jpg"
              className="w-full h-full object-contain object-center bg-black"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              aria-label="Video de avances Aquasella"
              onError={(e) => {
                console.log('Error cargando video principal, intentando fallback');
                // El navegador automáticamente intentará el siguiente source
              }}
            >
              {/* Videos optimizados para Vercel (orden por tamaño) */}
              <source src="/videos/heder_tiny.mp4" type="video/mp4" />
              <source src="/videos/heder_small.webm" type="video/webm" />
              <source src="/videos/heder_small.mp4" type="video/mp4" />
              <source src="/videos/heder_vercel.webm" type="video/webm" />
              {/* Video original como último fallback */}
              <source src="/videos/avances1.mp4" type="video/mp4" />
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
