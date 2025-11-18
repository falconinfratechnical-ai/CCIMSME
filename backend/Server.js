import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import membershipRoutes from "./routes/membershipRoutes.js";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors({
  origin: [
  "https://ccimsme.com",
  "https://www.ccimsme.com",
  "http://localhost:3000",
  "http://localhost:5173",

  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/membership", membershipRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));