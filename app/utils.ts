"use server";

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const schema = new mongoose.Schema({
  name: String,
  count: String,
});

const model = mongoose.model("ValentineName", schema);

export const saveToDb = async (newName: string, count: number) => {
  try {
    const op = await model.create({ name: newName, count: String(count) });
    console.log(op);
  } catch (error) {
    console.error("Error saving to db:", error);
  }
};
