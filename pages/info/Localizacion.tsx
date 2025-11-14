import React from 'react';
import { Link } from 'react-router-dom';

const LocalizacionPage: React.FC = () => {
  const transportOptions = [
    {
      id: 'coche',
      name: 'En Coche',
      icon: '🚗',
      description: 'La opción más cómoda para grupos',
      details: [
        'Desde Madrid: 4h 30min por A-6',
        'Desde Barcelona: 6h 45min por A-2 y A-231',
        'Desde Valencia: 5h 30min por A-23 y A-231',
        'Parking gratuito en el recinto'
      ],
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'autobus',
      name: 'Autobús',
      icon: '🚌',
      description: 'Transporte oficial y económico',
      details: [
        'Líneas desde principales ciudades',
        'Llegada directa al festival',
        'Horarios coordinados',
        'Reserva con entrada'
      ],
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'avion-tren',
      name: 'Avión + Tren',
      icon: '✈️',
      description: 'Para visitantes de larga distancia',
      details: [
        'Aeropuerto más cercano: Oviedo (45min)',
        'Estación de tren: Mieres (20min)',
        'Conexiones con shuttle',
        'Ideal para extranjeros'
      ],
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const nearbyServices = [
    { name: 'Hospital más cercano', distance: '15 km', icon: '🏥' },
    { name: 'Gasolinera', distance: '8 km', icon: '⛽' },
    { name: 'Supermercado', distance: '12 km', icon: '🛒' },
    { name: 'Farmacia', distance: '10 km', icon: '💊' },
    { name: 'Cajero automático', distance: '5 km', icon: '🏧' },
    { name: 'Estación de servicio', distance: '8 km', icon: '🔧' }
  ];

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
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Localización
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aquasella 2026 se celebra en el Valle de Laciana, Asturias. Descubre cómo llegar y todo lo que necesitas saber sobre la ubicación.
          </p>
        </div>

        {/* Ubicación principal */}
        <div className="bg-gradient-to-br from-emerald-600 to-green-800 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-black uppercase mb-6">Valle de Laciana, Asturias</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div>
              <h3 className="text-xl font-bold mb-3">📍 Dirección Exacta</h3>
              <p className="text-sm opacity-90">
                Polígono Industrial de Villablino<br/>
                24100 Villablino, León<br/>
                Castilla y León, España
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">🌍 Coordenadas GPS</h3>
              <p className="text-sm opacity-90">
                Latitud: 42.9167° N<br/>
                Longitud: 6.3000° W<br/>
                <span className="text-xs opacity-80">42°55'0"N 6°18'0"W</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">🏔️ Entorno</h3>
              <p className="text-sm opacity-90">
                Valle montañoso<br/>
                Rodeado de naturaleza<br/>
                Aire puro y paisajes únicos
              </p>
            </div>
          </div>
        </div>

        {/* Cómo llegar */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🚗 Cómo Llegar</h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {transportOptions.map((option) => (
              <div
                key={option.id}
                className={`bg-gradient-to-br ${option.color} rounded-2xl p-6`}
              >
                <div className="text-5xl text-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-black uppercase text-center mb-4">
                  {option.name}
                </h3>
                <p className="text-sm opacity-90 text-center mb-6">{option.description}</p>
                
                <div className="space-y-3">
                  {option.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-4 h-4 mr-2 mt-0.5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa interactivo */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">🗺️ Mapa Interactivo</h3>
          <div className="mt-6 rounded-lg overflow-hidden shadow-2xl shadow-sky-900/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11598.78923363351!2d-5.194511630132837!3d43.28801991414439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4a159954f85e49%3A0x33351336e2056981!2sArriondas%2C%20Asturias%2C%20Spain!5e0!3m2!1sen!2sus!4v1620000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localización de Aquasella"
            />
          </div>
        </div>

        {/* Servicios cercanos */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">🏪 Servicios Cercanos</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nearbyServices.map((service, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-4">
                <div className="text-2xl mr-3">{service.icon}</div>
                <div>
                  <div className="text-sm font-medium">{service.name}</div>
                  <div className="text-xs text-gray-400">{service.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🌦️ Clima Esperado</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Agosto en Asturias:</strong> 18-25°C</li>
              <li>• <strong>Noches:</strong> Frescas (12-16°C)</li>
              <li>• <strong>Probabilidad lluvia:</strong> Baja</li>
              <li>• <strong>Recomendación:</strong> Ropa de abrigo para la noche</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 Apps Recomendadas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Google Maps:</strong> Navegación</li>
              <li>• <strong>What3Words:</strong> Ubicación exacta</li>
              <li>• <strong>Waze:</strong> Tráfico en tiempo real</li>
              <li>• <strong>Aquasella App:</strong> Info del festival</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🏔️ Un Entorno Único</h3>
          <p className="text-gray-300">
            El Valle de Laciana ofrece un marco incomparable para Aquasella. Naturaleza, montañas y música se unen para crear una experiencia única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalizacionPage;