import express from "express";
import auth from "../middleware/auth.js";
import { register, login, getUser, google_auth } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/googleauth", google_auth);
router.get("/getUser", auth, getUser);

export default router;
