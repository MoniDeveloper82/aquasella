import React from 'react';
import { AllowedIcon, ForbiddenIcon } from '../../components/icons';

const AllowedItemsPage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-6">Objetos permitidos / Prohibidos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-green-400 flex items-center"><AllowedIcon className="w-6 h-6 mr-2" /> Permitido</h4>
            <ul className="list-disc list-inside text-gray-400 mt-2 pl-2">
              <li>Mochilas pequeñas/medianas</li>
              <li>Botellas de agua de plástico (vacías)</li>
              <li>Crema solar</li>
              <li>Baterías externas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-red-400 flex items-center"><ForbiddenIcon className="w-6 h-6 mr-2" /> Prohibido</h4>
            <ul className="list-disc list-inside text-gray-400 mt-2 pl-2">
              <li>Envases de vidrio</li>
              <li>Bebidas alcohólicas del exterior</li>
              <li>Cámaras profesionales sin pase</li>
              <li>Sustancias ilegales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllowedItemsPage;
