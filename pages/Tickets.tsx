import React from 'react';
import { Link } from 'react-router-dom';

const TicketsPage: React.FC = () => {
  const ticketSections = [
    {
      id: 'venta-general',
      title: 'Venta General',
      description: 'Entradas individuales para todos los días del festival',
      icon: '🎫',
      color: 'from-blue-600 to-blue-800',
      link: '/tickets/venta-general'
    },
    {
      id: 'bono-cultural',
      title: 'Bono Cultural Joven',
      description: 'Aprovecha el Bono Cultural para jóvenes de 18 años',
      icon: '🎓',
      color: 'from-green-600 to-green-800',
      link: '/tickets/bono-cultural'
    },
    {
      id: 'upgrades-general',
      title: 'Upgrades General',
      description: 'Mejora tu experiencia con servicios VIP y premium',
      icon: '⭐',
      color: 'from-purple-600 to-purple-800',
      link: '/tickets/upgrades-general'
    },
    {
      id: 'upgrades-bono',
      title: 'Upgrades Bono Cultural',
      description: 'Upgrades especiales para portadores del Bono Cultural',
      icon: '🎖️',
      color: 'from-emerald-600 to-emerald-800',
      link: '/tickets/upgrades-bono'
    },
    {
      id: 'glamping',
      title: 'Glamping',
      description: 'Alojamiento premium con todas las comodidades',
      icon: '🏕️',
      color: 'from-orange-600 to-orange-800',
      link: '/tickets/glamping'
    },
    {
      id: 'lockers',
      title: 'Lockers',
      description: 'Guarda tus pertenencias de forma segura',
      icon: '🔒',
      color: 'from-gray-600 to-gray-800',
      link: '/tickets/lockers'
    },
    {
      id: 'baterias',
      title: 'Baterías Móvil',
      description: 'Mantén tu móvil cargado durante todo el festival',
      icon: '🔋',
      color: 'from-yellow-600 to-yellow-800',
      link: '/tickets/baterias'
    },
    {
      id: 'bus-oficial',
      title: 'Bus Oficial',
      description: 'Transporte oficial desde diferentes ciudades',
      icon: '🚌',
      color: 'from-indigo-600 to-indigo-800',
      link: '/tickets/bus-oficial'
    },
    {
      id: 'pack-madrid',
      title: 'Pack Entrada + Bus Madrid',
      description: 'Entrada + transporte desde Madrid',
      icon: '🎫🚌',
      color: 'from-red-600 to-red-800',
      link: '/tickets/pack-madrid'
    },
    {
      id: 'pack-asturias',
      title: 'Pack Entrada + Bus Asturias',
      description: 'Entrada + transporte desde Asturias',
      icon: '🏔️🚌',
      color: 'from-teal-600 to-teal-800',
      link: '/tickets/pack-asturias'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Tickets Aquasella 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Asegura tu sitio en la catedral de la música electrónica. Elige la opción que mejor se adapte a ti.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {ticketSections.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
            >
              <div className={`
                bg-gradient-to-br ${section.color} 
                rounded-2xl p-6 text-center h-full
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl
                group-hover:-translate-y-2
              `}>
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-lg font-black uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className="inline-flex items-center text-white font-bold text-sm">
                  Ver Opciones
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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