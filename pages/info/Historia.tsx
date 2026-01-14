import React from 'react';
import { Link } from 'react-router-dom';
import FanPosters from '../../components/FanPosters';

const HistoriaPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white py-20">
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
          <div className="rounded-xl p-8 border-2 border-white" style={{ backgroundColor: 'rgb(0, 177, 0)' }}>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                El festival Aquasella nació en 1997 en Arriondas/ Cangas de Onís, Asturias, impulsado por La Real Producciones, 
                con el objetivo de crear un espacio dedicado a la música electrónica en el norte de España. Lo que comenzó como 
                un evento de pequeño formato fue creciendo de manera progresiva hasta consolidarse como uno de los festivales 
                más importantes de Europa con una identidad propia.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                Desde sus primeras ediciones, Aquasella ha desarrollado una línea artística coherente, combinando artistas 
                nacionales e internacionales y acompañando la evolución de la música electrónica a lo largo de casi tres décadas. 
                Esta continuidad, junto a un entorno natural singular y una relación cercana con su público, ha definido el 
                carácter del festival desde sus inicios.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                Con el paso del tiempo, Aquasella evolucionó hacia un formato de mayor escala, manteniendo siempre una fuerte 
                conexión con su comunidad. Actualmente, el festival reúne cada verano a miles de asistentes procedentes de 
                distintos países, consolidándose como una cita destacada dentro del panorama electrónico español.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                En 2026, Aquasella celebra su 29ª edición, respaldada por una trayectoria sólida y por el éxito de las últimas 
                ediciones, que han alcanzado el sold out. Un recorrido construido sobre la experiencia, la coherencia y una 
                pasión compartida por la música electrónica.
              </p>
              
              <p className="text-xl leading-relaxed">
                Aquasella es hoy un punto de encuentro donde conviven historia, presente y futuro de la música electrónica.
              </p>
            </div>
          </div>
        </div>

        {/* Galería de carteles */}
        <FanPosters />

        {/* Cierre */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎵 La Esencia de Aquasella</h3>
          <p className="text-gray-300">
            Más de dos décadas creando momentos inolvidables. Aquasella es la historia viva de la música electrónica 
            en España, un legado que continúa escribiéndose con cada edición.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoriaPage;