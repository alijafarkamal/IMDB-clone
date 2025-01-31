import React, { useState } from 'react';
import { Search, Menu, Star, TrendingUp, Award, PlayCircle, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import TrendingSection from './components/TrendingSection';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <TrendingSection />
    </div>
  );
}

export default App;