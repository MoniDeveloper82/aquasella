import React from 'react';
import { AllowedIcon } from '../../components/icons';

const CampingPage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-6">Camping</h2>
        <p className="text-gray-300 mb-4">Disponemos de una amplia zona de acampada con servicios básicos (baños, duchas, puestos de recarga y puntos de información). El acceso a la acampada requiere un abono que lo incluya. Consulta la página de tickets para comprar el pase que incluya camping.</p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Servicios</h3>
        <ul className="list-disc list-inside text-gray-400">
          <li>Baños y duchas</li>
          <li>Puntos de recarga de móviles</li>
          <li>Zonas de sombra y áreas de primeros auxilios</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Normativa básica</h3>
        <p className="text-gray-400">Por seguridad y confort de todos, no se permiten fuegos abiertos, ni vehículos dentro de la zona de tiendas. Respeta las indicaciones del personal y consulta la sección de objetos permitidos/prohibidos antes de venir.</p>

        <div className="mt-8 flex items-center text-green-400">
          <AllowedIcon className="w-6 h-6 mr-2" /> <span className="text-gray-300">Recuerda llevar tu pulsera y el abono correspondiente.</span>
        </div>
      </div>
    </section>
  );
};

export default CampingPage;
