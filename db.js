const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("Error ❌", err);
  }
}

module.exports = connectDB;