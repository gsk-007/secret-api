// const express = require("express");
// const connectDB = require("./config/db");
// const cors = require("cors");

import express from "express";
import cors from "cors";

import ConnectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
// import User from "./models/User.js";
// import Secret from "./models/Secret.js";
// import { users, secrets } from "./seeder.js";

const app = express();

// connect database
ConnectDB();
app.use(express.json());
app.use(cors());

//Init middleware
// extended: false to use simple json parser
// : true to use more powerful json parser
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "hi" });
});
app.use("/auth", authRoutes);

// define routes

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// add data only once
// User.insertMany(users);
// Secret.insertMany(secrets);
