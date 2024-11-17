import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(`Error connecting Mongo DB`, error.message)
    }
}

export default connectMongoDB;
