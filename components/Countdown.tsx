import React, { useState, useEffect } from 'react';

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
      className="py-8 md:py-16 px-2 md:px-4 relative"
      style={{
        backgroundImage: 'url(/img/Contador.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white mb-2 md:mb-4 text-glow" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
          Cuenta Atrás
        </h2>
        <p className="text-sm md:text-xl text-gray-300 mb-4 md:mb-8">Hasta Aquasella 2026</p>
        
        <div className="grid grid-cols-4 gap-2 md:gap-8 max-w-4xl mx-auto">
          <div 
            className="bg-black rounded-lg md:rounded-2xl p-2 md:p-6 border-[2px] md:border-[3px] shadow-2xl transition-all duration-300"
            style={{
              borderColor: '#8B0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)'
            }}
          >
            <div className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm lg:text-base uppercase tracking-wider md:tracking-widest text-gray-300 font-semibold">Días</div>
          </div>
          
          <div 
            className="bg-black rounded-lg md:rounded-2xl p-2 md:p-6 border-[2px] md:border-[3px] shadow-2xl transition-all duration-300"
            style={{
              borderColor: '#8B0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)'
            }}
          >
            <div className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
              {timeLeft.hours}
            </div>
            <div className="text-xs md:text-sm lg:text-base uppercase tracking-wider md:tracking-widest text-gray-300 font-semibold">Horas</div>
          </div>
          
          <div 
            className="bg-black rounded-lg md:rounded-2xl p-2 md:p-6 border-[2px] md:border-[3px] shadow-2xl transition-all duration-300"
            style={{
              borderColor: '#8B0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)'
            }}
          >
            <div className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
              {timeLeft.minutes}
            </div>
            <div className="text-xs md:text-sm lg:text-base uppercase tracking-wider md:tracking-widest text-gray-300 font-semibold">Minutos</div>
          </div>
          
          <div 
            className="bg-black rounded-lg md:rounded-2xl p-2 md:p-6 border-[2px] md:border-[3px] shadow-2xl transition-all duration-300"
            style={{
              borderColor: '#8B0000',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)'
            }}
          >
            <div className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-1 md:mb-2" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base uppercase tracking-widest text-gray-300 font-semibold">Segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
