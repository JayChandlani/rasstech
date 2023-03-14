import mongoose from "mongoose";

const CareerFormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
        },
        profile: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const Candidate = mongoose.model("Candidate", CareerFormSchema);
export default Candidate;