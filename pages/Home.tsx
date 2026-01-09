// Cleaned up duplicate and broken code. Only the correct HomePage component remains below.
import React from 'react';
import VideoHero from '../components/VideoHero';
import Banner from '../components/Banner';
import Countdown from '../components/Countdown';
import AvancesVideo from '../components/AvancesVideo';
import HomeTicketsSection from '../components/HomeTicketsSection';
import PartnersStrip from '../components/PartnersStrip';
import HomeMain from '../components/HomeMain';

const HomePage: React.FC = () => {
  return (
    <>
      <VideoHero />
      {/* Banner fijo en NEGRO con texto, después del video */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          background: '#000',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
          textAlign: 'center',
          padding: '0.4rem 0',
          borderTop: '4px solid #b91c1c',
          borderBottom: '4px solid #b91c1c',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07), 0 0 16px 2px #dc2626, 0 0 32px 4px #b91c1c'
        }}
      >
        CUENTA ATRÁS AQUASELLA 2026
      </div>
      <Countdown />
      {/* Fondo con vertical2.png desde confirmaciones hasta tickets */}
      <div
        style={{
          backgroundImage: "url('/img/vertical2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <HomeMain />
        <AvancesVideo />
        <HomeTicketsSection />
      </div>
      <PartnersStrip />
    </>
  );
};

export default HomePage;