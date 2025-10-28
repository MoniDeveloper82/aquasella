import React from 'react';
import { Link } from 'react-router-dom';

const BateriasPage: React.FC = () => {
  const batteryOptions = [
    {
      id: 'battery-basic',
      name: 'Powerbank Básico',
      price: '12€',
      capacity: '10000mAh',
      description: 'Carga básica para todo el festival',
      features: ['2-3 cargas completas', 'Cable USB incluido', 'Ligero y portátil', 'Válido 4 días'],
      color: 'from-yellow-600 to-orange-600',
      icon: '🔋'
    },
    {
      id: 'battery-premium',
      name: 'Powerbank Premium',
      price: '20€',
      capacity: '20000mAh',
      description: 'Máxima autonomía para el festival',
      features: ['4-5 cargas completas', 'Carga rápida', 'Múltiples puertos USB', 'Resistente al agua'],
      color: 'from-green-600 to-emerald-600',
      icon: '⚡'
    },
    {
      id: 'charging-station',
      name: 'Acceso Estación de Carga',
      price: '8€',
      capacity: 'Ilimitado',
      description: 'Acceso a estaciones de carga del festival',
      features: ['Puntos de carga estratégicos', 'Múltiples tipos de cable', 'Carga supervisada', 'Acceso prioritario'],
      color: 'from-rose-600 to-purple-600',
      icon: '🔌'
    }
  ];

  const chargingLocations = [
    'Escenario Principal - Zona VIP',
    'Área de Food Trucks',
    'Zona de Descanso Central',
    'Entrada Principal',
    'Camping - Área de Servicios',
    'Backstage (solo VIP)'
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
          <div className="text-6xl mb-6">🔋</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Baterías Móvil
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantén tu móvil cargado durante todo el festival. No te pierdas ni un momento de la acción.
          </p>
        </div>

        {/* Opciones de batería */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
          {batteryOptions.map((battery) => (
            <div
              key={battery.id}
              className={`bg-gradient-to-br ${battery.color} rounded-2xl p-8 text-center`}
            >
              <div className="text-5xl mb-4">{battery.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                {battery.name}
              </h3>
              <div className="text-lg opacity-80 mb-2">{battery.capacity}</div>
              <div className="text-4xl font-black mb-4">{battery.price}</div>
              <p className="text-lg opacity-90 mb-6">{battery.description}</p>
              
              <div className="space-y-3 mb-8">
                {battery.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Reservar Batería
              </button>
            </div>
          ))}
        </div>

        {/* Estaciones de carga */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🔌 Estaciones de Carga Disponibles</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chargingLocations.map((location, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 Compatibilidad</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• iPhone (Lightning)</li>
              <li>• Android (USB-C y Micro USB)</li>
              <li>• Tablets y dispositivos móviles</li>
              <li>• Cables incluidos en todas las opciones</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">⚡ Especificaciones</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Carga rápida disponible</li>
              <li>• Protección contra sobrecarga</li>
              <li>• Indicador de batería LED</li>
              <li>• Resistentes y duraderos</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📸 Nunca Te Quedes Sin Batería</h3>
          <p className="text-gray-300">
            Captura todos los momentos, mantente conectado con tus amigos y no te pierdas nada del festival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BateriasPage;