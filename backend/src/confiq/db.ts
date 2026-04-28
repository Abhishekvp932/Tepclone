import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURL = process.env.MONGO_URL;

    if (!mongoURL) {
      throw new Error("MONGO_URL is not set in the environment");
    }

    const conn = await mongoose.connect(mongoURL);
    console.log("Database connected", conn.connection.name);
  } catch (error) {
    console.error("Database connection error", error);
    process.exit(1);
  }
};

export default connectDB;
