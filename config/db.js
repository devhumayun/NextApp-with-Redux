import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_STRING)
        console.log("MongoDB Connected Successful");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectMongoDB