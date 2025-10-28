import mongoose from "mongoose";

export function connectToDb() {
    mongoose
        .connect("mongodb://127.0.0.1:27017/task")
        .then(() => console.log("MongoDb connected"))
        .catch((e) => console.log("cannot connect to database", e));
}