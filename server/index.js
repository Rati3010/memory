import cors from 'cors';
import express from 'express';
import * as dotenv from "dotenv";
import { connection } from './Config/db.js';
import postRoutes from './routes/posts.js'
const app = express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());
app.use('/posts',postRoutes)
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to the database successfully PORT',process.env.port)
    } catch (error) {
        console.log('Failed to connect the database')
    }

})

// app.use(bodyParser.json({limit:'30mb',extended:true}))