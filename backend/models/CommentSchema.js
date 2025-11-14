
import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    date: { type: Date, default: Date.now }
}, { collection: 'contact' });
