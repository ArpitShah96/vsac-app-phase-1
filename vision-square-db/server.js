const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const { getAuthUrl, getTokens } = require("./config/googleAuth"); // Import Google OAuth functions
const { oauth2Client } = require("./config/googleAuth");

const app = express();

app.use(
  cors({
    origin: ["https://visionsquareedu.in"], // Add your frontend origin here
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-CSRF-Token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Date",
      "X-Api-Version",
    ], // Adjust allowed headers if needed
  })
);
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes

app.use("/", (req, res) => {
  res.send("Welcome to the Vision Square API!");
});
app.use("/api/contact", require("./routes/contactFormRoutes"));
app.use("/api/book", require("./routes/bookingRoutes"));

// OAuth Routes
// Step 1: Redirect user to Google OAuth consent screen
app.get("/auth/google", (req, res) => {
  const authUrl = getAuthUrl(); // Generate the OAuth URL
  res.redirect(authUrl); // Redirect the user to the URL
});

// Step 2: Handle Google OAuth callback (after user grants permission)
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code; // Get the authorization code from the query parameters

  if (!code) {
    return res.status(400).send("No authorization code received.");
  }

  try {
    // Exchange authorization code for access and refresh tokens
    const tokens = await getTokens(code);
    res.status(200).json({ message: "Authorization successful", tokens });
  } catch (error) {
    console.error("Error during OAuth callback:", error);
    res.status(500).json({ error: "Failed to complete OAuth flow" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
