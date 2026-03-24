const express = require("express");
const router = express.Router();

const { createDoctor, getDoctors } = require("../controllers/doctorController");

router.post("/", createDoctor);
router.get("/", getDoctors);
router.get("/test", (req, res) => {
  res.send("Doctor route working ✅");
});

module.exports = router;