const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  date: String,
  time: String,
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);