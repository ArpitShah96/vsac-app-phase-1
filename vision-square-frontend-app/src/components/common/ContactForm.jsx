import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../../validation/contactSchema";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Send data to backend
      const response = await axios.post("https://vsac-app-backend.vercel.app/api/contact", data);
  
      // Handle successful response
      if (response.status === 201) { // Adjusted to correct status code
        console.log("Form submitted successfully:", response.data.message);
        reset(); // Clear the form after successful submission
      }
    } catch (error) {
      // Error handling with more detailed message
      const errorMessage = error.response?.data?.message || error.message || "An error occurred. Please try again later.";
      console.error("Submission error:", errorMessage);
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
            className={`w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email & Mobile */}
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="you@example.com"
              className={`w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="md:w-1/2">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              id="mobile"
              {...register("mobile")}
              placeholder="e.g. 9876543210"
              className={`w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            {...register("subject")}
            className={`w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Abroad Education">Abroad Education</option>
            <option value="Visa Guidance">Visa Guidance</option>
            <option value="Scholarship Assistance">Scholarship Assistance</option>
            <option value="Accommodation Support">Accommodation Support</option>
            <option value="Abroad Settelment">Abroad Settelment</option>
            <option value="Career Counseling">Career Counseling</option>
            <option value="Job Placement">Job Placement</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows="5"
            placeholder="Write your message..."
            className={`w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </div>

        {/* Success Message */}
        {isSubmitSuccessful && (
          <p className="text-green-600 text-center mt-4">
            Thank you! Your message has been received.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
