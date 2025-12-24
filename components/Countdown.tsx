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
            fontSize: "clamp(0.8rem, 2.5vw, 1.4rem)",
            lineHeight: "1.1",
          }}
        >
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-1">
          {/* DÍAS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
            md:text-[clamp(3rem,8vw,7rem)]
            lg:text-[clamp(4.5rem,11vw,10rem)]t-2"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.5rem)" }}
            >
              {timeLeft.days}
            </span>
            <span
              className="uppercase font-bold text-white
            md:text-[clamp(1.7rem,4vw,3.2rem)]
            lg:text-[clamp(2.2rem,4.5vw,4.2rem)]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)" }}
            >
              DÍAS
            </span>
          </div>

          {/* HORAS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
           md:text-[clamp(3rem,8vw,7rem)]
           lg:text-[clamp(4.5rem,11vw,10rem)]t-2"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.5rem)" }}
            >
              {timeLeft.hours}
            </span>
            <span
              className="uppercase font-bold text-white
           md:text-[clamp(1.7rem,4vw,3.2rem)]
           lg:text-[clamp(2.2rem,4.5vw,4.2rem)]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)" }}
            >
              HORAS
            </span>
          </div>

          {/* MINUTOS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
            md:text-[clamp(3rem,8vw,7rem)]
            lg:text-[clamp(4.5rem,11vw,10rem)]t-2"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.5rem)" }}
            >
              {timeLeft.minutes}
            </span>
            <span
              className="uppercase font-bold text-white
            md:text-[clamp(1.7rem,4vw,3.2rem)]
            lg:text-[clamp(2.2rem,4.5vw,4.2rem)]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)" }}
            >
              MINUTOS
            </span>
          </div>

          {/* SEGUNDOS */}
          <div className="flex flex-col items-center">
            <span
              className="font-black text-white mfont-black text-white mt-2
            md:text-[clamp(3rem,8vw,7rem)]
            lg:text-[clamp(4.5rem,11vw,10rem)]t-2"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.5rem)" }}
            >
              {timeLeft.seconds}
            </span>
            <span
              className="uppercase font-bold text-white
            md:text-[clamp(1.7rem,4vw,3.2rem)]
            lg:text-[clamp(2.2rem,4.5vw,4.2rem)]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)" }}
            >
              SEGUNDOS
            </span>
          </div>
        </div>

        <Link to="/tickets">
          <button
            className="mt-10 px-6 py-2 bg-black hover:scale-105 text-white font-black uppercase rounded-xl transition-transform duration-300 border-2 border-red-500 md:text-[clamp(1rem,2vw,1.6rem)] lg:text-[clamp(2rem,3vw,2.8rem)] lg:px-12 lg:py-4 xl:text-[clamp(2.4rem,4vw,3.2rem)] xl:px-16 xl:py-5 hover:shadow-[0_0_16px_4px_#dc2626,0_0_32px_8px_#b91c1c]"
            style={{
              ...(typeof window !== 'undefined' && window.innerWidth <= 430
                ? { marginTop: '1.5rem' }
                : {}),
              fontFamily: "ClashDisplay, system-ui, -apple-system, sans-serif",
              fontSize: "clamp(0.45rem, 1vw, 0.6rem)",
              letterSpacing: "0.12em",
            }}
          >
            <span className="block lg:text-[2.2rem] xl:text-[2.7rem]">Entradas</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Countdown;
