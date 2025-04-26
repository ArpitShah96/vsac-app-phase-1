const express = require("express");
const router = express.Router();
const ContactForm = require("../models/ContactForm");

router.post("/", async (req, res) => {
  try {
    // Log the entire request body (all form details entered by the user)
    console.log("Contact Form Submitted:", req.body);

    const { name, email, mobile, subject, message } = req.body;

    // Add some basic validation here if needed
    if (!name || !email || !mobile || !subject || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newContact = new ContactForm({
      name,
      email,
      mobile,
      subject,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});



router.get("/", async (req, res) => {
  try {
    const contacts = await ContactForm.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
