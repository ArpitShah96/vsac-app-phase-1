import React from 'react';
import ComponentReader from '../ui/ComponentReader';
import MissionImage from '../../assets/images/OurMission.jpg';

const OurMission = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ComponentReader
        imagePosition="right"
        heading="Our Mission"
        headingColor="text-red-700"
        headingSize="text-3xl sm:text-4xl font-extrabold tracking-tight"
        image={MissionImage}
        imageHeight="h-full"
        imageRounded="rounded-2xl border-4 border-white shadow-2xl"
        imageClassName="hover:scale-105 transition-transform duration-500 ease-in-out"
        border="border-0"
        bgColor="bg-gradient-to-l from-gray-50 to-blue-100"
        paragraphs={[
          "At Vision Square Abroad Consultancy, our mission is to empower students through ethical overseas education guidance by bridging the gap between talent and global academic opportunities. We are committed to simplifying the complex study abroad process through expert support and maintaining 100% transparency in all our counseling services, ensuring every student receives personalized, trustworthy advice to achieve their international education goals."
        ]}
        paragraphClassName="text-gray-600 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed"
        className="mb-12 hover:shadow-2xl transition-shadow duration-500 ease-in-out rounded-xl"
      />
    </div>
  );
};

export default OurMission;