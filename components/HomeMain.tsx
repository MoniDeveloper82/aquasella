
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
    <section
      className="w-full text-center mt-6 mb-6 min-h-[300px] md:min-h-[500px] flex flex-col justify-center"
      style={{
        backgroundImage: "url('/img/1.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2
       className="text-2xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-glow-red break-words px-2 w-full"
              style={{
                fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
                fontWeight: 'bold',
                lineHeight: 1.02
              }}
      >
        CONFIRMACIONES
      </h2>
      <div className="flex flex-col items-center w-full">
        <img
          src="/img/cartel.png"
          alt="Cartel Aquasella 2026"
          className="w-full max-w-[220px] sm:max-w-xs md:max-w-2xl lg:max-w-4xl h-auto object-contain rounded-xl shadow-2xl border-4 border-red-700 mb-8 mt-6"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default HomeMain;
