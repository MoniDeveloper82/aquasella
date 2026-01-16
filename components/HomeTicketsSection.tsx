import React from 'react';
import styles from './HomeTicketsSection.module.css';
import { NavLink } from 'react-router-dom';
import { AllowedIcon } from './icons';

const HomeTicketsSection: React.FC = () => {
  return (
    <section 
      className="relative pb-0 mb-16 mt-0"
      style={{
        backgroundImage: 'none',
        backgroundSize: 'none',
        backgroundPosition: 'none',
        backgroundRepeat: 'no-repeat',
        marginBottom: 0,
        paddingBottom: 0,
        marginTop: 0,
        paddingTop: 0,
      }}
    >
      {/* Overlay eliminado para mostrar la imagen de fondo sin filtro */}
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
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 mb-0 pb-0 pt-0 sm:pt-0">
        <div className="text-center mb-10">
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">No te quedes fuera — entradas limitadas. Asegura tu plaza ahora y vive Aquasella al máximo.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Main fair-ticket style card */}
          <div className={`relative flex-1 group rounded-xl overflow-hidden border-2 border-rose-600 bg-black shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-red-600/60 ${styles.cardHaloRed} w-full max-w-[300px] sm:max-w-md md:max-w-none mx-auto min-h-[120px] sm:min-h-[340px]`}>
            {/* glow layer that appears on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-rose-400/8 to-purple-500/6 blur-3xl" />
            </div>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            {/* Bottom image background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-xl" style={{backgroundImage: "url('img/AQS15.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            {/* punch holes / notches */}

            <div className="p-3 sm:p-6 md:p-10 flex flex-col md:flex-row items-stretch">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">ABONO</div>
                <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">Abono General AQS 2026</h3>
                <p className="mt-2 text-sm text-rose-600 font-semibold uppercase">Acceso general del 13 al 16 de agosto</p>
                {/* Texto eliminado a petición del usuario */}

                {/* Lista de características eliminada a petición del usuario */}
              </div>

              {/* Perforation line */}
              <div className="hidden md:flex items-center px-6">
                <div className="h-full w-px border-r-2 border-dashed border-white/20" />
              </div>

              {/* Stub with price */}
              <div
                className="w-full md:w-56 flex-none flex flex-col items-center justify-start p-0 md:p-0 text-white relative overflow-hidden rounded-b-xl"
                style={{ minHeight: '60px', height: '100%' }}
              >
                {/* Imagen del cartel eliminada a petición del usuario */}
                {/* Info y botón debajo de la imagen */}
                <div className="relative z-20 w-full flex flex-col items-center justify-end p-4 md:p-6 bg-transparent h-full" style={{minHeight: '120px'}}>
                  <div className="w-full flex flex-col items-center mt-4 mb-2">
                    <div className="text-xs uppercase tracking-widest drop-shadow font-bold">Desde</div>
                    <div className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">86,90€</div>
                    <NavLink to="/tickets" className="mt-6 inline-flex items-center justify-center bg-white text-rose-800 px-4 py-2 rounded-full text-sm font-semibold hover:brightness-95 transition drop-shadow w-full hover:shadow-[0_0_10px_#dc2626,0_0_20px_#b91c1c]" aria-label="Comprar Abono General">
                      Comprar
                    </NavLink>
                  </div>
                </div>
              </div>
            {/* main ticket available - no sold out badge */}
          </div>

          {/* Two small sold-out tranche cards */}
          </div>
          <div className="w-full md:w-[38%] flex flex-col gap-4 sm:gap-6 h-full mt-8 sm:mt-32" style={{height: '100%'}}>
            {/* Primer tramo - sold out */}
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto rounded-xl overflow-hidden border-2 border-rose-600 bg-black flex flex-col min-h-0 shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-red-600/60 ${styles.cardHaloRed}" style={{height: '160%'}}>
              {/* Semilunas blancas laterales */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              {/* full-width sold out ribbon */}
              <div className="absolute left-0 right-0 top-3 flex justify-center pointer-events-none">
                <div className="bg-rose-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-lg shadow">Sold out</div>
              </div>
              <div className="p-3 sm:p-6 pt-8 sm:pt-12">
                <h4 className="mt-4 text-xl font-bold text-white uppercase whitespace-nowrap text-center">Abono Primer Tramo</h4>
                <p className="mt-3 text-gray-400 text-center">Entrada del primer tramo — actualmente <span className="text-rose-500 font-bold uppercase">AGOTADA</span>.</p>
              </div>
            </div>

            {/* Segundo tramo - sold out */}
            <div className="relative flex-1 w-full max-w-xs sm:max-w-md mx-auto rounded-xl overflow-hidden border-2 border-rose-600 bg-black flex flex-col min-h-0 h-1/2 shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-red-600/60 ${styles.cardHaloRed}" style={{height: '200%'}}>
              {/* Semilunas blancas laterales */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-inner" />
              <div className="absolute left-0 right-0 top-3 flex justify-center pointer-events-none">
                <div className="bg-rose-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-lg shadow">Sold out</div>
              </div>
              <div className="p-3 sm:p-6 pt-8 sm:pt-12">
                <h4 className="mt-4 text-xl font-bold text-white uppercase whitespace-nowrap text-center">Abono Segundo Tramo</h4>
                <p className="mt-3 text-gray-400 text-center">Entrada del segundo tramo — actualmente <span className="text-rose-500 font-bold uppercase">AGOTADA</span>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-8" />

        {/* <div className="mt-6 text-center text-gray-400 text-sm">
          <span className="font-semibold text-white">+20.000</span> asistentes felices — pagado seguro • devolución hasta 14 días antes
        </div> */}
      </div>
    </section>
  );
};

export default HomeTicketsSection;
