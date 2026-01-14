import React from 'react';
import { Link } from 'react-router-dom';
import FanPosters from '../../components/FanPosters';

const HistoriaPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-x-hidden pb-10 z-10" style={{
      backgroundImage: "url('/img/vertical3.png')",
      backgroundSize: '100% auto',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="relative z-10 min-h-screen flex items-center justify-center">
      <style>{`
        @media (max-width: 768px) {
          div[style*="vertical3.png"] {
            background-size: contain !important;
            background-position: center top !important;
            background-repeat: repeat !important;
          }
        }
      `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Historia de Aquasella
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde 1997 hasta 2026, descubre la increíble trayectoria de Aquasella, un festival que ha marcado la historia de la música electrónica en España.
          </p>
        </div>

        {/* Historia narrativa */}
        <div className="mb-16">
          <div className="rounded-xl p-6 border-4 border-double border-white bg-gradient-to-b from-red-800 via-red-900 to-red-950 md:flex md:items-center md:justify-center md:min-h-[200px]" style={{
            boxShadow: '0 12px 24px rgba(0,0,0,0.5), 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,255,255,0.3), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.3)',
            transform: 'perspective(1000px) rotateX(2deg)',
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.15) 100%)'
          }}>
            <div className="prose prose-lg max-w-xl text-white text-center md:bg-transparent bg-black/70 md:p-0 p-4 rounded-lg">
              <p className="text-lg leading-relaxed mb-6 text-center">
                El festival Aquasella nació en 1997 en Arriondas/ Cangas de Onís, Asturias, impulsado por La Real Producciones, 
                con el objetivo de crear un espacio dedicado a la música electrónica en el norte de España. Lo que comenzó como 
                un evento de pequeño formato fue creciendo de manera progresiva hasta consolidarse como uno de los festivales 
                más importantes de Europa con una identidad propia.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-center">
                Desde sus primeras ediciones, Aquasella ha desarrollado una línea artística coherente, combinando artistas 
                nacionales e internacionales y acompañando la evolución de la música electrónica a lo largo de casi tres décadas. 
                Esta continuidad, junto a un entorno natural singular y una relación cercana con su público, ha definido el 
                carácter del festival desde sus inicios.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Con el paso del tiempo, Aquasella evolucionó hacia un formato de mayor escala, manteniendo siempre una fuerte 
                conexión con su comunidad. Actualmente, el festival reúne cada verano a miles de asistentes procedentes de 
                distintos países, consolidándose como una cita destacada dentro del panorama electrónico español.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                En 2026, Aquasella celebra su 29ª edición, respaldada por una trayectoria sólida y por el éxito de las últimas 
                ediciones, que han alcanzado el sold out. Un recorrido construido sobre la experiencia, la coherencia y una 
                pasión compartida por la música electrónica.
              </p>
              
              <p className="text-lg leading-relaxed">
                Aquasella es hoy un punto de encuentro donde conviven historia, presente y futuro de la música electrónica.
              </p>
            </div>
          </div>
        </div>

        {/* Galería de carteles */}
        <FanPosters />

        {/* Cierre */}
        <div className="bg-black rounded-xl p-4 sm:p-6 md:p-8 text-center text-white border-2 border-white">
          <h3 className="text-2xl font-bold mb-4">La Esencia de Aquasella</h3>
          <p className="text-white text-sm text-left md:text-center">
            Más de dos décadas creando momentos inolvidables. Aquasella es la historia viva de la música electrónica 
            en España, un legado que continúa escribiéndose con cada edición.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaPage;