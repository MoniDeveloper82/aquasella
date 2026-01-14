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

  const [animate, setAnimate] = useState(false);

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
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
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
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-white">
        <div className="relative flex flex-col items-center">
          <div className="flex gap-4 mt-10 sm:mt-24">
            {/* DÍAS */}
            <div className="flex flex-col items-center">
              <span
                className={`font-black text-white mt-2 transition-transform duration-300 ${animate ? 'scale-110' : 'scale-100'} ${timeLeft.days < 30 ? 'animate-pulse' : ''}`}
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
                className={`font-black text-white mt-2 transition-transform duration-300 ${animate ? 'scale-110' : 'scale-100'}`}
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
                className={`font-black text-white mt-2 transition-transform duration-300 ${animate ? 'scale-110' : 'scale-100'}`}
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
                className={`font-black text-white mt-2 transition-transform duration-300 ${animate ? 'scale-110' : 'scale-100'}`}
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
          <div className="mt-4 sm:mt-6">
            <Link to="/tickets">
              <button
                className="px-6 py-2 bg-black text-white font-black uppercase rounded-xl border-2 border-red-500 hover:shadow-[0_0_8px_2px_#dc2626,0_0_12px_3px_#b91c1c] sm:hover:shadow-[0_0_20px_4px_#dc2626,0_0_32px_8px_#b91c1c] hover:scale-110 transition-transform transition-shadow duration-300"
                style={{
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
      </div>
    </div>
  );
};

export default Countdown;
