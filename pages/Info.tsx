import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage: React.FC = () => {
  const infoSections = [
    {
      id: 'zona-descanso',
      title: 'Zona de Descanso',
      description: 'Espacios cómodos para relajarte durante el festival',
      icon: '🛋️',
      color: 'from-rose-600 to-red-800',
      link: '/info/zona-descanso'
    },
    {
      id: 'glamping',
      title: 'Glamping',
      description: 'Alojamiento premium con todas las comodidades',
      icon: '🏕️',
      color: 'from-orange-600 to-orange-800',
      link: '/info/glamping'
    },
    {
      id: 'lockers',
      title: 'Lockers',
      description: 'Guarda tus pertenencias de forma segura',
      icon: '🔒',
      color: 'from-gray-600 to-gray-800',
      link: '/info/lockers'
    },
    {
      id: 'baterias',
      title: 'Baterías Móvil',
      description: 'Mantén tu móvil cargado durante todo el evento',
      icon: '🔋',
      color: 'from-yellow-600 to-yellow-800',
      link: '/info/baterias'
    },
    {
      id: 'tour-road',
      title: 'Tour On The Road',
      description: 'Síguenos por toda España antes del festival',
      icon: '🚐',
      color: 'from-purple-600 to-purple-800',
      link: '/info/tour-road'
    },
    {
      id: 'localizacion',
      title: 'Localización',
      description: 'Cómo llegar y dónde encontrarnos',
      icon: '📍',
      color: 'from-red-600 to-red-800',
      link: '/info/localizacion'
    },
    {
      id: 'plano',
      title: 'Plano',
      description: 'Mapa detallado del recinto del festival',
      icon: '🗺️',
      color: 'from-green-600 to-green-800',
      link: '/info/plano'
    },
    {
      id: 'colaboradores',
      title: 'Colaboradores',
      description: 'Partners y patrocinadores que hacen posible Aquasella',
      icon: '🤝',
      color: 'from-purple-600 to-pink-800',
      link: '/info/colaboradores'
    },
    {
      id: 'historia',
      title: 'Historia',
      description: 'El origen y evolución del festival Aquasella',
      icon: '📜',
      color: 'from-teal-600 to-teal-800',
      link: '/info/historia'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <img 
        src="/img/i1.png" 
        alt="Información Aquasella 2026" 
        className="w-full max-w-full h-auto object-cover block" 
        style={{display: 'block', margin: 0, padding: 0}} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {infoSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              <div className={`
                bg-gradient-to-br ${section.color} 
                rounded-2xl p-6 text-center h-full
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl
                group-hover:-translate-y-2
              `}>
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className="inline-flex items-center text-white font-bold text-sm">
                  Más Información
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">ℹ️ Centro de Información</h3>
          <p className="text-gray-300 mb-4">
            ¿Tienes dudas? Encuentra toda la información que necesitas para disfrutar al máximo de Aquasella.
          </p>
          <p className="text-sm text-gray-400">
            Si no encuentras lo que buscas, no dudes en contactarnos
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;