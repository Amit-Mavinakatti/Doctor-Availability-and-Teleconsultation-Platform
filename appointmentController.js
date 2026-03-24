const Appointment = require("../models/Appointment");

// CREATE APPOINTMENT
exports.createAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date, time } = req.body;

    const appointment = new Appointment({
      patientId,
      doctorId,
      date,
      time
    });

    await appointment.save();

    res.json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL APPOINTMENTS
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patientId")
      .populate("doctorId");

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};