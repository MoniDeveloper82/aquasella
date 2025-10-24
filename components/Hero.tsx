
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://picsum.photos/seed/poster/1920/1080"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-of-a-rock-band-3288-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 p-4 flex flex-col items-center justify-center">
        {/* Festival Info */}
        <div className="mb-8">
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

        {/* Tickets Info removed from hero. If you want to show tickets here again, re-add the JSX below or use `HomeTicketsSection`. */}
      </div>
    </section>
  );
};

export default Hero;
