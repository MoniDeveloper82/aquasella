import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    {
      code: 'es',
      name: 'Español',
      flagImg: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="750" height="500"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>')}`
    },
    {
      code: 'en',
      name: 'English',
      flagImg: `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741 390" width="741" height="390"><rect width="741" height="390" fill="#B22234"/><rect width="741" height="390" fill="#FFFFFF"/><rect width="741" height="260" y="65" fill="#B22234"/><rect width="741" height="130" y="195" fill="#FFFFFF"/><rect width="494" height="390" fill="#3C3B6E"/><circle cx="123" cy="65" r="15" fill="#FFFFFF"/><circle cx="185" cy="65" r="15" fill="#FFFFFF"/><circle cx="247" cy="65" r="15" fill="#FFFFFF"/><circle cx="309" cy="65" r="15" fill="#FFFFFF"/><circle cx="371" cy="65" r="15" fill="#FFFFFF"/><circle cx="433" cy="65" r="15" fill="#FFFFFF"/><circle cx="154" cy="130" r="15" fill="#FFFFFF"/><circle cx="216" cy="130" r="15" fill="#FFFFFF"/><circle cx="278" cy="130" r="15" fill="#FFFFFF"/><circle cx="340" cy="130" r="15" fill="#FFFFFF"/><circle cx="402" cy="130" r="15" fill="#FFFFFF"/><circle cx="185" cy="195" r="15" fill="#FFFFFF"/><circle cx="247" cy="195" r="15" fill="#FFFFFF"/><circle cx="309" cy="195" r="15" fill="#FFFFFF"/><circle cx="371" cy="195" r="15" fill="#FFFFFF"/></svg>')}`
    }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <div className="relative">
        {/* Botón principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border text-sm ${
            i18n.language === 'en'
              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-red-500'
              : 'bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-red-600 border-gray-400'
          }`}
        >
          <img src={currentLang.flagImg} alt={`${currentLang.name} flag`} className="w-5 h-4 object-cover rounded-sm" />
          <span className="font-semibold">{currentLang.name}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <>
            {/* Overlay para cerrar */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menú desplegable */}
            <div className="absolute top-full right-0 mt-2 w-44 bg-gradient-to-b from-red-600 to-red-800 backdrop-blur-sm border border-red-500 rounded-xl shadow-2xl overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-red-700/50 transition-colors duration-200 ${
                    i18n.language === lang.code ? 'bg-red-800 text-white' : 'text-white'
                  }`}
                >
                  <img src={lang.flagImg} alt={`${lang.name} flag`} className="w-5 h-4 object-cover rounded-sm" />
                  <span className="font-medium text-sm">{lang.name}</span>
                  {i18n.language === lang.code && (
                    <svg className="w-3 h-3 ml-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;