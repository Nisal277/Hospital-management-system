import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// Health check route — confirms the server is alive
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Hospital Management API is running" });
});

// Auth routes will be mounted here in Step 3:
app.use("/api/auth", authRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
