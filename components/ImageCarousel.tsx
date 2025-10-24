import React from 'react';

// Placeholder images that evoke a festival vibe
const imageUrls = [
  'https://picsum.photos/seed/carousel1/600/400',
  'https://picsum.photos/seed/carousel2/600/400',
  'https://picsum.photos/seed/carousel3/600/400',
  'https://picsum.photos/seed/carousel4/600/400',
  'https://picsum.photos/seed/carousel5/600/400',
  'https://picsum.photos/seed/carousel6/600/400',
  'https://picsum.photos/seed/carousel7/600/400',
  'https://picsum.photos/seed/carousel8/600/400',
];

const ImageCarousel: React.FC = () => {
  // Duplicate the images to create a seamless loop
  const images = [...imageUrls, ...imageUrls];

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black uppercase text-white mb-10 text-glow">
          Momentos Aquasella
        </h2>
      </div>
      <div className="w-full overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-4 w-[300px] md:w-[600px]">
              <img
                src={src}
                alt={`Festival moment ${index + 1}`}
                className="w-full h-56 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;