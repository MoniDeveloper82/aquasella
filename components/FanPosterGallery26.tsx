import React from "react";

type Poster = { src: string; title: string; year: number };

const posters: Poster[] = [
  { src: "/img/1997.jpg", title: "Festival 1997", year: 1997 },
  { src: "/img/1998.jpg", title: "Festival 1998", year: 1998 },
  { src: "/img/1999.jpg", title: "Festival 1999", year: 1999 },
  { src: "/img/2000.jpg", title: "Festival 2000", year: 2000 },
  { src: "/img/2001.jpg", title: "Festival 2001", year: 2001 },
  { src: "/img/2002.jpg", title: "Festival 2002", year: 2002 },
  { src: "/img/2003.jpg", title: "Festival 2003", year: 2003 },
  { src: "/img/2004.jpg", title: "Festival 2004", year: 2004 },
  { src: "/img/2005.jpg", title: "Festival 2005", year: 2005 },
  { src: "/img/2006.jpg", title: "Festival 2006", year: 2006 },
  { src: "/img/2007.jpg", title: "Festival 2007", year: 2007 },
  { src: "/img/2008.jpg", title: "Festival 2008", year: 2008 },
  { src: "/img/2009.jpg", title: "Festival 2009", year: 2009 },
  { src: "/img/2010.jpg", title: "Festival 2010", year: 2010 },
  { src: "/img/2011.jpg", title: "Festival 2011", year: 2011 },
  { src: "/img/2012.jpg", title: "Festival 2012", year: 2012 },
  { src: "/img/2013.jpg", title: "Festival 2013", year: 2013 },
  { src: "/img/2014.jpg", title: "Festival 2014", year: 2014 },
  { src: "/img/2015.jpg", title: "Festival 2015", year: 2015 },
  { src: "/img/2016.jpg", title: "Festival 2016", year: 2016 },
  { src: "/img/2017.jpg", title: "Festival 2017", year: 2017 },
  { src: "/img/2018.jpg", title: "Festival 2018", year: 2018 },
  { src: "/img/2019.jpg", title: "Festival 2019", year: 2019 },
  { src: "/img/2022.png", title: "Festival 2022", year: 2022 },
  { src: "/img/2023.png", title: "Festival 2023", year: 2023 },
  { src: "/img/2024.png", title: "Festival 2024", year: 2024 },
];

function FanBlock({
  title,
  items,
}: {
  title: string;
  items: Poster[];
}) {
  // Ajustes del abanico (por bloque)
  const spread = 56;         // apertura
  const curve = 22;          // curva (extremos bajan)
  const xStep = 44;          // separación lateral
  const liftCenter = -10;    // sube el centro un poco

  const mid = (items.length - 1) / 2;

  return (
    <div className="w-full overflow-visible py-10 md:py-14">
      {/* ✅ Título por encima SIEMPRE */}
      <h3 className="relative z-20 text-center text-white text-xl md:text-3xl font-extrabold tracking-widest uppercase mt-10 md:mt-16 mb-10 md:mb-14">
        {title}
      </h3>

      {/* ✅ Abanico debajo */}
      <div className="relative z-10 mx-auto overflow-visible h-[360px] md:h-[520px] max-w-6xl pt-6 md:pt-10 mb-16 md:mb-24">
        {items.map((p, i) => {
          const offset = i - mid;
          const t = mid === 0 ? 0 : offset / mid; // -1..1

          const angle = t * spread;

          // curva "abanico": extremos bajan (parábola suave)
          const y = Math.pow(Math.abs(t), 1.4) * curve + liftCenter;

          // separación horizontal
          const x = offset * xStep;

          // ✅ z-index bajo, para que no tape títulos de otros bloques
          const z = 20 - Math.abs(offset) * 2;

          return (
            <div
              key={p.src}
              className="absolute bottom-0 left-1/2"
              style={{
                transform: `translateX(-50%) translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`,
                transformOrigin: "50% 100%",
                zIndex: z,
              }}
              title={p.title}
            >
              <div
                className="
                  w-[150px] h-[225px]
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
                  alt={p.title}
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
  // Bloques por épocas (ajusta rangos si quieres)
  const epoca1 = posters.filter((p) => p.year >= 1997 && p.year <= 2004);
  const epoca2 = posters.filter((p) => p.year >= 2005 && p.year <= 2012);
  const epoca3 = posters.filter((p) => p.year >= 2013); // incluye 2013..2024

  return (
    <section className="w-full my-16 py-10 overflow-visible">
      <h2 className="text-center text-white text-2xl md:text-5xl font-extrabold tracking-widest uppercase mb-12 md:mb-16">
        Carteles de Festivales
      </h2>

      <div className="flex flex-col gap-16 md:gap-20 overflow-visible">
        <FanBlock title="Carteles 1997 - 2004" items={epoca1} />
        <FanBlock title="Carteles 2005 - 2012" items={epoca2} />
        <FanBlock title="Carteles 2013 - 2024" items={epoca3} />
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        Pasa el ratón (o toca) sobre un cartel para destacarlo
      </p>
    </section>
  );
}

