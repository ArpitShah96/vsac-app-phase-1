const { oauth2Client, SCOPES } = require("../config/googleAuth");
const { google } = require("googleapis");
const InterestedUser = require("../models/InterestedUser");
const generateSlots = require("../data/availableSlots").default;

// Initialize Google Calendar API
const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// 📌 Handle Booking
const handleBooking = async (req, res) => {
  try {
    const { name, email, mobile, service, slot } = req.body;

    // Step 1: Check if the requested slot is in the upcoming available list
    const validSlots = generateSlots(7); // next 7 days
    if (!validSlots.includes(slot)) {
      return res.status(400).json({ error: "Invalid or unavailable slot." });
    }

    // Step 2: Check if the slot is already booked
    const alreadyBooked = await InterestedUser.findOne({ slot, email });
    if (alreadyBooked) {
      return res.status(409).json({ error: "This slot is already booked." });
    }

    // Step 3: Save new booking to the database
    const newBooking = new InterestedUser({ name, email, mobile, service, slot });
    await newBooking.save();

    console.log("\n✅ New Booking Received:", req.body);

    // Step 4: Add to Google Calendar
    const calendarResponse = await addEventToCalendar({ name, email, service, slot });
    console.log("📅 Event added to Google Calendar:", calendarResponse.htmlLink);

    res.status(201).json({
      message: "Booking successful! Event added to Google Calendar.",
      calendarLink: calendarResponse.htmlLink,
    });
  } catch (error) {
    console.error("❌ Booking Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Get Available Slots
const getAvailableSlots = async (req, res) => {
  try {
    const allSlots = generateSlots(7);
    const takenSlots = await InterestedUser.find({}).select("slot -_id");
    const taken = takenSlots.map((s) => s.slot);
    const available = allSlots.filter((slot) => !taken.includes(slot));
    res.json({ available });
  } catch (error) {
    console.error("❌ Failed to fetch available slots", error);
    res.status(500).json({ message: "Server error while fetching slots" });
  }
};

// 📌 Add Event to Google Calendar
const addEventToCalendar = async ({ name, email, service, slot }) => {
  const event = {
    summary: `${service} Consultation with ${name}`,
    description: `User Email: ${email}`,
    start: { dateTime: new Date(slot).toISOString(), timeZone: 'UTC' },
    end: {
      dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(),
      timeZone: 'UTC',
    },
    // attendees: [{ email }], // only if using OAuth with user permission
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'arpit.visionsquare@gmail.com', // ✅ Final calendar ID here
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
