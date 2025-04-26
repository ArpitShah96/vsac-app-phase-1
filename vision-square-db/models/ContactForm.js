const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /\S+@\S+\.\S+/ }, // Simple email validation
    mobile: {
      type: String,
      required: true,
      match: /^(\+?\d{1,3}[-\s]?)?(\(?\d{2,3}\)?[-\s]?)?\d{7,15}$/, // Flexible mobile validation
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } // To include createdAt and updatedAt fields automatically
);

module.exports = mongoose.model("Contact", contactSchema); // Export the model
