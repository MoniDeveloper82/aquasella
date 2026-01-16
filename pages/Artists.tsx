import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Artist } from '../types';
import { artists } from '../data/artists';
import ArtistCard from '../components/ArtistCard';
import { XMarkIcon } from '../components/icons';

type DayFilter = 'Todos' | 'Jue' | 'Vie' | 'Sáb' | 'Dom';

const ArtistsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<DayFilter>('Todos');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filters: DayFilter[] = ['Todos', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const getFilterDisplay = (filter: DayFilter) => {
    switch (filter) {
      case 'Todos': return t('artists_filter_all');
      case 'Jue': return t('artists_filter_thu');
      case 'Vie': return t('artists_filter_fri');
      case 'Sáb': return t('artists_filter_sat');
      case 'Dom': return t('artists_filter_sun');
      default: return filter;
    }
  };

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
        <Link to="/lineup" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          {t('back_to_lineup')}
        </Link>

        <h2 className="text-4xl font-black text-center uppercase text-white mb-4 text-glow">{t('artists_title')}</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('artists_description')}
        </p>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              disabled={filter !== 'Todos'}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-bold uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 ${
                activeFilter === filter
                  ? 'bg-red-600 text-white focus:ring-red-600'
                  : filter === 'Todos'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              {getFilterDisplay(filter)}
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
               title={t('artists_close_modal')}
               aria-label={t('artists_close_modal')}
             >
                <XMarkIcon className="w-8 h-8" />
             </button>
             <div className="md:flex">
                <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full md:w-1/2 h-[30rem] md:h-auto object-cover" loading="eager" />
        <div className="p-8 bg-black">
          <h3 className="text-3xl font-black uppercase text-white">{selectedArtist.name}</h3>
          <div className="mt-4 space-y-2 text-white">
                        <p><span className="font-bold text-white">{t('artists_day')}</span> {t('artists_coming_soon')}</p>
                        <p><span className="font-bold text-white">{t('artists_stage')}</span> {t('artists_coming_soon')}</p>
                        <p><span className="font-bold text-white">{t('artists_time')}</span> {t('artists_coming_soon')}</p>
                    </div>
                    <p>{t('artists_coming_soon')}</p>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistsPage;