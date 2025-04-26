import React from "react";

// ThankYouModal component displayed after successful booking
const ThankYouModal = ({ isOpen, onClose }) => {
  // Don't render modal if it is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full text-center">
        {/* Modal Heading */}
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Thank You!</h2>

        {/* Thank you message */}
        <p className="text-gray-700 leading-relaxed">
          We appreciate your interest in{" "}
          <strong>Vision Square Abroad Consultancy</strong>. <br />
          Our team will get in touch with you shortly regarding your booking.
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 bg-blue-950 text-white rounded hover:bg-blue-900 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
