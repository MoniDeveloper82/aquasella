import React from 'react';
import { Link } from 'react-router-dom';

const ZonaDescansoPage: React.FC = () => {
  const restAreas = [
    {
      id: 'chill-out-principal',
      name: 'Chill Out Principal',
      location: 'Centro del festival',
      description: 'Zona principal de descanso con sombra y asientos cómodos',
      features: ['Asientos acolchados', 'Sombra natural', 'Música ambiente', 'Zona sin alcohol'],
      capacity: '200 personas',
      color: 'from-green-600 to-emerald-700',
      icon: '🌳'
    },
    {
      id: 'zen-garden',
      name: 'Zen Garden',
      location: 'Zona norte',
      description: 'Espacio de relajación y meditación',
      features: ['Jardín temático', 'Música relajante', 'Zona de yoga', 'Silencio garantizado'],
      capacity: '50 personas',
      color: 'from-purple-600 to-violet-700',
      icon: '🧘'
    },
    {
      id: 'family-area',
      name: 'Área Familiar',
      location: 'Zona este',
      description: 'Espacio pensado para familias con niños',
      features: ['Juegos infantiles', 'Cambiadores', 'Zona de lactancia', 'Actividades para niños'],
      capacity: '100 personas',
      color: 'from-pink-600 to-rose-700',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'recharge-zone',
      name: 'Recharge Zone',
      location: 'Cerca del escenario principal',
      description: 'Zona de recarga de energía con servicios',
      features: ['Puntos de carga móvil', 'Sillas reclinables', 'Brumizadores', 'Distribuidores de agua'],
      capacity: '80 personas',
      color: 'from-blue-600 to-cyan-700',
      icon: '⚡'
    }
  ];

  const services = [
    { name: 'WiFi gratuito', icon: '📶' },
    { name: 'Puntos de agua', icon: '💧' },
    { name: 'Primeros auxilios', icon: '🏥' },
    { name: 'Información', icon: 'ℹ️' },
    { name: 'Baños cercanos', icon: '🚻' },
    { name: 'Seguridad 24h', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/info" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Información
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🛋️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Zonas de Descanso
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Espacios especialmente diseñados para que puedas relajarte, recargar energías y disfrutar de momentos de calma durante el festival.
          </p>
        </div>

        {/* Áreas de descanso */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {restAreas.map((area) => (
            <div
              key={area.id}
              className={`bg-gradient-to-br ${area.color} rounded-2xl p-8`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">{area.icon}</div>
                <div className="text-right">
                  <div className="text-sm opacity-80">{area.location}</div>
                  <div className="text-sm font-bold">{area.capacity}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
                {area.name}
              </h3>
              <p className="text-lg opacity-90 mb-6">{area.description}</p>
              
              <div className="space-y-3">
                {area.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Servicios disponibles */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🌟 Servicios Disponibles en Todas las Zonas</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <div className="text-2xl mr-3">{service.icon}</div>
                <span className="text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horarios y normas */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🕐 Horarios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Apertura:</strong> 13 Agosto 10:00h</li>
              <li>• <strong>Horario:</strong> 24 horas durante el festival</li>
              <li>• <strong>Limpieza:</strong> Diaria de 06:00 a 08:00h</li>
              <li>• <strong>Cierre:</strong> 17 Agosto 12:00h</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Normas de Uso</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Respeta el silencio en Zen Garden</li>
              <li>• No consumo de alcohol en Área Familiar</li>
              <li>• Máximo 2 horas de ocupación continua</li>
              <li>• Mantén limpio el espacio</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">😌 Tu Oasis en el Festival</h3>
          <p className="text-gray-300">
            Las zonas de descanso están pensadas para que recargues energías y disfrutes del festival de forma cómoda y relajada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZonaDescansoPage;