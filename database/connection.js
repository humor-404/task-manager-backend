import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export function connectToDb() {
    mongoose
        .connect(process.env.database_id)
        .then(() => console.log("MongoDb connected"))
        .catch((e) => console.log("cannot connect to database", e));
}
