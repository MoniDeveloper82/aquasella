import React from 'react';
import { Link } from 'react-router-dom';

const LineUpPage: React.FC = () => {
  const sections = [
    {
      title: 'ARTISTAS',
      description: 'Descubre todos los artistas que actuarán en Aquasella 2026',
      link: '/lineup/artistas',
      icon: '🎤',
      color: 'from-purple-600 to-blue-600'
    },
    {
      title: 'CARTEL',
      description: 'Consulta el cartel oficial del festival',
      link: '/lineup/cartel',
      icon: '🎪',
      color: 'from-sky-600 to-cyan-600'
    },
    {
      title: 'HORARIOS',
      description: 'Revisa los horarios de todas las actuaciones',
      link: '/lineup/horarios',
      icon: '🕒',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-6 text-glow">
            Line Up
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Toda la información sobre los artistas, cartel y horarios de Aquasella 2026
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              to={section.link}
              className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${section.color} rounded-2xl p-8 h-full shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}>
                <div className="text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-wider mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                    Ver más
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎵 Aquasella 2026</h3>
          <p className="text-gray-300 text-lg">
            13-16 de Agosto • Arriondas, Asturias
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineUpPage;