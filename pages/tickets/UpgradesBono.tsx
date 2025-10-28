import React from 'react';
import { Link } from 'react-router-dom';

const UpgradesBonoPage: React.FC = () => {
  const upgrades = [
    {
      id: 'vip-bono',
      name: 'Zona VIP Bono Cultural',
      price: '60€',
      originalPrice: '80€',
      description: 'Acceso VIP con descuento especial para Bono Cultural',
      features: ['Descuento de 20€ aplicado', 'Área reservada premium', 'Barras exclusivas', 'Baños VIP'],
      color: 'from-emerald-600 to-green-600',
      icon: '👑'
    },
    {
      id: 'fast-track-bono',
      name: 'Fast Track Bono Cultural',
      price: '20€',
      originalPrice: '25€',
      description: 'Entrada rápida con precio especial',
      features: ['Descuento de 5€ aplicado', 'Sin colas de acceso', 'Acceso prioritario', 'Válido 4 días'],
      color: 'from-blue-600 to-teal-600',
      icon: '⚡'
    },
    {
      id: 'student-pack',
      name: 'Student Experience Pack',
      price: '35€',
      originalPrice: '50€',
      description: 'Paquete especial diseñado para jóvenes',
      features: ['Descuento exclusivo', 'Kit de supervivencia', 'Mapa interactivo digital', 'Merchandise estudiantil'],
      color: 'from-purple-600 to-violet-600',
      icon: '🎓'
    },
    {
      id: 'young-food',
      name: 'Young Food Deal',
      price: '40€',
      originalPrice: '60€',
      description: 'Paquete gastronómico con descuento joven',
      features: ['33% de descuento aplicado', 'Comidas para 4 días', 'Bebidas incluidas', 'Food trucks premium'],
      color: 'from-orange-600 to-red-600',
      icon: '🍟'
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
          <div className="text-6xl mb-6">🎖️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Upgrades Bono Cultural
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upgrades especiales con descuentos exclusivos para portadores del Bono Cultural Joven. ¡Mejora tu experiencia por menos!
          </p>
        </div>

        {/* Información especial Bono Cultural */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase mb-4">Ventajas Exclusivas</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Al tener el Bono Cultural Joven, accedes a descuentos especiales en todos nuestros upgrades. 
              ¡Aprovecha estos precios únicos!
            </p>
          </div>
        </div>

        {/* Grid de upgrades */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {upgrades.map((upgrade) => (
            <div
              key={upgrade.id}
              className={`bg-gradient-to-br ${upgrade.color} rounded-2xl p-8 text-center relative`}
            >
              {/* Badge de descuento */}
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ¡Descuento!
              </div>
              
              <div className="text-5xl mb-4">{upgrade.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
                {upgrade.name}
              </h3>
              
              <div className="mb-4">
                <div className="text-4xl font-black">{upgrade.price}</div>
                <div className="text-lg opacity-70 line-through">{upgrade.originalPrice}</div>
              </div>
              
              <p className="text-lg opacity-90 mb-6">{upgrade.description}</p>
              
              <div className="space-y-3 mb-8">
                {upgrade.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Añadir con Bono Cultural
              </button>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">✅ Requisitos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Bono Cultural Joven activo</li>
              <li>• Entrada base con Bono Cultural</li>
              <li>• DNI que acredite la edad</li>
              <li>• Saldo suficiente en el bono</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💰 Ahorro Total</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Hasta 20€ en zona VIP</li>
              <li>• 5€ en acceso rápido</li>
              <li>• 15€ en paquete estudiante</li>
              <li>• 20€ en paquete gastronómico</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎓 Cultura Joven</h3>
          <p className="text-gray-300">
            El gobierno apoya tu acceso a la cultura. ¡Nosotros ampliamos esa ayuda con descuentos exclusivos en upgrades!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradesBonoPage;