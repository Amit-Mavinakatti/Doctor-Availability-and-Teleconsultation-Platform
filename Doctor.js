const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  specialization: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);