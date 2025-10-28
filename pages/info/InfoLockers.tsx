import React from 'react';
import { Link } from 'react-router-dom';

const InfoLockersPage: React.FC = () => {
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
          <div className="text-6xl mb-6">🔒</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Lockers - Información
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Guarda tus pertenencias de forma segura mientras disfrutas del festival. Máxima seguridad y comodidad en múltiples ubicaciones.
          </p>
        </div>

        {/* Información general */}
        <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Seguridad Garantizada</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Nuestros lockers están distribuidos estratégicamente por todo el festival para que siempre tengas uno cerca. 
            Baila sin preocupaciones sabiendo que tus cosas están seguras.
          </p>
        </div>

        {/* Características destacadas */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-3">Máxima Seguridad</h3>
            <p className="text-gray-300">Código PIN único, acero reforzado y vigilancia 24h en todas las zonas</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Múltiples Ubicaciones</h3>
            <p className="text-gray-300">6 puntos estratégicos cerca de escenarios, entrada y zonas de servicios</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📏</div>
            <h3 className="text-xl font-bold mb-3">Diferentes Tamaños</h3>
            <p className="text-gray-300">Pequeño, mediano y grande para adaptarse a todas tus necesidades</p>
          </div>
        </div>

        {/* Ubicaciones */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">📍 Ubicaciones de Lockers</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🎤</div>
              <div>
                <div className="font-bold">Escenario Principal</div>
                <div className="text-sm text-gray-400">Zona VIP y General</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🚪</div>
              <div>
                <div className="font-bold">Entrada Principal</div>
                <div className="text-sm text-gray-400">Al llegar al festival</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🍕</div>
              <div>
                <div className="font-bold">Zona Food Trucks</div>
                <div className="text-sm text-gray-400">Área gastronómica</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🏕️</div>
              <div>
                <div className="font-bold">Acceso Camping</div>
                <div className="text-sm text-gray-400">Entrada al camping</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🎵</div>
              <div>
                <div className="font-bold">Zona Escenarios</div>
                <div className="text-sm text-gray-400">Electrónico y Urban</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🛋️</div>
              <div>
                <div className="font-bold">Zona Descanso</div>
                <div className="text-sm text-gray-400">Área chill out</div>
              </div>
            </div>
          </div>
        </div>

        {/* Información práctica */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🕐 Horarios de Uso</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Apertura:</strong> 13 Agosto 8:00h</li>
              <li>• <strong>Acceso:</strong> 24h durante el festival</li>
              <li>• <strong>Último acceso:</strong> 17 Agosto 2:00h</li>
              <li>• <strong>Recogida final:</strong> 17 Agosto 12:00h</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💰 Qué Incluye</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Acceso ilimitado durante el festival</li>
              <li>• Código PIN personal único</li>
              <li>• Seguro contra robos incluido</li>
              <li>• Soporte técnico 24h</li>
            </ul>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🛡️ ¿Necesitas un Locker?</h3>
          <p className="text-gray-300 mb-6">
            Consulta precios, tamaños disponibles y reserva tu locker para tener la tranquilidad que necesitas.
          </p>
          <Link 
            to="/tickets/lockers"
            className="inline-flex items-center bg-gray-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Ver Precios y Reservar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoLockersPage;