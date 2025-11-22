import React from 'react';
import { Link } from 'react-router-dom';

const TicketsPage: React.FC = () => {
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
    <div className="min-h-screen bg-gray-900 text-white pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-4 text-glow font-extrabold" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif', fontWeight: 'bold' }}>
            Tickets Aquasella 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Asegura tu sitio en la catedral de la música electrónica. Elige la opción que mejor se adapte a ti.
          </p>
        </div>

        {/* Guía de Compra Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 text-center text-white">
            GUÍA DE COMPRA - AQUASELLA 2026
          </h2>
          
          <div className="space-y-6 text-gray-200">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">ABONOS GENERALES</h3>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-white">¿Cuándo comienza la venta?</h4>
              <p className="text-gray-300 leading-relaxed">
                Este martes 11 de noviembre a las 13:00h, pondremos a la venta una nueva promoción de Abonos Generales desde <strong>79,90€ + gastos de gestión</strong>. La Zona de Descanso (Acampada) se podrá adquirir por separado más adelante como complemento.
              </p>
              <p className="mt-3 text-gray-300">
                La venta se realizará desde nuestra Web Oficial: <a href="https://www.aquasella.com" className="text-red-400 hover:text-red-300 underline">www.aquasella.com</a><br />
                Siendo nuestra Ticketera oficial Vivaticket: <a href="https://www.vivaticket.es/" className="text-red-400 hover:text-red-300 underline">https://www.vivaticket.es/</a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de Abonos hay a la venta?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Abono General</li>
                <li>✅ Precio mínimo garantizado para la próxima edición AQUASELLA 2026.</li>
                <li>✅ El abono general da acceso al recinto del festival desde el jueves 13 hasta el domingo 16 de agosto de 2026.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-white">¿Qué tipos de venta se realizarán?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Venta General en un único pago</li>
                <li>✅ Venta a Plazos: Tres pagos mensuales</li>
                <li>✅ Venta con Bono Cultural Joven</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
                <p className="text-yellow-200">⚠️ El acceso al evento es exclusivamente para mayores de 18 años.</p>
              </div>
              <div className="mt-3 p-4 bg-blue-900/30 border-l-4 border-blue-500 rounded">
                <p className="text-blue-200">ℹ️ Durante el proceso de compra, se solicitarán los siguientes datos del comprador:<br />
                Nombre y Apellidos, DNI, Email, Teléfono, Fecha de Nacimiento y Código Postal.</p>
              </div>
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {ticketSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              <div className={`relative bg-black rounded-2xl overflow-hidden h-[500px] transform transition-all duration-300 hover:scale-105 border ${
                section.id === 'venta-general' 
                  ? 'border-red-500/50 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' 
                  : 'border-red-900/30 hover:shadow-2xl'
              }`}>
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
                ) : (
                  <>
                    {/* Red accent line at top for others */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
                    
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8">
                      {/* Top section - Logo placeholder */}
                      <div className="flex justify-center mb-6">
                        <div className="text-6xl">{section.icon}</div>
                      </div>
                      
                      {/* Middle section - Title */}
                      <div className="flex-1 flex flex-col justify-center text-center relative">
                        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">DISPONIBLE AHORA</p>
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-4 text-white" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
                          {section.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {section.description}
                        </p>
                      </div>
                      
                      {/* Bottom section - Dates */}
                      <div className="text-center border-t border-red-900/30 pt-6">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif' }}>
                          13 | 14 | 15 | 16 AGOSTO 2026
                        </div>
                        <div className="text-sm uppercase tracking-widest text-gray-400">
                          29TH EDITION
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
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