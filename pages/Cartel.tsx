import React from 'react';
import { Link } from 'react-router-dom';

const CartelPage: React.FC = () => {
  const cartelSections = [
    {
      id: 'completo',
      title: 'Cartel Completo',
      description: 'Visualiza todos los artistas confirmados para Aquasella 2026',
      icon: '🎤',
      color: 'from-purple-600 to-purple-800',
      link: '/lineup/cartel/completo'
    },
    {
      id: 'dias',
      title: 'Cartel por Días',
      description: 'Descubre qué artistas actuarán cada día del festival',
      icon: '📅',
      color: 'from-rose-600 to-red-800',
      link: '/lineup/cartel/dias'
    },
    {
      id: 'escenarios',
      title: 'Cartel por Escenarios y Día',
      description: 'Explora la programación completa por escenario y horario',
      icon: '🎯',
      color: 'from-green-600 to-green-800',
      link: '/lineup/cartel/escenarios'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
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

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Cartel Aquasella 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora el cartel de diferentes formas: completo, por días o por escenarios. 
            Encuentra tu forma perfecta de descubrir la música de Aquasella.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
          {cartelSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group-hover:-translate-y-2">
                <div className="text-6xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-6 inline-flex items-center text-white font-bold">
                  Explorar
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-black rounded-xl p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">🎵 Cartel Oficial Aquasella 2026</h3>
          <p className="text-gray-300 mb-4">
            Los artistas se van anunciando progresivamente. ¡Mantente atento a las novedades!
          </p>
          <p className="text-sm text-gray-400">
            Cada sección te ofrece una perspectiva diferente del increíble cartel que estamos preparando
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartelPage;