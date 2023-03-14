import express from "express";
import { careerFrom, hireingForm, inquiryForm } from "../controllers/services.controller.js";

const router = express.Router();

router.post("/inquiry", inquiryForm);
router.post("/career", careerFrom);
router.post("/hire", hireingForm)
export default router;
