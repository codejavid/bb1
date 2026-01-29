import express from "express";
import { getThoughts } from "../controllers/thoughtController.js";

const router = express.Router();

router.get("/", getThoughts);

export default router;