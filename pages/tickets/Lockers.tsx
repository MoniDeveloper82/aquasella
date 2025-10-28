import React from 'react';
import { Link } from 'react-router-dom';

const LockersPage: React.FC = () => {
  const lockerOptions = [
    {
      id: 'locker-small',
      name: 'Locker Pequeño',
      price: '15€',
      size: '30x30x40 cm',
      description: 'Perfecto para objetos esenciales',
      features: ['Móvil y cargador', 'Cartera y llaves', 'Documentación', 'Pequeños objetos personales'],
      color: 'from-blue-600 to-blue-800',
      icon: '📱'
    },
    {
      id: 'locker-medium',
      name: 'Locker Mediano',
      price: '25€',
      size: '40x40x60 cm',
      description: 'Ideal para mochila y pertenencias',
      features: ['Mochila pequeña/mediana', 'Ropa de cambio', 'Comida y bebidas', 'Artículos personales'],
      color: 'from-green-600 to-green-800',
      icon: '🎒'
    },
    {
      id: 'locker-large',
      name: 'Locker Grande',
      price: '35€',
      size: '50x50x80 cm',
      description: 'Máximo espacio para grupos',
      features: ['Mochila grande', 'Múltiples cambios de ropa', 'Equipo de camping ligero', 'Compartir entre amigos'],
      color: 'from-purple-600 to-purple-800',
      icon: '🧳'
    }
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
          <div className="text-6xl mb-6">🔒</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Lockers Seguros
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Guarda tus pertenencias de forma segura durante todo el festival. Disfruta sin preocupaciones.
          </p>
        </div>

        {/* Opciones de Lockers */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
          {lockerOptions.map((locker) => (
            <div
              key={locker.id}
              className={`bg-gradient-to-br ${locker.color} rounded-2xl p-8 text-center`}
            >
              <div className="text-5xl mb-4">{locker.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                {locker.name}
              </h3>
              <div className="text-lg opacity-80 mb-2">{locker.size}</div>
              <div className="text-4xl font-black mb-4">{locker.price}</div>
              <p className="text-lg opacity-90 mb-6">{locker.description}</p>
              
              <div className="space-y-3 mb-8">
                {locker.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Reservar Locker
              </button>
            </div>
          ))}
        </div>

        {/* Información del servicio */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🔐 Seguridad</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Código PIN personal único</li>
              <li>• Acero reforzado</li>
              <li>• Vigilancia 24h en la zona</li>
              <li>• Seguro contra robos incluido</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📍 Ubicación</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Múltiples puntos en el festival</li>
              <li>• Cerca de escenarios principales</li>
              <li>• Acceso 24h durante el evento</li>
              <li>• Señalización clara</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🛡️ Tranquilidad Total</h3>
          <p className="text-gray-300">
            Baila sin preocupaciones. Tus pertenencias estarán seguras mientras disfrutas del mejor festival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LockersPage;