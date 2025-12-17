import { userModel } from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

export const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Login failed" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

export const registerUser = async (req, res) => {
    const { email, username: usernameFromBody, password } = req.body;
    const username = (usernameFromBody || req.body.name || '').trim();

    if (!email || !username || !password) {
        return res.status(400).json({ success: false, message: 'Please provide email, username and password' });
    }

    try {
        //check user if already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists!" });
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email!" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a password with at least 8 characters" });
        }

        if (username.length < 3) {
            return res.status(400).json({ success: false, message: "Username must be at least 3 characters" });
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            username: username,
            email: email.trim().toLowerCase(),
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, message: "Registration successful", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Registration failed!" });
    }
}