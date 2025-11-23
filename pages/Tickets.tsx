import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TicketsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const guideSlides = [
    {
      title: "ABONOS GENERALES",
      content: (
        <>
          <h4 className="text-lg font-bold mb-2 text-white">¿Cuándo comienza la venta?</h4>
          <p className="text-gray-300 leading-relaxed">
            Este martes 11 de noviembre a las 13:00h, pondremos a la venta una nueva promoción de Abonos Generales desde <strong>79,90€ + gastos de gestión</strong>. La Zona de Descanso (Acampada) se podrá adquirir por separado más adelante como complemento.
          </p>
          <p className="mt-3 text-gray-300">
            La venta se realizará desde nuestra Web Oficial: <a href="https://www.aquasella.com" className="text-red-400 hover:text-red-300 underline">www.aquasella.com</a><br />
            Siendo nuestra Ticketera oficial Vivaticket: <a href="https://www.vivaticket.es/" className="text-red-400 hover:text-red-300 underline">https://www.vivaticket.es/</a>
          </p>
        </>
      )
    },
    {
      title: "TIPOS DE ABONOS",
      content: (
        <>
          <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de Abonos hay a la venta?</h4>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Abono General</li>
            <li>✅ Precio mínimo garantizado para la próxima edición AQUASELLA 2026.</li>
            <li>✅ El abono general da acceso al recinto del festival desde el jueves 13 hasta el domingo 16 de agosto de 2026.</li>
          </ul>
        </>
      )
    },
    {
      title: "FORMAS DE VENTA",
      content: (
        <>
          <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de venta se realizarán?</h4>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Venta General en un único pago</li>
            <li>✅ Venta a Plazos: Tres pagos mensuales</li>
            <li>✅ Venta con Bono Cultural Joven</li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
            <p className="text-yellow-200">⚠️ El acceso al evento es exclusivamente para mayores de 18 años.</p>
          </div>
          <div className="mt-3 p-4 bg-black border-l-4 border-red-500 rounded">
            <p className="text-gray-200">ℹ️ Durante el proceso de compra, se solicitarán los siguientes datos del comprador:<br />
            Nombre y Apellidos, DNI, Email, Teléfono, Fecha de Nacimiento y Código Postal.</p>
          </div>
        </>
      )
    },
    {
      title: "MÉTODOS DE PAGO",
      content: (
        <>
          <h4 className="text-lg font-bold mb-2 text-white">¿Cómo comprar los bonos?</h4>
          <p className="text-gray-300 mb-3">
            Se podrán realizar en un mismo proceso la compra de hasta 6 abonos. Los métodos de pago aceptados son los siguientes:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>✅ Tarjeta crédito / débito: Visa, Mastercard.</li>
            <li className="ml-6 text-sm">ℹ️ Importante: Deberás tener activado el 'comercio electrónico seguro'.</li>
            <li>✅ Bizum.</li>
            <li className="ml-6 text-sm">ℹ️ Importante: Deberás tener activado el servicio de Bizum en la aplicación de tu banco.</li>
          </ul>
        </>
      )
    },
    {
      title: "SOPORTE",
      content: (
        <>
          <h4 className="text-lg font-bold mb-2 text-white">¿Problemas con la compra?</h4>
          <p className="text-gray-300 mb-3">
            En el caso de no recibir el correo con los abonos en tu bandeja de entrada tras un tiempo de espera, revisa tu carpeta de spam.
          </p>
          <p className="text-gray-300">
            Si aún así no lo ha recibido, puedes ponerte en contacto con el servicio de atención al cliente a través de:
          </p>
          <ul className="mt-3 space-y-1 text-gray-300">
            <li>📧 Email: <a href="mailto:info.es@vivaticket.com" className="text-red-400 hover:text-red-300 underline">info.es@vivaticket.com</a></li>
            <li>📞 Tfno: <a href="tel:+34910053595" className="text-red-400 hover:text-red-300 underline">+34 910 05 35 95</a></li>
          </ul>
        </>
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
      icon: '🎫',
      color: 'from-rose-600 to-red-800',
      link: '/tickets/venta-general'
    },
    {
      id: 'venta-plazos',
      title: 'Venta a Plazos',
      description: 'Paga tu entrada cómodamente en varios plazos',
      icon: '💳',
      color: 'from-blue-600 to-blue-800',
      link: '/tickets/venta-plazos'
    },
    {
      id: 'bono-cultural',
      title: 'Bono Cultural Joven',
      description: 'Aprovecha el Bono Cultural para jóvenes de 18 años',
      icon: '🎓',
      color: 'from-green-600 to-green-800',
      link: '/tickets/bono-cultural'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 -mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-4 text-glow font-extrabold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', fontWeight: 'bold' }}>
            Tickets Aquasella 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Asegura tu sitio en la catedral de la música electrónica. Elige la opción que mejor se adapte a ti.
          </p>
        </div>

        {/* Guía de Compra Carousel */}
        <div className="bg-gradient-to-br from-red-950 to-red-900 rounded-2xl p-8 mb-12 shadow-2xl border border-red-800 relative">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 text-center text-white">
            GUÍA DE COMPRA - AQUASELLA 2026
          </h2>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {guideSlides.map((slide, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">{slide.title}</h3>
                      {slide.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {guideSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-red-400' : 'bg-gray-500'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {ticketSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              <div className={`relative bg-black rounded-2xl overflow-hidden h-[500px] transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)]`} style={{ borderColor: '#8B0000' }}>
                {section.id === 'venta-general' ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Image for Venta General */}
                    <img 
                      src="/img/VENTA.png" 
                      alt="Venta General"
                      className="w-full h-full object-contain"
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
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-black rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎵 Venta de Entradas</h3>
          <p className="text-gray-300 mb-4">
            Las entradas ya están disponibles. ¡Consigue la tuya antes de que se agoten!
          </p>
          <p className="text-sm text-gray-400">
            Al comprar una entrada, aceptas nuestros Términos y Condiciones y nuestra Política de Privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;