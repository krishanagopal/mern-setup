import express from "express";
import { registerUser,loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Signup route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);


import { protect } from "../middlewares/auth.middlewares.js";

router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "Access granted",
    user: req.user,
  });
});


export default router;
