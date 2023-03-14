import express from "express";
import { getUserData, login, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get('/user', verifyToken, getUserData);
export default router;
