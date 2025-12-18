import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type BannerItem = {
  id?: string;
  message: string;
  ctaText?: string;
  ctaLink?: string;
};

type BannerProps = {
  items?: BannerItem[];
  rotateMs?: number;
  id?: string;
};

const defaultItems: BannerItem[] = [
  { message: 'COMPRA TUS TICKETS', ctaText: 'Comprar', ctaLink: '/tickets' },
];

const Banner: React.FC<BannerProps> = ({ items = defaultItems, rotateMs = 4000, id = 'site-banner' }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const mounted = useRef(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sampleRef = useRef<HTMLSpanElement | null>(null);
  const [repeatCount, setRepeatCount] = useState(8);
  const [marqueeDuration, setMarqueeDuration] = useState(28);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false };
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const tick = () => setIndex((i) => (i + 1) % items.length);
    const interval = setInterval(() => {
      if (!paused && mounted.current) tick();
    }, rotateMs);
    return () => clearInterval(interval);
  }, [items.length, rotateMs, paused]);

  useLayoutEffect(() => {
    const calc = () => {
      const container = containerRef.current;
      const sample = sampleRef.current;
      if (!container || !sample) return;
      const containerW = container.getBoundingClientRect().width || container.offsetWidth;
      const itemW = sample.getBoundingClientRect().width || sample.offsetWidth || 200;
      if (itemW <= 0) return;
      const count = Math.ceil(containerW / itemW) + 2;
      const finalCount = Math.max(3, count);
      setRepeatCount(finalCount);
      const pxPerSecond = 80; // lower = slower
      const distance = containerW + itemW * finalCount;
      const seconds = Math.max(12, Math.round(distance / pxPerSecond));
      setMarqueeDuration(seconds);
    };

    calc();
    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver(calc);
      if (containerRef.current) ro.observe(containerRef.current);
    } catch (e) {
      window.addEventListener('resize', calc);
    }

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', calc);
    };
  }, [items]);

  return (
    <div className="w-full">
      <div className="w-full rounded-b-2xl p-0.5 bg-gradient-to-r from-[#bfbfbf] via-[#e6e6e6] to-[#ffffff] overflow-hidden shadow-sm">
        <div
          className="relative w-full h-10 md:h-11 lg:h-12 overflow-hidden shadow-lg z-[45] cursor-pointer rounded-b-2xl bg-transparent"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={() => navigate(items[index]?.ctaLink ?? '/tickets')}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { navigate(items[index]?.ctaLink ?? '/tickets'); } }}
        >
          {/* metallic shine overlay (static base + animated highlight) */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-b-2xl overflow-hidden">
            {/* subtle static sheen to give general metallic feel */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0) 60%)', mixBlendMode: 'overlay', opacity: 0.9 }} />
            {/* moving highlight */}
                <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: '-70%',
                height: '100%',
                width: '60%',
                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%)',
                transform: 'skewY(-2deg)',
                opacity: 0.9,
                animation: paused ? 'none' : `shimmer 14s linear infinite`
              }}
            />
            <style>{`@keyframes shimmer { from { transform: translateX(-70%) skewY(-2deg);} to { transform: translateX(170%) skewY(-2deg);} }`}</style>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
            <style>{`@keyframes marquee2 { 0% { transform: translateX(0%);} 100% { transform: translateX(-50%);} }`}</style>
            <div ref={containerRef} className="h-10 md:h-11 lg:h-12 w-full overflow-hidden">
              {items.map((it, i) => (
                <div key={i} className={`w-full h-full ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden={i === index ? 'false' : 'true'}>
                  <div className="h-full flex items-center">
                    <div
                      className="inline-block marquee-track"
                      style={{
                        whiteSpace: 'nowrap',
                        animation: `${paused ? 'none' : `marquee2 ${marqueeDuration}s linear infinite`}`,
                        animationDelay: paused ? undefined : `-${Math.max(0, Math.round(marqueeDuration / 2))}s`,
                      }}
                    >
                      {/* Siempre mostrar el formato animado con icono */}
                      <>
                        <span ref={sampleRef} style={{ position: 'absolute', left: -9999, top: 0, whiteSpace: 'nowrap', visibility: 'hidden' }} className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide text-white mr-3">
                          {it.message}
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M21 10V8a2 2 0 0 0-2-2h-2.2a1 1 0 0 1-.98-.8L14.4 2H9.6l-1.42 3.2a1 1 0 0 1-.98.8H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h2.2a1 1 0 0 1 .98.8L9.6 22h4.8l1.42-3.2a1 1 0 0 1 .98-.8H19a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4z" fill="#FFFFFF"/>
                          </svg>
                        </span>
                        {Array.from({ length: repeatCount }).map((_, k) => (
                          <span key={`a-${k}`} className="inline-flex items-center pr-8">
                            <span className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide text-white mr-3">{it.message}</span>
                            <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M21 10V8a2 2 0 0 0-2-2h-2.2a1 1 0 0 1-.98-.8L14.4 2H9.6l-1.42 3.2a1 1 0 0 1-.98.8H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h2.2a1 1 0 0 1 .98.8L9.6 22h4.8l1.42-3.2a1 1 0 0 1 .98-.8H19a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4z" fill="#FFFFFF"/>
                            </svg>
                          </span>
                        ))}
                        {Array.from({ length: repeatCount }).map((_, k) => (
                          <span key={`b-${k}`} className="inline-flex items-center pr-8">
                            <span className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide text-white mr-3">{it.message}</span>
                            <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M21 10V8a2 2 0 0 0-2-2h-2.2a1 1 0 0 1-.98-.8L14.4 2H9.6l-1.42 3.2a1 1 0 0 1-.98.8H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h2.2a1 1 0 0 1 .98.8L9.6 22h4.8l1.42-3.2a1 1 0 0 1 .98-.8H19a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4z" fill="#FFFFFF"/>
                            </svg>
                          </span>
                        ))}
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
