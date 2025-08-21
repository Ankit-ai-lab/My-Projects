const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "recruiter", "seeker"],
    default: "seeker" // default is seeker
  },
  skills: [String],   // for seekers
  company: String,    // for recruiters
  referredBy: String, // referral code if used
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
