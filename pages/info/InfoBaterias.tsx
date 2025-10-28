import React from 'react';
import { Link } from 'react-router-dom';

const InfoBateriasPage: React.FC = () => {
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
          <div className="text-6xl mb-6">🔋</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Baterías Móvil - Información
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantén tu móvil cargado durante todo el festival. Powerbanks de alquiler y estaciones de carga en múltiples ubicaciones.
          </p>
        </div>

        {/* Información general */}
        <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Nunca Te Quedes Sin Batería</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Con nuestro servicio de baterías móvil, tu teléfono estará siempre listo para capturar los mejores momentos, 
            mantenerte conectado con tus amigos y acceder a la app del festival.
          </p>
        </div>

        {/* Características destacadas */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Carga Rápida</h3>
            <p className="text-gray-300">Powerbanks de alta capacidad con tecnología de carga rápida</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Estaciones Estratégicas</h3>
            <p className="text-gray-300">6 estaciones de carga distribuidas por todo el festival</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔌</div>
            <h3 className="text-xl font-bold mb-3">Compatible con Todo</h3>
            <p className="text-gray-300">Lightning, USB-C, Micro USB - Cables incluidos</p>
          </div>
        </div>

        {/* Estaciones de carga */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🔌 Estaciones de Carga</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🎤</div>
              <div>
                <div className="font-bold">Escenario Principal</div>
                <div className="text-sm text-gray-400">Zona VIP lateral</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🍔</div>
              <div>
                <div className="font-bold">Área Food Trucks</div>
                <div className="text-sm text-gray-400">Zona central</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🛋️</div>
              <div>
                <div className="font-bold">Zona Descanso</div>
                <div className="text-sm text-gray-400">Área chill out</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🚪</div>
              <div>
                <div className="font-bold">Entrada Principal</div>
                <div className="text-sm text-gray-400">Centro de información</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🏕️</div>
              <div>
                <div className="font-bold">Camping</div>
                <div className="text-sm text-gray-400">Área de servicios</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-4">
              <div className="text-2xl mr-3">🎭</div>
              <div>
                <div className="font-bold">Backstage</div>
                <div className="text-sm text-gray-400">Solo acceso VIP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Opciones disponibles */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 Powerbanks Portátiles</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Básico:</strong> 10.000mAh - 12€</li>
              <li>• <strong>Premium:</strong> 20.000mAh - 20€</li>
              <li>• Cables incluidos para todos los dispositivos</li>
              <li>• Válido durante los 4 días del festival</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🔌 Estaciones de Carga</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Acceso:</strong> 8€ para 4 días</li>
              <li>• Carga supervisada y segura</li>
              <li>• Múltiples tipos de cable</li>
              <li>• Acceso prioritario</li>
            </ul>
          </div>
        </div>

        {/* Información práctica */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🕐 Horarios de Servicio</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Estaciones:</strong> 24h durante el festival</li>
              <li>• <strong>Powerbanks:</strong> Recogida 10:00-02:00h</li>
              <li>• <strong>Devolución:</strong> Hasta 17 Agosto 12:00h</li>
              <li>• <strong>Soporte técnico:</strong> 12:00-24:00h</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">⚡ Especificaciones</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Carga rápida hasta 18W</li>
              <li>• Protección contra sobrecarga</li>
              <li>• Indicador LED de batería</li>
              <li>• Resistentes al agua IP54</li>
            </ul>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📸 Mantente Siempre Conectado</h3>
          <p className="text-gray-300 mb-6">
            No te pierdas ni un momento. Consulta todas las opciones de carga y reserva tu powerbank.
          </p>
          <Link 
            to="/tickets/baterias"
            className="inline-flex items-center bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-700 transition-colors"
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

export default InfoBateriasPage;