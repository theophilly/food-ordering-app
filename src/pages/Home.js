import React from 'react';
import LeaderBoard from '../components/home/LeaderBoard';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Homemenu from '../components/home/Homemenu';
import Testimonialsection from '../components/home/Testimonialsection';

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
