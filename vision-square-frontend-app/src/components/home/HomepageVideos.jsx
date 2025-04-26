import React from "react";
import { FaYoutube } from "react-icons/fa";

const HomepageVideos = () => {
  const videoId_1 = "Zuh0NmxVknA";
  const videoId_2 = "HqPJ9DB3b_A";

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-indigo-50 to-white"> {/* New gradient background */}
      <div className="container mx-auto px-4">
        {/* Section Header - Updated styling */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral mt-4 mb-6"> {/* Indigo text */}
            Make Your Dreams a Reality @ Vision Square
          </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Watch our latest videos showcasing student success stories and expert guidance. Discover how Vision Square can help you achieve your academic and career aspirations with our tailored services and global expertise.
            </p>
          </div>

              {/* Video Cards - Enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[{
            id: videoId_1,
            title: "VSAC | Integrated Services",
            desc: "Comprehensive student visa and education consulting services tailored to your academic and career goals."
          }, {
            id: videoId_2,
            title: "Vision Square Expertise",
            desc: "Empowering students with expert guidance, global partnerships, and proven success in international education journeys."
          }].map((video, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100" /* Added border */
            >
              <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(79,70,229,0.1)]"> {/* Indigo shadow */}
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-indigo-900 mb-2"> {/* Indigo text */}
                  {video.title}
                </h3>
                <p className="text-gray-800"> {/* Indigo text */}
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Updated color scheme */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <FaYoutube className="text-lg" />
            Subscribe to Our Channel
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageVideos;