import express from "express"
import 'dotenv/config'
import { sendMail } from "./services/email.service.js";

import { mailerCron } from "./crons/cron.js";

const app = express();
const port = process.env.PORT;

import TicketRoutes from "./routes/ticket.routes.js"

// db connection
import connectDB from "./config/db.js";
import mongoose from 'mongoose';
await connectDB()

// mongoose debug
mongoose.set('debug', true);


// configure body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))


TicketRoutes(app)


app.listen(port || 3001, () => {
  console.log(`Notification server started at port ${port}`) 
  mailerCron();
})