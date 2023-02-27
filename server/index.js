import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import express from 'express';
import * as dotenv from "dotenv";
import { connection } from './Config/db';

const app = express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the database successfully PORT',process.env.port)
    } catch (error) {
        console.log('Failed to connect to the database')
    }
})

// app.use(bodyParser.json({limit:'30mb',extended:true}))