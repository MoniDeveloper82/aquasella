import React, { useState, useEffect } from "react";

type Poster = { src: string; title?: string };

function FanRow({
  items,
  title,
  isLargeTitle = false,
  onPosterClick,
  isMobile = false,
}: {
  items: Poster[];
  title?: string;
  isLargeTitle?: boolean;
  onPosterClick: (poster: Poster) => void;
  isMobile?: boolean;
}) {
  // Valores responsive para el abanico
  const spread = isMobile ? 38 : 56;       // menos apertura en móvil
  const curve = isMobile ? 14 : 22;        // menos curva
  const xStep = isMobile ? 26 : 44;        // menos separación lateral
  const liftCenter = isMobile ? -6 : -10;  // centro un pelín menos arriba

  const mid = (items.length - 1) / 2;

  return (
    <div className="w-full overflow-visible">
      {/* TÍTULO - SIEMPRE POR ENCIMA */}
      {title && (
        <>
          <h3 className={`relative z-20 text-center font-extrabold tracking-widest uppercase mt-6 sm:mt-10 md:mt-12 mb-10 md:mb-14 ${
            isLargeTitle
              ? 'text-white text-2xl md:text-4xl'
              : 'text-white/90 text-xl md:text-3xl'
          }`}>
            {title}
          </h3>

          {/* Placa 3D decorativa */}
          <div
            className="relative mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6 rounded-full shadow-lg"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-full blur-sm"></div>
          </div>
        </>
      )}

      {/* ABANICO - DEBAJO DEL TÍTULO */}
      <div className="relative z-10 mx-auto overflow-visible h-[260px] sm:h-[320px] md:h-[520px] max-w-6xl pt-4 sm:pt-6 md:pt-10">
        {items.map((p, i) => {
          const offset = i - mid;          // -4..+4 (si 9)
          const t = mid === 0 ? 0 : offset / mid; // -1..1
          const angle = t * spread;

          // curva parabólica: extremos abajo, centro arriba
          const y = Math.pow(Math.abs(t), 1.35) * curve + liftCenter;

          // separación lateral
          const x = offset * 38;

          // ✅ z-index bajo para no interferir con títulos de otros bloques
          const z = 20 - Math.abs(offset) * 2;

          return (
            <div
              key={p.src}
              className="absolute bottom-16 md:bottom-24 left-1/2 cursor-pointer"
              onClick={() => onPosterClick(p)}
              style={{
                bottom: isMobile ? 18 : 48,
                transform: `translateX(${x}px) translateX(-50%) translateY(${y}px) rotate(${angle}deg)`,
                transformOrigin: "50% 100%",
                zIndex: z,
              }}
            >
              <div
                className="
                  w-[92px] h-[140px]
                  sm:w-[120px] sm:h-[180px]
                  md:w-[230px] md:h-[345px]
                  rounded-2xl overflow-hidden
                  border border-white/10
                  shadow-[0_16px_55px_rgba(0,0,0,0.75)]
                  transition-transform duration-300
                  hover:-translate-y-4 hover:scale-[1.06]
                "
                style={{
                  boxShadow:
                    "0 18px 60px rgba(0,0,0,0.75), 0 0 30px rgba(220,38,38,0.18)",
                }}
              >
                <img
                  src={p.src}
                  alt={p.title ?? "Poster"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FanPosters() {
  // Estado para detectar móvil (mejor que window.innerWidth directo)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Estado para el lightbox con navegación y zoom
  const [lightboxState, setLightboxState] = useState<{
    poster: Poster;
    index: number;
    posters: Poster[]; // array específico del abanico
    zoom: number;
    isAnimating: boolean;
  } | null>(null);

  // Función para abrir lightbox con navegación por abanico
  const openLightbox = (poster: Poster, posters: Poster[]) => {
    const index = posters.findIndex(p => p.src === poster.src);
    setLightboxState({
      poster,
      index,
      posters,
      zoom: 1,
      isAnimating: true
    });
    // Remover animación después de 300ms
    setTimeout(() => {
      setLightboxState(prev => prev ? { ...prev, isAnimating: false } : null);
    }, 300);
  };

  // Función para cerrar lightbox
  const closeLightbox = () => {
    setLightboxState(null);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Estados para swipe en móvil
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Función para manejar swipe
  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextPoster();
    if (isRightSwipe) prevPoster();
  };

  // Función para manejar zoom con rueda del mouse
  const handleZoom = (deltaY: number) => {
    if (!lightboxState) return;
    const zoomFactor = deltaY > 0 ? 0.9 : 1.1; // zoom out si scroll down, in si up
    const newZoom = Math.max(0.5, Math.min(3, lightboxState.zoom * zoomFactor));
    setLightboxState({ ...lightboxState, zoom: newZoom });
  };

  // Función para ir al siguiente cartel
  const nextPoster = () => {
    if (!lightboxState) return;
    const nextIndex = (lightboxState.index + 1) % lightboxState.posters.length;
    setLightboxState({
      ...lightboxState,
      poster: lightboxState.posters[nextIndex],
      index: nextIndex,
      zoom: 1,
      isAnimating: true
    });
    setTimeout(() => {
      setLightboxState(prev => prev ? { ...prev, isAnimating: false } : null);
    }, 300);
  };

  // Función para ir al cartel anterior
  const prevPoster = () => {
    if (!lightboxState) return;
    const prevIndex = lightboxState.index === 0 ? lightboxState.posters.length - 1 : lightboxState.index - 1;
    setLightboxState({
      ...lightboxState,
      poster: lightboxState.posters[prevIndex],
      index: prevIndex,
      zoom: 1,
      isAnimating: true
    });
    setTimeout(() => {
      setLightboxState(prev => prev ? { ...prev, isAnimating: false } : null);
    }, 300);
  };

  // Manejo de teclado y rueda del mouse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevPoster();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextPoster();
          break;
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!lightboxState) return;
      e.preventDefault();
      handleZoom(e.deltaY);
    };

    if (lightboxState) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('wheel', handleWheel);
      };
    }
  }, [lightboxState]);

  // Primer abanico: 1997-2004
  const posters1997_2004: Poster[] = Array.from({ length: 8 }).map((_, i) => ({
    src: `/img/${1997 + i}.jpg`,
    title: `Festival ${1997 + i}`,
  }));

  // Segundo abanico: 2005-2012
  const posters2005_2012: Poster[] = Array.from({ length: 8 }).map((_, i) => ({
    src: `/img/${2005 + i}.jpg`,
    title: `Festival ${2005 + i}`,
  }));

  // Tercer abanico: 2013-2015, 2022-2024
  const posters2013_2025: Poster[] = [
    { src: '/img/2013.jpg', title: 'Festival 2013' },
    { src: '/img/2014.jpg', title: 'Festival 2014' },
    { src: '/img/2015.jpg', title: 'Festival 2015' },
    { src: '/img/2022.png', title: 'Festival 2022' },
    { src: '/img/2023.png', title: 'Festival 2023' },
    { src: '/img/2024.png', title: 'Festival 2024' },
  ];

  // Array único con TODOS los posters para navegación global
  const allPosters = [...posters1997_2004, ...posters2005_2012, ...posters2013_2025];

  return (
    <section className="w-full py-16 overflow-visible">
      <h2 className="text-center text-white text-2xl md:text-5xl font-extrabold tracking-widest uppercase mb-32">
        Carteles de Festivales
      </h2>

      <div className="flex flex-col gap-10 md:gap-14 overflow-visible">
        <FanRow items={posters1997_2004} title="Carteles de 1997 a 2004" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters1997_2004)} isMobile={isMobile} />
        <FanRow items={posters2005_2012} title="Carteles de 2005 a 2012" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters2005_2012)} isMobile={isMobile} />
        <FanRow items={posters2013_2025} title="Carteles de 2013 a 2025" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters2013_2025)} isMobile={isMobile} />
      </div>

      {/* LIGHTBOX / MODAL CON ANIMACIONES AVANZADAS */}
      {lightboxState && (
        <div
          className={`fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 overflow-auto transition-opacity duration-300 ${
            lightboxState.isAnimating ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeLightbox}
        >
          {/* X CERRAR - EN EL CENTRO ARRIBA PARA MAXIMA VISIBILIDAD */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('X clicked');
              closeLightbox();
            }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[10010] bg-red-600 text-white hover:bg-red-700 rounded-full w-24 h-24 flex items-center justify-center text-5xl font-black shadow-2xl border-4 border-white"
            title="CERRAR - CLICK AQUÍ"
          >
            ✕
          </button>

          {/* FRAME: aquí dentro se posicionan flechas RELATIVAS AL CARTEL */}
          <div
            className="relative mx-auto w-fit max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
            onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
            onTouchEnd={handleSwipe}
          >
            {/* Flecha anterior (fuera del frame para evitar clicks accidentales) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPoster();
              }}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-[10002] text-white text-5xl md:text-6xl hover:text-red-500 transition bg-black/70 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg"
              title="Cartel anterior"
            >
              ‹
            </button>

            {/* Flecha siguiente (fuera del frame para evitar clicks accidentales) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPoster();
              }}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-[10002] text-white text-5xl md:text-6xl hover:text-red-500 transition bg-black/70 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg"
              title="Siguiente cartel"
            >
              ›
            </button>

            {/* Imagen (usa vh alto para que no tape controles) */}
            <img
              src={lightboxState.poster.src}
              alt={lightboxState.poster.title}
              className={`block max-w-[95vw] max-h-[80vh] object-contain rounded-xl shadow-[0_0_60px_rgba(255,0,0,0.35)] transition-transform duration-300 ${
                lightboxState.isAnimating ? "scale-75" : "scale-100"
              }`}
              style={{
                transform: `scale(${lightboxState.zoom})`,
                cursor: lightboxState.zoom > 1 ? "zoom-out" : "zoom-in",
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (lightboxState.zoom > 1) setLightboxState({ ...lightboxState, zoom: 1 });
              }}
              draggable={false}
            />

            {/* Reset zoom: evita -top-12 (se perdía arriba). Lo ponemos dentro */}
            {lightboxState.zoom !== 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxState({ ...lightboxState, zoom: 1 });
                }}
                className="absolute bottom-2 right-2 z-[10002] bg-black/60 text-white hover:text-red-400 rounded-full px-3 py-2 text-sm md:text-base"
                title="Reset zoom"
              >
                🔍 Reset
              </button>
            )}

            {/* Info abajo */}
            <div className="text-center mt-4">
              <p className="text-white text-lg md:text-xl font-semibold tracking-wide mb-2">
                {lightboxState.poster.title}
              </p>
              <p className="text-gray-300 text-sm md:text-base bg-black/50 px-4 py-2 rounded-full inline-block">
                🖼️ {lightboxState.index + 1} de {lightboxState.posters.length} carteles
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                ← → Usa las flechas • Click en imagen para zoom
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


