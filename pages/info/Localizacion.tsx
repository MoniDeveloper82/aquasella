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
        'Desde Madrid: 4h 30min por A-6 y N-601',
        'Desde Barcelona: 7h 15min por A-2, A-23 y N-260',
        'Desde Bilbao: 2h 30min por A-8 y N-601',
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
        'Líneas ALSA desde Madrid, Barcelona y Bilbao',
        'Parada directa en Arriondas',
        'Horarios coordinados con el festival',
        'Reserva con entrada disponible'
      ],
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'avion-tren',
      name: 'Avión + Tren',
      icon: '✈️',
      description: 'Para visitantes de larga distancia',
      details: [
        'Aeropuerto Avilés: 1h por A-8',
        'Aeropuerto Santander: 1h por A-8',
        'Aeropuerto Bilbao: 1h 30min por A-8',
        'Tren Santander-Madrid: conexiones directas'
      ],
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const nearbyServices = [
    { name: 'Hospital más cercano', distance: '25 km (Potes)', icon: '🏥' },
    { name: 'Gasolinera', distance: '3 km', icon: '⛽' },
    { name: 'Supermercado', distance: '2 km', icon: '🛒' },
    { name: 'Farmacia', distance: '1 km', icon: '💊' },
    { name: 'Cajero automático', distance: '500 m', icon: '🏧' },
    { name: 'Estación de servicio', distance: '5 km', icon: '🔧' }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-x-hidden" style={{
      backgroundImage: "url('/img/vertical3.png')",
      backgroundSize: '100% auto',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'repeat'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Localización
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Aquasella 2026 se celebra en el Valle de la musica, Asturias. Descubre cómo llegar y todo lo que necesitas saber sobre la ubicación.
          </p>
        </div>

        {/* Ubicación principal */}
        <div className="rounded-2xl p-2 md:p-8 mb-12 text-center border-2 border-white md:max-w-none mx-auto" style={{ backgroundColor: 'rgb(0, 177, 0)' }}>
          <h2 className="text-3xl font-black uppercase mb-6">Valle de la musica, Asturias</h2>
          <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">📍 Dirección Exacta</h3>
              <p className="text-sm opacity-90">
                Praú El Merediz<br/>
                33540 Arriondas, Asturias<br/>
                España
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">🌍 Coordenadas GPS</h3>
              <p className="text-sm opacity-90">
                Latitud: 43.288° N<br/>
                Longitud: 5.195° W<br/>
                <span className="text-xs opacity-80">43°17'17"N 5°11'42"W</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">🏔️ Entorno</h3>
              <p className="text-sm opacity-90">
                Valle montañoso<br/>
                Rodeado de naturaleza<br/>
                Aire puro y paisajes únicos
              </p>
            </div>
          </div>
        </div>

        {/* Cómo llegar - Colapsable */}
        <div className="mb-12">
          <div className="rounded-xl p-6 border-2 border-green-500">
            <h2 className="text-3xl font-bold mb-6">Cómo Llegar</h2>
            
            <div className="mt-6">
                <div className="
  grid grid-cols-1 gap-6 mb-12
  place-items-center
  md:grid-cols-2 md:place-items-stretch
  lg:grid-cols-3
">
                  {transportOptions.map((option) => (
                    <div
                      key={option.id}
                      className="bg-cover bg-center rounded-2xl overflow-hidden h-[400px] md:h-[500px] w-[320px] md:w-[340px] relative transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(0,255,0,0.6),0_0_60px_8px_rgba(0,255,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] card-glow"
                      style={{
                        backgroundImage: `url('/img/verde.png')`,
                        backgroundPosition: 'center 20%',
                        backgroundSize: '100% auto',
                        backgroundRepeat: 'no-repeat',
                        borderColor: '#90EE90'
                      }}
                    >
                      {/* Overlay para mejor legibilidad del texto */}
                      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl"></div>
                      <div className="relative z-10 pt-20 pb-6 px-6">
                        <h3 className="text-xl font-black uppercase text-center mb-12">
                          {option.name}
                        </h3>
                        <p className="text-sm opacity-90 text-center mb-10">{option.description}</p>
                        
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
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>

        {/* Mapa interactivo - Colapsable */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-[0_0_35px_rgba(0,177,0,0.6),0_0_60px_rgba(0,177,0,0.3)] border-4" style={{ borderColor: 'rgb(0, 177, 0)' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(0, 177, 0)' }}>🗺️ Mapa Interactivo</h3>
            
            <div className="mt-6">
              {/* Versión desktop */}
              <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl shadow-sky-900/20 border-4" style={{ borderColor: 'rgb(0, 177, 0)', boxShadow: '0 0 20px rgba(0, 177, 0, 0.5), 0 0 40px rgba(0, 177, 0, 0.3)' }}>
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
              
              {/* Versión móvil - Bottom Sheet */}
              <div className="md:hidden">
                <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl border-t-4" style={{ borderColor: 'rgb(0, 177, 0)', maxHeight: '70vh' }}>
                  <div className="p-4 border-b border-gray-200">
                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <h4 className="text-lg font-bold text-center" style={{ color: 'rgb(0, 177, 0)' }}>📍 Ubicación en Mapa</h4>
                  </div>
                  <div className="p-4">
                    <div className="rounded-lg overflow-hidden shadow-lg border-2" style={{ borderColor: 'rgb(0, 177, 0)' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11598.78923363351!2d-5.194511630132837!3d43.28801991414439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4a159954f85e49%3A0x33351336e2056981!2sArriondas%2C%20Asturias%2C%20Spain!5e0!3m2!1sen!2sus!4v1620000000000"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de localización de Aquasella"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Servicios cercanos - Colapsable */}
        <div className="rounded-xl p-8 mb-12 border-2 border-white" style={{ backgroundColor: 'rgb(0, 177, 0)' }}>
            <h3 className="text-2xl font-bold text-white mb-6">🏪 Servicios Cercanos</h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {nearbyServices.map((service, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-4">
                  <div className="text-2xl mr-3">{service.icon}</div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: 'rgb(0, 177, 0)' }}>{service.name}</div>
                    <div className="text-xs text-gray-600">{service.distance}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white rounded-xl p-6 border-4" style={{ borderColor: 'rgb(0, 177, 0)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(0, 177, 0)' }}>🌦️ Clima Esperado</h3>
            <ul className="space-y-2" style={{ color: 'rgb(0, 177, 0)' }}>
              <li>• <strong>Agosto en Asturias:</strong> 18-25°C</li>
              <li>• <strong>Noches:</strong> Frescas (12-16°C)</li>
              <li>• <strong>Probabilidad lluvia:</strong> Baja</li>
              <li>• <strong>Recomendación:</strong> Ropa de abrigo para la noche</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-4" style={{ borderColor: 'rgb(0, 177, 0)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(0, 177, 0)' }}>📱 Apps Recomendadas</h3>
            <ul className="space-y-2" style={{ color: 'rgb(0, 177, 0)' }}>
              <li>• <strong>Google Maps:</strong> Navegación</li>
              <li>• <strong>What3Words:</strong> Ubicación exacta</li>
              <li>• <strong>Waze:</strong> Tráfico en tiempo real</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl p-8 text-center border-2 border-white" style={{ backgroundColor: 'rgb(0, 177, 0)' }}>
          <h3 className="text-2xl font-bold mb-4 text-white">🏔️ Un Entorno Único</h3>
          <p className="text-white">
            El Valle de la Música ofrece un marco incomparable para Aquasella. Naturaleza, montañas y música se unen para crear una experiencia única.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalizacionPage;
