import React from 'react';
import { Link } from 'react-router-dom';

const PackMadridPage: React.FC = () => {
  const packs = [
    {
      id: 'pack-general-madrid',
      name: 'Pack General + Bus Madrid',
      entryPrice: '120€',
      busPrice: '45€',
      totalPrice: '155€',
      savings: '10€',
      description: 'Entrada general 4 días + transporte desde Madrid',
      features: [
        'Entrada General 4 días',
        'Bus ida y vuelta desde Madrid',
        'WiFi gratuito en el bus',
        'Llegada directa al festival',
        'Seguro de viaje incluido'
      ],
      color: 'from-red-600 to-red-800',
      icon: '🎫🚌'
    },
    {
      id: 'pack-camping-madrid',
      name: 'Pack Camping + Bus Madrid',
      entryPrice: '150€',
      busPrice: '45€',
      totalPrice: '185€',
      savings: '10€',
      description: 'Entrada + camping 4 días + transporte desde Madrid',
      features: [
        'Entrada + Camping 4 días',
        'Bus ida y vuelta desde Madrid',
        'Acceso directo al camping',
        'Sin necesidad de aparcar',
        'Viaja con otros festivaleros'
      ],
      color: 'from-purple-600 to-purple-800',
      icon: '🏕️🚌'
    }
  ];

  const busDetails = {
    departure: 'Estación Sur de Autobuses - Madrid',
    duration: '4h 30min',
    schedule: [
      'Salida Madrid: 13 Agosto a las 08:00h',
      'Llegada Aquasella: 13 Agosto a las 12:30h',
      'Salida Aquasella: 17 Agosto a las 14:00h',
      'Llegada Madrid: 17 Agosto a las 18:30h'
    ],
    services: [
      'Aire acondicionado',
      'WiFi gratuito',
      'Asientos reclinables',
      'Baño a bordo',
      'Paradas técnicas',
      'Espacio para equipaje'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tickets" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Tickets
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎫🚌</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Pack Entrada + Bus Madrid
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La forma más cómoda de llegar a Aquasella desde Madrid. Todo incluido con descuento especial.
          </p>
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
                  <span>Bus Madrid:</span>
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
                Comprar Pack Completo
              </button>
            </div>
          ))}
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
              <li>• Descuento de 10€ vs compra separada</li>
              <li>• Una sola compra, todo resuelto</li>
              <li>• Asientos garantizados en el bus</li>
              <li>• Coordinación perfecta de horarios</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Que Necesitas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• DNI o documento válido</li>
              <li>• Llegar 30 min antes de la salida</li>
              <li>• Equipaje máximo: 20kg</li>
              <li>• Confirmación de compra impresa</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Todo Listo para Aquasella</h3>
          <p className="text-gray-300">
            Con el pack completo no tienes que preocuparte por nada. Sube al bus y prepárate para el festival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackMadridPage;