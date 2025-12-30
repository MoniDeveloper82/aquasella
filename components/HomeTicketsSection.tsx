import React from 'react';
import styles from './HomeTicketsSection.module.css';
import { NavLink } from 'react-router-dom';
import { AllowedIcon } from './icons';

const HomeTicketsSection: React.FC = () => {
  return (
    <section 
      className="relative"
      style={{
        backgroundImage: 'url(/img/FondoTicketsHome.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>
      <h2
        className="w-full text-center m-0 text-2xl md:text-6xl font-extrabold uppercase tracking-widest text-white text-glow-red break-words px-2 relative z-10"
        style={{
          fontFamily: 'ClashDisplay, system-ui, -apple-system, sans-serif',
          fontWeight: 'bold',
          lineHeight: 1.02,
          background: 'transparent'
        }}
      >
        TICKETS
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">No te quedes fuera — entradas limitadas. Asegura tu plaza ahora y vive Aquasella al máximo.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Main fair-ticket style card */}
          <div className={`relative flex-1 group rounded-xl overflow-hidden border-2 border-rose-600 bg-gradient-to-r from-rose-900/5 via-rose-800/10 to-slate-800/10 shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-red-600/60 ${styles.cardHaloRed}`}>
            {/* glow layer that appears on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-rose-400/8 to-purple-500/6 blur-3xl" />
            </div>
            {/* punch holes / notches */}
            <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
            <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />

            <div className="p-6 md:p-10 flex flex-col md:flex-row items-stretch">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">ABONO</div>
                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">Abono General AQS 2026</h3>
                <p className="mt-2 text-sm text-rose-200 font-semibold uppercase">Acceso general del 13 al 16 de agosto</p>
                <p className="mt-4 text-gray-200 max-w-xl">Disfruta del festival con acceso total a todos los escenarios, zonas chill y zona de dia. Ideal para vivir la experiencia completa.</p>

                <ul className="mt-4 text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-start gap-3">
                    <AllowedIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Acceso a todos los escenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AllowedIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Zona de acampada (con suplemento de Acampada)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AllowedIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Foodtrucks en la zona de Día</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AllowedIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">Zona Vip (con suplemento Vip)</span>
                  </li>
                </ul>
              </div>

              {/* Perforation line */}
              <div className="hidden md:flex items-center px-6">
                <div className="h-full w-px border-r-2 border-dashed border-white/20" />
              </div>

              {/* Stub with price */}
              <div
                className="w-full md:w-56 flex-none flex flex-col items-center justify-start p-0 md:p-0 text-white relative overflow-hidden rounded-b-xl"
                style={{ minHeight: '340px', height: '100%' }}
              >
                {/* Imagen cartel de fondo arriba */}
                <div className="w-full relative" style={{ minHeight: '320px', height: '320px' }}>
                  <img
                    src="/img/cartel.png"
                    alt="Cartel Aquasella 2026"
                    className="absolute inset-0 w-full h-full object-contain z-0"
                    style={{ minHeight: '320px', height: '320px', background: 'black' }}
                    draggable="false"
                  />
                </div>
                {/* Info y botón debajo de la imagen */}
                <div className="relative z-20 w-full flex flex-col items-center justify-end p-4 md:p-6 bg-transparent h-full" style={{minHeight: '120px'}}>
                  <div className="w-full flex flex-col items-center mt-16 mb-2">
                    <div className="text-xs uppercase tracking-widest drop-shadow font-bold">Desde</div>
                    <div className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">86,90€</div>
                    <NavLink to="/tickets" className="mt-6 inline-flex items-center justify-center bg-white text-rose-800 px-4 py-2 rounded-full text-sm font-semibold hover:brightness-95 transition drop-shadow w-full" aria-label="Comprar Abono General">
                      Comprar
                    </NavLink>
                  </div>
                </div>
              </div>
            {/* main ticket available - no sold out badge */}
          </div>

          {/* Two small sold-out tranche cards */}
          </div>
          <div className="w-full md:w-[38%] flex flex-col gap-6 h-full mt-32" style={{height: '100%'}}>
            {/* Primer tramo - sold out */}
            <div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden border-2 border-rose-600 bg-gradient-to-r from-rose-900/5 via-rose-800/10 to-slate-800/10 flex flex-col min-h-0 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_8px_2px_#dc2626,0_0_12px_3px_#b91c1c]" style={{height: '160%'}}>
              {/* Semilunas blancas laterales */}
              <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              {/* full-width sold out ribbon */}
              <div className="absolute left-0 right-0 top-3 flex justify-center pointer-events-none">
                <div className="bg-rose-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-lg shadow">Sold out</div>
              </div>
              <div className="p-6 pt-12">
                <h4 className="text-2xl font-bold text-white uppercase whitespace-nowrap text-center">Abono Primer Tramo</h4>
                <p className="mt-3 text-gray-400 text-center">Entrada del primer tramo — actualmente <span className="text-rose-500 font-bold uppercase">AGOTADA</span>.</p>
              </div>
            </div>

            {/* Segundo tramo - sold out */}
            <div className="relative flex-1 w-full max-w-lg mx-auto rounded-xl overflow-hidden border-2 border-rose-600 bg-gradient-to-r from-rose-900/5 via-rose-800/10 to-slate-800/10 flex flex-col min-h-0 h-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_8px_2px_#dc2626,0_0_12px_3px_#b91c1c]" style={{height: '200%'}}>
              {/* Semilunas blancas laterales */}
              <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="absolute left-0 right-0 top-3 flex justify-center pointer-events-none">
                <div className="bg-rose-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-lg shadow">Sold out</div>
              </div>
              <div className="p-6 pt-12">
                <h4 className="text-2xl font-bold text-white uppercase whitespace-nowrap text-center">Abono Segundo Tramo</h4>
                <p className="mt-3 text-gray-400 text-center">Entrada del segundo tramo — actualmente <span className="text-rose-500 font-bold uppercase">AGOTADA</span>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-6 text-center text-gray-400 text-sm">
          <span className="font-semibold text-white">+20.000</span> asistentes felices — pagado seguro • devolución hasta 14 días antes
        </div> */}
      </div>
    </section>
  );
};

export default HomeTicketsSection;