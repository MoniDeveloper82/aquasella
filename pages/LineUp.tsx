import React from 'react';
import { Link } from 'react-router-dom';

const LineUpPage: React.FC = () => {
  const sections = [
    {
      title: 'ARTISTAS',
      description: 'Descubre todos los artistas que actuarán en Aquasella 2026',
      link: '/lineup/artistas',
      icon: '🎤',
      color: 'from-purple-600 to-rose-600'
    },
    {
      title: 'CARTEL',
      description: 'Consulta el cartel oficial del festival',
      link: '/lineup/cartel',
      icon: '🎪',
      color: 'from-rose-600 to-pink-600'
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
    <div className="min-h-screen text-white relative overflow-x-hidden pb-10"
      style={{
        backgroundColor: 'black',
        backgroundImage: "url('/img/1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src="/img/l1.png" alt="Lineup Aquasella 2026" className="w-full hidden md:block" style={{margin: 0, padding: 0, display: 'block'}} />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 mt-0 p-0">
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 justify-center justify-items-center">
            {sections.map((section) => {
              let imgSrc = '';
              if (section.title === 'ARTISTAS') imgSrc = '/img/ARTISTAS.png';
              if (section.title === 'CARTEL') imgSrc = '/img/CARTEL1.png';
              if (section.title === 'HORARIOS') imgSrc = '/img/HORARIOS.png';
              const hideContent = section.title === 'ARTISTAS' || section.title === 'CARTEL' || section.title === 'HORARIOS';
              return (
                <Link
                  key={section.title}
                  to={section.link}
                  className="group block"
                >
                  <div className={
                    `relative bg-black rounded-2xl overflow-hidden h-80 md:h-[500px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]`
                  } style={{ borderColor: '#8B0000' }}>
                    {hideContent ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={imgSrc}
                          alt={section.title}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <span className="text-6xl mb-4 drop-shadow-lg">{section.icon}</span>
                        <h3 className="text-2xl font-bold mb-2 text-center text-white drop-shadow-lg">{section.title}</h3>
                        <p className="text-base text-gray-200 text-center px-2 drop-shadow-lg">{section.description}</p>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineUpPage;