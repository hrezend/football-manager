import 'reflect-metadata';
import "express-async-errors";
import cors from 'cors';
import createConnection from './database';
import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import { AppError } from './utils/errors/AppError';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message});
    }
    return response.status(500).json({
        status: "Error", 
        message:`Internal Server Error ${err.message}`
    });
});

export { app }