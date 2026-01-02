import express from "express";
import { registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Signup route
router.post("/register", registerUser);

export default router;
