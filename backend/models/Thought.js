import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: [100, "Title must be less than 100 characters"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        maxlength: [1000, "Content must be less than 1000 characters"],
    },
    category:{
        type: String,
        required: [true, "Category is required"],
        enum: ["Idea", "Goal", "Quote", "Reminder", "Learning", "Random"],
        default: "Random",
    },
    tags:{
        type: [String],
        default: [],
    },
    isFavorite:{
        type: Boolean,
        default: false,
    },
    
}, {timestamps: true});

const Thought = mongoose.model("Thought", thoughtSchema);

export default Thought;