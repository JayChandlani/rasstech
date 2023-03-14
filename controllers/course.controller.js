import Course from "../models/Courses.js";

export const getOneCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById( id );
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};