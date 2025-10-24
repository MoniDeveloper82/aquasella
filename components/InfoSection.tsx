
import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import FaqItem from './FaqItem';
import { CarIcon, TrainIcon, BusIcon, ForbiddenIcon, AllowedIcon } from './icons';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center uppercase text-white mb-12 text-glow">Información útil</h2>

                <div className="space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Link to="/services/how-to-get-there" className="block p-6 bg-gray-800/60 hover:bg-gray-800/80 rounded-lg border border-gray-700 transition">
                            <div className="flex items-start space-x-4">
                                <CarIcon className="w-10 h-10 text-sky-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Cómo llegar</h4>
                                    <p className="text-gray-400 text-sm mt-1">Información sobre coche, tren y autobús, parkings y lanzaderas.</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/services/camping" className="block p-6 bg-gray-800/60 hover:bg-gray-800/80 rounded-lg border border-gray-700 transition">
                            <div className="flex items-start space-x-4">
                                <AllowedIcon className="w-10 h-10 text-green-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Camping</h4>
                                    <p className="text-gray-400 text-sm mt-1">Detalles de la zona de acampada, servicios y normativa.</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/services/allowed-items" className="block p-6 bg-gray-800/60 hover:bg-gray-800/80 rounded-lg border border-gray-700 transition">
                            <div className="flex items-start space-x-4">
                                <ForbiddenIcon className="w-10 h-10 text-red-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Objetos permitidos</h4>
                                    <p className="text-gray-400 text-sm mt-1">Lista de objetos permitidos y prohibidos en el recinto.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* FAQs below the cards */}
                    <div>
                        <h3 className="text-2xl font-bold text-sky-400 uppercase mb-6">Preguntas Frecuentes (FAQ)</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FaqItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
      </div>
    </section>
  );
};

export default InfoSection;
