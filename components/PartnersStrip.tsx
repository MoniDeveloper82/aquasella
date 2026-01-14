
import React from 'react';

const PartnersStrip: React.FC = () => {
  // In a real app, this would come from a data source
  const partners = [
    { name: 'Sponsor 1', logo: '/img/sponsor1.png' },
    { name: 'Sponsor 2', logo: '/img/sponsor2.png' },
    { name: 'Sponsor 3', logo: '/img/sponsor3.png' },
    { name: 'Sponsor 4', logo: '/img/sponsor4.png' },
  ];

  return (
    <div 
      className="py-12"
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-lg px-4 py-2 rounded-full">
            Colaboradores
          </h3>
        </div>
        <div className="relative">
          {/* Cuadro 3D detrás de los logos */}
          <div 
            className="absolute inset-0 transform -rotate-x-12 rotate-y-6 scale-105"
            style={{
              background: 'white',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transform: 'perspective(1000px) rotateX(-8deg) rotateY(2deg) translateZ(-20px)'
            }}
          />
          <div className="flex justify-center items-center gap-1 md:gap-2 overflow-hidden relative z-10">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersStrip;
