import express from "express";
import auth from "../middleware/auth.js";
import { doPayment, setPlan } from "../controllers/payment.js";

const router = express.Router();

router.post("/", auth, doPayment);
router.put("/setPlan", auth, setPlan);

export default router;
