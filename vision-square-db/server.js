// server.js

// Load dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import custom modules
const { getAuthUrl, getTokens } = require("./config/googleAuth");
const { oauth2Client } = require("./config/googleAuth");

const app = express();

// Middlewares
app.use(cors({
  origin: ["https://visionsquareedu.in"], // ✅ Frontend domain
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: [
    "Content-Type", "Authorization", "X-CSRF-Token",
    "X-Requested-With", "Accept", "Accept-Version",
    "Content-Length", "Content-MD5", "Date", "X-Api-Version"
  ]
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/contact", require("./routes/contactFormRoutes"));  // Contact Form API
app.use("/api/book", require("./routes/bookingRoutes"));         // Booking API

// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Vision Square API 🚀");
});

// Google OAuth - Step 1
app.get("/auth/google", (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

// Google OAuth - Step 2
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("❌ No Authorization Code received.");
  }

  try {
    const tokens = await getTokens(code);
    res.status(200).json({ message: "✅ Authorization Successful", tokens });
  } catch (error) {
    console.error("❌ Error in OAuth Callback:", error);
    res.status(500).json({ error: "Failed to complete OAuth process" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
