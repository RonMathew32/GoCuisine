import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({limit: '16kb'}))
app.use(express.static("public"))
app.use(express.urlencoded({extended: true, limit: '16kb'}))

app.use('/api/v1/users', userRouter)

export {app}