import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const carouselImages = [
  'img/POSTINFOFINAL_AQS.jpg',
  'https://picsum.photos/seed/slide2/1920/1080',
  'https://picsum.photos/seed/slide3/1920/1080',
  'https://picsum.photos/seed/slide4/1920/1080',
];

const HomeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section 
      className="py-20"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), 
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)
        `,
        backgroundSize: '15px 15px',
        backgroundPosition: '0 0, 0 7.5px, 7.5px -7.5px, -7.5px 0px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase text-white mb-4 text-glow">Road to the Aquasella 2026</h2>
            {/* <p className="text-lg text-gray-400">Revive la magia de las ediciones pasadas.</p> */}
        </div>
        <div className="relative w-full h-[75vh]">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg shadow-black/30">
            {carouselImages.map((url, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={url} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" loading="lazy" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 md:-left-8 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 md:-right-8 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;

