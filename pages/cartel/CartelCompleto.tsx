import React from 'react';
import { Link } from 'react-router-dom';

const CartelCompletoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/lineup/cartel" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver al Cartel
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Cartel Completo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Todos los artistas que actuarán en Aquasella 2026
          </p>
        </div>

        {/* Cartel principal */}
        <div className="bg-black rounded-2xl p-8 mb-12 border border-gray-800">
          <div className="text-center">
            <div className="text-6xl mb-6">🎪</div>
            <h2 className="text-3xl font-bold mb-4">Cartel Oficial</h2>
            <p className="text-gray-300 text-lg">
              El cartel completo se revelará próximamente con todos los artistas confirmados para los 4 días de festival.
            </p>
          </div>
        </div>

        {/* Vista previa por categorías */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-black rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Headliners</h3>
            <p className="text-gray-400">Los artistas principales que encabezarán cada día del festival.</p>
          </div>
          
          <div className="bg-black rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-sky-400">Artistas Nacionales</h3>
            <p className="text-gray-400">Lo mejor de la escena electrónica española.</p>
          </div>
          
          <div className="bg-black rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Nuevos Talentos</h3>
            <p className="text-gray-400">Las promesas emergentes de la música electrónica.</p>
          </div>
        </div>

        <div className="mt-12 bg-black rounded-xl p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">🔥 Próximamente</h3>
          <p className="text-gray-300">
            El cartel completo se anunciará en las próximas semanas. ¡Mantente atento a nuestras redes sociales!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartelCompletoPage;