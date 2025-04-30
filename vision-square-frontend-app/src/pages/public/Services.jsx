import React, { useState } from "react";
import ServiceCard from "../../components/services/ServiceCard";
import BookingModal from "../../components/booking/BookingModal";

// ✅ Correct Imports from public → assets
import touristVisaImage from "../../assets/images/TouristVisa.jpg";
import educationVisaImage from "../../assets/images/EducationVisa.jpg";
import familyReunionVisaImage from "../../assets/images/FamilyReunionVisa.jpg";
import jobSeekerVisaImage from "../../assets/images/JobSearchVisa.jpg";
import abroadSettlementImage from "../../assets/images/AbroadSettelmentVisa.jpg";

const services = [
  {
    title: "Tourist Visa",
    description: "Assistance in applying for tourist visas to various countries.",
    image: touristVisaImage,
    detailedDescription:
      "A Tourist Visa allows you to visit a country for leisure or tourism purposes...",
  },
  {
    title: "Education Visa",
    description: "Guidance for students applying for study visas.",
    image: educationVisaImage,
    detailedDescription:
      "We provide comprehensive assistance for students applying for study visas...",
  },
  {
    title: "Family Reunion Visa",
    description: "Helping families reunite with loved ones abroad.",
    image: familyReunionVisaImage,
    detailedDescription:
      "We specialize in Family Reunion Visas to help you reunite with your loved ones...",
  },
  {
    title: "Job Seeker Visa",
    description: "Helping professionals with job and work visas.",
    image: jobSeekerVisaImage,
    detailedDescription:
      "We assist skilled professionals with obtaining job seeker and work visas...",
  },
  {
    title: "Abroad Settlement Options",
    description: "Guidance on work-and-study or permanent settlement.",
    image: abroadSettlementImage,
    detailedDescription:
      "Explore work-and-study opportunities like Ausbildung in Germany, Canada migration options, and more...",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingSubmit = async (formData) => {
    try {
      await fetch("https://vsac-app-backend.vercel.app/api/book/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Booking submission failed:", error);
      throw error;
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              detailedDescription={service.detailedDescription}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitBooking={handleBookingSubmit}
      />
    </section>
  );
};

export default Services;
