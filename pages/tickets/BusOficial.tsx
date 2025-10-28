import React from 'react';
import { Link } from 'react-router-dom';

const BusOficialPage: React.FC = () => {
  const busRoutes = [
    {
      id: 'madrid',
      name: 'Madrid - Aquasella',
      price: '45€',
      duration: '4h 30min',
      departure: 'Estación Sur de Autobuses',
      features: ['WiFi gratuito', 'Aire acondicionado', 'Asientos reclinables', 'Baño a bordo'],
      schedule: ['Ida: 13 Agosto 08:00h', 'Vuelta: 17 Agosto 14:00h'],
      color: 'from-red-600 to-red-800',
      icon: '🚌'
    },
    {
      id: 'asturias',
      name: 'Oviedo - Aquasella',
      price: '25€',
      duration: '2h 15min',
      departure: 'Estación de Autobuses ALSA',
      features: ['Servicio directo', 'Cómodos asientos', 'Aire acondicionado', 'Espacio para equipaje'],
      schedule: ['Ida: 13 Agosto 10:00h', 'Vuelta: 17 Agosto 16:00h'],
      color: 'from-green-600 to-emerald-800',
      icon: '🏔️'
    },
    {
      id: 'barcelona',
      name: 'Barcelona - Aquasella',
      price: '65€',
      duration: '6h 45min',
      departure: 'Estación Norte',
      features: ['Paradas técnicas', 'WiFi y USB', 'Servicio de catering', 'Entretenimiento a bordo'],
      schedule: ['Ida: 13 Agosto 06:00h', 'Vuelta: 17 Agosto 12:00h'],
      color: 'from-blue-600 to-indigo-800',
      icon: '🌊'
    },
    {
      id: 'valencia',
      name: 'Valencia - Aquasella',
      price: '55€',
      duration: '5h 30min',
      departure: 'Estación Central',
      features: ['Conexión directa', 'Comodidades premium', 'WiFi gratuito', 'Parada técnica'],
      schedule: ['Ida: 13 Agosto 07:00h', 'Vuelta: 17 Agosto 13:00h'],
      color: 'from-orange-600 to-yellow-700',
      icon: '🍊'
    }
  ];

  const advantages = [
    'Sin preocuparte por aparcar',
    'Viaja con otros festivaleros',
    'Llegada directa al festival',
    'Horarios coordinados con el evento',
    'Precio más económico que coche privado',
    'Reduce tu huella de carbono'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/tickets" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Tickets
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🚌</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Bus Oficial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Viaja cómodamente desde las principales ciudades de España directamente al festival. Transporte oficial y seguro.
          </p>
        </div>

        {/* Rutas disponibles */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {busRoutes.map((route) => (
            <div
              key={route.id}
              className={`bg-gradient-to-br ${route.color} rounded-2xl p-8`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{route.icon}</div>
                <div className="text-right">
                  <div className="text-3xl font-black">{route.price}</div>
                  <div className="text-sm opacity-80">Ida y vuelta</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                {route.name}
              </h3>
              <div className="text-lg opacity-90 mb-4">
                Duración: {route.duration}
              </div>
              <div className="text-sm opacity-80 mb-6">
                Salida desde: {route.departure}
              </div>
              
              {/* Horarios */}
              <div className="mb-6">
                <h4 className="font-bold mb-2">📅 Horarios:</h4>
                {route.schedule.map((time, index) => (
                  <div key={index} className="text-sm opacity-90">
                    {time}
                  </div>
                ))}
              </div>

              {/* Características */}
              <div className="space-y-2 mb-6">
                {route.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Reservar Bus
              </button>
            </div>
          ))}
        </div>

        {/* Ventajas del bus oficial */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🌟 Ventajas del Bus Oficial</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Incluye</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Transporte ida y vuelta</li>
              <li>• Seguro de viaje incluido</li>
              <li>• Asistencia en ruta</li>
              <li>• Llegada directa al festival</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">⚠️ Importante</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Plazas limitadas</li>
              <li>• No incluye entrada al festival</li>
              <li>• Presentarse 30min antes</li>
              <li>• Equipaje máximo: 20kg</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🚌 Viaja Seguro y Cómodo</h3>
          <p className="text-gray-300">
            El bus oficial te lleva directamente al festival. Relájate y prepárate para vivir Aquasella.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusOficialPage;