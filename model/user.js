import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        Type: String,
        required,
    },
    email: {
        Type: String,
        required,
        unique: true,
    },
    password: {
        Type: String,
        required,
    }
});

export const User = new mongoose.model('user', userSchema);
