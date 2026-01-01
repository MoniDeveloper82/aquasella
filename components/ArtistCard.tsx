

import React from 'react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  onClick: (artist: Artist) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-red-600/60"
      onClick={() => onClick(artist)}
    >
      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wide">{artist.name}</h3>
        {![
          'Techno',
          'Hard Techno',
          'Electrónica',
          'Electronica',
          'Deep House',
          'Electro',
          'Electro/Techno',
          'Electro/Thecno',
          'Electro / Techno'
        ].includes(artist.style) && (
          <p className="text-sm text-rose-400 font-semibold">{artist.style}</p>
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
