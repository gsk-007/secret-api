import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    apiKey: {
      type: String,
      // required: true,
    },
    plan: {
      type: Number,
      //   required: true,
      default: 1,
    },
    remainingApiCalls: {
      type: Number,
      //   required: true,
    },
    remainingApiCallsToday: {
      type: Number,
      default: 25,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
