import React from 'react';
import { Link } from 'react-router-dom';

const PackAsturiasPage: React.FC = () => {
  const packs = [
    {
      id: 'pack-general-asturias',
      name: 'Pack General + Bus Asturias',
      entryPrice: '120€',
      busPrice: '25€',
      totalPrice: '140€',
      savings: '5€',
      description: 'Entrada general 4 días + transporte desde Oviedo',
      features: [
        'Entrada General 4 días',
        'Bus ida y vuelta desde Oviedo',
        'Trayecto corto y cómodo',
        'Llegada directa al festival',
        'Precio especial para asturianos'
      ],
      color: 'from-emerald-600 to-green-800',
      icon: '🎫🏔️'
    },
    {
      id: 'pack-camping-asturias',
      name: 'Pack Camping + Bus Asturias',
      entryPrice: '150€',
      busPrice: '25€',
      totalPrice: '170€',
      savings: '5€',
      description: 'Entrada + camping 4 días + transporte desde Oviedo',
      features: [
        'Entrada + Camping 4 días',
        'Bus ida y vuelta desde Oviedo',
        'Sin complicaciones de transporte',
        'Perfecto para grupos asturianos',
        'Acceso directo al camping'
      ],
      color: 'from-blue-600 to-teal-800',
      icon: '🏕️🏔️'
    }
  ];

  const busDetails = {
    departure: 'Estación de Autobuses ALSA - Oviedo',
    duration: '2h 15min',
    schedule: [
      'Salida Oviedo: 13 Agosto a las 10:00h',
      'Llegada Aquasella: 13 Agosto a las 12:15h',
      'Salida Aquasella: 17 Agosto a las 16:00h',
      'Llegada Oviedo: 17 Agosto a las 18:15h'
    ],
    services: [
      'Servicio directo sin paradas',
      'Cómodos asientos',
      'Aire acondicionado',
      'Amplio espacio para equipaje',
      'Ruta escénica por Asturias',
      'Conductor local experimentado'
    ]
  };

  const asturiasAdvantages = [
    'Trayecto corto y rápido',
    'Salida tardía, más descanso',
    'Precio especial regional',
    'Conoces la zona de llegada',
    'Perfecto para grupos locales',
    'Vuelta cómoda el domingo'
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
          <div className="text-6xl mb-6">🏔️🚌</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Pack Entrada + Bus Asturias
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Para los asturianos que quieren llegar cómodamente. Trayecto corto, precio especial y sin complicaciones.
          </p>
        </div>

        {/* Información especial Asturias */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase mb-4">Precio Especial Asturianos</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Al estar tan cerca de casa, ofrecemos un precio especial para el transporte desde Oviedo. 
              ¡Aquasella en tu tierra!
            </p>
          </div>
        </div>

        {/* Ofertas de packs */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 mb-12">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className={`bg-gradient-to-br ${pack.color} rounded-2xl p-8 text-center relative`}
            >
              {/* Badge de ahorro */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Ahorras {pack.savings}
              </div>
              
              <div className="text-5xl mb-4">{pack.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
                {pack.name}
              </h3>
              
              {/* Desglose de precios */}
              <div className="bg-black bg-opacity-30 rounded-lg p-4 mb-6">
                <div className="flex justify-between text-sm opacity-80 mb-2">
                  <span>Entrada Festival:</span>
                  <span>{pack.entryPrice}</span>
                </div>
                <div className="flex justify-between text-sm opacity-80 mb-2">
                  <span>Bus Asturias:</span>
                  <span>{pack.busPrice}</span>
                </div>
                <div className="border-t border-white border-opacity-30 pt-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Pack:</span>
                    <span>{pack.totalPrice}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg opacity-90 mb-6">{pack.description}</p>
              
              <div className="space-y-3 mb-8">
                {pack.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Comprar Pack Asturiano
              </button>
            </div>
          ))}
        </div>

        {/* Ventajas especiales Asturias */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🏔️ Ventajas del Pack Asturiano</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {asturiasAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detalles del bus */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🚌 Detalles del Transporte</h3>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-bold mb-4">📍 Ruta y Horarios</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Salida:</strong> {busDetails.departure}</p>
                <p><strong>Duración:</strong> {busDetails.duration}</p>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Horarios:</p>
                  {busDetails.schedule.map((time, index) => (
                    <p key={index} className="text-sm">• {time}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">🌟 Servicios Incluidos</h4>
              <div className="grid gap-2">
                {busDetails.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💰 Ventajas del Pack</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Descuento de 5€ vs compra separada</li>
              <li>• Trayecto corto y cómodo</li>
              <li>• Horarios perfectos para asturianos</li>
              <li>• Sin complicaciones de transporte</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Que Necesitas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• DNI o documento válido</li>
              <li>• Llegar 20 min antes de la salida</li>
              <li>• Equipaje máximo: 20kg</li>
              <li>• Confirmación de compra</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🏔️ Aquasella en Casa</h3>
          <p className="text-gray-300">
            El mejor festival de música electrónica llega a Asturias. Con el pack asturiano, todo es más fácil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackAsturiasPage;