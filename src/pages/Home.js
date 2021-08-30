import React from 'react';
import LeaderBoard from '../components/LeaderBoard';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <LeaderBoard />
      <AboutSection />
      <WhyChooseUs />
    </div>
  );
}
