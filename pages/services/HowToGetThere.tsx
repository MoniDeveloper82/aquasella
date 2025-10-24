import React from 'react';
import { CarIcon, TrainIcon, BusIcon } from '../../components/icons';

const HowToGetTherePage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-6">Cómo llegar</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <CarIcon className="w-8 h-8 text-sky-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-white">En Coche</h4>
              <p className="text-gray-400">Introduce "Aquasella, Arriondas" en tu GPS. Habrá parking habilitado y señalizado. Sigue las indicaciones del personal de tráfico durante los días del festival.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <TrainIcon className="w-8 h-8 text-sky-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-white">En Tren</h4>
              <p className="text-gray-400">La estación más cercana es Arriondas. Habrá lanzaderas desde la estación hasta el recinto en horarios programados.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <BusIcon className="w-8 h-8 text-sky-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-white">En Autobús</h4>
              <p className="text-gray-400">Existen líneas oficiales desde múltiples puntos de España. Revisa el proveedor oficial para rutas y horarios y compra tu billete con antelación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetTherePage;
