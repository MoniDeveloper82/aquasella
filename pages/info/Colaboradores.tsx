import React from 'react';
import { Link } from 'react-router-dom';

const ColaboradoresPage: React.FC = () => {
  const mainSponsors = [
    { name: 'Banco Santander', category: 'Patrocinador Principal', logo: '🏦', description: 'Entidad bancaria oficial' },
    { name: 'Coca-Cola', category: 'Bebida Oficial', logo: '🥤', description: 'Partner de bebidas refrescantes' },
    { name: 'Samsung', category: 'Tecnología Oficial', logo: '📱', description: 'Dispositivos y pantallas LED' },
    { name: 'Renault', category: 'Coche Oficial', logo: '🚗', description: 'Movilidad sostenible' }
  ];

  const mediaPartners = [
    { name: 'Los 40', category: 'Radio Oficial', logo: '📻' },
    { name: 'Spotify', category: 'Streaming Partner', logo: '🎵' },
    { name: 'MTV España', category: 'TV Partner', logo: '📺' },
    { name: 'ElectronicBeats', category: 'Media Digital', logo: '💻' }
  ];

  const localPartners = [
    { name: 'Gobierno de Asturias', category: 'Institucional', logo: '🏛️' },
    { name: 'Ayuntamiento Villablino', category: 'Local', logo: '🏢' },
    { name: 'Turismo León', category: 'Promoción', logo: '🗺️' },
    { name: 'DOP Sidra Asturias', category: 'Producto Local', logo: '🍺' }
  ];

  const servicePartners = [
    { name: 'ALSA', category: 'Transporte', logo: '🚌' },
    { name: 'Securitas', category: 'Seguridad', logo: '🛡️' },
    { name: 'Cruz Roja', category: 'Sanitario', logo: '🏥' },
    { name: 'Cleanmaster', category: 'Limpieza', logo: '♻️' },
    { name: 'SoundTech', category: 'Audio', logo: '🔊' },
    { name: 'LightShow Pro', category: 'Iluminación', logo: '💡' }
  ];

  const sustainabilityPartners = [
    { name: 'Ecoembes', category: 'Reciclaje', logo: '♻️' },
    { name: 'Iberdrola', category: 'Energía Verde', logo: '⚡' },
    { name: 'H2O Pure', category: 'Agua Sostenible', logo: '💧' },
    { name: 'BioWaste', category: 'Gestión Residuos', logo: '🌱' }
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
          <div className="text-6xl mb-6">🤝</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Colaboradores
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aquasella 2026 es posible gracias a nuestros increíbles partners, patrocinadores y colaboradores que comparten nuestra pasión por la música.
          </p>
        </div>

        {/* Patrocinadores principales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">👑 Patrocinadores Principales</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gradient-to-br from-gold-600 to-yellow-600 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{sponsor.logo}</div>
                <h3 className="text-lg font-black uppercase mb-2">{sponsor.name}</h3>
                <div className="text-sm opacity-80 mb-3">{sponsor.category}</div>
                <p className="text-xs opacity-70">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">📢 Media Partners</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{partner.logo}</div>
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <div className="text-sm opacity-80">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Locales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">🏔️ Partners Locales</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {localPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{partner.logo}</div>
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <div className="text-sm opacity-80">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Proveedores de Servicios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">⚙️ Proveedores de Servicios</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {servicePartners.map((partner, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{partner.logo}</div>
                <h3 className="text-sm font-bold mb-1">{partner.name}</h3>
                <div className="text-xs opacity-70">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners de Sostenibilidad */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">🌱 Sostenibilidad</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sustainabilityPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-600 to-green-700 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{partner.logo}</div>
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <div className="text-sm opacity-80">{partner.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Información de colaboración */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💼 ¿Quieres Colaborar?</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Patrocinio y naming rights</li>
              <li>• Activaciones de marca</li>
              <li>• Espacios comerciales</li>
              <li>• Partnerships estratégicos</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contactar
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 Beneficios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Exposición a 50,000+ asistentes</li>
              <li>• Cobertura mediática nacional</li>
              <li>• Activaciones experienciales</li>
              <li>• ROI medible y analytics</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Juntos Hacemos la Música</h3>
          <p className="text-gray-300">
            Gracias a todos nuestros colaboradores, Aquasella es mucho más que un festival. Es una experiencia única que marca la diferencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColaboradoresPage;