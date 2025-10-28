import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartelPorDiasPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('jueves');

  const dias = [
    { id: 'jueves', nombre: 'Jueves 13', fecha: '13 de Agosto', color: 'from-purple-600 to-purple-800' },
    { id: 'viernes', nombre: 'Viernes 14', fecha: '14 de Agosto', color: 'from-blue-600 to-blue-800' },
    { id: 'sabado', nombre: 'Sábado 15', fecha: '15 de Agosto', color: 'from-emerald-600 to-emerald-800' },
    { id: 'domingo', nombre: 'Domingo 16', fecha: '16 de Agosto', color: 'from-orange-600 to-orange-800' }
  ];

  const getDayContent = (dayId: string) => {
    const dayInfo = {
      jueves: {
        titulo: 'Día de Apertura',
        descripcion: 'El festival arranca con fuerza con los mejores artistas para dar inicio a 4 días inolvidables.',
        artistas: ['Próximamente...']
      },
      viernes: {
        titulo: 'Viernes Épico',
        descripcion: 'La primera gran noche del festival con headliners internacionales.',
        artistas: ['Próximamente...']
      },
      sabado: {
        titulo: 'Sábado Explosivo',
        descripcion: 'El día más intenso del festival con las actuaciones más esperadas.',
        artistas: ['Próximamente...']
      },
      domingo: {
        titulo: 'Gran Final',
        descripcion: 'El cierre perfecto para una experiencia única e irrepetible.',
        artistas: ['Próximamente...']
      }
    };
    return dayInfo[dayId as keyof typeof dayInfo];
  };

  const currentDay = getDayContent(selectedDay);
  const selectedDayInfo = dias.find(d => d.id === selectedDay);

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
            Cartel por Días
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre qué artistas actuarán cada día del festival
          </p>
        </div>

        {/* Selector de días */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dias.map((dia) => (
            <button
              key={dia.id}
              onClick={() => setSelectedDay(dia.id)}
              className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedDay === dia.id
                  ? `bg-gradient-to-r ${dia.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {dia.nombre}
            </button>
          ))}
        </div>

        {/* Contenido del día seleccionado */}
        <div className={`bg-gradient-to-br ${selectedDayInfo?.color} rounded-2xl p-8 mb-8`}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black uppercase mb-2">{selectedDayInfo?.nombre}</h2>
            <p className="text-xl opacity-90">{selectedDayInfo?.fecha}</p>
            <h3 className="text-2xl font-bold mt-4">{currentDay?.titulo}</h3>
            <p className="text-lg opacity-90 mt-2 max-w-2xl mx-auto">{currentDay?.descripcion}</p>
          </div>
        </div>

        {/* Lista de artistas */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Artistas Confirmados</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentDay?.artistas.map((artista, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-gray-300">{artista}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📅 Programación Completa</h3>
          <p className="text-gray-300">
            Los artistas para cada día se anunciarán próximamente. ¡Cada jornada será única!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartelPorDiasPage;