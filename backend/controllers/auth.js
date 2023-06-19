import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  check("name", "please add a name").not().isEmpty();
  check("email", "please include a valid Email").isEmail();
  check(
    "password",
    "please enter a password with 6 or more characters"
  ).isLength({ min: 6 });
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    // no error, proceed to register
    var { name, email, password } = req.body;

    let dbuser = await User.findOne({ email: email });

    if (dbuser) {
      // we check if user exists in DB.
      return res.status(400).json({ msg: "user already exists." });
    }

    // password encryption.
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    password = passwordHash;

    // user doesn't exists in DB, so creating new instance of it to register in DB.
    const newUser = new User({
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    // new user added in the DB, now send client a json web token to log him in, protectedly.
    const payload = {
      user: {
        id: dbuser._id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
    // res.status(500).send("server error");
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
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const dbuser = await User.findOne({ email: email });
    // console.log(user);
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
    console.log(payload);

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
      // we need a middleware to add this token in the header for account access.
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
    // res.status(500).send("server error");
  }
};

export const getUser = async (req, res) => {
  // get and send logged in user
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    // res.status(500).send("Server Error.");
  }
};

export const google_auth = async (req, res) => {
  try {
    var { name, email } = req.body;
    const password = "google-auth";

    let dbuser = await User.findOne({ email: email });

    // we check if user exists in DB.
    if (!dbuser) {
      const newUser = new User({
        name,
        email,
        password,
      });
      console.log("hi");
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
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
