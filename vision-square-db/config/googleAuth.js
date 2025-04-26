const { google } = require("googleapis");

// Load credentials from environment variables
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};

// Validate credentials are present
if (!credentials.client_email || !credentials.private_key) {
  console.error("Invalid credentials: client_email or private_key is missing.");
  process.exit(1);
}

// JWT Authentication Client for Service Account
const oauth2Client = new google.auth.JWT(
  credentials.client_email,
  null,            // No need for a key file when using a service account
  credentials.private_key,
  ["https://www.googleapis.com/auth/calendar"],  // Scopes required for Calendar API access
  null            // No user for impersonation
);

// Initialize the Google Calendar API
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

module.exports = { oauth2Client, calendar };
