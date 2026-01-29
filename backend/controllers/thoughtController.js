import Thought from "../models/Thought.js";


// @desc Get all thoughts
// @route GET /api/thoughts
// @access Public
export const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}