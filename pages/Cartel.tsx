import React from 'react';

const CartelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Cartel
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Aquí se mostrará el cartel oficial del festival Aquasella 2026
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="text-gray-400 text-lg">
            <p>El cartel oficial se revelará próximamente.</p>
            <p className="mt-4">¡No te pierdas las actualizaciones!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartelPage;