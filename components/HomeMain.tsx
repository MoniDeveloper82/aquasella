
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
    <section className="w-full flex flex-col items-center justify-center text-center text-white py-12 bg-black">
      <h2
        className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-8 text-white"
        style={{
          fontFamily: "ClashDisplay, 'Arial Black', sans-serif",
          fontWeight: 800,
          letterSpacing: '0.12em',
          textShadow: '0 0 8px #dc2626, 0 0 16px #b91c1c, 0 0 24px #dc2626'
        }}
      >
        CONFIRMACIONES
      </h2>
      <div className="flex flex-col items-center w-full">
        <img
          src="/img/cartel.png"
          alt="Cartel Aquasella 2026"
          className="w-full max-w-4xl h-auto object-contain rounded-xl shadow-2xl border-4 border-red-700 bg-black mb-8"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default HomeMain;
