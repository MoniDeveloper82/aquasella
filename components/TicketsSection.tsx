
import React from 'react';

const TicketsSection: React.FC = () => {
  return (
    <section id="tickets" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black uppercase text-white mb-4 text-glow">Entradas</h2>
        <p className="text-gray-300 mb-8">
          Asegura tu sitio en la catedral de la música electrónica. ¡No te quedes fuera!
        </p>
        <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center shadow-lg">
           {/* The real ticket provider iframe would be placed here.
               Using a placeholder to demonstrate layout. */}
           <p className="text-gray-400 text-lg font-semibold">El iframe del proveedor de entradas iría aquí.</p>
        </div>
         <p className="text-xs text-gray-500 mt-6">
          Al comprar una entrada, aceptas nuestros <a href="#" className="underline hover:text-sky-400">Términos y Condiciones</a> y nuestra <a href="#" className="underline hover:text-sky-400">Política de Privacidad</a>.
        </p>
      </div>
    </section>
  );
};

export default TicketsSection;
