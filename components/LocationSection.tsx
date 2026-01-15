
import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section 
      id="localizacion" 
      className="py-20"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), 
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)
        `,
        backgroundSize: '15px 15px',
        backgroundPosition: '0 0, 0 7.5px, 7.5px -7.5px, -7.5px 0px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-4xl font-black uppercase text-white mb-4 text-glow">Localización</h2>
            <p className="text-lg text-gray-300">Arriondas, Asturias, España</p>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden shadow-2xl shadow-sky-900/20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11598.78923363351!2d-5.194511630132837!3d43.28801991414439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4a159954f85e49%3A0x33351336e2056981!2sArriondas%2C%20Asturias%2C%20Spain!5e0!3m2!1sen!2sus!4v1620000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localización de Aquasella"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;