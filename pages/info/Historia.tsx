import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FanPosters from '../../components/FanPosters';

const HistoriaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-x-hidden pb-10 z-10" style={{
      backgroundImage: "url('img/vertical3.png')",
      backgroundSize: '100% auto',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="relative z-10 min-h-screen flex items-center justify-center">
      <style>{`
        @media (max-width: 768px) {
          div[style*="vertical3.png"] {
            background-size: contain !important;
            background-position: center top !important;
            background-repeat: repeat !important;
          }
        }
      `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← {t('back')}
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            {t('history_title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('history_subtitle')}
          </p>
        </div>

        {/* Historia narrativa */}
        <div className="mb-16">
          <div className="rounded-xl p-6 border-4 border-double border-white bg-gradient-to-b from-red-800 via-red-900 to-red-950 md:flex md:items-center md:justify-center md:min-h-[200px]" style={{
            boxShadow: '0 12px 24px rgba(0,0,0,0.5), 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,255,255,0.3), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.3)',
            transform: 'perspective(1000px) rotateX(2deg)',
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.15) 100%)'
          }}>
            <div className="prose prose-lg max-w-xl text-white text-center md:bg-transparent bg-black/70 md:p-0 p-4 rounded-lg">
              <p className="text-lg leading-relaxed mb-6 text-center">
                {t('history_paragraph_1')}
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-center">
                {t('history_paragraph_2')}
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-center">
                {t('history_paragraph_3')}
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-center">
                {t('history_paragraph_4')}
              </p>
              
              <p className="text-lg leading-relaxed text-center">
                {t('history_paragraph_5')}
              </p>
            </div>
          </div>
        </div>

        {/* Galería de carteles */}
        <FanPosters />

        {/* Cierre */}
        <div className="bg-black rounded-xl p-4 sm:p-6 md:p-8 text-center text-white border-2 border-white">
          <h3 className="text-2xl font-bold mb-4">{t('essence_title')}</h3>
          <p className="text-white text-sm text-left md:text-center">
            {t('essence_text')}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaPage;
