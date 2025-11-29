import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import { connectToDb } from './database/connection.js';

const app = express();
app.use(express.json());

connectToDb();

app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);

config();
const PORT = process.env.PORT || 8003;

app.listen(PORT, (req, res) => {
    console.log("Server running at ", PORT);
});