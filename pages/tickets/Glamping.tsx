import React from 'react';
import { Link } from 'react-router-dom';

const GlampingPage: React.FC = () => {
  const glampingOptions = [
    {
      id: 'glamping-duo',
      name: 'Glamping Dúo',
      price: '400€',
      capacity: '2 personas',
      description: 'Experiencia glamping para parejas',
      features: ['Tienda premium para 2', 'Camas cómodas incluidas', 'Zona privada', 'Kit de bienvenida', 'Ducha privada'],
      color: 'from-pink-600 to-rose-700',
      icon: '💕'
    },
    {
      id: 'glamping-quad',
      name: 'Glamping Cuádruple',
      price: '600€',
      capacity: '4 personas',
      description: 'Alojamiento premium para grupos',
      features: ['Tienda espaciosa para 4', 'Literas premium', 'Área de estar', 'Mininevera incluida', 'Baño compartido cercano'],
      color: 'from-blue-600 to-indigo-700',
      icon: '👥'
    },
    {
      id: 'glamping-luxury',
      name: 'Glamping Luxury Suite',
      price: '800€',
      capacity: '2 personas',
      description: 'La experiencia más exclusiva',
      features: ['Suite de lujo', 'Cama king size', 'Baño privado completo', 'Terraza privada', 'Servicio de conserjería'],
      color: 'from-gold-600 to-yellow-600',
      icon: '👑'
    }
  ];

  const services = [
    'Ropa de cama premium incluida',
    'Toallas y amenities',
    'Luz eléctrica en la tienda',
    'Acceso a ducha VIP',
    'Zona de glamping vallada',
    'Seguridad 24h en el área',
    'Desayuno buffet incluido',
    'Late check-out hasta 14:00h'
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
          <div className="text-6xl mb-6">🏕️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Glamping Aquasella
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vive el festival con el máximo confort. Alojamiento premium con todas las comodidades en el corazón del evento.
          </p>
        </div>

        {/* Opciones de Glamping */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
          {glampingOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-gradient-to-br ${option.color} rounded-2xl p-8 text-center`}
            >
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                {option.name}
              </h3>
              <div className="text-lg opacity-80 mb-4">{option.capacity}</div>
              <div className="text-4xl font-black mb-4">{option.price}</div>
              <p className="text-lg opacity-90 mb-6">{option.description}</p>
              
              <div className="space-y-3 mb-8">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Reservar Glamping
              </button>
            </div>
          ))}
        </div>

        {/* Servicios incluidos */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🌟 Servicios Incluidos en Todos los Glampings</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <svg className="w-5 h-5 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Información Important</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Check-in: 13 Agosto desde 10:00h</li>
              <li>• Check-out: 17 Agosto hasta 14:00h</li>
              <li>• Entrada al festival incluida</li>
              <li>• Cancelación gratuita hasta 30 días antes</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 Ubicación</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• A 2 minutos del escenario principal</li>
              <li>• Zona exclusiva y vallada</li>
              <li>• Acceso directo al festival</li>
              <li>• Shuttle interno incluido</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">✨ Comodidad Premium</h3>
          <p className="text-gray-300">
            No renuncies al confort. Despierta en el festival y vive la experiencia más completa de Aquasella.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlampingPage;