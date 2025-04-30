import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SlotGrid from "./SlotGrid";

// ✅ Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().min(10, "Mobile must be at least 10 digits").required("Mobile number is required"),
  service: yup.string().required("Please select a service"),
});

const BookingModal = ({ isOpen, onClose, onSubmitBooking }) => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Fetch available slots from backend
  const fetchSlots = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://vsac-app-backend.vercel.app/api/book/slots");
      setSlots(res.data.available || []);
    } catch (err) {
      console.error("❌ Failed to fetch slots:", err);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  // When modal opens, fetch slots
  useEffect(() => {
    if (isOpen) {
      fetchSlots();
    }
  }, [isOpen]);

  // Handle form submit
  const onSubmit = async (data) => {
    if (!selectedSlot) {
      setStatusMessage("Please select a time slot.");
      return;
    }

    try {
      setStatusMessage("Submitting...");

      // Submit booking to parent component (Services.jsx)
      await onSubmitBooking({ ...data, slot: selectedSlot, date: selectedDate });

      toast.success(
        "🎉 Booking Confirmed!\nOur team will get in touch with you shortly regarding your booking."
      );

      reset();
      setSelectedSlot(null);
      fetchSlots();

      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (error) {
      console.error("❌ Booking failed:", error);
      const msg = error.response?.data?.error || "Booking failed.";
      toast.error(msg, { position: "top-right" });
    }
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto shadow-xl transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Book a Free Consultation
        </h2>

        {/* Booking Form */}
        {loading ? (
          <div className="text-center text-blue-500">
            Loading available slots...
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              {...register("mobile")}
              placeholder="Mobile Number"
              className="w-full border px-4 py-2 rounded-lg"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

            <select
              {...register("service")}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Select Service</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Family Reunion">Family Reunion</option>
              <option value="PR & Settlement">PR & Settlement</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}

            {/* Date Picker */}
            <div className="my-4">
              <p className="font-medium mb-2 text-gray-800">Select Appointment Date:</p>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                modifiersClassNames={{
                  selected: "bg-blue-500 text-white rounded-full",
                  today: "text-blue-700 font-bold",
                }}
                className="rounded-lg shadow-md border p-2"
              />
            </div>

            {/* Available Slots */}
            <div>
              <p className="font-medium mb-2 text-gray-800">Available Time Slots:</p>
              {slots.length > 0 ? (
                <SlotGrid
                  slots={slots.filter(
                    (slot) =>
                      new Date(slot).toDateString() ===
                      selectedDate.toDateString()
                  )}
                  selectedSlot={selectedSlot}
                  onSelect={setSelectedSlot}
                />
              ) : (
                <p className="text-gray-500 text-sm">
                  No slots available for this day.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-sm mt-4 text-gray-600">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
