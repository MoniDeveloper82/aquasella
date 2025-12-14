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
      <div
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ width: "100vw", background: "#000" }}
      >
        
        {/* BACKGROUND FALLBACK */}
        {(videoError || !videoLoaded) && (
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
              }}
            />
          </div>
        )}

        {/* VIDEO */}
        {!videoError && (
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={handleVideoError}
              onLoadedData={handleVideoLoaded}
              className={`
                absolute left-1/2
                -translate-x-1/2
                w-full h-auto
                lg:top-1/2 lg:-translate-y-1/2 lg:min-w-full lg:min-h-full lg:object-cover
                top-0
                transition-opacity duration-1000
                video-hero-zoom
                ${videoLoaded ? "opacity-100" : "opacity-0"}
              `}
              style={{
                objectFit: "contain",
                objectPosition: "top center",
                background: "#000",
              }}
            >
              <source src="/videos/hederDefinitivo.webm" type="video/webm" />
              <source src="/videos/hederDefinitivo.mp4" type="video/mp4" />
              <source src="https://github.com/MoniDeveloper82/aquasella/raw/main/public/videos/hederDefinitivo.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        )}

        {/* GIF FALLBACK */}
        {videoError && (
          <div className="absolute inset-0 w-full h-full bg-gray-900">
            <img
              src="/videos/heder_fallback.gif"
              alt="Aquasella Fallback"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10"></div>

        {/* TEXT & IMAGES OVERLAY */}
        <div className="absolute inset-x-0 top-[30vh] md:top-[35vh] lg:top-[40vh] z-20 flex flex-col items-center text-center text-white px-4">
          <img
            src="/img/FECHAS AQS.png"
            alt="Aquasella Festival 2026 - 13-16 Agosto"
            className="w-auto h-64 md:h-80 lg:h-96 xl:h-[110px] 2xl:h-[128px] mx-auto"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))",
              maxWidth: "95vw",
              height: "clamp(256px, 20vw, 512px)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
