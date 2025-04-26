import React from 'react';
import ComponentReader from '../ui/ComponentReader';
import VisionImage from '../../assets/images/OurVision.jpg';

const OurVision = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ComponentReader
        imagePosition="left"
        heading="Our Vision"
        headingColor="text-blue-950"
        headingSize="text-3xl sm:text-4xl font-extrabold tracking-tight"
        image={VisionImage}
        imageHeight="h-full" // Ensures image matches text height
        imageRounded="rounded-2xl border-4 border-white shadow-xl"
        imageClassName="hover:scale-105 transition-transform duration-500 ease-in-out"
        border="border-0"
        bgColor="bg-gradient-to-r from-gray-100 to-blue-100"
        paragraphs={[
          "At Vision Square Abroad Consultancy, our vision is to be a trusted gateway for individuals seeking opportunities abroad. We are dedicated to guiding our clients in their journey toward international education, employment, settlement, and travel. By offering clear, reliable, and personalized support, we aim to simplify the process of going global. Our focus is to empower people to pursue their dreams with confidence and ease, making international transitions smooth and successful. We are committed to providing ongoing support at every stage, ensuring our clients feel secure and supported throughout their journey."
        ]}
        paragraphClassName="text-base md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed"
        className="mb-8 hover:shadow-2xl rounded-xl transition-shadow"
      />
    </div>
  );
};

export default OurVision;
