import express from 'express';
// import stockRoutes from './routes/stockRoutes';
import dotenv from 'dotenv';
import connectDB from './config/db';
import categoryRouter from './routes/CategoryRoute';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

// app.use('/api/stocks', stockRoutes);
app.use('/api/categories', categoryRouter);

export default app;
