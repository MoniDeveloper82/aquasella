import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BaseCard from '../components/BaseCard';

const TicketsPage: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const guideSlides = [
    {
      title: "",
      content: (
        <img
          src="img/aquasella3.png"
          alt="Aquasella"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      )
    },
    {
      title: t('tickets_general_title'),
      content: (
        <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden">
          {/* Parte de arriba: TEXTO (no ocupa todo el alto) */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-bold mb-2 text-white text-center">
              {t('tickets_general_question')}
            </h3>

            <p className="text-base text-gray-200 text-center mb-2">
              {t('tickets_general_answer')}{" "}
              <span className="font-bold">{t('tickets_general_price')}</span>{" "}
              {t('tickets_general_rest')}
            </p>

            <p className="text-base text-gray-200 text-center">
              {t('tickets_general_web')}{" "}
              <a
                href="https://www.aquasella.com"
                className="text-red-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aquasella.com
              </a>
              <br />
              {t('tickets_general_ticketer')}{" "}
              <a
                href="https://www.vivaticket.es/"
                className="text-red-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.vivaticket.es/
              </a>
            </p>
          </div>

          {/* Parte de abajo: IMAGEN (rellena TODO el resto) */}
          <div
            className="flex-1 relative"
            style={{
              backgroundImage: "url('/img/AQS4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay suave opcional */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      )
    },
    {
      title: t('tickets_types_title'),
      content: (
        <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden">
          {/* Parte de arriba: TEXTO (no ocupa todo el alto) */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-bold mb-2 text-white text-center">
              {t('tickets_types_question')}
            </h3>

            <ul className="space-y-2 text-gray-200 mt-2">
              <li>{t('tickets_types_list1')}</li>
              <li>{t('tickets_types_list2')}</li>
              <li>{t('tickets_types_list3')}</li>
            </ul>
          </div>

          {/* Parte de abajo: IMAGEN (rellena TODO el resto) */}
          <div
            className="flex-1 relative"
            style={{
              backgroundImage: "url('/img/AQS5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay suave opcional */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      )
    },
    {
      title: t('tickets_sales_title'),
      content: (
        <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden bg-black">
          {/* Parte de arriba: TEXTO (no ocupa todo el alto) */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-bold mb-2 text-white text-center">
              {t('tickets_sales_question')}
            </h3>

            <p className="text-gray-200 mb-1 block">{t('tickets_sales_list1')}</p>
            <p className="text-gray-200 mb-1 block">{t('tickets_sales_list2')}</p>
            <p className="text-gray-200 mb-4 block">{t('tickets_sales_list3')}</p>
            <div className="mt-2 p-4 bg-yellow-900/30 border-4 border-yellow-500 rounded w-full">
              <p className="text-yellow-200">{t('tickets_sales_warning')}</p>
            </div>
            <div className="mt-3 p-4 bg-black border-4 border-red-500 rounded w-full">
              <p className="text-gray-200">{t('tickets_sales_info')}<br />
              {t('tickets_sales_data')}</p>
            </div>
          </div>

          {/* Parte de abajo: IMAGEN (rellena TODO el resto) */}
          <div
            className="flex-1 relative"
            style={{
              backgroundImage: "url('/img/AQS8.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay suave opcional */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      )
    },
    {
      title: t('tickets_payment_title'),
      content: (
        <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden bg-black">
          {/* Parte de arriba: TEXTO (no ocupa todo el alto) */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-bold mb-2 text-white text-center">
              {t('tickets_payment_question')}
            </h3>

            <p className="text-gray-200 mb-2 block">{t('tickets_payment_text')}</p>
            <div className="mt-2 mb-2 p-4 bg-black border-4 border-red-600 rounded-xl w-full">
              <p className="text-gray-200 mb-1 block">{t('tickets_payment_credit')}</p>
              <p className="text-gray-400 mb-1 block ml-6 text-sm">{t('tickets_payment_credit_info')}</p>
              <p className="text-gray-200 mb-1 block">{t('tickets_payment_bizum')}</p>
              <p className="text-gray-400 mb-1 block ml-6 text-sm">{t('tickets_payment_bizum_info')}</p>
            </div>
          </div>

          {/* Parte de abajo: IMAGEN (rellena TODO el resto) */}
          <div
            className="flex-1 relative"
            style={{
              backgroundImage: "url('/img/AQS18.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay suave opcional */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      )
    },
    {
      title: t('tickets_support_title'),
      content: (
        <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden bg-black">
          {/* Parte de arriba: TEXTO (no ocupa todo el alto) */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-bold mb-2 text-white text-center">
              {t('tickets_support_question')}
            </h3>

            <p className="text-gray-200 mb-2 block">{t('tickets_support_text1')}</p>
            <p className="text-gray-200 mb-2 block">{t('tickets_support_text2')}</p>
            <div className="mt-4 p-4 bg-black border-4 border-red-600 rounded w-full">
              <p className="text-gray-200 mb-2 block">{t('tickets_support_email')} <a href="mailto:info.es@vivaticket.com" className="text-red-400 hover:text-red-300 underline">info.es@vivaticket.com</a></p>
              <p className="text-gray-200 mb-1 block">{t('tickets_support_phone')} <a href="tel:+34910053595" className="text-red-400 hover:text-red-300 underline">+34 910 05 35 95</a></p>
            </div>
          </div>

          {/* Parte de abajo: IMAGEN (rellena TODO el resto) */}
          <div
            className="flex-1 relative"
            style={{
              backgroundImage: "url('/img/AQS20.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* overlay suave opcional */}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guideSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guideSlides.length) % guideSlides.length);
  };

  const ticketSections = [
    {
      id: 'venta-general',
      title: t('tickets_sections_general_title'),
      description: t('tickets_sections_general_desc'),
      color: 'from-rose-600 to-red-800',
      link: '/tickets/venta-general'
    },
    {
      id: 'venta-plazos',
      title: t('tickets_sections_installments_title'),
      description: t('tickets_sections_installments_desc'),
      color: 'from-blue-600 to-blue-800',
      link: '/tickets/venta-plazos'
    },
    {
      id: 'bono-cultural',
      title: t('tickets_sections_bono_title'),
      description: t('tickets_sections_bono_desc'),
      color: 'from-green-600 to-green-800',
      link: '/tickets/bono-cultural'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-10 z-10" style={{
      backgroundImage: "url('/img/vertical3.png')",
      backgroundSize: '100% auto',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }}>
      <>
        <img src="/img/t1.png" alt="Tickets Aquasella" className="w-full hidden md:block" style={{margin: 0, padding: 0, display: 'block'}} loading="lazy" />
        <div className="relative z-10 min-h-screen">
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
        <div className="text-center mb-10 mt-0 p-0">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t('tickets_subtitle')}
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-2">
            {t('tickets_subtitle2')}
          </p>
        </div>

        {/* Guía de Compra Carousel */}
        <div
          className={[
            "rounded-2xl mb-12 relative mx-auto overflow-visible", // <-- overflow-visible para evitar corte
            "border-[3px] border-[#ff003c]",
            "shadow-[0_0_32px_8px_#ff003c,0_0_8px_2px_#ff003c,0_0_1px_1px_#ff003c]",
            "w-full max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1100px]",
            "p-4 sm:p-6 md:p-8",
          ].join(" ")}
        >
          {/* Header responsive */}
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-white leading-tight">
              {t('tickets_guide_title')}
            </h2>
          </div>
          {/* Viewport responsive y scrollable */}
          <div className="relative overflow-hidden h-[62vh] sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[600px] 2xl:h-[700px]">
            <div
              className="transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex h-full">
                {guideSlides.map((slide, index) => (
                  <div key={index} className="min-w-full h-full">
                    {index === 0 ? (
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-black">
                          <img
                            src="img/aquasella3.png"
                            alt="Aquasella"
                            draggable={false}
                            className="w-full h-full object-contain object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      // Slides de texto sin scroll
                      <div className="h-full w-full flex items-start justify-center">
                        <div className="p-3 sm:p-4 md:p-6 h-full w-full">
                          {slide.title && (
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-red-400 text-center">
                              {slide.title}
                            </h3>
                          )}
                          <div className="text-sm sm:text-base h-full">
                            {slide.content}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer navegación compacto */}
          <div className="flex justify-between items-center mt-3 sm:mt-4">
            <button
              onClick={currentSlide === 0 ? undefined : prevSlide}
              className={`bg-red-600 text-white p-2 sm:p-3 rounded-full transition-colors ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
              }`}
              aria-label={t('tickets_nav_previous')}
              disabled={currentSlide === 0}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {guideSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-red-400" : "bg-gray-500"
                  }`}
                  aria-label={`${t('tickets_nav_go_to_slide')} ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full transition-colors"
              aria-label={t('tickets_nav_next')}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="
  grid grid-cols-1 gap-6 mb-12
  place-items-center
  md:grid-cols-2 md:place-items-stretch
  lg:grid-cols-3
">
          {ticketSections.map((section) => {
            return (
              <Link
                key={section.id}
                to={section.link}
                className="group block"
              >
                {/* Las cards están centradas en móvil usando mx-auto y max-w-xs */}
                <BaseCard>
                {section.id === 'venta-general' ? (
                  <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundImage: "url('/img/VENTA.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : section.id === 'venta-plazos' ? (
                  <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundImage: "url('/img/Plazos.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : section.id === 'bono-cultural' ? (
                  <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundImage: "url('/img/Bono.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : null}
                </BaseCard>
              </Link>
            );
          })}
        </div>

        <div className="bg-black rounded-xl p-8 text-center mb-16 border-[3px]" style={{ borderColor: '#8B0000' }}>
          <h3 className="text-2xl font-bold mb-4">{t('tickets_bottom_title')}</h3>
          <p className="text-gray-300 mb-4">
            {t('tickets_bottom_text')}
          </p>
          <p className="text-sm text-gray-400">
            {t('tickets_bottom_terms')}
          </p>
        </div>
      </div>
      </div>
      </>
    </div>
  );
};

export default TicketsPage;
