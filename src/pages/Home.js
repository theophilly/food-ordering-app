import React from 'react';
import LeaderBoard from '../components/LeaderBoard';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Homemenu from '../components/Homemenu';
import Testimonialsection from '../components/Testimonialsection';

export default function Home() {
  return (
    <div>
      <LeaderBoard />
      <AboutSection />
      <WhyChooseUs />
      <Homemenu />
      <Testimonialsection />
    </div>
  );
}
