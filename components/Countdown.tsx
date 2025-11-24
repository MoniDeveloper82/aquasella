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
      className="relative w-full"
      style={{
        backgroundImage: 'url(/img/CuentaAtras.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        maxHeight: '600px',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .countdown-mobile {
            height: 82vw !important;
            min-height: 420px !important;
            max-height: 100vw !important;
          }
          .countdown-stone {
            width: 32vw !important;
            height: 18vw !important;
            left: unset !important;
            top: unset !important;
            position: absolute !important;
          }
          .countdown-stone.days { left: 8vw !important; top: 54vw !important; }
          .countdown-stone.hours { left: 28vw !important; top: 54vw !important; }
          .countdown-stone.minutes { left: 48vw !important; top: 54vw !important; }
          .countdown-stone.seconds { left: 68vw !important; top: 54vw !important; }
          .countdown-center { top: 10vw !important; }
          .countdown-btn { font-size: 1.1rem !important; padding: 0.9rem 2.2rem !important; }
          .countdown-title { font-size: 1.3rem !important; }
        }
      `}</style>
      <style>{`
        @media (max-width: 768px) {
          .countdown-stone {
            width: 38vw !important;
            height: 22vw !important;
            left: unset !important;
            top: unset !important;
            position: absolute !important;
          }
          .countdown-stone.days { left: 5vw !important; top: 56vw !important; }
          .countdown-stone.hours { left: 28vw !important; top: 56vw !important; }
          .countdown-stone.minutes { left: 51vw !important; top: 56vw !important; }
          .countdown-stone.seconds { left: 74vw !important; top: 56vw !important; }
          .countdown-center { top: 12vw !important; }
          .countdown-btn { font-size: 1.1rem !important; padding: 0.9rem 2.2rem !important; }
          .countdown-title { font-size: 1.3rem !important; }
        }
      `}</style>
      
      {/* Primera piedra - Días (X: 320.6px, Y: 370.5px) */}
      <div 
        className="absolute flex flex-col items-center justify-center countdown-stone days"
        style={{
          left: '16.7%',
          top: '61.75%',
          width: '17.1%',
          height: '38%'
        }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
          {timeLeft.days}
        </div>
        <div className="text-sm md:text-lg lg:text-xl uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          Días
        </div>
      </div>

      {/* Segunda piedra - Horas (estimada: X: ~640px, Y: 370.5px) */}
      <div 
        className="absolute flex flex-col items-center justify-center countdown-stone hours"
        style={{
          left: '34%',
          top: '61.75%',
          width: '17.1%',
          height: '38%'
        }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
          {timeLeft.hours}
        </div>
        <div className="text-sm md:text-lg lg:text-xl uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          Horas
        </div>
      </div>

      {/* Tercera piedra - Minutos (estimada: X: ~960px, Y: 370.5px) */}
      <div 
        className="absolute flex flex-col items-center justify-center countdown-stone minutes"
        style={{
          left: '51.5%',
          top: '61.75%',
          width: '17.1%',
          height: '38%'
        }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
          {timeLeft.minutes}
        </div>
        <div className="text-sm md:text-lg lg:text-xl uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          Minutos
        </div>
      </div>

      {/* Cuarta piedra - Segundos (estimada: X: ~1280px, Y: 370.5px) */}
      <div 
        className="absolute flex flex-col items-center justify-center countdown-stone seconds"
        style={{
          left: '68.6%',
          top: '61.75%',
          width: '17.1%',
          height: '38%'
        }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>
          {timeLeft.seconds}
        </div>
        <div className="text-sm md:text-lg lg:text-xl uppercase tracking-wide text-white font-bold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          Segundos
        </div>
      </div>

      {/* Comprar Entradas Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 countdown-center" style={{ top: '25%' }}>
        <div 
          className="relative w-full countdown-bg countdown-mobile"
          style={{
            backgroundImage: 'url(/img/CuentaAtras.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '600px',
            maxHeight: '600px',
          }}
        >
        <Link to="/tickets">
          <button 
            className="bg-black hover:scale-105 text-white font-black uppercase px-10 md:px-16 py-3.5 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 mt-8 border border-red-500 countdown-btn"
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
      </div>
    </div>
  );
};

export default Countdown;
