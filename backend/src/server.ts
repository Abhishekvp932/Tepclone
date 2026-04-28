import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./confiq/db";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import { seedAdmin } from "./utils/seedAdmin";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
const app: Application = express();

const corsOperation: cors.CorsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOperation));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();
  await seedAdmin();

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
};

startServer();
