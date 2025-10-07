import express from "express";
import { calculateROI } from "../utils/calculations.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const results = calculateROI(req.body);
    res.json({ success: true, results });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
