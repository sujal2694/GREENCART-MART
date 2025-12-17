import mongoose from "mongoose";

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://full_stack:full_stack_123@cluster0.nojqt8f.mongodb.net/GreenCart';
    await mongoose.connect(uri);
    console.log('DB Connected...');
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
}