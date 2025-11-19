import express from "express";
import mongoose from "mongoose";
import { membershipSchema } from "../models/MemberhsipSchema.js";
import { appendToSheet } from "../utils/GoogleSheet.js";

const Membership = mongoose.model("Membership", membershipSchema, "membership");
const router = express.Router();

const SHEET_ID = "1aW64tOdK0n-hDj5kNg32nX6_mnJKMAKJcpAVpot2iRY";

router.post("/", async (req, res) => {
  try {
    const { firstName, address, email, businessFirm, businessAddress, phone } = req.body;

    // Save to MongoDB
    const saved = await Membership.create(req.body);

    // Save to Google Sheet
    await appendToSheet(SHEET_ID, [
      [firstName, address, email, businessFirm, businessAddress, phone, new Date().toISOString()]
    ]);

    res.json({ success: true, data: saved, message: "Membership form submitted successfully" });
  } catch (err) {
    console.error("Membership error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
