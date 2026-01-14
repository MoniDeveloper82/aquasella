import React from 'react';
import { Link } from 'react-router-dom';

const ZonaDescansoPage: React.FC = () => {
  const restAreas = [
    {
      id: 'chill-out-principal',
      name: 'Chill Out Principal',
      location: 'Centro del festival',
      description: 'Zona principal de descanso con sombra y asientos cómodos',
      features: ['Asientos acolchados', 'Sombra natural', 'Música ambiente', 'Zona sin alcohol'],
      capacity: '200 personas',
      color: 'from-green-600 to-emerald-700',
      icon: '🌳'
    },
    {
      id: 'zen-garden',
      name: 'Zen Garden',
      location: 'Zona norte',
      description: 'Espacio de relajación y meditación',
      features: ['Jardín temático', 'Música relajante', 'Zona de yoga', 'Silencio garantizado'],
      capacity: '50 personas',
      color: 'from-purple-600 to-violet-700',
      icon: '🧘'
    },
    {
      id: 'family-area',
      name: 'Área Familiar',
      location: 'Zona este',
      description: 'Espacio pensado para familias con niños',
      features: ['Juegos infantiles', 'Cambiadores', 'Zona de lactancia', 'Actividades para niños'],
      capacity: '100 personas',
      color: 'from-pink-600 to-rose-700',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'recharge-zone',
      name: 'Recharge Zone',
      location: 'Cerca del escenario principal',
      description: 'Zona de recarga de energía con servicios',
      features: ['Puntos de carga móvil', 'Sillas reclinables', 'Brumizadores', 'Distribuidores de agua'],
      capacity: '80 personas',
      color: 'from-blue-600 to-cyan-700',
      icon: '⚡'
    }
  ];

  const services = [
    { name: 'WiFi gratuito', icon: '📶' },
    { name: 'Puntos de agua', icon: '💧' },
    { name: 'Primeros auxilios', icon: '🏥' },
    { name: 'Información', icon: 'ℹ️' },
    { name: 'Baños cercanos', icon: '🚻' },
    { name: 'Seguridad 24h', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">PROXIMAMENTE MÁS INFORMACIÓN SOBRE LA ZONA DE DESCANSO</h1>
          <p className="text-xl md:text-2xl text-gray-300">Estamos trabajando en los detalles de las zonas de descanso. ¡Mantente atento!</p>
        </div>
      </div>
    </div>
  );
};

export default ZonaDescansoPage;