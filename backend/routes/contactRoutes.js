import express from "express";
import mongoose from "mongoose";
import { contactSchema } from "../models/CommentSchema.js";
import { appendToSheet } from "../utils/GoogleSheet.js";

const Contact = mongoose.model("Contact", contactSchema, "contact");
const router = express.Router();

const SHEET_ID = "1aW64tOdK0n-hDj5kNg32nX6_mnJKMAKJcpAVpot2iRY";

router.post("/", async (req, res) => {
  console.log("[contactRoutes] POST /api/contact invoked", { pid: process.pid, time: new Date().toISOString(), bodyPreview: { firstName: req.body?.firstName, email: req.body?.email } });

  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const saved = await Contact.create(req.body);
    console.log("[contactRoutes] saved to DB", { id: saved._id });
    try {
      console.log("[contactRoutes] calling appendToSheet", { sheetId: SHEET_ID });
      const appendResult = await appendToSheet(SHEET_ID, [
        [firstName, lastName, email, phone, message, new Date().toISOString()],
      ]);
      console.log("[contactRoutes] appendToSheet resolved", { appendResult });
      return res.json({ success: true, data: saved, sheet: appendResult, message: "Contact form submitted successfully" });
    } catch (sheetErr) {
      console.error("[contactRoutes] appendToSheet failed:", sheetErr);
      return res.json({ success: true, data: saved, sheetError: sheetErr.message, message: "Contact saved but sheet append failed" });
    }
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
