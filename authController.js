const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check user exists
    let user = await User.findOne({ email });
    if (user) return res.json({ message: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({ message: "User registered", user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({ message: "Login success", user, token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};