import React from 'react';
import VideoHero from '../components/VideoHero';
import HomeCarousel from '../components/HomeCarousel';
import HomeTicketsSection from '../components/HomeTicketsSection';
import LocationSection from '../components/LocationSection';
import PartnersStrip from '../components/PartnersStrip';

const HomePage: React.FC = () => {
  return (
    <>
      <VideoHero />
      <HomeCarousel />
      <HomeTicketsSection />
      <LocationSection />
      <PartnersStrip />
    </>
  );
};

export default HomePage;