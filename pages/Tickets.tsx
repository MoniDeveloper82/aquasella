import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TicketsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const guideSlides = [
    {
      title: "",
      content: (
        <img
          src="/img/aquasella3.png"
          alt="Aquasella"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      )
    },
    {
      title: "ABONOS GENERALES",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-start text-white bg-black rounded-2xl pt-1 px-4 pb-2">
          <h3 className="text-lg font-bold mb-2 text-white text-center">¿Cuándo comienza la venta?</h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Este martes 11 de noviembre a las 13:00h, pondremos a la venta una nueva promoción de Abonos Generales desde <span className="font-bold">79,90€ + gastos de gestión.</span> La Zona de Descanso (Acampada) se podrá adquirir por separado más adelante como complemento.
          </p>
          <p className="text-base text-gray-200 text-center mb-2">
            La venta se realizará desde nuestra Web Oficial: <a href="https://www.aquasella.com" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">www.aquasella.com</a><br/>
            Siendo nuestra Ticketera oficial Vivaticket: <a href="https://www.vivaticket.es/" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">https://www.vivaticket.es/</a>
          </p>
        </div>
      )
    },
    {
      title: "TIPOS DE ABONOS",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-start px-4 pb-2 mt-8">
          <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de Abonos hay a la venta?</h4>
          <ul className="space-y-2 text-gray-300 mt-2">
            <li>✅ Abono General</li>
            <li>✅ Precio mínimo garantizado para la próxima edición AQUASELLA 2026.</li>
            <li>✅ El abono general da acceso al recinto del festival desde el jueves 13 hasta el domingo 16 de agosto de 2026.</li>
          </ul>
        </div>
      )
    },
    {
      title: "FORMAS DE VENTA",
      content: (
        <div className="w-full h-full flex flex-col items-start justify-start px-4 pb-2">
          <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de venta se realizarán?</h4>
          <p className="text-gray-300 mb-1 block">✅ Venta General en un único pago</p>
          <p className="text-gray-300 mb-1 block">✅ Venta a Plazos: Tres pagos mensuales</p>
          <p className="text-gray-300 mb-4 block">✅ Venta con Bono Cultural Joven</p>
          <div className="mt-2 p-4 bg-yellow-900/30 border-4 border-yellow-500 rounded w-full">
            <p className="text-yellow-200">⚠️ El acceso al evento es exclusivamente para mayores de 18 años.</p>
          </div>
          <div className="mt-3 p-4 bg-black border-4 border-red-500 rounded w-full">
            <p className="text-gray-200">ℹ️ Durante el proceso de compra, se solicitarán los siguientes datos del comprador:<br />
            Nombre y Apellidos, DNI, Email, Teléfono, Fecha de Nacimiento y Código Postal.</p>
          </div>
        </div>
      )
    },
    {
      title: "MÉTODOS DE PAGO",
      content: (
        <div className="w-full h-full flex flex-col items-start justify-start px-4 pb-2">
          <h4 className="text-lg font-bold mb-2 text-white">¿Cómo comprar los bonos?</h4>
          <p className="text-gray-300 mb-2 block">Se podrán realizar en un mismo proceso la compra de hasta 6 abonos. Los métodos de pago aceptados son los siguientes:</p>
          <div className="mt-2 mb-2 p-4 bg-black border-4 border-red-600 rounded-xl w-full">
            <p className="text-gray-300 mb-1 block">✅ Tarjeta crédito / débito: Visa, Mastercard.</p>
            <p className="text-gray-400 mb-1 block ml-6 text-sm">ℹ️ Importante: Deberás tener activado el 'comercio electrónico seguro'.</p>
            <p className="text-gray-300 mb-1 block">✅ Bizum.</p>
            <p className="text-gray-400 mb-1 block ml-6 text-sm">ℹ️ Importante: Deberás tener activado el servicio de Bizum en la aplicación de tu banco.</p>
          </div>
        </div>
      )
    },
    {
      title: "SOPORTE",
      content: (
        <div className="w-full h-full flex flex-col items-start justify-start px-4 pb-2">
          <h4 className="text-lg font-bold mb-2 text-white">¿Problemas con la compra?</h4>
          <p className="text-gray-300 mb-2 block">En el caso de no recibir el correo con los abonos en tu bandeja de entrada tras un tiempo de espera, revisa tu carpeta de spam.</p>
          <p className="text-gray-300 mb-2 block">Si aún así no lo has recibido, puedes ponerte en contacto con el servicio de atención al cliente a través de los siguientes medios:</p>
          <div className="mt-4 p-4 bg-black border-4 border-red-600 rounded w-full">
            <p className="text-gray-300 mb-2 block">📧 Email: <a href="mailto:info.es@vivaticket.com" className="text-red-400 hover:text-red-300 underline">info.es@vivaticket.com</a></p>
            <p className="text-gray-300 mb-1 block">📞 Tfno: <a href="tel:+34910053595" className="text-red-400 hover:text-red-300 underline">+34 910 05 35 95</a></p>
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
      title: 'Venta General',
      description: 'Entradas individuales para todos los días del festival',
      color: 'from-rose-600 to-red-800',
      link: '/tickets/venta-general'
    },
    {
      id: 'venta-plazos',
      title: 'Venta a Plazos',
      description: 'Paga tu entrada cómodamente en varios plazos',
      color: 'from-blue-600 to-blue-800',
      link: '/tickets/venta-plazos'
    },
    {
      id: 'bono-cultural',
      title: 'Bono Cultural Joven',
      description: 'Aprovecha el Bono Cultural para jóvenes de 18 años',
      color: 'from-green-600 to-green-800',
      link: '/tickets/bono-cultural'
    }
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/img/vertical2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    <style>{`
      @media (max-width: 768px) {
        div[style*="vertical2.png"] {
          background-size: contain !important;
          background-position: center top !important;
          background-repeat: repeat !important;
        }
      }
    `}</style>
      <img src="/img/t1.png" alt="Tickets Aquasella" className="w-full hidden md:block" style={{margin: 0, padding: 0, display: 'block'}} loading="lazy" />
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-0 p-0">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Asegura tu sitio en la catedral de la música electrónica. Elige la opción que mejor se adapte a ti.
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
              GUÍA DE COMPRA - AQUASELLA 2026
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
                            src="/img/aquasella3.png"
                            alt="Aquasella"
                            draggable={false}
                            className={["w-full h-full object-contain object-center","scale-[1.15]","sm:scale-[1.2]","md:scale-[1.25]","lg:scale-[1.3]",].join(" ")}
                          />
                        </div>
                      </div>
                    ) : (
                      // Slides de texto con scroll interno
                      <div className="h-full w-full flex items-start justify-center">
                        <div className="w-full h-full overflow-y-auto pr-1 sm:pr-2">
                          <div className="p-3 sm:p-4 md:p-6">
                            {slide.title && (
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-red-400 text-center">
                                {slide.title}
                              </h3>
                            )}
                            <div className="text-sm sm:text-base">
                              {slide.content}
                            </div>
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
              aria-label="Anterior"
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
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 rounded-full transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 justify-center justify-items-center">
          {ticketSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              {/* Las cards están centradas en móvil usando mx-auto y max-w-xs */}
              <div className={`relative bg-black rounded-2xl overflow-hidden h-80 md:h-[500px] w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]`} style={{ borderColor: '#8B0000' }}>
                {section.id === 'venta-general' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Image for Venta General */}
                    <img 
                      src="/img/VENTA.png" 
                      alt="Venta General"
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : section.id === 'venta-plazos' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Image for Venta a Plazos */}
                    <img 
                      src="/img/Plazos.png" 
                      alt="Venta a Plazos"
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : section.id === 'bono-cultural' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Image for Bono Cultural */}
                    <img 
                      src="/img/Bono.png" 
                      alt="Bono Cultural"
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-black rounded-xl p-8 text-center mb-16 border-[3px]" style={{ borderColor: '#8B0000' }}>
          <h3 className="text-2xl font-bold mb-4">Venta de Entradas</h3>
          <p className="text-gray-300 mb-4">
            Las entradas ya están disponibles. ¡Consigue la tuya antes de que se agoten!
          </p>
          <p className="text-sm text-gray-400">
            Al comprar una entrada, aceptas nuestros Términos y Condiciones y nuestra Política de Privacidad
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TicketsPage;