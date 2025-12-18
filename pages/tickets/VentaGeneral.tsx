import React from 'react';
import EvezingStore from '../../components/EvezingStore';
import { Link } from 'react-router-dom';

const VentaGeneralPage: React.FC = () => {
  const ticketTypes = [
    {
      id: 'general-4-dias',
      name: 'Entrada General 4 Días',
      price: '120€',
      description: 'Acceso completo a los 4 días del festival',
      features: ['Acceso a todos los escenarios', 'Horario: 13/08 - 16/08', 'Sin camping incluido'],
      color: 'from-rose-600 to-red-800'
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
    <div className="min-h-screen bg-black text-white py-20">
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

        {/* Tienda Evezing con diseño avanzado */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          {/* TITULO SECCION */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              🎫 Entradas Oficiales AQUASELLA 2026
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Elige tu entrada y completa tu compra segura
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* CONTENEDOR DEL IFRAME WIDGET */}
            <div
              className="
                relative
                bg-black bg-opacity-90 backdrop-blur-md
                border-4 border-red-600
                shadow-[0_0_30px_rgba(255,0,60,0.9),0_0_60px_rgba(255,0,60,0.7)]
                rounded-3xl
                p-6 sm:p-8 lg:p-10
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_50px_10px_rgba(255,0,60,0.95),0_0_80px_20px_rgba(255,0,60,0.7)]
                hover:z-10
              "
            >
              <EvezingStore />
            </div>

          {/* Texto de seguridad eliminado por solicitud */}
        </div>

        {/* Tipos de entradas eliminados por solicitud */}

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-red-600 rounded-xl p-6 shadow-2xl border-2 border-red-300 transform hover:-rotate-2 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">📋 Información Importante</h3>
            <ul className="space-y-2 text-white">
              <li>• Las entradas son nominativas e intransferibles</li>
              <li>• Se requiere DNI/Pasaporte para el acceso</li>
              <li>• Menores de 16 años acompañados por adultos</li>
              <li>• Política de cambios y devoluciones disponible</li>
            </ul>
          </div>
          <div className="bg-red-600 rounded-xl p-6 shadow-2xl border-2 border-red-300 transform hover:rotate-2 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">🎵 ¿Qué incluye?</h3>
            <ul className="space-y-2 text-white">
              <li>• Acceso a todos los escenarios</li>
              <li>• Pulsera oficial del festival</li>
              <li>• Mapa y programa de artistas</li>
              <li>• Acceso a zonas de descanso</li>
            </ul>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎟️ Compra Segura</h3>
          <p className="text-gray-300">
            Todas las compras están protegidas. Entradas oficiales únicamente a través de canales autorizados.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default VentaGeneralPage;