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
    <div className="relative w-full">
      <img
        src="/img/CuentaAtras.png"
        alt="Cuenta atrás Aquasella"
        className="w-full max-w-full object-contain select-none pointer-events-none block"
        draggable="false"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 
          className="uppercase text-white text-glow-red countdown-title text-center"
          style={{ 
            fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
            fontWeight: 'bold',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: 1.02,
            marginTop: '8rem',
            marginBottom: '2.5rem'
          }}
        >
          CUENTA ATRÁS
        </h2>
        <div className="flex flex-row items-center justify-center gap-8 countdown-row">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-white mb-2 countdown-value" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.days}</span>
            <span className="text-base md:text-xl uppercase tracking-wide font-bold countdown-label" style={{ color: '#fff', fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', WebkitTextStroke: '1px #dc2626', textStroke: '1px #dc2626', fontWeight: 'bold' }}>Días</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-white mb-2 countdown-value" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.hours}</span>
            <span className="text-base md:text-xl uppercase tracking-wide font-bold countdown-label" style={{ color: '#fff', fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', WebkitTextStroke: '1px #dc2626', textStroke: '1px #dc2626', fontWeight: 'bold' }}>Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-white mb-2 countdown-value" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.minutes}</span>
            <span className="text-base md:text-xl uppercase tracking-wide font-bold countdown-label" style={{ color: '#fff', fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', WebkitTextStroke: '1px #dc2626', textStroke: '1px #dc2626', fontWeight: 'bold' }}>Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-white mb-2 countdown-value" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', textShadow: '0 4px 8px rgba(0,0,0,0.9)' }}>{timeLeft.seconds}</span>
            <span className="text-base md:text-xl uppercase tracking-wide font-bold countdown-label" style={{ color: '#fff', fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', WebkitTextStroke: '1px #dc2626', textStroke: '1px #dc2626', fontWeight: 'bold' }}>Segundos</span>
          </div>
        </div>
        <Link to="/tickets">
          <button
            className="mt-16 md:mt-20 lg:mt-24 px-8 md:px-10 py-4 md:py-5 bg-black hover:scale-110 text-white font-black uppercase rounded-2xl transition-transform duration-300 border border-red-500"
            style={{
              fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.13em',
              boxShadow: '0 0 18px 4px rgba(255,0,0,0.45), 0 0 48px 8px rgba(255,0,0,0.32), 0 8px 16px rgba(0,0,0,0.6)',
              borderColor: 'rgba(255,0,0,0.55)'
            }}
          >
            Entradas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Countdown;
