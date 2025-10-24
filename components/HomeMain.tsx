
import React, { useState, useEffect } from 'react';

const backgroundImages = [
  'https://picsum.photos/seed/aquasella-stage/1920/1080',
  'https://picsum.photos/seed/aquasella-crowd/1920/1080',
  'https://picsum.photos/seed/aquasella-lights/1920/1080',
  'https://picsum.photos/seed/aquasella-dj/1920/1080',
];

const HomeMain: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {backgroundImages.map((src, index) => (
         <img
          key={src}
          src={src}
          alt="Festival background"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 p-4 flex flex-col items-center justify-center">
        {/* Festival Info */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest" style={{fontFamily: "'Arial Black', sans-serif"}}>
            AQUASELLA
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mt-4">
            13 - 16 AGOSTO 2026
          </h2>
          <p className="text-sm md:text-base font-light tracking-widest border-t border-b border-white/50 py-1 mt-2 inline-block">
            ARRIONDAS, ASTURIAS
          </p>
        </div>

        {/* Tickets info removed from HomeMain. Use `HomeTicketsSection` or re-add JSX here if needed. */}
      </div>
    </section>
  );
};

export default HomeMain;
