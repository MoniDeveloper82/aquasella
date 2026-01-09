import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../types';
import { artists } from '../data/artists';
import ArtistCard from '../components/ArtistCard';
import { XMarkIcon } from '../components/icons';

type DayFilter = 'Todos' | 'Jue' | 'Vie' | 'Sáb' | 'Dom';

const ArtistsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DayFilter>('Todos');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filters: DayFilter[] = ['Todos', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const filteredArtists = useMemo(() => {
    if (activeFilter === 'Todos') {
      return artists;
    }
    return artists.filter(artist => artist.day === activeFilter);
  }, [activeFilter]);

  const handleCardClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const closeModal = () => {
    setSelectedArtist(null);
  };
  
  // Close modal on escape key press
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="artistas" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/lineup" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Line Up
          </Link>
        </div>

        <h2 className="text-4xl font-black text-center uppercase text-white mb-4 text-glow">Artistas</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Descubre el pulso electrónico que hará vibrar Aquasella. Desde leyendas del techno hasta las nuevas promesas del house, aquí tienes a los artífices de tu experiencia.
        </p>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 ${
                activeFilter === filter
                  ? 'bg-red-600 text-white focus:ring-red-600'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter === 'Todos' ? '|A-Z|' : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-black rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full relative transform transition-all duration-300 scale-95 animate-fade-in"
            style={{ boxShadow: '0 0 40px rgba(255, 0, 0, 0.8)' }}
            onClick={(e) => e.stopPropagation()}
          >
             <button 
               onClick={closeModal} 
               className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
               title="Cerrar modal"
               aria-label="Cerrar modal"
             >
                <XMarkIcon className="w-8 h-8" />
             </button>
             <div className="md:flex">
                <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full md:w-1/2 h-[30rem] md:h-auto object-cover" loading="eager" />
        <div className="p-8 bg-black">
          <h3 className="text-3xl font-black uppercase text-white">{selectedArtist.name}</h3>
          <div className="mt-4 space-y-2 text-white">
                        <p><span className="font-bold text-white">Día:</span> Próximamente</p>
                        <p><span className="font-bold text-white">Escenario:</span> Próximamente</p>
                        <p><span className="font-bold text-white">Horario:</span> Próximamente</p>
                    </div>
                    <p>Próximamente</p>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistsPage;