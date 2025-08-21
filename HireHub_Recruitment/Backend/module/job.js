const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  skillsRequired: [String],
  deadline: Date,
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
