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
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">PROXIMAMENTE MÁS INFORMACIÓN SOBRE COLABORADORES</h1>
          <p className="text-xl md:text-2xl text-gray-300">Estamos trabajando en la lista completa de partners y patrocinadores. ¡Mantente atento!</p>
        </div>

      </div>
    </div>
  );
};

export default ColaboradoresPage;