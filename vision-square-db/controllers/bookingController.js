// 📂 /controllers/bookingController.js
// ✅ Controls logic for booking, slot management, and Google Calendar integration.

const { oauth2Client } = require("../config/googleAuth");
const { google } = require("googleapis");
const InterestedUser = require("../models/InterestedUser");
const generateSlots = require("../data/availableSlots");

// Initialize Google Calendar API with auth credentials
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

/**
 * 📌 Handle a new booking request
 * - Validates the slot
 * - Checks if already booked
 * - Saves to MongoDB
 * - Adds event to Google Calendar
 */
const handleBooking = async (req, res) => {
  try {
    const { name, email, mobile, service, slot } = req.body;

    // 1️⃣ Validate slot format
    if (!slot || isNaN(Date.parse(slot))) {
      return res.status(400).json({ error: "Invalid slot format." });
    }

    // 2️⃣ Check if slot is within the next 7 days
    const validSlots = generateSlots(7);
    if (!validSlots.includes(slot)) {
      return res.status(400).json({ error: "Invalid or unavailable slot." });
    }

    // 3️⃣ Check if slot already booked
    const alreadyBooked = await InterestedUser.findOne({ slot });
    if (alreadyBooked) {
      return res.status(409).json({ error: "This slot is already booked." });
    }

    // 4️⃣ Save booking to MongoDB
    const newBooking = new InterestedUser({ name, email, mobile, service, slot });
    await newBooking.save();

    console.log("\n✅ New Booking Received:", req.body);

    // 5️⃣ Add event to Google Calendar
    const calendarResponse = await addEventToCalendar({ name, email, service, slot });

    // ✅ Return success response
    res.status(201).json({
      message: "Booking successful! Event added to Google Calendar.",
      calendarLink: calendarResponse.htmlLink,
    });

  } catch (error) {
    console.error("❌ Booking Error:", error);
    res.status(500).json({ error: "Oops! Something went wrong. Please try again later." });
  }
};

/**
 * 📌 Get Available Slots
 * - Generates next 7 days slots
 * - Filters out already booked slots
 */
const getAvailableSlots = async (req, res) => {
  try {
    const allSlots = generateSlots(7);

    // 📋 Fetch slots already taken from DB
    const takenSlots = await InterestedUser.find({}).select("slot -_id");
    const taken = takenSlots.map((s) => s.slot);

    // 🎯 Remove taken slots
    const available = allSlots.filter((slot) => !taken.includes(slot));
    res.json({ available });
  } catch (error) {
    console.error("❌ Failed to fetch available slots", error);
    res.status(500).json({ message: "Server error while fetching slots" });
  }
};

/**
 * 📌 Add Event to Google Calendar
 * - Automatically books consultation slot on Google Calendar
 */
const addEventToCalendar = async ({ name, email, service, slot }) => {
  const event = {
    summary: `${service} Consultation with ${name}`,
    description: `User Email: ${email}`,
    start: { dateTime: new Date(slot).toISOString(), timeZone: "Asia/Kolkata" },
    end: { dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(), timeZone: "Asia/Kolkata" }, // +30 min
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "arpit.visionsquare@gmail.com",
      resource: event,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error adding event to Google Calendar:", error);
    throw error;
  }
};

module.exports = {
  handleBooking,
  getAvailableSlots,
};
