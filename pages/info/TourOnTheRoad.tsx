import React from 'react';
import { Link } from 'react-router-dom';

const TourOnTheRoadPage: React.FC = () => {
  const tourStops = [
    {
      id: 'madrid',
      city: 'Madrid',
      date: '2 de Agosto',
      venue: 'Plaza Mayor',
      time: '18:00 - 22:00h',
      activities: ['DJ Set en vivo', 'Venta de entradas', 'Merchandise oficial', 'Actividades interactivas'],
      color: 'from-red-600 to-red-800',
      icon: '🏛️'
    },
    {
      id: 'barcelona',
      city: 'Barcelona',
      date: '4 de Agosto',
      venue: 'Playa de la Barceloneta',
      time: '17:00 - 21:00h',
      activities: ['Beach Party', 'Showcooking', 'Photocall oficial', 'Concursos y premios'],
      color: 'from-blue-600 to-indigo-800',
      icon: '🏖️'
    },
    {
      id: 'valencia',
      city: 'Valencia',
      date: '6 de Agosto',
      venue: 'Ciudad de las Artes',
      time: '19:00 - 23:00h',
      activities: ['Mapping audiovisual', 'Food trucks', 'Zona gaming', 'Meet & Greet artistas'],
      color: 'from-orange-600 to-yellow-700',
      icon: '🎨'
    },
    {
      id: 'sevilla',
      city: 'Sevilla',
      date: '8 de Agosto',
      venue: 'Plaza de España',
      time: '18:30 - 22:30h',
      activities: ['Flamenco electrónico', 'Degustación tapas', 'Mercadillo vintage', 'Talleres de DJ'],
      color: 'from-yellow-600 to-orange-700',
      icon: '💃'
    },
    {
      id: 'bilbao',
      city: 'Bilbao',
      date: '10 de Agosto',
      venue: 'Guggenheim Museum',
      time: '17:30 - 21:30h',
      activities: ['Arte y música', 'Exposición interactiva', 'Zona relax', 'Presentación cartel'],
      color: 'from-purple-600 to-violet-800',
      icon: '🎭'
    },
    {
      id: 'oviedo',
      city: 'Oviedo',
      date: '12 de Agosto',
      venue: 'Plaza de la Catedral',
      time: '16:00 - 20:00h',
      activities: ['Pre-festival party', 'Última oportunidad entradas', 'Bus hacia Aquasella', 'Warm-up oficial'],
      color: 'from-green-600 to-emerald-800',
      icon: '🏔️'
    }
  ];

  const tourFeatures = [
    'Entrada gratuita a todos los eventos',
    'Oportunidad de conocer otros festivaleros',
    'Descuentos exclusivos en entradas',
    'Merchandise limitado del tour',
    'Actividades únicas en cada ciudad',
    'Showcases de artistas confirmados'
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
          <div className="text-6xl mb-6">🚐</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Tour On The Road
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aquasella recorre España antes del festival. Únete a nosotros en las principales ciudades para vivir experiencias únicas y calentarte para el gran evento.
          </p>
        </div>

        {/* Calendario del tour */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-12">
          {tourStops.map((stop) => (
            <div
              key={stop.id}
              className={`bg-gradient-to-br ${stop.color} rounded-2xl p-6 text-center`}
            >
              <div className="text-5xl mb-4">{stop.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                {stop.city}
              </h3>
              <div className="text-lg font-bold mb-2">{stop.date}</div>
              <div className="text-sm opacity-90 mb-1">{stop.venue}</div>
              <div className="text-sm opacity-80 mb-6">{stop.time}</div>
              
              <div className="space-y-2 mb-6">
                {stop.activities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">{activity}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Más Información
              </button>
            </div>
          ))}
        </div>

        {/* Qué incluye el tour */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🎁 Qué Incluye el Tour</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tourFeatures.map((feature, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 Síguenos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Instagram:</strong> @aquasella_tour</li>
              <li>• <strong>TikTok:</strong> Contenido en vivo</li>
              <li>• <strong>Spotify:</strong> Playlists exclusivas</li>
              <li>• <strong>App oficial:</strong> Ubicación en tiempo real</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 Highlights</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Primeros anuncios de artistas</li>
              <li>• Showcases exclusivos</li>
              <li>• Conoce a otros festivaleros</li>
              <li>• Merchandise limitado</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🌟 El Festival Empieza Antes</h3>
          <p className="text-gray-300">
            El Tour On The Road es la antesala perfecta de Aquasella. ¡Ven a vivir la experiencia completa desde el primer día!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourOnTheRoadPage;