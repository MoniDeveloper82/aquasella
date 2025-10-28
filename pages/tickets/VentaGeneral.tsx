import React from 'react';
import { Link } from 'react-router-dom';

const VentaGeneralPage: React.FC = () => {
  const ticketTypes = [
    {
      id: 'general-4-dias',
      name: 'Entrada General 4 Días',
      price: '120€',
      description: 'Acceso completo a los 4 días del festival',
      features: ['Acceso a todos los escenarios', 'Horario: 13/08 - 16/08', 'Sin camping incluido'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'general-1-dia',
      name: 'Entrada 1 Día',
      price: 'Desde 35€',
      description: 'Entrada para un día específico del festival',
      features: ['Acceso día completo', 'Elige tu día favorito', 'Jueves, Viernes, Sábado o Domingo'],
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'general-camping',
      name: 'Entrada + Camping 4 Días',
      price: '150€',
      description: 'Entrada completa con acceso al camping',
      features: ['Entrada 4 días incluida', 'Camping del 13-17/08', 'Zona de acampada oficial'],
      color: 'from-purple-600 to-purple-800'
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Venta General
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entradas estándar para vivir la experiencia completa de Aquasella 2026
          </p>
        </div>

        {/* Tipos de entradas */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.id}
              className={`bg-gradient-to-br ${ticket.color} rounded-2xl p-8 text-center`}
            >
              <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
                {ticket.name}
              </h3>
              <div className="text-4xl font-black mb-4">{ticket.price}</div>
              <p className="text-lg opacity-90 mb-6">{ticket.description}</p>
              
              <div className="space-y-3 mb-8">
                {ticket.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Comprar Ahora
              </button>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Información Important</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Las entradas son nominativas e intransferibles</li>
              <li>• Se requiere DNI/Pasaporte para el acceso</li>
              <li>• Menores de 16 años acompañados por adultos</li>
              <li>• Política de cambios y devoluciones disponible</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎵 ¿Qué incluye?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Acceso a todos los escenarios</li>
              <li>• Pulsera oficial del festival</li>
              <li>• Mapa y programa de artistas</li>
              <li>• Acceso a zonas de descanso</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎟️ Compra Segura</h3>
          <p className="text-gray-300">
            Todas las compras están protegidas. Entradas oficiales únicamente a través de canales autorizados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VentaGeneralPage;