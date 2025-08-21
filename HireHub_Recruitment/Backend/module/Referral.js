const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  candidateEmail: {
    type: String,
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "hired", "rejected"],
    default: "pending"
  },
  reward: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Referral", referralSchema);
