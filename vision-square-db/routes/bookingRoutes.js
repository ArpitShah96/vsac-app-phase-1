// 📂 /routes/bookingRoutes.js
// ✅ This file defines booking-related API routes.

const express = require("express");
const router = express.Router();
const { handleBooking, getAvailableSlots } = require("../controllers/bookingController");

// 📬 Route to create a new booking
router.post("/", handleBooking);

// 📥 Route to fetch available slots
router.get("/slots", getAvailableSlots);

module.exports = router;
