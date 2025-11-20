import express from "express";
import mongoose from "mongoose";
import { membershipSchema } from "../models/MemberhsipSchema.js";


const Membership = mongoose.model("Membership", membershipSchema, "membership");
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { firstName, address, email, businessFirm, businessAddress, phone } = req.body;

    // Save to MongoDB
    const saved = await Membership.create(req.body);
 
    res.json({ success: true, data: saved, message: "Membership form submitted successfully" });
  } catch (err) {
    console.error("Membership error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
