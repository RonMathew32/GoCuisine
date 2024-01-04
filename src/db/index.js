import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    console.log(process.env.MONGODB_URI, 'MONGODB_URI');
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDB host: ', connectionInstance.connection.host);
    } catch (error) {
        console.log('MongoDB Connection FAILED: ',error);
        process.exit(1)
    }
};

export default connectDB;
