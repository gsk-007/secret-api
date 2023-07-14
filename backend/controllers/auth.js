import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";
import { getAPIkey } from "./utils.js";

const secret = config.get("jwtSecret") || process.env.JWT_SECRET;

/* REGISTER USER */
export const register = async (req, res) => {
  check("name", "please add a name").not().isEmpty();
  check("email", "please include a valid Email").isEmail();
  check(
    "password",
    "please enter a password with 6 or more characters"
  ).isLength({ min: 6 });
  try {
    // console.log("user entered");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log(errors);
      return res.status(400).json({ error: errors.array() });
    }

    // no error, proceed to register
    var { name, email, password } = req.body;

    let dbuser = await User.findOne({ email: email });

    if (dbuser) {
      // we check if user exists in DB.
      return res.status(400).json({ msg: "user already exists." });
    }

    // password encryption.
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    password = passwordHash;

    // create api key
    const key = getAPIkey(email);

    // user doesn't exists in DB, so creating new instance of it to register in DB.
    const newUser = new User({
      name,
      email,
      password,
      apiKey: key,
    });

    const savedUser = await newUser.save();
    // new user added in the DB, now send client a json web token to log him in, protectedly.
    const payload = {
      user: {
        id: savedUser._id,
      },
    };
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// logging in
export const login = async (req, res) => {
  check("email", "please include a valid Email").isEmail();
  check(
    "password",
    "please enter a password with 6 or more characters"
  ).isLength({ min: 6 });

  try {
    // if any error, return.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    const dbuser = await User.findOne({ email: email });

    if (!dbuser) return res.status(400).json({ msg: "user doesn't exists" });

    const isMatch = await bcrypt.compare(password, dbuser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials." });
    }
    // new user added in the DB, now send client a json web token to log him in, protectedly.
    const payload = {
      user: {
        id: dbuser._id,
      },
    };

    jwt.sign(
      payload,
      secret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
      // we need a middleware to add this token in the header for account access.
    );
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  // get and send logged in user
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const google_auth = async (req, res) => {
  try {
    var { name, email } = req.body;
    const password = "google-auth";

    let dbuser = await User.findOne({ email: email });

    // we check if user exists in DB.
    if (!dbuser) {
      // create api key
      const key = getAPIkey(email);
      const newUser = new User({
        name,
        email,
        password,
        apiKey: key,
      });
      await newUser.save();
    }
    // user exists, just pass the token
    const payload = {
      user: {
        id: dbuser._id,
      },
    };
    console.log(payload);

    jwt.sign(
      payload,
      secret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};
