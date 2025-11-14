import { contactSchema } from "../models/CommentSchema.js";
import mongoose from "mongoose";

const Contact = mongoose.model("Contact", contactSchema, "contact");

export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({
      message: "Contact form submitted successfully",
      contact: newContact
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error" });
  }
};
