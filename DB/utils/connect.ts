import Mongoose from "mongoose";
export const connectToDB = async () => {
  try {
    return await Mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log("Error connecting to DB", error);
    throw new Error("Error connecting to DB");
  }
};
