import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// All Routes
import productRoutes from "./routes/products.js";

const app = express();

// load environment variables
dotenv.config({
    path:"backend/config/config.env"
});

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
    limit:"10mb"
}));

// Connect to MongoDB
connectDB().catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

// Routes
// app.use("/api/thoughts", thoughtRoutes);
app.use("/api/v1", productRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port1 ${PORT}`);
});