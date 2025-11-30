import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: String,
    }
}, { timestamps: true });

export const Task = mongoose.model("task", taskSchema);