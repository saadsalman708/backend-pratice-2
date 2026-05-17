import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    rich: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Users" , userSchema);