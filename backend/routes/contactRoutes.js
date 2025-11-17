import express from "express";
import mongoose from "mongoose";
import { contactSchema } from "../models/CommentSchema.js";
import { sendEmail } from "../utils/Sendemail.js";

const Contact = mongoose.model("Contact", contactSchema, "contact");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Save to DB
    const saved = await Contact.create(req.body);

    // Send email
    await sendEmail(
      "New Contact Form Submission",
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    );

    res.json({ success: true, data: saved });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;