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
          <div className="text-6xl mb-6">🗺️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Plano del Festival
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora el mapa interactivo de Aquasella 2026. Encuentra escenarios, servicios, camping y todo lo que necesitas para orientarte.
          </p>
        </div>

        {/* Selector de áreas */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mapAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedArea(area.id)}
              className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 flex items-center ${
                selectedArea === area.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mr-2">{area.icon}</span>
              {area.name}
            </button>
          ))}
        </div>

        {/* Mapa principal */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">{currentArea.title}</h2>
            <p className="text-gray-300 mt-2">{currentArea.description}</p>
          </div>
          
          {/* Aquí iría el mapa interactivo real */}
          <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-400 text-lg">Mapa Interactivo</p>
              <p className="text-gray-500 text-sm mt-2">Vista de: {currentArea.title}</p>
            </div>
          </div>

          {/* Elementos del área seleccionada */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {currentArea.elements.map((element, index) => (
              <div key={index} className="flex items-center bg-gray-700 rounded-lg p-3">
                <svg className="w-4 h-4 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{element}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📱 App Oficial</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Mapa interactivo offline</li>
              <li>• Navegación GPS</li>
              <li>• Puntos de interés</li>
              <li>• Actualizaciones en tiempo real</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 Puntos Clave</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Info Point - Entrada principal</li>
              <li>• Emergencias - Sector central</li>
              <li>• Lost & Found - Info Point</li>
              <li>• Punto de encuentro - Main Stage</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📏 Distancias</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Entrada a Main Stage: 200m</li>
              <li>• Entre escenarios: 150-300m</li>
              <li>• Camping a festivales: 400m</li>
              <li>• Parking a entrada: 100m</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🧭 Orientación Perfecta</h3>
          <p className="text-gray-300">
            Con el plano interactivo nunca te perderás. Descarga la app oficial para tener el mapa siempre contigo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanoPage;