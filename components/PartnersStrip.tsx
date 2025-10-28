
import React from 'react';

const PartnersStrip: React.FC = () => {
  // In a real app, this would come from a data source
  const partners = [
    { name: 'Sponsor 1', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+1' },
    { name: 'Sponsor 2', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+2' },
    { name: 'Sponsor 3', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+3' },
    { name: 'Sponsor 4', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+4' },
    { name: 'Sponsor 5', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+5' },
    { name: 'Sponsor 6', logo: 'https://via.placeholder.com/150x60/C0C0C0/FFFFFF?text=Sponsor+6' },
  ];

  return (
    <div 
      className="py-12 border-2 border-red-500"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), 
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)
        `,
        backgroundSize: '15px 15px',
        backgroundPosition: '0 0, 0 7.5px, 7.5px -7.5px, -7.5px 0px',
        boxShadow: '0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Colaboradores
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersStrip;
