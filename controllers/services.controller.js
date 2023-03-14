import Candidate from "../models/CareerForm.js";
import Hirer from "../models/hireingForm.js";
import Inquiry from "../models/Inquiry.js";


export const inquiryForm = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            message
        } = req.body;
        const formData = new Inquiry({
            name: fullName, email, phone: phoneNumber, message
        });
        try {
            await formData.save();
            res.status(200).json({ message: "Form Submitted" });
        } catch (error) {
            res.status(400).json({ message: "Some Error Occured" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const careerFrom = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, message, profile } = req.body;
        const formData = new Candidate({
            name: fullName,
            email,
            phone: phoneNumber,
            message,
            profile
        });
        try {
            await formData.save();
            res.status(200).json({ message: "Application Submitted" });
        } catch (error) {
            res.status(400).json({ message: "Some Error Occured" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
export const hireingForm = async (req, res) => {
    try {
        const { fullName, designation, company, email, phone,message } = req.body;
        const formData = new Hirer({
            name: fullName,
            designation,
            company,
            email,
            phone,
            message
        });
        try {
            await formData.save();
            res.status(200).json({ message: "Submitted" });
        } catch (error) {
            res.status(400).json({ message: "Some Error Occured" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}