import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import thoughtRoutes from "./routes/thoughtRoutes.js"

const app = express();

// load environment variables
dotenv.config();

// Middleware
app.use(cors());

// Connect to MongoDB
connectDB().catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

// Routes
app.use("/api/thoughts", thoughtRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port1 ${PORT}`);
});