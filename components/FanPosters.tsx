import React, { useState, useEffect } from "react";

type Poster = { src: string; title?: string };

function FanRow({
  items,
  title,
  isLargeTitle = false,
  onPosterClick,
}: {
  items: Poster[];
  title?: string;
  isLargeTitle?: boolean;
  onPosterClick: (poster: Poster) => void;
}) {
  // Valores responsive para el abanico
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
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
  // Estado para el lightbox con navegación y zoom
  const [lightboxState, setLightboxState] = useState<{
    poster: Poster;
    index: number;
    allPosters: Poster[];
    zoom: number;
    isAnimating: boolean;
  } | null>(null);

  // Función para abrir lightbox con navegación
  const openLightbox = (poster: Poster, allPosters: Poster[]) => {
    const index = allPosters.findIndex(p => p.src === poster.src);
    setLightboxState({
      poster,
      index,
      allPosters,
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

  // Función para ir al siguiente cartel
  const nextPoster = () => {
    if (!lightboxState) return;
    const nextIndex = (lightboxState.index + 1) % lightboxState.allPosters.length;
    setLightboxState({
      ...lightboxState,
      poster: lightboxState.allPosters[nextIndex],
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
    const prevIndex = lightboxState.index === 0 ? lightboxState.allPosters.length - 1 : lightboxState.index - 1;
    setLightboxState({
      ...lightboxState,
      poster: lightboxState.allPosters[prevIndex],
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
    src: `img/${1997 + i}.jpg`,
    title: `Festival ${1997 + i}`,
  }));

  // Segundo abanico: 2005-2012
  const posters2005_2012: Poster[] = Array.from({ length: 8 }).map((_, i) => ({
    src: `img/${2005 + i}.jpg`,
    title: `Festival ${2005 + i}`,
  }));

  // Tercer abanico: 2013-2015, 2022-2024
  const posters2013_2025: Poster[] = [
    { src: 'img/2013.jpg', title: 'Festival 2013' },
    { src: 'img/2014.jpg', title: 'Festival 2014' },
    { src: 'img/2015.jpg', title: 'Festival 2015' },
    { src: 'img/2022.png', title: 'Festival 2022' },
    { src: 'img/2023.png', title: 'Festival 2023' },
    { src: 'img/2024.png', title: 'Festival 2024' },
  ];

  return (
    <section className="w-full py-16 overflow-visible">
      <h2 className="text-center text-white text-2xl md:text-5xl font-extrabold tracking-widest uppercase mb-32">
        Carteles de Festivales
      </h2>

      <div className="flex flex-col gap-10 md:gap-14 overflow-visible">
        <FanRow items={posters1997_2004} title="Carteles de 1997 a 2004" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters1997_2004)} />
        <FanRow items={posters2005_2012} title="Carteles de 2005 a 2012" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters2005_2012)} />
        <FanRow items={posters2013_2025} title="Carteles de 2013 a 2025" isLargeTitle={true} onPosterClick={(poster) => openLightbox(poster, posters2013_2025)} />
      </div>

      {/* LIGHTBOX / MODAL CON ANIMACIONES AVANZADAS */}
      {lightboxState && (
        <div
          className={`fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center transition-opacity duration-300 ${
            lightboxState.isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeLightbox}
        >
          {/* Flecha anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPoster(); }}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl hover:text-red-500 transition opacity-70 hover:opacity-100 z-10"
          >
            ‹
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
            onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
            onTouchEnd={handleSwipe}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* Botón reset zoom */}
            {lightboxState.zoom !== 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxState({ ...lightboxState, zoom: 1 });
                }}
                className="absolute -top-12 right-12 text-white text-xl md:text-2xl hover:text-red-500 transition"
                title="Reset zoom"
              >
                🔍
              </button>
            )}

            {/* Imagen con animación y zoom */}
            <img
              src={lightboxState.poster.src}
              alt={lightboxState.poster.title}
              className={`max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_60px_rgba(255,0,0,0.35)] transition-transform duration-300 ${
                lightboxState.isAnimating ? 'scale-75' : 'scale-100'
              }`}
              style={{
                transform: `scale(${lightboxState.zoom})`,
                cursor: lightboxState.zoom > 1 ? 'zoom-out' : 'zoom-in'
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (lightboxState.zoom > 1) {
                  setLightboxState({ ...lightboxState, zoom: 1 });
                }
              }}
            />

            {/* Título con contador */}
            <p className="text-center text-gray-300 mt-4 text-sm tracking-wide">
              {lightboxState.poster.title} ({lightboxState.index + 1} / {lightboxState.allPosters.length})
            </p>

            {/* Indicador de zoom */}
            {lightboxState.zoom !== 1 && (
              <p className="text-center text-gray-400 mt-2 text-xs md:text-sm">
                Zoom: {Math.round(lightboxState.zoom * 100)}% - Click para reset
              </p>
            )}

            {/* Indicador de swipe para móvil */}
            <p className="text-center text-gray-500 mt-1 text-xs md:hidden">
              ← Swipe para navegar →
            </p>
          </div>

          {/* Flecha siguiente */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPoster(); }}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl hover:text-red-500 transition opacity-70 hover:opacity-100 z-10"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
