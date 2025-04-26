const { google } = require("googleapis");
const { oauth2Client } = require("../config/googleAuth");

// Initialize the Google Calendar API
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// 📌 Add Event to Google Calendar
async function addEventToCalendar({ name, email, service, slot }) {
  const timeZone = "Europe/Berlin"; // Set the desired time zone (e.g., Europe/Berlin)

  const event = {
    summary: `${service} Consultation with ${name}`,
    description: `User Email: ${email}`,
    start: {
      dateTime: new Date(slot).toISOString(),
      timeZone: timeZone, // Specify time zone for start
    },
    end: {
      dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(),
      timeZone: timeZone, // Specify time zone for end
    }, // 30 minutes duration
    attendees: [{ email }],  // Attendee is the person who booked the appointment
  };

  try {
    // Insert the event into Google Calendar
    const response = await calendar.events.insert({
      calendarId: "arpit.visionsquare@gmail.com",
      resource: event,
    });
    
    // Return the response containing event details, including the link
    return response.data;
  } catch (error) {
    console.error("❌ Error adding event to Google Calendar:", error);
    throw error;
  }
}

module.exports = { addEventToCalendar };
