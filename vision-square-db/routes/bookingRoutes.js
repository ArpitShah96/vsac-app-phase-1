const express = require("express");
const router = express.Router();
const { handleBooking, getAvailableSlots } = require("../controllers/bookingController");

router.post("/", handleBooking);
router.get("/slots", getAvailableSlots);

module.exports = router;