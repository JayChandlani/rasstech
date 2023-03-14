import express from 'express';
import { updateCourseData } from '../controllers/auth.controller.js';
import { checkout, paymentVerification } from '../controllers/order.controller.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/checkout', verifyToken, checkout);
router.post('/paymentverification', verifyToken, paymentVerification);
router.patch('/api/order', verifyToken, updateCourseData);

export default router