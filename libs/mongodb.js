import mongoose from "mongoose";

const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongo db")
    } catch (error) {
        console.log("Failed to connect to db ",error)
    }
}

export default connectMongoDB