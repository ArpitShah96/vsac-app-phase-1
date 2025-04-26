import React from "react";
import ComponentReader from "../ui/ComponentReader";
import AboutUsImage from "/src/assets/images/AboutUsImage.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ComponentReader
        imagePosition="left"
        heading="About Vision Square Abroad Consultancy"
        headingColor="text-blue-950"
        headingSize="text-4xl sm:text-5xl font-extrabold tracking-tight"
        image={AboutUsImage}
        imageHeight="h-72 md:h-[600px]"
        imageWidth="w-full md:w-[95%]"
        imageRounded="rounded-2xl border-4 border-white shadow-2xl"
        imageClassName="hover:scale-105 transition-transform duration-500 ease-in-out"
        border="border-0"
        bgColor="bg-gradient-to-r from-gray-100 to-blue-100"
        shadow="shadow-2xl"
        paragraphs={[
          "Vision Square Abroad Consultancy is a premier overseas education consultancy with 5+ years of experience guiding students to top universities worldwide. Our expert counselors have helped 500+ students achieve their study abroad dreams in the UK, USA, Canada, Australia, and Europe.",

          "Our services include IELTS/TOEFL coaching, SOP/LOR preparation, education loan assistance, and accommodation support. We maintain strong relationships with top-ranked institutions like University of Toronto, University of Manchester, University of Sydney, and many more.",

          "What sets us apart:",
          "• 100% free profile evaluation and career counseling",
          "• End-to-end application support with 24/7 availability",
          "• Scholarship guidance up to 100% tuition coverage",
          "• Post-landing support including airport pickup",
          "• Transparent pricing with no hidden fees",
        ]}
        paragraphClassName="text-gray-600 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed"
        contentColumnClasses="flex-[1.5]"
        imageColumnClasses="flex-1"
        className="mb-20 hover:shadow-2xl transition-shadow duration-500 ease-in-out rounded-xl"
      />

      {/* Additional SEO-rich sections */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        <ComponentReader
          heading="Why Study Abroad?"
          headingColor="text-blue-950"
          bgColor="bg-gradient-to-r from-gray-100 to-blue-50"
          paragraphs={[
            "• Global recognition for your degree",
            "• Exposure to diverse cultures",
            "• Better career opportunities worldwide",
            "• Potential for immigration pathways",
          ]}
          paragraphClassName="text-gray-600 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed"
          className="shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out p-6 border border-gray-200"
        />

        <ComponentReader
          heading="Our Success Stats"
          headingColor="text-red-700"
          bgColor="bg-gradient-to-r from-gray-100 to-blue-50"
          paragraphs={[
            "✓ 500+ students placed",
            "✓ 98% visa approval rate",
            "✓ 500+ university tie-ups",
            "✓ 15+ destination countries",
          ]}
          paragraphClassName="text-gray-600 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed"
          className="shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out p-6 border border-gray-200"
        />

        <ComponentReader
          heading="Popular Destinations"
          headingColor="text-blue-950"
          bgColor="bg-gradient-to-r from-gray-100 to-blue-50"
          paragraphs={[
            "USA: STEM programs, OPT opportunities",
            "UK: 1-year masters, post-study visa",
            "Australia: High employability rate",
            "Germany: Low tuition fees",
          ]}
          paragraphClassName="text-gray-600 text-base md:text-sm lg:text-base xl:text-lg leading-relaxed"
          className="shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out p-6 border border-gray-200"
        />
      </div>
    </div>
  );
};

export default AboutUs;
