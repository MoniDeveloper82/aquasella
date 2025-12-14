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
          backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        minHeight: '320px',
        maxHeight: '824px',
        backgroundColor: '#000'
      }}
    >
      <style>{`
                        @media (min-width: 1500px) {
                          .countdown-btn {
                            margin-top: 20rem !important;
                          }
                        }
                @media (max-width: 607px) {
                  .countdown-title {
                    font-size: clamp(0.8rem, 2vw, 1.3rem) !important;
                  }
                  .countdown-row {
                    gap: 0.15rem !important;
                  }
                  .countdown-value {
                    font-size: clamp(1.2rem, 5vw, 2rem) !important;
                  }
                  .countdown-label {
                    font-size: clamp(0.6rem, 1.5vw, 0.8rem) !important;
                  }
                  .countdown-btn {
                    font-size: clamp(0.7rem, 1.5vw, 0.9rem) !important;
                    padding: 0.3em 0.6em !important;
                    margin-top: -0.2rem !important;
                  }
                }
        @media (min-width: 1201px) {
          .countdown-title {
            font-size: clamp(2rem, 3vw, 3.5rem) !important;
          }
          .countdown-row {
            gap: 2rem !important;
          }
          .countdown-value {
            font-size: clamp(3rem, 7vw, 6rem) !important;
          }
          .countdown-label {
            font-size: clamp(1.5rem, 2vw, 2.5rem) !important;
          }
          .countdown-btn {
            font-size: clamp(1.2rem, 2vw, 2rem) !important;
            padding: 1em 2em !important;
            margin-top: -1rem !important;
          }
        }
        @media (max-width: 1200px) {
          .countdown-title {
            font-size: clamp(1.3rem, 4vw, 2.3rem) !important;
          }
          .countdown-row {
            gap: 1rem !important;
          }
          .countdown-value {
            font-size: clamp(2rem, 6vw, 3.5rem) !important;
          }
          .countdown-label {
            font-size: clamp(1rem, 2vw, 1.5rem) !important;
          }
          .countdown-btn {
            font-size: clamp(1rem, 2vw, 1.5rem) !important;
            padding: 0.8em 1.4em !important;
            margin-top: -0.7rem !important;
          }
        }
        @media (max-width: 608px) {
          .countdown-title {
            font-size: clamp(1.2rem, 4vw, 2.2rem) !important;
          }
          .countdown-row {
            gap: 0.5rem !important;
          }
          .countdown-value {
            font-size: clamp(2.5rem, 8vw, 4rem) !important;
          }
          .countdown-label {
            font-size: clamp(1rem, 3vw, 1.5rem) !important;
          }
          .countdown-btn {
            font-size: clamp(1rem, 3vw, 1.3rem) !important;
            padding: 0.5em 1em !important;
            margin-top: -0.5rem !important;
          }
        }
        @media (max-width: 900px) {
          .countdown-title {
            font-size: clamp(1.2rem, 5vw, 2rem) !important;
          }
          .countdown-row {
            gap: 0.8rem !important;
          }
          .countdown-value {
            font-size: clamp(1.3rem, 7vw, 2.2rem) !important;
          }
          .countdown-label {
            font-size: clamp(0.9rem, 3vw, 1.2rem) !important;
          }
          .countdown-btn {
            font-size: clamp(1rem, 4vw, 1.3rem) !important;
            padding: 0.7em 1.2em !important;
          }
        }
        @media (max-width: 768px) {
          .countdown-mobile {
            height: 90vw !important;
            min-height: 320px !important;
            max-height: 100vw !important;
            background-image: url(/img/CuentaAtrasMovil.png) !important;
            background-position: top center !important;
            background-size: 100vw auto !important;
            background-repeat: no-repeat !important;
            background-color: #000 !important;
            padding-left: 2vw !important;
            padding-right: 2vw !important;
          }
        }
        @media (max-width: 600px) {
          .countdown-title {
            font-size: clamp(1rem, 4vw, 1.3rem) !important;
          }
          .countdown-row {
            gap: 0.5rem !important;
          }
          .countdown-value {
            font-size: clamp(0.9rem, 5vw, 1.2rem) !important;
          }
          .countdown-label {
            font-size: clamp(0.6rem, 2vw, 0.8rem) !important;
          }
          .countdown-btn {
            font-size: clamp(0.7rem, 3vw, 1rem) !important;
            padding: 0.5em 1em !important;
          }
        }
      `}</style>
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
      <div className="flex flex-row items-center justify-center gap-8 mb-6 countdown-row" style={{marginTop: '4rem'}}>
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
          className="bg-black hover:scale-105 text-white font-black uppercase px-2 md:px-4 py-1 md:py-1 rounded-xl md:rounded-2xl transition-all duration-300 border border-red-500 countdown-btn"
          style={{
            fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(0.5rem, 0.8vw, 0.7rem)',
            letterSpacing: '0.13em',
            boxShadow: '0 0 18px 4px rgba(255,0,0,0.45), 0 0 48px 8px rgba(255,0,0,0.32), 0 8px 16px rgba(0,0,0,0.6)',
            borderColor: 'rgba(255,0,0,0.55)',
            marginTop: '36rem'
          }}
        >
          Entradas
        </button>
      </Link>
    </div>
  );
};

export default Countdown;
