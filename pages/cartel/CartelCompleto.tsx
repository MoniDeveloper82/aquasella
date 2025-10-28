import React from 'react';
import { Link } from 'react-router-dom';

const CartelCompletoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/lineup/cartel" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Cartel
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Cartel Completo
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Todos los artistas que actuarán en Aquasella 2026
          </p>
        </div>

        {/* Cartel principal */}
        <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 mb-12">
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
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Headliners</h3>
            <p className="text-gray-400">Los artistas principales que encabezarán cada día del festival.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-sky-400">Artistas Nacionales</h3>
            <p className="text-gray-400">Lo mejor de la escena electrónica española.</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Nuevos Talentos</h3>
            <p className="text-gray-400">Las promesas emergentes de la música electrónica.</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
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