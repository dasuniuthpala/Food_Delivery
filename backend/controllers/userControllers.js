import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();
        res.json({ success: true, message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });
        res.json({ success: true, token, user: { username: user.username, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}; 