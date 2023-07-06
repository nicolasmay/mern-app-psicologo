import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("❌ DB Connection Error");
  }
};
