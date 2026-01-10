import express from "express"
import 'dotenv/config'


const app = express();
const port = process.env.PORT;

// db connection
import connectDB from "./config/db.js";
import mongoose from 'mongoose';
await connectDB()

// mongoose debug
mongoose.set('debug', true);


// configure body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port || 3001, () => {
  console.log(`Notification server started at port ${port}`)
})