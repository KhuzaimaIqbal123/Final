import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const URI = process.env.MONGO_URI;

const app= express();

app.use(cors());
app.use(express.json());

mongoose.connect(URI);
 
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB connection established successfully");
});

connection.on("error",(err)=>{
    console.log("Error in MongoDB connection",err);
})

connection.on("disconnect",() =>{
    console.log("MongoDB connection disconnected");
});

app.use('/auth',userRoutes);

app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});