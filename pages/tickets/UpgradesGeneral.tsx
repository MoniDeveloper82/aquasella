import React from 'react';
import { Link } from 'react-router-dom';

const UpgradesGeneralPage: React.FC = () => {
  const upgrades = [
    {
      id: 'vip-area',
      name: 'Zona VIP',
      price: '80€',
      description: 'Acceso exclusivo a la zona VIP con mejores vistas',
      features: ['Área reservada frente al escenario principal', 'Barras exclusivas con menor cola', 'Baños VIP', 'Zona de descanso premium'],
      color: 'from-gold-600 to-yellow-600',
      icon: '👑'
    },
    {
      id: 'fast-track',
      name: 'Fast Track',
      price: '25€',
      description: 'Evita las colas de acceso al festival',
      features: ['Entrada rápida sin colas', 'Acceso prioritario', 'Control de seguridad express', 'Válido todos los días'],
      color: 'from-green-600 to-emerald-600',
      icon: '⚡'
    },
    {
      id: 'backstage-pass',
      name: 'Backstage Experience',
      price: '200€',
      description: 'Experiencia exclusiva tras el escenario',
      features: ['Acceso a zona de artistas', 'Meet & greet con artistas seleccionados', 'Fotografía exclusiva', 'Merchandise premium'],
      color: 'from-purple-600 to-violet-600',
      icon: '🎭'
    },
    {
      id: 'premium-food',
      name: 'Premium Food Package',
      price: '60€',
      description: 'Paquete gastronómico premium para 4 días',
      features: ['Acceso a food trucks premium', 'Bebidas incluidas', 'Menú gourmet diario', 'Área gastronómica exclusiva'],
      color: 'from-orange-600 to-red-600',
      icon: '🍽️'
    },
    {
      id: 'artist-viewing',
      name: 'Artist Viewing Deck',
      price: '120€',
      description: 'Plataforma elevada con vista privilegiada',
      features: ['Plataforma elevada', 'Vista sin obstáculos', 'Servicio de bar dedicado', 'Capacidad limitada'],
      color: 'from-blue-600 to-indigo-600',
      icon: '🎯'
    },
    {
      id: 'comfort-pack',
      name: 'Comfort Pack',
      price: '45€',
      description: 'Máximo confort durante el festival',
      features: ['Silla plegable premium', 'Manta del festival', 'Kit de supervivencia', 'Parasol oficial'],
      color: 'from-teal-600 to-cyan-600',
      icon: '🛋️'
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
          <div className="text-6xl mb-6">⭐</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Upgrades General
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mejora tu experiencia en Aquasella con nuestros servicios premium y VIP. Haz que tu festival sea inolvidable.
          </p>
        </div>

        {/* Grid de upgrades */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {upgrades.map((upgrade) => (
            <div
              key={upgrade.id}
              className={`bg-gradient-to-br ${upgrade.color} rounded-2xl p-6 text-center`}
            >
              <div className="text-4xl mb-4">{upgrade.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-2">
                {upgrade.name}
              </h3>
              <div className="text-3xl font-black mb-4">{upgrade.price}</div>
              <p className="text-sm opacity-90 mb-6">{upgrade.description}</p>
              
              <div className="space-y-2 mb-6">
                {upgrade.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-left">
                    <svg className="w-4 h-4 mr-2 mt-0.5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Añadir Upgrade
              </button>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💡 Información Important</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Los upgrades se pueden combinar</li>
              <li>• Disponibilidad limitada para algunos servicios</li>
              <li>• Se requiere entrada válida al festival</li>
              <li>• Los upgrades son válidos para toda la duración</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎫 Cómo Funciona</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 1. Compra tu entrada base</li>
              <li>• 2. Selecciona tus upgrades</li>
              <li>• 3. Combina múltiples servicios</li>
              <li>• 4. Disfruta de la experiencia premium</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">✨ Experiencia Premium</h3>
          <p className="text-gray-300">
            Convierte tu festival en una experiencia VIP. Cada upgrade está diseñado para maximizar tu disfrute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradesGeneralPage;