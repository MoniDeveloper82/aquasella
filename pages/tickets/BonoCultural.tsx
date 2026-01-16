import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BonoCulturalPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegación de regreso */}
        <div className="mb-8">
          <Link 
            to="/tickets" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('back_to_tickets')}
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            {t('cultural_voucher_title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('cultural_voucher_subtitle')}
          </p>
        </div>

        {/* Información del Bono Cultural */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase mb-6">{t('what_is_cultural_voucher')}</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {t('cultural_voucher_description')}
            </p>
          </div>
        </div>

        {/* Entradas disponibles con Bono Cultural */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 mb-12">
          <div className="bg-gradient-to-br from-rose-600 to-red-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
              {t('general_entry_4_days')}
            </h3>
            <div className="text-4xl font-black mb-2">120€</div>
            <div className="text-lg opacity-90 mb-6">{t('with_cultural_voucher')}</div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('full_access_4_days')}</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('all_stages')}</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('august_13_16_2026')}</span>
              </div>
            </div>

            <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              {t('buy_with_cultural_voucher')}
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">
              {t('entry_plus_camping_4_days')}
            </h3>
            <div className="text-4xl font-black mb-2">150€</div>
            <div className="text-lg opacity-90 mb-6">{t('with_cultural_voucher')}</div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('entry_4_days_included')}</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('official_camping')}</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{t('august_13_17_2026')}</span>
              </div>
            </div>

            <button className="w-full bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              {t('buy_with_cultural_voucher')}
            </button>
          </div>
        </div>

        {/* Requisitos */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">✅ Requisitos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Tener 18 años cumplidos en 2025</li>
              <li>• Poseer el Bono Cultural Joven activo</li>
              <li>• DNI español o NIE en vigor</li>
              <li>• Saldo disponible en el bono</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 Proceso de Compra</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 1. Selecciona tu entrada</li>
              <li>• 2. Valida tu Bono Cultural</li>
              <li>• 3. Completa la compra</li>
              <li>• 4. Recibe tu entrada por email</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎵 Cultura y Música</h3>
          <p className="text-gray-300">
            El Bono Cultural Joven te permite acceder a la cultura. ¡Úsalo en Aquasella y vive una experiencia única!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonoCulturalPage;