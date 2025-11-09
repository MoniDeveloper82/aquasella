import React from 'react';

const AvancesVideo: React.FC = () => {
  return (
    <section className="py-6 sm:py-10">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* thin black line above the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />

          {/* Title just before the video */}
          <div className="w-full text-center mt-4 mb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase metallic-title">PRIMERAS CONFIRMACIONES</h2>
          </div>

          {/* metallic title styles scoped to this component */}
          <style>{`
            .metallic-title {
              background-image: linear-gradient(180deg, #f8fafc 0%, #e6e6e6 22%, #cfcfcf 44%, #ffffff 60%, #e9e9e9 78%, #bfbfbf 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              color: transparent;
              display: inline-block;
              position: relative;
              text-shadow: 0 1px 0 rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.6);
            }
            .metallic-title::after {
              content: '';
              position: absolute;
              left: -120%;
              top: 0;
              width: 220%;
              height: 100%;
              background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
              transform: skewX(-18deg) translateX(0);
              opacity: 0.6;
              pointer-events: none;
              transition: transform 1.6s ease;
            }
            .metallic-title:hover::after { transform: skewX(-18deg) translateX(30%); }
            @media (max-width: 640px) {
              .metallic-title { text-shadow: 0 1px 0 rgba(255,255,255,0.5), 0 1px 6px rgba(0,0,0,0.6); }
              .metallic-title::after { opacity: 0.45; }
            }
          `}</style>

          {/* On small screens we use object-contain and let the container size to auto so the video is not cropped.
              On larger screens we keep a taller fixed-height hero and use object-cover for a cinematic look. */}
          <div className="relative w-full h-auto sm:h-[55vh] md:h-[60vh] lg:h-[70vh] rounded-none sm:rounded-lg overflow-hidden bg-black">
            <video
              src="/videos/avances.mp4"
              poster="/img/POSTINFOFINAL_AQS.jpg"
              className="w-full h-full object-contain sm:object-cover object-center bg-black"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              aria-label="Video de avances Aquasella"
            />
          </div>

          {/* thin black line below the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />
        </div>
      </div>
    </section>
  );
};

export default AvancesVideo;
