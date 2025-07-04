import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Create JWT token function (shared for both register and login)
const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    // Check if user exists (redundant, can be removed since 'exists' already checks)
    // const existingUser = await userModel.findOne({ email });
    // if (existingUser) {
    //   return res.json({ success: false, message: "Email already registered" });
    // }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please Enter Strong password" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();

    const token = createToken(user._id);
    res.json({ success: true, token });

    // Remove duplicate response
    // res.json({ success: true, message: "Registration successful" });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res.json({ success: false, message: "Email and password required" });
    }

    // Check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Use the shared createToken function
    const token = createToken(user._id);

    res.json({
      success: true,
      token,
      user: { username: user.username, email: user.email }
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { registerUser, loginUser };