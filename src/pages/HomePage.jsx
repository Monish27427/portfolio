import React from 'react';
import PageSEO from '../components/layout/PageSEO';
import Hero from '../components/home/Hero';
import Capabilities from '../components/home/Capabilities';
import FeaturedProject from '../components/home/FeaturedProject';
import ClosingCTA from '../components/home/ClosingCTA';

export default function HomePage() {
  return (
    <div className="home-page">
      <PageSEO
        title="Monish P | Web Developer & AI-Assisted Frontend Developer"
        description="I'm Monish P, a web developer focused on creating modern, responsive websites for businesses and personal brands using React, Vite, and AI-assisted workflows."
      />
      <Hero />
      <Capabilities />
      <FeaturedProject />
      <ClosingCTA />
    </div>
  );
}
