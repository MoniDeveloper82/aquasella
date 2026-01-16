import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GaleriaPage: React.FC = () => {
  const { t } = useTranslation();
  const images = ['AQS1.jpg', 'AQS2.jpg', 'AQS3.jpg', 'AQS4.jpg', 'AQS5.jpg', 'AQS6.jpg', 'AQS7.jpg', 'AQS8.jpg', 'AQS16.jpg', 'AQS17.jpg', 'AQS18.jpg', 'AQS19.jpg', 'AQS21.jpg'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white" style={{
      backgroundImage: "url('img/vertical3.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="relative z-10 p-1 md:p-2">
        <Link to="/" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          {t('back_to_home')}
        </Link>
        <h1
          className="w-full text-center m-0 text-2xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-glow-red break-words px-2 relative z-10 mb-8"
          style={{
            fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
            fontWeight: 'bold',
            lineHeight: 1.02,
            background: 'transparent'
          }}
        >
          {t('gallery_title')}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-1 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div
              key={img}
              className="relative overflow-hidden rounded-lg shadow-lg h-32 md:h-64 flex items-center justify-center cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <img
                src={`img/${img}`}
                alt={`Galería ${index + 1}`}
                className="w-full h-32 md:h-64 object-contain bg-black"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-7xl max-h-full p-4">
            <img
              src={`img/${images[currentImageIndex]}`}
              alt="Modal"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
              onClick={closeModal}
            >
              ×
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaPage;
