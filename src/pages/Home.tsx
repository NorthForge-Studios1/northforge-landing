import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { FeaturedSection } from '../components/landing/FeaturedSection';
import { OurProductsSection } from '../components/landing/OurProductsSection';
import { PublishSection } from '../components/landing/PublishSection';
import { AboutSection } from '../components/landing/AboutSection';

const Home: React.FC = () => {
  console.log("Welcome to NorthForge Landing!");
  
  return (
    <div style={{ position: 'relative' }}>
      <HeroSection />
      <FeaturedSection />
      <OurProductsSection />
      <PublishSection />
      <AboutSection />
    </div>
  );
};

export default Home;
