import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      phone
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);

    } catch (error) {
      if (error.keyPattern.phone) {
        res.status(400).json({ message: "Phone Number is Already Registered" });
      } else {
        res.status(400).json({ message: "Email Id Already Registered" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCourseData = async (req, res) => {
  try {

    const userId = req.user.id
    const user = await User.findOne({ _id: req.user.id });
    const previousPurchasedCourses = user.purchasedCourses
    const updatedUserData = await User.findByIdAndUpdate(
      userId,
      { purchasedCourses: [...previousPurchasedCourses, req.body] }
    );
    res.status(200).json(updatedUserData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getUserData = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });

  }
}