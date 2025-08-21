const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true
  },
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["scheduled", "completed", "canceled"],
    default: "scheduled"
  },
  feedback: String
}, { timestamps: true });

module.exports = mongoose.model("Interview", interviewSchema);
