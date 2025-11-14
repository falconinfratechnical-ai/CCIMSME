import { membershipSchema } from "../models/MemberhsipSchema.js";
import mongoose from "mongoose";

const Membership = mongoose.model("Membership", membershipSchema, "membership");

export const createMembership = async (req, res) => {
  try {
    const newMembership = new Membership(req.body);
    await newMembership.save();
    res.status(201).json({
      message: "Membership form submitted successfully",
      membership: newMembership
    });
  } catch (error) {
    console.error("Error saving membership:", error);
    res.status(500).json({ message: "Server error" });
  }
};
