import React from 'react';
import { Link } from 'react-router-dom';

const InfoLockersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">PROXIMAMENTE MÁS INFORMACIÓN SOBRE LOCKERS</h1>
          <p className="text-xl md:text-2xl text-gray-300">Estamos trabajando en los detalles de los lockers. ¡Mantente atento!</p>
        </div>

      </div>
    </div>
  );
};

export default InfoLockersPage;