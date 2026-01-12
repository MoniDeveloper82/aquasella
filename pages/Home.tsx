// Cleaned up duplicate and broken code. Only the correct HomePage component remains below.
import React, { useState, useEffect } from 'react';
import VideoHero from '../components/VideoHero';
import Banner from '../components/Banner';
import Countdown from '../components/Countdown';
import AvancesVideo from '../components/AvancesVideo';
import HomeTicketsSection from '../components/HomeTicketsSection';
import PartnersStrip from '../components/PartnersStrip';
import HomeMain from '../components/HomeMain';

const HomePage: React.FC = () => {
  const images = ['AQS1.jpg', 'AQS2.jpg', 'AQS3.jpg', 'AQS4.jpg', 'AQS5.jpg', 'AQS6.jpg', 'AQS7.jpg', 'AQS8.jpg', 'AQS16.jpg', 'AQS17.jpg', 'AQS18.jpg', 'AQS19.jpg', 'AQS21.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Fondo fijo detrás de todo */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/img/vertical3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Contenido encima del fondo */}
      <div className="relative z-10">
        <VideoHero />
        {/* Banner fijo en NEGRO con texto, después del video */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: '#000',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
            textAlign: 'center',
            padding: '0.4rem 0',
            borderTop: '4px solid #b91c1c',
            borderBottom: '4px solid #b91c1c',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07), 0 0 16px 2px #dc2626, 0 0 32px 4px #b91c1c'
          }}
        >
          CUENTA ATRÁS AQUASELLA 2026
        </div>
        <Countdown />
        <HomeMain />
        <AvancesVideo />
        <HomeTicketsSection />
        {/* Galería de fotos */}
        <section className="py-16 px-4">
          <h2 className="text-center text-4xl font-bold text-white mb-8">Galería</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={`/img/${img}`}
                  alt={`Galería ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
        <PartnersStrip />
      </div>
    </>
  );
};

export default HomePage;