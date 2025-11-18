import express from "express";
import { membershipSchema } from "../models/MemberhsipSchema.js";
import mongoose from "mongoose";
import { SendEmail } from "../utils/SendEmail.js";

const Membership = mongoose.model("Membership", membershipSchema, "membership");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      address,
      email,
      businessFirm,
      businessAddress,
      phone,
    } = req.body;

    // Save to DB
    const saved = await Membership.create(req.body);

    // Send email
    await SendEmail(
      "New Membership Application",
      `
        <h2>New Membership Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firm:</strong> ${businessFirm}</p>
        <p><strong>Firm Address:</strong> ${businessAddress}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `
    ).catch(err => console.error("Email send failed:", err));

    res.json({ success: true, data: saved, message: "Membership form submitted successfully" });

  } catch (err) {
    console.error("Membership error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;