import express from "express";
import mongoose from "mongoose";
import { contactSchema } from "../models/CommentSchema.js";
import { SendEmail } from "../utils/SendEmail.js";

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
    ).catch(err => console.error("Email send failed:", err));

    res.json({ success: true, data: saved, message: "Form submitted successfully" });

  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;