"use client";

import FeatureSection from "./FeatureSection";
import FinalSection from "./FinalSection";
import Header from "./Header";
import HeroSection from "./HeroSection";

// Main container combining all homepage sections (Header, Hero, Feature, Final).

const Main = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <HeroSection />
      <FeatureSection />
      <FinalSection />
    </div>
  );
};

export default Main;
