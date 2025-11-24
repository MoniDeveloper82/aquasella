import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-08-14T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center countdown-mobile"
      style={{
        backgroundImage: 'url(/img/CuentaAtras.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        maxHeight: '600px',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .countdown-mobile {
            height: 90vw !important;
            min-height: 420px !important;
            max-height: 100vw !important;
            background-image: url(/img/CuentaAtrasMovil.png) !important;
            background-position: top center !important;
            background-size: 100vw auto !important;
            background-repeat: no-repeat !important;
            background-color: #000 !important;
          }
        }
      `}</style>
      <h2 
        className="uppercase text-white text-glow-red mt-10 mb-8 text-center"
        style={{ 
          fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
          fontWeight: 'bold',
          fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
          lineHeight: 1.02
        }}
      >
        CUENTA ATRÁS AQS 2026
      </h2>
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.days}</span>
          <span className="text-base md:text-lg uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Días</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.hours}</span>
          <span className="text-base md:text-lg uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.minutes}</span>
          <span className="text-base md:text-lg uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.seconds}</span>
          <span className="text-base md:text-lg uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Segundos</span>
        </div>
      </div>
      <Link to="/tickets">
        <button 
          className="bg-black hover:scale-105 text-white font-black uppercase px-10 md:px-16 py-3.5 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 border border-red-500"
          style={{
            fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(1.1rem, 3vw, 2rem)',
            letterSpacing: '0.1em',
            boxShadow: '0 0 18px 4px rgba(255,0,0,0.45), 0 0 48px 8px rgba(255,0,0,0.32), 0 8px 16px rgba(0,0,0,0.6)',
            borderColor: 'rgba(255,0,0,0.55)'
          }}
        >
          Entradas
        </button>
      </Link>
    </div>
  );
};

export default Countdown;
