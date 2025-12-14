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
        {/* TEXT & IMAGES OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
          <img
            src="/img/FECHAS AQS.png"
            alt="Aquasella Festival 2026 - 13-16 Agosto"
            className="w-auto max-w-[95vw] h-64 md:h-80 lg:h-96 xl:h-[110px] 2xl:h-[128px] mx-auto"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))",
              height: "clamp(256px, 20vw, 512px)",
              margin: 0,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
