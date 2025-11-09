import React from 'react';

const AvancesVideo: React.FC = () => {
  return (
    <section className="py-6 sm:py-10">
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* thin black line above the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />

          {/* Title just before the video */}
            <div className="w-full text-center mt-6 mb-6">
              {/* Replaced image with large text title as requested */}
              <h2 className="mx-auto text-white font-extrabold uppercase tracking-wider px-4"
                  style={{
                    fontSize: 'clamp(2.25rem, 6vw, 5rem)',
                    lineHeight: 1.02,
                  }}>
                PRIMERAS CONFIRMACIONES
              </h2>
            </div>

          {/* On small screens we use object-contain and let the container size to auto so the video is not cropped.
              On larger screens we keep a taller fixed-height hero and use object-cover for a cinematic look. */}
          <div className="relative w-full h-auto sm:h-[55vh] md:h-[60vh] lg:h-[70vh] rounded-none sm:rounded-lg overflow-hidden bg-black">
            <video
              poster="/img/POSTINFOFINAL_AQS.jpg"
              className="w-full h-full object-contain sm:object-cover object-center bg-black"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              aria-label="Video de avances Aquasella"
            >
              {/* Prefer WebM for modern browsers (better compression). If you add avances.webm to public/videos, the browser will pick it. */}
              <source src="/videos/avances.webm" type="video/webm" />
              <source src="/videos/avances.mp4" type="video/mp4" />
            </video>
          </div>

          {/* thin black line below the video */}
          <div className="w-full h-1 sm:h-1 bg-black" />
        </div>
      </div>
    </section>
  );
};

export default AvancesVideo;
