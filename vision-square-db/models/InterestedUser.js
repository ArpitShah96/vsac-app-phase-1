const mongoose = require("mongoose");

const interestedUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: {
      type: String,
      required: true,
      match: [
        /^(?:\+?\d{1,3})?[-.\s]?(\d{2,3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
        "Please enter a valid mobile number. It can include optional country code, spaces, dashes, or parentheses.",
      ],
    },
    service: { type: String, required: true },
    slot: { type: String, required: true, unique: true }, // Ensure slot is unique
  },
  { timestamps: true }
);

module.exports = mongoose.model("InterestedUser", interestedUserSchema);
