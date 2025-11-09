import React from 'react';
import VideoHero from '../components/VideoHero';
import AvancesVideo from '../components/AvancesVideo';
import HomeTicketsSection from '../components/HomeTicketsSection';
import LocationSection from '../components/LocationSection';
import PartnersStrip from '../components/PartnersStrip';

const HomePage: React.FC = () => {
  return (
    <>
      <VideoHero />
      <div 
        className="relative min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 20%, #dc2626 40%, #ef4444 60%, #f87171 80%, #fca5a5 100%)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30"></div>
        <div className="relative z-10">
          <AvancesVideo />
          <HomeTicketsSection />
          <LocationSection />
          <PartnersStrip />
        </div>
      </div>
    </>
  );
};

export default HomePage;