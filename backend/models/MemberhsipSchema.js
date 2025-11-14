import mongoose from "mongoose";

 export const membershipSchema=new mongoose.Schema({
        firstName: String,
    address: String,
    email: String,
    businessFirm: String,
    businessAddress: String,
    phone: String,
    date: { type: Date, default: Date.now }
})