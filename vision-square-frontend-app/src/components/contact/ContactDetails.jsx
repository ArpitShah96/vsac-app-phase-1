import React from "react";
import {
  LuMapPin,
  LuMail,
  LuPhone,
  LuClock4,
  LuMessageCircle,
} from "react-icons/lu";

const ContactDetails = () => {
  return (
    <div className="w-full md:w-1/3 bg-gray-50 shadow-md rounded-lg p-6 md:ml-6 mt-8 md:mt-0">
      <h3 className="text-xl font-bold text-blue-950 mb-4">Get in Touch</h3>
      <div className="text-gray-700 space-y-4 text-sm">

        <p className="flex items-start">
          <LuMapPin className="text-blue-950 mt-1 mr-2" />
          <span>
            F1-111 Baheti Tower, Ravindra Nagar, Jawahar Marg, <br />
            451001 Khargone, Madhya Pradesh, INDIA
          </span>
        </p>

        <p className="flex items-center">
          <LuMail className="text-blue-950 mr-2" />
          <a
            href="mailto:visionsquare.indore@gmail.com"
            className="hover:text-blue-600 transition"
          >
            visionsquare.indore@gmail.com
          </a>
        </p>

        <p className="flex items-center">
          <LuPhone className="text-blue-950 mr-2" />
          <a
            href="tel:+919876543210"
            className="hover:text-blue-600 transition"
          >
            +91 97008 11333 (Mobile)
          </a>
        </p>

        <p className="flex items-center">
          <LuMessageCircle className="text-green-600 mr-2" />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition"
          >
            +91 91685 14499 (WhatsApp)
          </a>
        </p>

        <p className="flex items-start">
          <LuClock4 className="text-blue-950 mr-2 mt-1" />
          <span>
            <strong>Working Hours:</strong>
            <br />
            Mon – Fri: 10:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 3:00 PM <br />
            Sunday: Closed
          </span>
        </p>
        
      </div>
    </div>
  );
};

export default ContactDetails;
