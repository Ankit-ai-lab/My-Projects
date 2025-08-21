const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  resume: String,       // file path
  coverLetter: String,
  status: {
    type: String,
    enum: ["applied", "shortlisted", "interview", "hired", "rejected"],
    default: "applied"
  },
  score: Number // used for ranking
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
