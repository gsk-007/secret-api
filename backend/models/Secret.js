import mongoose from "mongoose";

const secretSchema = new mongoose.Schema(
  {
    secret: {
      type: String,
    },
    person: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Secret = mongoose.model("Secret", secretSchema);

export default Secret;
