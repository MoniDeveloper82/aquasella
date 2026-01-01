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
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'black',
          backgroundImage: "url('/img/1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">
        <img 
          src="/img/l1.png" 
          alt="Lineup Aquasella 2026" 
          className="w-full max-w-full h-auto object-cover block" 
          style={{display: 'block', margin: 0, padding: 0}} 
        />
        <div className="w-full h-full px-0 sm:px-0 lg:px-0 pt-20">
          {/* Título eliminado por solicitud */}

          <div className="flex flex-row gap-6 justify-center mb-16 w-full">
            {sections.map((section) => {
              let bgImg = '';
              if (section.title === 'ARTISTAS') bgImg = "/img/ARTISTAS.png";
              if (section.title === 'CARTEL') bgImg = "/img/CARTEL1.png";
              if (section.title === 'HORARIOS') bgImg = "/img/HORARIOS.png";
              if (!bgImg) return null;
              return (
                <Link
                  key={section.title}
                  to={section.link}
                  className="group block max-w-[400px] w-full"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className={
                      `relative bg-black rounded-2xl overflow-hidden h-[500px] transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]`
                    }
                    style={{ borderColor: '#8B0000', backgroundImage: `url('${bgImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    {/* Overlay hover igual que tickets */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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