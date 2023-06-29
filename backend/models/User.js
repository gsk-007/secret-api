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
    token: {
      type: String,
      //   required: true,
    },
    apiKey: {
      type: String,
      // required: true,
    },

    plan: {
      type: String,
      //   required: true,
    },
    remainingApiCalls: {
      type: Number,
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
