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
      <div style={{
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
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        borderTop: '4px solid #b91c1c',
        borderBottom: '4px solid #b91c1c',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07), 0 0 16px 2px #dc2626, 0 0 32px 4px #b91c1c'
      }}>
        CUENTA ATRÁS AQUASELLA 2026
      </div>
      <Countdown />
      {/* Raya roja fina con degradado igual que PRIMERAS CONFIRMACIONES */}
      <div
        style={{
          width: '100%',
          height: '32px',
          background: 'linear-gradient(90deg, #7f1d1d 0%, #b91c1c 50%, #a94444 100%)',
          margin: 0,
          border: 'none',
        }}
      />
      <HomeMain />
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
          <PartnersStrip />
        </div>
      </div>
    </>
  );
};

export default HomePage;