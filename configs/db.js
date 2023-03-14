import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.PORT)
export default () => {
    return mongoose.connect(process.env.MONGO_PATH);
};

