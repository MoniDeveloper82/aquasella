import React from 'react';
import { Link } from 'react-router-dom';

const InfoGlampingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/info" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Información
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🏕️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Glamping - Información
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre todo sobre nuestro alojamiento premium. El glamping de Aquasella combina comodidad y naturaleza para una experiencia única.
          </p>
        </div>

        {/* Información general */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Alojamiento Premium</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            El glamping de Aquasella ofrece la experiencia perfecta entre el camping tradicional y el hotel de lujo. 
            Despierta en el corazón del festival con todas las comodidades.
          </p>
        </div>

        {/* Características destacadas */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🛏️</div>
            <h3 className="text-xl font-bold mb-3">Comodidad Total</h3>
            <p className="text-gray-300">Camas cómodas, ropa de cama premium y todas las comodidades de casa</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Ubicación Perfecta</h3>
            <p className="text-gray-300">A solo 2 minutos del escenario principal, en zona exclusiva y vallada</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-3">Servicios VIP</h3>
            <p className="text-gray-300">Duchas privadas, conserjería, desayuno incluido y acceso prioritario</p>
          </div>
        </div>

        {/* Información práctica */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📅 Fechas y Horarios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Check-in:</strong> 13 Agosto desde 10:00h</li>
              <li>• <strong>Check-out:</strong> 17 Agosto hasta 14:00h</li>
              <li>• <strong>Acceso:</strong> 24h durante el festival</li>
              <li>• <strong>Conserjería:</strong> Disponible 24h</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 ¿Qué Incluye?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Entrada al festival incluida</li>
              <li>• Tienda premium totalmente equipada</li>
              <li>• Desayuno buffet todos los días</li>
              <li>• Acceso a duchas VIP</li>
            </ul>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">💫 ¿Listo para la Experiencia Premium?</h3>
          <p className="text-gray-300 mb-6">
            Descubre todas las opciones de glamping disponibles, precios y cómo reservar tu alojamiento.
          </p>
          <Link 
            to="/tickets/glamping"
            className="inline-flex items-center bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Ver Opciones y Reservar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoGlampingPage;