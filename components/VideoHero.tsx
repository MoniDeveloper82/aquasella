        {/* Zoom progresivo en móviles */}
        <style>{`
          @media (max-width: 768px) {
            .video-hero-zoom {
              transform: scale(1.06);
            }
          }
        `}</style>
import React, { useState, useEffect } from "react";

const VideoHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log("⏱️ Video timeout - dando más tiempo...");
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoLoaded, videoError]);

  const handleVideoError = (e: any) => {
    console.error("❌ Video failed to load:", e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    console.log("✅ Video cargado correctamente!");
  };

  return (
    <section className="w-full">
      <div className="relative w-full aspect-[16/9] bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        >
          <source src="/videos/hederDefinitivo.webm" type="video/webm" />
          <source src="/videos/hederDefinitivo.mp4" type="video/mp4" />
          <source src="https://github.com/MoniDeveloper82/aquasella/raw/main/public/videos/hederDefinitivo.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10"></div>
        {/* BOTTOM TRANSITION GRADIENT */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-15" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)' }}></div>
        {/* TEXT & IMAGES OVERLAY */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center z-20 text-center text-white px-4 pb-2 sm:pb-6">
          <img
            src="/img/FECHAS AQS.png"
            alt="Aquasella Festival 2026 - 13-16 Agosto"
            className="w-auto max-w-[98vw] h-32 sm:h-72 md:h-96 lg:h-[420px] xl:h-[150px] 2xl:h-[180px] mx-auto mb-0"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))",
              height: "clamp(128px, 28vw, 600px)",
              margin: 0,
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
