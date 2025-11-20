import express from "express";
import mongoose from "mongoose";
import { contactSchema } from "../models/CommentSchema.js";

const Contact = mongoose.model("Contact", contactSchema, "contact");
const router = express.Router();


router.post("/", async (req, res) => {
  console.log("[contactRoutes] POST /api/contact invoked", { pid: process.pid, time: new Date().toISOString(), bodyPreview: { firstName: req.body?.firstName, email: req.body?.email } });

  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const saved = await Contact.create(req.body);
    console.log("[contactRoutes] saved to DB", { id: saved._id });
    
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
