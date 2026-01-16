import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CartelPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/lineup" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          {t('back_to_lineup')}
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{t('lineup_coming_soon')}</h1>
          <p className="text-xl md:text-2xl text-gray-300">{t('lineup_working')}</p>
        </div>
      </div>
    </div>
  );
};

export default CartelPage;