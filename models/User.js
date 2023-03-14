import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        purchasedCourses: {
            type: Array,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }

);

const User = mongoose.model("User", UserSchema);
export default User;