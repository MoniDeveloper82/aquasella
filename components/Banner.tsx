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
  id?: string; // key for persistence
};

const defaultItems: BannerItem[] = [
  { message: 'PROXIMOS TICKETS', ctaText: 'Comprar', ctaLink: '/tickets' },
];

const Banner: React.FC<BannerProps> = ({ items = defaultItems, rotateMs = 4000, id = 'site-banner' }) => {
  // banner always visible (no close button)
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const mounted = useRef(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sampleRef = useRef<HTMLSpanElement | null>(null);
  const [repeatCount, setRepeatCount] = useState(8);
  const [marqueeDuration, setMarqueeDuration] = useState(28); // seconds, default slower

  // no persistence / close button: banner always visible

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false };
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const tick = () => {
      setIndex((i) => (i + 1) % items.length);
    };

    const interval = setInterval(() => {
      if (!paused && mounted.current) tick();
    }, rotateMs);

    return () => clearInterval(interval);
  }, [items.length, rotateMs, paused]);

  // dynamic repetition: calculate how many message+icon blocks fit in the container
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
      // compute duration so perceived speed is roughly constant (px per second)
      const pxPerSecond = 80; // tweak to taste: lower => slower
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
      // ResizeObserver not available, fallback to window resize
      window.addEventListener('resize', calc);
    }

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', calc);
    };
  }, [index, items]);

  return (
    <div className="w-full">
  {/* give the banner an explicit height so absolute background doesn't collapse the container */}
  <div
      className="relative w-full h-12 md:h-14 lg:h-16 overflow-hidden shadow-lg rounded-b-2xl z-[45] cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => navigate(items[index]?.ctaLink ?? '/tickets')}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { navigate(items[index]?.ctaLink ?? '/tickets'); } }}
    >
        {/* full-bleed marquee background */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
          <style>{`@keyframes marquee { from { transform: translateX(100%);} to { transform: translateX(-100%);} }`}</style>
          <div ref={containerRef} className="h-12 md:h-14 lg:h-16 w-full overflow-hidden">
            {items.map((it, i) => (
              <div key={i} className={`w-full h-full ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden={i === index ? 'false' : 'true'}>
                <div className="h-full flex items-center">
                    <div
                      className="inline-block"
                      style={{
                        whiteSpace: 'nowrap',
                        animation: `${paused ? 'none' : `marquee ${marqueeDuration}s linear infinite`}`,
                        animationDelay: paused ? undefined : `-${Math.max(0, Math.round(marqueeDuration / 2))}s`,
                      }}
                    >
                    {it.message && it.message.toUpperCase().includes('PROXIMOS TICKETS') ? (
                      // sample element (offscreen) so we can measure width
                      <>
                        <span ref={sampleRef} style={{ position: 'absolute', left: -9999, top: 0, whiteSpace: 'nowrap', visibility: 'hidden' }} className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide text-white mr-3">
                          {it.message}
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M21 10V8a2 2 0 0 0-2-2h-2.2a1 1 0 0 1-.98-.8L14.4 2H9.6l-1.42 3.2a1 1 0 0 1-.98.8H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h2.2a1 1 0 0 1 .98.8L9.6 22h4.8l1.42-3.2a1 1 0 0 1 .98-.8H19a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4z" fill="#FFFFFF"/>
                          </svg>
                        </span>
                        {Array.from({ length: repeatCount }).map((_, k) => (
                          <span key={k} className="inline-flex items-center pr-8">
                            <span className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide text-white mr-3">{it.message}</span>
                            <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M21 10V8a2 2 0 0 0-2-2h-2.2a1 1 0 0 1-.98-.8L14.4 2H9.6l-1.42 3.2a1 1 0 0 1-.98.8H5a2 2 0 0 0-2 2v2a2 2 0 0 1 0 4v2a2 2 0 0 0 2 2h2.2a1 1 0 0 1 .98.8L9.6 22h4.8l1.42-3.2a1 1 0 0 1 .98-.8H19a2 2 0 0 0 2-2v-2a2 2 0 0 1 0-4z" fill="#FFFFFF"/>
                            </svg>
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className="font-extrabold text-lg md:text-2xl lg:text-3xl tracking-wide pr-12 block text-white">{it.message}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* no close button - banner always visible */}
      </div>
    </div>
  );
};

export default Banner;
