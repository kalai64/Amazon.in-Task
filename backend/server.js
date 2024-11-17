import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongoDB from './db/dbConnection.js';
import router from './router/routers.js';

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());

app.use('/', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    connectMongoDB();
    console.log(`Port is running on ${PORT}`)
})
