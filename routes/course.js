import express from 'express';
import { getAllCourses, getOneCourse } from '../controllers/course.controller.js';

const router = express.Router();

router.get('/course/:id', getOneCourse);
router.get('/courses', getAllCourses);

export default router;