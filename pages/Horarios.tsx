import React from 'react';
import { Link } from 'react-router-dom';

const HorariosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/lineup" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Line Up
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Horarios
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Consulta los horarios de todos los artistas de Aquasella 2026
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Días del festival */}
          {['Jueves 13', 'Viernes 14', 'Sábado 15', 'Domingo 16'].map((dia, index) => (
            <div key={dia} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-rose-400">
                {dia} de Agosto
              </h2>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">Los horarios se anunciarán próximamente.</p>
                <div className="border-t border-gray-700 pt-3">
                  <p className="text-xs text-gray-500">
                    Mantente atento a las actualizaciones
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-rose-900/50 to-purple-900/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🕒 Próximamente</h3>
          <p className="text-gray-300">
            Los horarios detallados de cada artista se publicarán más cerca de las fechas del festival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorariosPage;