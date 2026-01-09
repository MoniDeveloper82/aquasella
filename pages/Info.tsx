import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage: React.FC = () => {
  const infoSections = [
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
    <div className="min-h-screen text-white" style={{
      backgroundImage: "url('/img/vertical2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <style>{`
      @media (max-width: 768px) {
        div[style*="vertical2.png"] {
          background-size: contain !important;
          background-position: center top !important;
          background-repeat: repeat !important;
        }
      }
    `}</style>
      {/* Banner superior si existe */}
      <img src="/img/i1.png" alt="Título Aquasella" className="w-full block" style={{margin: 0, padding: 0, display: 'block'}} />
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Banner superior si existe */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {/* Card Zona de Descanso como Link */}
                        <Link
                          to="/info/zona-descanso"
                          className="group block"
                        >
                          <div
                            className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                            style={{ borderColor: '#8B0000' }}
                          >
                            <img src="/img/ZONA%20DE%20DESCANSO.png" alt="Zona de Descanso" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                            <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                          </div>
                        </Link>
            {infoSections.map((section) => (
              section.id === 'glamping' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/GLAMPING.png" alt="Glamping" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'lockers' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/LOCKERS.png" alt="Lockers" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'baterias' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/BATERIAS.png" alt="Baterías Móvil" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'tour-road' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/AUTOBUSES.png" alt="Tour On The Road" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'localizacion' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/LOCALIZACIÓN.png" alt="Localización" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'plano' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/PLANO.png" alt="Plano" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'colaboradores' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/COLABORADORES.png" alt="Colaboradores" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : section.id === 'historia' ? (
                <Link
                  key={section.id}
                  to={section.link}
                  className="group block"
                >
                  <div
                    className="relative bg-black rounded-2xl overflow-hidden h-[400px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]"
                    style={{ borderColor: '#8B0000' }}
                  >
                    <img src="/img/HISTORIA.png" alt="Historia" className="w-full h-full object-contain absolute inset-0" style={{zIndex: 0, opacity: 1}} />
                    <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}></div>
                  </div>
                </Link>
              ) : (
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
              )
            ))}
          </div>
          <div className="bg-black rounded-xl p-8 text-center">
            <div className="bg-black rounded-xl p-8 text-center border-4 border-red-600">
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
      </div>
    </div>
  );
};

export default InfoPage;