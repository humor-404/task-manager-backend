import express from 'express';
import { config } from 'dotenv';
import router from './routes/authRoute.js';
import { connectToDb } from './database/connection.js';

const app = express();

connectToDb();

app.use('/api/user/', router);

config();
const PORT = process.env.PORT || 8003;

app.listen(PORT, (req, res) => {
    console.log("Server running at ", PORT);
});