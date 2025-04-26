// routes/contactFormRoutes.js

const express = require("express");
const router = express.Router();
const ContactForm = require("../models/ContactForm");

// 📌 POST /api/contact/ --> Save a new contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    if (!name || !email || !mobile || !subject || !message) {
      return res.status(400).json({ message: "❌ All fields are required." });
    }

    const newContact = new ContactForm({ name, email, mobile, subject, message });
    await newContact.save();

    console.log("✅ New Contact Form Submitted:", req.body);
    res.status(201).json({ message: "✅ Contact form submitted successfully!" });

  } catch (error) {
    console.error("❌ Error saving contact form:", error);
    res.status(500).json({ message: "❌ Internal Server Error", error: error.message });
  }
});

// 📌 GET /api/contact/ --> Fetch all submitted contact forms
router.get("/", async (req, res) => {
  try {
    const contacts = await ContactForm.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contact forms:", error);
    res.status(500).json({ message: "❌ Internal Server Error", error: error.message });
  }
});

module.exports = router;
