import React from "react";
import AboutUs from "../../components/about/AboutUs";
import OurMission from "../../components/about/OurMission";
import OurVision from "../../components/about/OurVision";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutUs />
      <OurMission />
      <OurVision />
      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
