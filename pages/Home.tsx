// Cleaned up duplicate and broken code. Only the correct HomePage component remains below.
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [paused, setPaused] = useState(false);
  const [translateZ, setTranslateZ] = useState(350);

  useEffect(() => {
    const updateTranslateZ = () => {
      setTranslateZ(window.innerWidth >= 768 ? 500 : 350);
    };
    updateTranslateZ();
    window.addEventListener('resize', updateTranslateZ);
    return () => window.removeEventListener('resize', updateTranslateZ);
  }, []);
  const navigate = useNavigate();

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
          <h2
            className="w-full text-center m-0 -mt-8 md:-mt-6 text-2xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-glow-red break-words px-2 relative z-10"
            style={{
              fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
              fontWeight: 'bold',
              lineHeight: 1.02,
              background: 'transparent'
            }}
          >
            GALERÍA DE FOTOS
          </h2>
          <div className="max-w-4xl mx-auto mt-24 mb-12">
            <div className="relative w-full h-72 md:h-96" style={{ perspective: '1000px', overflow: 'hidden' }}>
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'rotate 90s infinite linear', animationPlayState: paused ? 'paused' : 'running' }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {images.map((img, index) => (
                  <img
                    key={img}
                    src={`/img/${img}`}
                    alt={`Galería ${index + 1}`}
                    className="absolute w-40 h-56 md:w-56 md:h-72 object-cover rounded-lg bg-black"
                    style={{
                      transform: `translate(-50%, -50%) rotateY(${index * (360 / images.length)}deg) translateZ(${translateZ}px)`,
                      left: '50%',
                      top: '50%',
                    }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <style>{`
              @keyframes rotate {
                from { transform: rotateY(0deg); }
                to { transform: rotateY(360deg); }
              }
            `}</style>
            <div className="text-center mt-16 md:mt-24">
              <button
                onClick={() => navigate('/galeria')}
                className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Ver Galería Completa
              </button>
            </div>
          </div>
        </section>
        <PartnersStrip />
      </div>
    </>
  );
};

export default HomePage;