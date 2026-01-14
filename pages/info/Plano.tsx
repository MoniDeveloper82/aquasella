import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanoPage: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('general');

  const mapAreas = [
    { id: 'general', name: 'Plano General', icon: '🗺️' },
    { id: 'escenarios', name: 'Escenarios', icon: '🎤' },
    { id: 'servicios', name: 'Servicios', icon: '🏪' },
    { id: 'camping', name: 'Camping', icon: '🏕️' }
  ];

  const mapFeatures = {
    general: {
      title: 'Plano General del Festival',
      description: 'Vista completa del recinto con todas las áreas principales',
      elements: [
        'Escenario Principal - Centro',
        'Escenario Electrónico - Norte',
        'Escenario Urban - Sur',
        'Escenario Indie - Este',
        'Zona de Food Trucks - Oeste',
        'Área de Camping - Exterior',
        'Aparcamiento - Entrada principal',
        'Zona VIP - Frente escenario principal'
      ]
    },
    escenarios: {
      title: 'Ubicación de Escenarios',
      description: 'Distribución estratégica para evitar interferencias',
      elements: [
        'Main Stage - Capacidad 15,000 personas',
        'Electronic Stage - Capacidad 8,000 personas',
        'Urban Stage - Capacidad 5,000 personas',
        'Indie Stage - Capacidad 3,000 personas',
        'Silent Disco - Área cubierta',
        'Acoustic Corner - Zona íntima'
      ]
    },
    servicios: {
      title: 'Servicios y Comodidades',
      description: 'Todos los servicios distribuidos estratégicamente',
      elements: [
        'Puntos de información - 6 ubicaciones',
        'Primeros auxilios - 3 puestos médicos',
        'Baños - 12 bloques distribuidos',
        'Puntos de agua - 8 fuentes',
        'Cajeros automáticos - 4 ubicaciones',
        'Zona de descanso - 4 áreas',
        'Lost & Found - Entrada principal',
        'Recharge zones - 6 puntos'
      ]
    },
    camping: {
      title: 'Área de Camping',
      description: 'Zona de acampada organizada por sectores',
      elements: [
        'Camping General - Sectores A-F',
        'Camping Familiar - Sector G',
        'Camping Silencioso - Sector H',
        'Glamping - Área premium',
        'Duchas y baños - 4 bloques',
        'Tienda del camping - Sector central',
        'Zona de barbacoas - Área designada',
        'Punto de encuentro - Plaza central'
      ]
    }
  };

  const currentArea = mapFeatures[selectedArea as keyof typeof mapFeatures];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">PROXIMAMENTE MÁS INFORMACIÓN SOBRE EL PLANO</h1>
          <p className="text-xl md:text-2xl text-gray-300">Estamos trabajando en el mapa interactivo del festival. ¡Mantente atento!</p>
        </div>

      </div>
    </div>
  );
};

export default PlanoPage;