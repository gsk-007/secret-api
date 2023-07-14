import express from "express";
import User from "../models/User.js";
import Stripe from "stripe";
import bcrypt from "bcrypt";
import config from "config";

const frontendURL = process.env.FRONTEND_URL || config.get("frontendURL");

const apiCalls = [25, 75, 150];

const stripe = Stripe(
  "sk_test_51NOEtKSEgdXGUOzRoPgzRP601EUK7cLMNgNf7h29LixVQN1ANkipOn5f3RDhgIMjXcsnr4OCCwYSjEHC3QEG27Ja00dUlCJgcA"
);

export const doPayment = async (req, res) => {
  const { plan, email } = req.body;

  let userEmail = email;

  if (plan < 2 || plan > 3 || typeof plan !== "number") {
    return res.status(303).json({ url: frontendURL });
  }
  // email encryption.
  const salt = await bcrypt.genSalt(10);
  let userEmailHash = await bcrypt.hash(userEmail, salt);
  // const saltRounds = 10;
  // var userEmailHash;
  // bcrypt.hash(userEmail, saltRounds, function (err, hash) {
  //   userEmailHash = hash;
  // });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1NTTx7SEgdXGUOzRU9Hsn7c5",
          quantity: 1,
        },
      ],
      mode: "payment",
      // success_url: `${frontendURL}/payment/${userEmailHash + plan.toString()}`,
      success_url: `${frontendURL}/payment?token=${
        userEmailHash + plan.toString()
      }&status=true`,
      cancel_url: `${frontendURL}/payment?status=false`,
    });

    // console.log(session.url);
    return res.status(200).json({ url: session.url });
    // res.redirect(303, session.url);
  } catch (error) {
    console.log(error.message);
  }
};

export const setPlan = async (req, res) => {
  const { token, email, id } = req.body;
  const userEmail = email;
  const plan = Number(token.substring(token.length - 1));
  const emailHash = token.substring(0, token.length - 1);
  // let isMatch;
  const isMatch = await bcrypt.compare(userEmail, emailHash);
  // bcrypt.compare(userEmail, emailHash, function (err, result) {
  //   isMatch = result == true;
  // });
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials." });
  }
  try {
    // update the plan of user
    const savedUser = await User.findByIdAndUpdate(
      id, // user id
      { $set: { plan: plan, remainingApiCallsToday: apiCalls[plan - 1] } }
    );
    res.status(200).json({ msg: "plan updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
