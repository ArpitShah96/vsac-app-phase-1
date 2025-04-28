import React, { useState } from "react";
import ServiceCard from "../../components/services/ServiceCard";
import BookingModal from "../../components/booking/BookingModal";
import ThankYouModal from "../../components/booking/ThankYouModal";

// Sample images
import touristVisaImage from "/images/TouristVisa.jpg";
import educationVisaImage from "/images/EducationVisa.jpg";
import familyReunionVisaImage from "/images/FamilyReunionVisa.jpg";
import jobSeekerVisaImage from "/images/JobSearchVisa.jpg";
import abroadSettlementImage from "/images/AbroadSettlementVisa.jpg";

const Services = () => {
  // State to control booking modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to control thank you modal visibility
  const [showThankYou, setShowThankYou] = useState(false);

  // List of visa services
  const services = [
    {
      title: "Tourist Visa",
      description: "Assistance in applying for tourist visas to various countries.",
      image: touristVisaImage,
      detailedDescription:
        "A Tourist Visa allows you to visit a country for leisure or tourism purposes. We guide you through document requirements, submission procedures, and timelines to ensure smooth processing.",
    },
    {
      title: "Education Visa",
      description: "Guidance for students applying for study visas.",
      image: educationVisaImage,
      detailedDescription:
        "We provide comprehensive assistance for students applying for study visas to countries like the USA, UK, Australia, Germany, and more.",
    },
    {
      title: "Family Reunion Visa",
      description: "Helping families reunite with loved ones abroad.",
      image: familyReunionVisaImage,
      detailedDescription:
        "We specialize in Family Reunion Visas, assisting with the documentation and legal requirements to reunite with family members in countries like the UK, Canada, and Australia.",
    },
    {
      title: "Job Seeker Visa",
      description: "Helping professionals with job and work visas.",
      image: jobSeekerVisaImage,
      detailedDescription:
        "We help skilled professionals navigate the visa process for countries like Germany, Canada, and the UAE to seek employment opportunities.",
    },
    {
      title: "Abroad Settlement Options",
      description: "Guidance on work-and-study or permanent settlement.",
      image: abroadSettlementImage,
      detailedDescription:
        "Explore work-and-study opportunities like Ausbildung in Germany or other settlement options in countries like Canada, Australia, or Germany. We guide you through the entire process.",
    },
  ];

  // Function to handle booking form submission
  const handleBookingSubmission = async (bookingData) => {
    console.log("📥 Received booking data:", bookingData);
    try {
      const response = await fetch(
        "https://vsac-app-backend.vercel.app/api/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await response.json();
      console.log("📤 Server Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      // Show thank you modal on success
      setShowThankYou(true);
    } catch (error) {
      console.error("❌ Booking submission failed:", error);
      alert(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-blue-950 mb-8">
        Our Visa Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Book Consultation Button */}
      <div className="text-center mt-10">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-950 text-white px-6 py-3 rounded-xl hover:bg-blue-900"
        >
          Book Free Consultation
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitBooking={handleBookingSubmission} // ✨ Pass booking submission handler
      />

      {/* Thank You Modal */}
      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </div>
  );
};

export default Services;
