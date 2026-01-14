import React from "react";

type Poster = { src: string; title?: string };

function FanRow({
  items,
  title,
  isLargeTitle = false,
}: {
  items: Poster[];
  title?: string;
  isLargeTitle?: boolean;
}) {
  const spread = 54;      // apertura del abanico
  const curve = 22;       // cuánto bajan los extremos
  const liftCenter = -10; // sube el centro un pelín
  const mid = (items.length - 1) / 2;

  return (
    <div className="w-full overflow-visible">
      {/* TÍTULO - SIEMPRE POR ENCIMA */}
      {title && (
        <h3 className={`relative z-20 text-center font-extrabold tracking-widest uppercase mb-10 md:mb-14 ${
          isLargeTitle
            ? 'text-white text-2xl md:text-4xl'
            : 'text-white/90 text-xl md:text-3xl'
        }`}>
          {title}
        </h3>
      )}

      {/* ABANICO - DEBAJO DEL TÍTULO */}
      <div className="relative z-10 mx-auto overflow-visible h-[360px] md:h-[520px] max-w-6xl">
        {items.map((p, i) => {
          const offset = i - mid;          // -4..+4 (si 9)
          const t = mid === 0 ? 0 : offset / mid; // -1..1
          const angle = t * spread;

          // curva parabólica: extremos abajo, centro arriba
          const y = Math.pow(Math.abs(t), 1.6) * curve + liftCenter;

          // separación lateral
          const x = offset * 38;

          // ✅ z-index bajo para no interferir con títulos de otros bloques
          const z = 20 - Math.abs(offset) * 2;

          return (
            <div
              key={p.src}
              className="absolute bottom-16 md:bottom-24 left-1/2"
              style={{
                transform: `translateX(${x}px) translateX(-50%) translateY(${y}px) rotate(${angle}deg)`,
                transformOrigin: "50% 100%",
                zIndex: z,
              }}
            >
              <div
                className="
                  w-[150px] h-[225px]
                  md:w-[220px] md:h-[330px]
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

  return (
    <section className="w-full py-16 overflow-visible">
      <h2 className="text-center text-white text-2xl md:text-5xl font-extrabold tracking-widest uppercase mb-32">
        Carteles de Festivales
      </h2>

      <div className="flex flex-col gap-10 md:gap-14 overflow-visible">
        <FanRow items={posters1997_2004} title="Carteles de 1997 a 2004" isLargeTitle={true} />
        <FanRow items={posters2005_2012} title="Carteles de 2005 a 2012" isLargeTitle={true} />
        <FanRow items={posters2013_2025} title="Carteles de 2013 a 2025" isLargeTitle={true} />
      </div>
    </section>
  );
}