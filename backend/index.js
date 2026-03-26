import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoute from "./routes/contact.route.js";
import resumeRoute from "./routes/resume.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:8080"];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoute);
app.use("/api/resume", resumeRoute);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
