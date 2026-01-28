import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// load environment variables
dotenv.config();

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port1 ${PORT}`);
});