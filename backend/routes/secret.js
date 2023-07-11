import express from "express";
import { getSecrets } from "../controllers/secret.js";

const router = express.Router();

router.get("/secrets", getSecrets);

export default router;
