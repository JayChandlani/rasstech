import mongoose from "mongoose";

const HiringFormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        designation: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
        },
        phone: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const Hirer = mongoose.model("Hirer", HiringFormSchema);
export default Hirer;