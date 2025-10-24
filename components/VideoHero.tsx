import React from 'react';

const VideoHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/videos/albeniz.poster.jpg"
      >
        {/* Provide multiple sources so the browser can pick the first it supports.
            The browser will only play one source (it chooses the first supported type).
            Keep the most modern/efficient format first (webm), then fall back to mp4. */}
        <source src="/videos/albenizresumen.webm" type="video/webm" />
        <source src="/videos/albenizresumen.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

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
