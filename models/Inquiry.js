import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
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
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const Inquiry = mongoose.model("Visitor", InquirySchema);
export default Inquiry;