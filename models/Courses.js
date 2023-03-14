import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        image: String,
        eligibility: String,
        courseName: String,
        startingDate: String,
        duration: String,
        coursePrice: Number
    },
    {
        versionKey: false
    }

);

const Course = mongoose.model("Course",CourseSchema);
export default Course;