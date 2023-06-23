import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin123:nicolas12@cluster0.58icag8.mongodb.net/appmernpsicologo?retryWrites=true&w=majority"
    );
    console.log("✅ Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("❌ DB Connection Error");
  }
};
