const Doctor = require("../models/Doctor");


exports.createDoctor = async (req, res) => {
  try {
    const { userId, specialization } = req.body;

    const doctor = new Doctor({
      userId,
      specialization
    });

    await doctor.save();

    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("userId");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};