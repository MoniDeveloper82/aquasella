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
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        style={{ transform: "translateY(5%)" }}
      >
        <h2
          className="uppercase font-extrabold text-white mb-2 sm:mb-4 mt-10 sm:mt-8
           md:text-[clamp(1.8rem,4vw,3rem)]
           lg:text-[clamp(2rem,4vw,4rem)]"
          style={{
            fontFamily: "ClashDisplay, system-ui, -apple-system, sans-serif",
            fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)", // la mitad
            lineHeight: "1.1",
          }}
        >
          CUENTA ATRÁS
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-1">
          {/* DÍAS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
           md:text-[clamp(2rem,6vw,4rem)]
           lg:text-[clamp(2.8rem,6vw,5rem)]t-2"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.75rem)" }}
            >
              {timeLeft.days}
            </span>
            <span
              className="uppercase font-bold text-white
           md:text-[clamp(1rem,2.5vw,2rem)]
           lg:text-[clamp(1.2rem,2.5vw,2.5rem)]"
              style={{ fontSize: "clamp(0.425rem, 1vw, 0.65rem)" }}
            >
              DÍAS
            </span>
          </div>

          {/* HORAS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
           md:text-[clamp(2rem,6vw,4rem)]
           lg:text-[clamp(2.8rem,6vw,5rem)]t-2"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.75rem)" }}
            >
              {timeLeft.hours}
            </span>
            <span
              className="uppercase font-bold text-white
           md:text-[clamp(1rem,2.5vw,2rem)]
           lg:text-[clamp(1.2rem,2.5vw,2.5rem)]"
              style={{ fontSize: "clamp(0.425rem, 1vw, 0.65rem)" }}
            >
              HORAS
            </span>
          </div>

          {/* MINUTOS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
           md:text-[clamp(2rem,6vw,4rem)]
           lg:text-[clamp(2.8rem,6vw,5rem)]t-2"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.75rem)" }}
            >
              {timeLeft.minutes}
            </span>
            <span
              className="uppercase font-bold text-white
           md:text-[clamp(1rem,2.5vw,2rem)]
           lg:text-[clamp(1.2rem,2.5vw,2.5rem)]"
              style={{ fontSize: "clamp(0.425rem, 1vw, 0.65rem)" }}
            >
              MINUTOS
            </span>
          </div>

          {/* SEGUNDOS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
           md:text-[clamp(2rem,6vw,4rem)]
           lg:text-[clamp(2.8rem,6vw,5rem)]t-2"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.75rem)" }}
            >
              {timeLeft.seconds}
            </span>
            <span
              className="uppercase font-bold text-white
           md:text-[clamp(1rem,2.5vw,2rem)]
           lg:text-[clamp(1.2rem,2.5vw,2.5rem)]"
              style={{ fontSize: "clamp(0.425rem, 1vw, 0.65rem)" }}
            >
              SEGUNDOS
            </span>
          </div>
        </div>

        <Link to="/tickets">
          <button
            className="mt-2 px-6 py-2 bg-black hover:scale-105 text-white font-black uppercase rounded-xl transition-transform duration-300 border border-red-500
           md:text-[clamp(1rem,2vw,1.6rem)]
           lg:text-[clamp(1.2rem,2vw,1.8rem)]
           xl:text-[clamp(1.4rem,2vw,2rem)]
"
            style={{
              fontFamily: "ClashDisplay, system-ui, -apple-system, sans-serif",
              fontSize: "clamp(0.45rem, 1vw, 0.6rem",
              letterSpacing: "0.12em",
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
