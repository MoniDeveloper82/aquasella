import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartelPorEscenariosYDiaPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('jueves');
  const [selectedStage, setSelectedStage] = useState<string>('main');

  const dias = [
    { id: 'jueves', nombre: 'Jueves', fecha: '13 Agosto' },
    { id: 'viernes', nombre: 'Viernes', fecha: '14 Agosto' },
    { id: 'sabado', nombre: 'Sábado', fecha: '15 Agosto' },
    { id: 'domingo', nombre: 'Domingo', fecha: '16 Agosto' }
  ];

  const escenarios = [
    { 
      id: 'main', 
      nombre: 'Escenario Principal', 
      color: 'from-red-600 to-red-800',
      icon: '🎤'
    },
    { 
      id: 'electronic', 
      nombre: 'Escenario Electrónico', 
      color: 'from-purple-600 to-purple-800',
      icon: '🔊'
    },
    { 
      id: 'urban', 
      nombre: 'Escenario Urban', 
      color: 'from-green-600 to-green-800',
      icon: '🎵'
    },
    { 
      id: 'indie', 
      nombre: 'Escenario Indie', 
      color: 'from-blue-600 to-blue-800',
      icon: '🎸'
    }
  ];

  const getStageContent = (dayId: string, stageId: string) => {
    // Datos de ejemplo - en producción vendría de una API o base de datos
    const programacion = {
      jueves: {
        main: [
          { hora: '22:00', artista: 'Próximamente...' },
          { hora: '00:30', artista: 'Próximamente...' }
        ],
        electronic: [
          { hora: '23:00', artista: 'Próximamente...' },
          { hora: '01:30', artista: 'Próximamente...' }
        ],
        urban: [
          { hora: '21:30', artista: 'Próximamente...' }
        ],
        indie: [
          { hora: '20:00', artista: 'Próximamente...' }
        ]
      },
      viernes: {
        main: [
          { hora: '21:00', artista: 'Próximamente...' },
          { hora: '23:30', artista: 'Próximamente...' },
          { hora: '02:00', artista: 'Próximamente...' }
        ],
        electronic: [
          { hora: '22:00', artista: 'Próximamente...' },
          { hora: '00:30', artista: 'Próximamente...' },
          { hora: '03:00', artista: 'Próximamente...' }
        ],
        urban: [
          { hora: '20:30', artista: 'Próximamente...' },
          { hora: '01:00', artista: 'Próximamente...' }
        ],
        indie: [
          { hora: '19:30', artista: 'Próximamente...' },
          { hora: '21:30', artista: 'Próximamente...' }
        ]
      },
      sabado: {
        main: [
          { hora: '20:30', artista: 'Próximamente...' },
          { hora: '23:00', artista: 'Próximamente...' },
          { hora: '01:30', artista: 'Próximamente...' }
        ],
        electronic: [
          { hora: '21:30', artista: 'Próximamente...' },
          { hora: '00:00', artista: 'Próximamente...' },
          { hora: '02:30', artista: 'Próximamente...' }
        ],
        urban: [
          { hora: '19:30', artista: 'Próximamente...' },
          { hora: '22:00', artista: 'Próximamente...' }
        ],
        indie: [
          { hora: '18:30', artista: 'Próximamente...' },
          { hora: '20:00', artista: 'Próximamente...' }
        ]
      },
      domingo: {
        main: [
          { hora: '19:00', artista: 'Próximamente...' },
          { hora: '21:30', artista: 'Próximamente...' }
        ],
        electronic: [
          { hora: '20:00', artista: 'Próximamente...' },
          { hora: '22:30', artista: 'Próximamente...' }
        ],
        urban: [
          { hora: '18:30', artista: 'Próximamente...' }
        ],
        indie: [
          { hora: '17:30', artista: 'Próximamente...' },
          { hora: '19:30', artista: 'Próximamente...' }
        ]
      }
    };

    return programacion[dayId as keyof typeof programacion]?.[stageId as keyof typeof programacion.jueves] || [];
  };

  const currentStage = escenarios.find(e => e.id === selectedStage);
  const currentDay = dias.find(d => d.id === selectedDay);
  const currentProgram = getStageContent(selectedDay, selectedStage);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/lineup/cartel" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Cartel
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Cartel por Escenarios y Día
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora la programación completa combinando día y escenario para planificar tu experiencia perfecta
          </p>
        </div>

        {/* Selector de días */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-center">Seleccionar Día:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {dias.map((dia) => (
              <button
                key={dia.id}
                onClick={() => setSelectedDay(dia.id)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedDay === dia.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm">{dia.nombre}</div>
                  <div className="text-xs opacity-80">{dia.fecha}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selector de escenarios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-center">Seleccionar Escenario:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {escenarios.map((escenario) => (
              <button
                key={escenario.id}
                onClick={() => setSelectedStage(escenario.id)}
                className={`p-4 rounded-xl font-bold transition-all duration-300 ${
                  selectedStage === escenario.id
                    ? `bg-gradient-to-br ${escenario.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{escenario.icon}</div>
                  <div className="text-sm uppercase tracking-wider">{escenario.nombre}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Información seleccionada */}
        <div className={`bg-gradient-to-br ${currentStage?.color} rounded-2xl p-8 mb-8`}>
          <div className="text-center">
            <div className="text-4xl mb-4">{currentStage?.icon}</div>
            <h2 className="text-3xl font-black uppercase mb-2">
              {currentStage?.nombre}
            </h2>
            <p className="text-xl opacity-90">
              {currentDay?.nombre} {currentDay?.fecha}
            </p>
          </div>
        </div>

        {/* Programación */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Programación del {currentDay?.nombre}
          </h3>
          
          {currentProgram.length > 0 ? (
            <div className="space-y-4">
              {currentProgram.map((show, index) => (
                <div 
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 flex items-center justify-between hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-2xl font-bold">{show.hora}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{show.artista}</h4>
                      <p className="text-gray-300">{currentStage?.nombre}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl">{currentStage?.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-lg">
                No hay programación disponible para esta combinación
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎯 Planifica tu Festival</h3>
          <p className="text-gray-300 mb-4">
            Combina día y escenario para crear tu experiencia personalizada en Aquasella
          </p>
          <p className="text-sm text-gray-400">
            La programación completa se anunciará próximamente
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartelPorEscenariosYDiaPage;