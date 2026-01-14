import React from 'react';
import { Link } from 'react-router-dom';

const TourOnTheRoadPage: React.FC = () => {
  const tourStops = [
    {
      id: 'madrid',
      city: 'Madrid',
      date: '2 de Agosto',
      venue: 'Plaza Mayor',
      time: '18:00 - 22:00h',
      activities: ['DJ Set en vivo', 'Venta de entradas', 'Merchandise oficial', 'Actividades interactivas'],
      color: 'from-red-600 to-red-800',
      icon: '🏛️'
    },
    {
      id: 'barcelona',
      city: 'Barcelona',
      date: '4 de Agosto',
      venue: 'Playa de la Barceloneta',
      time: '17:00 - 21:00h',
      activities: ['Beach Party', 'Showcooking', 'Photocall oficial', 'Concursos y premios'],
      color: 'from-blue-600 to-indigo-800',
      icon: '🏖️'
    },
    {
      id: 'valencia',
      city: 'Valencia',
      date: '6 de Agosto',
      venue: 'Ciudad de las Artes',
      time: '19:00 - 23:00h',
      activities: ['Mapping audiovisual', 'Food trucks', 'Zona gaming', 'Meet & Greet artistas'],
      color: 'from-orange-600 to-yellow-700',
      icon: '🎨'
    },
    {
      id: 'sevilla',
      city: 'Sevilla',
      date: '8 de Agosto',
      venue: 'Plaza de España',
      time: '18:30 - 22:30h',
      activities: ['Flamenco electrónico', 'Degustación tapas', 'Mercadillo vintage', 'Talleres de DJ'],
      color: 'from-yellow-600 to-orange-700',
      icon: '💃'
    },
    {
      id: 'bilbao',
      city: 'Bilbao',
      date: '10 de Agosto',
      venue: 'Guggenheim Museum',
      time: '17:30 - 21:30h',
      activities: ['Arte y música', 'Exposición interactiva', 'Zona relax', 'Presentación cartel'],
      color: 'from-purple-600 to-violet-800',
      icon: '🎭'
    },
    {
      id: 'oviedo',
      city: 'Oviedo',
      date: '12 de Agosto',
      venue: 'Plaza de la Catedral',
      time: '16:00 - 20:00h',
      activities: ['Pre-festival party', 'Última oportunidad entradas', 'Bus hacia Aquasella', 'Warm-up oficial'],
      color: 'from-green-600 to-emerald-800',
      icon: '🏔️'
    }
  ];

  const tourFeatures = [
    'Entrada gratuita a todos los eventos',
    'Oportunidad de conocer otros festivaleros',
    'Descuentos exclusivos en entradas',
    'Merchandise limitado del tour',
    'Actividades únicas en cada ciudad',
    'Showcases de artistas confirmados'
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">PROXIMAMENTE MÁS INFORMACIÓN SOBRE TOUR ON THE ROAD</h1>
          <p className="text-xl md:text-2xl text-gray-300">Estamos trabajando en los detalles del tour por España. ¡Mantente atento!</p>
        </div>

      </div>
    </div>
  );
};

export default TourOnTheRoadPage;