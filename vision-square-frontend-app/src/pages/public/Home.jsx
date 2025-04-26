import React from "react";
import HeroSlider from "../../components/home/HeroSlider";
import WhoWeAre from "../../components/home/WhoWeAre";
import HomepageVideos from "../../components/home/HomepageVideos";

const Home = () => {
  return (
    <main className="text-gray-800">
      <HeroSlider />

      {/* Welcome Section - Updated for full-width bg */}
      <section className="bg-background py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Welcome to <span className="text-red-700">Vision Square</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral mb-6 max-w-3xl mx-auto">
            At Vision Square, we guide your journey to international education
            success with expertise, care, and results. From dreams to
            destinations, "You Dream It, We Nail It!" — empowering futures
            through trusted guidance and global opportunities.
          </p>
        </div>
      </section>

      <WhoWeAre />

      {/* Promotional Videos Section - Updated for full-width bg */}
      <section className="mt-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto">
          <HomepageVideos />
        </div>
      </section>
    </main>
  );
};

export default Home;
